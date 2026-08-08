"use client";

import { useEffect, useRef } from 'react';
import { useMousePosition, useReducedMotion } from '@/lib/hooks';

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  kind: number; // 0 = core, 1 = mid, 2 = small
};

type Props = {
  className?: string;
  density?: number; // nodes per 100k px²
  maxDist?: number; // px distance for connection
  interactive?: boolean;
  color?: string;
  showCore?: boolean;
};

/**
 * NeuralNetwork — animated canvas of connected knowledge nodes.
 * Not particles, not stars — a living graph of information.
 */
export function NeuralNetwork({
  className = '',
  density = 0.014,
  maxDist = 150,
  interactive = true,
  color = '#5b82fc',
  showCore = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMousePosition();
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let nodes: Node[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1 || 1, 2);

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(18, Math.floor((w * h) / 100000 * density * 100));
      nodes = [];
      for (let i = 0; i < count; i++) {
        const kind = i < 3 ? 0 : i < count * 0.35 ? 1 : 2;
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: kind === 0 ? 3.2 : kind === 1 ? 2.1 : 1.4,
          pulse: Math.random() * Math.PI * 2,
          kind,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const mx = interactive ? mouse.x * 30 : 0;
      const my = interactive ? mouse.y * 30 : 0;

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          n.pulse += 0.012;
        }
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.5;
            const isCore = a.kind === 0 || b.kind === 0;
            ctx.strokeStyle = isCore
              ? `rgba(140, 168, 255, ${alpha * 0.7})`
              : `rgba(91, 130, 252, ${alpha * 0.35})`;
            ctx.lineWidth = isCore ? 0.9 : 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x + mx, a.y + my);
            ctx.lineTo(b.x + mx, b.y + my);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const px = n.x + mx;
        const py = n.y + my;
        const pulse = reduced ? 1 : 0.7 + Math.sin(n.pulse) * 0.3;
        const glow = n.r * 4 * pulse;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, glow);
        if (n.kind === 0) {
          grad.addColorStop(0, `rgba(140, 168, 255, ${0.5 * pulse})`);
          grad.addColorStop(1, 'rgba(91, 130, 252, 0)');
        } else {
          grad.addColorStop(0, `rgba(91, 130, 252, ${0.35 * pulse})`);
          grad.addColorStop(1, 'rgba(91, 130, 252, 0)');
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, glow, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = n.kind === 0 ? '#b8ccff' : n.kind === 1 ? '#8aa8ff' : color;
        ctx.beginPath();
        ctx.arc(px, py, n.r, 0, Math.PI * 2);
        ctx.fill();

        if (showCore && n.kind === 0) {
          ctx.strokeStyle = 'rgba(184, 204, 255, 0.5)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(px, py, n.r + 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    init();
    draw();

    const onResize = () => init();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [density, maxDist, interactive, color, showCore, mouse.x, mouse.y, reduced]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
