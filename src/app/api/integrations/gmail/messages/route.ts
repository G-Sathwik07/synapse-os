import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get("limit");
  const connectedAccountId = searchParams.get("connectedAccountId") || searchParams.get("accountId");

  let limit = 5;
  if (limitParam) {
    const parsed = parseInt(limitParam, 10);
    if (!isNaN(parsed) && parsed > 0) {
      limit = Math.min(parsed, 50); // safe max limit of 50
    }
  }

  try {
    const activeAccounts = await prisma.connectedAccount.findMany({
      where: {
        userId: session.user.id,
        provider: "google_gmail",
        accessToken: { not: null },
        refreshToken: { not: null },
        ...(connectedAccountId ? { id: connectedAccountId } : {}),
      },
      select: { id: true },
    });

    const activeAccountIds = activeAccounts.map((a) => a.id);

    if (activeAccountIds.length === 0) {
      return NextResponse.json([]);
    }

    const messages = await prisma.emailMessage.findMany({
      where: {
        userId: session.user.id,
        connectedAccountId: { in: activeAccountIds },
      },
      include: {
        connectedAccount: {
          select: { email: true, providerAccountId: true },
        },
      },
      orderBy: [
        { receivedAt: "desc" },
        { createdAt: "desc" },
      ],
      take: limit,
    });

    return NextResponse.json(messages);
  } catch (err) {
    console.error("Failed to query Gmail messages:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
