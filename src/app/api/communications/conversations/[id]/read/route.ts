import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const resolvedParams = await params;
  const conversationId = resolvedParams.id;

  try {
    // 1. Verify ownership of the conversation
    const conversation = await prisma.communicationConversation.findFirst({
      where: {
        id: conversationId,
        userId,
      },
    });

    if (!conversation) {
      return NextResponse.json({ error: "Conversation not found or access denied" }, { status: 404 });
    }

    // 2. Update conversation unread count to 0
    await prisma.communicationConversation.update({
      where: { id: conversationId },
      data: {
        unreadCount: 0,
      },
    });

    // 3. Mark all inbound messages as read
    await prisma.communicationMessage.updateMany({
      where: {
        conversationId,
        userId,
        isFromMe: false,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Failed to mark conversation as read:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
