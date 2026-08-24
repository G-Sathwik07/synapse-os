import { WAMessage, proto } from '@whiskeysockets/baileys';
import { prisma } from '@/lib/prisma';

/**
 * Extracts preview text and type from a Baileys message object.
 */
export function getMessageContent(msg: proto.IMessage | null | undefined): { text: string; messageType: string } {
  if (!msg) return { text: '', messageType: 'text' };

  if (msg.conversation) {
    return { text: msg.conversation, messageType: 'text' };
  }
  if (msg.extendedTextMessage) {
    return { text: msg.extendedTextMessage.text || '', messageType: 'text' };
  }
  if (msg.imageMessage) {
    return { text: '[Image]', messageType: 'image' };
  }
  if (msg.videoMessage) {
    return { text: '[Video]', messageType: 'video' };
  }
  if (msg.audioMessage) {
    return { text: '[Audio]', messageType: 'audio' };
  }
  if (msg.documentMessage || msg.documentWithCaptionMessage) {
    return { text: '[Document]', messageType: 'document' };
  }
  if (msg.stickerMessage) {
    return { text: '[Sticker]', messageType: 'sticker' };
  }
  if (msg.locationMessage) {
    return { text: '[Location]', messageType: 'location' };
  }
  if (msg.contactMessage || msg.contactsArrayMessage) {
    return { text: '[Contact]', messageType: 'contact' };
  }
  if (msg.pollCreationMessage || msg.pollCreationMessageV2 || msg.pollCreationMessageV3) {
    return { text: '[Poll]', messageType: 'poll' };
  }

  // Handle nested messages (e.g. view once, ephemeral, etc.)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const m = msg as any;
  if (m.viewOnceMessage?.message) {
    return getMessageContent(m.viewOnceMessage.message);
  }
  if (m.viewOnceMessageV2?.message) {
    return getMessageContent(m.viewOnceMessageV2.message);
  }
  if (m.ephemeralMessage?.message) {
    return getMessageContent(m.ephemeralMessage.message);
  }
  if (m.documentWithCaptionMessage?.message) {
    return getMessageContent(m.documentWithCaptionMessage.message);
  }

  return { text: '[Other]', messageType: 'other' };
}

/**
 * Detects whether a conversation title is a fallback (null, empty, JID, phone number, or "Group Chat").
 */
export function isFallbackTitle(title: string | null | undefined): boolean {
  if (!title) return true;
  const clean = title.trim();
  if (clean === '' || clean === 'Group Chat') return true;
  if (clean.includes('@')) return true;
  
  // If it does not contain any letters (in any language) and contains numbers, it is likely a phone number
  const hasLetters = /\p{L}/u.test(clean);
  if (!hasLetters && /\d/.test(clean)) return true;
  return false;
}

/**
 * Ingests a single real-time message. Creates or updates conversation and inserts the message.
 */
