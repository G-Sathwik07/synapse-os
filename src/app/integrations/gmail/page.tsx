"use client";

import { AppShell } from '@/components/AppShell';
import { useState, useEffect } from 'react';
import { ServiceIcon } from '@/components/ServiceIcon';
import { RefreshCw, Plus, Shield, Clock, AlertTriangle, ArrowLeft, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface GmailAccount {
  id: string;
  email: string;
  lastSyncedAt: string;
  messageCount: number;
  scope?: string | null;
  hasModifyAccess?: boolean;
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

  const [accounts, setAccounts] = useState<GmailAccount[]>([]);
  const [loading, setLoading] = useState(true);
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
              setAccounts(data.accounts);
            } else {
              setAccounts([]);
            }
          }
        }
      } catch (err) {
        console.error("Failed to load Gmail status:", err);
      } finally {
        if (!ignore) {
          setLoading(false);
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
        setAccounts((prev) => prev.filter((acc) => acc.id !== accountId));
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
        setAccounts((prev) =>
          prev.map((acc) =>
            acc.id === accountId ? { ...acc, lastSyncedAt: nowStr, messageCount: acc.messageCount + (data.newCount || 0) } : acc
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
      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        {/* Navigation Breadcrumb */}
        <Link
          href="/integrations"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </Link>

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-semibold text-white">Gmail Accounts</h1>
            <p className="mt-1 text-sm text-slate-500 font-medium">Manage your connected Gmail accounts and synchronization.</p>
          </div>
          <button
            onClick={handleConnectGmail}
            disabled={connecting}
            className="btn-primary text-xs py-2 disabled:opacity-50"
          >
            <Plus className="h-3.5 w-3.5" /> {connecting ? 'Connecting...' : 'Connect another Gmail'}
          </button>
        </div>

        {/* Accounts List */}
        {loading ? (
          <div className="surface flex flex-col p-10 items-center justify-center animate-pulse min-h-[240px]">
            <RefreshCw className="h-8 w-8 text-azure-400 animate-spin" />
            <p className="mt-3 text-xs text-slate-500 font-medium">Loading connected Gmail accounts...</p>
          </div>
        ) : accounts.length === 0 ? (
          <div className="surface flex flex-col p-8 items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] mb-4">
              <ServiceIcon id="gmail" size={24} />
            </div>
            <h3 className="text-sm font-semibold text-white">No Gmail accounts connected</h3>
            <p className="mt-1.5 text-xs text-slate-500 max-w-sm font-medium">
              Connect a Gmail account to start syncing your emails, classifying priorities, and receiving intelligence updates.
            </p>
            <button
              onClick={handleConnectGmail}
              disabled={connecting}
              className="btn-primary text-xs py-2 mt-4 disabled:opacity-50"
            >
              <Plus className="h-3.5 w-3.5" /> Connect Gmail
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {accounts.map((acc) => {
              const isSyncing = syncingId === acc.id;
              const isDisconnecting = disconnectingId === acc.id;
              const isConfirming = confirmDisconnectId === acc.id;
              const feedback = syncFeedback[acc.id];
              const timeAgo = formatTimeAgo(acc.lastSyncedAt);

              return (
                <div key={acc.id} className="surface flex flex-col p-5 relative overflow-hidden min-h-[220px]">
                  {/* Overlay Disconnect Confirmation */}
                  {isConfirming && (
                    <div
                      role="dialog"
                      aria-modal="true"
                      aria-label="Confirm Disconnect"
                      className="absolute inset-0 z-20 flex flex-col justify-between rounded-2xl border border-rose-500/20 bg-ink-900/95 p-5 backdrop-blur-xl transition-all animate-in fade-in zoom-in-95 duration-150 shadow-card"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-rose-400">
                          <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" />
                          <h4 className="text-xs font-semibold text-white">Disconnect this Gmail account?</h4>
                        </div>
                        <p className="mt-1.5 truncate text-[11px] font-medium text-slate-300" title={acc.email}>
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

                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-3 min-w-0">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-soft shrink-0">
                        <ServiceIcon id="gmail" size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-white">Gmail</h3>
                        <p className="truncate text-xs text-slate-400 font-semibold" title={acc.email}>
                          {acc.email}
                        </p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400 shrink-0 whitespace-nowrap">
                      <span className="dot bg-emerald-400" /> Connected
                    </span>
                  </div>

                  {/* Details Block */}
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500"><Shield className="h-3 w-3" /> Scope Access</span>
                      <span className="text-slate-300 font-medium">{acc.hasModifyAccess ? "Read & Modify" : "Read Only"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500"><Clock className="h-3 w-3" /> Last sync</span>
                      <span className="text-slate-300 font-medium">{timeAgo}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500"><Mail className="h-3 w-3" /> Synced emails</span>
                      <span className="text-slate-300 font-medium">{acc.messageCount}</span>
                    </div>
                  </div>

                  {/* Permissions upgrade warning if Read-only */}
                  {acc.hasModifyAccess === false && (
                    <div className="mt-3.5 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-2.5 text-[10px] text-amber-300">
                      <Shield className="h-3.5 w-3.5 shrink-0 text-amber-400 mt-0.5" />
                      <div>
                        <p className="font-semibold">Upgrade Recommended</p>
                        <p className="mt-0.5 text-slate-400 leading-normal">
                          Read & Modify scope is needed to perform action triggers like archive or mark read directly from SynapseOS.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Feedback Message */}
                  {feedback && (
                    <p className={`mt-3 text-[10px] font-medium ${feedback.includes("Unable") || feedback.includes("expired") || feedback.includes("permission") ? "text-rose-400" : "text-emerald-400"}`}>
                      {feedback}
                    </p>
                  )}

                  {/* Card Actions Footer */}
                  <div className="mt-auto flex flex-col gap-2 border-t border-white/[0.06] pt-3.5 mt-4">
                    {acc.hasModifyAccess === false && (
                      <button
                        onClick={handleConnectGmail}
                        disabled={connecting}
                        className="rounded-xl border border-amber-500/40 bg-amber-500/15 hover:bg-amber-500/25 px-3 py-1.5 text-xs font-semibold text-amber-200 transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 mb-1"
                      >
                        <Shield className="h-3.5 w-3.5 text-amber-400" /> Upgrade Gmail Access
                      </button>
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
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
}
