import { AppShell } from '@/components/AppShell';
import Link from 'next/link';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { ServiceIcon } from '@/components/ServiceIcon';
import {
  Calendar,
  Mail,
  Github,
  Sparkles,
  ArrowRight,
  Brain,
  Zap,
  Clock,
  FileText,
  TrendingUp,
  Plus,
  } from 'lucide-react';
import { recentActivity } from '@/lib/mock';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { getNormalizedBriefItems, generateBriefData, BriefInsight } from '@/lib/brief/brief-service';
import { BriefRefreshButton } from '@/components/BriefRefreshButton';

function formatTimeAgoDashboard(date: Date): string {
  try {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days}d`;
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  } catch {
    return "";
  }
}

export default async function Page() {
  const session = await auth();
  const userId = session?.user?.id;

  const activeGmailAccounts = userId ? await prisma.connectedAccount.findMany({
    where: {
      userId,
      provider: "google_gmail",
      accessToken: { not: null },
      refreshToken: { not: null },
    },
    select: { id: true, email: true, providerAccountId: true },
  }) : [];

  const activeWhatsAppAccounts = userId ? await prisma.connectedAccount.findMany({
    where: {
      userId,
      provider: { in: ["whatsapp_baileys", "whatsapp_meta"] },
      OR: [
        { status: "CONNECTED" },
        { status: null },
      ],
    },
    select: { id: true, email: true, providerAccountId: true },
  }) : [];

  const hasConnectedGmail = activeGmailAccounts.length > 0 || activeWhatsAppAccounts.length > 0;
  const activeAccountIds = activeGmailAccounts.map(a => a.id);
  const activeWhatsAppIds = activeWhatsAppAccounts.map(a => a.id);

  const rawEmails = (userId && activeGmailAccounts.length > 0) ? await prisma.emailMessage.findMany({
    where: {
      userId,
      connectedAccountId: { in: activeAccountIds },
    },
    include: {
      connectedAccount: {
        select: { email: true, providerAccountId: true },
      },
    },
    orderBy: [
      { receivedAt: 'desc' },
      { createdAt: 'desc' },
    ],
    take: 30,
  }) : [];

  const rawWhatsAppMessages = (userId && activeWhatsAppAccounts.length > 0) ? await prisma.communicationMessage.findMany({
    where: {
      userId,
      connectedAccountId: { in: activeWhatsAppIds },
      isFromMe: false,
      OR: [
        { isRead: false },
        { aiPriority: "HIGH" },
      ],
    },
    include: {
      connectedAccount: {
        select: { email: true, providerAccountId: true },
      },
    },
    orderBy: [
      { sentAt: 'desc' },
      { createdAt: 'desc' },
    ],
    take: 30,
  }) : [];

  const adaptedEmails = rawEmails.map(e => ({
    id: e.id,
    source: "gmail",
    sender: e.sender,
    subject: e.subject,
    snippet: e.snippet,
    receivedAt: e.receivedAt || e.createdAt,
    isRead: e.isRead,
    aiCategory: e.aiCategory,
    aiPriority: e.aiPriority,
    aiActionable: e.aiActionable,
    aiSummary: e.aiSummary,
    aiProcessedAt: e.aiProcessedAt,
    connectedAccount: e.connectedAccount,
  }));

  const adaptedWhatsApp = rawWhatsAppMessages.map(w => ({
    id: w.id,
    source: "whatsapp",
    sender: w.senderName || w.senderId,
    subject: `Message from ${w.senderName || w.senderId}`,
    snippet: w.text,
    receivedAt: w.sentAt || w.createdAt,
    isRead: w.isRead,
    aiCategory: w.aiCategory,
    aiPriority: w.aiPriority,
    aiActionable: w.aiActionable,
    aiSummary: w.aiSummary || w.text,
    aiProcessedAt: w.aiProcessedAt,
    connectedAccount: w.connectedAccount,
  }));

  const combinedItems = [...adaptedEmails, ...adaptedWhatsApp];

  const priorityWeights: Record<string, number> = {
    HIGH: 3,
    MEDIUM: 2,
    LOW: 1,
  };

  const realEmails = combinedItems.sort((a, b) => {
    const aPriority = a.aiPriority ? (priorityWeights[a.aiPriority] || 0) : 0;
    const bPriority = b.aiPriority ? (priorityWeights[b.aiPriority] || 0) : 0;

    const aActionable = a.aiActionable ? 1 : 0;
    const bActionable = b.aiActionable ? 1 : 0;

    const aScore = aPriority * 10 + aActionable * 2;
    const bScore = bPriority * 10 + bActionable * 2;

    if (aScore !== bScore) {
      return bScore - aScore;
    }

    const aTime = a.receivedAt ? new Date(a.receivedAt).getTime() : 0;
    const bTime = b.receivedAt ? new Date(b.receivedAt).getTime() : 0;
    return bTime - aTime;
  });

  const highPriorityCount = realEmails.filter(m => m.aiPriority === 'HIGH').length;

  const unreadGmailCount = (userId && activeGmailAccounts.length > 0) ? await prisma.emailMessage.count({
    where: {
      userId,
      connectedAccountId: { in: activeAccountIds },
      isRead: false,
    },
  }) : 0;

  const unreadWhatsAppCount = (userId && activeWhatsAppAccounts.length > 0) ? await prisma.communicationMessage.count({
    where: {
      userId,
      connectedAccountId: { in: activeWhatsAppIds },
      isFromMe: false,
      isRead: false,
    },
  }) : 0;

  const calendarAccountsCount = userId ? await prisma.connectedAccount.count({
    where: {
      userId,
      provider: "google_calendar",
      accessToken: { not: null },
      refreshToken: { not: null },
    },
  }) : 0;

  const realConnectedApps = [
    ...(activeGmailAccounts.length > 0 ? [{ id: 'gmail', name: 'Gmail' }] : []),
    ...(calendarAccountsCount > 0 ? [{ id: 'calendar', name: 'Google Calendar' }] : []),
    ...(activeWhatsAppAccounts.length > 0 ? [{ id: 'whatsapp', name: 'WhatsApp' }] : []),
  ];

  const unreadCount = unreadGmailCount + unreadWhatsAppCount;
  const firstName = session?.user?.name ? session.user.name.split(' ')[0] : 'User';

  // Load Today's Brief state (Milestone 3.4)
  const briefData = await getNormalizedBriefItems(userId || "");

  let briefInsights: BriefInsight[] = [];
  let briefSynthesis = "";
  if (briefData.hasEmails && !briefData.hasPendingAI) {
    const briefResult = await generateBriefData(userId || "", briefData.items);
    briefInsights = briefResult.insights;
    briefSynthesis = briefResult.synthesis;
  }

  const currentDate = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const localDateStr = currentDate.toLocaleDateString('en-US', dateOptions);

  let dateAndStatsText = `${localDateStr}`;
  if (!briefData.hasGmailConnected) {
    dateAndStatsText += " · Connect accounts to get started";
  } else if (!briefData.hasEmails) {
    dateAndStatsText += " · No recent activity";
  } else if (briefData.hasPendingAI) {
    dateAndStatsText += " · AI analysis in progress";
  } else {
    dateAndStatsText += ` · ${briefInsights.length} ${briefInsights.length === 1 ? 'thing matters' : 'things matter'} today`;
    if (briefSynthesis) {
      dateAndStatsText += " · AI briefing active";
    }
  }

  return (
    <AppShell current="/dashboard">
      <div className="mx-auto max-w-7xl space-y-6 p-6 lg:p-8">
      {/* Greeting / Daily Brief hero */}
      <section className="surface-raised relative overflow-hidden p-7 lg:p-8">
        <NeuralNetwork className="pointer-events-none absolute inset-0 h-full w-full opacity-25" density={0.012} maxDist={130} interactive={false} />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/30 to-transparent" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Good morning, {firstName}</p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-white">Today&apos;s Brief</h1>
            <p className="mt-2 text-sm text-slate-400">{dateAndStatsText}</p>
          </div>
          <div className="flex items-center gap-2">
            {briefData.hasGmailConnected && <BriefRefreshButton />}
            <Link href='/memory' className="btn-ghost-sm">
              <Brain className="h-3.5 w-3.5 text-azure-300" />
              Open Memory
            </Link>
            <Link href='/knowledge-graph' className="btn-ghost-sm">
              <Zap className="h-3.5 w-3.5 text-violet-400" />
              View Graph
            </Link>
          </div>
        </div>

        {/* Priorities row or placeholder states */}
        {!briefData.hasGmailConnected ? (
          <div className="relative mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">
            <p className="text-sm text-slate-400">Connect Gmail or WhatsApp to let SynapseOS generate your daily brief.</p>
            <Link href="/integrations" className="mt-3 inline-flex rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-200 transition-all hover:bg-white/[0.06] hover:text-white">
              Connect Integrations
            </Link>
          </div>
        ) : !briefData.hasEmails ? (
          <div className="relative mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">
            <p className="text-sm text-slate-400">No activity to summarize yet.</p>
            <Link href="/integrations" className="mt-3 inline-flex rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-200 transition-all hover:bg-white/[0.06] hover:text-white">
              Manage Connections
            </Link>
          </div>
        ) : briefData.hasPendingAI ? (
          <div className="relative mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center flex flex-col items-center">
            <div className="animate-pulse flex flex-col items-center">
              <Sparkles className="h-6 w-6 text-violet-400 animate-spin mb-2" style={{ animationDuration: '3s' }} />
              <p className="text-sm text-slate-300 font-medium">AI analysis is in progress</p>
              <p className="text-xs text-slate-500 mt-1">Please wait while we process your emails for Today&apos;s Brief...</p>
            </div>
          </div>
        ) : (
          <div className="relative mt-6 space-y-2.5">
            {briefInsights.length === 0 ? (
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center w-full">
                <p className="text-sm font-semibold text-white">You&apos;re all caught up.</p>
                <p className="text-xs text-slate-500 mt-1">No important activity or upcoming actions require your attention today.</p>
              </div>
            ) : (
              briefInsights.map((insight, idx) => {
                const styles = getInsightBadgeStyles(insight.category);
                return (
                  <Link
                    key={idx}
                    href={`/dashboard/email/${insight.emailId}`}
                    className="group flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.015] p-3 transition-all hover:border-azure-400/20 hover:bg-white/[0.04] cursor-pointer block"
                  >
                    <span className={`shrink-0 rounded ${styles.bg} border ${styles.border} px-2 py-0.5 text-[9px] font-bold ${styles.text} uppercase tracking-wider`}>
                      {insight.category}
                    </span>
                    <p className="text-xs text-slate-300 leading-snug group-hover:text-white transition-colors">
                      {insight.description}
                    </p>
                  </Link>
                );
              })
            )}
          </div>
        )}

        {/* AI suggestion/synthesis */}
        {briefData.hasEmails && !briefData.hasPendingAI && briefSynthesis && (
          <div className="relative mt-4 flex items-start gap-3 rounded-xl border border-violet-400/20 bg-violet-500/5 p-4">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
            <div className="flex-1">
              <p className="text-xs font-medium text-violet-300">AI Intelligence · Executive Briefing</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-200">{briefSynthesis}</p>
            </div>
          </div>
        )}
      </section>

      {/* Main grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column - 2/3 */}
        <div className="space-y-6 lg:col-span-2">
          {/* Quick actions */}
          <section className="surface p-5">
            <SectionHeader title="Quick Actions" />
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                { label: 'New Memory', icon: Brain, color: 'text-azure-300' },
                { label: 'Schedule', icon: Calendar, color: 'text-azure-300' },
                { label: 'Compose', icon: Mail, color: 'text-rose-400' },
                { label: 'New Project', icon: Plus, color: 'text-emerald-400' },
              ].map((a) => (
                <button key={a.label} className="group flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-azure-400/20 hover:bg-white/[0.04]">
                  <a.icon className={`h-5 w-5 ${a.color} transition-transform group-hover:scale-110`} />
                  <span className="text-xs font-medium text-slate-300">{a.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Recent activity */}
          <section className="surface p-5">
            <div className="flex items-center justify-between">
              <SectionHeader title="Recent Activity" />
              <Link href='/memory' className="text-xs text-azure-300 hover:text-azure-200">View all</Link>
            </div>
            <div className="space-y-1">
              {recentActivity.map((a) => {
                const Icon = activityIcon(a.type);
                const color = activityColor(a.type);
                return (
                  <div key={a.id} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.03]">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] shadow-soft">
                      {a.source === 'memory' ? <Icon className={`h-4 w-4 ${color}`} /> : <ServiceIcon id={a.source} size={16} />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-200">{a.title}</p>
                      <p className="mt-0.5 truncate text-xs text-slate-500">{a.detail}</p>
                    </div>
                    <span className="shrink-0 text-xs text-slate-600">{a.time}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Knowledge graph preview */}
          <section className="surface-raised relative overflow-hidden p-5">
            <div className="flex items-center justify-between">
              <SectionHeader title="Knowledge Graph" />
              <Link href='/knowledge-graph' className="flex items-center gap-1 text-xs text-azure-300 hover:text-azure-200">
                Explore <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="relative h-56 overflow-hidden rounded-xl border border-white/[0.06]">
              <NeuralNetwork className="absolute inset-0 h-full w-full opacity-80" density={0.02} maxDist={120} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                <span className="chip"><span className="dot bg-azure-400" /> Project</span>
                <span className="chip"><span className="dot bg-violet-400" /> Person</span>
                <span className="chip"><span className="dot bg-emerald-400" /> Event</span>
              </div>
              <div className="absolute right-3 top-3 text-right">
                <p className="font-display text-2xl font-semibold text-white">1,284</p>
                <p className="text-xs text-slate-500">nodes · 3,912 edges</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right column - 1/3 */}
        <div className="space-y-6">
          {/* Upcoming calendar */}
          <section className="surface p-5">
            <div className="flex items-center justify-between">
              <SectionHeader title="Upcoming" />
              <span className="text-xs text-slate-500">Today</span>
            </div>
            <div className="space-y-2.5">
              {[
                { time: '3:00 PM', label: 'DBMS Lecture', meta: 'Multivalued dependencies', color: 'border-azure-400/40' },
                { time: '4:00 PM', label: 'Team Sync', meta: 'Moved from 3 PM · 5 attendees', color: 'border-emerald-400/40' },
                { time: '5:00 PM', label: 'Northwind Interview', meta: 'Backend Platform Engineer', color: 'border-violet-400/40' },
                { time: '7:00 PM', label: 'Assignment deadline', meta: 'DBMS Assignment #3', color: 'border-amber-400/40' },
              ].map((e, i) => (
                <div key={i} className={`rounded-xl border-l-2 ${e.color} bg-white/[0.02] p-3`}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200">{e.label}</p>
                    <span className="text-xs text-slate-500">{e.time}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">{e.meta}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Needs Attention card */}
          <section className="surface p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <SectionHeader title="Needs Attention" />
                {highPriorityCount > 0 && (
                  <span className="rounded-full bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 text-[10px] font-semibold text-rose-400">
                    {highPriorityCount} High
                  </span>
                )}
              </div>
              {hasConnectedGmail && unreadCount > 0 && (
                <span className="chip-azure text-[10px] py-0.5 px-2">{unreadCount} unread</span>
              )}
            </div>

            {!hasConnectedGmail ? (
              <div className="py-6 text-center">
                <p className="text-xs text-slate-400">
                  Connect Gmail or WhatsApp to let SynapseOS identify messages that need your attention.
                </p>
                <Link href="/integrations" className="mt-3 inline-flex rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-all hover:bg-white/[0.06] hover:text-white">
                  Connect Integrations
                </Link>
              </div>
            ) : realEmails.length === 0 ? (
              <div className="py-6 text-center">
                <p className="text-xs text-slate-500">No communication activity synchronized yet.</p>
                <Link href="/integrations" className="mt-3 inline-flex rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-all hover:bg-white/[0.06] hover:text-white">
                  Sync now
                </Link>
              </div>
            ) : (
              <div className="max-h-[290px] overflow-y-auto space-y-3 pr-1">
                {rawEmails.length > 0 && realEmails.every(m => !m.aiProcessedAt) && (
                  <div className="rounded-xl border border-violet-400/20 bg-violet-500/10 p-2.5 text-xs text-violet-200 flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-violet-400 shrink-0" />
                      Add GEMINI_API_KEY to .env.local and click Sync now to classify emails.
                    </span>
                    <Link href="/integrations" className="text-[10px] font-semibold underline text-violet-300 hover:text-white shrink-0 ml-2">
                      Sync now
                    </Link>
                  </div>
                )}

                {realEmails.map((m) => {
                  const unread = !m.isRead;
                  let displayName = m.sender || "Unknown Sender";
                  if (displayName.includes("<")) {
                    const match = displayName.match(/^([^<]+)/);
                    if (match && match[1].trim()) {
                      displayName = match[1].trim().replace(/^['"]|['"]$/g, "");
                    } else {
                      const emailMatch = displayName.match(/<([^>]+)>/);
                      if (emailMatch) displayName = emailMatch[1];
                    }
                  }
                  const timeStr = m.receivedAt ? formatTimeAgoDashboard(new Date(m.receivedAt)) : "";
                  const sourceEmail = m.connectedAccount?.email || m.connectedAccount?.providerAccountId;

                  const priority = m.aiPriority;
                  const category = m.aiCategory;
                  const actionable = m.aiActionable;
                  const summary = m.aiSummary;
                  const isProcessed = Boolean(m.aiProcessedAt);

                  return (
                    <Link
                      key={m.id}
                      href={m.source === 'whatsapp' ? '/communications' : `/dashboard/email/${m.id}`}
                      className={`group flex flex-col gap-2 rounded-xl p-3.5 transition-all border block cursor-pointer hover:border-azure-400/50 ${
                        unread
                          ? "border-azure-400/25 bg-azure-500/[0.03] hover:bg-azure-500/[0.06]"
                          : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      {/* Top Row: AI Badges & Metadata */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {/* Priority Badge */}
                          {priority === "HIGH" && (
                            <span className="inline-flex items-center gap-1 rounded-md border border-rose-500/40 bg-rose-500/20 px-2 py-0.5 text-[10px] font-bold text-rose-300 shadow-soft">
                              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse-soft" />
                              HIGH PRIORITY
                            </span>
                          )}
                          {priority === "MEDIUM" && (
                            <span className="inline-flex items-center gap-1 rounded-md border border-amber-500/40 bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                              MEDIUM
                            </span>
                          )}
                          {priority === "LOW" && (
                            <span className="inline-flex items-center gap-1 rounded-md border border-slate-500/30 bg-slate-500/20 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                              LOW
                            </span>
                          )}

                          {/* Category Pill */}
                          {category && (
                            <span className="rounded-md border border-violet-400/35 bg-violet-500/20 px-2 py-0.5 text-[10px] font-bold text-violet-300 uppercase tracking-wider">
                              {category}
                            </span>
                          )}

                          {/* Actionability Badge */}
                          {actionable && (
                            <span className="inline-flex items-center gap-1 rounded-md border border-emerald-400/40 bg-emerald-400/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                              <Zap className="h-3 w-3 text-emerald-400" /> Action Required
                            </span>
                          )}

                          {!isProcessed && (
                            <span className="rounded-md border border-slate-700/80 bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-400 italic">
                              AI Pending
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0 ml-auto">
                          <span className="text-[10px] font-medium text-slate-500">{timeStr}</span>
                          {unread && <span className="h-2 w-2 rounded-full bg-azure-400 shadow-glow-soft" title="Unread" />}
                        </div>
                      </div>

                      {/* Sender & Subject Line */}
                      <div className="min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-xs truncate flex items-center gap-1.5 ${unread ? 'font-bold text-white' : 'font-semibold text-slate-200'}`}>
                            <ServiceIcon id={m.source || 'gmail'} size={12} />
                            {displayName}
                          </span>
                          {m.source === 'gmail' && sourceEmail && (
                            <span className="text-[10px] text-slate-500 truncate shrink-0" title={sourceEmail}>
                              via {sourceEmail}
                            </span>
                          )}
                          {m.source === 'whatsapp' && sourceEmail && (
                            <span className="text-[10px] text-slate-500 truncate shrink-0" title={sourceEmail}>
                              via +{sourceEmail}
                            </span>
                          )}
                        </div>
                        <p className={`text-xs mt-0.5 truncate ${unread ? 'font-medium text-slate-200' : 'text-slate-400'}`}>
                          {m.source === 'whatsapp' ? m.snippet : `Subject: ${m.subject || "(No Subject)"}`}
                        </p>
                      </div>

                      {/* AI Summary Box */}
                      {summary ? (
                        <div className="rounded-lg border border-azure-400/20 bg-ink-900/80 p-2.5 text-xs text-slate-100 leading-relaxed shadow-inner">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-azure-300 mb-1 flex items-center gap-1">
                            <Sparkles className="h-3 w-3 text-azure-400" /> AI Summary
                          </p>
                          {summary}
                        </div>
                      ) : (
                        <div className="rounded-lg border border-dashed border-white/10 bg-white/[0.02] p-2 text-xs text-slate-400 flex items-center justify-between">
                          <span className="truncate">{m.snippet || "(No message snippet)"}</span>
                          <span className="text-[9px] text-amber-400/90 font-medium shrink-0 ml-2">Unclassified</span>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </section>

          {/* Memory insights */}
          <section className="surface p-5">
            <SectionHeader title="Memory Insights" />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">New memories this week</span>
                </div>
                <span className="font-display text-lg font-semibold text-white">+47</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-azure-300" />
                  <span className="text-sm text-slate-300">Connections formed</span>
                </div>
                <span className="font-display text-lg font-semibold text-white">+128</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-violet-400" />
                  <span className="text-sm text-slate-300">AI suggestions accepted</span>
                </div>
                <span className="font-display text-lg font-semibold text-white">12</span>
              </div>
              {/* mini sparkline */}
              <div className="flex h-10 items-end gap-1 pt-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-azure-500/30 to-azure-400/60" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </section>

          {/* Connected apps */}
          <section className="surface p-5">
            <div className="flex items-center justify-between">
              <SectionHeader title="Connected Apps" />
              <Link href='/integrations' className="text-xs text-azure-300 hover:text-azure-200">Manage</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {realConnectedApps.map((i) => (
                <div key={i.id} className="group flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 transition-colors hover:border-white/12 hover:bg-white/[0.04]" title={i.name}>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.04]">
                    <ServiceIcon id={i.id} size={16} />
                  </span>
                  <span className="text-xs text-slate-300">{i.name}</span>
                  <span className="dot bg-emerald-400" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      </div>
    </AppShell>
  );
}

 function SectionHeader({ title }: { title: string }) {
  return <h2 className="text-sm font-semibold text-white">{title}</h2>;
}

function activityIcon(type: string) {
  const map: Record<string, React.ComponentType<{ className?: string }>> = {
    email: Mail,
    meeting: Calendar,
    commit: Github,
    message: Mail,
    file: FileText,
    memory: Brain,
    decision: Sparkles,
  };
  return map[type] ?? Clock;
}
function activityColor(type: string) {
  const map: Record<string, string> = {
    email: 'text-rose-400',
    meeting: 'text-azure-300',
    commit: 'text-slate-300',
    message: 'text-amber-400',
    file: 'text-emerald-400',
    memory: 'text-violet-400',
    decision: 'text-violet-400',
  };
  return map[type] ?? 'text-slate-400';
}

function getInsightBadgeStyles(category: string): { bg: string; border: string; text: string } {
  const map: Record<string, { bg: string; border: string; text: string }> = {
    PLACEMENT: { bg: 'bg-rose-500/10 border-rose-500/20', border: 'border-rose-500/20', text: 'text-rose-400' },
    DEADLINE: { bg: 'bg-amber-500/10 border-amber-500/20', border: 'border-amber-500/20', text: 'text-amber-400' },
    SECURITY: { bg: 'bg-red-500/10 border-red-500/20', border: 'border-red-500/20', text: 'text-red-400' },
    OPPORTUNITY: { bg: 'bg-emerald-500/10 border-emerald-500/20', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    COLLEGE: { bg: 'bg-indigo-500/10 border-indigo-500/20', border: 'border-indigo-500/20', text: 'text-indigo-400' },
    WORK: { bg: 'bg-sky-500/10 border-sky-500/20', border: 'border-sky-500/20', text: 'text-sky-400' },
    FINANCE: { bg: 'bg-teal-500/10 border-teal-500/20', border: 'border-teal-500/20', text: 'text-teal-400' },
    PERSONAL: { bg: 'bg-fuchsia-500/10 border-fuchsia-500/20', border: 'border-fuchsia-500/20', text: 'text-fuchsia-400' },
    TRANSACTION: { bg: 'bg-cyan-500/10 border-cyan-500/20', border: 'border-cyan-500/20', text: 'text-cyan-400' },
  };
  return map[category.toUpperCase()] ?? { bg: 'bg-slate-500/10 border-slate-500/20', border: 'border-slate-500/20', text: 'text-slate-400' };
}

