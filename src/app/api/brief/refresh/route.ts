import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { syncGmailMessages } from "@/lib/gmail";
import { processUnprocessedEmailsForUser } from "@/lib/ai/email-intelligence";
import { invalidateBriefCache } from "@/lib/brief/brief-service";

export async function POST() {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    // 1. Fetch all connected Gmail accounts
    const activeGmailAccounts = await prisma.connectedAccount.findMany({
      where: {
        userId,
        provider: "google_gmail",
        accessToken: { not: null },
        refreshToken: { not: null },
      },
      select: { id: true },
    });

    // 2. Sync each account
    for (const account of activeGmailAccounts) {
      try {
        await syncGmailMessages(userId, account.id, 20);
      } catch (err) {
        console.error(`[BriefRefresh] Failed to sync account ${account.id}:`, err);
        // Continue syncing other accounts if one fails
      }
    }

    // 3. Process unprocessed messages using email-intelligence
    try {
      await processUnprocessedEmailsForUser(userId, { limit: 10 });
    } catch (err) {
      console.error("[BriefRefresh] Failed to process email intelligence:", err);
    }

    // 4. Invalidate the brief synthesis cache for this user
    invalidateBriefCache(userId);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[BriefRefresh] Exception:", err);
    const errMsg = err instanceof Error ? err.message : "Internal server error during refresh";
    return NextResponse.json(
      { error: errMsg },
      { status: 500 }
    );
  }
}
