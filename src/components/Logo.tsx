import Link from 'next/link';

export function Logo({ size = 28, withWordmark = true }: { size?: number; withWordmark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative inline-flex" style={{ width: size, height: size }}>
        <svg viewBox="0 0 32 32" width={size} height={size} className="transition-transform duration-500 group-hover:rotate-[18deg]">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8aa8ff" />
              <stop offset="55%" stopColor="#5b82fc" />
              <stop offset="100%" stopColor="#7c83ff" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#lg)" strokeWidth="1.3" strokeLinecap="round">
            <path d="M9 10 L16 18 L22 9 M16 18 L24 21 M16 18 L8 22" opacity="0.55" />
            <circle cx="9" cy="10" r="2.4" fill="url(#lg)" />
            <circle cx="22" cy="9" r="1.8" fill="#8aa8ff" />
            <circle cx="16" cy="18" r="2.8" fill="url(#lg)" />
            <circle cx="24" cy="21" r="1.8" fill="#7c83ff" />
            <circle cx="8" cy="22" r="1.8" fill="#8aa8ff" />
          </g>
        </svg>
        <span className="absolute inset-0 rounded-full bg-azure-400/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      {withWordmark && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-white">
          Synapse<span className="text-azure-300">OS</span>
        </span>
      )}
    </Link>
  );
}
