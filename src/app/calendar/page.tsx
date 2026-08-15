"use client";

import { AppShell } from '@/components/AppShell';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Users, 
  Clock, 
  RefreshCw, 
  Loader2,
  ExternalLink,
  Info,
  Filter,
  Plus
} from 'lucide-react';

interface CalendarAttendee {
  email?: string | null;
  displayName?: string | null;
  responseStatus?: string | null;
}

interface CalendarEvent {
  id: string;
  googleEventId: string;
  title: string;
  description: string | null;
  location: string | null;
  startTime: string;
  endTime: string;
  isAllDay: boolean;
  timeZone: string | null;
  status: string | null;
  htmlLink: string | null;
  organizer: string | null;
  attendees: CalendarAttendee[];
  calendarName: string;
  accountEmail: string;
  isPrimaryCalendar: boolean;
}

interface CalendarStatusAccount {
  id: string;
  email: string;
  selectedCalendarsCount: number;
  calendars: {
    id: string;
    summary: string;
    isSelected: boolean;
  }[];
}

export default function Page() {
  const router = useRouter();

  // Active view states
  const [view, setView] = useState<'day' | 'week' | 'month'>('day');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  
  // Data loading states
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [statusLoading, setStatusLoading] = useState(true);
  const [connectedAccounts, setConnectedAccounts] = useState<CalendarStatusAccount[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshFeedback, setRefreshFeedback] = useState("");

  // Filters state
  const [selectedAccountEmails, setSelectedAccountEmails] = useState<string[]>([]);
  const [selectedCalendarIds, setSelectedCalendarIds] = useState<string[]>([]);
  const [showFiltersDropdown, setShowFiltersDropdown] = useState(false);

  // Selected event for detail modal
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  // 1. Fetch Calendar status to see if connected/selected
  useEffect(() => {
    async function loadStatus() {
      try {
        const res = await fetch("/api/integrations/calendar");
        if (res.ok) {
          const data = await res.json();
          if (data.connected && Array.isArray(data.accounts)) {
            setConnectedAccounts(data.accounts);
            // Default: select all accounts & calendars in filters
            const emails = data.accounts.map((a: CalendarStatusAccount) => a.email);
            setSelectedAccountEmails(emails);
            
            const calendarIds: string[] = [];
            data.accounts.forEach((acc: CalendarStatusAccount) => {
              acc.calendars.forEach((c: { id: string; summary: string; isSelected: boolean }) => {
                if (c.isSelected) calendarIds.push(c.id);
              });
            });
            setSelectedCalendarIds(calendarIds);
          } else {
            setConnectedAccounts([]);
          }
        }
      } catch (err) {
        console.error("Error loading status:", err);
      } finally {
        setStatusLoading(false);
      }
    }
    loadStatus();
  }, []);

  // 2. Fetch events when view, currentDate, or status changes
  useEffect(() => {
    if (statusLoading) return;
    if (connectedAccounts.length === 0) {
      setTimeout(() => setLoadingEvents(false), 0);
      return;
    }

    let start = new Date(currentDate);
    let end = new Date(currentDate);

    if (view === 'day') {
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
    } else if (view === 'week') {
      // Find Monday
      const day = start.getDay();
      const diff = start.getDate() - day + (day === 0 ? -6 : 1);
      start.setDate(diff);
      start.setHours(0, 0, 0, 0);

      end = new Date(start);
      end.setDate(start.getDate() + 6);
      end.setHours(23, 59, 59, 999);
    } else if (view === 'month') {
      start = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      start.setHours(0, 0, 0, 0);
      end = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      end.setHours(23, 59, 59, 999);
    }

    async function loadEvents() {
      setLoadingEvents(true);
      try {
        const res = await fetch(
          `/api/integrations/calendar/events?start=${start.toISOString()}&end=${end.toISOString()}`
        );
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.events)) {
            setEvents(data.events);
          }
        }
      } catch (err) {
        console.error("Error loading events:", err);
      } finally {
        setLoadingEvents(false);
      }
    }

    loadEvents();
  }, [view, currentDate, statusLoading, connectedAccounts]);

  const handleRefresh = async () => {
    setRefreshing(true);
    setRefreshFeedback("");
    try {
      const res = await fetch("/api/integrations/calendar/sync", { method: "POST" });
      if (res.ok) {
        setRefreshFeedback("Calendar synchronized successfully.");
        // Reload page status which will re-trigger event loading
        const statusRes = await fetch("/api/integrations/calendar");
        if (statusRes.ok) {
          const data = await statusRes.json();
          if (data.connected && Array.isArray(data.accounts)) {
            setConnectedAccounts(data.accounts);
          }
        }
      } else {
        setRefreshFeedback("Sync failed. Try again.");
      }
    } catch {
      setRefreshFeedback("Network error during sync.");
    } finally {
      setRefreshing(false);
      setTimeout(() => setRefreshFeedback(""), 3000);
    }
  };

  // Navigations
  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handlePrev = () => {
    const next = new Date(currentDate);
    if (view === 'day') {
      next.setDate(currentDate.getDate() - 1);
    } else if (view === 'week') {
      next.setDate(currentDate.getDate() - 7);
    } else if (view === 'month') {
      next.setMonth(currentDate.getMonth() - 1);
    }
    setCurrentDate(next);
  };

  const handleNext = () => {
    const next = new Date(currentDate);
    if (view === 'day') {
      next.setDate(currentDate.getDate() + 1);
    } else if (view === 'week') {
      next.setDate(currentDate.getDate() + 7);
    } else if (view === 'month') {
      next.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(next);
  };

  // Filters logic
  const toggleAccountFilter = (email: string) => {
    setSelectedAccountEmails((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  const toggleCalendarFilter = (id: string) => {
    setSelectedCalendarIds((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // Filter events based on selections
  const filteredEvents = events.filter((ev) => {
    // Matches selected account email?
    const matchesAccount = selectedAccountEmails.includes(ev.accountEmail || "");
    // Find matching calendar record in status to check if it's selected locally
    const targetAcc = connectedAccounts.find(a => a.email === ev.accountEmail);
    const targetCal = targetAcc?.calendars.find(c => c.summary === ev.calendarName);
    const matchesCalendar = targetCal ? selectedCalendarIds.includes(targetCal.id) : true;
    return matchesAccount && matchesCalendar;
  });

  const isConnected = connectedAccounts.length > 0;
  
  // Check if there's any calendar selected globally
  const hasSelectedCalendars = connectedAccounts.some(acc => 
    acc.calendars.some(c => c.isSelected)
  );

  // Render view helpers
  const formatTime = (timeStr: string) => {
    const date = new Date(timeStr);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const isTodayDate = (date: Date) => {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };

  const getWeekBounds = (date: Date) => {
    const start = new Date(date);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    start.setDate(diff);
    start.setHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return { start, end };
  };

  const isCurrentWeek = (date: Date) => {
    const today = new Date();
    const todayBounds = getWeekBounds(today);
    const dateBounds = getWeekBounds(date);
    return todayBounds.start.getTime() === dateBounds.start.getTime();
  };

  const isCurrentMonth = (date: Date) => {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth()
    );
  };

  const formatWeekRange = (start: Date, end: Date) => {
    const startMonth = start.toLocaleDateString('en-US', { month: 'short' });
    const endMonth = end.toLocaleDateString('en-US', { month: 'short' });
    
    if (startMonth === endMonth) {
      return `${startMonth} ${start.getDate()}–${end.getDate()}`;
    } else {
      return `${startMonth} ${start.getDate()} – ${endMonth} ${end.getDate()}`;
    }
  };

  const getNavigationLabel = () => {
    if (view === 'day') {
      return isTodayDate(currentDate)
        ? "Today"
        : currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } else if (view === 'week') {
      const bounds = getWeekBounds(currentDate);
      return isCurrentWeek(currentDate)
        ? "This Week"
        : formatWeekRange(bounds.start, bounds.end);
    } else {
      return isCurrentMonth(currentDate)
        ? "This Month"
        : currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
  };

  const getHeadingLabel = () => {
    if (view === 'day') {
      const dateStr = currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
      return isTodayDate(currentDate) ? `Today — ${dateStr}` : dateStr;
    } else if (view === 'week') {
      const bounds = getWeekBounds(currentDate);
      const rangeStr = formatWeekRange(bounds.start, bounds.end);
      return isCurrentWeek(currentDate) ? `This Week — ${rangeStr}` : `Week of ${rangeStr}`;
    } else {
      const monthStr = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      return isCurrentMonth(currentDate) ? `This Month — ${monthStr}` : monthStr;
    }
  };

  return (
    <AppShell current="/calendar">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        
        {/* Connection Empty State */}
        {!statusLoading && !isConnected && (
          <div className="surface flex flex-col p-12 items-center text-center max-w-md mx-auto mt-12 shadow-card border border-white/[0.06]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-azure-400/20 bg-azure-400/5 text-azure-400 mb-5">
              <CalendarIcon className="h-6 w-6" />
            </div>
            <h2 className="text-base font-semibold text-white">Connect Google Calendar</h2>
            <p className="mt-2 text-xs text-slate-500 max-w-sm leading-relaxed font-medium">
              Bring your schedule into SynapseOS. Sync multiple accounts and select custom calendars for a unified productivity view.
            </p>
            <button
              onClick={() => router.push("/integrations/calendar")}
              className="btn-primary text-xs py-2 mt-5 w-full flex items-center justify-center gap-1.5"
            >
              <Plus className="h-3.5 w-3.5" /> Connect Google Calendar
            </button>
          </div>
        )}

        {/* Selection Empty State */}
        {!statusLoading && isConnected && !hasSelectedCalendars && (
          <div className="surface flex flex-col p-12 items-center text-center max-w-md mx-auto mt-12 shadow-card border border-white/[0.06]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/5 text-amber-400 mb-5">
              <Info className="h-6 w-6" />
            </div>
            <h2 className="text-base font-semibold text-white">No calendars selected</h2>
            <p className="mt-2 text-xs text-slate-500 max-w-sm leading-relaxed font-medium">
              You have connected accounts, but haven&apos;t selected which calendars SynapseOS should synchronize.
            </p>
            <button
              onClick={() => router.push("/integrations/calendar")}
              className="btn-primary text-xs py-2 mt-5 w-full flex items-center justify-center gap-1.5"
            >
              <CalendarIcon className="h-3.5 w-3.5" /> Manage calendars
            </button>
          </div>
        )}

        {/* Calendar Main Workspace */}
        {!statusLoading && isConnected && hasSelectedCalendars && (
          <div className="space-y-6">
            
            {/* Header / Workspace bar */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.06] pb-5">
              <div>
                <h1 className="font-display text-2xl font-semibold text-white">Calendar</h1>
                <p className="mt-1 text-sm text-slate-500 font-medium">Your connected schedules in one place.</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Navigation controls */}
                <div className="flex items-center rounded-xl border border-white/[0.06] bg-white/[0.02] p-1 shrink-0">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 text-slate-400 hover:text-white transition-colors"
                    aria-label="Previous period"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleToday}
                    className="px-3.5 py-1 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    {getNavigationLabel()}
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 text-slate-400 hover:text-white transition-colors"
                    aria-label="Next period"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* View switcher */}
                <div className="flex items-center rounded-xl border border-white/[0.06] bg-white/[0.02] p-1 shrink-0">
                  {(['day', 'week', 'month'] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setView(v)}
                      className={`rounded-lg px-3.5 py-1 text-xs font-semibold uppercase tracking-wider transition-all ${
                        view === v
                          ? "bg-azure-500/20 text-azure-300"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      {v === 'day' ? 'Day' : v}
                    </button>
                  ))}
                </div>

                {/* Filters Trigger */}
                <div className="relative shrink-0">
                  <button
                    onClick={() => setShowFiltersDropdown(!showFiltersDropdown)}
                    className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                      showFiltersDropdown 
                        ? "border-azure-500/30 bg-azure-500/5 text-azure-300" 
                        : "border-white/[0.06] bg-white/[0.02] text-slate-400 hover:text-white"
                    }`}
                  >
                    <Filter className="h-3.5 w-3.5" />
                    Filters
                  </button>

                  {/* Dropdown Filters */}
                  {showFiltersDropdown && (
                    <div className="absolute right-0 mt-2 z-30 w-64 rounded-2xl border border-white/10 bg-ink-900 p-4 shadow-card animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="mb-3.5 pb-2.5 border-b border-white/[0.06]">
                        <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Accounts</h4>
                        <div className="mt-2 space-y-1.5">
                          {connectedAccounts.map(acc => {
                            const isChecked = selectedAccountEmails.includes(acc.email);
                            return (
                              <button
                                key={acc.id}
                                onClick={() => toggleAccountFilter(acc.email)}
                                className="w-full flex items-center gap-2 text-left text-xs font-medium text-slate-400 hover:text-white py-1"
                              >
                                <span className={`h-2 w-2 rounded-full shrink-0 ${isChecked ? 'bg-emerald-400' : 'bg-slate-700'}`} />
                                <span className="truncate">{acc.email}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Calendars</h4>
                        <div className="mt-2 space-y-1.5 max-h-[160px] overflow-y-auto subtle-scrollbar pr-1">
                          {connectedAccounts.map(acc => 
                            acc.calendars.filter(c => c.isSelected).map(cal => {
                              const isChecked = selectedCalendarIds.includes(cal.id);
                              return (
                                <button
                                  key={cal.id}
                                  onClick={() => toggleCalendarFilter(cal.id)}
                                  className="w-full flex items-center gap-2 text-left text-xs font-medium text-slate-400 hover:text-white py-1"
                                >
                                  <span className={`h-2.5 w-2.5 rounded shrink-0 border ${isChecked ? 'border-azure-400 bg-azure-500/20' : 'border-slate-700'}`} />
                                  <span className="truncate" title={cal.summary}>{cal.summary}</span>
                                </button>
                              );
                            })
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sync Refresh action */}
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="btn-ghost-sm flex items-center justify-center p-2 shrink-0 disabled:opacity-50"
                  title="Sync with Google Calendar"
                  aria-label="Refresh Calendar"
                >
                  <RefreshCw className={`h-4 w-4 text-slate-400 hover:text-white ${refreshing ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* Sync Feedback Message */}
            {refreshFeedback && (
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2.5 text-xs text-emerald-400 font-medium animate-fade-in max-w-sm ml-auto">
                {refreshFeedback}
              </div>
            )}

            {/* Display Active Period title */}
            <div className="flex items-center gap-3">
              <h2 className="font-display text-lg font-semibold text-white uppercase tracking-wider">
                {getHeadingLabel()}
              </h2>
            </div>

            {/* Active view layout */}
            {loadingEvents ? (
              <div className="surface flex flex-col p-16 items-center justify-center min-h-[360px] animate-pulse">
                <Loader2 className="h-8 w-8 text-azure-400 animate-spin" />
                <p className="mt-3 text-xs text-slate-500 font-medium">Loading events...</p>
              </div>
            ) : filteredEvents.length === 0 && view === 'day' ? (
              /* Today Empty State */
              <div className="surface flex flex-col p-12 items-center text-center min-h-[240px] justify-center border border-white/[0.06]">
                <h3 className="text-sm font-semibold text-white">You&apos;re all clear.</h3>
                <p className="mt-1.5 text-xs text-slate-500 font-medium">No events are scheduled for this day.</p>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* 1. TODAY VIEW */}
                {view === 'day' && (
                  <div className="space-y-4">
                    {/* All day events */}
                    {filteredEvents.filter(ev => ev.isAllDay).length > 0 && (
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-4 space-y-2">
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">All-Day Events</span>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {filteredEvents.filter(ev => ev.isAllDay).map(ev => (
                            <button
                              key={ev.id}
                              onClick={() => setSelectedEvent(ev)}
                              className="surface surface-hover flex flex-col p-3.5 text-left border-l-2 border-l-azure-500 rounded-r-xl"
                            >
                              <span className="text-xs font-semibold text-slate-200 line-clamp-1">{ev.title}</span>
                              <div className="mt-1 flex flex-wrap gap-2 text-[9px] text-slate-500 font-medium">
                                <span>{ev.calendarName}</span>
                                <span>·</span>
                                <span className="truncate max-w-[120px]">{ev.accountEmail}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Timed events */}
                    <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                      {filteredEvents.filter(ev => !ev.isAllDay).map((ev) => (
                        <div key={ev.id} className="py-4 flex flex-col sm:flex-row sm:items-start gap-4">
                          {/* Time Column */}
                          <div className="sm:w-28 shrink-0 flex items-center gap-1.5 text-xs font-semibold text-slate-300 font-mono">
                            <Clock className="h-3.5 w-3.5 text-slate-500" />
                            <span>{formatTime(ev.startTime)}</span>
                          </div>

                          {/* Detail Column */}
                          <button
                            onClick={() => setSelectedEvent(ev)}
                            className="flex-1 surface surface-hover p-4 text-left border-l-2 border-l-azure-500 rounded-r-xl"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                              <h3 className="text-sm font-semibold text-slate-200">{ev.title}</h3>
                              {ev.location && (
                                <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.04]">
                                  <MapPin className="h-2.5 w-2.5 text-slate-500" /> {ev.location}
                                </span>
                              )}
                            </div>
                            {ev.description && (
                              <p className="mt-1 text-xs text-slate-500 line-clamp-1 font-medium">{ev.description}</p>
                            )}
                            <div className="mt-2.5 flex flex-wrap items-center gap-2.5 text-[9px] text-slate-600 font-semibold uppercase tracking-wider">
                              <span className="text-slate-400">{ev.calendarName}</span>
                              <span>·</span>
                              <span>{ev.accountEmail}</span>
                              {ev.attendees && ev.attendees.length > 0 && (
                                <>
                                  <span>·</span>
                                  <span className="flex items-center gap-1"><Users className="h-2.5 w-2.5" /> {ev.attendees.length} attending</span>
                                </>
                              )}
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. WEEK VIEW */}
                {view === 'week' && (() => {
                  // Calculate days of the current week (Mon-Sun)
                  const start = new Date(currentDate);
                  const day = start.getDay();
                  const diff = start.getDate() - day + (day === 0 ? -6 : 1);
                  start.setDate(diff);
                  
                  const weekDays = Array.from({ length: 7 }, (_, i) => {
                    const d = new Date(start);
                    d.setDate(start.getDate() + i);
                    return d;
                  });

                  return (
                    <div className="grid gap-3 md:grid-cols-7 border-t border-white/[0.06] pt-4">
                      {weekDays.map((dayDate, idx) => {
                        const dayEvents = filteredEvents.filter((ev) => {
                          const evStart = new Date(ev.startTime);
                          return (
                            evStart.getFullYear() === dayDate.getFullYear() &&
                            evStart.getMonth() === dayDate.getMonth() &&
                            evStart.getDate() === dayDate.getDate()
                          );
                        });

                        const isDayToday = isTodayDate(dayDate);

                        return (
                          <div key={idx} className="flex flex-col border-b md:border-b-0 md:border-r border-white/[0.06] pb-4 md:pb-0 md:pr-3 last:border-none min-h-[160px]">
                            {/* Day Header */}
                            <div className={`p-2.5 text-center rounded-xl border ${
                              isDayToday 
                                ? 'border-azure-500/20 bg-azure-500/5 text-azure-300' 
                                : 'border-transparent text-slate-400'
                            } mb-3`}>
                              <p className="text-[10px] font-bold uppercase tracking-wider">
                                {dayDate.toLocaleDateString('en-US', { weekday: 'short' })}
                              </p>
                              <p className="font-display text-sm font-semibold mt-0.5">
                                {dayDate.getDate()}
                              </p>
                            </div>

                            {/* Day Events stack */}
                            <div className="flex-1 space-y-2.5 overflow-y-auto max-h-[300px] pr-0.5 subtle-scrollbar">
                              {dayEvents.length === 0 ? (
                                <p className="text-[10px] text-slate-600 font-semibold text-center italic py-2">No events</p>
                              ) : (
                                dayEvents.map((ev) => (
                                  <button
                                    key={ev.id}
                                    onClick={() => setSelectedEvent(ev)}
                                    className="w-full surface surface-hover flex flex-col p-2.5 text-left border-l border-l-azure-500 rounded-r-lg"
                                  >
                                    <span className="text-[11px] font-bold text-slate-200 line-clamp-2 leading-tight">
                                      {ev.title}
                                    </span>
                                    <span className="text-[9px] text-slate-500 font-mono mt-1 shrink-0">
                                      {ev.isAllDay ? 'All-Day' : formatTime(ev.startTime)}
                                    </span>
                                  </button>
                                ))
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}

                {/* 3. MONTH VIEW */}
                {view === 'month' && (() => {
                  const year = currentDate.getFullYear();
                  const month = currentDate.getMonth();

                  // Get first day of month and adjust for Monday start
                  const firstDayDate = new Date(year, month, 1);
                  const firstDayIndex = firstDayDate.getDay();
                  const padDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

                  // Get total days in month
                  const totalDays = new Date(year, month + 1, 0).getDate();

                  // Get days of previous month to pad
                  const prevMonthTotalDays = new Date(year, month, 0).getDate();
                  const prevPadded = Array.from({ length: padDays }, (_, i) => {
                    const d = prevMonthTotalDays - padDays + i + 1;
                    return { day: d, isCurrentMonth: false, date: new Date(year, month - 1, d) };
                  });

                  // Current month days
                  const currentMonthDays = Array.from({ length: totalDays }, (_, i) => {
                    const d = i + 1;
                    return { day: d, isCurrentMonth: true, date: new Date(year, month, d) };
                  });

                  // Padded next month days to complete grid (multiples of 7)
                  const gridCount = prevPadded.length + currentMonthDays.length;
                  const nextPadDays = gridCount % 7 === 0 ? 0 : 7 - (gridCount % 7);
                  const nextPadded = Array.from({ length: nextPadDays }, (_, i) => {
                    const d = i + 1;
                    return { day: d, isCurrentMonth: false, date: new Date(year, month + 1, d) };
                  });

                  const gridDays = [...prevPadded, ...currentMonthDays, ...nextPadded];

                  return (
                    <div className="space-y-4">
                      {/* Day of Week Labels */}
                      <div className="grid grid-cols-7 text-center text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-white/[0.06] pb-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                          <div key={d}>{d}</div>
                        ))}
                      </div>

                      {/* Month Grid */}
                      <div className="grid grid-cols-7 gap-1 border-b border-white/[0.06] pb-4">
                        {gridDays.map((gridDay, idx) => {
                          const dayEvents = filteredEvents.filter((ev) => {
                            const evStart = new Date(ev.startTime);
                            return (
                              evStart.getFullYear() === gridDay.date.getFullYear() &&
                              evStart.getMonth() === gridDay.date.getMonth() &&
                              evStart.getDate() === gridDay.date.getDate()
                            );
                          });

                          const isDayToday = isTodayDate(gridDay.date);

                          return (
                            <div
                              key={idx}
                              className={`surface min-h-[90px] p-1.5 flex flex-col transition-all relative ${
                                gridDay.isCurrentMonth ? "bg-white/[0.01]" : "opacity-30"
                              } ${isDayToday ? "border border-azure-500/20 bg-azure-500/5 text-azure-300" : ""}`}
                            >
                              {/* Day number */}
                              <span className={`text-[10px] font-bold ${
                                isDayToday ? 'text-azure-400' : 'text-slate-500'
                              } mb-1.5 inline-block`}>
                                {gridDay.day}
                              </span>

                              {/* Stack of mini events */}
                              <div className="flex-1 space-y-1 overflow-y-auto pr-0.5 max-h-[60px] subtle-scrollbar">
                                {dayEvents.map((ev) => (
                                  <button
                                    key={ev.id}
                                    onClick={() => setSelectedEvent(ev)}
                                    className="w-full rounded bg-azure-500/10 border-l border-l-azure-500 px-1.5 py-0.5 text-[8px] font-semibold text-slate-300 hover:text-white truncate text-left"
                                    title={ev.title}
                                  >
                                    {ev.title}
                                  </button>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

              </div>
            )}
          </div>
        )}

        {/* Polished Detail Modal View */}
        {selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedEvent(null);
              }
            }}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-card animate-fade-up">
              {/* Header */}
              <div className="mb-4">
                <span className="rounded bg-azure-400/10 px-2 py-0.5 text-[10px] font-semibold text-azure-300">
                  {selectedEvent.calendarName}
                </span>
                <h3 className="text-base font-semibold text-slate-100 mt-2">
                  {selectedEvent.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  Source Account: {selectedEvent.accountEmail}
                </p>
              </div>

              {/* Event Meta Details */}
              <div className="space-y-3.5 border-y border-white/[0.06] py-4 my-4 text-xs">
                {/* Date & Time */}
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-300">
                      {new Date(selectedEvent.startTime).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                    <p className="text-slate-500 mt-0.5 font-medium">
                      {selectedEvent.isAllDay ? (
                        <span>All Day Event</span>
                      ) : (
                        <span>
                          {formatTime(selectedEvent.startTime)} - {formatTime(selectedEvent.endTime)}
                          {selectedEvent.timeZone && <span className="font-mono text-[10px] text-slate-600 ml-1">({selectedEvent.timeZone})</span>}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Location */}
                {selectedEvent.location && (
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-300">Location</p>
                      <p className="text-slate-500 mt-0.5 font-medium">{selectedEvent.location}</p>
                    </div>
                  </div>
                )}

                {/* Attendees */}
                {selectedEvent.attendees && selectedEvent.attendees.length > 0 && (
                  <div className="flex items-start gap-2.5">
                    <Users className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-300 mb-1">
                        Attendees ({selectedEvent.attendees.length})
                      </p>
                      <div className="space-y-1 max-h-[80px] overflow-y-auto subtle-scrollbar pr-1">
                        {selectedEvent.attendees.map((att: CalendarAttendee, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                            <span className="truncate">{att.displayName || att.email}</span>
                            {att.responseStatus && (
                              <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase shrink-0 ${
                                att.responseStatus === 'accepted' ? 'text-emerald-400 bg-emerald-400/5' :
                                att.responseStatus === 'declined' ? 'text-rose-400 bg-rose-400/5' : 'text-slate-500 bg-slate-500/5'
                              }`}>
                                {att.responseStatus}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Description */}
                {selectedEvent.description && (
                  <div className="space-y-1 bg-white/[0.01] border border-white/[0.04] p-3 rounded-xl max-h-[100px] overflow-y-auto subtle-scrollbar pr-1">
                    <p className="text-[11px] leading-relaxed text-slate-400 whitespace-pre-wrap font-medium">
                      {selectedEvent.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between gap-3">
                {selectedEvent.htmlLink ? (
                  <a
                    href={selectedEvent.htmlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-azure-400 hover:text-azure-300 transition-colors"
                  >
                    Open in Google Calendar <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="btn-ghost-sm text-xs py-1.5 px-4"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </AppShell>
  );
}
