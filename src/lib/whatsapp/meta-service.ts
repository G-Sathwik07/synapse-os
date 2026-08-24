import { AICategory, AIPriority } from "@/generated/client";

export interface MetaMessageSendResponse {
  messaging_product: string;
  contacts: Array<{ input: string; wa_id: string }>;
  messages: Array<{ id: string }>;
}

/**
 * Sends a WhatsApp message using Meta WhatsApp Cloud API.
 * Securely calls Meta servers and returns the external message ID.
 */
export async function sendMetaWhatsAppMessage(
  phoneNumberId: string,
  accessToken: string,
  to: string,
  text: string
): Promise<string> {
  const cleanPhone = to.replace(/[^0-9]/g, ""); // Keep only digits

  const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: cleanPhone,
      type: "text",
      text: {
        preview_url: false,
        body: text,
      },
    }),
  });

  const resJson = await response.json();

  if (!response.ok) {
    console.error("[WhatsAppMeta] Meta send API error:", resJson);
    const errorMsg = resJson?.error?.message || "Failed to send message via WhatsApp Meta API.";
    throw new Error(errorMsg);
  }

  const sendResponse = resJson as MetaMessageSendResponse;
  const messageId = sendResponse.messages?.[0]?.id;
  if (!messageId) {
    throw new Error("No message ID returned from WhatsApp Meta API.");
  }

  return messageId;
}

/**
 * Deterministically analyzes and scores incoming WhatsApp messages for V1.
 * Returns priority, category, actionability, and summary.
 */
export function scoreWhatsAppMessage(
  text: string,
  isFromMe: boolean,
  isGroup: boolean
): {
  category: AICategory;
  priority: AIPriority;
  actionable: boolean;
  summary: string;
  reason: string;
} {

  if (isFromMe) {
    return {
      category: AICategory.PERSONAL,
      priority: AIPriority.LOW,
      actionable: false,
      summary: text,
      reason: "Outbound message sent by user.",
    };
  }

  const lowerText = text.toLowerCase();

  // Basic classification signals based on keyword match
  let category: AICategory = AICategory.PERSONAL;
  let priority: AIPriority = AIPriority.MEDIUM;
  let actionable = false;
  let reason = "Inbound message from direct contact.";

  // Placement/Career matches
  if (
    lowerText.includes("interview") ||
    lowerText.includes("offer") ||
    lowerText.includes("job") ||
    lowerText.includes("career") ||
    lowerText.includes("resume") ||
    lowerText.includes("recruiter")
  ) {
    category = AICategory.PLACEMENT;
    priority = AIPriority.HIGH;
    actionable = true;
    reason = "Mentions recruiting, job offers, or interviews.";
  }
  // Academic / College matches
  else if (
    lowerText.includes("assignment") ||
    lowerText.includes("due") ||
    lowerText.includes("deadline") ||
    lowerText.includes("exam") ||
    lowerText.includes("test") ||
    lowerText.includes("college") ||
    lowerText.includes("univ") ||
    lowerText.includes("professor") ||
    lowerText.includes("class") ||
    lowerText.includes("grade")
  ) {
    category = AICategory.COLLEGE;
    priority = AIPriority.HIGH;
    actionable = lowerText.includes("submit") || lowerText.includes("due") || lowerText.includes("deadline");
    reason = "Mentions academic assignments, tests, or deadlines.";
  }
  // Financial matches
  else if (
    lowerText.includes("bank") ||
    lowerText.includes("payment") ||
    lowerText.includes("due date") ||
    lowerText.includes("bill") ||
    lowerText.includes("otp") ||
    lowerText.includes("card") ||
    lowerText.includes("transaction")
  ) {
    category = AICategory.FINANCE;
    priority = lowerText.includes("otp") || lowerText.includes("warning") ? AIPriority.HIGH : AIPriority.MEDIUM;
    actionable = lowerText.includes("pay") || lowerText.includes("otp");
    reason = "Contains financial terms or security codes.";
  }
  // Security alerts
  else if (
    lowerText.includes("security") ||
    lowerText.includes("warning") ||
    lowerText.includes("alert") ||
    lowerText.includes("password") ||
    lowerText.includes("unauthorized")
  ) {
    category = AICategory.SECURITY;
    priority = AIPriority.HIGH;
    actionable = true;
    reason = "Security alert or password warning.";
  }
  // Group chat optimization (lower priority by default)
  if (isGroup && priority === AIPriority.MEDIUM) {
    priority = AIPriority.LOW;
    reason = "Group chat message with medium signal, deprioritized.";
  }

  // Set action required check on specific verbs
  if (
    lowerText.includes("please reply") ||
    lowerText.includes("rsvp") ||
    lowerText.includes("asap") ||
    lowerText.includes("urgently") ||
    lowerText.includes("call me")
  ) {
    priority = AIPriority.HIGH;
    actionable = true;
    reason += " Expresses explicit urgency or request for reply.";
  }

  return {
    category,
    priority,
    actionable,
    summary: text.length > 80 ? text.slice(0, 77) + "..." : text,
    reason,
  };
}
