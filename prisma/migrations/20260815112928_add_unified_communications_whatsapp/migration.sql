-- CreateTable
CREATE TABLE "WhatsAppSession" (
    "id" TEXT NOT NULL,
    "connectedAccountId" TEXT NOT NULL,
    "creds" TEXT NOT NULL,
    "keys" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WhatsAppSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunicationConversation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "connectedAccountId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "remoteConversationId" TEXT NOT NULL,
    "title" TEXT,
    "avatar" TEXT,
    "isGroup" BOOLEAN NOT NULL DEFAULT false,
    "lastMessageAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastMessagePreview" TEXT,
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunicationConversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunicationMessage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "connectedAccountId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "remoteMessageId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "senderName" TEXT,
    "text" TEXT,
    "messageType" TEXT NOT NULL DEFAULT 'text',
    "isFromMe" BOOLEAN NOT NULL DEFAULT false,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunicationMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WhatsAppSession_connectedAccountId_key" ON "WhatsAppSession"("connectedAccountId");

-- CreateIndex
CREATE INDEX "CommunicationConversation_userId_idx" ON "CommunicationConversation"("userId");

-- CreateIndex
CREATE INDEX "CommunicationConversation_connectedAccountId_idx" ON "CommunicationConversation"("connectedAccountId");

-- CreateIndex
CREATE INDEX "CommunicationConversation_lastMessageAt_idx" ON "CommunicationConversation"("lastMessageAt");

-- CreateIndex
CREATE UNIQUE INDEX "CommunicationConversation_connectedAccountId_remoteConversa_key" ON "CommunicationConversation"("connectedAccountId", "remoteConversationId");

-- CreateIndex
CREATE INDEX "CommunicationMessage_userId_idx" ON "CommunicationMessage"("userId");

-- CreateIndex
CREATE INDEX "CommunicationMessage_conversationId_idx" ON "CommunicationMessage"("conversationId");

-- CreateIndex
CREATE INDEX "CommunicationMessage_connectedAccountId_idx" ON "CommunicationMessage"("connectedAccountId");

-- CreateIndex
CREATE INDEX "CommunicationMessage_sentAt_idx" ON "CommunicationMessage"("sentAt");

-- CreateIndex
CREATE UNIQUE INDEX "CommunicationMessage_connectedAccountId_remoteMessageId_key" ON "CommunicationMessage"("connectedAccountId", "remoteMessageId");

-- AddForeignKey
ALTER TABLE "WhatsAppSession" ADD CONSTRAINT "WhatsAppSession_connectedAccountId_fkey" FOREIGN KEY ("connectedAccountId") REFERENCES "ConnectedAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunicationConversation" ADD CONSTRAINT "CommunicationConversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunicationConversation" ADD CONSTRAINT "CommunicationConversation_connectedAccountId_fkey" FOREIGN KEY ("connectedAccountId") REFERENCES "ConnectedAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunicationMessage" ADD CONSTRAINT "CommunicationMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunicationMessage" ADD CONSTRAINT "CommunicationMessage_connectedAccountId_fkey" FOREIGN KEY ("connectedAccountId") REFERENCES "ConnectedAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunicationMessage" ADD CONSTRAINT "CommunicationMessage_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "CommunicationConversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
