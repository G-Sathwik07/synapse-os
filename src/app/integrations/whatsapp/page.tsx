"use client";

import { AppShell } from '@/components/AppShell';
import { useState, useEffect } from 'react';
import { ServiceIcon } from '@/components/ServiceIcon';
import { RefreshCw, Plus, ArrowLeft, Trash2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { WhatsAppConnectModal } from '@/components/whatsapp/WhatsAppConnectModal';

interface WhatsAppAccount {
  id: string;
  phone: string;
  connected: boolean;
  status: string;
  messageCount: number;
  lastSyncedAt: string;
}

export default function Page() {
  const router = useRouter();

  const [accounts, setAccounts] = useState<WhatsAppAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  
  const [disconnectingId, setDisconnectingId] = useState<string | null>(null);
  const [confirmDisconnectId, setConfirmDisconnectId] = useState<string | null>(null);

  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const [returnTo, setReturnTo] = useState<string | null>(null);
  const [reconnectPhone, setReconnectPhone] = useState<string | undefined>(undefined);

  const [syncingId, setSyncingId] = useState<string | null>(null);
  const [syncSuccessId, setSyncSuccessId] = useState<string | null>(null);
  const [syncErrorId, setSyncErrorId] = useState<string | null>(null);

  const handleSyncAccount = async (accountId: string) => {
    setSyncingId(accountId);
    setSyncSuccessId(null);
    setSyncErrorId(null);
    try {
      const res = await fetch(`/api/integrations/whatsapp/sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: accountId }),
      });
      if (res.ok) {
        setSyncSuccessId(accountId);
        loadAccounts();
        router.refresh();
      } else {
        setSyncErrorId(accountId);
      }
    } catch (err) {
      console.error("Failed to sync account:", err);
      setSyncErrorId(accountId);
    } finally {
      setSyncingId(null);
    }
  };

  const isSafeUrl = (url: string | null): boolean => {
    if (!url) return false;
    return url.startsWith('/') && !url.startsWith('//') && !url.startsWith('\\');
  };

  // Load existing accounts
  const loadAccounts = async () => {
    try {
      const res = await fetch("/api/integrations/whatsapp");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.accounts)) {
          setAccounts(data.accounts);
        }
      }
    } catch (err) {
      console.error("Failed to load WhatsApp accounts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Promise.resolve().then(() => {
      loadAccounts();
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const ret = params.get('returnTo');
      if (ret) {
        setTimeout(() => {
          setReturnTo(ret);
          setIsConnectModalOpen(true);
        }, 0);
      }
    }
  }, []);

  const handleDisconnectAccount = async (accountId: string) => {
    setDisconnectingId(accountId);
    try {
      const res = await fetch(`/api/integrations/whatsapp?id=${accountId}&action=disconnect`, { method: 'DELETE' });
      if (res.ok) {
        setAccounts((prev) =>
          prev.map((a) => (a.id === accountId ? { ...a, connected: false, status: 'DISCONNECTED' } : a))
        );
        setConfirmDisconnectId(null);
        router.refresh();
      }
    } catch (err) {
      console.error("Failed to disconnect account:", err);
    } finally {
      setDisconnectingId(null);
    }
  };

  const handleDeleteAccount = async (accountId: string) => {
    setDeletingId(accountId);
    try {
      const res = await fetch(`/api/integrations/whatsapp?id=${accountId}&action=delete`, { method: 'DELETE' });
      if (res.ok) {
        setAccounts((prev) => prev.filter((a) => a.id !== accountId));
        setConfirmDeleteId(null);
        router.refresh();
      }
    } catch (err) {
      console.error("Failed to delete account:", err);
    } finally {
      setDeletingId(null);
    }
  };

  const handleConnectedRedirect = () => {
    loadAccounts();
    router.refresh();
    const target = isSafeUrl(returnTo) ? (returnTo ?? '/integrations') : '/integrations';
    router.push(target);
  };

  return (
    <AppShell current="/integrations">
      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        {/* Navigation Breadcrumb */}
        <Link
          href={isSafeUrl(returnTo) ? (returnTo ?? "/integrations") : "/integrations"}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to {isSafeUrl(returnTo) && (returnTo ?? "").includes('communications') ? 'Communications' : 'Integrations'}
        </Link>

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-semibold text-white">WhatsApp Accounts</h1>
            <p className="mt-1 text-sm text-slate-500 font-medium">Link and manage your personal WhatsApp accounts.</p>
          </div>
          <button
            onClick={() => {
              setReconnectPhone(undefined);
              setIsConnectModalOpen(true);
            }}
            className="btn-primary text-xs py-2"
          >
            <Plus className="h-3.5 w-3.5" /> Link WhatsApp Account
          </button>
        </div>

        {/* Accounts List */}
        {loading ? (
          <div className="surface flex flex-col p-10 items-center justify-center animate-pulse min-h-[200px]">
            <RefreshCw className="h-8 w-8 text-azure-400 animate-spin" />
            <p className="mt-3 text-xs text-slate-500 font-medium">Loading connected WhatsApp accounts...</p>
          </div>
        ) : accounts.length === 0 ? (
          <div className="surface flex flex-col p-10 items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] mb-4">
              <ServiceIcon id="whatsapp" size={24} />
            </div>
            <h3 className="text-sm font-semibold text-white">No WhatsApp accounts connected</h3>
            <p className="mt-1.5 text-xs text-slate-500 max-w-sm font-medium">
              Link your personal WhatsApp account using QR scan or phone number pairing code. Conversations will automatically sync to SynapseOS.
            </p>
            <button
              onClick={() => {
                setReconnectPhone(undefined);
                setIsConnectModalOpen(true);
              }}
              className="btn-primary text-xs py-2 mt-4"
            >
              <Plus className="h-3.5 w-3.5" /> Link WhatsApp Account
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {accounts.map((acc) => {
              const confirmingDisconnect = confirmDisconnectId === acc.id;
              const confirmingDelete = confirmDeleteId === acc.id;
              
              return (
                <div
                  key={acc.id}
                  className={`surface p-5 transition-all duration-300 ${
                    confirmingDisconnect || confirmingDelete ? 'border-rose-500/20 bg-rose-950/5' : ''
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-soft">
                        <ServiceIcon id="whatsapp" size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {acc.phone.startsWith('+') ? acc.phone : `+${acc.phone}`}
                        </p>
                        {acc.connected ? (
                          <p className="mt-0.5 text-xs text-slate-500 font-medium flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            Connected · {acc.messageCount} messages synced
                          </p>
                        ) : (
                          <p className="mt-0.5 text-xs text-slate-500 font-medium flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-slate-500 shrink-0" />
                            Disconnected · Previously connected
                          </p>
                        )}
                        {syncSuccessId === acc.id && (
                          <p className="mt-1 text-xs text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> Sync complete
                          </p>
                        )}
                        {syncErrorId === acc.id && (
                          <p className="mt-1 text-xs text-rose-400 font-semibold flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" /> Sync failed. Try again.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      {!confirmingDisconnect && !confirmingDelete && (
                        <div className="flex items-center gap-2">
                          {acc.connected ? (
                            <>
                              <button
                                onClick={() => handleSyncAccount(acc.id)}
                                disabled={syncingId === acc.id}
                                className="btn-ghost-sm text-azure-400 hover:border-azure-500/20 hover:bg-azure-500/10 flex items-center gap-1.5 text-xs py-1.5"
                              >
                                <RefreshCw className={`h-3.5 w-3.5 ${syncingId === acc.id ? 'animate-spin' : ''}`} />
                                {syncingId === acc.id ? 'Syncing...' : 'Sync History'}
                              </button>
                              <button
                                onClick={() => {
                                  setConfirmDisconnectId(acc.id);
                                  setConfirmDeleteId(null);
                                }}
                                className="btn-ghost-sm text-rose-400 hover:border-rose-500/20 hover:bg-rose-500/10 flex items-center gap-1.5 text-xs py-1.5"
                              >
                                <Trash2 className="h-3.5 w-3.5" /> Disconnect
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => {
                                  setReconnectPhone(acc.phone);
                                  setIsConnectModalOpen(true);
                                }}
                                className="btn-primary text-xs py-1.5 px-3.5 flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 border-emerald-700 text-white"
                              >
                                Reconnect
                              </button>
                              <button
                                onClick={() => {
                                  setConfirmDeleteId(acc.id);
                                  setConfirmDisconnectId(null);
                                }}
                                className="btn-ghost-sm text-rose-400 hover:border-rose-500/20 hover:bg-rose-500/10 flex items-center gap-1.5 text-xs py-1.5"
                              >
                                <Trash2 className="h-3.5 w-3.5" /> Delete
                              </button>
                            </>
                          )}
                        </div>
                      )}

                      {confirmDisconnectId === acc.id && (
                        <div className="flex flex-col items-end gap-2 text-right">
                          <p className="text-xs text-rose-400 font-semibold">Disconnect this WhatsApp account?</p>
                          <p className="text-[10px] text-slate-500 font-medium max-w-xs leading-relaxed">
                            SynapseOS will stop accessing this account and remove its conversations from your active communications view. Your account will remain listed as disconnected so you can reconnect it later.
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <button
                              onClick={() => setConfirmDisconnectId(null)}
                              className="btn-ghost-sm text-[10px] py-1 px-3 border border-white/10 text-slate-400 hover:text-white"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleDisconnectAccount(acc.id)}
                              disabled={disconnectingId === acc.id}
                              className="btn-primary text-[10px] py-1 px-3 bg-rose-500 border-rose-600 hover:bg-rose-600"
                            >
                              {disconnectingId === acc.id ? 'Disconnecting...' : 'Disconnect'}
                            </button>
                          </div>
                        </div>
                      )}

                      {confirmDeleteId === acc.id && (
                        <div className="flex flex-col items-end gap-2 text-right">
                          <p className="text-xs text-rose-400 font-semibold">Delete WhatsApp account?</p>
                          <p className="text-[10px] text-slate-500 font-medium max-w-xs leading-relaxed">
                            This will permanently remove this account from SynapseOS. Its stored WhatsApp data will also be removed.
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <button
                              onClick={() => setConfirmDeleteId(null)}
                              className="btn-ghost-sm text-[10px] py-1 px-3 border border-white/10 text-slate-400 hover:text-white"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleDeleteAccount(acc.id)}
                              disabled={deletingId === acc.id}
                              className="btn-primary text-[10px] py-1 px-3 bg-rose-500 border-rose-600 hover:bg-rose-600"
                            >
                              {deletingId === acc.id ? 'Deleting...' : 'Delete'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Notice Info */}
        <div className="mt-8 border-t border-white/[0.06] pt-6 text-[11px] text-slate-600 font-medium flex items-start gap-2 max-w-2xl">
          <AlertCircle className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            WhatsApp linked-device connections are facilitated via an unofficial open-source multi-device implementation. SynapseOS is not affiliated with WhatsApp or Meta. Keep WhatsApp connected on your phone to maintain message streaming.
          </p>
        </div>

        {/* Unified Connection Modal (Supports QR & Phone Number) */}
        <WhatsAppConnectModal
          isOpen={isConnectModalOpen}
          onClose={() => setIsConnectModalOpen(false)}
          onConnected={handleConnectedRedirect}
          reconnectPhone={reconnectPhone}
        />
      </div>
    </AppShell>
  );
}