export async function ingestMessage(
  userId: string,
  connectedAccountId: string,
  msg: WAMessage,
  contactNames?: Map<string, string>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sock?: any,
  resolveContactNameFn?: (jid: string) => string | null,
  resolveLidFn?: (lid: string) => string | null
) {
  let remoteJid = msg.key.remoteJid;
  if (!remoteJid) return;

  // Exclude WhatsApp Newsletters (Channels), broadcast lists, and status updates
  if (remoteJid === 'status@broadcast' || remoteJid.endsWith('@broadcast') || remoteJid.endsWith('@newsletter')) {
    return;
  }

  // Handle LID JID resolution
  if (remoteJid.endsWith('@lid') && resolveLidFn) {
    const phoneJid = resolveLidFn(remoteJid);
    if (phoneJid) {
      remoteJid = phoneJid;
    }
  }

  const remoteMessageId = msg.key.id;
  if (!remoteMessageId) return;

  const fromMe = msg.key.fromMe ?? false;
  const sentAt = msg.messageTimestamp
    ? new Date(Number(msg.messageTimestamp) * 1000)
    : new Date();

  const { text, messageType } = getMessageContent(msg.message);

  // Resolve sender details
  let senderId = '';
  let senderName = '';
  if (fromMe) {
    senderId = 'me';
    senderName = 'Me';
  } else {
    senderId = msg.key.participant || remoteJid;
    senderName = msg.pushName || contactNames?.get(senderId) || (resolveContactNameFn ? resolveContactNameFn(senderId) : null) || senderId.split('@')[0];
  }

  // Deduplicate
  const existingMessage = await prisma.communicationMessage.findUnique({
    where: {
      connectedAccountId_remoteMessageId: {
        connectedAccountId,
        remoteMessageId,
      },
    },
  });
  if (existingMessage) return existingMessage;

  // Check if conversation exists
  let conversation = await prisma.communicationConversation.findUnique({
    where: {
      connectedAccountId_remoteConversationId: {
        connectedAccountId,
        remoteConversationId: remoteJid,
      },
    },
  });

  const isGroup = remoteJid.endsWith('@g.us');
  let title = remoteJid.split('@')[0];
  if (isGroup) {
    title = 'Group Chat';
  } else {
    const pushName = msg.pushName;
    const contactName = contactNames?.get(remoteJid) || (resolveContactNameFn ? resolveContactNameFn(remoteJid) : null);
    let resolvedName = '';
    if (!fromMe && pushName) {
      resolvedName = pushName;
    } else if (contactName) {
      resolvedName = contactName;
    }
    if (resolvedName) {
      title = resolvedName;
    }
  }

  if (!conversation) {
    if (isGroup && title === 'Group Chat' && sock) {
      try {
        const metadata = await sock.groupMetadata(remoteJid);
        if (metadata?.subject) {
          title = metadata.subject;
        }
      } catch (err) {
        console.error(`Failed to fetch group metadata for ${remoteJid}:`, err);
      }
    } else if (!isGroup && isFallbackTitle(title)) {
      const storedSender = await prisma.communicationMessage.findFirst({
        where: {
          connectedAccountId,
          senderId: remoteJid,
          senderName: { not: null },
        },
        orderBy: { sentAt: 'desc' },
      });
      if (storedSender?.senderName && !isFallbackTitle(storedSender.senderName)) {
        title = storedSender.senderName;
      }
    }

    conversation = await prisma.communicationConversation.create({
      data: {
        userId,
        connectedAccountId,
        source: 'whatsapp',
        remoteConversationId: remoteJid,
        title,
        isGroup,
        lastMessageAt: sentAt,
        lastMessagePreview: text,
        unreadCount: fromMe ? 0 : 1,
      },
    });
  } else {
    // Update conversation last message details, unread count, and title (if existing is fallback and we have a better one)
    let newTitle = conversation.title;
    if (isFallbackTitle(conversation.title)) {
      if (isGroup) {
        if (sock) {
          try {
            const metadata = await sock.groupMetadata(remoteJid);
            if (metadata?.subject) {
              newTitle = metadata.subject;
            }
          } catch (err) {
            console.error(`Failed to fetch group metadata for ${remoteJid}:`, err);
          }
        }
      } else {
        const pushName = msg.pushName;
        const contactName = contactNames?.get(remoteJid) || (resolveContactNameFn ? resolveContactNameFn(remoteJid) : null);
        let resolvedName = '';
        if (!fromMe && pushName) {
          resolvedName = pushName;
        } else if (contactName) {
          resolvedName = contactName;
        } else {
          const storedSender = await prisma.communicationMessage.findFirst({
            where: {
              connectedAccountId,
              senderId: remoteJid,
              senderName: { not: null },
            },
            orderBy: { sentAt: 'desc' },
          });
          if (storedSender?.senderName && !isFallbackTitle(storedSender.senderName)) {
            resolvedName = storedSender.senderName;
          }
        }
        if (resolvedName) {
          newTitle = resolvedName;
        }
      }
    }

    conversation = await prisma.communicationConversation.update({
      where: { id: conversation.id },
      data: {
        title: newTitle,
        lastMessageAt: sentAt,
        lastMessagePreview: text,
        unreadCount: fromMe ? conversation.unreadCount : conversation.unreadCount + 1,
      },
    });
  }

  // Create message
  const message = await prisma.communicationMessage.create({
    data: {
      userId,
      connectedAccountId,
      conversationId: conversation.id,
      source: 'whatsapp',
      remoteMessageId,
      senderId,
      senderName,
      text,
      messageType,
      isFromMe: fromMe,
      isRead: fromMe,
      sentAt,
    },
  });

  return message;
}

/**
 * Bounded history synchronization helper. Ingests up to 30 recent chats and up to 50 messages per chat.
 */
