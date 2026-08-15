import { prisma } from "@/lib/prisma";
import { CalendarEvent } from "@prisma/client";
import { BriefItem } from "./types";

export function adaptCalendarEventToBriefItem(
  event: CalendarEvent & {
    calendar?: {
      summary: string;
      connectedAccount?: { email: string | null; providerAccountId: string };
    };
  }
): BriefItem {
  const titleLower = event.title.toLowerCase();
  const descLower = (event.description || "").toLowerCase();

  // Classify calendar event category
  let category = "PERSONAL";
  let priority: "HIGH" | "MEDIUM" | "LOW" = "LOW";
  let actionable = false;

  if (titleLower.includes("interview") || titleLower.includes("placement") || descLower.includes("interview")) {
    category = "PLACEMENT";
    priority = "HIGH";
    actionable = true;
  } else if (
    titleLower.includes("exam") ||
    titleLower.includes("test") ||
    titleLower.includes("quiz") ||
    titleLower.includes("assignment") ||
    titleLower.includes("homework") ||
    titleLower.includes("lecture") ||
    titleLower.includes("class")
  ) {
    category = "COLLEGE";
    priority = "HIGH";
    actionable = true;
  } else if (
    titleLower.includes("meeting") ||
    titleLower.includes("sync") ||
    titleLower.includes("standup") ||
    titleLower.includes("1:1") ||
    titleLower.includes("1on1") ||
    titleLower.includes("discussion") ||
    titleLower.includes("demo")
  ) {
    category = "WORK";
    priority = "MEDIUM";
    actionable = true;
  } else if (
    titleLower.includes("birthday") ||
    titleLower.includes("anniversary") ||
    titleLower.includes("holiday")
  ) {
    // Highly deprioritize social events / holidays
    category = "SOCIAL";
    priority = "LOW";
    actionable = false;
  }

  // Formatting location/description into summary
  const summaryParts = [];
  if (event.location) {
    summaryParts.push(`Location: ${event.location}`);
  }
  if (event.description) {
    summaryParts.push(event.description);
  }
  const summary = summaryParts.join(" · ") || "Scheduled event";

  return {
    id: event.id,
    source: "calendar",
    sourceAccount:
      event.calendar?.connectedAccount?.email ||
      event.calendar?.connectedAccount?.providerAccountId ||
      event.calendar?.summary ||
      "Google Calendar",
    title: event.title || "(No Title)",
    summary,
    category,
    priority,
    actionable,
    timestamp: event.startTime,
    deadline: event.endTime,
    referenceId: event.id,
  };
}

export async function getCalendarBriefItems(userId: string): Promise<BriefItem[]> {
  const activeCalendarAccounts = await prisma.connectedAccount.findMany({
    where: {
      userId,
      provider: "google_calendar",
      accessToken: { not: null },
      refreshToken: { not: null },
    },
    select: { id: true },
  });

  if (activeCalendarAccounts.length === 0) {
    return [];
  }

  const activeAccountIds = activeCalendarAccounts.map((a) => a.id);

  const startLimit = new Date();
  // Buffer past 2 hours in case of ongoing important events
  startLimit.setHours(startLimit.getHours() - 2);

  const endLimit = new Date();
  endLimit.setDate(endLimit.getDate() + 2); // Next 48 hours

  const events = await prisma.calendarEvent.findMany({
    where: {
      userId,
      connectedAccountId: { in: activeAccountIds },
      startTime: { gte: startLimit, lte: endLimit },
      calendar: {
        isSelected: true,
      },
    },
    include: {
      calendar: {
        include: {
          connectedAccount: {
            select: { email: true, providerAccountId: true },
          },
        },
      },
    },
    orderBy: { startTime: "asc" },
  });

  return events.map(adaptCalendarEventToBriefItem);
}
