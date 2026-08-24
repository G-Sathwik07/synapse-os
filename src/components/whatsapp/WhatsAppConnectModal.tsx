"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { ServiceIcon } from '@/components/ServiceIcon';
import {
  QrCode,
  Smartphone,
  X,
  RefreshCw,
  Copy,
  Check,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Info
} from 'lucide-react';

interface DiagnosticInfo {
  connectionState: string | null;
  statusCode: number | null;
  disconnectReason: string | null;
  baileysVersion: string;
  waWebVersion: string;
  timestamp: string;
  errorDetail?: string | null;
}

interface WhatsAppConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnected: () => void;
  initialMethod?: 'qr' | 'pairing_code';
  reconnectPhone?: string;
}

const COUNTRY_CODES = [
  { code: '91', name: 'India', flag: '🇮🇳' },
  { code: '1', name: 'United States / Canada', flag: '🇺🇸' },
  { code: '44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '65', name: 'Singapore', flag: '🇸🇬' },
  { code: '61', name: 'Australia', flag: '🇦🇺' },
  { code: '49', name: 'Germany', flag: '🇩🇪' },
  { code: '33', name: 'France', flag: '🇫🇷' },
  { code: '55', name: 'Brazil', flag: '🇧🇷' },
  { code: '62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '34', name: 'Spain', flag: '🇪🇸' },
  { code: '39', name: 'Italy', flag: '🇮🇹' },
  { code: '52', name: 'Mexico', flag: '🇲🇽' },
  { code: '27', name: 'South Africa', flag: '🇿🇦' },
  { code: '31', name: 'Netherlands', flag: '🇳🇱' },
];

export function WhatsAppConnectModal({
  isOpen,
  onClose,
  onConnected,
  initialMethod = 'qr',
  reconnectPhone,
}: WhatsAppConnectModalProps) {
  const [method, setMethod] = useState<'qr' | 'pairing_code'>(initialMethod);
  const [countryCode, setCountryCode] = useState<string>('91');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneInputError, setPhoneInputError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && reconnectPhone) {
      setTimeout(() => {
        setMethod('pairing_code');
        let cleanPhone = reconnectPhone.replace(/\D/g, ''); // strip non-digits
        let foundCC = '91';
        // Sort COUNTRY_CODES descending by length to match longest prefix first
        const sortedCCs = [...COUNTRY_CODES].sort((a, b) => b.code.length - a.code.length);
        for (const cc of sortedCCs) {
          if (cleanPhone.startsWith(cc.code)) {
            foundCC = cc.code;
            cleanPhone = cleanPhone.slice(cc.code.length);
            break;
          }
        }
        setCountryCode(foundCC);
        setPhoneNumber(cleanPhone);
      }, 0);
    } else if (isOpen) {
      setTimeout(() => {
        setMethod(initialMethod);
        setPhoneNumber('');
        setCountryCode('91');
      }, 0);
    }
  }, [isOpen, reconnectPhone, initialMethod]);

  const [pendingConnectionId, setPendingConnectionId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('CONNECTING');
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [pairingCode, setPairingCode] = useState<string | null>(null);
  const [diagnostic, setDiagnostic] = useState<DiagnosticInfo | null>(null);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isStarting, setIsStarting] = useState(false);

  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasConnectedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      hasConnectedRef.current = false;
    }
  }, [isOpen]);

  const cancelCurrentPending = useCallback(async (connectionId: string | null) => {
    if (!connectionId) return;
    try {
      await fetch('/api/integrations/whatsapp/disconnect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: connectionId }),
      });
    } catch {
      // Ignore disconnect cleanup errors
    }
  }, []);

  const handleClose = useCallback(async () => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }
    if (pendingConnectionId && status !== 'CONNECTED') {
      await cancelCurrentPending(pendingConnectionId);
    }
    setPendingConnectionId(null);
    setQrCode(null);
    setPairingCode(null);
    setDiagnostic(null);
    setStatus('IDLE');
    hasConnectedRef.current = false;
    onClose();
  }, [cancelCurrentPending, onClose, pendingConnectionId, status]);

  const startPolling = useCallback((connectionId: string) => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
    }

    const checkStatus = async () => {
      if (hasConnectedRef.current) return;
      try {
        const res = await fetch(`/api/integrations/whatsapp/status?id=${connectionId}`);
        if (!res.ok) return;
        if (hasConnectedRef.current) return;

        const data = await res.json();
        if (hasConnectedRef.current) return;

        setStatus(data.status);
        if (data.qr) setQrCode(data.qr);
        if (data.pairingCode) setPairingCode(data.pairingCode);
        if (data.diagnostic) setDiagnostic(data.diagnostic);

        if (data.status === 'CONNECTED') {
          hasConnectedRef.current = true;
          if (pollIntervalRef.current) {
            clearInterval(pollIntervalRef.current);
            pollIntervalRef.current = null;
          }
          onConnected();
          handleClose();
        } else if (data.status === 'ERROR' || data.status === 'LOGGED_OUT' || data.status === 'EXPIRED') {
          // Terminal status: stop aggressive polling
          if (pollIntervalRef.current) {
            clearInterval(pollIntervalRef.current);
            pollIntervalRef.current = null;
          }
        }
      } catch (err) {
        console.error('Error polling WhatsApp status:', err);
      }
    };

    pollIntervalRef.current = setInterval(checkStatus, 1800);
    checkStatus();
  }, [handleClose, onConnected]);

  const startQrConnection = useCallback(async () => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }

    await cancelCurrentPending(pendingConnectionId);

    setIsStarting(true);
    setStatus('CONNECTING');
    setQrCode(null);
    setPairingCode(null);
    setDiagnostic(null);

    try {
      const res = await fetch('/api/integrations/whatsapp/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method: 'qr' }),
      });

      if (res.ok) {
        const data = await res.json();
        setPendingConnectionId(data.pendingConnectionId);
        startPolling(data.pendingConnectionId);
      } else {
        const errData = await res.json().catch(() => ({}));
        setStatus('ERROR');
        setDiagnostic({
          connectionState: 'failed',
          statusCode: res.status,
          disconnectReason: errData.error || 'Failed to initiate QR connection',
          baileysVersion: '7.0.0-rc14',
          waWebVersion: 'N/A',
          timestamp: new Date().toISOString(),
          errorDetail: errData.error || 'Server error initiating QR session',
        });
      }
    } catch (err: unknown) {
      setStatus('ERROR');
      setDiagnostic({
        connectionState: 'failed',
        statusCode: null,
        disconnectReason: err instanceof Error ? err.message : String(err),
        baileysVersion: '7.0.0-rc14',
        waWebVersion: 'N/A',
        timestamp: new Date().toISOString(),
        errorDetail: 'Network connection failed during setup initiation',
      });
    } finally {
      setIsStarting(false);
    }
  }, [cancelCurrentPending, pendingConnectionId, startPolling]);

  // Clear polling on unmount
  useEffect(() => {
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
      }
    };
  }, []);

  // When modal opens with QR mode, auto-start QR connection
  useEffect(() => {
    if (isOpen && method === 'qr' && !pendingConnectionId && !isStarting && !hasConnectedRef.current) {
      Promise.resolve().then(() => {
        startQrConnection();
      });
    }
  }, [isOpen, method, pendingConnectionId, isStarting, startQrConnection]);

  const handleStartPairingCode = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setPhoneInputError(null);

    const cleanInput = phoneNumber.trim();
    if (!cleanInput) {
      setPhoneInputError('Please enter your phone number');
      return;
    }

    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }

    await cancelCurrentPending(pendingConnectionId);

    setIsStarting(true);
    setStatus('CONNECTING');
    setPairingCode(null);
    setQrCode(null);
    setDiagnostic(null);

    try {
      const res = await fetch('/api/integrations/whatsapp/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: 'pairing_code',
          phoneNumber: cleanInput,
          countryCode,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.pendingConnectionId) {
        setPendingConnectionId(data.pendingConnectionId);
        startPolling(data.pendingConnectionId);
      } else {
        setStatus('ERROR');
        setPhoneInputError(data.error || 'Failed to request pairing code');
        setDiagnostic({
          connectionState: 'failed',
          statusCode: res.status,
          disconnectReason: data.error || 'Server rejected phone number request',
          baileysVersion: '7.0.0-rc14',
          waWebVersion: 'N/A',
          timestamp: new Date().toISOString(),
          errorDetail: data.error,
        });
      }
    } catch (err: unknown) {
      setStatus('ERROR');
      const errReason = err instanceof Error ? err.message : String(err);
      setPhoneInputError(errReason);
      setDiagnostic({
        connectionState: 'failed',
        statusCode: null,
        disconnectReason: errReason,
        baileysVersion: '7.0.0-rc14',
        waWebVersion: 'N/A',
        timestamp: new Date().toISOString(),
        errorDetail: 'Network connection error during pairing request',
      });
    } finally {
      setIsStarting(false);
    }
  };

  const handleSwitchMethod = async (newMethod: 'qr' | 'pairing_code') => {
    if (method === newMethod) return;
    setMethod(newMethod);
    setPhoneInputError(null);
    setPairingCode(null);
    setQrCode(null);
    setDiagnostic(null);

    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }

    await cancelCurrentPending(pendingConnectionId);
    setPendingConnectionId(null);

    if (newMethod === 'qr') {
      startQrConnection();
    } else {
      setStatus('IDLE');
    }
  };

  const handleCopyCode = () => {
    if (!pairingCode) return;
    navigator.clipboard.writeText(pairingCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-sm animate-fade-in">
      <div className="surface border border-white/10 bg-ink-900/95 backdrop-blur-md rounded-2xl w-full max-w-lg shadow-2xl p-6 relative overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors z-10"
          title="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 shadow-soft">
            <ServiceIcon id="whatsapp" size={22} />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">Connect WhatsApp Account</h2>
            <p className="text-xs text-slate-400 font-medium">
              Link your device securely using QR scan or phone number pairing.
            </p>
          </div>
        </div>

        {/* Method Switcher Tabs */}
        <div className="grid grid-cols-2 gap-1 rounded-xl bg-white/[0.03] p-1 border border-white/[0.06] mb-5 shrink-0">
          <button
            type="button"
            onClick={() => handleSwitchMethod('qr')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
              method === 'qr'
                ? 'bg-azure-500 text-white shadow-soft'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
            }`}
          >
            <QrCode className="h-4 w-4" /> Scan QR Code
            <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.2 rounded bg-white/20 ml-1">
              Primary
            </span>
          </button>
          <button
            type="button"
            onClick={() => handleSwitchMethod('pairing_code')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
              method === 'pairing_code'
                ? 'bg-azure-500 text-white shadow-soft'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
            }`}
          >
            <Smartphone className="h-4 w-4" /> Use Phone Number
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="flex-1 overflow-y-auto subtle-scrollbar pr-0.5 space-y-4">
          
          {/* SUCCESS STATE */}
          {status === 'CONNECTED' && (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 mb-3 animate-bounce">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-base font-semibold text-white">WhatsApp Connected!</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs font-medium">
                Your device authenticated successfully. Chat history and message streaming are now initializing.
              </p>
            </div>
          )}

          {/* METHOD 1: QR CODE FLOW */}
          {method === 'qr' && status !== 'CONNECTED' && (
            <div className="flex flex-col items-center text-center">
              {/* Instructions */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 text-xs text-slate-300 mb-5 w-full text-left">
                <p className="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-azure-400" />
                  How to connect with QR:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-slate-400 text-[11px] leading-relaxed">
                  <li>Open <strong>WhatsApp</strong> on your phone</li>
                  <li>Go to <strong>Settings</strong> &rarr; <strong>Linked Devices</strong></li>
                  <li>Tap <strong>Link a Device</strong> and point your camera here</li>
                </ol>
              </div>

              {/* QR Container */}
              <div className="relative flex h-52 w-52 items-center justify-center rounded-2xl border border-white/10 bg-black/50 p-4 shadow-soft">
                {qrCode && status === 'QR_READY' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={qrCode} alt="WhatsApp QR Code" className="h-full w-full rounded-lg" />
                ) : status === 'EXPIRED' ? (
                  <div className="flex flex-col items-center p-3 text-amber-400">
                    <AlertTriangle className="h-8 w-8 mb-2" />
                    <span className="text-xs font-semibold">QR Code Expired</span>
                    <button
                      onClick={startQrConnection}
                      className="mt-3 btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5"
                    >
                      <RefreshCw className="h-3 w-3" /> Refresh QR
                    </button>
                  </div>
                ) : status === 'ERROR' || status === 'LOGGED_OUT' ? (
                  <div className="flex flex-col items-center p-3 text-rose-400">
                    <AlertTriangle className="h-8 w-8 mb-2" />
                    <span className="text-xs font-semibold">Connection Failed</span>
                    <button
                      onClick={startQrConnection}
                      className="mt-3 btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5 bg-rose-500 hover:bg-rose-600 border-rose-600"
                    >
                      <RefreshCw className="h-3 w-3" /> Try Again
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <RefreshCw className="h-8 w-8 text-azure-400 animate-spin" />
                    <span className="mt-3 text-[11px] font-medium text-slate-400">
                      {isStarting ? 'Initiating socket...' : 'Fetching QR code...'}
                    </span>
                  </div>
                )}
              </div>

              {/* Status Live Indicator */}
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-300">
                {status === 'QR_READY' && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
                {status === 'CONNECTING' && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azure-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-azure-500"></span>
                  </span>
                )}
                <span>
                  {status === 'QR_READY' && 'Scan QR code with your phone'}
                  {status === 'CONNECTING' && 'Connecting to WhatsApp servers...'}
                  {status === 'EXPIRED' && 'QR code expired'}
                  {status === 'ERROR' && (diagnostic?.errorDetail || 'Connection failed')}
                  {status === 'LOGGED_OUT' && 'Connection rejected or logged out'}
                </span>
              </div>

              {/* Secondary Option Switch link */}
              <button
                type="button"
                onClick={() => handleSwitchMethod('pairing_code')}
                className="mt-4 text-xs font-semibold text-azure-400 hover:text-azure-300 transition-colors flex items-center gap-1"
              >
                Use phone number instead <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* METHOD 2: PAIRING CODE FLOW */}
          {method === 'pairing_code' && status !== 'CONNECTED' && (
            <div className="space-y-4">
              
              {/* Step A: Input Phone Number (if no pairing code generated yet or failed) */}
              {(!pairingCode || status === 'ERROR' || status === 'EXPIRED' || status === 'LOGGED_OUT') && (
                <form onSubmit={handleStartPairingCode} className="space-y-4">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 text-xs text-slate-300">
                    <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
                      <Smartphone className="h-3.5 w-3.5 text-azure-400" />
                      Link with phone number:
                    </p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Enter your mobile number to receive an 8-character pairing code to enter in WhatsApp.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Country & Phone Number
                    </label>
                    <div className="flex gap-2">
                      {/* Country Code Select */}
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-36 rounded-xl border border-white/10 bg-ink-950 px-2.5 py-2.5 text-xs text-white outline-none focus:border-azure-400/50 transition-colors"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={`${c.code}-${c.name}`} value={c.code} className="bg-ink-900 text-white">
                            {c.flag} +{c.code} ({c.name.split('/')[0].trim()})
                          </option>
                        ))}
                      </select>

                      {/* Phone Input */}
                      <input
                        type="tel"
                        placeholder="e.g. 98765 43210 or +91..."
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          setPhoneInputError(null);
                        }}
                        className="flex-1 rounded-xl border border-white/10 bg-ink-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-azure-400/50 transition-colors"
                      />
                    </div>

                    {phoneInputError && (
                      <p className="mt-1.5 text-[11px] text-rose-400 font-medium flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3 shrink-0" />
                        {phoneInputError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isStarting || status === 'CONNECTING'}
                    className="btn-primary w-full text-xs py-2.5 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isStarting || status === 'CONNECTING' ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" /> Generating Pairing Code...
                      </>
                    ) : (
                      <>
                        <Smartphone className="h-4 w-4" /> Generate Pairing Code
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Step B: Pairing Code Generated & Waiting */}
              {pairingCode && status === 'PAIRING_CODE_READY' && (
                <div className="flex flex-col items-center text-center space-y-4 pt-1">
                  
                  {/* Instructions Banner */}
                  <div className="rounded-xl border border-azure-400/20 bg-azure-400/5 p-3.5 text-xs text-left w-full">
                    <p className="font-semibold text-azure-300 mb-1.5 flex items-center gap-1.5">
                      <Info className="h-3.5 w-3.5" />
                      Enter this code in WhatsApp:
                    </p>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-mono">
                      WhatsApp &rarr; Linked Devices &rarr; Link a device &rarr; <strong>Link with phone number</strong> &rarr; enter this code
                    </p>
                  </div>

                  {/* Code Display Box */}
                  <div className="w-full rounded-2xl border border-azure-400/30 bg-black/60 p-6 flex flex-col items-center justify-center shadow-inner relative group">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">
                      WhatsApp Pairing Code
                    </p>
                    <div className="font-mono text-3xl md:text-4xl font-bold tracking-widest text-azure-400 py-1 select-all">
                      {pairingCode}
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="mt-4 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copy Code
                        </>
                      )}
                    </button>
                  </div>

                  {/* Waiting Status Indicator */}
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    Waiting for code to be entered in WhatsApp...
                  </div>

                  {/* Action Link to Retry / Change Number */}
                  <div className="flex items-center justify-center gap-4 pt-1 text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setPairingCode(null);
                        setStatus('IDLE');
                      }}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Use another phone number
                    </button>
                    <span className="text-slate-600">&bull;</span>
                    <button
                      type="button"
                      onClick={() => handleSwitchMethod('qr')}
                      className="text-azure-400 hover:text-azure-300 transition-colors"
                    >
                      Switch to QR scan
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* DIAGNOSTIC PANEL */}
          {diagnostic && (
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.01] overflow-hidden">
              <button
                type="button"
                onClick={() => setShowDiagnostics(!showDiagnostics)}
                className="w-full flex items-center justify-between px-3.5 py-2 text-[11px] font-semibold text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span>Diagnostics & Connection Status</span>
                {showDiagnostics ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>

              {showDiagnostics && (
                <div className="px-3.5 pb-3.5 pt-1 border-t border-white/[0.04] space-y-1.5 font-mono text-[10px] text-slate-400">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Connection State:</span>
                    <span className="text-slate-200">{diagnostic.connectionState || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status Code:</span>
                    <span className="text-slate-200">{diagnostic.statusCode ?? 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Baileys Version:</span>
                    <span className="text-slate-200">{diagnostic.baileysVersion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">WA Web Version:</span>
                    <span className="text-slate-200">{diagnostic.waWebVersion}</span>
                  </div>
                  {diagnostic.disconnectReason && (
                    <div className="pt-1 text-rose-400 break-words">
                      <span className="text-slate-500">Disconnect Reason: </span>
                      {diagnostic.disconnectReason}
                    </div>
                  )}
                  {diagnostic.errorDetail && diagnostic.errorDetail !== diagnostic.disconnectReason && (
                    <div className="pt-0.5 text-amber-400 break-words">
                      <span className="text-slate-500">Error Detail: </span>
                      {diagnostic.errorDetail}
                    </div>
                  )}
                  <div className="flex justify-between pt-1 text-[9px] text-slate-600">
                    <span>Logged At:</span>
                    <span>{diagnostic.timestamp}</span>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="mt-5 border-t border-white/[0.06] pt-3.5 flex items-center justify-between shrink-0">
          <p className="text-[10px] text-slate-600 font-medium">
            Personal linked-device stream &middot; Read-only sync
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="btn-ghost-sm text-xs px-4 py-1.5 border border-white/10 text-slate-400 hover:text-white"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
