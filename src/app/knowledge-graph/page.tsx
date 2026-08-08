"use client";

import { AppShell } from '@/components/AppShell';
import { useRef, useState } from 'react';
import { knowledgeGraph, type GraphNode } from '@/lib/mock';
import { ZoomIn, ZoomOut, Maximize, Brain } from 'lucide-react';

const KIND_COLOR: Record<GraphNode['kind'], string> = {
  project: '#5b82fc',
  person: '#8b5cf6',
  memory: '#fbbf24',
  file: '#34d399',
  event: '#10b981',
  message: '#fb7185',
};

const KIND_LABEL: Record<GraphNode['kind'], string> = {
  project: 'Project',
  person: 'Person',
  memory: 'Memory',
  file: 'File',
  event: 'Event',
  message: 'Message',
};

export default function Page() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>('core');
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const { nodes, edges } = knowledgeGraph;

  const selNode = nodes.find((n) => n.id === selected);
  const connectedIds = new Set(
    edges.filter((e) => e.from === selected || e.to === selected).flatMap((e) => [e.from, e.to])
  );

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setPan({
      x: dragStart.current.panX + (e.clientX - dragStart.current.x),
      y: dragStart.current.panY + (e.clientY - dragStart.current.y),
    });
  };
  const onPointerUp = () => setDragging(false);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom((z) => Math.max(0.4, Math.min(2.5, z * delta)));
  };

  const reset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <AppShell current="/knowledge-graph">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-white">Knowledge Graph</h1>
          <p className="mt-1 text-sm text-slate-500">Your memory as a living network. Drag to pan, scroll to zoom, click a node to explore connections.</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="chip"><span className="dot bg-azure-400" /> Project</span>
          <span className="chip"><span className="dot bg-violet-400" /> Person</span>
          <span className="chip"><span className="dot bg-amber-400" /> Memory</span>
          <span className="chip"><span className="dot bg-emerald-400" /> Event</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Graph canvas */}
        <div className="surface-raised relative h-[600px] overflow-hidden">
          {/* Grid background */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

          <svg
            ref={svgRef}
            className="absolute inset-0 h-full w-full cursor-grab touch-none"
            style={{ cursor: dragging ? 'grabbing' : 'grab' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onWheel={onWheel}
          >
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(91,130,252,0.5)" />
                <stop offset="100%" stopColor="rgba(91,130,252,0)" />
              </radialGradient>
              <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5b82fc" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7c83ff" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
              {/* Edges */}
              {edges.map((edge, i) => {
                const a = nodes.find((n) => n.id === edge.from)!;
                const b = nodes.find((n) => n.id === edge.to)!;
                const isHighlighted =
                  hovered === edge.from || hovered === edge.to || selected === edge.from || selected === edge.to;
                return (
                  <line
                    key={i}
                    x1={a.x * 8} y1={a.y * 5} x2={b.x * 8} y2={b.y * 5}
                    stroke={isHighlighted ? 'url(#edgeGrad)' : 'rgba(120,140,180,0.15)'}
                    strokeWidth={isHighlighted ? 1.8 : 0.8}
                    strokeDasharray={isHighlighted ? '0' : '4 4'}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((n) => {
                const isHovered = hovered === n.id;
                const isSelected = selected === n.id;
                const dim = hovered && !isHovered && !connectedIds.has(n.id);
                const color = KIND_COLOR[n.kind];
                return (
                  <g
                    key={n.id}
                    transform={`translate(${n.x * 8}, ${n.y * 5})`}
                    className="cursor-pointer transition-opacity duration-300"
                    style={{ opacity: dim ? 0.3 : 1 }}
                    onMouseEnter={() => setHovered(n.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(n.id)}
                  >
                    {/* glow */}
                    <circle r={n.r * 2.4} fill="url(#nodeGlow)" opacity={isHovered || isSelected ? 1 : 0.4} className="transition-opacity duration-300" />
                    {/* ring for selected */}
                    {isSelected && <circle r={n.r + 5} fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />}
                    {/* core */}
                    <circle r={n.r} fill={color} fillOpacity={isSelected ? 0.9 : 0.7} stroke={color} strokeWidth="1.5" />
                    <circle r={n.r * 0.4} fill="#fff" fillOpacity={0.9} />
                    {/* label */}
                    <text
                      y={n.r + 14}
                      textAnchor="middle"
                      className={`fill-slate-300 text-[10px] font-medium transition-opacity duration-300 ${isHovered || isSelected ? 'opacity-100' : 'opacity-60'}`}
                      style={{ pointerEvents: 'none' }}
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Zoom controls */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-1">
            <button onClick={() => setZoom((z) => Math.min(2.5, z * 1.2))} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-ink-850/80 text-slate-300 backdrop-blur-md transition-colors hover:bg-ink-800 hover:text-white" aria-label="Zoom in">
              <ZoomIn className="h-4 w-4" />
            </button>
            <button onClick={() => setZoom((z) => Math.max(0.4, z * 0.83))} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-ink-850/80 text-slate-300 backdrop-blur-md transition-colors hover:bg-ink-800 hover:text-white" aria-label="Zoom out">
              <ZoomOut className="h-4 w-4" />
            </button>
            <button onClick={reset} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-ink-850/80 text-slate-300 backdrop-blur-md transition-colors hover:bg-ink-800 hover:text-white" aria-label="Reset view">
              <Maximize className="h-4 w-4" />
            </button>
          </div>

          {/* Stats overlay */}
          <div className="absolute left-4 top-4 flex gap-2">
            <div className="rounded-lg border border-white/10 bg-ink-850/80 px-3 py-2 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">Nodes</p>
              <p className="font-display text-lg font-semibold text-white">{nodes.length}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-ink-850/80 px-3 py-2 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">Edges</p>
              <p className="font-display text-lg font-semibold text-white">{edges.length}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-ink-850/80 px-3 py-2 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">Zoom</p>
              <p className="font-display text-lg font-semibold text-white">{Math.round(zoom * 100)}%</p>
            </div>
          </div>
        </div>

        {/* Inspector panel */}
        <div className="lg:sticky lg:top-6 lg:h-fit">
          {selNode && (
            <div className="surface-raised p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border" style={{ borderColor: `${KIND_COLOR[selNode.kind]}40`, background: `${KIND_COLOR[selNode.kind]}15` }}>
                  <Brain className="h-6 w-6" style={{ color: KIND_COLOR[selNode.kind] }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: KIND_COLOR[selNode.kind] }}>{KIND_LABEL[selNode.kind]}</p>
                  <h2 className="font-display text-lg font-semibold text-white">{selNode.label}</h2>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Stat label="Connections" value={String(connectedIds.size - 1)} />
                <Stat label="Type" value={KIND_LABEL[selNode.kind]} />
              </div>

              <div className="mt-5">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-600">Connected nodes</p>
                <div className="space-y-2">
                  {edges
                    .filter((e) => e.from === selNode.id || e.to === selNode.id)
                    .map((e, i) => {
                      const otherId = e.from === selNode.id ? e.to : e.from;
                      const other = nodes.find((n) => n.id === otherId)!;
                      return (
                        <button
                          key={i}
                          onClick={() => setSelected(other.id)}
                          className="group flex w-full items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 text-left transition-colors hover:border-azure-400/20 hover:bg-white/[0.04]"
                        >
                          <span className="dot" style={{ background: KIND_COLOR[other.kind] }} />
                          <span className="flex-1 text-xs text-slate-300">{other.label}</span>
                          <span className="text-[10px] text-slate-600">{Math.round(e.strength * 100)}%</span>
                        </button>
                      );
                    })}
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-azure-400/20 bg-azure-400/5 p-4">
                <p className="text-xs font-medium text-azure-300">Memory strength</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-azure-400 to-indigo-400" style={{ width: '78%' }} />
                </div>
                <p className="mt-1.5 text-[11px] text-slate-500">78% — strong, recently referenced</p>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </AppShell>
  );
}

 function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
      <p className="text-[10px] uppercase tracking-wider text-slate-600">{label}</p>
      <p className="mt-0.5 font-display text-base font-semibold text-white">{value}</p>
    </div>
  );
}
