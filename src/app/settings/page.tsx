"use client";

import { AppShell } from '@/components/AppShell';
import { useState } from 'react';
import {
  User,
  Palette,
  Bell,
  Brain,
  Shield,
  Link2,
  Check,
  Moon,
  Sun,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

const SECTIONS = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'ai', label: 'AI Preferences', icon: Brain },
  { id: 'privacy', label: 'Privacy', icon: Shield },
  { id: 'accounts', label: 'Connected Accounts', icon: Link2 },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];

export default function Page() {
  const [active, setActive] = useState<SectionId>('profile');

  return (
    <AppShell current="/settings">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-white">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your profile, appearance, AI behavior, and privacy.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[200px_1fr]">
        {/* Section nav */}
        <nav className="space-y-1">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`side-item relative w-full ${active === s.id ? 'side-item-active' : ''}`}
            >
              <s.icon className="h-[18px] w-[18px] shrink-0" />
              <span>{s.label}</span>
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="surface-raised p-6 lg:p-8">
          {active === 'profile' && <ProfileSection />}
          {active === 'appearance' && <AppearanceSection />}
          {active === 'notifications' && <NotificationsSection />}
          {active === 'ai' && <AIPreferencesSection />}
          {active === 'privacy' && <PrivacySection />}
          {active === 'accounts' && <AccountsSection />}
        </div>
      </div>
      </div>
    </AppShell>
  );
}

 function SectionTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{desc}</p>
    </div>
  );
}

function Row({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-white/[0.06] py-4 first:border-t-0 first:pt-0">
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-200">{label}</p>
        {desc && <p className="mt-0.5 text-xs text-slate-500">{desc}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative h-6 w-10 rounded-full transition-colors duration-200 ${on ? 'bg-azure-500' : 'bg-white/10'}`}
    >
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${on ? 'translate-x-[18px]' : 'translate-x-0.5'}`} />
    </button>
  );
}

function ProfileSection() {
  return (
    <div>
      <SectionTitle title="Profile" desc="Your identity within SynapseOS." />
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-azure-400 to-indigo-500 text-xl font-semibold text-white">AC</div>
        <div>
          <button className="btn-ghost-sm">Change avatar</button>
          <p className="mt-1.5 text-xs text-slate-500">JPG or PNG, max 2MB</p>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-400">Full name</label>
          <input className="input" defaultValue="Alex Carter" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-400">Email</label>
          <input className="input" defaultValue="alex@synapseos.app" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-400">Role</label>
          <input className="input" defaultValue="Backend Platform Engineer" />
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <button className="btn-primary text-sm">Save changes</button>
        <button className="btn-ghost text-sm">Cancel</button>
      </div>
    </div>
  );
}

function AppearanceSection() {
  const [theme, setTheme] = useState('dark');
  const [accent, setAccent] = useState('azure');
  const [density, setDensity] = useState('comfortable');

  return (
    <div>
      <SectionTitle title="Appearance" desc="How SynapseOS looks for you." />
      <Row label="Theme" desc="Dark is recommended for knowledge work.">
        <div className="flex gap-2">
          <button onClick={() => setTheme('dark')} className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs ${theme === 'dark' ? 'border-azure-400/40 bg-azure-400/10 text-azure-200' : 'border-white/10 text-slate-400'}`}>
            <Moon className="h-3.5 w-3.5" /> Dark
          </button>
          <button onClick={() => setTheme('light')} className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs ${theme === 'light' ? 'border-azure-400/40 bg-azure-400/10 text-azure-200' : 'border-white/10 text-slate-400'}`}>
            <Sun className="h-3.5 w-3.5" /> Light
          </button>
        </div>
      </Row>
      <Row label="Accent color" desc="Used for highlights and focus rings.">
        <div className="flex gap-2">
          {[['azure', '#5b82fc'], ['indigo', '#6366f1'], ['violet', '#8b5cf6'], ['emerald', '#10b981']].map(([name, color]) => (
            <button key={name} onClick={() => setAccent(name)} className={`h-7 w-7 rounded-full ring-2 ring-offset-2 ring-offset-ink-850 transition-all ${accent === name ? 'ring-white/40' : 'ring-transparent'}`} style={{ background: color }} />
          ))}
        </div>
      </Row>
      <Row label="Density" desc="Spacing between elements.">
        <div className="flex gap-2">
          {['comfortable', 'compact'].map((d) => (
            <button key={d} onClick={() => setDensity(d)} className={`rounded-lg border px-3 py-1.5 text-xs capitalize ${density === d ? 'border-azure-400/40 bg-azure-400/10 text-azure-200' : 'border-white/10 text-slate-400'}`}>{d}</button>
          ))}
        </div>
      </Row>
      <Row label="Reduce motion" desc="Minimize animations across the interface.">
        <Toggle on={false} onClick={() => {}} />
      </Row>
    </div>
  );
}

