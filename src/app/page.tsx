"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { LandingNav } from '@/components/LandingNav';
import { Footer } from '@/components/Footer';
import { useReveal, useMousePosition } from '@/lib/hooks';
import {
  ArrowRight,
  Mail,
  Calendar,
  Github,
  Sparkles,
  Search,
  Brain,
  Zap,
  Shield,
  Check,
  ChevronRight,
} from 'lucide-react';
import { ServiceIcon } from '@/components/ServiceIcon';

const SUBTITLES = [
  'Your Personal Knowledge Operating System',
  'Your Second Brain',
  'Your Memory Engine',
  'Your Intelligence Layer',
  'Your Knowledge Network',
  'Your Thinking System',
];

const FRAGMENTED_APPS = [
  { name: 'Gmail', id: 'gmail' },
  { name: 'Calendar', id: 'calendar' },
  { name: 'GitHub', id: 'github' },
  { name: 'WhatsApp', id: 'whatsapp' },
  { name: 'Slack', id: 'slack' },
  { name: 'Discord', id: 'discord' },
  { name: 'Drive', id: 'drive' },
];

const THINK_STEPS = [
  { id: 'email', label: 'Email received', sub: 'Prof. Chen — DBMS feedback', icon: Mail, color: '#ea4335' },
  { id: 'meeting', label: 'Calendar meeting', sub: 'Team sync · 3:00 PM', icon: Calendar, color: '#4285f4' },
  { id: 'commit', label: 'GitHub commit', sub: 'PR #142 merged', icon: Github, color: '#e2e8f0' },
  { id: 'update', label: 'Project update', sub: 'Query engine v2', icon: Zap, color: '#7c83ff' },
  { id: 'memory', label: 'Memory formed', sub: 'DBMS normalization', icon: Brain, color: '#5b82fc' },
  { id: 'recommend', label: 'AI recommendation', sub: 'Move sync to 4 PM', icon: Sparkles, color: '#8b5cf6' },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950">
      {/* Ambient background gradients that slowly shift */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-azure-500/10 blur-[140px] animate-pulse-soft" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-500/8 blur-[130px] animate-float-slow" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/6 blur-[130px] animate-float-slow" />
      </div>

      <LandingNav />

      <main className="relative z-10">
        <Hero />
        <Problem />
        <Vision />
        <HowItThinks />
        <KnowledgeNetwork />
        <DailyBrief />
        <GlobalSearch />
        <MemoryTimeline />
        <Integrations />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  const [subIndex, setSubIndex] = useState(0);
  const [subVisible, setSubVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubVisible(false);
      setTimeout(() => {
        setSubIndex((i) => (i + 1) % SUBTITLES.length);
        setSubVisible(true);
      }, 400);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Neural network behind hero */}
      <div className="absolute inset-0 z-0">
        <NeuralNetwork className="h-full w-full opacity-70" density={0.012} maxDist={170} />
      </div>
      {/* Radial fade to focus center */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-7 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm">
          <span className="dot bg-azure-400 animate-pulse-soft" />
          Introducing SynapseOS 1.0 — your knowledge, connected
        </div>

        <h1 className="font-display text-hero font-semibold text-white animate-fade-up">
          Synapse<span className="text-gradient-azure">OS</span>
        </h1>

        <div className="mt-6 h-9 overflow-hidden">
          <p
            className={`text-lg font-medium text-slate-300 transition-all duration-500 ${
              subVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            {SUBTITLES[subIndex]}
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 text-balance">
          Not another chatbot. An intelligent operating system that connects every part of your digital life into one unified memory and decision system.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/signup" className="btn-primary group w-full sm:w-auto">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link href='/dashboard' className="btn-ghost w-full sm:w-auto">
            View Demo
          </Link>
        </div>

        <p className="mt-8 text-xs text-slate-600">
          No credit card required · Free during early access
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <div className="h-2 w-1 rounded-full bg-slate-400 animate-float" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROBLEM ----------------------------- */
function Problem() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative mx-auto max-w-6xl px-6 py-32">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <SectionLabel>The Problem</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-section font-semibold text-white text-balance">
          Your knowledge is fragmented across a dozen disconnected apps.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          Every service stores information independently. Context is lost the moment you switch tabs. Important relationships between an email, a meeting, and a commit are never seen — because no single system holds them together.
        </p>
      </div>

      {/* Fragmented apps visualization */}
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FRAGMENTED_APPS.map((app, i) => {
          return (
            <div
              key={app.name}
              className={`surface surface-hover group relative overflow-hidden p-6 reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-soft transition-transform duration-300 group-hover:scale-105">
                  <ServiceIcon id={app.id} size={22} />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600">Isolated</span>
              </div>
              <h3 className="mt-4 text-sm font-medium text-slate-200">{app.name}</h3>
              <p className="mt-1 text-xs text-slate-500">Stores its own data. No shared memory.</p>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-1/3 rounded-full bg-slate-600" />
              </div>
            </div>
          );
        })}
      </div>

      <div className={`mt-12 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
        <div className="surface flex flex-col items-center gap-3 p-8 text-center sm:flex-row sm:justify-center sm:text-left">
          <p className="max-w-2xl text-base text-slate-300">
            <span className="text-white">The result.</span> You spend your day context-switching. Important connections between tools are invisible. Your memory lives in seven places — and nowhere at once.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- VISION ----------------------------- */
function Vision() {
  const { ref, visible } = useReveal();
  const mouse = useMousePosition();

  return (
    <section id="vision" ref={ref} className="relative mx-auto max-w-6xl px-6 py-32">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <SectionLabel>The Vision</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-section font-semibold text-white text-balance">
          One system that remembers, connects, and understands.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          SynapseOS sits between you and every service you use. It watches information flow, builds a unified memory, and surfaces the connections that matter — without ever taking the decision away from you.
        </p>
      </div>

      <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
        {/* Flow visualization */}
        <div className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          <div className="surface-raised relative aspect-[4/3] overflow-hidden p-8">
            <div
              className="pointer-events-none absolute inset-0 bg-grid opacity-40"
              style={{ transform: `translate(${mouse.x * -12}px, ${mouse.y * -12}px)` }}
            />
            <FlowDiagram />
          </div>
        </div>

        {/* Pillars */}
        <div className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '250ms' }}>
          <div className="space-y-3">
            {[
              { icon: Brain, title: 'Remembers', desc: 'Every email, meeting, commit, and message becomes a node in your memory graph — forever.', iconColor: 'text-sky-300', borderColor: 'border-sky-400/25', bgColor: 'bg-sky-400/10' },
              { icon: Zap, title: 'Connects', desc: 'It links related information across services automatically, revealing context you would have missed.', iconColor: 'text-amber-300', borderColor: 'border-amber-400/25', bgColor: 'bg-amber-400/10' },
              { icon: Sparkles, title: 'Suggests', desc: 'It proposes the next action — a rescheduled meeting, a follow-up, a connection — and you decide.', iconColor: 'text-violet-300', borderColor: 'border-violet-400/25', bgColor: 'bg-violet-400/10' },
              { icon: Shield, title: 'You stay in control', desc: 'SynapseOS never acts without your approval. It thinks. You decide.', iconColor: 'text-emerald-300', borderColor: 'border-emerald-400/25', bgColor: 'bg-emerald-400/10' },
            ].map((p) => (
              <div key={p.title} className="surface surface-hover flex items-start gap-4 p-5">
                <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${p.borderColor} ${p.bgColor}`}>
                  <p.icon className={`h-5 w-5 ${p.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowDiagram() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <defs>
        <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5b82fc" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#5b82fc" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7c83ff" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Lines from services to center */}
      {[
        [60, 60], [340, 60], [60, 240], [340, 240], [200, 40],
      ].map(([x, y], i) => (
        <g key={i}>
          <line
            x1={x} y1={y} x2={200} y2={150}
            stroke="url(#flow)" strokeWidth="1.2" strokeDasharray="4 4"
            className="animate-dash"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <circle cx={x} cy={y} r="5" fill="#1a2244" stroke="#5b82fc" strokeWidth="1.2" />
          <circle cx={x} cy={y} r="2" fill="#8aa8ff">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Center core */}
      <circle cx={200} cy={150} r="26" fill="#0c1120" stroke="#5b82fc" strokeWidth="1.5" />
      <circle cx={200} cy={150} r="14" fill="#3b62f0" opacity="0.25">
        <animate attributeName="r" values="14;22;14" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.25;0.05;0.25" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx={200} cy={150} r="6" fill="#b8ccff" />

      {/* Outgoing pulse */}
      <circle cx={200} cy={150} r="6" fill="none" stroke="#8aa8ff" strokeWidth="1.5">
        <animate attributeName="r" values="6;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ----------------------------- HOW IT THINKS ----------------------------- */
function HowItThinks() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => setActive((a) => (a + 1) % THINK_STEPS.length), 2200);
    return () => clearInterval(t);
  }, [visible]);

  return (
    <section id="how-it-thinks" ref={ref} className="relative mx-auto max-w-6xl px-6 py-32">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <SectionLabel>How SynapseOS Thinks</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-section font-semibold text-white text-balance">
          Information flows through the graph and becomes intelligence.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          An email triggers a calendar event, which links to a commit, which updates a project, which forms a memory, which produces a recommendation. Watch it happen.
        </p>
      </div>

      <div className={`mt-16 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
        <div className="surface-raised overflow-hidden p-8 sm:p-12">
          {/* Flow steps */}
          <div className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
            {THINK_STEPS.map((step, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <div key={step.id} className="flex flex-1 items-center gap-2 lg:flex-col">
                  <div
                    className={`relative flex w-full flex-col items-center gap-3 rounded-2xl border p-5 transition-all duration-500 ${
                      isActive
                        ? 'border-azure-400/40 bg-azure-400/8 shadow-glow-soft'
                        : isPast
                        ? 'border-white/10 bg-white/[0.02] opacity-60'
                        : 'border-white/[0.06] bg-ink-900/40 opacity-50'
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500 ${
                        isActive ? 'border-azure-400/40 bg-azure-400/15' : 'border-white/10 bg-white/[0.03]'
                      }`}
                    >
                      <step.icon
                        className="h-5 w-5 transition-colors duration-500"
                        style={{ color: isActive ? step.color : '#64748b' }}
                      />
                    </div>
                    <div className="text-center">
                      <p className={`text-xs font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {step.label}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500">{step.sub}</p>
                    </div>
                    {isActive && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-400/60" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-azure-400" />
                      </span>
                    )}
                  </div>

                  {/* Connector */}
                  {i < THINK_STEPS.length - 1 && (
                    <div className="flex items-center justify-center px-2 py-1 lg:py-3">
                      <div className="relative h-px w-full lg:w-px lg:h-full min-h-[24px]">
                        <div className="absolute inset-0 bg-white/10" />
                        <div
                          className={`absolute inset-0 transition-all duration-500 ${
                            isPast || isActive ? 'bg-gradient-to-r from-azure-400/60 to-azure-400/20 lg:from-azure-400/60 lg:to-azure-400/20' : 'opacity-0'
                          }`}
                        />
                        <ChevronRight className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-azure-400 lg:block" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Result */}
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-violet-400/20 bg-violet-500/5 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10">
              <Sparkles className="h-5 w-5 text-violet-400" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-violet-300">AI Recommendation</p>
              <p className="mt-1 text-sm text-slate-200">
                Your team sync at 3 PM overlaps with the DBMS lecture. 4 of 5 attendees are free at 4 PM. Shall I move the meeting to 4 PM and notify attendees?
              </p>
              <div className="mt-3 flex gap-2">
                <button className="btn-ghost-sm border-violet-400/30 bg-violet-500/10 text-violet-200">Accept</button>
                <button className="btn-ghost-sm">Dismiss</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- KNOWLEDGE NETWORK ----------------------------- */
function KnowledgeNetwork() {
  const { ref, visible } = useReveal();
  return (
    <section id="network" ref={ref} className="relative mx-auto max-w-6xl px-6 py-32">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <SectionLabel>Interactive Knowledge Network</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-section font-semibold text-white text-balance">
          Your memory, visualized as a living graph.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          Every person, project, file, and event becomes a node. Every relationship becomes an edge. Watch your knowledge network grow as SynapseOS learns.
        </p>
      </div>

      <div className={`mt-12 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
        <div className="surface-raised relative h-[480px] overflow-hidden">
          <NeuralNetwork className="absolute inset-0 h-full w-full opacity-90" density={0.02} maxDist={140} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

          {/* Floating labeled nodes overlay */}
          <div className="absolute inset-0">
            {[
              { label: 'DBMS Assignment', x: '22%', y: '28%', kind: 'project' },
              { label: 'Prof. Chen', x: '16%', y: '60%', kind: 'person' },
              { label: 'PR #142', x: '74%', y: '24%', kind: 'project' },
              { label: 'Maya Patel', x: '80%', y: '58%', kind: 'person' },
              { label: 'Northwind Labs', x: '70%', y: '78%', kind: 'person' },
              { label: 'Team Standup', x: '40%', y: '72%', kind: 'event' },
            ].map((n, i) => (
              <div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{ left: n.x, top: n.y, animationDelay: `${i * 0.8}s`, animationDuration: `${8 + i}s` }}
              >
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-850/80 px-3 py-1.5 backdrop-blur-md">
                  <span className={`dot ${n.kind === 'project' ? 'bg-azure-400' : n.kind === 'person' ? 'bg-violet-400' : 'bg-emerald-400'}`} />
                  <span className="text-xs font-medium text-slate-200">{n.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className="chip"><span className="dot bg-azure-400" /> Project</span>
            <span className="chip"><span className="dot bg-violet-400" /> Person</span>
            <span className="chip"><span className="dot bg-emerald-400" /> Event</span>
            <span className="chip"><span className="dot bg-amber-400" /> Memory</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- DAILY BRIEF ----------------------------- */
function DailyBrief() {
  const { ref, visible } = useReveal();
  return (
    <section id="brief" ref={ref} className="relative mx-auto max-w-6xl px-6 py-32">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <SectionLabel>Daily Brief Preview</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-section font-semibold text-white text-balance">
          Every morning, a single intelligent summary.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          SynapseOS reads across all your services and prepares a brief before you start your day. Priorities, conflicts, and one AI suggestion — at a glance.
        </p>
      </div>

      <div className={`mt-12 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
        <div className="surface-raised mx-auto max-w-2xl overflow-hidden p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Good morning, Alex</p>
              <p className="mt-1 font-display text-xl font-semibold text-white">Today&apos;s Brief</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Thursday, Jul 31</p>
              <p className="mt-1 text-xs text-azure-300">5 items · 1 suggestion</p>
            </div>
          </div>

          <div className="mt-6 space-y-2.5">
            {[
              { icon: Calendar, label: 'Interview — Northwind Labs', meta: '4:00 PM · Video call', color: 'text-azure-300' },
              { icon: Mail, label: 'DBMS Assignment #3', meta: 'Due 11:59 PM · 2 sections left', color: 'text-amber-400' },
              { icon: Github, label: 'Review PR #142', meta: '3 files changed · @maya requested', color: 'text-slate-300' },
              { icon: Calendar, label: 'Calendar conflict resolved', meta: 'Moved team sync to 4 PM', color: 'text-emerald-400' },
              { icon: Mail, label: '2 important emails', meta: 'Prof. Chen · Northwind recruiter', color: 'text-rose-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 transition-colors hover:border-white/10 hover:bg-white/[0.04]">
                <item.icon className={`h-4 w-4 ${item.color}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-200">{item.label}</p>
                  <p className="truncate text-xs text-slate-500">{item.meta}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-600" />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-violet-400/20 bg-violet-500/5 p-4">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
            <div>
              <p className="text-xs font-medium text-violet-300">AI Suggestion</p>
              <p className="mt-0.5 text-sm text-slate-200">Move your team sync to 4:00 PM — it overlaps with your DBMS lecture, and most attendees are free then.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- GLOBAL SEARCH ----------------------------- */
function GlobalSearch() {
  const { ref, visible } = useReveal();
  const query = 'DBMS';
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(query.slice(0, i));
      if (i >= query.length) clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, [visible, query]);

  const results = [
    { cat: 'Projects', icon: Mail, color: 'text-azure-300', title: 'DBMS Assignment #3', snippet: 'Normalization · BCNF decomposition · due Friday' },
    { cat: 'Emails', icon: Mail, color: 'text-rose-400', title: 'Prof. Chen — DBMS feedback', snippet: '"Address the normalization section before Friday..."' },
    { cat: 'Memory', icon: Brain, color: 'text-violet-400', title: 'DBMS normalization rules', snippet: 'Memory formed from assignment + feedback + BCNF notes' },
    { cat: 'Calendar', icon: Calendar, color: 'text-azure-300', title: 'DBMS Lecture · 3:00 PM', snippet: 'Topic: multivalued dependencies' },
    { cat: 'GitHub', icon: Github, color: 'text-slate-300', title: 'query-engine/dbms', snippet: 'Repo · 14 commits this week' },
  ];

  return (
    <section ref={ref} className="relative mx-auto max-w-6xl px-6 py-32">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <SectionLabel>Global Search Preview</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-section font-semibold text-white text-balance">
          One search across everything you&apos;ve ever touched.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          A Spotlight-like experience that reaches into your email, calendar, code, files, and memory — and returns connections, not just matches.
        </p>
      </div>

      <div className={`mt-12 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
        <div className="surface-raised mx-auto max-w-2xl overflow-hidden">
          {/* Search bar */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
            <Search className="h-5 w-5 text-azure-400" />
            <div className="flex-1 text-lg text-white">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse-soft bg-azure-400 align-middle" />
            </div>
            <kbd className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-400 sm:block">⌘K</kbd>
          </div>

          {/* Results */}
          <div className="max-h-[420px] overflow-auto p-3">
            {results.map((r, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.04]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <r.icon className={`h-4 w-4 ${r.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-200">{r.title}</p>
                  <p className="truncate text-xs text-slate-500">{r.snippet}</p>
                </div>
                <span className="hidden text-[10px] uppercase tracking-wider text-slate-600 sm:block">{r.cat}</span>
                <ChevronRight className="h-4 w-4 text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-400" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3 text-[11px] text-slate-500">
            <span>5 results across 5 services</span>
            <span className="flex items-center gap-2">
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">↑↓</kbd> navigate
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">↵</kbd> open
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- MEMORY TIMELINE ----------------------------- */
function MemoryTimeline() {
  const { ref, visible } = useReveal();
  const entries = [
    { time: '09:42', label: 'Meeting', detail: 'Standup with the platform team', icon: Calendar, color: 'text-azure-300' },
    { time: '10:15', label: 'Email', detail: 'Prof. Chen — DBMS feedback', icon: Mail, color: 'text-rose-400' },
    { time: '11:03', label: 'Commit', detail: 'PR #142 merged into main', icon: Github, color: 'text-slate-300' },
    { time: '13:30', label: 'Calendar', detail: 'Conflict auto-resolved', icon: Calendar, color: 'text-emerald-400' },
    { time: '14:20', label: 'Decision', detail: 'Accepted AI suggestion', icon: Sparkles, color: 'text-violet-400' },
    { time: 'Now', label: 'Today', detail: 'SynapseOS remembers all of it', icon: Brain, color: 'text-azure-300' },
  ];

  return (
    <section ref={ref} className="relative mx-auto max-w-6xl px-6 py-32">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <SectionLabel>Memory Timeline Preview</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-section font-semibold text-white text-balance">
          SynapseOS remembers everything — in order, with context.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          Browse your own memory as a timeline. Every meeting, email, commit, and decision — linked back to the things that caused it and the things it affected.
        </p>
      </div>

      <div className={`mt-12 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
        <div className="surface-raised mx-auto max-w-2xl p-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-azure-400/40 via-white/10 to-transparent" />

            <div className="space-y-6">
              {entries.map((e, i) => (
                <div key={i} className="relative flex items-start gap-5">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-850">
                    <e.icon className={`h-4 w-4 ${e.color}`} />
                  </div>
                  <div className="flex-1 pt-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-slate-500">{e.time}</span>
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{e.label}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-200">{e.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- INTEGRATIONS ----------------------------- */
function Integrations() {
  const { ref, visible } = useReveal();
  const apps = [
    { name: 'Gmail', id: 'gmail' },
    { name: 'Calendar', id: 'calendar' },
    { name: 'GitHub', id: 'github' },
    { name: 'WhatsApp', id: 'whatsapp' },
    { name: 'Slack', id: 'slack' },
    { name: 'Discord', id: 'discord' },
    { name: 'LinkedIn', id: 'linkedin' },
    { name: 'Drive', id: 'drive' },
  ];

  return (
    <section id="integrations" ref={ref} className="relative mx-auto max-w-6xl px-6 py-32">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <SectionLabel>Integrations</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-section font-semibold text-white text-balance">
          Every service you use, connected into one memory.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          SynapseOS sits at the center. Each integration flows in and becomes part of the same graph.
        </p>
      </div>

      <div className={`mt-16 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
        <div className="relative h-[440px]">
          {/* Center core */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-azure-400/30 bg-ink-850 backdrop-blur-md">
              <div className="absolute inset-0 rounded-full bg-azure-400/10 blur-xl animate-pulse-soft" />
              <Brain className="relative h-9 w-9 text-azure-300" />
            </div>
          </div>

          {/* Orbiting apps */}
          {apps.map((app, i) => {
            const angle = (i / apps.length) * Math.PI * 2;
            const radius = 170;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={app.name}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                {/* Connection line */}
                <svg
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10"
                  width={Math.abs(x) + 60}
                  height={Math.abs(y) + 60}
                  style={{ transform: `translate(${x > 0 ? -100 : 0}%, ${y > 0 ? -100 : 0}%)` }}
                >
                  <line
                    x1={x > 0 ? 0 : Math.abs(x) + 60}
                    y1={y > 0 ? 0 : Math.abs(y) + 60}
                    x2={x > 0 ? Math.abs(x) + 60 : 0}
                    y2={y > 0 ? Math.abs(y) + 60 : 0}
                    stroke="#5b82fc"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    strokeDasharray="3 4"
                    className="animate-dash"
                  />
                </svg>

                <div className="group flex flex-col items-center gap-2 animate-float" style={{ animationDelay: `${i * 0.5}s`, animationDuration: `${9 + i}s` }}>
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-850/80 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/20 hover:shadow-glow-soft"
                  >
                    <ServiceIcon id={app.id} size={28} />
                  </div>
                  <span className="text-xs font-medium text-slate-400">{app.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */
function FinalCTA() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative mx-auto max-w-6xl px-6 py-32">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <div className="surface-raised relative overflow-hidden p-12 text-center sm:p-20">
          <NeuralNetwork className="pointer-events-none absolute inset-0 h-full w-full opacity-40" density={0.015} maxDist={130} interactive={false} />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-ink-950/60" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-display font-semibold text-white text-balance">
              Stop switching apps. Start remembering.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              Join early access and be among the first to run your digital life on a single operating system for knowledge.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/signup" className="btn-primary group w-full sm:w-auto">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link href='/dashboard' className="btn-ghost w-full sm:w-auto">
                Explore the demo
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> Free during early access</span>
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> No credit card</span>
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> You stay in control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SHARED ----------------------------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-azure-300">
      <span className="h-px w-6 bg-azure-400/40" />
      {children}
    </span>
  );
}
