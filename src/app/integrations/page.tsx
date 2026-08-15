"use client";

import { AppShell } from '@/components/AppShell';
import { useState, useEffect } from 'react';
import { integrations } from '@/lib/mock';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Zap, RefreshCw, Plus, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

interface GmailAccount {
  id: string;
  email: string;
  lastSyncedAt: string;
  messageCount: number;
  scope?: string | null;
  hasModifyAccess?: boolean;
}

interface CalendarAccount {
  id: string;
  email: string;
  lastSyncedAt: string;
  selectedCalendarsCount: number;
  eventCount: number;
  scope?: string | null;
}

export default function Page() {
  const [otherItems, setOtherItems] = useState(() =>
    integrations.filter(item => item.id !== 'gmail' && item.id !== 'calendar')
  );

  const [gmailAccounts, setGmailAccounts] = useState<GmailAccount[]>([]);
  const [gmailLoading, setGmailLoading] = useState(true);
  const [connectingGmail, setConnectingGmail] = useState(false);

  const [calendarAccounts, setCalendarAccounts] = useState<CalendarAccount[]>([]);
  const [calendarLoading, setCalendarLoading] = useState(true);
  const [connectingCalendar, setConnectingCalendar] = useState(false);

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
    let ignore = false;
    async function loadCalendarStatus() {
      try {
        const res = await fetch("/api/integrations/calendar");
        if (res.ok) {
          const data = await res.json();
          if (!ignore) {
            if (data.connected && Array.isArray(data.accounts)) {
              setCalendarAccounts(data.accounts);
            } else {
              setCalendarAccounts([]);
            }
          }
        }
      } catch (err) {
        console.error("Failed to load Calendar status:", err);
        if (!ignore) {
          setCalendarAccounts([]);
        }
      } finally {
        if (!ignore) {
          setCalendarLoading(false);
        }
      }
    }
    loadCalendarStatus();
    return () => {
      ignore = true;
    };
  }, []);

  const connectedCount =
    gmailAccounts.length +
    calendarAccounts.length +
    otherItems.filter((i) => i.connected).length;

  const totalServicesCount =
    (gmailAccounts.length > 0 ? gmailAccounts.length : 1) +
    (calendarAccounts.length > 0 ? calendarAccounts.length : 1) +
    otherItems.length;

  const toggleOther = (id: string) => {
    setOtherItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, connected: !i.connected, lastSync: !i.connected ? 'Just now' : 'Never' } : i
      )
    );
  };

  const handleConnectGmail = () => {
    setConnectingGmail(true);
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/api/integrations/gmail/connect";
  };

  const handleConnectCalendar = () => {
    setConnectingCalendar(true);
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/api/integrations/calendar/connect";
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
          {/* Gmail Card */}
          {gmailLoading ? (
            <div className="surface flex flex-col p-5 animate-pulse min-h-[220px]">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white/10" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-20 bg-white/10 rounded" />
                  <div className="h-3 w-32 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          ) : gmailAccounts.length === 0 ? (
            /* Disconnected Gmail Card */
            <div className="surface surface-hover group flex flex-col p-5 relative min-h-[220px]">
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

              <div className="mt-4 space-y-2 text-xs flex-1">
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
                  disabled={connectingGmail}
                  className="btn-primary w-full text-xs py-2 disabled:opacity-50"
                >
                  <Plus className="h-3.5 w-3.5" /> {connectingGmail ? 'Connecting...' : 'Connect'}
                </button>
              </div>
            </div>
          ) : (
            /* Active Gmail Account Card (Overview) */
            <div className="surface flex flex-col p-5 relative min-h-[220px]">
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 min-w-0">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-soft shrink-0">
                    <ServiceIcon id="gmail" size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-white">Gmail</h3>
                    <p className="truncate text-xs text-slate-500 font-medium">
                      Email & Communication
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400 shrink-0 whitespace-nowrap">
                  <span className="dot bg-emerald-400" /> Connected
                </span>
              </div>

              <div 
                className="mt-3.5 flex-1 overflow-y-auto pr-1 max-h-[92px] space-y-2.5 subtle-scrollbar"
              >
                {gmailAccounts.map((acc) => (
                  <div key={acc.id} className="flex items-start gap-2.5 py-0.5 min-w-0">
                    <span className="mt-1.5 dot bg-emerald-400 shrink-0 animate-pulse-soft" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-200" title={acc.email}>
                        {acc.email}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {acc.hasModifyAccess ? "Read & Modify" : "Read Only"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions Footer */}
              <div className="mt-4 border-t border-white/[0.06] pt-3.5 flex items-center justify-between">
                <button
                  onClick={handleConnectGmail}
                  disabled={connectingGmail}
                  className="flex items-center gap-1 text-[11px] font-semibold text-azure-300 hover:text-azure-200 transition-colors disabled:opacity-50"
                >
                  <Plus className="h-3 w-3" /> Connect another Gmail
                </button>
                <Link
                  href="/integrations/gmail"
                  className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Manage →
                </Link>
              </div>
            </div>
          )}

          {/* Google Calendar Card */}
          {calendarLoading ? (
            <div className="surface flex flex-col p-5 animate-pulse min-h-[220px]">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white/10" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-20 bg-white/10 rounded" />
                  <div className="h-3 w-32 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          ) : calendarAccounts.length === 0 ? (
            /* Disconnected Calendar Card */
            <div className="surface surface-hover group flex flex-col p-5 relative min-h-[220px]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-soft">
                    <ServiceIcon id="calendar" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Google Calendar</h3>
                    <p className="text-xs text-slate-500">Schedules & Events</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-500">
                  Not connected
                </span>
              </div>

              <div className="mt-4 space-y-2 text-xs flex-1">
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
                  onClick={handleConnectCalendar}
                  disabled={connectingCalendar}
                  className="btn-primary w-full text-xs py-2 disabled:opacity-50"
                >
                  <Plus className="h-3.5 w-3.5" /> {connectingCalendar ? 'Connecting...' : 'Connect'}
                </button>
              </div>
            </div>
          ) : (
            /* Active Calendar Account Card (Overview) */
            <div className="surface flex flex-col p-5 relative min-h-[220px]">
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 min-w-0">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-soft shrink-0">
                    <ServiceIcon id="calendar" size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-white">Google Calendar</h3>
                    <p className="truncate text-xs text-slate-500 font-medium">
                      Schedules & Events
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400 shrink-0 whitespace-nowrap">
                  <span className="dot bg-emerald-400" /> Connected
                </span>
              </div>

              <div 
                className="mt-3.5 flex-1 overflow-y-auto pr-1 max-h-[92px] space-y-2.5 subtle-scrollbar"
              >
                {calendarAccounts.map((acc) => (
                  <div key={acc.id} className="flex items-start gap-2.5 py-0.5 min-w-0">
                    <span className="mt-1.5 dot bg-emerald-400 shrink-0 animate-pulse-soft" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-200" title={acc.email}>
                        {acc.email}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {acc.selectedCalendarsCount} {acc.selectedCalendarsCount === 1 ? 'calendar' : 'calendars'} synced
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions Footer */}
              <div className="mt-4 border-t border-white/[0.06] pt-3.5 flex items-center justify-between">
                <button
                  onClick={handleConnectCalendar}
                  disabled={connectingCalendar}
                  className="flex items-center gap-1 text-[11px] font-semibold text-azure-300 hover:text-azure-200 transition-colors disabled:opacity-50"
                >
                  <Plus className="h-3 w-3" /> Connect another Calendar
                </button>
                <Link
                  href="/integrations/calendar"
                  className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Manage →
                </Link>
              </div>
            </div>
          )}

          {/* Other Integration Cards */}
          {otherItems.map((i) => (
            <div key={i.id} className="surface surface-hover group flex flex-col p-5 min-h-[220px]">
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

              <div className="mt-4 space-y-2 text-xs flex-1">
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