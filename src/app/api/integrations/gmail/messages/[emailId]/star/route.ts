import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { updateMessageStarState } from "@/lib/gmail";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ emailId: string }> }
) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { emailId } = await params;
  if (!emailId) {
    return NextResponse.json({ error: "Email ID is required" }, { status: 400 });
  }

  try {
    let isStarred = true;
    try {
      const body = await request.json();
      if (typeof body.isStarred === "boolean") {
        isStarred = body.isStarred;
      }
    } catch {
      // default to true if no body
    }

    const updated = await updateMessageStarState(session.user.id, emailId, isStarred);
    return NextResponse.json({ success: true, message: updated });
  } catch (err: unknown) {
    console.error(`Star status update error for ${emailId}:`, err);
    const msg = err instanceof Error ? err.message : "Failed to update star status";
    if (msg.includes("not found") || msg.includes("unauthorized")) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }
    if (msg.includes("permission") || msg.includes("upgrade") || msg.includes("scope")) {
      return NextResponse.json({ error: msg }, { status: 403 });
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
