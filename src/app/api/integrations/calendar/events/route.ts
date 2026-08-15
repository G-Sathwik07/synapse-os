import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const { searchParams } = new URL(request.url);
  const startParam = searchParams.get("start");
  const endParam = searchParams.get("end");

  if (!startParam || !endParam) {
    return NextResponse.json({ error: "Missing start or end query parameters" }, { status: 400 });
  }

  try {
    const startLimit = new Date(startParam);
    const endLimit = new Date(endParam);

    if (isNaN(startLimit.getTime()) || isNaN(endLimit.getTime())) {
      return NextResponse.json({ error: "Invalid start or end dates" }, { status: 400 });
    }

    const events = await prisma.calendarEvent.findMany({
      where: {
        userId,
        startTime: { lte: endLimit },
        endTime: { gte: startLimit },
        calendar: {
          isSelected: true,
        },
      },
      include: {
        calendar: {
          select: {
            summary: true,
            isPrimary: true,
            connectedAccount: {
              select: {
                email: true,
              },
            },
          },
        },
      },
      orderBy: {
        startTime: "asc",
      },
    });

    // Format events for client consumption
    const formattedEvents = events.map((ev) => ({
      id: ev.id,
      googleEventId: ev.googleEventId,
      title: ev.title,
      description: ev.description,
      location: ev.location,
      startTime: ev.startTime.toISOString(),
      endTime: ev.endTime.toISOString(),
      isAllDay: ev.isAllDay,
      timeZone: ev.timeZone,
      status: ev.status,
      htmlLink: ev.htmlLink,
      organizer: ev.organizer,
      attendees: ev.attendees ? JSON.parse(ev.attendees) : [],
      calendarName: ev.calendar.summary,
      accountEmail: ev.calendar.connectedAccount.email,
      isPrimaryCalendar: ev.calendar.isPrimary,
    }));

    return NextResponse.json({ events: formattedEvents });
  } catch (err: unknown) {
    console.error("Failed to query calendar events:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
