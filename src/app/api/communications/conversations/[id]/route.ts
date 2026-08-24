import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { sendMetaWhatsAppMessage, scoreWhatsAppMessage } from '@/lib/whatsapp/meta-service';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;
  const resolvedParams = await params;
  const conversationId = resolvedParams.id;

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '50', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

  try {
    // Authenticate access: verify the conversation belongs to the user
    const conversation = await prisma.communicationConversation.findFirst({
      where: {
        id: conversationId,
        userId,
        connectedAccount: {
          OR: [
            { status: 'CONNECTED' },
            { status: null },
          ],
        },
      },
    });

    if (!conversation) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    // Fetch messages
    const messages = await prisma.communicationMessage.findMany({
      where: {
        conversationId,
        userId,
      },
      orderBy: { sentAt: 'desc' },
      take: limit + 1, // Retrieve one extra to check if hasMore older messages
      skip: offset,
    });

    const hasMore = messages.length > limit;
    const items = messages.slice(0, limit).map((m) => ({
      id: m.id,
      remoteMessageId: m.remoteMessageId,
      senderId: m.senderId,
      senderName: m.senderName,
      text: m.text,
      messageType: m.messageType,
      isFromMe: m.isFromMe,
      isRead: m.isRead,
      sentAt: m.sentAt.toISOString(),
    }));

    // Reverse items to return them in chronological order (oldest to newest)
    items.reverse();

    return NextResponse.json({
      messages: items,
      hasMore,
    });
  } catch (err: unknown) {
    console.error('Failed to fetch messages for conversation:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;
  const resolvedParams = await params;
  const conversationId = resolvedParams.id;

  try {
    const body = await request.json();
    const { text } = body;

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json({ error: 'Message text is required' }, { status: 400 });
    }

    // 1. Fetch conversation and verify ownership
    const conversation = await prisma.communicationConversation.findFirst({
      where: {
        id: conversationId,
        userId,
      },
      include: {
        connectedAccount: true,
      },
    });

    if (!conversation) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    const { connectedAccount } = conversation;

    if (connectedAccount.provider !== 'whatsapp_meta') {
      return NextResponse.json({ error: 'Sending is only supported for Meta WhatsApp accounts' }, { status: 400 });
    }

    if (!connectedAccount.accessToken) {
      return NextResponse.json({ error: 'WhatsApp account is disconnected (missing access token)' }, { status: 400 });
    }

    // 2. Send via Meta API
    const remoteMessageId = await sendMetaWhatsAppMessage(
      connectedAccount.providerAccountId,
      connectedAccount.accessToken,
      conversation.remoteConversationId,
      text
    );

    // 3. Score message deterministically
    const score = scoreWhatsAppMessage(text, true, false);

    // 4. Save the message to DB
    const message = await prisma.communicationMessage.create({
      data: {
        userId,
        conversationId,
        connectedAccountId: connectedAccount.id,
        source: 'whatsapp',
        remoteMessageId,
        senderId: 'me',
        senderName: 'Me',
        text,
        messageType: 'text',
        isFromMe: true,
        isRead: true,
        sentAt: new Date(),
        aiCategory: score.category,
        aiPriority: score.priority,
        aiActionable: score.actionable,
        aiSummary: score.summary,
        aiReason: score.reason,
        aiProcessedAt: new Date(),
      },
    });

    // 5. Update conversation last message details
    await prisma.communicationConversation.update({
      where: { id: conversationId },
      data: {
        lastMessageAt: new Date(),
        lastMessagePreview: text,
      },
    });

    return NextResponse.json({
      message: {
        id: message.id,
        remoteMessageId: message.remoteMessageId,
        senderId: message.senderId,
        senderName: message.senderName,
        text: message.text,
        messageType: message.messageType,
        isFromMe: message.isFromMe,
        isRead: message.isRead,
        sentAt: message.sentAt.toISOString(),
      },
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error('Failed to send WhatsApp message:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
