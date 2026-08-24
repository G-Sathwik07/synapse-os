import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { whatsAppConnectionManager, normalizePhoneNumber, ConnectionMethod } from '@/lib/whatsapp/connection-manager';
import crypto from 'crypto';

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;
  const pendingConnectionId = crypto.randomUUID();

  try {
    let body: { method?: ConnectionMethod; phoneNumber?: string; countryCode?: string } = {};
    try {
      body = await request.json();
    } catch {
      // Body is optional (defaults to QR)
    }

    const method: ConnectionMethod = body.method === 'pairing_code' ? 'pairing_code' : 'qr';
    let normalizedPhone: string | undefined = undefined;

    if (method === 'pairing_code') {
      if (!body.phoneNumber || typeof body.phoneNumber !== 'string' || body.phoneNumber.trim().length === 0) {
        return NextResponse.json(
          { error: 'Phone number is required for pairing code authentication' },
          { status: 400 }
        );
      }

      normalizedPhone = normalizePhoneNumber(body.phoneNumber, body.countryCode || '91');

      if (!normalizedPhone || normalizedPhone.length < 10 || normalizedPhone.length > 15) {
        return NextResponse.json(
          { error: 'Invalid phone number format. Please provide a valid international phone number (10 to 15 digits).' },
          { status: 400 }
        );
      }
    }

    // Initiate setup session in the connection manager
    await whatsAppConnectionManager.initiatePendingConnection(pendingConnectionId, userId, {
      method,
      phoneNumber: normalizedPhone,
    });

    return NextResponse.json({
      pendingConnectionId,
      method,
    });
  } catch (err: unknown) {
    console.error('Failed to initiate WhatsApp connection:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

