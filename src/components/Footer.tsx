import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { NeuralNetwork } from '@/components/NeuralNetwork';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950">
      <NeuralNetwork className="pointer-events-none absolute inset-0 h-full w-full opacity-30" density={0.008} maxDist={120} interactive={false} />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Your Personal Knowledge Operating System. AI remembers. AI connects. AI suggests. Humans decide.
            </p>
          </div>

          <FooterCol title="Product" links={[['Vision', '#vision'], ['How it thinks', '#how-it-thinks'], ['Knowledge Network', '#network'], ['Daily Brief', '#brief']]} />
          <FooterCol title="Company" links={[['About', '#'], ['Careers', '#'], ['Blog', '#'], ['Press', '#']]} />
          <FooterCol title="Legal" links={[['Privacy', '#'], ['Terms', '#'], ['Security', '#'], ['Status', '#']]} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-slate-600 sm:flex-row">
          <p>© 2026 SynapseOS, Inc. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="dot bg-emerald-400 animate-pulse-soft" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            {href.startsWith('#') ? (
              <a href={href} className="text-sm text-slate-500 transition-colors hover:text-slate-200">{label}</a>
            ) : (
              <Link href={href} className="text-sm text-slate-500 transition-colors hover:text-slate-200">{label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
