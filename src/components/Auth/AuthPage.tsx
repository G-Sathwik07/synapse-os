"use client";

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { ArrowRight, ArrowLeft, Check, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { signIn } from 'next-auth/react';

type Mode = 'login' | 'signup';

export function AuthPage({ mode }: { mode: Mode }) {
  const router = useRouter();
  const isSignup = mode === 'signup';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const strength = passwordStrength(password);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isSignup) {
        if (name.trim().length < 2) {
          setError('Name must be at least 2 characters long.');
          setLoading(false);
          return;
        }
        if (password.length < 8) {
          setError('Password must be at least 8 characters long.');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError('Passwords do not match.');
          setLoading(false);
          return;
        }

        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, confirmPassword }),
        });

        const data = await res.json();
        if (!res.ok) {
          setError(data.message || 'Unable to create account. Please try again.');
          setLoading(false);
          return;
        }

        // Automatic sign in after signup
        const signInRes = await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        if (signInRes?.error) {
          router.push('/login?message=Account created successfully. Please sign in.');
        } else {
          router.push('/dashboard');
        }
      } else {
        const signInRes = await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        if (signInRes?.error) {
          setError('Invalid email or password.');
          setLoading(false);
        } else {
          router.push('/dashboard');
        }
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950 px-6">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0">
        <NeuralNetwork className="absolute inset-0 h-full w-full opacity-40" density={0.01} maxDist={150} />
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-azure-500/10 blur-[140px]" />
      </div>

      {/* Back to home */}
      <Link href="/" className="group absolute left-6 top-6 z-20 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Home
      </Link>

      <div className="relative z-10 w-full max-w-md">
        <div className="surface-raised overflow-hidden p-8 sm:p-10">
          <div className="mb-8 flex justify-center">
            <Logo size={36} withWordmark={false} />
          </div>

          <h1 className="text-center font-display text-2xl font-semibold text-white">
            {isSignup ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="mt-2 text-center text-sm text-slate-500">
            {isSignup
              ? 'Start building your second brain in seconds.'
              : 'Sign in to your knowledge operating system.'}
          </p>

          {/* Google */}
          <button
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            type="button"
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition-all hover:border-white/20 hover:bg-white/[0.06]"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs text-slate-600">or</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          {error && (
            <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/5 p-3 text-center text-xs text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={submit} className="space-y-4">
            {isSignup && (
              <Field icon={User} label="Name">
                <input
                  className="input pl-11"
                  placeholder="Alex Carter"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Field>
            )}

            <Field icon={Mail} label="Email">
              <input
                type="email"
                className="input pl-11"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>

            <Field icon={Lock} label="Password">
              <input
                type={showPwd ? 'text' : 'password'}
                className="input pl-11 pr-11"
                placeholder={isSignup ? 'At least 8 characters' : '••••••••'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPwd((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                aria-label={showPwd ? 'Hide password' : 'Show password'}
              >
                {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </Field>

            {isSignup && (
              <Field icon={Lock} label="Confirm Password">
                <input
                  type={showPwd ? 'text' : 'password'}
                  className="input pl-11 pr-11"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Field>
            )}

            {isSignup && password.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                        i < strength.score ? strength.color : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-500">{strength.label}</p>
              </div>
            )}

            {!isSignup && (
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-400">
                  <input type="checkbox" className="h-3.5 w-3.5 rounded border-white/20 bg-white/5 accent-azure-500" />
                  Stay signed in
                </label>
                <button type="button" className="text-azure-300 hover:text-azure-200">Forgot password?</button>
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary group w-full">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  {isSignup ? 'Creating account…' : 'Signing in…'}
                </span>
              ) : (
                <>
                  {isSignup ? 'Create account' : 'Sign in'}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            {isSignup ? (
              <>Already have an account? <Link href="/login" className="text-azure-300 hover:text-azure-200">Sign in</Link></>
            ) : (
              <>New to SynapseOS? <Link href="/signup" className="text-azure-300 hover:text-azure-200">Create an account</Link></>
            )}
          </p>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-600">
          <Check className="h-3 w-3 text-emerald-400" />
          Encrypted end-to-end. You own your data. You stay in control.
        </p>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-400">{label}</span>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        {children}
      </div>
    </label>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function passwordStrength(pwd: string) {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/\d/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  const labels = ['Too short', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['bg-rose-500', 'bg-rose-500', 'bg-amber-500', 'bg-azure-500', 'bg-emerald-500'];
  return { score, label: labels[score], color: colors[score] };
}
