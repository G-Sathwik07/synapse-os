// Centralized mock data for the SynapseOS application.
// All realistic, no backend logic.

export type Integration = {
  id: string;
  name: string;
  category: string;
  connected: boolean;
  permissions: string[];
  lastSync: string;
  color: string;
  glyph: string;
};

export const integrations: Integration[] = [
  { id: 'gmail', name: 'Gmail', category: 'Email', connected: true, permissions: ['Read emails', 'Send on your behalf', 'Label access'], lastSync: '2 min ago', color: '#ea4335', glyph: 'M' },
  { id: 'calendar', name: 'Google Calendar', category: 'Calendar', connected: true, permissions: ['Read events', 'Create events', 'Modify reminders'], lastSync: '1 min ago', color: '#4285f4', glyph: 'C' },
  { id: 'github', name: 'GitHub', category: 'Code', connected: true, permissions: ['Read repos', 'Read commits', 'Read pull requests'], lastSync: '4 min ago', color: '#f5f5f5', glyph: 'G' },
  { id: 'slack', name: 'Slack', category: 'Chat', connected: true, permissions: ['Read messages', 'Read channels'], lastSync: '3 min ago', color: '#4a154b', glyph: 'S' },
  { id: 'discord', name: 'Discord', category: 'Chat', connected: false, permissions: ['Read messages', 'Read servers'], lastSync: 'Never', color: '#5865f2', glyph: 'D' },
  { id: 'whatsapp', name: 'WhatsApp', category: 'Chat', connected: false, permissions: ['Read messages', 'Read contacts'], lastSync: 'Never', color: '#25d366', glyph: 'W' },
  { id: 'drive', name: 'Google Drive', category: 'Files', connected: true, permissions: ['Read files', 'Read metadata'], lastSync: '6 min ago', color: '#ffba00', glyph: 'D' },
  { id: 'linkedin', name: 'LinkedIn', category: 'Social', connected: false, permissions: ['Read profile', 'Read connections'], lastSync: 'Never', color: '#0a66c2', glyph: 'L' },
  { id: 'notion', name: 'Notion', category: 'Notes', connected: true, permissions: ['Read pages', 'Read databases'], lastSync: '8 min ago', color: '#ffffff', glyph: 'N' },
  { id: 'figma', name: 'Figma', category: 'Design', connected: false, permissions: ['Read files', 'Read comments'], lastSync: 'Never', color: '#f24e1e', glyph: 'F' },
];

export type Activity = {
  id: string;
  source: 'gmail' | 'calendar' | 'github' | 'slack' | 'drive' | 'memory';
  title: string;
  detail: string;
  time: string;
  type: 'email' | 'meeting' | 'commit' | 'message' | 'file' | 'memory' | 'decision';
};

export const recentActivity: Activity[] = [
  { id: 'a1', source: 'gmail', title: 'Prof. Chen sent feedback on DBMS draft', detail: '"Looks strong — address normalization section before Friday."', time: '8 min ago', type: 'email' },
  { id: 'a2', source: 'github', title: 'PR #142 merged into main', detail: 'feat: add connection pooling to query engine', time: '32 min ago', type: 'commit' },
  { id: 'a3', source: 'calendar', title: 'Team sync moved to 4:00 PM', detail: 'SynapseOS detected a conflict with your DBMS lecture', time: '1 hr ago', type: 'meeting' },
  { id: 'a4', source: 'slack', title: 'Maya asked about the API spec', detail: '#engineering — "did we settle on the v2 contract?"', time: '2 hr ago', type: 'message' },
  { id: 'a5', source: 'memory', title: 'Memory formed: DBMS normalization rules', detail: 'Linked to Prof. Chen feedback + Assignment #3', time: '3 hr ago', type: 'memory' },
  { id: 'a6', source: 'drive', title: 'DBMS-Assignment-3.pdf updated', detail: 'Version 4 — you added the BCNF decomposition', time: '5 hr ago', type: 'file' },
];

export type Priority = {
  id: string;
  label: string;
  meta: string;
  kind: 'interview' | 'assignment' | 'pr' | 'conflict' | 'email';
  due: string;
};

