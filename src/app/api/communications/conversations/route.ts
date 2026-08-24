import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;
  const { searchParams } = new URL(request.url);

  const source = searchParams.get('source') || 'all';
  const accountId = searchParams.get('accountId') || 'all';
  const search = searchParams.get('search') || '';
  const limit = parseInt(searchParams.get('limit') || '30', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const whereClause: any = {
      userId,
      connectedAccount: {
        OR: [
          { status: 'CONNECTED' },
          { status: null },
        ],
      },
    };

    if (source !== 'all') {
      whereClause.source = source;
    }

    if (accountId !== 'all') {
      whereClause.connectedAccountId = accountId;
    }

    if (search) {
      whereClause.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { remoteConversationId: { contains: search, mode: 'insensitive' } },
        {
          participants: {
            some: {
              OR: [
                { displayName: { contains: search, mode: 'insensitive' } },
                { phone: { contains: search, mode: 'insensitive' } },
              ],
            },
          },
        },
      ];
    }

    // Fetch conversations
    const conversations = await prisma.communicationConversation.findMany({
      where: whereClause,
      orderBy: { lastMessageAt: 'desc' },
      take: limit + 1, // Get one extra to check if hasMore
      skip: offset,
      include: {
        connectedAccount: {
          select: {
            email: true,
            providerAccountId: true,
            provider: true,
          },
        },
      },
    });

    const hasMore = conversations.length > limit;
    const items = conversations.slice(0, limit).map((c) => ({
      id: c.id,
      connectedAccountId: c.connectedAccountId,
      source: c.source,
      remoteConversationId: c.remoteConversationId,
      title: c.title || c.remoteConversationId.split('@')[0],
      avatar: c.avatar,
      isGroup: c.isGroup,
      lastMessageAt: c.lastMessageAt.toISOString(),
      lastMessagePreview: c.lastMessagePreview,
      unreadCount: c.unreadCount,
      accountLabel: c.connectedAccount.email || c.connectedAccount.providerAccountId,
      provider: c.connectedAccount.provider,
    }));

    return NextResponse.json({
      conversations: items,
      hasMore,
    });
  } catch (err: unknown) {
    console.error('Failed to fetch communications conversations:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
