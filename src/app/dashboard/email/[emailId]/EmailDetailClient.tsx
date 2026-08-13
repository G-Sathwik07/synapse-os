"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  MailOpen,
  Star,
  Archive,
  Sparkles,
  Zap,
  Clock,
  ShieldAlert,
  AlertTriangle,
} from "lucide-react";

export interface EmailDetailProps {
  initialEmail: {
    id: string;
    gmailMessageId: string;
    sender: string | null;
    recipients: string | null;
    subject: string | null;
    snippet: string | null;
    bodyText: string | null;
    receivedAt: string | null;
    isRead: boolean;
    labels: string | null;
    aiCategory: string | null;
    aiPriority: string | null;
    aiActionable: boolean | null;
    aiSummary: string | null;
    aiReason: string | null;
    aiProcessedAt: string | null;
    connectedAccount: {
      id: string;
      email: string | null;
      providerAccountId: string;
      scope: string | null;
    };
  };
}

function formatDate(dateStr?: string | null): { absolute: string; relative: string } {
  if (!dateStr) return { absolute: "Unknown date", relative: "" };
  try {
    const date = new Date(dateStr);
    const absolute = date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    let relative = "";
    if (seconds < 60) relative = "Just now";
    else if (seconds < 3600) relative = `${Math.floor(seconds / 60)}m ago`;
    else if (seconds < 86400) relative = `${Math.floor(seconds / 3600)}h ago`;
    else relative = `${Math.floor(seconds / 86400)}d ago`;

    return { absolute, relative };
  } catch {
    return { absolute: dateStr, relative: "" };
  }
}

