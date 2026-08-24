import { prisma } from "@/lib/prisma";
import { CommunicationMessage } from "@/generated/client";
import { BriefItem } from "./types";

export function adaptWhatsAppToBriefItem(
  msg: CommunicationMessage & {
    connectedAccount?: { email: string | null; providerAccountId: string };
  }
): BriefItem {
  const accountLabel =
    msg.connectedAccount?.email ||
    msg.connectedAccount?.providerAccountId ||
    "WhatsApp";

  return {
    id: msg.id,
    source: "whatsapp",
    sourceAccount: accountLabel.startsWith("+") ? accountLabel : `+${accountLabel}`,
    title: `Message from ${msg.senderName || msg.senderId}`,
    summary: msg.text || "",
    category: msg.aiCategory || "PERSONAL",
    priority: msg.aiPriority || "LOW",
    actionable: msg.aiActionable || false,
    timestamp: msg.sentAt || msg.createdAt,
    deadline: null,
    referenceId: msg.id,
  };
}

export async function getWhatsAppBriefItems(userId: string): Promise<BriefItem[]> {
  // Find all active connected accounts for whatsapp (both Baileys and Meta)
  const activeWhatsAppAccounts = await prisma.connectedAccount.findMany({
    where: {
      userId,
      provider: { in: ["whatsapp_baileys", "whatsapp_meta"] },
      OR: [
        { status: "CONNECTED" },
        { status: null },
      ],
    },
    select: { id: true, email: true, providerAccountId: true },
  });

  if (activeWhatsAppAccounts.length === 0) {
    return [];
  }

  const activeAccountIds = activeWhatsAppAccounts.map((a) => a.id);

  // Fetch recent high-priority or unread inbound messages from active accounts
  const messages = await prisma.communicationMessage.findMany({
    where: {
      userId,
      connectedAccountId: { in: activeAccountIds },
      isFromMe: false,
      OR: [
        { isRead: false },
        { aiPriority: { in: ["HIGH", "MEDIUM"] } },
      ],
    },
    include: {
      connectedAccount: {
        select: { email: true, providerAccountId: true },
      },
    },
    orderBy: { sentAt: "desc" },
    take: 15,
  });

  return messages.map(adaptWhatsAppToBriefItem);
}
