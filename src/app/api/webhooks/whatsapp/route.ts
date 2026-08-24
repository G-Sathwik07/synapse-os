import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { scoreWhatsAppMessage } from "@/lib/whatsapp/meta-service";
import { invalidateBriefCache } from "@/lib/brief/brief-service";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const verifyToken = process.env.WHATSAPP_META_VERIFY_TOKEN;

  if (mode === "subscribe" && token === verifyToken) {
    console.log("[WhatsAppWebhook] Webhook verified successfully.");
    return new NextResponse(challenge, { status: 200, headers: { "Content-Type": "text/plain" } });
  }

  console.warn("[WhatsAppWebhook] Webhook verification failed. Invalid token.");
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Verify object type is what we expect
    if (body.object !== "whatsapp_business_account") {
      return NextResponse.json({ status: "ignored" }, { status: 200 });
    }

    const entries = body.entry || [];
    for (const entry of entries) {
      const changes = entry.changes || [];
      for (const change of changes) {
        if (change.field !== "messages") continue;

        const value = change.value;
        if (!value) continue;

        const metadata = value.metadata;
        if (!metadata) continue;

        const phoneNumberId = metadata.phone_number_id;
        if (!phoneNumberId) continue;

        // Lookup the connected account
        const connectedAccount = await prisma.connectedAccount.findFirst({
          where: {
            provider: "whatsapp_meta",
            providerAccountId: phoneNumberId,
          },
        });

        if (!connectedAccount) {
          console.warn(`[WhatsAppWebhook] Connected account not found for phone_number_id: ${phoneNumberId}`);
          continue;
        }

        // Process Incoming Messages
        const messages = value.messages || [];
        const contacts = value.contacts || [];

        for (const msg of messages) {
          const from = msg.from;
          const msgId = msg.id;
          const timestamp = msg.timestamp ? new Date(parseInt(msg.timestamp) * 1000) : new Date();

          // Get display name
          const contact = contacts.find((c: { wa_id: string; profile?: { name?: string } }) => c.wa_id === from);
          const displayName = contact?.profile?.name || from;

          let bodyText = "";
          const messageType = msg.type || "text";

          if (messageType === "text" && msg.text) {
            bodyText = msg.text.body || "";
          } else {
            bodyText = `[Sent a ${messageType}]`;
          }

          // Deduplicate message using DB constraint
          const existingMessage = await prisma.communicationMessage.findUnique({
            where: {
              connectedAccountId_remoteMessageId: {
                connectedAccountId: connectedAccount.id,
                remoteMessageId: msgId,
              },
            },
          });

          if (existingMessage) {
            console.log(`[WhatsAppWebhook] Duplicate message skipped: ${msgId}`);
            continue;
          }

          // Find or create conversation
          let conversation = await prisma.communicationConversation.findUnique({
            where: {
              connectedAccountId_remoteConversationId: {
                connectedAccountId: connectedAccount.id,
                remoteConversationId: from,
              },
            },
          });

          if (!conversation) {
            conversation = await prisma.communicationConversation.create({
              data: {
                userId: connectedAccount.userId,
                connectedAccountId: connectedAccount.id,
                source: "whatsapp",
                remoteConversationId: from,
                title: displayName,
                isGroup: false,
                lastMessageAt: timestamp,
                lastMessagePreview: bodyText,
                unreadCount: 1,
              },
            });
          } else {
            conversation = await prisma.communicationConversation.update({
              where: { id: conversation.id },
              data: {
                lastMessageAt: timestamp,
                lastMessagePreview: bodyText,
                unreadCount: conversation.unreadCount + 1,
                title: conversation.title && conversation.title !== from ? conversation.title : displayName,
              },
            });
          }

          // Create or update participant
          await prisma.communicationParticipant.upsert({
            where: {
              conversationId_remoteParticipantId: {
                conversationId: conversation.id,
                remoteParticipantId: from,
              },
            },
            update: {
              displayName,
              phone: from,
            },
            create: {
              conversationId: conversation.id,
              remoteParticipantId: from,
              displayName,
              phone: from,
            },
          });

          // Run deterministic scoring for V1
          const score = scoreWhatsAppMessage(bodyText, false, false);

          // Save the message
          await prisma.communicationMessage.create({
            data: {
              userId: connectedAccount.userId,
              conversationId: conversation.id,
              connectedAccountId: connectedAccount.id,
              source: "whatsapp",
              remoteMessageId: msgId,
              senderId: from,
              senderName: displayName,
              text: bodyText,
              messageType,
              isFromMe: false,
              isRead: false,
              sentAt: timestamp,
              aiCategory: score.category,
              aiPriority: score.priority,
              aiActionable: score.actionable,
              aiSummary: score.summary,
              aiReason: score.reason,
              aiProcessedAt: new Date(),
            },
          });

          console.log(`[WhatsAppWebhook] Ingested message ${msgId} from ${from}`);

          // Invalidate AI brief cache to reflect new high priority notifications
          invalidateBriefCache(connectedAccount.userId);
        }

        // Process message status updates
        const statuses = value.statuses || [];
        for (const statusEvent of statuses) {
          const statusId = statusEvent.id;
          const status = statusEvent.status; // sent, delivered, read, failed

          const existingMessage = await prisma.communicationMessage.findUnique({
            where: {
              connectedAccountId_remoteMessageId: {
                connectedAccountId: connectedAccount.id,
                remoteMessageId: statusId,
              },
            },
          });

          if (existingMessage) {
            await prisma.communicationMessage.update({
              where: { id: existingMessage.id },
              data: {
                isRead: status === "read",
              },
            });
            console.log(`[WhatsAppWebhook] Updated status of message ${statusId} to ${status}`);
          }
        }
      }
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error: unknown) {
    console.error("[WhatsAppWebhook] Webhook error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