function NotificationsSection() {
  const [settings, setSettings] = useState({ daily: true, suggestions: true, conflicts: true, emails: true, commits: false, memory: true });
  const set = (k: keyof typeof settings) => setSettings((s) => ({ ...s, [k]: !s[k] }));
  return (
    <div>
      <SectionTitle title="Notifications" desc="Choose what SynapseOS surfaces to you." />
      <Row label="Daily Brief" desc="A morning summary of your day."><Toggle on={settings.daily} onClick={() => set('daily')} /></Row>
      <Row label="AI suggestions" desc="When the system proposes an action."><Toggle on={settings.suggestions} onClick={() => set('suggestions')} /></Row>
      <Row label="Calendar conflicts" desc="When two events overlap."><Toggle on={settings.conflicts} onClick={() => set('conflicts')} /></Row>
      <Row label="Important emails" desc="Flagged messages across all accounts."><Toggle on={settings.emails} onClick={() => set('emails')} /></Row>
      <Row label="Commit activity" desc="Pull requests and merges on your repos."><Toggle on={settings.commits} onClick={() => set('commits')} /></Row>
      <Row label="Memory formed" desc="When SynapseOS creates a new memory node."><Toggle on={settings.memory} onClick={() => set('memory')} /></Row>
    </div>
  );
}

function AIPreferencesSection() {
  const [auto, setAuto] = useState(false);
  const [proactive, setProactive] = useState(true);
  const [verbosity, setVerbosity] = useState('balanced');
  return (
    <div>
      <SectionTitle title="AI Preferences" desc="How SynapseOS thinks and acts on your behalf." />
      <Row label="Autonomous actions" desc="Let the AI take approved actions without asking. Recommended off.">
        <Toggle on={auto} onClick={() => setAuto(!auto)} />
      </Row>
      <Row label="Proactive suggestions" desc="Surface recommendations before you ask.">
        <Toggle on={proactive} onClick={() => setProactive(!proactive)} />
      </Row>
      <Row label="Suggestion verbosity" desc="How much reasoning the AI shows.">
        <div className="flex gap-2">
          {['concise', 'balanced', 'detailed'].map((v) => (
            <button key={v} onClick={() => setVerbosity(v)} className={`rounded-lg border px-3 py-1.5 text-xs capitalize ${verbosity === v ? 'border-azure-400/40 bg-azure-400/10 text-azure-200' : 'border-white/10 text-slate-400'}`}>{v}</button>
          ))}
        </div>
      </Row>
      <Row label="Confidence threshold" desc="Minimum confidence to show a suggestion.">
        <div className="flex items-center gap-3">
          <input type="range" min={50} max={95} defaultValue={75} className="w-32 accent-azure-500" />
          <span className="w-10 text-xs text-slate-300">75%</span>
        </div>
      </Row>
      <div className="mt-6 rounded-xl border border-violet-400/20 bg-violet-500/5 p-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span className="text-xs font-medium text-violet-300">Human in control</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">SynapseOS never takes an action without your approval unless you explicitly enable autonomous mode. It thinks. You decide.</p>
      </div>
    </div>
  );
}

function PrivacySection() {
  return (
    <div>
      <SectionTitle title="Privacy" desc="Your memory belongs to you." />
      <Row label="End-to-end encryption" desc="All memory is encrypted at rest and in transit.">
        <span className="flex items-center gap-1.5 text-xs text-emerald-400"><Check className="h-3.5 w-3.5" /> Enabled</span>
      </Row>
      <Row label="Local-first memory" desc="Store memory on your device before syncing.">
        <Toggle on={true} onClick={() => {}} />
      </Row>
      <Row label="Training opt-out" desc="Your data is never used to train models.">
        <span className="flex items-center gap-1.5 text-xs text-emerald-400"><Check className="h-3.5 w-3.5" /> Opted out</span>
      </Row>
      <Row label="Data retention" desc="How long memory is kept.">
        <select className="rounded-lg border border-white/10 bg-ink-900 px-3 py-1.5 text-xs text-slate-200 focus:border-azure-400/40 focus:outline-none">
          <option>Forever</option>
          <option>2 years</option>
          <option>1 year</option>
        </select>
      </Row>
      <Row label="Export your memory" desc="Download everything as JSON or Markdown.">
        <button className="btn-ghost-sm">Export</button>
      </Row>
      <Row label="Delete all memory" desc="Permanently erase your knowledge graph. This cannot be undone.">
        <button className="btn-ghost-sm border-rose-400/30 text-rose-400 hover:bg-rose-400/10">Delete</button>
      </Row>
    </div>
  );
}

function AccountsSection() {
  const accounts = [
    { provider: 'Google', email: 'alex@gmail.com', connected: true },
    { provider: 'GitHub', email: 'alex@users.noreply.github.com', connected: true },
    { provider: 'Slack', email: 'alex@synapseos.slack.com', connected: true },
    { provider: 'Notion', email: 'alex@synapseos.app', connected: true },
  ];
  return (
    <div>
      <SectionTitle title="Connected Accounts" desc="Sign-in methods linked to your SynapseOS identity." />
      <div className="space-y-2">
        {accounts.map((a) => (
          <div key={a.provider} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <span className="text-sm font-semibold text-slate-300">{a.provider[0]}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-200">{a.provider}</p>
                <p className="text-xs text-slate-500">{a.email}</p>
              </div>
            </div>
            {a.connected ? (
              <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
                <Check className="h-3 w-3" /> Linked
              </span>
            ) : (
              <button className="btn-ghost-sm">Link</button>
            )}
          </div>
        ))}
        <button className="flex w-full items-center justify-between rounded-xl border border-dashed border-white/10 p-4 text-sm text-slate-500 transition-colors hover:border-white/20 hover:text-slate-300">
          <span>Link another account</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
