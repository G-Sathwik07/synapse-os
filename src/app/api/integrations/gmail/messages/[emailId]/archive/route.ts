import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { archiveMessage } from "@/lib/gmail";

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
    const updated = await archiveMessage(session.user.id, emailId);
    return NextResponse.json({ success: true, message: updated });
  } catch (err: unknown) {
    console.error(`Archive error for ${emailId}:`, err);
    const msg = err instanceof Error ? err.message : "Failed to archive email";
    if (msg.includes("not found") || msg.includes("unauthorized")) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }
    if (msg.includes("permission") || msg.includes("upgrade") || msg.includes("scope")) {
      return NextResponse.json({ error: msg }, { status: 403 });
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
