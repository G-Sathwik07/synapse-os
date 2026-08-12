-- CreateEnum
CREATE TYPE "AICategory" AS ENUM ('WORK', 'COLLEGE', 'PLACEMENT', 'PERSONAL', 'FINANCE', 'SOCIAL', 'PROMOTION', 'NEWSLETTER', 'SECURITY', 'TRANSACTION', 'OTHER');

-- CreateEnum
CREATE TYPE "AIPriority" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- AlterTable
ALTER TABLE "EmailMessage" ADD COLUMN     "aiActionable" BOOLEAN,
ADD COLUMN     "aiCategory" "AICategory",
ADD COLUMN     "aiPriority" "AIPriority",
ADD COLUMN     "aiProcessedAt" TIMESTAMP(3),
ADD COLUMN     "aiReason" TEXT,
ADD COLUMN     "aiSummary" TEXT;

-- CreateIndex
CREATE INDEX "EmailMessage_userId_aiProcessedAt_idx" ON "EmailMessage"("userId", "aiProcessedAt");
