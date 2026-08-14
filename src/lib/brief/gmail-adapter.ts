import { prisma } from "@/lib/prisma";
import { EmailMessage } from "@prisma/client";
import { BriefItem } from "./types";

export function adaptEmailToBriefItem(
  email: EmailMessage & {
    connectedAccount?: { email: string | null; providerAccountId: string };
  }
): BriefItem {
  return {
    id: email.id,
    source: "gmail",
    sourceAccount:
      email.connectedAccount?.email ||
      email.connectedAccount?.providerAccountId ||
      "Gmail",
    title: email.subject || "(No Subject)",
    summary: email.aiSummary || email.snippet || "",
    category: email.aiCategory || "OTHER",
    priority: email.aiPriority || "LOW",
    actionable: email.aiActionable || false,
    timestamp: email.receivedAt || email.createdAt,
    deadline: null,
    referenceId: email.id,
  };
}

export async function getGmailBriefItems(userId: string): Promise<BriefItem[]> {
  const activeGmailAccounts = await prisma.connectedAccount.findMany({
    where: {
      userId,
      provider: "google_gmail",
      accessToken: { not: null },
      refreshToken: { not: null },
    },
    select: { id: true, email: true, providerAccountId: true },
  });

  if (activeGmailAccounts.length === 0) {
    return [];
  }

  const activeAccountIds = activeGmailAccounts.map((a) => a.id);

  const emails = await prisma.emailMessage.findMany({
    where: {
      userId,
      connectedAccountId: { in: activeAccountIds },
    },
    include: {
      connectedAccount: {
        select: { email: true, providerAccountId: true },
      },
    },
    orderBy: { receivedAt: "desc" },
    take: 30,
  });

  return emails.map(adaptEmailToBriefItem);
}
