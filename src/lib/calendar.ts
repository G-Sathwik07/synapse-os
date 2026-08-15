import { google, calendar_v3 } from "googleapis";
import { prisma } from "@/lib/prisma";

/**
 * Helper to obtain the OAuth2 client for a given user's Google Calendar connection.
 * Handles automatic token refreshing and database persistence of new tokens.
 * If connectedAccountId is provided, targets that specific account connection.
 */
export async function getCalendarOAuth2Client(userId: string, connectedAccountId?: string) {
  const connectedAccount = await prisma.connectedAccount.findFirst({
    where: {
      userId,
      provider: "google_calendar",
      ...(connectedAccountId ? { id: connectedAccountId } : {}),
      accessToken: { not: null },
      refreshToken: { not: null },
    },
  });

  if (!connectedAccount || !connectedAccount.refreshToken) {
    return null;
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );

  oauth2Client.setCredentials({
    access_token: connectedAccount.accessToken || undefined,
    refresh_token: connectedAccount.refreshToken,
    expiry_date: connectedAccount.expiresAt ? connectedAccount.expiresAt.getTime() : undefined,
  });

  // Check if token is expired or about to expire (within 5 minutes)
  const isExpired = connectedAccount.expiresAt
    ? connectedAccount.expiresAt.getTime() < Date.now() + 5 * 60 * 1000
    : true;

  if (isExpired) {
    try {
      const { credentials } = await oauth2Client.refreshAccessToken();
      const newExpiresAt = credentials.expiry_date ? new Date(credentials.expiry_date) : null;

      await prisma.connectedAccount.update({
        where: { id: connectedAccount.id },
        data: {
          accessToken: credentials.access_token || null,
          expiresAt: newExpiresAt,
          scope: credentials.scope || null,
          refreshToken: credentials.refresh_token || connectedAccount.refreshToken, // Preserve existing if none returned
        },
      });
    } catch (err: unknown) {
      console.error(`Failed to refresh Calendar token for user ${userId} (account ${connectedAccount.id}):`, err);

      const errObj = err as Record<string, unknown>;
      const errorMsg = err instanceof Error ? err.message : "";
      const code = errObj?.code;
      const status = errObj?.status;

      // If the refresh token is revoked/invalid, mark as disconnected
      if (
        errorMsg.includes("invalid_grant") ||
        code === "400" ||
        code === 400 ||
        status === 400 ||
        status === "400"
      ) {
        await prisma.connectedAccount.update({
          where: { id: connectedAccount.id },
          data: {
            accessToken: null,
            refreshToken: null,
            expiresAt: null,
            scope: null,
          },
        });
      }
      throw new Error("Google Calendar authorization expired or was revoked. Please reconnect.");
    }
  }

  return { oauth2Client, connectedAccount };
}

/**
 * Discovers and retrieves the list of calendars available to the connected Google account.
 * Updates the ConnectedCalendar records in our database as available but unselected by default.
 */
export async function listAvailableCalendars(userId: string, connectedAccountId: string) {
  const clientInfo = await getCalendarOAuth2Client(userId, connectedAccountId);
  if (!clientInfo) {
    throw new Error("No Google Calendar account connected.");
  }

  const { oauth2Client } = clientInfo;
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const res = await calendar.calendarList.list();
  const calendarList = res.data.items || [];

  const discoveredCalendars = [];

  for (const item of calendarList) {
    if (!item.id) continue;

    // Check if we have an existing calendar record
    const existing = await prisma.connectedCalendar.findFirst({
      where: {
        connectedAccountId,
        googleCalendarId: item.id,
      },
    });

    let calendarRecord;
    if (existing) {
      calendarRecord = await prisma.connectedCalendar.update({
        where: { id: existing.id },
        data: {
          summary: item.summary || "Untitled Calendar",
          description: item.description || null,
          timeZone: item.timeZone || null,
          isPrimary: item.primary || false,
          accessRole: item.accessRole || null,
        },
      });
    } else {
      calendarRecord = await prisma.connectedCalendar.create({
        data: {
          userId,
          connectedAccountId,
          googleCalendarId: item.id,
          summary: item.summary || "Untitled Calendar",
          description: item.description || null,
          timeZone: item.timeZone || null,
          isPrimary: item.primary || false,
          isSelected: false, // Wait for user choice
          accessRole: item.accessRole || null,
        },
      });
    }

    discoveredCalendars.push(calendarRecord);
  }

  return discoveredCalendars;
}

/**
 * Synchronizes events for a specific calendar using Google Calendar incremental sync or full sync.
 * Limits local storage to events ending after 30 days ago and starting before 90 days from now.
 */
