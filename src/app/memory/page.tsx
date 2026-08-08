"use client";

import { AppShell } from '@/components/AppShell';
import { useState } from 'react';
import {
  Calendar,
  Mail,
  Github,
  Brain,
  Sparkles,
  FileText,
  ChevronRight,
  Filter,
  Search,
} from 'lucide-react';
import { memoryTimeline, type MemoryEntry } from '@/lib/mock';

const FILTERS = ['All', 'Meetings', 'Emails', 'Commits', 'Decisions', 'Memory'] as const;

export default function Page() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<MemoryEntry | null>(memoryTimeline[0]);

  const entries = memoryTimeline.filter((e) => {
    if (filter === 'All') return true;
    if (filter === 'Meetings') return e.kind === 'meeting';
    if (filter === 'Emails') return e.kind === 'email';
    if (filter === 'Commits') return e.kind === 'commit';
    if (filter === 'Decisions') return e.kind === 'decision';
    if (filter === 'Memory') return e.kind === 'memory';
    return true;
  }).filter((e) => query ? (e.title + e.summary).toLowerCase().includes(query.toLowerCase()) : true);

  return (
    <AppShell current="/memory">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-white">Memory</h1>
          <p className="mt-1 text-sm text-slate-500">Browse your full history — every meeting, email, commit, and decision, linked together.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search memory…"
              className="w-56 rounded-xl border border-white/10 bg-ink-900/60 py-2 pl-9 pr-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-azure-400/40 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <Filter className="h-4 w-4 shrink-0 text-slate-600" />
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              filter === f ? 'bg-azure-400/15 text-azure-200' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Timeline */}
        <div className="surface p-6 lg:p-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-azure-400/40 via-white/10 to-white/5" />

            {/* Date groups */}
            {groupByDate(entries).map(([date, items]) => (
              <div key={date} className="mb-8 last:mb-0">
                <div className="mb-4 ml-16 text-xs font-semibold uppercase tracking-wider text-slate-600">{date}</div>
                <div className="space-y-5">
                  {items.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => setSelected(e)}
                      className={`group relative flex w-full items-start gap-5 rounded-xl p-3 text-left transition-colors ${
                        selected?.id === e.id ? 'bg-azure-400/8 ring-1 ring-azure-400/20' : 'hover:bg-white/[0.03]'
                      }`}
                    >
                      <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        selected?.id === e.id ? 'border-azure-400/40 bg-azure-400/10' : 'border-white/10 bg-ink-850'
                      }`}>
                        <KindIcon kind={e.kind} />
                      </div>
                      <div className="min-w-0 flex-1 pt-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-medium text-slate-500">{e.time}</span>
                          <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-slate-500">{e.kind}</span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-slate-200">{e.title}</p>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">{e.summary}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {e.connections.slice(0, 3).map((c) => (
                            <span key={c} className="rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-slate-400">{c}</span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="mt-2 h-4 w-4 shrink-0 text-slate-700 transition-colors group-hover:text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div className="lg:sticky lg:top-6 lg:h-fit">
          {selected ? (
            <div className="surface-raised p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <KindIcon kind={selected.kind} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{selected.time} · {selected.date}</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-600">{selected.source}</p>
                </div>
              </div>

              <h2 className="mt-5 font-display text-lg font-semibold text-white">{selected.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{selected.summary}</p>

              <div className="mt-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-600">Connected memories</p>
                <div className="space-y-2">
                  {selected.connections.map((c) => (
                    <div key={c} className="group flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 transition-colors hover:border-azure-400/20 hover:bg-white/[0.04]">
                      <Brain className="h-3.5 w-3.5 text-azure-300" />
                      <span className="flex-1 text-xs text-slate-300">{c}</span>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-700 transition-colors group-hover:text-slate-500" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-violet-400/20 bg-violet-500/5 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-violet-400" />
                  <span className="text-xs font-medium text-violet-300">AI Insight</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  This memory is linked to {selected.connections.length} other nodes. SynapseOS can surface related decisions and suggest follow-ups based on this context.
                </p>
              </div>
            </div>
          ) : (
            <div className="surface p-6 text-center text-sm text-slate-500">Select a memory to see details</div>
          )}
        </div>
      </div>
    </div>
    </AppShell>
  );
}

function groupByDate(entries: MemoryEntry[]): [string, MemoryEntry[]][] {
  const groups: Record<string, MemoryEntry[]> = {};
  for (const e of entries) {
    if (!groups[e.date]) groups[e.date] = [];
    groups[e.date].push(e);
  }
  return Object.entries(groups);
}

function KindIcon({ kind }: { kind: MemoryEntry['kind'] }) {
  const map = {
    meeting: { Icon: Calendar, color: 'text-azure-300' },
    email: { Icon: Mail, color: 'text-rose-400' },
    commit: { Icon: Github, color: 'text-slate-300' },
    calendar: { Icon: Calendar, color: 'text-emerald-400' },
    decision: { Icon: Sparkles, color: 'text-violet-400' },
    file: { Icon: FileText, color: 'text-amber-400' },
    memory: { Icon: Brain, color: 'text-azure-300' },
  };
  const { Icon, color } = map[kind] ?? map.memory;
  return <Icon className={`h-5 w-5 ${color}`} />;
}
