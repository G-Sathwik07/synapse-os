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
  Check,
  Clock,
  FileText,
  TrendingUp,
  Plus,
  } from 'lucide-react';
import { todaysPriorities, recentActivity, aiSuggestion, integrations } from '@/lib/mock';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

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

  const hasConnectedGmail = activeGmailAccounts.length > 0;
  const activeAccountIds = activeGmailAccounts.map(a => a.id);

  const realConnectedApps = integrations.map(i => {
    if (i.id === 'gmail') {
      return { ...i, connected: hasConnectedGmail };
    }
    return i;
  }).filter(i => i.connected);

  const rawEmails = (userId && hasConnectedGmail) ? await prisma.emailMessage.findMany({
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

  const priorityWeights: Record<string, number> = {
    HIGH: 3,
    MEDIUM: 2,
    LOW: 1,
  };

  const realEmails = [...rawEmails].sort((a, b) => {
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

  const unreadCount = hasConnectedGmail ? await prisma.emailMessage.count({
    where: {
      userId,
      connectedAccountId: { in: activeAccountIds },
      isRead: false,
    },
  }) : 0;
  const firstName = session?.user?.name ? session.user.name.split(' ')[0] : 'User';

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
            <p className="mt-2 text-sm text-slate-400">Thursday, July 31 · 5 priorities · 1 AI suggestion</p>
          </div>
          <div className="flex gap-2">
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

        {/* Priorities row */}
        <div className="relative mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {todaysPriorities.map((p) => {
            const Icon = kindIcon(p.kind);
            const color = kindColor(p.kind);
            const bg = kindBg(p.kind);
            return (
              <div key={p.id} className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all hover:border-white/12 hover:bg-white/[0.04] hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 ${bg}`}>
                    <Icon className={`h-4 w-4 ${color}`} />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-600">{p.due}</span>
                </div>
                <p className="mt-2.5 text-sm font-medium leading-snug text-slate-200">{p.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{p.meta}</p>
              </div>
            );
          })}
        </div>

        {/* AI suggestion */}
        <div className="relative mt-4 flex items-start gap-3 rounded-xl border border-violet-400/20 bg-violet-500/5 p-4">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
          <div className="flex-1">
            <p className="text-xs font-medium text-violet-300">AI Suggestion · {Math.round(aiSuggestion.confidence * 100)}% confidence</p>
            <p className="mt-1 text-sm text-slate-200">{aiSuggestion.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{aiSuggestion.reason}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button className="btn-ghost-sm border-violet-400/30 bg-violet-500/10 text-violet-200">Accept</button>
            <button className="btn-ghost-sm">Dismiss</button>
          </div>
        </div>
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
                  Connect Gmail to let SynapseOS identify emails that need your attention.
                </p>
                <Link href="/integrations" className="mt-3 inline-flex rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-all hover:bg-white/[0.06] hover:text-white">
                  Connect Gmail
                </Link>
              </div>
            ) : realEmails.length === 0 ? (
              <div className="py-6 text-center">
                <p className="text-xs text-slate-500">No emails synchronized yet.</p>
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
                  const timeStr = m.receivedAt ? formatTimeAgoDashboard(m.receivedAt) : "";
                  const sourceEmail = m.connectedAccount?.email || m.connectedAccount?.providerAccountId;

                  const priority = m.aiPriority;
                  const category = m.aiCategory;
                  const actionable = m.aiActionable;
                  const summary = m.aiSummary;
                  const isProcessed = Boolean(m.aiProcessedAt);

                  return (
                    <Link
                      key={m.id}
                      href={`/dashboard/email/${m.id}`}
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
                          <span className={`text-xs truncate ${unread ? 'font-bold text-white' : 'font-semibold text-slate-200'}`}>
                            {displayName}
                          </span>
                          {activeGmailAccounts.length > 1 && sourceEmail && (
                            <span className="text-[10px] text-slate-500 truncate shrink-0" title={sourceEmail}>
                              via {sourceEmail}
                            </span>
                          )}
                        </div>
                        <p className={`text-xs mt-0.5 truncate ${unread ? 'font-medium text-slate-200' : 'text-slate-400'}`}>
                          Subject: {m.subject || "(No Subject)"}
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
                          <span className="truncate">{m.snippet || "(No email snippet)"}</span>
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

function kindIcon(kind: string) {
  const map: Record<string, React.ComponentType<{ className?: string }>> = {
    interview: Calendar,
    assignment: FileText,
    pr: Github,
    conflict: Check,
    email: Mail,
  };
  return map[kind] ?? Clock;
}
function kindColor(kind: string) {
  const map: Record<string, string> = {
    interview: 'text-azure-300',
    assignment: 'text-amber-400',
    pr: 'text-slate-300',
    conflict: 'text-emerald-400',
    email: 'text-rose-400',
  };
  return map[kind] ?? 'text-slate-400';
}
function kindBg(kind: string) {
  const map: Record<string, string> = {
    interview: 'bg-azure-400/10',
    assignment: 'bg-amber-400/10',
    pr: 'bg-white/[0.06]',
    conflict: 'bg-emerald-400/10',
    email: 'bg-rose-400/10',
  };
  return map[kind] ?? 'bg-white/[0.03]';
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
