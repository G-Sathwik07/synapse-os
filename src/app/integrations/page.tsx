"use client";

import { AppShell } from '@/components/AppShell';
import { useState, useEffect } from 'react';
import { integrations } from '@/lib/mock';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Zap, RefreshCw, Plus, Shield, Clock, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface GmailAccount {
  id: string;
  email: string;
  lastSyncedAt: string;
  messageCount: number;
}

function formatTimeAgo(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  } catch {
    return "Never";
  }
}

export default function Page() {
  const router = useRouter();

  const [otherItems, setOtherItems] = useState(() => 
    integrations.filter(item => item.id !== 'gmail')
  );

  const [gmailAccounts, setGmailAccounts] = useState<GmailAccount[]>([]);
  const [gmailLoading, setGmailLoading] = useState(true);

  const [connecting, setConnecting] = useState(false);
  const [syncingId, setSyncingId] = useState<string | null>(null);
  const [disconnectingId, setDisconnectingId] = useState<string | null>(null);
  const [confirmDisconnectId, setConfirmDisconnectId] = useState<string | null>(null);
  const [syncFeedback, setSyncFeedback] = useState<Record<string, string>>({});

  useEffect(() => {
    let ignore = false;
    async function loadGmailStatus() {
      try {
        const res = await fetch("/api/integrations/gmail");
        if (res.ok) {
          const data = await res.json();
          if (!ignore) {
            if (data.connected && Array.isArray(data.accounts)) {
              setGmailAccounts(data.accounts);
            } else {
              setGmailAccounts([]);
            }
          }
        }
      } catch (err) {
        console.error("Failed to load Gmail status:", err);
        if (!ignore) {
          setGmailAccounts([]);
        }
      } finally {
        if (!ignore) {
          setGmailLoading(false);
        }
      }
    }
    loadGmailStatus();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && confirmDisconnectId) {
        setConfirmDisconnectId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [confirmDisconnectId]);

  const connectedCount = gmailAccounts.length + otherItems.filter((i) => i.connected).length;
  const totalServicesCount = (gmailAccounts.length > 0 ? gmailAccounts.length : 1) + otherItems.length;

  const toggleOther = (id: string) => {
    setOtherItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, connected: !i.connected, lastSync: !i.connected ? 'Just now' : 'Never' } : i
      )
    );
  };

  const handleConnectGmail = () => {
    setConnecting(true);
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/api/integrations/gmail/connect";
  };

  const handleDisconnectGmail = async (accountId: string) => {
    setDisconnectingId(accountId);
    try {
      const res = await fetch(`/api/integrations/gmail?id=${accountId}`, { method: "DELETE" });
      if (res.ok) {
        setConfirmDisconnectId(null);
        setGmailAccounts((prev) => prev.filter((acc) => acc.id !== accountId));
        setSyncFeedback((prev) => {
          const next = { ...prev };
          delete next[accountId];
          return next;
        });
        router.refresh();
      }
    } catch (err) {
      console.error("Failed to disconnect Gmail:", err);
    } finally {
      setDisconnectingId(null);
    }
  };

  const handleSyncGmail = async (accountId: string) => {
    setSyncingId(accountId);
    setSyncFeedback((prev) => ({ ...prev, [accountId]: "" }));
    try {
      const res = await fetch("/api/integrations/gmail/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ connectedAccountId: accountId }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        const feedbackMsg =
          data.newCount !== undefined || data.updatedCount !== undefined
            ? `Synced: ${data.newCount || 0} new, ${data.updatedCount || 0} updated`
            : `Synced ${data.count} messages.`;
        setSyncFeedback((prev) => ({ ...prev, [accountId]: feedbackMsg }));
        const nowStr = new Date().toISOString();
        setGmailAccounts((prev) =>
          prev.map((acc) =>
            acc.id === accountId ? { ...acc, lastSyncedAt: nowStr } : acc
          )
        );
        router.refresh();
      } else {
        setSyncFeedback((prev) => ({
          ...prev,
          [accountId]: data.error || "Unable to sync Gmail. Please reconnect or try again.",
        }));
      }
    } catch {
      setSyncFeedback((prev) => ({
        ...prev,
        [accountId]: "Unable to sync Gmail. Please reconnect or try again.",
      }));
    } finally {
      setSyncingId(null);
    }
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
              <p className="font-display text-lg font-semibold text-white">{connectedCount} / {totalServicesCount}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
              <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400"><span className="dot bg-emerald-400 animate-pulse-soft" /> Syncing</p>
              <p className="font-display text-lg font-semibold text-white">Live</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Gmail Cards */}
          {gmailLoading ? (
            <div className="surface flex flex-col p-5 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white/10" />
                <div className="space-y-2">
                  <div className="h-4 w-20 bg-white/10 rounded" />
                  <div className="h-3 w-32 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          ) : gmailAccounts.length === 0 ? (
            /* Disconnected Gmail Card */
            <div className="surface surface-hover group flex flex-col p-5 relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-soft">
                    <ServiceIcon id="gmail" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Gmail</h3>
                    <p className="text-xs text-slate-500">Email & Communication</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-500">
                  Not connected
                </span>
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-500"><Clock className="h-3 w-3" /> Last sync</span>
                  <span className="text-slate-300">Never</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-500"><Shield className="h-3 w-3" /> Permissions</span>
                  <span className="text-slate-300">1</span>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
                <button
                  onClick={handleConnectGmail}
                  disabled={connecting}
                  className="btn-primary w-full text-xs py-2 disabled:opacity-50"
                >
                  <Plus className="h-3.5 w-3.5" /> {connecting ? 'Connecting...' : 'Connect'}
                </button>
              </div>
            </div>
          ) : (
            /* Active Gmail Account Cards */
            gmailAccounts.map((acc) => {
              const isSyncing = syncingId === acc.id;
              const isDisconnecting = disconnectingId === acc.id;
              const isConfirming = confirmDisconnectId === acc.id;
              const feedback = syncFeedback[acc.id];
              const timeAgo = formatTimeAgo(acc.lastSyncedAt);

              return (
                <div key={acc.id} className="surface surface-hover group flex flex-col p-5 relative overflow-hidden">
                  {/* Overlay Disconnect Confirmation */}
                  {isConfirming && (
                    <div
                      role="dialog"
                      aria-modal="true"
                      aria-label="Confirm Disconnect"
                      className="absolute inset-0 z-20 flex flex-col justify-between rounded-2xl border border-rose-500/20 bg-ink-900/95 p-4.5 backdrop-blur-xl transition-all animate-in fade-in zoom-in-95 duration-150 shadow-card"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-rose-400">
                          <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" />
                          <h4 className="text-xs font-semibold text-white">Disconnect this Gmail account?</h4>
                        </div>
                        <p className="mt-1 truncate text-[11px] font-medium text-slate-300">
                          {acc.email}
                        </p>
                        <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                          Synced emails will remain in SynapseOS, but SynapseOS will no longer access this Gmail account.
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setConfirmDisconnectId(null)}
                          disabled={isDisconnecting}
                          className="btn-ghost-sm text-[11px] py-1 px-3 disabled:opacity-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDisconnectGmail(acc.id)}
                          disabled={isDisconnecting}
                          className="rounded-xl border border-rose-500/30 bg-rose-500/20 px-3 py-1 text-[11px] font-medium text-rose-300 transition-colors hover:bg-rose-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isDisconnecting ? 'Disconnecting...' : 'Disconnect'}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Header row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-soft">
                        <ServiceIcon id="gmail" size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-white">Gmail</h3>
                        <p className="truncate text-xs text-slate-400 font-medium" title={acc.email}>
                          {acc.email}
                        </p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400 shrink-0">
                      <span className="dot bg-emerald-400" /> Connected
                    </span>
                  </div>

                  {/* Status */}
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500"><Clock className="h-3 w-3" /> Last sync</span>
                      <span className="text-slate-300">{timeAgo}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500"><Shield className="h-3 w-3" /> Permissions</span>
                      <span className="text-slate-300">1</span>
                    </div>
                  </div>

                  {/* Permissions chips */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-slate-400">Read emails</span>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
                    {feedback && (
                      <p className={`text-[10px] font-medium ${feedback.includes("Unable") || feedback.includes("expired") ? "text-rose-400" : "text-emerald-400"}`}>
                        {feedback}
                      </p>
                    )}
                    <div className="flex items-center gap-2 w-full">
                      <button
                        onClick={() => handleSyncGmail(acc.id)}
                        disabled={isSyncing || isDisconnecting}
                        className="btn-ghost-sm flex-1 disabled:opacity-50 text-xs"
                      >
                        <RefreshCw className={`h-3.5 w-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                        {isSyncing ? 'Syncing...' : 'Sync now'}
                      </button>

                      <button
                        onClick={() => setConfirmDisconnectId(acc.id)}
                        disabled={isSyncing || isDisconnecting}
                        className="btn-ghost-sm text-rose-400 hover:border-rose-400/30 hover:bg-rose-400/10 disabled:opacity-50 text-xs"
                      >
                        Disconnect
                      </button>
                    </div>

                    <button
                      onClick={handleConnectGmail}
                      disabled={connecting}
                      className="mt-1 flex items-center justify-center gap-1 text-[11px] font-medium text-azure-300 hover:text-azure-200 transition-colors disabled:opacity-50"
                    >
                      <Plus className="h-3 w-3" /> Connect another Gmail
                    </button>
                  </div>
                </div>
              );
            })
          )}

          {/* Other Integration Cards */}
          {otherItems.map((i) => (
            <div key={i.id} className="surface surface-hover group flex flex-col p-5">
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

              {i.connected && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {i.permissions.map((p) => (
                    <span key={p} className="rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-slate-400">{p}</span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
                <div className="flex items-center gap-2 w-full">
                  {i.connected ? (
                    <>
                      <button className="btn-ghost-sm flex-1">
                        <RefreshCw className="h-3.5 w-3.5" /> Sync now
                      </button>
                      <button onClick={() => toggleOther(i.id)} className="btn-ghost-sm text-rose-400 hover:border-rose-400/30 hover:bg-rose-400/10">
                        Disconnect
                      </button>
                    </>
                  ) : (
                    <button onClick={() => toggleOther(i.id)} className="btn-primary w-full text-xs py-2">
                      <Plus className="h-3.5 w-3.5" /> Connect
                    </button>
                  )}
                </div>
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
              <p className="mt-0.5 text-xs text-slate-500">Last full sync 2 minutes ago · Next sync in 3 minutes · {connectedCount} services streaming</p>
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