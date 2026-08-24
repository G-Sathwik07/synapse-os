import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { whatsAppConnectionManager } from '@/lib/whatsapp/connection-manager';
import fs from 'fs';
import path from 'path';

function logDebug(message: string) {
  const logMsg = `[Sync API Debug][${new Date().toISOString()}] ${message}\n`;
  console.log(logMsg.trim());
  try {
    fs.appendFileSync(path.join(process.cwd(), 'sync-debug.log'), logMsg);
  } catch (err) {
    console.error('Failed to write to sync-debug.log:', err);
  }
}

export async function POST(request: Request) {
  logDebug('Received Sync POST request');
  const session = await auth();
  if (!session?.user?.id) {
    logDebug('Unauthorized: no user session');
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;
  let id: string | undefined;
  try {
    const body = await request.json();
    id = body?.id;
    logDebug(`Parsed body: accountId = ${id}`);
  } catch (err) {
    logDebug(`Body parsing error: ${err}`);
  }

  if (!id) {
    logDebug('Bad Request: Account ID is missing');
    return NextResponse.json({ error: 'Account ID is required' }, { status: 400 });
  }

  try {
    logDebug(`Fetching connectedAccount from DB for id: ${id}, userId: ${userId}`);
    const connectedAccount = await prisma.connectedAccount.findFirst({
      where: {
        id,
        userId,
        provider: 'whatsapp_baileys',
      },
    });

    if (!connectedAccount) {
      logDebug(`Account not found in DB for id: ${id}`);
      return NextResponse.json({ error: 'WhatsApp connection not found' }, { status: 404 });
    }

    logDebug(`Account found: status=${connectedAccount.status}, providerAccountId=${connectedAccount.providerAccountId}`);

    const liveStatus = whatsAppConnectionManager.getActiveConnectionStatus(connectedAccount.id);
    logDebug(`Live status from connection manager: ${JSON.stringify(liveStatus)}`);
    
    const isSocketPresent = !!whatsAppConnectionManager.getSocket(connectedAccount.id);
    logDebug(`Is active socket present: ${isSocketPresent}`);

    if (liveStatus.status !== 'CONNECTED') {
      logDebug(`Connection validation failed: status is ${liveStatus.status}, expected CONNECTED`);
      return NextResponse.json({ error: 'WhatsApp account is not connected' }, { status: 400 });
    }

    // Trigger reconciliation/sync pass
    logDebug('Triggering syncHistory() inside WhatsAppConnectionManager...');
    const result = await whatsAppConnectionManager.syncHistory(connectedAccount.id);
    logDebug(`syncHistory() completed successfully. Result: ${JSON.stringify(result)}`);

    // Update the account's updatedAt timestamp to indicate last sync
    logDebug('Updating connectedAccount updatedAt timestamp...');
    await prisma.connectedAccount.update({
      where: { id: connectedAccount.id },
      data: { updatedAt: new Date() },
    });

    logDebug('Sync request successfully processed.');
    return NextResponse.json({ success: true, ...result });
  } catch (err: unknown) {
    const error = err as Error;
    const errMsg = error?.message || String(err);
    const errStack = error?.stack || '';
    logDebug(`Sync History process threw an exception:\nError: ${errMsg}\nStack: ${errStack}`);
    
    return NextResponse.json({ 
      error: 'Internal Server Error', 
      details: errMsg, 
      stack: errStack,
      connectedAccountId: id
    }, { status: 500 });
  }
}
