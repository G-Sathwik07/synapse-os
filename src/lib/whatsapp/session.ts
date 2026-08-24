import { proto, initAuthCreds, BufferJSON, AuthenticationState, AuthenticationCreds } from '@whiskeysockets/baileys';
import { prisma } from '@/lib/prisma';

/**
 * Custom Baileys auth state that persists credentials and signal keys to PostgreSQL via Prisma.
 */
export async function getPrismaAuthState(connectedAccountId: string): Promise<{ state: AuthenticationState; saveCreds: () => Promise<void> }> {
  // Try to load the WhatsApp session from the database.
  const session = await prisma.whatsAppSession.findUnique({
    where: { connectedAccountId },
  });

  let creds: AuthenticationCreds;
  let keysData: Record<string, Record<string, unknown>> = {};

  if (session) {
    try {
      creds = JSON.parse(session.creds, BufferJSON.reviver) as AuthenticationCreds;
    } catch {
      creds = initAuthCreds();
    }

    try {
      keysData = (JSON.parse(session.keys, BufferJSON.reviver) as Record<string, Record<string, unknown>>) || {};
    } catch {
      keysData = {};
    }
  } else {
    creds = initAuthCreds();
    keysData = {};
    // Pre-create the session row in database so it exists for future updates
    await prisma.whatsAppSession.create({
      data: {
        connectedAccountId,
        creds: JSON.stringify(creds, BufferJSON.replacer),
        keys: JSON.stringify(keysData, BufferJSON.replacer),
      },
    });
  }

  const saveCreds = async () => {
    await prisma.whatsAppSession.update({
      where: { connectedAccountId },
      data: {
        creds: JSON.stringify(creds, BufferJSON.replacer),
      },
    });
  };

  return {
    state: {
      creds,
      keys: {
        get: async (type: string, ids: string[]) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: Record<string, any> = {};
          const categoryData = keysData[type] || {};

          for (const id of ids) {
            let value = categoryData[id];
            if (type === 'app-state-sync-key' && value) {
              value = proto.Message.AppStateSyncKeyData.fromObject(value);
            }
            data[id] = value;
          }
          return data;
        },
        set: async (data: Record<string, Record<string, unknown>>) => {
          // data structure: { [category]: { [id]: value } }
          for (const category in data) {
            if (!keysData[category]) {
              keysData[category] = {};
            }

            for (const id in data[category]) {
              const value = data[category][id];
              if (value) {
                keysData[category][id] = value;
              } else {
                delete keysData[category][id];
              }
            }
          }

          await prisma.whatsAppSession.update({
            where: { connectedAccountId },
            data: {
              keys: JSON.stringify(keysData, BufferJSON.replacer),
            },
          });
        },
      },
    },
    saveCreds,
  };
}
