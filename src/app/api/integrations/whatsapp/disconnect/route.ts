import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { whatsAppConnectionManager } from '@/lib/whatsapp/connection-manager';

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const id = body?.id;

    if (!id) {
      return NextResponse.json({ error: 'Pending Connection ID is required' }, { status: 400 });
    }

    whatsAppConnectionManager.cancelPendingConnection(id);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('Failed to cancel pending WhatsApp connection:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
