"use client";

import { AppShell } from '@/components/AppShell';
import { useState, useEffect, useRef } from 'react';
import { ServiceIcon } from '@/components/ServiceIcon';
import {
  Search,
  ArrowLeft,
  ChevronDown,
  Loader,
  MessageSquare,
  Volume2,
  FileText,
  MapPin,
  User,
  HelpCircle,
  FolderOpen,
  Plus
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Conversation {
  id: string;
  connectedAccountId: string;
  source: string;
  remoteConversationId: string;
  title: string;
  avatar: string | null;
  isGroup: boolean;
  lastMessageAt: string;
  lastMessagePreview: string | null;
  unreadCount: number;
  accountLabel: string;
  provider: string;
}

interface Message {
  id: string;
  remoteMessageId: string;
  senderId: string;
  senderName: string | null;
  text: string | null;
  messageType: string;
  isFromMe: boolean;
  isRead: boolean;
  sentAt: string;
}

interface WhatsAppAccount {
  id: string;
  phone: string;
  connected: boolean;
}

function formatMsgTime(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '';
  }
}

function formatConvTime(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    const now = new Date();

    // Check if today
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Check if yesterday
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    }

    // Check if current year
    if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }

    return date.toLocaleDateString([], { year: '2-digit', month: 'numeric', day: 'numeric' });
  } catch {
    return '';
  }
}