export async function syncCalendarEvents(
  userId: string,
  connectedAccountId: string,
  connectedCalendarId: string,
  forceFull = false
) {
  const clientInfo = await getCalendarOAuth2Client(userId, connectedAccountId);
  if (!clientInfo) {
    throw new Error("No Google Calendar account connected.");
  }

  const { oauth2Client } = clientInfo;
  const calendarClient = google.calendar({ version: "v3", auth: oauth2Client });

  const dbCalendar = await prisma.connectedCalendar.findFirst({
    where: {
      id: connectedCalendarId,
      userId,
      connectedAccountId,
    },
  });

  if (!dbCalendar) {
    throw new Error("Connected calendar not found or unauthorized.");
  }

  // Calculate local date sync boundary
  const pastLimit = new Date();
  pastLimit.setDate(pastLimit.getDate() - 30);
  const futureLimit = new Date();
  futureLimit.setDate(futureLimit.getDate() + 90);

  const syncToken = forceFull ? null : dbCalendar.syncToken;
  let pageToken: string | undefined = undefined;
  let hasMore = true;
  let syncCount = 0;
  let deleteCount = 0;

  try {
    while (hasMore) {
      const params: calendar_v3.Params$Resource$Events$List = {
        calendarId: dbCalendar.googleCalendarId,
        showDeleted: true,
        singleEvents: true,
        maxResults: 250,
      };

      if (syncToken) {
        params.syncToken = syncToken;
      }

      if (pageToken) {
        params.pageToken = pageToken;
      }

      let response;
      try {
        response = await calendarClient.events.list(params);
      } catch (err: unknown) {
        // Handle 410 Gone (invalid sync token)
        const errorObj = err as Record<string, unknown> | null;
        if (
          errorObj?.code === 410 ||
          errorObj?.status === 410 ||
          String(err).includes("410")
        ) {
          console.warn(`Sync token expired (410 Gone) for calendar ${dbCalendar.googleCalendarId}. Clearing token and running full sync...`);
          // Clear sync token
          await prisma.connectedCalendar.update({
            where: { id: dbCalendar.id },
            data: { syncToken: null },
          });
          // Recursive full sync call
          return await syncCalendarEvents(userId, connectedAccountId, connectedCalendarId, true);
        }
        throw err;
      }

      const events = response.data.items || [];
      for (const event of events) {
        if (!event.id) continue;

        const isCancelled = event.status === "cancelled" || event.status === "deleted";

        if (isCancelled) {
          // Event deleted or cancelled in Google: remove local record
          await prisma.calendarEvent.deleteMany({
            where: {
              calendarId: dbCalendar.id,
              googleEventId: event.id,
            },
          });
          deleteCount++;
        } else {
          // Parse times
          const startStr = event.start?.dateTime || event.start?.date;
          const endStr = event.end?.dateTime || event.end?.date;
          if (!startStr || !endStr) continue;

          const start = new Date(startStr);
          const end = new Date(endStr);

          // Apply local time window check (past 30 days, next 90 days)
          // If the event falls outside this range, ignore/skip it.
          if (end < pastLimit || start > futureLimit) {
            // If it falls outside the range, we also remove it locally to maintain date boundaries
            await prisma.calendarEvent.deleteMany({
              where: {
                calendarId: dbCalendar.id,
                googleEventId: event.id,
              },
            });
            continue;
          }

          const attendeesStr = event.attendees ? JSON.stringify(event.attendees) : null;
          const isAllDay = !!event.start?.date;

          await prisma.calendarEvent.upsert({
            where: {
              calendarId_googleEventId: {
                calendarId: dbCalendar.id,
                googleEventId: event.id,
              },
            },
            create: {
              userId,
              connectedAccountId,
              calendarId: dbCalendar.id,
              googleEventId: event.id,
              title: event.summary || "(No Title)",
              description: event.description || null,
              location: event.location || null,
              startTime: start,
              endTime: end,
              isAllDay,
              timeZone: event.start?.timeZone || dbCalendar.timeZone || null,
              status: event.status || null,
              htmlLink: event.htmlLink || null,
              organizer: event.organizer?.email || event.organizer?.displayName || null,
              attendees: attendeesStr,
            },
            update: {
              title: event.summary || "(No Title)",
              description: event.description || null,
              location: event.location || null,
              startTime: start,
              endTime: end,
              isAllDay,
              timeZone: event.start?.timeZone || dbCalendar.timeZone || null,
              status: event.status || null,
              htmlLink: event.htmlLink || null,
              organizer: event.organizer?.email || event.organizer?.displayName || null,
              attendees: attendeesStr,
            },
          });
          syncCount++;
        }
      }

      pageToken = response.data.nextPageToken || undefined;
      if (!pageToken) {
        hasMore = false;
        // Save the next sync token from the final page
        if (response.data.nextSyncToken) {
          await prisma.connectedCalendar.update({
            where: { id: dbCalendar.id },
            data: {
              syncToken: response.data.nextSyncToken,
              updatedAt: new Date(),
            },
          });
        }
      }
    }
  } catch (syncErr) {
    console.error(`Sync failed for calendar ${dbCalendar.googleCalendarId}:`, syncErr);
    throw syncErr;
  }

  // Update calendar update timestamp
  await prisma.connectedCalendar.update({
    where: { id: dbCalendar.id },
    data: { updatedAt: new Date() },
  });

  return { syncCount, deleteCount };
}

/**
 * Syncs all selected calendars for a given user or connected account connection.
 */
export async function syncSelectedCalendars(userId: string, connectedAccountId?: string) {
  const selectedCalendars = await prisma.connectedCalendar.findMany({
    where: {
      userId,
      isSelected: true,
      ...(connectedAccountId ? { connectedAccountId } : {}),
      connectedAccount: {
        accessToken: { not: null },
        refreshToken: { not: null },
      },
    },
  });

  let totalSynced = 0;
  let totalDeleted = 0;

  for (const cal of selectedCalendars) {
    try {
      const { syncCount, deleteCount } = await syncCalendarEvents(userId, cal.connectedAccountId, cal.id);
      totalSynced += syncCount;
      totalDeleted += deleteCount;
    } catch (err) {
      console.error(`Failed to sync calendar ${cal.summary} (${cal.id}) during batch sync:`, err);
    }
  }

  // Update connected account's updatedAt timestamp to record last sync time
  if (connectedAccountId) {
    await prisma.connectedAccount.update({
      where: { id: connectedAccountId },
      data: { updatedAt: new Date() },
    });
  }

  return { totalSynced, totalDeleted };
}
