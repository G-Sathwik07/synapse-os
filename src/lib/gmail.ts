import { google, gmail_v1 } from "googleapis";
import { prisma } from "@/lib/prisma";

/**
 * Helper to obtain the OAuth2 client for a given user's Gmail connection.
 * Handles automatic token refreshing and database persistence of new tokens.
 * If connectedAccountId is provided, targets that specific account connection.
 */
export async function getGmailOAuth2Client(userId: string, connectedAccountId?: string) {
  const connectedAccount = await prisma.connectedAccount.findFirst({
    where: {
      userId,
      provider: "google_gmail",
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
      console.error(`Failed to refresh Gmail token for user ${userId} (account ${connectedAccount.id}):`, err);
      
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
      throw new Error("Gmail authorization expired or was revoked. Please reconnect.");
    }
  }

  return { oauth2Client, connectedAccount };
}

/**
 * Recursively parses the Gmail message payload parts to find the plain text body.
 * If no plain text body is found, falls back to stripping HTML tags from an HTML body.
 */
function getEmailBodyText(payload: gmail_v1.Schema$MessagePart): string {
  if (!payload) return "";

  // 1. Check if plain text is available at this level
  if (payload.mimeType === "text/plain" && payload.body?.data) {
    return Buffer.from(payload.body.data, "base64").toString("utf-8");
  }

  // 2. Check parts recursively
  if (payload.parts) {
    for (const part of payload.parts) {
      const body = getEmailBodyText(part);
      if (body) return body;
    }
  }

  // 3. Fallback to HTML if text/plain is not found
  if (payload.mimeType === "text/html" && payload.body?.data) {
    const html = Buffer.from(payload.body.data, "base64").toString("utf-8");
    // Strip HTML tags and simplify white space
    return html
      .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "")
      .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, "")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  return "";
}

/**
 * Normalizes email address headers (e.g. "John Doe <john@example.com>") to a clean format.
 */
function normalizeEmailHeader(headerValue: string): string {
  if (!headerValue) return "";
  return headerValue.trim().replace(/\s+/g, " ");
}

/**
 * Synchronizes the latest Gmail messages for a user and a specific connected account connection.
 * Limit defaults to 20.
 */
export async function syncGmailMessages(
  userId: string,
  connectedAccountId?: string,
  limit: number = 20
) {
  const clientInfo = await getGmailOAuth2Client(userId, connectedAccountId);
  if (!clientInfo) {
    throw new Error("No Gmail account connected.");
  }

  const { oauth2Client, connectedAccount } = clientInfo;

  const gmail = google.gmail({ version: "v1", auth: oauth2Client });

  // List recent messages
  const listRes = await gmail.users.messages.list({
    userId: "me",
    maxResults: limit,
  });

  const messagesList = listRes.data.messages || [];
  let syncCount = 0;
  let newCount = 0;
  let updatedCount = 0;
  let unchangedCount = 0;

  for (const messageRef of messagesList) {
    if (!messageRef.id) continue;

    try {
      const detailRes = await gmail.users.messages.get({
        userId: "me",
        id: messageRef.id,
        format: "full",
      });

      const message = detailRes.data;
      if (!message || !message.payload) continue;

      const headers = message.payload.headers || [];
      const getHeader = (name: string) =>
        headers.find((h: gmail_v1.Schema$MessagePartHeader) => h.name?.toLowerCase() === name.toLowerCase())?.value || "";

      const sender = normalizeEmailHeader(getHeader("from"));
      const recipients = normalizeEmailHeader(getHeader("to"));
      const subject = getHeader("subject");
      const dateHeader = getHeader("date");
      let receivedAt = new Date();
      if (dateHeader) {
        const parsed = new Date(dateHeader);
        if (!isNaN(parsed.getTime())) {
          receivedAt = parsed;
        }
      }

      const bodyText = getEmailBodyText(message.payload);
      const labelIds = message.labelIds || [];
      const isRead = !labelIds.includes("UNREAD");
      const labels = labelIds.join(",");

      const existingMsg = await prisma.emailMessage.findUnique({
        where: {
          userId_gmailMessageId: {
            userId,
            gmailMessageId: messageRef.id,
          },
        },
      });

      if (!existingMsg) {
        newCount++;
      } else if (
        existingMsg.isRead !== isRead ||
        existingMsg.labels !== labels ||
        existingMsg.subject !== subject ||
        existingMsg.snippet !== (message.snippet || null)
      ) {
        updatedCount++;
      } else {
        unchangedCount++;
      }

      // Secure upsert scoped strictly to current user and gmailMessageId
      await prisma.emailMessage.upsert({
        where: {
          userId_gmailMessageId: {
            userId,
            gmailMessageId: messageRef.id,
          },
        },
        create: {
          userId,
          connectedAccountId: connectedAccount.id,
          gmailMessageId: messageRef.id,
          threadId: message.threadId || null,
          sender,
          recipients,
          subject,
          snippet: message.snippet || null,
          bodyText,
          receivedAt,
          isRead,
          labels,
        },
        update: {
          connectedAccountId: connectedAccount.id,
          threadId: message.threadId || null,
          sender,
          recipients,
          subject,
          snippet: message.snippet || null,
          bodyText,
          receivedAt,
          isRead,
          labels,
        },
      });

      syncCount++;
    } catch (msgErr) {
      console.error(`Failed to process Gmail message ${messageRef.id} for user ${userId}:`, msgErr);
    }
  }

  // Update the connected account's updatedAt timestamp to record last sync time
  await prisma.connectedAccount.update({
    where: { id: connectedAccount.id },
    data: { updatedAt: new Date() },
  });

  return {
    success: true,
    count: syncCount,
    newCount,
    updatedCount,
    unchangedCount,
    connectedAccountId: connectedAccount.id,
    email: connectedAccount.email || connectedAccount.providerAccountId,
  };
}
