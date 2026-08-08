"use client";

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { useScrolled } from '@/lib/hooks';

export function LandingNav() {
  const scrolled = useScrolled(20);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          <a href="#vision" className="nav-link">Vision</a>
          <a href="#how-it-thinks" className="nav-link">How it thinks</a>
          <a href="#network" className="nav-link">Network</a>
          <a href="#integrations" className="nav-link">Integrations</a>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/login" className="btn-ghost-sm hidden sm:inline-flex">
            Sign in
          </Link>
          <Link href="/signup" className="btn-primary text-sm">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
