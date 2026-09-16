import { CLIENT_PROJECT_URLS } from './site';

export interface ProjectMetric {
  value: string;
  label?: string;
}

export type ProjectTier = 'live-demo' | 'case-study' | 'source-private';

/**
 * How the project proves itself on the card — deliberately varied so the
 * projects grid doesn't read as one template repeated 13 times:
 *  - 'live-demo'     → a working deployed link (see links.live/demo)
 *  - 'repo-readme'   → a public repo whose README is the proof (links.github)
 *  - 'screenshots'   → a small captioned image gallery (see `screenshots`)
 *  - 'case-study'    → stack + prose only, no link and no images (yet)
 */
export type ProjectShowcase = 'live-demo' | 'repo-readme' | 'screenshots' | 'case-study';

export interface ProjectScreenshot {
  /** Path under /public, e.g. '/projects/control-center/dashboard.png'. */
  src: string;
  /** Short caption shown under the thumbnail. */
  caption: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  tech: string[];
  category: 'web' | 'ai' | 'analytics' | 'case-study' | 'tool';
  featured: boolean;
  /**
   * Free-text period shown on the card, e.g. "2026" or "2024 – 2026".
   * Optional — leave undefined when no source states a year (don't guess).
   */
  period?: string;
  /** Short domain tags, e.g. ['AI/LLM', 'Backend']. */
  areas: string[];
  /** Disclosure-aligned status badge (see 00_MASTER/CAREER_BASE/DISCLOSURE_LEVELS.md). */
  tier: ProjectTier;
  /** True when the source is private / available on request (no public repo link exists). */
  privateSource: boolean;
  /** Presentation format for this card's proof — see ProjectShowcase. */
  showcase: ProjectShowcase;
  /**
   * Optional 1–3+ screenshots for `showcase: 'screenshots'` projects.
   * Files live in public/projects/<slug>/*, referenced here as absolute
   * paths (e.g. '/projects/control-center/dashboard.png'). Sanitize
   * (no real names/data) before adding real files — leave undefined
   * until then; the gallery simply doesn't render when it's empty.
   */
  screenshots?: ProjectScreenshot[];
  links: {
    demo?: string;
    live?: string;
    github?: string;
  };
  metrics?: ProjectMetric[];
}

