import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import {
  updateMessageReadState,
  updateMessageStarState,
  archiveMessage,
} from "@/lib/gmail";

export async function GET(
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
    const email = await prisma.emailMessage.findFirst({
      where: {
        id: emailId,
        userId: session.user.id,
      },
      include: {
        connectedAccount: {
          select: {
            id: true,
            email: true,
            providerAccountId: true,
            scope: true,
          },
        },
      },
    });

    if (!email) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }

    return NextResponse.json(email);
  } catch (err) {
    console.error(`Failed to fetch email detail for ${emailId}:`, err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

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
    const body = await request.json();
    const action = body?.action;

    let result;
    if (action === "read") {
      result = await updateMessageReadState(session.user.id, emailId, true);
    } else if (action === "unread") {
      result = await updateMessageReadState(session.user.id, emailId, false);
    } else if (action === "star") {
      result = await updateMessageStarState(session.user.id, emailId, true);
    } else if (action === "unstar") {
      result = await updateMessageStarState(session.user.id, emailId, false);
    } else if (action === "archive") {
      result = await archiveMessage(session.user.id, emailId);
    } else {
      return NextResponse.json({ error: `Invalid action: ${action}` }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: result });
  } catch (err: unknown) {
    console.error(`Action error for email ${emailId}:`, err);
    const msg = err instanceof Error ? err.message : "Failed to execute Gmail action";

    if (msg.includes("not found") || msg.includes("unauthorized")) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }
    if (msg.includes("permission") || msg.includes("upgrade") || msg.includes("scope")) {
      return NextResponse.json({ error: msg }, { status: 403 });
    }

    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ emailId: string }> }
) {
  return POST(request, context);
}
