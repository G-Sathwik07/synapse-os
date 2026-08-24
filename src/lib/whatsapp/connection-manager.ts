/* eslint-disable @typescript-eslint/no-explicit-any */
import makeWASocket, { DisconnectReason, AuthenticationState, initAuthCreds, BufferJSON, AuthenticationCreds, fetchLatestWaWebVersion, Browsers } from '@whiskeysockets/baileys';
import pino from 'pino';
import QRCode from 'qrcode';
import { prisma } from '@/lib/prisma';
import { getPrismaAuthState } from './session';
import { ingestMessage, ingestHistory, isFallbackTitle } from './message-service';

export const BAILEYS_VERSION = '7.0.0-rc14';

export type ConnectionStatus =
  | 'CONNECTING'
  | 'QR_READY'
  | 'PAIRING_CODE_READY'
  | 'CONNECTED'
  | 'RECONNECTING'
  | 'LOGGED_OUT'
  | 'ERROR'
  | 'DISCONNECTED'
  | 'EXPIRED';

export type ConnectionMethod = 'qr' | 'pairing_code';

export interface WhatsAppDiagnosticInfo {
  connectionState: string | null;
  statusCode: number | null;
  disconnectReason: string | null;
  baileysVersion: string;
  waWebVersion: string;
  timestamp: string;
  errorDetail?: string | null;
}

export interface PendingConnectionOptions {
  method?: ConnectionMethod;
  phoneNumber?: string;
}

interface PendingConnection {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sock: any;
  status: ConnectionStatus;
  method: ConnectionMethod;
  qr: string | null;
  pairingCode: string | null;
  userId: string;
  phoneNumber?: string;
  diagnostic: WhatsAppDiagnosticInfo;
  memoryAuth: {
    creds: AuthenticationCreds;
    keysData: Record<string, Record<string, unknown>>;
  };
}

/**
 * Normalizes phone number server-side to digits-only international format.
 * Defaults country code to 91 (India) if a 10-digit number without country code is provided.
 */
export function normalizePhoneNumber(phone: string, defaultCountryCode = '91'): string {
  if (!phone) return '';
  let digits = phone.replace(/\D/g, '');

  // Strip international prefix '00' if present
  if (digits.startsWith('00')) {
    digits = digits.slice(2);
  }

  // Handle local Indian numbers with leading 0 (e.g. 09876543210 -> 919876543210)
  if (digits.length === 11 && digits.startsWith('0')) {
    const cleanCC = defaultCountryCode.replace(/\D/g, '') || '91';
    digits = `${cleanCC}${digits.slice(1)}`;
  } else if (digits.length === 10 && defaultCountryCode) {
    const cleanCC = defaultCountryCode.replace(/\D/g, '');
    digits = `${cleanCC}${digits}`;
  }

  return digits;
}

class WhatsAppConnectionManager {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private activeSockets: Map<string, any> = new Map(); // connectedAccountId -> WASocket
  private statuses: Map<string, ConnectionStatus> = new Map(); // connectedAccountId -> Status
  private diagnostics: Map<string, WhatsAppDiagnosticInfo> = new Map(); // connectedAccountId -> DiagnosticInfo
  private qrs: Map<string, string | null> = new Map(); // connectedAccountId -> QR string
  private pendingConnections: Map<string, PendingConnection> = new Map(); // pendingConnectionId -> setup session
  private restartAttempts: Map<string, number> = new Map(); // id -> count
  private initialized = false;

  private contactsCaches: Map<string, Map<string, any>> = new Map(); // connectedAccountId -> JID -> Contact
  private lidMaps: Map<string, Map<string, string>> = new Map(); // connectedAccountId -> LID -> Phone JID

  constructor() {
    // Start recovery in background on import, safely catching errors
    this.ensureInitialized().catch((err) => {
      console.error('Error auto-initializing WhatsApp Connection Manager:', err);
    });
  }

  /**
   * Lazily boots active sessions from the database.
   */
  public async ensureInitialized() {
    if (this.initialized) return;
    this.initialized = true;
    await this.boot();
  }

  private async boot() {
    try {
      console.log('Booting WhatsApp Connection Manager: restoring active sessions...');
      const activeAccounts = await prisma.connectedAccount.findMany({
        where: {
          provider: 'whatsapp_baileys',
          status: 'CONNECTED',
          accessToken: 'connected', // Custom token indicates active session
        },
      });

      for (const account of activeAccounts) {
        console.log(`Restoring WhatsApp session for account ${account.id} (user ${account.userId})...`);
        await this.startConnection(account.userId, account.id);
      }
    } catch (err) {
      console.error('Failed to boot WhatsApp connections:', err);
    }
  }