export default function Page() {
  const router = useRouter();
  // Filters
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [accountFilter, setAccountFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');

  // Dropdown lists
  const [whatsappAccounts, setWhatsappAccounts] = useState<WhatsAppAccount[]>([]);
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Conversations
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConvId, setSelectedConvId] = useState<string | null>(null);
  const [loadingConvs, setLoadingConvs] = useState(true);
  const [convOffset, setConvOffset] = useState(0);
  const [hasMoreConvs, setHasMoreConvs] = useState(false);
  const [loadingMoreConvs, setLoadingMoreConvs] = useState(false);

  // Messages
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingMsgs, setLoadingMsgs] = useState(false);
  const [msgOffset, setMsgOffset] = useState(0);
  const [hasMoreMsgs, setHasMoreMsgs] = useState(false);
  const [loadingMoreMsgs, setLoadingMoreMsgs] = useState(false);

  // Mobile navigation
  const [mobileShowMessages, setMobileShowMessages] = useState(false);

  // Sending Message
  const [newMessageText, setNewMessageText] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load WhatsApp accounts for filter dropdown
  const loadAccounts = async () => {
    try {
      const res = await fetch("/api/integrations/whatsapp");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.accounts)) {
          setWhatsappAccounts(data.accounts.filter((a: WhatsAppAccount) => a.connected));
        }
      }
    } catch (err) {
      console.error("Failed to fetch WhatsApp accounts for filters:", err);
    }
  };

  // Debounce search input
  useEffect(() => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 400);

    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [searchQuery]);

  useEffect(() => {
    Promise.resolve().then(() => {
      loadAccounts();
    });
  }, []);

  // Fetch initial conversations on filter/search change
  useEffect(() => {
    let ignore = false;
    async function fetchConvs() {
      setLoadingConvs(true);
      setSelectedConvId(null);
      setConversations([]);
      setConvOffset(0);

      try {
        const queryParams = new URLSearchParams({
          source: sourceFilter,
          accountId: accountFilter,
          search: debouncedSearch,
          limit: '30',
          offset: '0',
        });

        const res = await fetch(`/api/communications/conversations?${queryParams.toString()}`);
        if (res.ok && !ignore) {
          const data = await res.json();
          setConversations(data.conversations || []);
          setHasMoreConvs(data.hasMore || false);
        }
      } catch (err) {
        console.error("Error loading conversations:", err);
      } finally {
        if (!ignore) setLoadingConvs(false);
      }
    }

    fetchConvs();
    return () => {
      ignore = true;
    };
  }, [sourceFilter, accountFilter, debouncedSearch]);

  // Fetch conversations load-more pagination
  const handleLoadMoreConvs = async () => {
    if (loadingMoreConvs || !hasMoreConvs) return;
    setLoadingMoreConvs(true);

    const nextOffset = convOffset + 30;
    try {
      const queryParams = new URLSearchParams({
        source: sourceFilter,
        accountId: accountFilter,
        search: debouncedSearch,
        limit: '30',
        offset: nextOffset.toString(),
      });

      const res = await fetch(`/api/communications/conversations?${queryParams.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setConversations((prev) => [...prev, ...(data.conversations || [])]);
        setConvOffset(nextOffset);
        setHasMoreConvs(data.hasMore || false);
      }
    } catch (err) {
      console.error("Failed to load more conversations:", err);
    } finally {
      setLoadingMoreConvs(false);
    }
  };

  // Fetch initial messages when selected conversation changes
  useEffect(() => {
    if (!selectedConvId) {
      Promise.resolve().then(() => {
        setMessages([]);
        setMsgOffset(0);
        setHasMoreMsgs(false);
      });
      return;
    }

    let ignore = false;
    async function fetchMessages() {
      Promise.resolve().then(() => {
        if (!ignore) {
          setLoadingMsgs(true);
          setMessages([]);
          setMsgOffset(0);
        }
      });

      try {
        const res = await fetch(`/api/communications/conversations/${selectedConvId}?limit=50&offset=0`);
        if (res.ok && !ignore) {
          const data = await res.json();
          setMessages(data.messages || []);
          setHasMoreMsgs(data.hasMore || false);

          // Scroll to bottom on initial load
          setTimeout(() => {
            if (messagesEndRef.current) {
              messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
            }
          }, 50);
        }
      } catch (err) {
        console.error("Error loading messages:", err);
      } finally {
        if (!ignore) setLoadingMsgs(false);
      }
    }

    fetchMessages();

    // Mark as read in the database and clear local unreadCount
    fetch(`/api/communications/conversations/${selectedConvId}/read`, { method: 'POST' })
      .then(() => {
        setConversations((prev) =>
          prev.map((c) => (c.id === selectedConvId ? { ...c, unreadCount: 0 } : c))
        );
      })
      .catch((err) => console.error("Failed to mark conversation as read:", err));

    return () => {
      ignore = true;
    };
  }, [selectedConvId]);

  // Load older messages (pagination upward)
  const handleLoadOlderMessages = async () => {
    if (loadingMoreMsgs || !hasMoreMsgs || !selectedConvId) return;
    setLoadingMoreMsgs(true);

    const nextOffset = msgOffset + 50;
    const container = chatContainerRef.current;
    const previousScrollHeight = container?.scrollHeight || 0;

    try {
      const res = await fetch(`/api/communications/conversations/${selectedConvId}?limit=50&offset=${nextOffset}`);
      if (res.ok) {
        const data = await res.json();
        const olderMsgs = data.messages || [];
        setMessages((prev) => [...olderMsgs, ...prev]);
        setMsgOffset(nextOffset);
        setHasMoreMsgs(data.hasMore || false);

        // Adjust scroll position to maintain scroll location
        setTimeout(() => {
          if (container) {
            container.scrollTop = container.scrollHeight - previousScrollHeight;
          }
        }, 10);
      }
    } catch (err) {
      console.error("Failed to load older messages:", err);
    } finally {
      setLoadingMoreMsgs(false);
    }
  };

  // Poll for new messages (lightweight polling)
  useEffect(() => {
    if (!selectedConvId) return;

    const checkForUpdates = async () => {
      try {
        const res = await fetch(`/api/communications/conversations/${selectedConvId}?limit=15&offset=0`);
        if (res.ok) {
          const data = await res.json();
          const latestMessages: Message[] = data.messages || [];

          setMessages((prev) => {
            // Find messages that aren't already in the list
            const existingIds = new Set(prev.map(m => m.id));
            const newMessages = latestMessages.filter(m => !existingIds.has(m.id));

            if (newMessages.length > 0) {
              // Scroll to bottom if new messages arrived
              setTimeout(() => {
                if (messagesEndRef.current) {
                  messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }, 50);
              return [...prev, ...newMessages];
            }
            return prev;
          });
        }
      } catch (err) {
        console.error("Error checking for updates:", err);
      }
    };

    const poll = setInterval(checkForUpdates, 5000);
    return () => clearInterval(poll);
  }, [selectedConvId]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!newMessageText.trim() || sendingMessage || !selectedConvId) return;

    setSendingMessage(true);
    setSendError(null);

    try {
      const res = await fetch(`/api/communications/conversations/${selectedConvId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newMessageText }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message');
      }

      const data = await res.json();
      const newMsg = data.message;

      // Append new message to local messages state immediately
      setMessages((prev) => [...prev, newMsg]);
      setNewMessageText('');

      // Scroll to bottom
      setTimeout(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);

      // Update conversation preview in sidebar
      setConversations((prev) =>
        prev.map((c) =>
          c.id === selectedConvId
            ? {
                ...c,
                lastMessagePreview: newMsg.text,
                lastMessageAt: newMsg.sentAt,
              }
            : c
        )
      );
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Failed to send message:", error);
      setSendError(error.message || 'Failed to send message.');
    } finally {
      setSendingMessage(false);
    }
  };

  const selectedConversation = conversations.find(c => c.id === selectedConvId);

  // Render attachment icons or placeholders
  const renderAttachmentIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <FolderOpen className="h-4 w-4 text-emerald-400 shrink-0" />;
      case 'video':
        return <FolderOpen className="h-4 w-4 text-cyan-400 shrink-0" />;
      case 'audio':
        return <Volume2 className="h-4 w-4 text-violet-400 shrink-0" />;
      case 'document':
        return <FileText className="h-4 w-4 text-azure-400 shrink-0" />;
      case 'location':
        return <MapPin className="h-4 w-4 text-rose-400 shrink-0" />;
      case 'contact':
        return <User className="h-4 w-4 text-amber-400 shrink-0" />;
      default:
        return <HelpCircle className="h-4 w-4 text-slate-500 shrink-0" />;
    }
  };

  return (
    <AppShell current="/communications">
      <div className="flex h-[calc(100vh-64px)] w-full overflow-hidden bg-ink-950">

        {/* Left Panel: Search + Filters + Conversation List */}
        <div
          className={`flex flex-col border-r border-white/[0.06] bg-ink-900/30 backdrop-blur-md transition-all duration-300 w-full md:w-[350px] lg:w-[400px] shrink-0 ${mobileShowMessages ? 'hidden md:flex' : 'flex'
            }`}
        >
          {/* Header & Filter Controls */}
          <div className="p-4 border-b border-white/[0.06]">
            <h1 className="font-display text-xl font-bold text-white mb-0.5">Communications</h1>
            <p className="text-[11px] text-slate-500 font-medium">Your unified communication workspace.</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {/* Source Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsSourceOpen(!isSourceOpen);
                    setIsAccountOpen(false);
                  }}
                  className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-300 hover:border-white/10 hover:text-white"
                >
                  Source: {sourceFilter === 'all' ? 'All' : 'WhatsApp'}
                  <ChevronDown className="h-3 w-3 text-slate-500" />
                </button>

                {isSourceOpen && (
                  <div className="absolute left-0 mt-1 z-50 w-36 rounded-xl border border-white/[0.08] bg-ink-900 p-1 shadow-large">
                    <button
                      onClick={() => {
                        setSourceFilter('all');
                        setAccountFilter('all');
                        setIsSourceOpen(false);
                      }}
                      className={`w-full text-left rounded-lg px-2.5 py-1.5 text-xs ${sourceFilter === 'all' ? 'bg-white/5 text-white font-semibold' : 'text-slate-400 hover:bg-white/[0.02] hover:text-slate-200'
                        }`}
                    >
                      All sources
                    </button>
                    <button
                      onClick={() => {
                        setSourceFilter('whatsapp');
                        setIsSourceOpen(false);
                      }}
                      className={`w-full text-left rounded-lg px-2.5 py-1.5 text-xs ${sourceFilter === 'whatsapp' ? 'bg-white/5 text-white font-semibold' : 'text-slate-400 hover:bg-white/[0.02] hover:text-slate-200'
                        }`}
                    >
                      WhatsApp
                    </button>
                  </div>
                )}
              </div>

              {/* Account Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsAccountOpen(!isAccountOpen);
                    setIsSourceOpen(false);
                  }}
                  className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-300 hover:border-white/10 hover:text-white"
                >
                  Account: {accountFilter === 'all' ? 'All' : whatsappAccounts.find(a => a.id === accountFilter)?.phone || 'Selected'}
                  <ChevronDown className="h-3 w-3 text-slate-500" />
                </button>

                {isAccountOpen && (
                  <div className="absolute left-0 mt-1 z-50 w-48 rounded-xl border border-white/[0.08] bg-ink-900 p-1 shadow-large max-h-56 overflow-y-auto subtle-scrollbar">
                    <button
                      onClick={() => {
                        setAccountFilter('all');
                        setIsAccountOpen(false);
                      }}
                      className={`w-full text-left rounded-lg px-2.5 py-1.5 text-xs ${accountFilter === 'all' ? 'bg-white/5 text-white font-semibold' : 'text-slate-400 hover:bg-white/[0.02] hover:text-slate-200'
                        }`}
                    >
                      All accounts
                    </button>

                    {whatsappAccounts.map((acc) => (
                      <button
                        key={acc.id}
                        onClick={() => {
                          setAccountFilter(acc.id);
                          setSourceFilter('whatsapp'); // Restrict source to whatsapp when an account is selected
                          setIsAccountOpen(false);
                        }}
                        className={`w-full text-left rounded-lg px-2.5 py-1.5 text-xs truncate ${accountFilter === acc.id ? 'bg-white/5 text-white font-semibold' : 'text-slate-400 hover:bg-white/[0.02] hover:text-slate-200'
                          }`}
                      >
                        +{acc.phone}
                      </button>
                    ))}
                    {whatsappAccounts.length === 0 && (
                      <div className="text-[10px] text-slate-600 px-2.5 py-2 font-medium">No active accounts</div>
                    )}
                  </div>
                )}
              </div>

              {/* Connect Account Button */}
              <button
                onClick={() => router.push('/integrations/whatsapp?returnTo=/communications')}
                className="flex items-center gap-1 rounded-lg border border-azure-400/30 bg-azure-500/10 px-2.5 py-1.5 text-xs text-azure-400 hover:bg-azure-500/20 hover:text-white transition-colors"
                title="Connect WhatsApp Account"
              >
                <Plus className="h-3 w-3" /> Connect
              </button>
            </div>

            {/* Search Input */}
            <div className="mt-3.5 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 outline-none transition-colors focus:border-white/15"
              />
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto subtle-scrollbar">
            {loadingConvs ? (
              <div className="flex flex-col items-center justify-center p-8 text-slate-500 animate-pulse">
                <Loader className="h-6 w-6 text-azure-400 animate-spin" />
                <span className="mt-2 text-[10px] font-medium">Loading conversations...</span>
              </div>
            ) : conversations.length === 0 ? (
              <div className="flex flex-col items-center text-center p-8 py-16">
                <MessageSquare className="h-8 w-8 text-slate-600 mb-3" />
                <p className="text-xs text-white font-semibold">
                  {debouncedSearch ? 'No conversations found' : 'No conversations yet'}
                </p>
                <p className="mt-1 text-[10px] text-slate-500 max-w-[200px] leading-relaxed">
                  {debouncedSearch
                    ? 'Adjust your search query or connect filters.'
                    : 'Activity from connected accounts will sync automatically.'}
                </p>
                {whatsappAccounts.length === 0 && !debouncedSearch && (
                  <button
                    onClick={() => router.push('/integrations/whatsapp?returnTo=/communications')}
                    className="btn-primary text-xs py-1.5 px-3.5 mt-4 flex items-center gap-1.5"
                  >
                    <Plus className="h-3.5 w-3.5" /> Connect WhatsApp
                  </button>
                )}
              </div>
            ) : (
              <div className="divide-y divide-white/[0.03]">
                {conversations.map((c) => {
                  const active = selectedConvId === c.id;
                  const initials = c.title
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .substring(0, 2)
                    .toUpperCase() || 'W';

                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedConvId(c.id);
                        setMobileShowMessages(true);
                      }}
                      className={`w-full flex items-start gap-3 p-3.5 text-left transition-all ${active
                          ? 'bg-white/[0.04]'
                          : 'hover:bg-white/[0.01]'
                        }`}
                    >
                      {/* Avatar */}
                      <div className="relative shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-azure-500/10 border border-azure-400/10 font-semibold text-azure-400 text-xs shadow-inner">
                        {initials}
                        {/* Service Icon Badge */}
                        <div className="absolute -bottom-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-ink-950 bg-ink-900 shadow-soft">
                          <ServiceIcon id={c.source} size={10} />
                        </div>
                      </div>

                      {/* Detail Column */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-1.5">
                          <h4 className="text-xs font-semibold text-white truncate">{c.title}</h4>
                          <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                            {formatConvTime(c.lastMessageAt)}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5 max-w-[180px] md:max-w-[220px]">
                          {c.lastMessagePreview || 'No messages'}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[9px] text-slate-500 font-medium truncate max-w-[100px]">
                            {c.accountLabel.startsWith('+') ? c.accountLabel : `+${c.accountLabel}`}
                          </span>
                          {c.unreadCount > 0 && (
                            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-azure-500 px-1 text-[9px] font-bold text-white shadow-soft">
                              {c.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}

                {hasMoreConvs && (
                  <div className="p-3 text-center">
                    <button
                      onClick={handleLoadMoreConvs}
                      disabled={loadingMoreConvs}
                      className="btn-ghost-sm text-[10px] py-1 px-4 border border-white/5 text-slate-400 hover:text-white"
                    >
                      {loadingMoreConvs ? 'Loading...' : 'Load more chats'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Selected Conversation Message History */}
        <div
          className={`flex-1 flex flex-col bg-ink-950 relative ${!mobileShowMessages ? 'hidden md:flex' : 'flex'
            }`}
        >
          {selectedConvId && selectedConversation ? (
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/[0.06] bg-ink-900/20 backdrop-blur-md z-15">
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Back button (Mobile only) */}
                  <button
                    onClick={() => setMobileShowMessages(false)}
                    className="md:hidden p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>

                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold text-white truncate">{selectedConversation.title}</h3>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5 truncate flex items-center gap-1.5">
                      <ServiceIcon id={selectedConversation.source} size={10} />
                      WhatsApp Account &middot; +{selectedConversation.accountLabel}
                    </p>
                  </div>
                </div>

                {selectedConversation.provider === 'whatsapp_meta' ? (
                  <span className="text-[10px] border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 rounded-md text-emerald-400 font-medium flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active Connection
                  </span>
                ) : (
                  <span className="text-[10px] border border-white/10 bg-white/[0.03] px-2.5 py-1 rounded-md text-slate-500 font-medium">
                    Read Only
                  </span>
                )}
              </div>

              {/* Chat Messages Log */}
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 subtle-scrollbar"
              >
                {hasMoreMsgs && (
                  <div className="text-center pb-2">
                    <button
                      onClick={handleLoadOlderMessages}
                      disabled={loadingMoreMsgs}
                      className="btn-ghost-sm text-[10px] py-1 px-4 border border-white/5 text-slate-400 hover:text-white"
                    >
                      {loadingMoreMsgs ? 'Loading...' : 'Load older messages'}
                    </button>
                  </div>
                )}

                {loadingMsgs ? (
                  <div className="flex flex-col items-center justify-center p-8 text-slate-500 h-64">
                    <Loader className="h-6 w-6 text-azure-400 animate-spin" />
                    <span className="mt-2 text-[10px] font-medium">Loading messages...</span>
                  </div>
                ) : messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center p-8 h-64 text-slate-500">
                    <MessageSquare className="h-6 w-6 text-slate-700 mb-2" />
                    <span className="text-[10px] font-medium">No messages available for this conversation.</span>
                  </div>
                ) : (
                  messages.map((m) => {
                    const isFromMe = m.isFromMe;
                    const isSystemType = m.messageType !== 'text';

                    return (
                      <div
                        key={m.id}
                        className={`flex flex-col ${isFromMe ? 'items-end' : 'items-start'
                          }`}
                      >
                        {/* Sender name for Group chats */}
                        {selectedConversation.isGroup && !isFromMe && m.senderName && (
                          <span className="text-[9px] text-slate-500 font-medium mb-1 ml-2">
                            {m.senderName}
                          </span>
                        )}

                        {/* Bubble */}
                        <div
                          className={`rounded-2xl px-4 py-2.5 max-w-xs md:max-w-md text-xs shadow-soft leading-relaxed transition-all ${isFromMe
                              ? 'bg-azure-500 text-white rounded-tr-none'
                              : 'bg-white/[0.04] border border-white/[0.06] text-slate-200 rounded-tl-none'
                            }`}
                        >
                          {isSystemType ? (
                            <div className="flex items-center gap-2 py-0.5">
                              {renderAttachmentIcon(m.messageType)}
                              <span className="italic font-medium text-slate-400">
                                {m.text || `[${m.messageType.charAt(0).toUpperCase() + m.messageType.slice(1)}]`}
                              </span>
                            </div>
                          ) : (
                            <p className="whitespace-pre-wrap">{m.text}</p>
                          )}
                        </div>

                        {/* Time */}
                        <span className="text-[9px] text-slate-500 mt-1 mx-2">
                          {formatMsgTime(m.sentAt)}
                        </span>
                      </div>
                    );
                  })
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Send Message Footer or Read-Only Notice */}
              {selectedConversation.provider === 'whatsapp_meta' ? (
                <div className="p-3 bg-ink-900/40 border-t border-white/[0.06]">
                  {sendError && (
                    <div className="text-[10px] text-rose-400 font-semibold mb-2 ml-1">
                      Error: {sendError}
                    </div>
                  )}
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={newMessageText}
                      onChange={(e) => setNewMessageText(e.target.value)}
                      disabled={sendingMessage}
                      className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 text-xs text-white placeholder-slate-600 outline-none transition-colors focus:border-white/15 focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={sendingMessage || !newMessageText.trim()}
                      className="btn-primary text-xs py-2 px-4 shadow-soft"
                    >
                      {sendingMessage ? 'Sending...' : 'Send'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-3 bg-ink-950/60 border-t border-white/[0.06] flex items-center justify-center gap-1.5 text-[10px] text-slate-600 font-medium">
                  Read-only communication view. Sending messages is not supported for this account type.
                </div>
              )}
            </>
          ) : (
            /* Empty State: No conversation selected */
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] shadow-inner mb-4">
                <MessageSquare className="h-6 w-6 text-slate-500" />
              </div>
              <h3 className="text-sm font-semibold text-white">No conversation selected</h3>
              <p className="mt-1 text-xs text-slate-500 max-w-xs leading-relaxed font-medium">
                Select a conversation from the sidebar list to view its message history logs.
              </p>
            </div>
          )}
        </div>

      </div>

    </AppShell>
  );
}
