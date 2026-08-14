"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

export function BriefRefreshButton() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleRefresh = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/brief/refresh", {
        method: "POST",
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to refresh briefing.");
      }
      router.refresh();
    } catch (e: unknown) {
      console.error("[BriefRefreshButton] Error:", e);
      const errMsg = e instanceof Error ? e.message : "Error refreshing brief. Please try again.";
      setErrorMsg(errMsg);
      // Auto-clear error after 4 seconds
      setTimeout(() => setErrorMsg(null), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {errorMsg && (
        <span className="text-[10px] text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-lg animate-pulse-soft">
          {errorMsg}
        </span>
      )}
      <button
        onClick={handleRefresh}
        disabled={loading}
        className="btn-ghost-sm text-slate-400 hover:text-white disabled:opacity-50 flex items-center gap-1.5 shrink-0"
        title="Sync Gmail and refresh daily brief"
      >
        <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin text-azure-400" : ""}`} />
        {loading ? "Refreshing..." : "Refresh"}
      </button>
    </div>
  );
}
