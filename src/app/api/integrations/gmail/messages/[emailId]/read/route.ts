import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { updateMessageReadState } from "@/lib/gmail";

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
    let isRead = true;
    try {
      const body = await request.json();
      if (typeof body.isRead === "boolean") {
        isRead = body.isRead;
      }
    } catch {
      // default to true if no body
    }

    const updated = await updateMessageReadState(session.user.id, emailId, isRead);
    return NextResponse.json({ success: true, message: updated });
  } catch (err: unknown) {
    console.error(`Read status update error for ${emailId}:`, err);
    const msg = err instanceof Error ? err.message : "Failed to update read status";
    if (msg.includes("not found") || msg.includes("unauthorized")) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }
    if (msg.includes("permission") || msg.includes("upgrade") || msg.includes("scope")) {
      return NextResponse.json({ error: msg }, { status: 403 });
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