export const projects: Project[] = [
  {
    id: 'ai-knowledge-orchestrator',
    titleKey: 'proj_ai_orch_title',
    descriptionKey: 'proj_ai_orch_desc',
    longDescriptionKey: 'proj_ai_orch_long',
    tech: ['Python', 'Claude API / Claude Code', 'MCP', 'Telethon', 'SQLite', 'PowerShell'],
    category: 'ai',
    featured: true,
    period: '2024 – 2026',
    areas: ['AI/LLM', 'Automation'],
    tier: 'case-study',
    privateSource: false,
    showcase: 'repo-readme',
    links: {
      github: 'https://github.com/0xGrek/ai-knowledge-orchestrator',
    },
    metrics: [
      { value: 'Multi-agent routing' },
      { value: 'Specialist memory' },
      { value: 'Digest flows' },
    ],
  },
  {
    id: 'mafia-game',
    titleKey: 'proj_mafia_title',
    descriptionKey: 'proj_mafia_desc',
    longDescriptionKey: 'proj_mafia_long',
    tech: ['React 19', 'TypeScript', 'Vite', 'Zustand', 'Supabase', 'Tailwind CSS', 'PWA'],
    category: 'web',
    featured: true,
    period: '2026',
    areas: ['Frontend', 'Hobby project'],
    tier: 'live-demo',
    privateSource: false,
    showcase: 'live-demo',
    links: {
      live: 'https://shadow-council.vercel.app/',
      github: 'https://github.com/0xGrek/mafia-game-pwa',
    },
    metrics: [
      { value: '17 roles · 3 factions' },
      { value: '16 artifact cards' },
      { value: 'Monte Carlo, 500 games min.' },
    ],
  },
  {
    id: 'portugal-realty',
    titleKey: 'proj_realty_title',
    descriptionKey: 'proj_realty_desc',
    longDescriptionKey: 'proj_realty_long',
    tech: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'httpx / asyncio', 'Docker', 'Render'],
    category: 'web',
    featured: true,
    period: '2025 – 2026',
    areas: ['Backend', 'Data aggregation'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'case-study',
    links: {},
    metrics: [
      { value: '12,000+ listings' },
      { value: '4 portals scraped' },
      { value: '554 relists flagged' },
    ],
  },
  {
    id: 'lucent-stays',
    titleKey: 'proj_lucent_title',
    descriptionKey: 'proj_lucent_desc',
    longDescriptionKey: 'proj_lucent_long',
    tech: ['HTML/CSS', 'JavaScript', 'Supabase', 'Booking platform API'],
    category: 'web',
    featured: false,
    areas: ['Web', 'Client work'],
    tier: 'live-demo',
    privateSource: false,
    showcase: 'live-demo',
    links: {
      live: CLIENT_PROJECT_URLS.lucentStays,
    },
    metrics: [
      { value: 'Client project' },
      { value: 'Booking platform' },
    ],
  },
  {
    id: 'ai-assistant-dashboard',
    titleKey: 'proj_viola_title',
    descriptionKey: 'proj_viola_desc',
    longDescriptionKey: 'proj_viola_long',
    tech: ['Python', 'Claude API', 'Next.js', 'Puppeteer', 'CRM REST API', 'SQLite', 'pytest', 'GitHub Actions'],
    category: 'ai',
    featured: true,
    period: '2026',
    areas: ['AI/LLM', 'Client work'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'case-study',
    links: {},
    metrics: [
      { value: 'Client project' },
      { value: 'Operator dashboard' },
      { value: 'CRM sync' },
    ],
  },
  {
    id: 'radar-car-market',
    titleKey: 'proj_radar_title',
    descriptionKey: 'proj_radar_desc',
    longDescriptionKey: 'proj_radar_long',
    tech: ['Python', 'SQLite', 'pytest', 'YAML', 'Telegram Bot API'],
    category: 'analytics',
    featured: true,
    period: '2026',
    areas: ['Automation', 'Data/Scraping'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'case-study',
    links: {},
    metrics: [
      { value: '14 scrapers / 12 EU countries' },
      { value: '1,195 automated tests' },
      { value: '0–12 deal scorer' },
    ],
  },
  {
    id: 'git-guardian',
    titleKey: 'proj_gitguardian_title',
    descriptionKey: 'proj_gitguardian_desc',
    longDescriptionKey: 'proj_gitguardian_long',
    tech: ['Python', 'Tauri (Rust shell)', 'TruffleHog', 'ExifTool', 'GitHub Actions'],
    category: 'tool',
    featured: false,
    period: '2026',
    areas: ['DevOps', 'Security', 'Desktop'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'screenshots',
    links: {},
    metrics: [
      { value: '0–10 push-readiness score' },
      { value: 'CI on every push' },
    ],
  },
  {
    id: 'control-center',
    titleKey: 'proj_controlcenter_title',
    descriptionKey: 'proj_controlcenter_desc',
    longDescriptionKey: 'proj_controlcenter_long',
    tech: ['Rust (Tauri)', 'TypeScript / React', 'Python (sidecar)'],
    category: 'tool',
    featured: false,
    period: '2026',
    areas: ['Desktop', 'Tauri'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'screenshots',
    links: {},
    metrics: [
      { value: 'Daily-use desktop panel' },
      { value: 'Fleet monitoring' },
    ],
  },
  {
    id: 'tauri-sidecar-shell',
    titleKey: 'proj_sidecar_title',
    descriptionKey: 'proj_sidecar_desc',
    longDescriptionKey: 'proj_sidecar_long',
    tech: ['Rust (Tauri v2)'],
    category: 'tool',
    featured: false,
    period: '2026-08',
    areas: ['Desktop', 'Shared library'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'case-study',
    links: {},
    metrics: [
      { value: '60+ lines → ~15 lines config' },
      { value: 'Reused across 2 desktop apps' },
    ],
  },
  {
    id: 'connections-hub',
    titleKey: 'proj_connectionshub_title',
    descriptionKey: 'proj_connectionshub_desc',
    longDescriptionKey: 'proj_connectionshub_long',
    tech: ['Next.js (App Router)', 'TypeScript', 'NextAuth', 'Tailwind CSS'],
    category: 'web',
    featured: false,
    period: '2026-07',
    areas: ['Frontend', 'OAuth'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'screenshots',
    links: {},
    metrics: [
      { value: 'Config-driven OAuth' },
      { value: 'GitHub / Google providers' },
    ],
  },
  {
    id: 'data-hub',
    titleKey: 'proj_datahub_title',
    descriptionKey: 'proj_datahub_desc',
    longDescriptionKey: 'proj_datahub_long',
    tech: ['Python', 'FastAPI', 'SQLite (FTS5)', 'React / Vite', 'Tauri'],
    category: 'tool',
    featured: false,
    period: '2026-08',
    areas: ['Backend', 'Search'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'case-study',
    links: {},
    metrics: [
      { value: 'Full-text search (FTS5)' },
      { value: 'REST API for internal tools' },
    ],
  },
  {
    id: 'note-taking-system',
    titleKey: 'proj_notes_title',
    descriptionKey: 'proj_notes_desc',
    longDescriptionKey: 'proj_notes_long',
    tech: ['Node.js', 'TypeScript', 'SQLite', 'Claude API'],
    category: 'ai',
    featured: false,
    period: '2026-07',
    areas: ['AI/LLM', 'Automation'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'case-study',
    links: {},
    metrics: [
      { value: 'LLM message classification' },
      { value: 'Telegram → Kanban pipeline' },
    ],
  },
  {
    id: 'transcription-bot',
    titleKey: 'proj_transcription_title',
    descriptionKey: 'proj_transcription_desc',
    longDescriptionKey: 'proj_transcription_long',
    tech: ['Python', 'Local Whisper-based inference', 'asyncio', 'SQLite', 'ffmpeg'],
    category: 'ai',
    featured: false,
    period: '2026-07',
    areas: ['AI/Audio', 'Automation'],
    tier: 'source-private',
    privateSource: true,
    showcase: 'case-study',
    links: {},
    metrics: [
      { value: 'Fully local (no cloud API)' },
      { value: 'Speaker diarization' },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
