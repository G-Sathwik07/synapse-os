import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { syncCalendarEvents } from "@/lib/calendar";

export async function GET(request: Request) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const accountId = searchParams.get("accountId");

  if (!accountId) {
    return NextResponse.json({ error: "Missing accountId" }, { status: 400 });
  }

  try {
    const calendars = await prisma.connectedCalendar.findMany({
      where: {
        userId: session.user.id,
        connectedAccountId: accountId,
      },
      orderBy: [
        { isPrimary: "desc" },
        { summary: "asc" },
      ],
    });

    return NextResponse.json({ calendars });
  } catch (err: unknown) {
    console.error("Failed to fetch calendars for selection:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const { accountId, selectedCalendarIds } = await request.json();

    if (!accountId || !Array.isArray(selectedCalendarIds)) {
      return NextResponse.json({ error: "Invalid payload parameters" }, { status: 400 });
    }

    // Verify account ownership
    const account = await prisma.connectedAccount.findFirst({
      where: {
        id: accountId,
        userId,
        provider: "google_calendar",
      },
    });

    if (!account) {
      return NextResponse.json({ error: "Account not found or unauthorized" }, { status: 404 });
    }

    // Fetch existing calendar states
    const existingCalendars = await prisma.connectedCalendar.findMany({
      where: {
        userId,
        connectedAccountId: accountId,
      },
    });

    const newSyncPromises = [];

    for (const cal of existingCalendars) {
      const isNowSelected = selectedCalendarIds.includes(cal.id);
      const wasSelected = cal.isSelected;

      if (isNowSelected !== wasSelected) {
        // Update database selection state
        await prisma.connectedCalendar.update({
          where: { id: cal.id },
          data: { isSelected: isNowSelected },
        });

        // If newly enabled, run initial sync in background / parallel
        if (isNowSelected) {
          newSyncPromises.push(
            syncCalendarEvents(userId, accountId, cal.id, true)
              .catch((err) => {
                console.error(`Initial background sync failed for calendar ${cal.summary}:`, err);
              })
          );
        }
      }
    }

    // Wait for all initial syncs to trigger/finish
    await Promise.all(newSyncPromises);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Failed to save calendar selection:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
