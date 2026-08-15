import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const connectedAccounts = await prisma.connectedAccount.findMany({
      where: {
        userId,
        provider: "google_calendar",
        accessToken: { not: null },
        refreshToken: { not: null },
      },
      include: {
        connectedCalendars: {
          select: {
            id: true,
            summary: true,
            isSelected: true,
            _count: {
              select: { calendarEvents: true },
            },
          },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    if (connectedAccounts.length === 0) {
      return NextResponse.json({ connected: false, accounts: [] });
    }

    const accounts = connectedAccounts.map((acc) => {
      const selectedCalendars = acc.connectedCalendars.filter((c) => c.isSelected);
      const totalEvents = acc.connectedCalendars.reduce((sum, c) => sum + c._count.calendarEvents, 0);

      return {
        id: acc.id,
        email: acc.email || acc.providerAccountId,
        providerAccountId: acc.providerAccountId,
        lastSyncedAt: acc.updatedAt.toISOString(),
        selectedCalendarsCount: selectedCalendars.length,
        eventCount: totalEvents,
        scope: acc.scope,
        calendars: acc.connectedCalendars.map((c) => ({
          id: c.id,
          summary: c.summary,
          isSelected: c.isSelected,
          eventCount: c._count.calendarEvents,
        })),
      };
    });

    return NextResponse.json({
      connected: true,
      accounts,
    });
  } catch (err: unknown) {
    console.error("Failed to retrieve Calendar status:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const { searchParams } = new URL(request.url);
  let id = searchParams.get("id");

  if (!id) {
    try {
      const body = await request.json();
      id = body?.id;
    } catch {
      // Body not present or invalid JSON
    }
  }

  if (!id) {
    return NextResponse.json({ error: "Missing account ID" }, { status: 400 });
  }

  try {
    const connectedAccount = await prisma.connectedAccount.findFirst({
      where: {
        id,
        userId,
        provider: "google_calendar",
      },
    });

    if (!connectedAccount) {
      return NextResponse.json(
        { error: "Calendar connection not found" },
        { status: 404 }
      );
    }

    // Invalidate/remove Google Calendar credentials (but preserve database records)
    await prisma.connectedAccount.update({
      where: { id: connectedAccount.id },
      data: {
        accessToken: null,
        refreshToken: null,
        expiresAt: null,
        scope: null,
      },
    });

    return NextResponse.json({ success: true, disconnectedId: connectedAccount.id });
  } catch (err: unknown) {
    console.error("Failed to disconnect Calendar:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
