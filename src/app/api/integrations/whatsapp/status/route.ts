import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { whatsAppConnectionManager } from '@/lib/whatsapp/connection-manager';

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Pending Connection ID is required' }, { status: 400 });
  }

  try {
    const liveStatus = whatsAppConnectionManager.getPendingConnectionStatus(id);
    return NextResponse.json(liveStatus);
  } catch (err: unknown) {
    console.error('Failed to get pending WhatsApp status:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