  /**
   * Starts a real WhatsApp connection using credentials persisted in Postgres.
   */
  public async startConnection(userId: string, connectedAccountId: string) {
    try {
      // If already connected, do not start another socket
      if (this.activeSockets.has(connectedAccountId)) {
        return;
      }

      this.statuses.set(connectedAccountId, 'CONNECTING');

      const { state, saveCreds } = await getPrismaAuthState(connectedAccountId);

      const version = await this.getWaVersion();
      const waWebVersionStr = version ? version.join('.') : 'latest';

      const sock = makeWASocket({
        version,
        auth: state,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS('Chrome'),
      });

      this.activeSockets.set(connectedAccountId, sock);

      const initialDiagnostic: WhatsAppDiagnosticInfo = {
        connectionState: 'connecting',
        statusCode: null,
        disconnectReason: null,
        baileysVersion: BAILEYS_VERSION,
        waWebVersion: waWebVersionStr,
        timestamp: new Date().toISOString(),
      };
      this.diagnostics.set(connectedAccountId, initialDiagnostic);

      sock.ev.on('creds.update', () => {
        const timestamp = new Date().toISOString();
        console.log(`[Diagnostic][Active][CredsUpdate] Account: ${connectedAccountId} | Time: ${timestamp}`);
        saveCreds();
      });

      sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;
        const timestamp = new Date().toISOString();
        const statusCode = (lastDisconnect?.error as { output?: { statusCode?: number } })?.output?.statusCode;
        const disconnectReason = lastDisconnect?.error
          ? (lastDisconnect.error as Error).message || String(lastDisconnect.error)
          : null;

        const currentDiag: WhatsAppDiagnosticInfo = {
          connectionState: connection || this.diagnostics.get(connectedAccountId)?.connectionState || null,
          statusCode: statusCode ?? this.diagnostics.get(connectedAccountId)?.statusCode ?? null,
          disconnectReason: disconnectReason || this.diagnostics.get(connectedAccountId)?.disconnectReason || null,
          baileysVersion: BAILEYS_VERSION,
          waWebVersion: waWebVersionStr,
          timestamp,
        };
        this.diagnostics.set(connectedAccountId, currentDiag);

        console.log(
          `[Diagnostic][Active][ConnUpdate] Account: ${connectedAccountId} | Time: ${timestamp} | State: ${connection || 'N/A'} | StatusCode: ${statusCode ?? 'N/A'} | DisconnectReason: ${disconnectReason || 'N/A'} | WA Web: ${waWebVersionStr} | Baileys: ${BAILEYS_VERSION}`
        );

        if (qr) {
          console.log(`[Diagnostic][Active][QR] QR Code Generated for Account: ${connectedAccountId} | Time: ${timestamp}`);
          try {
            const qrUrl = await QRCode.toDataURL(qr);
            this.qrs.set(connectedAccountId, qrUrl);
            this.statuses.set(connectedAccountId, 'QR_READY');
          } catch {
            console.error('Failed to generate QR data URL for active connection');
          }
        }

        if (connection === 'connecting') {
          this.statuses.set(connectedAccountId, 'CONNECTING');
        }

        if (connection === 'open') {
          console.log(`WhatsApp connection opened for account ${connectedAccountId}`);
          this.statuses.set(connectedAccountId, 'CONNECTED');
          this.qrs.set(connectedAccountId, null);
          this.restartAttempts.delete(connectedAccountId);

          // Update ConnectedAccount metadata with phone number
          if (sock.user?.id) {
            const phone = sock.user.id.split(':')[0].split('@')[0];
            await prisma.connectedAccount.update({
              where: { id: connectedAccountId },
              data: {
                providerAccountId: phone,
                email: phone,
              },
            });
          }

          // Run background metadata repair task
          this.repairConversationTitles(connectedAccountId, sock).catch((err) => {
            console.error(`[Repair] Error repairing titles for account ${connectedAccountId}:`, err);
          });
        }

        if (connection === 'close') {
          console.log(`WhatsApp connection closed for account ${connectedAccountId}`);
          const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

          if (shouldReconnect) {
            const isRestart = statusCode === DisconnectReason.restartRequired;
            let canReconnect = true;
            let delay = 5000;

            if (isRestart) {
              const attempts = this.restartAttempts.get(connectedAccountId) || 0;
              if (attempts < 5) {
                this.restartAttempts.set(connectedAccountId, attempts + 1);
                console.log(`[Diagnostic][Active][Restart] Expected restart (515) requested (attempt ${attempts + 1}/5). Reconnecting immediately...`);
                delay = 0;
              } else {
                console.error(`[Diagnostic][Active][Restart] Expected restart (515) requested but reached limit of 5 attempts. Stopping.`);
                canReconnect = false;
                this.statuses.set(connectedAccountId, 'ERROR');
              }
            } else {
              console.log(`Attempting reconnect for account ${connectedAccountId}...`);
            }

            if (canReconnect) {
              this.statuses.set(connectedAccountId, 'RECONNECTING');
              this.activeSockets.delete(connectedAccountId);
              setTimeout(() => {
                this.startConnection(userId, connectedAccountId);
              }, delay);
            } else {
              this.activeSockets.delete(connectedAccountId);
            }
          } else {
            console.log(`Session logged out or invalid for account ${connectedAccountId}. Clearing session.`);
            this.statuses.set(connectedAccountId, 'LOGGED_OUT');
            this.activeSockets.delete(connectedAccountId);
            this.qrs.delete(connectedAccountId);

            // Set accessToken and status to disconnected so it doesn't try to reconnect on restart
            await prisma.connectedAccount.update({
              where: { id: connectedAccountId },
              data: {
                accessToken: null,
                status: 'DISCONNECTED',
              },
            });
          }
        }
      });

