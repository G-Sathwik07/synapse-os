import { AppShell } from '@/components/AppShell';
import Link from 'next/link';
import { FolderKanban, Github, Mail, Calendar, Brain, ChevronRight, Plus, Users } from 'lucide-react';

const PROJECTS = [
  { id: 'p1', name: 'DBMS Assignment #3', desc: 'Normalization · BCNF decomposition', progress: 72, due: 'Today', members: 1, kind: 'academic', tags: ['DBMS', 'University'] },
  { id: 'p2', name: 'Query Engine v2', desc: 'Connection pooling + latency profiling', progress: 85, due: 'Thu', members: 4, kind: 'engineering', tags: ['Platform', 'Backend'] },
  { id: 'p3', name: 'API v2 Contract', desc: 'Resource-oriented design doc', progress: 40, due: 'Next week', members: 3, kind: 'design', tags: ['API', 'Design'] },
  { id: 'p4', name: 'Northwind Interview', desc: 'Backend Platform Engineer prep', progress: 60, due: 'Today', members: 1, kind: 'personal', tags: ['Career'] },
  { id: 'p5', name: 'Knowledge Graph UI', desc: 'Interactive node-link visualization', progress: 95, due: 'Done', members: 2, kind: 'engineering', tags: ['Frontend', 'SynapseOS'] },
  { id: 'p6', name: 'Memory Indexer', desc: 'Cross-service memory formation pipeline', progress: 30, due: 'Next sprint', members: 3, kind: 'engineering', tags: ['Core', 'AI'] },
];

const KIND_COLOR: Record<string, string> = {
  academic: 'text-amber-400',
  engineering: 'text-azure-300',
  design: 'text-violet-400',
  personal: 'text-emerald-400',
};

export default function Page() {
  return (
    <AppShell current="/projects">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-white">Projects</h1>
          <p className="mt-1 text-sm text-slate-500">Everything SynapseOS tracks across your work — linked to memory, calendar, and code.</p>
        </div>
        <button className="btn-primary text-sm">
          <Plus className="h-4 w-4" /> New Project
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <div key={p.id} className="surface surface-hover group flex flex-col p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <FolderKanban className={`h-5 w-5 ${KIND_COLOR[p.kind]}`} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{p.name}</h3>
                  <p className="text-xs text-slate-500">{p.desc}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-slate-400">{t}</span>
              ))}
            </div>

            {/* Progress */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Progress</span>
                <span className="text-slate-300">{p.progress}%</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-azure-400 to-indigo-400" style={{ width: `${p.progress}%` }} />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {p.members}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.due}</span>
              </div>
              <Link href='/knowledge-graph' className="flex items-center gap-1 text-xs text-azure-300 hover:text-azure-200">
                Graph <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Linked activity summary */}
      <div className="mt-6 surface p-5">
        <h2 className="text-sm font-semibold text-white">Linked across your workspace</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <SummaryStat icon={Brain} color="text-azure-300" label="Memories linked" value="128" />
          <SummaryStat icon={Github} color="text-slate-300" label="Commits tracked" value="342" />
          <SummaryStat icon={Mail} color="text-rose-400" label="Emails indexed" value="1,847" />
        </div>
      </div>
      </div>
    </AppShell>
  );
}

 function SummaryStat({ icon: Icon, color, label, value }: { icon: React.ComponentType<{ className?: string }>; color: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <Icon className={`h-5 w-5 ${color}`} />
      <div>
        <p className="font-display text-lg font-semibold text-white">{value}</p>
        <p className="text-xs text-slate-500">{label}</p>
      </div>
    </div>
  );
}
