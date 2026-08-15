import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AppShell } from "@/components/AppShell";
import { EmailDetailClient } from "./EmailDetailClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ emailId: string }>;
}) {
  const { emailId } = await params;
  const session = await auth();
  if (!session || !session.user?.id || !emailId) {
    return { title: "Email Detail | SynapseOS" };
  }

  const email = await prisma.emailMessage.findFirst({
    where: { id: emailId, userId: session.user.id },
    select: { subject: true },
  });

  return {
    title: email?.subject
      ? `${email.subject} | SynapseOS Email`
      : "Email Detail | SynapseOS",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ emailId: string }>;
}) {
  const session = await auth();
  if (!session || !session.user?.id) {
    redirect("/login");
  }

  const { emailId } = await params;
  if (!emailId) {
    notFound();
  }

  // Strictly user-scoped database query: email.id = emailId AND email.userId = authenticatedUser.id
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
    const calEvent = await prisma.calendarEvent.findFirst({
      where: {
        id: emailId,
        userId: session.user.id,
      },
    });

    if (calEvent) {
      redirect("/calendar");
    }

    notFound();
  }

  const serializedEmail = {
    id: email.id,
    gmailMessageId: email.gmailMessageId,
    sender: email.sender,
    recipients: email.recipients,
    subject: email.subject,
    snippet: email.snippet,
    bodyText: email.bodyText,
    receivedAt: email.receivedAt ? email.receivedAt.toISOString() : null,
    isRead: email.isRead,
    labels: email.labels,
    aiCategory: email.aiCategory,
    aiPriority: email.aiPriority,
    aiActionable: email.aiActionable,
    aiSummary: email.aiSummary,
    aiReason: email.aiReason,
    aiProcessedAt: email.aiProcessedAt ? email.aiProcessedAt.toISOString() : null,
    connectedAccount: {
      id: email.connectedAccount.id,
      email: email.connectedAccount.email,
      providerAccountId: email.connectedAccount.providerAccountId,
      scope: email.connectedAccount.scope,
    },
  };

  return (
    <AppShell current="/dashboard">
      <EmailDetailClient initialEmail={serializedEmail} />
    </AppShell>
  );
}