export async function ingestHistory(
  userId: string,
  connectedAccountId: string,
  chats: unknown[],
  messages: unknown[],
  contacts: unknown[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sock?: any,
  resolveContactNameFn?: (jid: string) => string | null,
  resolveLidFn?: (lid: string) => string | null
) {
  // Build a contact names map
  const contactNames = new Map<string, string>();
  if (Array.isArray(contacts)) {
    for (const c of contacts) {
      const contactObj = c as Record<string, unknown>;
      const cid = contactObj.id as string;
      const cname = contactObj.name as string;
      const cnotify = contactObj.notify as string;
      if (cid && (cname || cnotify)) {
        contactNames.set(cid, cname || cnotify || '');
      }
    }
  }

  // Sort chats reverse chronologically by latest activity
  const sortedChats = [...chats].map(c => c as Record<string, unknown>).sort((a, b) => {
    const tA = Number(a.conversationTimestamp || a.lastMessageRecvTimestamp || 0);
    const tB = Number(b.conversationTimestamp || b.lastMessageRecvTimestamp || 0);
    return tB - tA;
  });

  // Limit to top 30 chats and filter out newsletters, status, and broadcasts
  const targetChats = sortedChats
    .filter((c) => {
      const jid = c.id as string | undefined;
      if (!jid) return false;
      if (jid === 'status@broadcast' || jid.endsWith('@broadcast') || jid.endsWith('@newsletter')) {
        return false;
      }
      return true;
    })
    .slice(0, 30);

  const targetJids = new Set(targetChats.map((c) => c.id as string).filter(Boolean));

  // Map messages to their respective chats
  const chatMessagesMap = new Map<string, Record<string, unknown>[]>();
  if (Array.isArray(messages)) {
    for (const m of messages) {
      const msgObj = m as Record<string, unknown>;
      const keyObj = msgObj.key as Record<string, unknown> | undefined;
      const jid = keyObj?.remoteJid as string | undefined;
      if (jid && targetJids.has(jid)) {
        if (!chatMessagesMap.has(jid)) {
          chatMessagesMap.set(jid, []);
        }
        chatMessagesMap.get(jid)!.push(msgObj);
      }
    }
  }

  for (const chat of targetChats) {
    let remoteJid = chat.id as string;
    if (!remoteJid) continue;

    // Handle LID resolution
    if (remoteJid.endsWith('@lid') && resolveLidFn) {
      const phoneJid = resolveLidFn(remoteJid);
      if (phoneJid) {
        remoteJid = phoneJid;
      }
    }

    const isGroup = remoteJid.endsWith('@g.us');
    let title = (chat.name as string) || contactNames.get(remoteJid) || (resolveContactNameFn ? resolveContactNameFn(remoteJid) : null) || '';
    if (!title || isFallbackTitle(title)) {
      title = isGroup ? 'Group Chat' : remoteJid.split('@')[0];
    }

    if (isGroup && title === 'Group Chat' && sock) {
      try {
        const metadata = await sock.groupMetadata(remoteJid);
        if (metadata?.subject) {
          title = metadata.subject;
        }
      } catch (err) {
        console.error(`Failed to fetch group metadata during history sync for ${remoteJid}:`, err);
      }
    }

    const conversationTimestamp = chat.conversationTimestamp || chat.lastMessageRecvTimestamp;
    const lastMessageAt = conversationTimestamp
      ? new Date(Number(conversationTimestamp) * 1000)
      : new Date();

    // Get messages for this conversation and sort chronologically
    const rawMsgs = chatMessagesMap.get(chat.id as string) || [];
    const sortedMsgs = [...rawMsgs].sort((a, b) => {
      const tA = Number(a.messageTimestamp || 0);
      const tB = Number(b.messageTimestamp || 0);
      return tA - tB;
    });

    // Bounded messages: take only the 50 most recent
    const targetMsgs = sortedMsgs.slice(-50);

    // Get last message text for preview
    let lastPreview = (chat.lastMessagePreview as string) || '';
    if (targetMsgs.length > 0) {
      const latestMsg = targetMsgs[targetMsgs.length - 1];
      const { text } = getMessageContent(latestMsg.message as proto.IMessage);
      lastPreview = text;
    }

    // Check if conversation already exists
    let conversation = await prisma.communicationConversation.findUnique({
      where: {
        connectedAccountId_remoteConversationId: {
          connectedAccountId,
          remoteConversationId: remoteJid,
        },
      },
    });

    if (!conversation) {
      conversation = await prisma.communicationConversation.create({
        data: {
          userId,
          connectedAccountId,
          source: 'whatsapp',
          remoteConversationId: remoteJid,
          title,
          isGroup,
          lastMessageAt,
          lastMessagePreview: lastPreview,
          unreadCount: (chat.unreadCount as number) ?? 0,
        },
      });
    } else {
      let newTitle = conversation.title;
      if (isFallbackTitle(conversation.title) && !isFallbackTitle(title)) {
        newTitle = title;
      }
      conversation = await prisma.communicationConversation.update({
        where: { id: conversation.id },
        data: {
          title: newTitle,
          lastMessageAt,
          lastMessagePreview: lastPreview,
          unreadCount: (chat.unreadCount as number) ?? conversation.unreadCount,
        },
      });
    }

    // Insert messages
    for (const msg of targetMsgs) {
      const keyObj = msg.key as Record<string, unknown>;
      const remoteMessageId = keyObj?.id as string | undefined;
      if (!remoteMessageId) continue;

      const fromMe = (keyObj.fromMe as boolean) ?? false;
      const sentAt = msg.messageTimestamp
        ? new Date(Number(msg.messageTimestamp) * 1000)
        : new Date();
      const { text, messageType } = getMessageContent(msg.message as proto.IMessage);

      let senderId = '';
      let senderName = '';
      if (fromMe) {
        senderId = 'me';
        senderName = 'Me';
      } else {
        senderId = (keyObj.participant as string) || remoteJid;
        senderName = (msg.pushName as string) || contactNames.get(senderId) || (resolveContactNameFn ? resolveContactNameFn(senderId) : null) || senderId.split('@')[0];
      }

      const existingMessage = await prisma.communicationMessage.findUnique({
        where: {
          connectedAccountId_remoteMessageId: {
            connectedAccountId,
            remoteMessageId,
          },
        },
      });

      if (!existingMessage) {
        await prisma.communicationMessage.create({
          data: {
            userId,
            connectedAccountId,
            conversationId: conversation.id,
            source: 'whatsapp',
            remoteMessageId,
            senderId,
            senderName,
            text,
            messageType,
            isFromMe: fromMe,
            isRead: fromMe,
            sentAt,
          },
        });
      }
    }
  }
}
