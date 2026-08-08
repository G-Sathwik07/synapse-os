"use client";

import { type ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo';
import {
  LayoutDashboard,
  Search,
  Brain,
  Network,
  FolderKanban,
  Plug,
  Settings,
  Bell,
  Command,
  ChevronLeft,
  LogOut,
  Sparkles,
} from 'lucide-react';

const NAV = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/memory', label: 'Memory', icon: Brain },
  { href: '/knowledge-graph', label: 'Knowledge Graph', icon: Network },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/integrations', label: 'Integrations', icon: Plug },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function AppShell({ children, current }: { children: ReactNode; current: string }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  // ⌘K to open search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        router.push('/search');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  return (
    <div className="flex h-screen overflow-hidden bg-ink-950 text-slate-200">
      {/* Sidebar */}
      <aside
        className={`relative z-30 flex shrink-0 flex-col border-r border-white/[0.06] bg-ink-900/60 backdrop-blur-xl transition-all duration-300 ${collapsed ? 'w-[68px]' : 'w-[248px]'
          }`}
      >
        {/* Logo row */}
        <div className="flex h-16 items-center justify-between px-4">
          {collapsed ? <Logo size={28} withWordmark={false} /> : <Logo />}
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-white/5 hover:text-slate-300"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft className={`h-4 w-4 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Search trigger */}
        <div className="px-3 pt-2">
          <button
            onClick={() => router.push('/search')}
            className="flex w-full items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-sm text-slate-500 transition-colors hover:border-white/10 hover:text-slate-300"
          >
            <Search className="h-4 w-4" />
            {!collapsed && <span className="flex-1 text-left">Search…</span>}
            {!collapsed && (
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-500">⌘K</kbd>
            )}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 no-scrollbar">
          {!collapsed && <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600">Workspace</p>}
          {NAV.map((item) => {
            const active = current === item.href;
            return (
              <Link key={item.href} href={item.href} className={`side-item relative ${active ? 'side-item-active' : ''}`}>
                <item.icon className="h-[18px] w-[18px] shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* AI status card */}
        {!collapsed && (
          <div className="mx-3 mb-3 rounded-xl border border-violet-400/20 bg-violet-500/5 p-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <span className="text-xs font-medium text-slate-200">SynapseOS AI</span>
              <span className="ml-auto dot bg-emerald-400 animate-pulse-soft" />
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">Memory engine active · 1,284 nodes indexed</p>
          </div>
        )}

        {/* User */}
        <div className="border-t border-white/[0.06] p-3">
          <div className={`flex items-center gap-3 rounded-xl px-2 py-2 ${collapsed ? 'justify-center' : ''}`}>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-azure-400 to-indigo-500 text-xs font-semibold text-white">
              AC
            </div>
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-200">Alex Carter</p>
                <p className="truncate text-xs text-slate-500">alex@synapseos.app</p>
              </div>
            )}
            {!collapsed && (
              <button
                onClick={() => router.push('/')}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-white/5 hover:text-rose-400"
                aria-label="Sign out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/[0.06] bg-ink-900/40 px-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="text-slate-300">SynapseOS</span>
            <span className="text-slate-700">/</span>
            <span className="text-slate-300">{NAV.find((n) => n.href === current)?.label ?? 'Dashboard'}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push('/search')}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Search"
            >
              <Command className="h-4 w-4" />
            </button>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white" aria-label="Notifications">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-400" />
            </button>
            <div className="mx-1 h-6 w-px bg-white/10" />
            <button className="btn-ghost-sm">
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              Ask AI
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
}
