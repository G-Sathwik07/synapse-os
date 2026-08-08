"use client";

import { AppShell } from '@/components/AppShell';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Mail,
  Calendar,
  Github,
  Brain,
  FileText,
  User,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
  Clock,
} from 'lucide-react';
import { searchResults, type SearchResult } from '@/lib/mock';


const CAT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Emails: Mail,
  Projects: FileText,
  Calendar: Calendar,
  Memory: Brain,
  GitHub: Github,
  Files: FileText,
  People: User,
};

const CATEGORIES = ['All', 'Emails', 'Projects', 'Calendar', 'Memory', 'GitHub', 'Files', 'People'] as const;

export default function Page() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState<(typeof CATEGORIES)[number]>('All');
  const [selected, setSelected] = useState(0);

  const results = useMemo(() => {
    let r = searchResults;
    if (activeCat !== 'All') r = r.filter((x) => x.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      r = r.filter(
        (x) =>
          x.title.toLowerCase().includes(q) ||
          x.snippet.toLowerCase().includes(q) ||
          x.category.toLowerCase().includes(q)
      );
    }
    return r;
  }, [query, activeCat]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selected]) router.push('/memory');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [results, selected, router]);

  

  return (
    <AppShell current="/search">
      <div className="mx-auto max-w-3xl px-6 py-10">
      {/* Big search input */}
      <div className="surface-raised overflow-hidden">
        <div className="flex items-center gap-4 border-b border-white/[0.06] px-6 py-5">
          <Search className="h-6 w-6 shrink-0 text-azure-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
            placeholder="Search across everything — emails, projects, calendar, memory, code…"
            className="flex-1 bg-transparent text-lg text-white placeholder:text-slate-600 focus:outline-none"
          />
          <kbd className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-500 sm:block">esc</kbd>
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/[0.06] px-4 py-3 no-scrollbar">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => { setActiveCat(c); setSelected(0); }}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                activeCat === c ? 'bg-azure-400/15 text-azure-200' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-[460px] overflow-y-auto p-3">
          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Search className="h-8 w-8 text-slate-700" />
              <p className="mt-3 text-sm text-slate-500">No results for &quot;{query}&quot;</p>
              <p className="text-xs text-slate-600">Try a different term or category</p>
            </div>
          ) : (
            results.map((r, i) => (
              <SearchRow key={r.id} result={r} active={i === selected} onClick={() => router.push('/memory')} />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3 text-[11px] text-slate-500">
          <span>{results.length} result{results.length !== 1 ? 's' : ''}{activeCat !== 'All' && ` in ${activeCat}`}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5"><ArrowUp className="inline h-2.5 w-2.5" /><ArrowDown className="inline h-2.5 w-2.5" /></kbd> navigate</span>
            <span className="flex items-center gap-1"><kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5"><CornerDownLeft className="inline h-2.5 w-2.5" /></kbd> open</span>
          </div>
        </div>
      </div>

      {/* Recent searches */}
      <div className="mt-6">
        <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-600">
          <Clock className="h-3.5 w-3.5" /> Recent searches
        </p>
        <div className="flex flex-wrap gap-2">
          {['DBMS', 'Northwind', 'PR #142', 'Maya Patel', 'normalization', 'API v2'].map((s) => (
            <button
              key={s}
              onClick={() => setQuery(s)}
              className="chip transition-colors hover:border-azure-400/30 hover:bg-azure-400/10 hover:text-azure-200"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      </div>
    </AppShell>
  );
}

 function SearchRow({ result, active, onClick }: { result: SearchResult; active: boolean; onClick: () => void }) {
  const Icon = CAT_ICONS[result.category] ?? Search;
  const color = catColor(result.category);
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors ${
        active ? 'bg-azure-400/10 ring-1 ring-azure-400/20' : 'hover:bg-white/[0.03]'
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium text-slate-200">{result.title}</p>
          <span className="shrink-0 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-slate-500">{result.category}</span>
        </div>
        <p className="mt-0.5 truncate text-xs text-slate-500">{result.snippet}</p>
        <p className="mt-1 text-[10px] text-slate-600">{result.source} · {result.time}</p>
      </div>
      <ChevronRight className={`h-4 w-4 shrink-0 transition-opacity ${active ? 'text-azure-300' : 'text-slate-700'}`} />
    </button>
  );
}


function catColor(cat: string) {
  const map: Record<string, string> = {
    Emails: 'text-rose-400',
    Projects: 'text-azure-300',
    Calendar: 'text-azure-300',
    Memory: 'text-violet-400',
    GitHub: 'text-slate-300',
    Files: 'text-emerald-400',
    People: 'text-amber-400',
  };
  return map[cat] ?? 'text-slate-400';
}