export const todaysPriorities: Priority[] = [
  { id: 'p1', label: 'Interview — Northwind Labs', meta: '4:00 PM · Video call', kind: 'interview', due: 'Today' },
  { id: 'p2', label: 'DBMS Assignment #3', meta: 'Due 11:59 PM · 2 sections left', kind: 'assignment', due: 'Today' },
  { id: 'p3', label: 'Review PR #142', meta: '3 files changed · @maya requested', kind: 'pr', due: 'Today' },
  { id: 'p4', label: 'Calendar conflict resolved', meta: 'Moved team sync to 4 PM', kind: 'conflict', due: 'Done' },
  { id: 'p5', label: '2 important emails', meta: 'Prof. Chen · Northwind recruiter', kind: 'email', due: 'Unread' },
];

export type MemoryEntry = {
  id: string;
  time: string;
  date: string;
  title: string;
  summary: string;
  source: string;
  connections: string[];
  kind: 'meeting' | 'email' | 'commit' | 'calendar' | 'decision' | 'file' | 'memory';
};

export const memoryTimeline: MemoryEntry[] = [
  {
    id: 'm1', time: '09:42', date: 'Today',
    title: 'Standup with the platform team',
    summary: 'Discussed query engine latency. You committed to profiling the connection pool by Thursday. Maya raised the v2 API contract — decision deferred to design review.',
    source: 'Calendar · Google Meet',
    connections: ['PR #142', 'Maya Patel', 'Query Engine'],
    kind: 'meeting',
  },
  {
    id: 'm2', time: '10:15', date: 'Today',
    title: 'Prof. Chen — DBMS feedback email',
    summary: 'Feedback on your normalization draft. Key ask: strengthen the BCNF decomposition example and cite the multivalued dependency case. Deadline Friday.',
    source: 'Gmail',
    connections: ['DBMS Assignment #3', 'Normalization', 'Prof. Chen'],
    kind: 'email',
  },
  {
    id: 'm3', time: '11:03', date: 'Today',
    title: 'Merged PR #142 — connection pooling',
    summary: 'feat: add connection pooling to query engine. 3 files changed, +128 / -34. Reviewed by @maya. Closes issue #138.',
    source: 'GitHub · main',
    connections: ['Query Engine', 'Maya Patel', 'Issue #138'],
    kind: 'commit',
  },
  {
    id: 'm4', time: '13:30', date: 'Today',
    title: 'Calendar conflict auto-resolved',
    summary: 'Team sync overlapped with DBMS lecture. SynapseOS proposed moving the sync to 4 PM. You accepted. Attendees notified automatically.',
    source: 'Calendar · SynapseOS suggestion',
    connections: ['Team Sync', 'DBMS Lecture', 'Today'],
    kind: 'decision',
  },
  {
    id: 'm5', time: '14:20', date: 'Today',
    title: 'Memory formed — DBMS normalization',
    summary: 'SynapseOS connected your assignment, Prof. Chen\'s feedback, and the BCNF lecture notes into a single knowledge node. 4 new edges created.',
    source: 'SynapseOS Memory',
    connections: ['DBMS Assignment #3', 'Prof. Chen', 'BCNF Notes', 'Normalization'],
    kind: 'memory',
  },
  {
    id: 'm6', time: 'Yesterday · 18:44', date: 'Yesterday',
    title: 'Northwind recruiter — interview invite',
    summary: 'Interview scheduled for Thursday 4 PM. Role: Backend Platform Engineer. SynapseOS pulled your relevant PRs and the query-engine writeup.',
    source: 'Gmail',
    connections: ['Northwind Labs', 'Query Engine', 'PR #142'],
    kind: 'email',
  },
  {
    id: 'm7', time: 'Yesterday · 16:10', date: 'Yesterday',
    title: 'Design review — v2 API contract',
    summary: 'You proposed the resource-oriented contract. Maya preferred a procedure-oriented variant. Decision: ship resource-oriented, document the procedure escape hatch.',
    source: 'Notion · Design Doc',
    connections: ['Maya Patel', 'API v2', 'Platform Team'],
    kind: 'decision',
  },
];

export type GraphNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  r: number;
  kind: 'project' | 'person' | 'memory' | 'file' | 'event' | 'message';
};

export type GraphEdge = { from: string; to: string; strength: number };