      sock.ev.on('messaging-history.set', async ({ chats, messages, contacts }) => {
        console.log(`Received historical sync for account ${connectedAccountId}: ${chats.length} chats, ${messages.length} messages`);
        try {
          this.updateContactsInCache(connectedAccountId, contacts);
          const resolveContactNameFn = (jid: string) => this.resolveContactName(connectedAccountId, jid);
          const resolveLidFn = (lid: string) => this.resolveLid(connectedAccountId, lid);
          await ingestHistory(userId, connectedAccountId, chats, messages, contacts, sock, resolveContactNameFn, resolveLidFn);
        } catch (e) {
          console.error(`Error processing history sync for account ${connectedAccountId}:`, e);
        }
      });

      sock.ev.on('messages.upsert', async (m) => {
        if (m.type === 'notify' || m.type === 'append') {
          const resolveContactNameFn = (jid: string) => this.resolveContactName(connectedAccountId, jid);
          const resolveLidFn = (lid: string) => this.resolveLid(connectedAccountId, lid);
          for (const msg of m.messages) {
            try {
              await ingestMessage(userId, connectedAccountId, msg, undefined, sock, resolveContactNameFn, resolveLidFn);
            } catch (e) {
              console.error(`Error processing real-time message for account ${connectedAccountId}:`, e);
            }
          }
        }
      });

      sock.ev.on('contacts.upsert', async (contacts) => {
        try {
          this.updateContactsInCache(connectedAccountId, contacts);
          for (const contact of contacts) {
            const name = contact.name || contact.verifiedName || contact.notify;
            if (contact.id && name) {
              let targetJid = contact.id;
              if (targetJid.endsWith('@lid')) {
                const phoneJid = this.resolveLid(connectedAccountId, targetJid);
                if (phoneJid) {
                  targetJid = phoneJid;
                }
              }
              const conv = await prisma.communicationConversation.findUnique({
                where: {
                  connectedAccountId_remoteConversationId: {
                    connectedAccountId,
                    remoteConversationId: targetJid,
                  },
                },
              });
              if (conv && (isFallbackTitle(conv.title) || (!isFallbackTitle(name) && conv.title !== name))) {
                await prisma.communicationConversation.update({
                  where: { id: conv.id },
                  data: { title: name },
                });
              }
            }
          }
        } catch (e) {
          console.error(`Error in contacts.upsert for account ${connectedAccountId}:`, e);
        }
      });

      sock.ev.on('contacts.update', async (updates) => {
        try {
          this.updateContactsInCache(connectedAccountId, updates);
          for (const update of updates) {
            const name = update.name || update.verifiedName || update.notify;
            if (update.id && name) {
              let targetJid = update.id;
              if (targetJid.endsWith('@lid')) {
                const phoneJid = this.resolveLid(connectedAccountId, targetJid);
                if (phoneJid) {
                  targetJid = phoneJid;
                }
              }
              const conv = await prisma.communicationConversation.findUnique({
                where: {
                  connectedAccountId_remoteConversationId: {
                    connectedAccountId,
                    remoteConversationId: targetJid,
                  },
                },
              });
              if (conv && (isFallbackTitle(conv.title) || (!isFallbackTitle(name) && conv.title !== name))) {
                await prisma.communicationConversation.update({
                  where: { id: conv.id },
                  data: { title: name },
                });
              }
            }
          }
        } catch (e) {
          console.error(`Error in contacts.update for account ${connectedAccountId}:`, e);
        }
      });

      sock.ev.on('chats.upsert', async (chats) => {
        try {
          for (const chat of chats) {
            if (chat.id && chat.name) {
              let targetJid = chat.id;
              if (targetJid.endsWith('@lid')) {
                const phoneJid = this.resolveLid(connectedAccountId, targetJid);
                if (phoneJid) {
                  targetJid = phoneJid;
                }
              }
              const conv = await prisma.communicationConversation.findUnique({
                where: {
                  connectedAccountId_remoteConversationId: {
                    connectedAccountId,
                    remoteConversationId: targetJid,
                  },
                },
              });
              if (conv && (isFallbackTitle(conv.title) || (!isFallbackTitle(chat.name) && conv.title !== chat.name))) {
                await prisma.communicationConversation.update({
                  where: { id: conv.id },
                  data: { title: chat.name },
                });
              }
            }
          }
        } catch (e) {
          console.error(`Error in chats.upsert for account ${connectedAccountId}:`, e);
        }
      });

