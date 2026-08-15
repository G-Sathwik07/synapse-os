"use client";

import { AppShell } from '@/components/AppShell';
import { useState, useEffect } from 'react';
import { ServiceIcon } from '@/components/ServiceIcon';
import { RefreshCw, Plus, Clock, AlertTriangle, ArrowLeft, Calendar, CheckSquare, Square, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ConnectedCalendarDetail {
  id: string;
  summary: string;
  isSelected: boolean;
  eventCount: number;
}

interface CalendarAccount {
  id: string;
  email: string;
  lastSyncedAt: string;
  selectedCalendarsCount: number;
  eventCount: number;
  scope?: string | null;
  calendars: ConnectedCalendarDetail[];
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

  const [accounts, setAccounts] = useState<CalendarAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false);

  const [syncingId, setSyncingId] = useState<string | null>(null);
  const [disconnectingId, setDisconnectingId] = useState<string | null>(null);
  const [confirmDisconnectId, setConfirmDisconnectId] = useState<string | null>(null);
  const [syncFeedback, setSyncFeedback] = useState<Record<string, string>>({});

  // States for calendar selection drawer/modal
  const [managingAccountId, setManagingAccountId] = useState<string | null>(null);
  const [tempSelectedIds, setTempSelectedIds] = useState<string[]>([]);
  const [savingCalendars, setSavingCalendars] = useState(false);
  const [manageError, setManageError] = useState("");

  useEffect(() => {
    let ignore = false;
    async function loadCalendarStatus() {
      try {
        const res = await fetch("/api/integrations/calendar");
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
        console.error("Failed to load Calendar status:", err);
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    loadCalendarStatus();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (confirmDisconnectId) setConfirmDisconnectId(null);
        if (managingAccountId) setManagingAccountId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [confirmDisconnectId, managingAccountId]);

  const handleConnectCalendar = () => {
    setConnecting(true);
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/api/integrations/calendar/connect";
  };

  const handleDisconnectCalendar = async (accountId: string) => {
    setDisconnectingId(accountId);
    try {
      const res = await fetch(`/api/integrations/calendar?id=${accountId}`, { method: "DELETE" });
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
      console.error("Failed to disconnect Calendar:", err);
    } finally {
      setDisconnectingId(null);
    }
  };

  const handleSyncCalendar = async (accountId: string) => {
    setSyncingId(accountId);
    setSyncFeedback((prev) => ({ ...prev, [accountId]: "" }));
    try {
      const res = await fetch("/api/integrations/calendar/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ connectedAccountId: accountId }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        const feedbackMsg = `Synced successfully: ${data.count || 0} events.`;
        setSyncFeedback((prev) => ({ ...prev, [accountId]: feedbackMsg }));
        const nowStr = new Date().toISOString();
        
        // Refresh local details
        setAccounts((prev) =>
          prev.map((acc) =>
            acc.id === accountId ? { ...acc, lastSyncedAt: nowStr, eventCount: data.count } : acc
          )
        );
        router.refresh();
      } else {
        setSyncFeedback((prev) => ({
          ...prev,
          [accountId]: data.error || "Unable to sync Google Calendar. Please reconnect or try again.",
        }));
      }
    } catch {
      setSyncFeedback((prev) => ({
        ...prev,
        [accountId]: "Unable to sync Google Calendar. Please reconnect or try again.",
      }));
    } finally {
      setSyncingId(null);
    }
  };

  const openManageCalendars = (account: CalendarAccount) => {
    setManagingAccountId(account.id);
    setManageError("");
    setTempSelectedIds(
      account.calendars.filter((c) => c.isSelected).map((c) => c.id)
    );
  };

  const toggleTempSelection = (calendarId: string) => {
    setTempSelectedIds((prev) =>
      prev.includes(calendarId) ? prev.filter((id) => id !== calendarId) : [...prev, calendarId]
    );
  };

  const saveCalendarSelection = async () => {
    if (!managingAccountId) return;
    setSavingCalendars(true);
    setManageError("");

    try {
      const res = await fetch("/api/integrations/calendar/select", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accountId: managingAccountId,
          selectedCalendarIds: tempSelectedIds,
        }),
      });

      if (res.ok) {
        // Update account detail in state
        setAccounts((prev) =>
          prev.map((acc) => {
            if (acc.id === managingAccountId) {
              const updatedCals = acc.calendars.map((c) => ({
                ...c,
                isSelected: tempSelectedIds.includes(c.id),
              }));
              const activeCount = updatedCals.filter((c) => c.isSelected).length;
              return {
                ...acc,
                calendars: updatedCals,
                selectedCalendarsCount: activeCount,
              };
            }
            return acc;
          })
        );
        setManagingAccountId(null);
        router.refresh();
      } else {
        const errData = await res.json();
        setManageError(errData.error || "Failed to save selection.");
      }
    } catch {
      setManageError("Network error saving selection.");
    } finally {
      setSavingCalendars(false);
    }
  };

  const selectedAccount = accounts.find((acc) => acc.id === managingAccountId);

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
            <h1 className="font-display text-2xl font-semibold text-white">Google Calendar Accounts</h1>
            <p className="mt-1 text-sm text-slate-500 font-medium">Manage your connected Google Calendars and synchronization settings.</p>
          </div>
          <button
            onClick={handleConnectCalendar}
            disabled={connecting}
            className="btn-primary text-xs py-2 disabled:opacity-50"
          >
            <Plus className="h-3.5 w-3.5" /> {connecting ? 'Connecting...' : 'Connect another Calendar'}
          </button>
        </div>

        {/* Accounts List */}
        {loading ? (
          <div className="surface flex flex-col p-10 items-center justify-center animate-pulse min-h-[240px]">
            <RefreshCw className="h-8 w-8 text-azure-400 animate-spin" />
            <p className="mt-3 text-xs text-slate-500 font-medium">Loading connected Google Calendar accounts...</p>
          </div>
        ) : accounts.length === 0 ? (
          <div className="surface flex flex-col p-8 items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] mb-4">
              <ServiceIcon id="calendar" size={24} />
            </div>
            <h3 className="text-sm font-semibold text-white">No Google Calendar accounts connected</h3>
            <p className="mt-1.5 text-xs text-slate-500 max-w-sm font-medium">
              Connect a Google Calendar account to sync your events, display them on your workspace, and prioritize them inside your daily feed.
            </p>
            <button
              onClick={handleConnectCalendar}
              disabled={connecting}
              className="btn-primary text-xs py-2 mt-4 disabled:opacity-50"
            >
              <Plus className="h-3.5 w-3.5" /> Connect Google Calendar
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
                          <h4 className="text-xs font-semibold text-white">Disconnect this Google Calendar?</h4>
                        </div>
                        <p className="mt-1.5 truncate text-[11px] font-medium text-slate-300" title={acc.email}>
                          {acc.email}
                        </p>
                        <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                          SynapseOS will stop accessing this Google Calendar account. Previously synchronized events will remain in SynapseOS.
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
                          onClick={() => handleDisconnectCalendar(acc.id)}
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
                        <ServiceIcon id="calendar" size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-white">Google Calendar</h3>
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
                  <div className="mt-4 space-y-2 text-xs flex-1">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500"><Clock className="h-3 w-3" /> Last sync</span>
                      <span className="text-slate-300 font-medium">{timeAgo}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500"><Calendar className="h-3 w-3" /> Calendars synced</span>
                      <span className="text-slate-300 font-medium">{acc.selectedCalendarsCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500"><Save className="h-3 w-3" /> Synced events</span>
                      <span className="text-slate-300 font-medium">{acc.eventCount}</span>
                    </div>
                  </div>

                  {/* Active List of Calendar summaries (mini display) */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {acc.calendars.filter(c => c.isSelected).map(c => (
                      <span key={c.id} className="rounded bg-white/[0.04] px-2 py-0.5 text-[9px] text-slate-400 font-medium">
                        {c.summary}
                      </span>
                    ))}
                  </div>

                  {/* Feedback Message */}
                  {feedback && (
                    <p className={`mt-3 text-[10px] font-medium ${feedback.includes("Unable") || feedback.includes("expired") || feedback.includes("permission") ? "text-rose-400" : "text-emerald-400"}`}>
                      {feedback}
                    </p>
                  )}

                  {/* Card Actions Footer */}
                  <div className="mt-4 border-t border-white/[0.06] pt-3.5 flex flex-col gap-2">
                    <button
                      onClick={() => openManageCalendars(acc)}
                      disabled={isSyncing || isDisconnecting}
                      className="rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
                    >
                      <Calendar className="h-3.5 w-3.5 text-slate-400" /> Manage calendars
                    </button>

                    <div className="flex items-center gap-2 w-full">
                      <button
                        onClick={() => handleSyncCalendar(acc.id)}
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

      {/* Inline Selection Edit Modal/Dialog */}
      {managingAccountId && selectedAccount && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget && !savingCalendars) {
              setManagingAccountId(null);
            }
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-card animate-fade-up">
            <h3 className="text-base font-semibold text-slate-100 mb-1">Manage calendars</h3>
            <p className="text-xs text-slate-400 mb-4">{selectedAccount.email}</p>

            {manageError && (
              <div className="mb-4 rounded-lg bg-rose-500/10 border border-rose-500/20 p-2.5 text-xs text-rose-400 font-medium">
                {manageError}
              </div>
            )}

            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 subtle-scrollbar mb-6">
              {selectedAccount.calendars.map((cal) => {
                const isChecked = tempSelectedIds.includes(cal.id);
                return (
                  <button
                    key={cal.id}
                    onClick={() => toggleTempSelection(cal.id)}
                    className={`w-full flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                      isChecked
                        ? "border-azure-500/30 bg-azure-500/5 hover:border-azure-500/40"
                        : "border-white/[0.06] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div>
                      {isChecked ? (
                        <CheckSquare className="h-4 w-4 text-azure-400" />
                      ) : (
                        <Square className="h-4 w-4 text-slate-600" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-200">
                        {cal.summary}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {cal.eventCount} {cal.eventCount === 1 ? 'event' : 'events'} cached
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-white/[0.06] pt-4">
              <button
                type="button"
                onClick={() => setManagingAccountId(null)}
                disabled={savingCalendars}
                className="btn-ghost-sm text-xs py-1.5 px-3 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveCalendarSelection}
                disabled={savingCalendars}
                className="btn-primary text-xs py-1.5 px-4 disabled:opacity-50"
              >
                {savingCalendars ? 'Saving changes...' : 'Save changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
