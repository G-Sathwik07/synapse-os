import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const connectedAccounts = await prisma.connectedAccount.findMany({
      where: {
        userId,
        provider: "google_gmail",
        accessToken: { not: null },
        refreshToken: { not: null },
      },
      include: {
        _count: {
          select: { emailMessages: true },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    if (connectedAccounts.length === 0) {
      return NextResponse.json({ connected: false, accounts: [] });
    }

    const totalMessageCount = await prisma.emailMessage.count({
      where: { userId },
    });

    const accounts = connectedAccounts.map((acc) => ({
      id: acc.id,
      email: acc.email || acc.providerAccountId,
      providerAccountId: acc.providerAccountId,
      lastSyncedAt: acc.updatedAt.toISOString(),
      messageCount: acc._count.emailMessages,
    }));

    return NextResponse.json({
      connected: true,
      accounts,
      // Backwards compatibility for single account checks:
      email: accounts[0].email,
      lastSyncedAt: accounts[0].lastSyncedAt,
      messageCount: totalMessageCount,
    });
  } catch (err: unknown) {
    console.error("Failed to retrieve Gmail status:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const { searchParams } = new URL(request.url);
  let id = searchParams.get("id");

  if (!id) {
    try {
      const body = await request.json();
      id = body?.id;
    } catch {
      // Body not present or invalid JSON
    }
  }

  try {
    let connectedAccount;
    if (id) {
      connectedAccount = await prisma.connectedAccount.findFirst({
        where: {
          id,
          userId,
          provider: "google_gmail",
        },
      });
    } else {
      connectedAccount = await prisma.connectedAccount.findFirst({
        where: {
          userId,
          provider: "google_gmail",
          accessToken: { not: null },
        },
      });
    }

    if (!connectedAccount) {
      return NextResponse.json(
        { error: "Gmail connection not found" },
        { status: 404 }
      );
    }

    // Invalidate/remove Gmail credentials (but preserve database records of emails)
    await prisma.connectedAccount.update({
      where: { id: connectedAccount.id },
      data: {
        accessToken: null,
        refreshToken: null,
        expiresAt: null,
        scope: null,
      },
    });

    return NextResponse.json({ success: true, disconnectedId: connectedAccount.id });
  } catch (err: unknown) {
    console.error("Failed to disconnect Gmail:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
