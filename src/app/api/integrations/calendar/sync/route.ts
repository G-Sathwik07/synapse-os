import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { syncSelectedCalendars } from "@/lib/calendar";

export async function POST(request: Request) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  let connectedAccountId: string | undefined;

  try {
    const { searchParams } = new URL(request.url);
    const queryId = searchParams.get("id") || searchParams.get("connectedAccountId");
    if (queryId) {
      connectedAccountId = queryId;
    } else if (request.headers.get("content-type")?.includes("application/json")) {
      const body = await request.json();
      connectedAccountId = body?.connectedAccountId || body?.accountId || body?.id;
    }
  } catch {
    // Optional body parsing failure ignored
  }

  try {
    const result = await syncSelectedCalendars(userId, connectedAccountId);
    return NextResponse.json({
      success: true,
      count: result.totalSynced,
      deletedCount: result.totalDeleted,
    });
  } catch (err: unknown) {
    console.error(`Calendar sync error for user ${userId}:`, err);

    const message = err instanceof Error ? err.message : "";

    // Handle 401/403 or specific Google API errors gracefully
    if (
      message.includes("auth") ||
      message.includes("invalid_grant") ||
      message.includes("expired") ||
      message.includes("revoked")
    ) {
      return NextResponse.json(
        { error: "Google Calendar authorization expired or was revoked. Please reconnect." },
        { status: 401 }
      );
    }

    if (message.includes("rate") || message.includes("429") || message.includes("quota")) {
      return NextResponse.json(
        { error: "Rate limit or quota exceeded. Please try again later." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: message || "Unable to sync Google Calendar. Please try again." },
      { status: 500 }
    );
  }
}