export const knowledgeGraph: { nodes: GraphNode[]; edges: GraphEdge[] } = {
  nodes: [
    { id: 'core', label: 'SynapseOS', x: 50, y: 50, r: 16, kind: 'memory' },
    { id: 'dbms', label: 'DBMS Assignment #3', x: 24, y: 30, r: 11, kind: 'project' },
    { id: 'chen', label: 'Prof. Chen', x: 18, y: 58, r: 9, kind: 'person' },
    { id: 'pr142', label: 'PR #142', x: 76, y: 28, r: 10, kind: 'project' },
    { id: 'maya', label: 'Maya Patel', x: 82, y: 56, r: 9, kind: 'person' },
    { id: 'qe', label: 'Query Engine', x: 62, y: 18, r: 8, kind: 'file' },
    { id: 'northwind', label: 'Northwind Labs', x: 78, y: 78, r: 10, kind: 'person' },
    { id: 'standup', label: 'Team Standup', x: 38, y: 74, r: 8, kind: 'event' },
    { id: 'bcnf', label: 'BCNF Notes', x: 12, y: 42, r: 7, kind: 'file' },
    { id: 'api', label: 'API v2 Contract', x: 88, y: 40, r: 8, kind: 'file' },
    { id: 'lecture', label: 'DBMS Lecture', x: 30, y: 14, r: 7, kind: 'event' },
    { id: 'slack', label: '#engineering', x: 56, y: 84, r: 7, kind: 'message' },
  ],
  edges: [
    { from: 'core', to: 'dbms', strength: 0.9 },
    { from: 'core', to: 'pr142', strength: 0.9 },
    { from: 'core', to: 'maya', strength: 0.7 },
    { from: 'core', to: 'chen', strength: 0.7 },
    { from: 'core', to: 'northwind', strength: 0.6 },
    { from: 'core', to: 'standup', strength: 0.5 },
    { from: 'core', to: 'api', strength: 0.5 },
    { from: 'dbms', to: 'chen', strength: 0.8 },
    { from: 'dbms', to: 'bcnf', strength: 0.85 },
    { from: 'dbms', to: 'lecture', strength: 0.7 },
    { from: 'pr142', to: 'qe', strength: 0.85 },
    { from: 'pr142', to: 'maya', strength: 0.8 },
    { from: 'pr142', to: 'northwind', strength: 0.6 },
    { from: 'maya', to: 'api', strength: 0.75 },
    { from: 'standup', to: 'slack', strength: 0.6 },
    { from: 'standup', to: 'maya', strength: 0.5 },
    { from: 'chen', to: 'lecture', strength: 0.5 },
    { from: 'api', to: 'qe', strength: 0.5 },
  ],
};

export type SearchResult = {
  id: string;
  category: 'Emails' | 'Projects' | 'Calendar' | 'Memory' | 'GitHub' | 'Files' | 'People';
  title: string;
  snippet: string;
  source: string;
  time: string;
};

export const searchResults: SearchResult[] = [
  { id: 's1', category: 'Projects', title: 'DBMS Assignment #3', snippet: 'Normalization · BCNF decomposition · due Friday', source: 'Notion', time: '5h ago' },
  { id: 's2', category: 'Emails', title: 'Prof. Chen — feedback on DBMS draft', snippet: '"Address the normalization section before Friday..."', source: 'Gmail', time: '8m ago' },
  { id: 's3', category: 'GitHub', title: 'PR #142 — connection pooling', snippet: 'feat: add connection pooling to query engine', source: 'main', time: '32m ago' },
  { id: 's4', category: 'Memory', title: 'DBMS normalization rules', snippet: 'Memory formed from assignment + feedback + BCNF notes', source: 'SynapseOS', time: '3h ago' },
  { id: 's5', category: 'Calendar', title: 'Team sync → 4:00 PM', snippet: 'Moved to resolve conflict with DBMS lecture', source: 'Google Calendar', time: '1h ago' },
  { id: 's6', category: 'People', title: 'Maya Patel', snippet: 'Engineering · 12 shared projects · last in standup', source: 'Slack + GitHub', time: '2h ago' },
  { id: 's7', category: 'Files', title: 'DBMS-Assignment-3.pdf', snippet: 'Version 4 · BCNF decomposition added', source: 'Google Drive', time: '5h ago' },
  { id: 's8', category: 'Emails', title: 'Northwind Labs — interview invite', snippet: 'Thursday 4 PM · Backend Platform Engineer', source: 'Gmail', time: 'Yesterday' },
];

export const aiSuggestion = {
  title: 'Move your team sync to 4:00 PM',
  reason: 'It overlaps with your DBMS lecture at 3:00 PM, and 4 of 5 attendees are free at 4 PM. The recruiter call is at 5 PM, so you keep a 1-hour buffer.',
  confidence: 0.92,
};