export function EmailDetailClient({ initialEmail }: EmailDetailProps) {
  const router = useRouter();
  const [email, setEmail] = useState(initialEmail);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);

  const labelsArr = (email.labels ? email.labels.split(",") : []).map((l) => l.trim());
  const isStarred = labelsArr.includes("STARRED");
  const isArchived = !labelsArr.includes("INBOX");
  const isRead = email.isRead;

  const sourceAccountEmail =
    email.connectedAccount.email || email.connectedAccount.providerAccountId;
  const hasModifyPermission = Boolean(
    email.connectedAccount.scope && email.connectedAccount.scope.includes("gmail.modify")
  );

  const { absolute: absoluteTime, relative: relativeTime } = formatDate(email.receivedAt);

  const handleAction = async (actionType: "read" | "unread" | "star" | "unstar" | "archive") => {
    setLoadingAction(actionType);
    setErrorMessage(null);
    setActionSuccessMsg(null);

    // Optimistic UI state update
    const previousEmailState = { ...email };

    if (actionType === "read" || actionType === "unread") {
      const nextRead = actionType === "read";
      const nextLabels = nextRead
        ? labelsArr.filter((l) => l !== "UNREAD")
        : labelsArr.includes("UNREAD")
        ? labelsArr
        : [...labelsArr, "UNREAD"];
      setEmail((prev) => ({ ...prev, isRead: nextRead, labels: nextLabels.join(",") }));
    } else if (actionType === "star" || actionType === "unstar") {
      const nextStarred = actionType === "star";
      const nextLabels = nextStarred
        ? labelsArr.includes("STARRED")
          ? labelsArr
          : [...labelsArr, "STARRED"]
        : labelsArr.filter((l) => l !== "STARRED");
      setEmail((prev) => ({ ...prev, labels: nextLabels.join(",") }));
    } else if (actionType === "archive") {
      const nextLabels = labelsArr.filter((l) => l !== "INBOX");
      setEmail((prev) => ({ ...prev, labels: nextLabels.join(",") }));
    }

    try {
      let endpoint = `/api/integrations/gmail/messages/${email.id}`;
      let body: Record<string, unknown> = { action: actionType };

      if (actionType === "read" || actionType === "unread") {
        endpoint += "/read";
        body = { isRead: actionType === "read" };
      } else if (actionType === "star" || actionType === "unstar") {
        endpoint += "/star";
        body = { isStarred: actionType === "star" };
      } else if (actionType === "archive") {
        endpoint += "/archive";
        body = {};
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        // Revert optimistic state update on failure
        setEmail(previousEmailState);
        const errText = data.error || "Failed to complete Gmail action.";
        setErrorMessage(errText);
      } else {
        if (actionType === "archive") {
          setActionSuccessMsg("Message archived in Gmail.");
        } else if (actionType === "star") {
          setActionSuccessMsg("Message starred.");
        } else if (actionType === "unstar") {
          setActionSuccessMsg("Message unstarred.");
        } else if (actionType === "read") {
          setActionSuccessMsg("Marked as read.");
        } else if (actionType === "unread") {
          setActionSuccessMsg("Marked as unread.");
        }
        router.refresh();
      }
    } catch (err) {
      console.error("Action handler exception:", err);
      setEmail(previousEmailState);
      setErrorMessage("Network error executing Gmail action. Please try again.");
    } finally {
      setLoadingAction(null);
    }
  };

  const bodyContent =
    (email.bodyText && email.bodyText.trim()) ||
    (email.snippet && email.snippet.trim()) ||
    "Email content unavailable.";

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 lg:px-8 space-y-6">
      {/* Top Navigation & Action Bar Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white hover:border-white/20 shrink-0 w-fit shadow-soft"
        >
          <ArrowLeft className="h-4 w-4 text-slate-400 group-hover:text-white" /> Back
        </button>

        {/* Compact Gmail Actions Bar */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Read / Unread toggle */}
          {isRead ? (
            <button
              onClick={() => handleAction("unread")}
              disabled={loadingAction !== null}
              className="btn-ghost-sm text-xs flex items-center gap-1.5 disabled:opacity-50 hover:bg-white/[0.06]"
              title="Mark as unread"
            >
              <Mail className="h-3.5 w-3.5 text-azure-400" />
              {loadingAction === "unread" ? "Updating..." : "Mark unread"}
            </button>
          ) : (
            <button
              onClick={() => handleAction("read")}
              disabled={loadingAction !== null}
              className="btn-ghost-sm text-xs flex items-center gap-1.5 disabled:opacity-50 hover:bg-white/[0.06]"
              title="Mark as read"
            >
              <MailOpen className="h-3.5 w-3.5 text-slate-400" />
              {loadingAction === "read" ? "Updating..." : "Mark read"}
            </button>
          )}

          {/* Star / Unstar toggle */}
          <button
            onClick={() => handleAction(isStarred ? "unstar" : "star")}
            disabled={loadingAction !== null}
            className={`btn-ghost-sm text-xs flex items-center gap-1.5 disabled:opacity-50 ${
              isStarred ? "text-amber-300 border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20" : "hover:bg-white/[0.06]"
            }`}
            title={isStarred ? "Unstar message" : "Star message"}
          >
            <Star
              className={`h-3.5 w-3.5 ${
                isStarred ? "text-amber-400 fill-amber-400" : "text-slate-400"
              }`}
            />
            {loadingAction === "star" || loadingAction === "unstar"
              ? "Updating..."
              : isStarred
              ? "Starred"
              : "Star"}
          </button>

          {/* Archive Action */}
          <button
            onClick={() => handleAction("archive")}
            disabled={loadingAction !== null || isArchived}
            className="btn-ghost-sm text-xs flex items-center gap-1.5 disabled:opacity-50 hover:bg-white/[0.06]"
            title="Archive message"
          >
            <Archive className="h-3.5 w-3.5 text-slate-400" />
            {loadingAction === "archive" ? "Archiving..." : isArchived ? "Archived" : "Archive"}
          </button>
        </div>
      </div>

      {/* Permission Warning / Error Banners */}
      {!hasModifyPermission && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-200 flex items-center justify-between gap-3 flex-wrap backdrop-blur-sm shadow-soft">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0" />
            <span>
              This Gmail connection uses read-only access. Upgrade permission to execute Gmail actions like mark read, star, or archive.
            </span>
          </div>
          <Link
            href="/integrations"
            className="rounded-lg bg-amber-500/20 border border-amber-500/40 px-3 py-1 text-xs font-semibold text-amber-100 hover:bg-amber-500/30 transition-colors shrink-0"
          >
            Upgrade Access
          </Link>
        </div>
      )}

      {errorMessage && (
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300 flex items-center justify-between gap-2 shadow-soft">
          <span className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-rose-400 shrink-0" />
            {errorMessage}
          </span>
          {errorMessage.includes("upgrade") || errorMessage.includes("permission") ? (
            <Link
              href="/integrations"
              className="text-[11px] font-semibold underline text-rose-200 hover:text-white shrink-0"
            >
              Go to Integrations
            </Link>
          ) : (
            <button
              onClick={() => setErrorMessage(null)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Dismiss
            </button>
          )}
        </div>
      )}

      {actionSuccessMsg && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-xs text-emerald-300 flex items-center justify-between shadow-soft">
          <span>{actionSuccessMsg}</span>
          <button
            onClick={() => setActionSuccessMsg(null)}
            className="text-xs text-emerald-400/80 hover:text-white ml-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Main Email Header Card */}
      <div className="surface p-6 sm:p-7 space-y-4 relative overflow-hidden shadow-card border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01]">
        {/* Subtle decorative background ambient glow */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-azure-500/10 blur-3xl pointer-events-none" />

        {/* Subject Heading */}
        <h1 className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug tracking-tight">
          {email.subject || "(No Subject)"}
        </h1>

        {/* Sender, Recipient, Source Account & Timestamp */}
        <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-slate-200 text-sm">{email.sender || "Unknown Sender"}</span>
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-azure-300 font-mono shadow-soft">
                  via {sourceAccountEmail}
                </span>
              </div>
              {email.recipients && (
                <p className="text-slate-400 text-[11px]">To: {email.recipients}</p>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] shrink-0 bg-white/[0.02] border border-white/[0.04] px-2.5 py-1 rounded-lg">
              <Clock className="h-3.5 w-3.5 text-slate-500" />
              <span>{absoluteTime}</span>
              {relativeTime && <span className="text-slate-500">({relativeTime})</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Email Body Section */}
      <div className="surface p-6 sm:p-7 text-slate-200 text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-wrap breakdown-words shadow-card border border-white/[0.08] bg-white/[0.015]">
        {bodyContent}
      </div>

      {/* AI Intelligence Section */}
      <div className="surface p-6 sm:p-7 space-y-5 border border-violet-500/25 bg-gradient-to-b from-violet-500/[0.05] via-violet-500/[0.02] to-transparent shadow-card relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
          <div className="flex items-center gap-2 text-violet-300 font-display text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="h-4 w-4 text-violet-400" /> AI Intelligence
          </div>
          {email.aiProcessedAt && (
            <span className="text-[10px] text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/[0.05]">
              Analyzed {formatDate(email.aiProcessedAt).relative}
            </span>
          )}
        </div>

        {/* AI Badges Row */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Category */}
          {email.aiCategory && (
            <span className="rounded-md border border-violet-400/35 bg-violet-500/20 px-2.5 py-1 text-xs font-bold text-violet-300 uppercase tracking-wider shadow-soft">
              {email.aiCategory}
            </span>
          )}

          {/* Priority */}
          {email.aiPriority === "HIGH" && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-rose-500/40 bg-rose-500/20 px-2.5 py-1 text-xs font-bold text-rose-300 shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse-soft" />
              HIGH PRIORITY
            </span>
          )}
          {email.aiPriority === "MEDIUM" && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-amber-500/20 px-2.5 py-1 text-xs font-semibold text-amber-300 shadow-soft">
              MEDIUM PRIORITY
            </span>
          )}
          {email.aiPriority === "LOW" && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-500/30 bg-slate-500/20 px-2.5 py-1 text-xs font-medium text-slate-400">
              LOW PRIORITY
            </span>
          )}

          {/* Actionability */}
          {email.aiActionable ? (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/40 bg-emerald-400/20 px-2.5 py-1 text-xs font-bold text-emerald-300 shadow-soft">
              <Zap className="h-3.5 w-3.5 text-emerald-400" /> Action Required
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-500/30 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-400">
              No immediate action detected
            </span>
          )}
        </div>

        {/* AI Summary Box */}
        {email.aiSummary && (
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-azure-300 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-azure-400" /> AI Summary
            </h4>
            <div className="rounded-xl border border-azure-400/20 bg-ink-900/90 p-4 text-xs sm:text-sm text-slate-100 leading-relaxed shadow-inner">
              {email.aiSummary}
            </div>
          </div>
        )}

        {/* AI Priority Reason */}
        {email.aiReason && (
          <div className="text-xs sm:text-sm text-slate-400 flex items-start gap-2 bg-white/[0.02] p-4 rounded-xl border border-white/[0.04]">
            <span className="font-semibold text-violet-300 shrink-0">Why:</span>
            <span className="leading-snug text-slate-300">{email.aiReason}</span>
          </div>
        )}
      </div>
    </div>
  );
}
