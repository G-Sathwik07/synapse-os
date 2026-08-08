/**
 * Proper brand SVG icons for each integrated service.
 * Each icon renders at the given `size` (default 20).
 */

type IconProps = { size?: number; className?: string };

export function GmailIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M2 6.5C2 5.4 2.9 4.5 4 4.5H20C21.1 4.5 22 5.4 22 6.5V17.5C22 18.6 21.1 19.5 20 19.5H4C2.9 19.5 2 18.6 2 17.5V6.5Z" fill="#fff" fillOpacity="0.04" />
      <path d="M2 7L12 13.5L22 7" stroke="none" />
      <path d="M4 5L12 11L20 5H4Z" fill="#EA4335" />
      <path d="M2 6.5V17.5C2 18.6 2.9 19.5 4 19.5V8.5L12 14L20 8.5V19.5C21.1 19.5 22 18.6 22 17.5V6.5L12 12.5L2 6.5Z" fill="#EA4335" fillOpacity="0.85" />
      <path d="M2 6.5L12 12.5L22 6.5C22 5.4 21.1 4.5 20 4.5H4C2.9 4.5 2 5.4 2 6.5Z" fill="#EA4335" />
    </svg>
  );
}

export function GoogleCalendarIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" fill="white" fillOpacity="0.06" stroke="#4285F4" strokeWidth="1.5" />
      <rect x="3" y="4" width="18" height="5.5" rx="2" fill="#4285F4" />
      <rect x="3" y="7.5" width="18" height="2" fill="#4285F4" />
      <line x1="8" y1="4" x2="8" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="4" x2="16" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <text x="12" y="17.5" textAnchor="middle" fill="#4285F4" fontSize="7" fontWeight="700">31</text>
    </svg>
  );
}

export function GitHubIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#e2e8f0">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function SlackIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52z" fill="#E01E5A" />
      <path d="M6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z" fill="#E01E5A" />
      <path d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.527 2.527 0 012.521 2.522v2.52H8.834z" fill="#36C5F0" />
      <path d="M8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z" fill="#36C5F0" />
      <path d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.527 2.527 0 01-2.522 2.521h-2.522V8.834z" fill="#2EB67D" />
      <path d="M17.688 8.834a2.528 2.528 0 01-2.524 2.521 2.527 2.527 0 01-2.519-2.521V2.522A2.527 2.527 0 0115.164 0a2.528 2.528 0 012.524 2.522v6.312z" fill="#2EB67D" />
      <path d="M15.164 18.956a2.528 2.528 0 012.524 2.522A2.528 2.528 0 0115.164 24a2.527 2.527 0 01-2.519-2.522v-2.522h2.519z" fill="#ECB22E" />
      <path d="M15.164 17.688a2.527 2.527 0 01-2.519-2.523 2.526 2.526 0 012.519-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.523 2.523h-6.313z" fill="#ECB22E" />
    </svg>
  );
}

export function DiscordIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#5865F2">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0A66C2">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path d="M7.5 9.5H5v9h2.5v-9zM6.25 8.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM19 18.5h-2.5v-4.4c0-1.05-.02-2.4-1.46-2.4-1.47 0-1.69 1.14-1.69 2.32v4.48H10.9V9.5h2.4v1.23h.03c.34-.64 1.15-1.31 2.37-1.31 2.53 0 3 1.67 3 3.84v5.24z" fill="white" />
    </svg>
  );
}

export function GoogleDriveIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3.67 16.5L7 21h10l3.33-4.5H3.67z" fill="#4285F4" />
      <path d="M2 16.5L7 7.5 9 11 4 21l-2-4.5z" fill="#0F9D58" />
      <path d="M22 16.5L17 7.5 12 16.5h10z" fill="#FFBA00" />
      <path d="M7 7.5h10l-5 9-5-9z" fill="#EA4335" fillOpacity="0.6" />
    </svg>
  );
}

export function NotionIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.08" />
      <path d="M6 4.5h9l3 3V20H6V4.5z" fill="white" fillOpacity="0.9" />
      <path d="M15 4.5l3 3h-3V4.5z" fill="#c4c4c4" />
      <path d="M8.5 9h7M8.5 12h7M8.5 15h4.5" stroke="#0a0e1a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function FigmaIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8 2h4a4 4 0 010 8H8V2z" fill="#F24E1E" />
      <path d="M8 10h4a4 4 0 010 8H8v-8z" fill="#FF7262" />
      <path d="M8 18v-4a4 4 0 000 8 4 4 0 000-4z" fill="#1ABCFE" />
      <path d="M16 6a4 4 0 11-8 0 4 4 0 018 0z" fill="#A259FF" />
      <path d="M8 10H4a4 4 0 000 8h4v-8z" fill="#0ACF83" />
    </svg>
  );
}

/** Map a service id to its brand SVG icon */
export function ServiceIcon({ id, size = 20 }: { id: string; size?: number }) {
  switch (id) {
    case 'gmail': return <GmailIcon size={size} />;
    case 'calendar': return <GoogleCalendarIcon size={size} />;
    case 'github': return <GitHubIcon size={size} />;
    case 'slack': return <SlackIcon size={size} />;
    case 'discord': return <DiscordIcon size={size} />;
    case 'whatsapp': return <WhatsAppIcon size={size} />;
    case 'linkedin': return <LinkedInIcon size={size} />;
    case 'drive': return <GoogleDriveIcon size={size} />;
    case 'notion': return <NotionIcon size={size} />;
    case 'figma': return <FigmaIcon size={size} />;
    default: return <span className="text-xs font-semibold text-slate-300">{id[0].toUpperCase()}</span>;
  }
}
