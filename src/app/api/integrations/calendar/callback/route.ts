import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { google } from "googleapis";
import { prisma } from "@/lib/prisma";
import { listAvailableCalendars } from "@/lib/calendar";

export async function GET(request: Request) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const errorParam = searchParams.get("error");

  if (errorParam || !code) {
    console.error("Calendar OAuth callback error or code missing:", errorParam);
    return NextResponse.redirect(
      new URL("/integrations?error=oauth_failed", request.url)
    );
  }

  const host = request.headers.get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const redirectUri = `${protocol}://${host}/api/integrations/calendar/callback`;

  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      redirectUri
    );

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Retrieve primary calendar details to get owner's email address
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });
    const primaryCalRes = await calendar.calendars.get({ calendarId: "primary" });
    const emailAddress = primaryCalRes.data.id;

    if (!emailAddress) {
      throw new Error("Could not retrieve primary calendar ID/email address.");
    }

    let stableGoogleId = emailAddress;
    try {
      const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
      const userInfo = await oauth2.userinfo.get();
      if (userInfo.data.id) {
        stableGoogleId = userInfo.data.id;
      }
    } catch (userInfoErr) {
      console.warn("Could not fetch Google userinfo ID for calendar, falling back to email:", userInfoErr);
    }

    // Find if there is an existing ConnectedAccount for this user
    const existingAccount = await prisma.connectedAccount.findFirst({
      where: {
        userId: session.user.id,
        provider: "google_calendar",
        OR: [
          { providerAccountId: stableGoogleId },
          { providerAccountId: emailAddress },
          { email: emailAddress },
        ],
      },
    });

    const expiresAtDate = tokens.expiry_date ? new Date(tokens.expiry_date) : null;
    const refreshTokenToStore = tokens.refresh_token || existingAccount?.refreshToken || null;

    let connectedAccount;

    if (existingAccount) {
      connectedAccount = await prisma.connectedAccount.update({
        where: { id: existingAccount.id },
        data: {
          userId: session.user.id,
          providerAccountId: stableGoogleId,
          email: emailAddress,
          accessToken: tokens.access_token || null,
          refreshToken: refreshTokenToStore,
          expiresAt: expiresAtDate,
          scope: tokens.scope || null,
        },
      });
    } else {
      connectedAccount = await prisma.connectedAccount.create({
        data: {
          userId: session.user.id,
          provider: "google_calendar",
          providerAccountId: stableGoogleId,
          email: emailAddress,
          accessToken: tokens.access_token || null,
          refreshToken: refreshTokenToStore,
          expiresAt: expiresAtDate,
          scope: tokens.scope || null,
        },
      });
    }

    // Run initial calendar list discovery
    try {
      await listAvailableCalendars(session.user.id, connectedAccount.id);
    } catch (discoverErr) {
      console.error("Initial calendar list discovery failed:", discoverErr);
    }

    // Redirect to selection screen with accountId
    return NextResponse.redirect(
      new URL(`/integrations/calendar/select?accountId=${connectedAccount.id}`, request.url)
    );
  } catch (err: unknown) {
    console.error("Google Calendar OAuth Callback Handler Error:", err);
    return NextResponse.redirect(
      new URL("/integrations?error=oauth_error", request.url)
    );
  }
}
