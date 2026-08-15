"use client";

import { AppShell } from '@/components/AppShell';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckSquare, Square, Calendar, Loader2, ArrowRight } from 'lucide-react';

interface GoogleCalendar {
  id: string;
  summary: string;
  description: string | null;
  timeZone: string | null;
  isPrimary: boolean;
  isSelected: boolean;
}

function CalendarSelectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accountId = searchParams.get("accountId");

  const [calendars, setCalendars] = useState<GoogleCalendar[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!accountId) {
      setTimeout(() => {
        setError("No account ID provided in url.");
        setLoading(false);
      }, 0);
      return;
    }

    async function loadCalendars() {
      try {
        const res = await fetch(`/api/integrations/calendar/select?accountId=${accountId}`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.calendars)) {
            setCalendars(data.calendars);
            // Select primary calendar by default if available
            const primary = data.calendars.find((c: GoogleCalendar) => c.isPrimary);
            if (primary) {
              setSelectedIds([primary.id]);
            } else if (data.calendars.length > 0) {
              setSelectedIds([data.calendars[0].id]);
            }
          } else {
            setError("Failed to discover calendars.");
          }
        } else {
          setError("Failed to query calendars from server.");
        }
      } catch (err) {
        console.error(err);
        setError("Network error loading calendars.");
      } finally {
        setLoading(false);
      }
    }

    loadCalendars();
  }, [accountId]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleContinue = async () => {
    if (selectedIds.length === 0) {
      setError("Please select at least one calendar to synchronize.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/integrations/calendar/select", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accountId,
          selectedCalendarIds: selectedIds,
        }),
      });

      if (res.ok) {
        // Redirection to the real workspace
        router.push("/calendar");
      } else {
        const errData = await res.json();
        setError(errData.error || "Failed to save selection. Please try again.");
        setSaving(false);
      }
    } catch {
      setError("Network error saving selection.");
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-center p-6">
        <Loader2 className="h-8 w-8 text-azure-400 animate-spin" />
        <p className="mt-3 text-xs text-slate-500 font-medium">Discovering available calendars...</p>
      </div>
    );
  }

  if (error && calendars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-center p-6">
        <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-4">
          <Calendar className="h-6 w-6" />
        </div>
        <h3 className="text-sm font-semibold text-white">Discovery Failed</h3>
        <p className="mt-1.5 text-xs text-slate-500 max-w-sm font-medium">{error}</p>
        <button
          onClick={() => router.push("/integrations")}
          className="btn-primary text-xs py-2 mt-4"
        >
          Back to Integrations
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <div className="surface flex flex-col p-6 shadow-xl relative overflow-hidden">
        {/* Header */}
        <div className="mb-5">
          <h1 className="font-display text-lg font-semibold text-white">Select calendars to sync</h1>
          <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-medium">
            Choose which calendars SynapseOS should synchronize. You can change this selection later in Settings.
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 rounded-lg bg-rose-500/10 border border-rose-500/20 p-2.5 text-[11px] text-rose-400 font-medium">
            {error}
          </div>
        )}

        {/* Calendar list */}
        <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1 subtle-scrollbar">
          {calendars.map((cal) => {
            const isChecked = selectedIds.includes(cal.id);
            return (
              <button
                key={cal.id}
                onClick={() => toggleSelect(cal.id)}
                className={`w-full flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                  isChecked
                    ? "border-azure-500/30 bg-azure-500/5 hover:border-azure-500/40"
                    : "border-white/[0.06] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="h-4 w-4 text-azure-400" />
                  ) : (
                    <Square className="h-4 w-4 text-slate-600" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-xs font-semibold text-slate-200">
                      {cal.summary}
                    </p>
                    {cal.isPrimary && (
                      <span className="shrink-0 rounded bg-azure-400/10 px-1.5 py-0.5 text-[9px] font-semibold text-azure-400">
                        Primary
                      </span>
                    )}
                  </div>
                  {cal.description && (
                    <p className="mt-1 truncate text-[10px] text-slate-500 font-medium">
                      {cal.description}
                    </p>
                  )}
                  {cal.timeZone && (
                    <p className="mt-0.5 text-[9px] text-slate-600 font-medium font-mono">
                      {cal.timeZone}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected count info */}
        <div className="mt-5 border-t border-white/[0.06] pt-4 flex items-center justify-between">
          <p className="text-[11px] text-slate-500 font-semibold">
            Selected: <span className="text-azure-400">{selectedIds.length}</span> {selectedIds.length === 1 ? 'calendar' : 'calendars'}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/integrations")}
              disabled={saving}
              className="btn-ghost-sm text-[11px] py-1.5 px-3.5 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleContinue}
              disabled={saving || selectedIds.length === 0}
              className="btn-primary text-[11px] py-1.5 px-3.5 disabled:opacity-50 flex items-center gap-1 shrink-0"
            >
              {saving ? (
                <>Saving...</>
              ) : (
                <>
                  Continue <ArrowRight className="h-3 w-3" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <AppShell current="/integrations">
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center text-center p-6">
            <Loader2 className="h-8 w-8 text-azure-400 animate-spin" />
            <p className="mt-3 text-xs text-slate-500 font-medium">Loading...</p>
          </div>
        }>
          <CalendarSelectContent />
        </Suspense>
      </div>
    </AppShell>
  );
}
