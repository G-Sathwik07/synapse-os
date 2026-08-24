import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { whatsAppConnectionManager } from '@/lib/whatsapp/connection-manager';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const connectedAccounts = await prisma.connectedAccount.findMany({
      where: {
        userId,
        provider: 'whatsapp_baileys',
      },
      include: {
        _count: {
          select: { communicationMessages: true },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    const accounts = connectedAccounts.map((acc) => {
      const liveInfo = whatsAppConnectionManager.getActiveConnectionStatus(acc.id);
      const isConnected = acc.status === 'CONNECTED' || (acc.status === null && acc.accessToken === 'connected');
      const currentStatus = acc.status || (isConnected ? 'CONNECTED' : 'DISCONNECTED');
      return {
        id: acc.id,
        phone: acc.email || acc.providerAccountId,
        providerAccountId: acc.providerAccountId,
        connected: isConnected,
        status: isConnected && liveInfo.status === 'DISCONNECTED' ? 'CONNECTED' : (acc.status === 'CONNECTING' ? 'CONNECTING' : currentStatus),
        qr: liveInfo.qr,
        diagnostic: liveInfo.diagnostic,
        messageCount: acc._count.communicationMessages,
        lastSyncedAt: acc.updatedAt.toISOString(),
      };
    });

    return NextResponse.json({
      connected: accounts.some((a) => a.connected),
      accounts,
    });
  } catch (err: unknown) {
    console.error('Failed to retrieve WhatsApp status:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;
  const { searchParams } = new URL(request.url);
  let id = searchParams.get('id');
  const action = searchParams.get('action') || 'disconnect'; // 'disconnect' (default) or 'delete'

  if (!id) {
    try {
      const body = await request.json();
      id = body?.id;
    } catch {
      // Body not present
    }
  }

  if (!id) {
    return NextResponse.json({ error: 'Account ID is required' }, { status: 400 });
  }

  try {
    const connectedAccount = await prisma.connectedAccount.findFirst({
      where: {
        id,
        userId,
        provider: 'whatsapp_baileys',
      },
    });

    if (!connectedAccount) {
      return NextResponse.json({ error: 'WhatsApp connection not found' }, { status: 404 });
    }

    if (action === 'delete') {
      // 1. Terminate Baileys session
      await whatsAppConnectionManager.disconnectActiveConnection(connectedAccount.id);

      // 2. Remove ConnectedAccount (cascade deletes session, messages, conversations)
      await prisma.connectedAccount.delete({
        where: { id: connectedAccount.id },
      });

      return NextResponse.json({ success: true, deletedId: connectedAccount.id });
    } else {
      // Default: disconnect (terminate Baileys session, set status=DISCONNECTED, keep record)
      await whatsAppConnectionManager.disconnectActiveConnection(connectedAccount.id);

      return NextResponse.json({ success: true, disconnectedId: connectedAccount.id });
    }
  } catch (err: unknown) {
    console.error('Failed to disconnect/delete WhatsApp:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