      sock.ev.on('chats.update', async (updates) => {
        try {
          for (const update of updates) {
            if (update.id && update.name) {
              let targetJid = update.id;
              if (targetJid.endsWith('@lid')) {
                const phoneJid = this.resolveLid(connectedAccountId, targetJid);
                if (phoneJid) {
                  targetJid = phoneJid;
                }
              }
              const conv = await prisma.communicationConversation.findUnique({
                where: {
                  connectedAccountId_remoteConversationId: {
                    connectedAccountId,
                    remoteConversationId: targetJid,
                  },
                },
              });
              if (conv && (isFallbackTitle(conv.title) || (!isFallbackTitle(update.name) && conv.title !== update.name))) {
                await prisma.communicationConversation.update({
                  where: { id: conv.id },
                  data: { title: update.name },
                });
              }
            }
          }
        } catch (e) {
          console.error(`Error in chats.update for account ${connectedAccountId}:`, e);
        }
      });

      sock.ev.on('groups.update', async (updates) => {
        try {
          for (const update of updates) {
            const jid = update.id;
            const subject = update.subject;
            if (jid && subject) {
              const conv = await prisma.communicationConversation.findUnique({
                where: {
                  connectedAccountId_remoteConversationId: {
                    connectedAccountId,
                    remoteConversationId: jid,
                  },
                },
              });
              if (conv) {
                await prisma.communicationConversation.update({
                  where: { id: conv.id },
                  data: { title: subject },
                });
              }
            }
          }
        } catch (e) {
          console.error(`Error in groups.update for account ${connectedAccountId}:`, e);
        }
      });

    } catch (err) {
      console.error(`Failed to start connection for account ${connectedAccountId}:`, err);
      this.statuses.set(connectedAccountId, 'ERROR');
    }
  }

  /**
   * Initiates a pending session for QR or pairing-code authentication.
   * Ensures exactly one unauthenticated socket exists per user attempt.
   */
  public async initiatePendingConnection(
    pendingConnectionId: string,
    userId: string,
    options: PendingConnectionOptions = { method: 'qr' }
  ): Promise<string> {
    const method: ConnectionMethod = options.method === 'pairing_code' ? 'pairing_code' : 'qr';

    // Close and clean up any stale pending connections for the same user ID to enforce a single-socket check
    for (const [id, session] of this.pendingConnections.entries()) {
      if (session.userId === userId) {
        console.log(`[Diagnostic] Canceling previous pending pairing socket ${id} for user ${userId}`);
        this.cancelPendingConnection(id);
      }
    }

    const memoryAuth = {
      creds: initAuthCreds(),
      keysData: {} as Record<string, Record<string, unknown>>,
    };

    const state: AuthenticationState = {
      creds: memoryAuth.creds,
      keys: {
        get: async (type, ids) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: Record<string, any> = {};
          const categoryData = memoryAuth.keysData[type] || {};
          for (const id of ids) {
            data[id] = categoryData[id];
          }
          return data;
        },
        set: async (data: Record<string, Record<string, unknown>>) => {
          for (const category in data) {
            if (!memoryAuth.keysData[category]) {
              memoryAuth.keysData[category] = {};
            }
            for (const id in data[category]) {
              const value = data[category][id];
              if (value) {
                memoryAuth.keysData[category][id] = value;
              } else {
                delete memoryAuth.keysData[category][id];
              }
            }
          }
        },
      },
    };

    const version = await this.getWaVersion();
    const waWebVersionStr = version ? version.join('.') : 'latest';

    const pendingSession: PendingConnection = {
      sock: null,
      status: 'CONNECTING',
      method,
      qr: null,
      pairingCode: null,
      userId,
      phoneNumber: options.phoneNumber,
      diagnostic: {
        connectionState: 'connecting',
        statusCode: null,
        disconnectReason: null,
        baileysVersion: BAILEYS_VERSION,
        waWebVersion: waWebVersionStr,
        timestamp: new Date().toISOString(),
        errorDetail: null,
      },
      memoryAuth,
    };

    this.pendingConnections.set(pendingConnectionId, pendingSession);

    // If pairing-code method is chosen, request pairing code once socket enters connection setup
    let pairingCodeRequested = false;

    const connect = () => {
      // Clean up previous socket if it exists (in case connect is called on restart)
      if (pendingSession.sock) {
        try {
          pendingSession.sock.ev.removeAllListeners('connection.update');
          pendingSession.sock.ev.removeAllListeners('creds.update');
          pendingSession.sock.end(undefined);
        } catch {}
      }

      const sock = makeWASocket({
        version,
        auth: state,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS('Chrome'),
      });

      pendingSession.sock = sock;

      const triggerPairingCode = async () => {
        if (pairingCodeRequested || !options.phoneNumber || method !== 'pairing_code') return;
        pairingCodeRequested = true;

        try {
          // Wait briefly for the socket connection handshake to be ready
          await new Promise((resolve) => setTimeout(resolve, 1500));

          if (!this.pendingConnections.has(pendingConnectionId)) return;

          console.log(`[Diagnostic][Pending][PairingCode] Requesting pairing code for connection ID: ${pendingConnectionId} | WA Web: ${waWebVersionStr}`);

          const rawCode = await sock.requestPairingCode(options.phoneNumber);
          if (!rawCode) {
            throw new Error('No pairing code returned by WhatsApp server');
          }

          // Format 8-character Crockford string as XXXX-XXXX
          const formattedCode = rawCode.length === 8 ? `${rawCode.slice(0, 4)}-${rawCode.slice(4)}` : rawCode;
          pendingSession.pairingCode = formattedCode;
          pendingSession.status = 'PAIRING_CODE_READY';
          pendingSession.diagnostic.timestamp = new Date().toISOString();
          console.log(`[Diagnostic][Pending][PairingCode] Successfully generated pairing code for connection: ${pendingConnectionId} | Time: ${new Date().toISOString()}`);
        } catch (err: unknown) {
          const errorMsg = err instanceof Error ? err.message : String(err);
          console.error(`[Diagnostic][Pending][PairingCodeError] Failed for connection ${pendingConnectionId}:`, errorMsg);
          pendingSession.status = 'ERROR';
          pendingSession.diagnostic.errorDetail = errorMsg;
          pendingSession.diagnostic.disconnectReason = errorMsg;
          pendingSession.diagnostic.timestamp = new Date().toISOString();
        }
      };

      if (method === 'pairing_code') {
        triggerPairingCode();
      }

      sock.ev.on('creds.update', () => {
        const timestamp = new Date().toISOString();
        console.log(`[Diagnostic][Pending][CredsUpdate] Connection ID: ${pendingConnectionId} | Time: ${timestamp}`);
      });

      sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;
        const timestamp = new Date().toISOString();
        const statusCode = (lastDisconnect?.error as { output?: { statusCode?: number } })?.output?.statusCode;
        const disconnectReason = lastDisconnect?.error
          ? (lastDisconnect.error as Error).message || String(lastDisconnect.error)
          : null;

        pendingSession.diagnostic.connectionState = connection || pendingSession.diagnostic.connectionState;
        if (statusCode !== undefined) pendingSession.diagnostic.statusCode = statusCode;
        if (disconnectReason) pendingSession.diagnostic.disconnectReason = disconnectReason;
        pendingSession.diagnostic.timestamp = timestamp;

        console.log(
          `[Diagnostic][Pending][ConnUpdate] Connection ID: ${pendingConnectionId} | Method: ${method} | Time: ${timestamp} | State: ${connection || 'N/A'} | StatusCode: ${statusCode ?? 'N/A'} | DisconnectReason: ${disconnectReason || 'N/A'} | WA Web: ${waWebVersionStr} | Baileys: ${BAILEYS_VERSION}`
        );

        if (qr && method === 'qr') {
          console.log(`[Diagnostic][Pending][QR] QR Code Generated for Connection: ${pendingConnectionId} | Time: ${timestamp}`);
          try {
            const qrUrl = await QRCode.toDataURL(qr);
            pendingSession.qr = qrUrl;
            pendingSession.status = 'QR_READY';
          } catch {
            console.error('Failed to generate QR data URL for pending connection');
          }
        }

        if (connection === 'connecting') {
          if (pendingSession.status !== 'QR_READY' && pendingSession.status !== 'PAIRING_CODE_READY') {
            pendingSession.status = 'CONNECTING';
          }
        }

        if (connection === 'open') {
          console.log(`[Diagnostic][Pending][Open] WhatsApp connection opened/scanned successfully. Promoting session...`);
          pendingSession.status = 'CONNECTED';
          pendingSession.qr = null;
          pendingSession.pairingCode = null;
          this.restartAttempts.delete(pendingConnectionId);

          if (sock.user?.id) {
            const phone = sock.user.id.split(':')[0].split('@')[0];

            try {
              // Find if there's already a ConnectedAccount for this user & phone
              let connectedAccount = await prisma.connectedAccount.findFirst({
                where: {
                  userId,
                  provider: 'whatsapp_baileys',
                  providerAccountId: phone,
                },
              });

              if (!connectedAccount) {
                connectedAccount = await prisma.connectedAccount.create({
                  data: {
                    userId,
                    provider: 'whatsapp_baileys',
                    providerAccountId: phone,
                    email: phone,
                    accessToken: 'connected',
                    status: 'CONNECTED',
                  },
                });
              } else {
                connectedAccount = await prisma.connectedAccount.update({
                  where: { id: connectedAccount.id },
                  data: {
                    accessToken: 'connected',
                    status: 'CONNECTED',
                  },
                });
              }

              // Create or update WhatsAppSession in database
              await prisma.whatsAppSession.upsert({
                where: { connectedAccountId: connectedAccount.id },
                create: {
                  connectedAccountId: connectedAccount.id,
                  creds: JSON.stringify(memoryAuth.creds, BufferJSON.replacer),
                  keys: JSON.stringify(memoryAuth.keysData, BufferJSON.replacer),
                },
                update: {
                  creds: JSON.stringify(memoryAuth.creds, BufferJSON.replacer),
                  keys: JSON.stringify(memoryAuth.keysData, BufferJSON.replacer),
                },
              });

              // Close the pending socket safely
              sock.ev.removeAllListeners('connection.update');
              sock.ev.removeAllListeners('creds.update');
              sock.end(undefined);

              // Set status to CONNECTED so the frontend status checks receive success
              pendingSession.status = 'CONNECTED';
              pendingSession.qr = null;
              pendingSession.pairingCode = null;

              // Retain in pendingConnections for 60 seconds to satisfy in-flight status checks, then delete
              setTimeout(() => {
                this.pendingConnections.delete(pendingConnectionId);
              }, 60000);

              // Promote to activeSockets and boot as a real connection
              await this.startConnection(userId, connectedAccount.id);

            } catch (dbErr) {
              console.error('Failed to save promoted WhatsApp session to database:', dbErr);
              pendingSession.status = 'ERROR';
              pendingSession.diagnostic.errorDetail = 'Database error persisting WhatsApp session';
            }
          } else {
            pendingSession.status = 'ERROR';
            pendingSession.diagnostic.errorDetail = 'Socket authenticated without user ID';
          }
        }

        if (connection === 'close') {
          console.log(
            `[Diagnostic][Pending][Close] Connection closed. Connection ID: ${pendingConnectionId} | Method: ${method} | StatusCode: ${statusCode} | Reason: ${disconnectReason}`
          );
          if (statusCode === DisconnectReason.restartRequired) {
            const attempts = this.restartAttempts.get(pendingConnectionId) || 0;
            if (attempts < 5) {
              this.restartAttempts.set(pendingConnectionId, attempts + 1);
              console.log(`[Diagnostic][Pending][Restart] Expected restart (515) requested (attempt ${attempts + 1}/5). Reconnecting immediately...`);
              connect();
            } else {
              console.error(`[Diagnostic][Pending][Restart] Expected restart (515) requested but reached limit of 5 attempts. Failing.`);
              pendingSession.status = 'ERROR';
              pendingSession.diagnostic.errorDetail = 'Infinite restart loop detected';
            }
          } else if (statusCode === DisconnectReason.loggedOut) {
            pendingSession.status = 'LOGGED_OUT';
          } else if (statusCode === DisconnectReason.timedOut) {
            pendingSession.status = 'EXPIRED';
          } else {
            pendingSession.status = 'ERROR';
            if (!pendingSession.diagnostic.errorDetail && disconnectReason) {
              pendingSession.diagnostic.errorDetail = disconnectReason;
            }
          }
        }
      });
    };

    connect();

    return pendingConnectionId;
  }

  /**
   * Retrieves status for a pending setup connection (QR or pairing code).
   */
  public getPendingConnectionStatus(pendingConnectionId: string) {
    const session = this.pendingConnections.get(pendingConnectionId);
    if (!session) {
      return {
        status: 'DISCONNECTED' as ConnectionStatus,
        method: 'qr' as ConnectionMethod,
        qr: null,
        pairingCode: null,
        diagnostic: null,
      };
    }
    return {
      status: session.status,
      method: session.method,
      qr: session.qr,
      pairingCode: session.pairingCode,
      diagnostic: session.diagnostic,
    };
  }

  /**
   * Retrieves status for an active ConnectedAccount socket.
   */
  public getActiveConnectionStatus(connectedAccountId: string) {
    const status = this.statuses.get(connectedAccountId) || 'DISCONNECTED';
    const qr = this.qrs.get(connectedAccountId) || null;
    const diagnostic = this.diagnostics.get(connectedAccountId) || null;
    return { status, qr, diagnostic };
  }

  /**
   * Cancels a pending connection.
   */
  public cancelPendingConnection(pendingConnectionId: string) {
    const session = this.pendingConnections.get(pendingConnectionId);
    if (session) {
      try {
        session.sock.ev.removeAllListeners('connection.update');
        session.sock.ev.removeAllListeners('creds.update');
        session.sock.end(undefined);
      } catch {
        // Safe to ignore close errors
      }
      this.pendingConnections.delete(pendingConnectionId);
    }
  }

  /**
   * Disconnects an active account.
   */
  public async disconnectActiveConnection(connectedAccountId: string) {
    // Close socket
    const sock = this.activeSockets.get(connectedAccountId);
    if (sock) {
      try {
        sock.ev.removeAllListeners('connection.update');
        sock.ev.removeAllListeners('creds.update');
        sock.end(undefined);
      } catch {
        // Safe to ignore close errors
      }
      this.activeSockets.delete(connectedAccountId);
    }

    this.statuses.delete(connectedAccountId);
    this.diagnostics.delete(connectedAccountId);
    this.qrs.delete(connectedAccountId);

    // Delete WhatsApp session credentials in DB
    try {
      await prisma.whatsAppSession.deleteMany({
        where: { connectedAccountId },
      });

      // Update connected account to be disconnected (set accessToken to null, preserve history)
      await prisma.connectedAccount.update({
        where: { id: connectedAccountId },
        data: {
          accessToken: null,
          status: 'DISCONNECTED',
        },
      });
    } catch (e) {
      console.error(`Failed to delete session for account ${connectedAccountId}:`, e);
    }
  }

  /**
   * Background task to repair any fallback titles (like "Group Chat" or JIDs) for an active session.
   */
  private async repairConversationTitles(connectedAccountId: string, sock: any) {
    try {
      console.log(`[Repair] Starting conversation titles repair for account: ${connectedAccountId}`);
      const conversations = await prisma.communicationConversation.findMany({
        where: {
          connectedAccountId,
        },
      });

      for (const conv of conversations) {
        if (isFallbackTitle(conv.title)) {
          if (conv.isGroup) {
            try {
              const metadata = await sock.groupMetadata(conv.remoteConversationId);
              if (metadata?.subject) {
                console.log(`[Repair] Updating group subject for JID ${conv.remoteConversationId} to: ${metadata.subject}`);
                await prisma.communicationConversation.update({
                  where: { id: conv.id },
                  data: { title: metadata.subject },
                });
              }
            } catch (err) {
              console.error(`[Repair] Failed to fetch group metadata for ${conv.remoteConversationId}:`, err);
            }
          } else {
            // Find a non-fallback senderName in messages of this conversation
            const msgWithSender = await prisma.communicationMessage.findFirst({
              where: {
                conversationId: conv.id,
                isFromMe: false,
                senderName: { not: null },
              },
              orderBy: { sentAt: 'desc' },
            });

            if (msgWithSender?.senderName && !isFallbackTitle(msgWithSender.senderName)) {
              console.log(`[Repair] Updating private chat name for JID ${conv.remoteConversationId} to: ${msgWithSender.senderName}`);
              await prisma.communicationConversation.update({
                where: { id: conv.id },
                data: { title: msgWithSender.senderName },
              });
            }
          }
        }
      }
      console.log(`[Repair] Finished conversation titles repair for account: ${connectedAccountId}`);
    } catch (err) {
      console.error(`[Repair] Error in repairConversationTitles:`, err);
    }
  }

  private updateContactsInCache(connectedAccountId: string, contacts: any[]) {
    let cache = this.contactsCaches.get(connectedAccountId);
    if (!cache) {
      cache = new Map();
      this.contactsCaches.set(connectedAccountId, cache);
    }
    let lidMap = this.lidMaps.get(connectedAccountId);
    if (!lidMap) {
      lidMap = new Map();
      this.lidMaps.set(connectedAccountId, lidMap);
    }

    for (const contact of contacts) {
      if (!contact.id) continue;
      
      const existing = cache.get(contact.id) || {};
      const updated = { ...existing, ...contact };
      cache.set(contact.id, updated);

      if (contact.lid && contact.id.endsWith('@s.whatsapp.net')) {
        lidMap.set(contact.lid, contact.id);
      }
    }
  }

  public resolveContactName(connectedAccountId: string, jid: string): string | null {
    const cache = this.contactsCaches.get(connectedAccountId);
    const lidMap = this.lidMaps.get(connectedAccountId);
    
    let contact = cache?.get(jid);
    if (contact) {
      const name = contact.name || contact.verifiedName || contact.notify;
      if (name && !isFallbackTitle(name)) return name;
    }

    if (jid.endsWith('@lid') && lidMap) {
      const phoneJid = lidMap.get(jid);
      if (phoneJid) {
        contact = cache?.get(phoneJid);
        if (contact) {
          const name = contact.name || contact.verifiedName || contact.notify;
          if (name && !isFallbackTitle(name)) return name;
        }
      }
    }

    return null;
  }

  public resolveLid(connectedAccountId: string, lid: string): string | null {
    return this.lidMaps.get(connectedAccountId)?.get(lid) || null;
  }

  public getSocket(connectedAccountId: string) {
    return this.activeSockets.get(connectedAccountId);
  }

  /**
   * Helper function to wrap a promise with a timeout.
   */
  private async withTimeout<T>(promise: Promise<T>, timeoutMs: number, errorMessage = 'Operation timed out'): Promise<T> {
    let timeoutId: NodeJS.Timeout;
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(() => {
        reject(new Error(errorMessage));
      }, timeoutMs);
    });
    return Promise.race([promise, timeoutPromise]).finally(() => {
      clearTimeout(timeoutId);
    });
  }

  /**
   * Safe on-demand synchronization/reconciliation pass.
   * Fetches group metadata, resolves contact names, and retrieves/updates details.
   */
  public async syncHistory(connectedAccountId: string) {
    console.log(`[SyncHistory] Starting manual history sync for account: ${connectedAccountId}`);
    const sock = this.activeSockets.get(connectedAccountId);
    if (!sock) {
      console.error(`[SyncHistory] Socket not found in activeSockets map for account: ${connectedAccountId}`);
      throw new Error('Socket not active or connected');
    }

    let synced = 0;
    let skipped = 0;
    let hasError = false;

    // Operation A: repair conversation titles (logs internally, catches errors)
    try {
      console.log(`[SyncHistory] Operation A: Repairing conversation titles...`);
      await this.repairConversationTitles(connectedAccountId, sock);
    } catch (err) {
      console.error(`[SyncHistory] Repairing conversation titles failed:`, err);
      hasError = true;
    }

    // Operation B: fetch conversations from DB
    let conversations: any[] = [];
    try {
      console.log(`[SyncHistory] Operation B: Fetching conversations from DB...`);
      conversations = await prisma.communicationConversation.findMany({
        where: { connectedAccountId }
      });
      console.log(`[SyncHistory] Found ${conversations.length} conversations to reconcile.`);
    } catch (err) {
      console.error(`[SyncHistory] Fetching conversations from DB failed:`, err);
      throw err; // If we can't read the DB, the whole sync is a total failure
    }

    // Operation C: Reconcile each conversation (avatar and group metadata subject)
    for (const conv of conversations) {
      console.log(`[SyncHistory] Reconciling conversation JID: ${conv.remoteConversationId} (title: ${conv.title})`);
      let convSuccess = true;

      // 1. Fetch/update profile picture (optional)
      try {
        console.log(`[SyncHistory] Fetching profile picture for JID: ${conv.remoteConversationId}`);
        const avatarUrl = await this.withTimeout(
          sock.profilePictureUrl(conv.remoteConversationId, 'image'),
          3000,
          'Profile picture request timed out'
        );
        if (avatarUrl && conv.avatar !== avatarUrl) {
          console.log(`[SyncHistory] Updating avatar URL in DB for JID: ${conv.remoteConversationId}`);
          await prisma.communicationConversation.update({
            where: { id: conv.id },
            data: { avatar: avatarUrl }
          });
        }
      } catch (err: any) {
        console.warn(`[SyncHistory] Optional profile picture retrieval failed for ${conv.remoteConversationId}: ${err?.message || err}`);
        // Optional operation failure must NOT fail conversation reconciliation
      }

      // 2. Fetch/update group metadata subject (optional)
      if (conv.isGroup) {
        try {
          console.log(`[SyncHistory] Fetching group metadata for JID: ${conv.remoteConversationId}`);
          const metadata = await this.withTimeout(
            sock.groupMetadata(conv.remoteConversationId),
            3000,
            'Group metadata request timed out'
          ) as any;
          if (metadata?.subject && conv.title !== metadata.subject) {
            console.log(`[SyncHistory] Updating group subject in DB to: ${metadata.subject}`);
            await prisma.communicationConversation.update({
              where: { id: conv.id },
              data: { title: metadata.subject }
            });
          }
        } catch (err: any) {
          console.error(`[SyncHistory] Group metadata retrieval failed for group ${conv.remoteConversationId}: ${err?.message || err}`);
          convSuccess = false;
        }
      }

      if (convSuccess) {
        synced++;
      } else {
        skipped++;
        hasError = true;
      }
    }

    console.log(`[SyncHistory] Sync completed for account ${connectedAccountId}. Synced: ${synced}, Skipped: ${skipped}`);
    return {
      synced,
      skipped,
      partial: hasError
    };
  }

  private async getWaVersion(): Promise<[number, number, number] | undefined> {
    try {
      const { version, isLatest } = await fetchLatestWaWebVersion({});
      console.log(`[Diagnostic] WhatsApp Web version: ${version.join('.')} | isLatest: ${isLatest}`);
      return version as [number, number, number];
    } catch (err) {
      console.error('[Diagnostic] Failed to fetch latest WA version:', err);
    }
    return undefined;
  }
}

// Global instance to survive Next.js dev server hot reloading
const globalForWhatsApp = globalThis as unknown as {
  whatsAppConnectionManager: WhatsAppConnectionManager | undefined;
};

if (globalForWhatsApp.whatsAppConnectionManager) {
  const existing = globalForWhatsApp.whatsAppConnectionManager as any;
  if (!existing.contactsCaches) existing.contactsCaches = new Map();
  if (!existing.lidMaps) existing.lidMaps = new Map();
  
  // Dynamic hot-reload prototype transfer
  const proto = WhatsAppConnectionManager.prototype;
  for (const key of Object.getOwnPropertyNames(proto)) {
    if (key !== 'constructor') {
      const desc = Object.getOwnPropertyDescriptor(proto, key);
      if (desc) {
        Object.defineProperty(existing, key, desc);
      }
    }
  }
}

export const whatsAppConnectionManager =
  globalForWhatsApp.whatsAppConnectionManager ?? new WhatsAppConnectionManager();

if (process.env.NODE_ENV !== 'production') {
  globalForWhatsApp.whatsAppConnectionManager = whatsAppConnectionManager;
}
