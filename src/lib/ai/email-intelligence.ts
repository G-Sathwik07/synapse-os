import { prisma } from "@/lib/prisma";
import { classifyEmailWithGemini, EmailDataInput } from "./gemini";
import { AICategory, AIPriority } from "@prisma/client";

/**
 * Processes unprocessed emails for a specific authenticated user.
 * Idempotent: Skips emails where aiProcessedAt is already set unless force is true.
 * Safe: Individual Gemini failures do not interrupt processing of other emails.
 */
export async function processUnprocessedEmailsForUser(
  userId: string,
  options: { limit?: number; force?: boolean } = {}
) {
  const { limit = 100, force = false } = options;

  if (!userId) {
    throw new Error("userId is required for email intelligence processing.");
  }

  // Strictly user-isolated database query
  const eligibleMessages = await prisma.emailMessage.findMany({
    where: {
      userId,
      ...(force ? {} : { aiProcessedAt: null }),
    },
    orderBy: { receivedAt: "desc" },
    take: limit,
  });

  let processedCount = 0;
  let failedCount = 0;

  for (const message of eligibleMessages) {
    try {
      // Data minimization: pass only safe public email fields, NO credentials or database IDs
      const inputData: EmailDataInput = {
        sender: message.sender,
        recipients: message.recipients,
        subject: message.subject,
        snippet: message.snippet,
        bodyText: message.bodyText,
        receivedAt: message.receivedAt,
      };

      const classification = await classifyEmailWithGemini(inputData);

      // Persist AI fields cleanly into PostgreSQL
      await prisma.emailMessage.update({
        where: { id: message.id },
        data: {
          aiCategory: classification.category as AICategory,
          aiPriority: classification.priority as AIPriority,
          aiActionable: classification.actionable,
          aiSummary: classification.summary,
          aiReason: classification.reason,
          aiProcessedAt: new Date(),
        },
      });

      processedCount++;
      // Pacing delay to avoid hitting Gemini free-tier rate limits (e.g. 5-15 RPM)
      await new Promise((res) => setTimeout(res, 600));
    } catch (err) {
      failedCount++;
      console.error(
        `[EmailIntelligence] Failed to classify email ${message.id} (Gmail ID: ${message.gmailMessageId}) for user ${userId}:`,
        err instanceof Error ? err.message : err
      );
      // Gemini failure leaves aiProcessedAt as null for future retry without breaking anything else
      await new Promise((res) => setTimeout(res, 600));
    }
  }

  return {
    totalEligible: eligibleMessages.length,
    processedCount,
    failedCount,
  };
}

/**
 * Triggers processing for a single message cleanly and securely.
 */
export async function processSingleEmailMessage(
  userId: string,
  messageId: string,
  force = false
) {
  const message = await prisma.emailMessage.findFirst({
    where: { id: messageId, userId },
  });

  if (!message) {
    throw new Error("Email message not found or unauthorized access.");
  }

  if (message.aiProcessedAt && !force) {
    return { skipped: true, messageId };
  }

  const inputData: EmailDataInput = {
    sender: message.sender,
    recipients: message.recipients,
    subject: message.subject,
    snippet: message.snippet,
    bodyText: message.bodyText,
    receivedAt: message.receivedAt,
  };

  const classification = await classifyEmailWithGemini(inputData);

  const updated = await prisma.emailMessage.update({
    where: { id: message.id },
    data: {
      aiCategory: classification.category as AICategory,
      aiPriority: classification.priority as AIPriority,
      aiActionable: classification.actionable,
      aiSummary: classification.summary,
      aiReason: classification.reason,
      aiProcessedAt: new Date(),
    },
  });

  return { skipped: false, message: updated };
}
