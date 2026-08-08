"use client";

import { AppShell } from '@/components/AppShell';
import { useState } from 'react';
import { integrations } from '@/lib/mock';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Zap, RefreshCw, Plus, Shield, Clock } from 'lucide-react';

export default function Page() {
  const [items, setItems] = useState(integrations);
  const connected = items.filter((i) => i.connected).length;

  const toggle = (id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, connected: !i.connected, lastSync: !i.connected ? 'Just now' : 'Never' } : i)));
  };

  return (
    <AppShell current="/integrations">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-white">Integrations</h1>
          <p className="mt-1 text-sm text-slate-500">Connect your services. Everything flows into a single memory graph.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2">
            <p className="text-[10px] uppercase tracking-wider text-slate-600">Connected</p>
            <p className="font-display text-lg font-semibold text-white">{connected} / {items.length}</p>
          </div>
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
            <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400"><span className="dot bg-emerald-400 animate-pulse-soft" /> Syncing</p>
            <p className="font-display text-lg font-semibold text-white">Live</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.id} className="surface surface-hover group flex flex-col p-5">
            {/* Header row */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-soft">
                  <ServiceIcon id={i.id} size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{i.name}</h3>
                  <p className="text-xs text-slate-500">{i.category}</p>
                </div>
              </div>
              {i.connected ? (
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
                  <span className="dot bg-emerald-400" /> Connected
                </span>
              ) : (
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-500">
                  Available
                </span>
              )}
            </div>

            {/* Status */}
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-500"><Clock className="h-3 w-3" /> Last sync</span>
                <span className="text-slate-300">{i.lastSync}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-500"><Shield className="h-3 w-3" /> Permissions</span>
                <span className="text-slate-300">{i.permissions.length}</span>
              </div>
            </div>

            {/* Permissions chips */}
            {i.connected && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {i.permissions.map((p) => (
                  <span key={p} className="rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-slate-400">{p}</span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4">
              {i.connected ? (
                <>
                  <button className="btn-ghost-sm flex-1">
                    <RefreshCw className="h-3.5 w-3.5" /> Sync now
                  </button>
                  <button onClick={() => toggle(i.id)} className="btn-ghost-sm text-rose-400 hover:border-rose-400/30 hover:bg-rose-400/10">
                    Disconnect
                  </button>
                </>
              ) : (
                <button onClick={() => toggle(i.id)} className="btn-primary w-full text-xs py-2">
                  <Plus className="h-3.5 w-3.5" /> Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Sync info banner */}
      <div className="mt-6 surface flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-azure-400/20 bg-azure-400/10">
            <Zap className="h-5 w-5 text-azure-300" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Memory engine is syncing</p>
            <p className="mt-0.5 text-xs text-slate-500">Last full sync 2 minutes ago · Next sync in 3 minutes · {connected} services streaming</p>
          </div>
        </div>
        <button className="btn-ghost-sm">
          <RefreshCw className="h-3.5 w-3.5" /> Sync all now
        </button>
      </div>
      </div>
    </AppShell>
  );
}