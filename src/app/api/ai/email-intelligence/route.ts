import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { processUnprocessedEmailsForUser } from "@/lib/ai/email-intelligence";

export async function POST(request: Request) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    let limit = 20;
    let force = false;

    if (request.headers.get("content-type")?.includes("application/json")) {
      const body = await request.json();
      if (typeof body.limit === "number" && body.limit > 0) {
        limit = Math.min(body.limit, 50);
      }
      if (typeof body.force === "boolean") {
        force = body.force;
      }
    }

    const result = await processUnprocessedEmailsForUser(userId, { limit, force });
    return NextResponse.json({ success: true, ...result });
  } catch (err: unknown) {
    console.error(`AI Email Intelligence API error for user ${userId}:`, err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to process email intelligence" },
      { status: 500 }
    );
  }
}
