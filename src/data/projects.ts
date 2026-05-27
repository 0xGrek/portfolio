export interface ProjectMetric {
  value: string;
  label?: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  tech: string[];
  category: 'web' | 'ai' | 'analytics' | 'case-study';
  featured: boolean;
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
    tech: ['Python', 'LLM routing', 'MCP', 'SQLite', 'Telegram API'],
    category: 'ai',
    featured: true,
    links: {},
    metrics: [
      { value: 'Multi-agent routing' },
      { value: 'Specialist memory' },
      { value: 'Digest flows' },
    ],
  },
  {
    id: 'portugal-realty',
    titleKey: 'proj_realty_title',
    descriptionKey: 'proj_realty_desc',
    longDescriptionKey: 'proj_realty_long',
    tech: ['Python', 'httpx', 'Pydantic', 'Flask', 'PostgreSQL', 'Render.com'],
    category: 'web',
    featured: true,
    links: {
      live: 'https://portugal-realty-server.onrender.com',
      github: 'https://github.com/0xGrek/portugal-realty-server',
    },
    metrics: [
      { value: '12,000+' },
      { value: '4 portals scraped' },
      { value: 'Fraud detection' },
    ],
  },
  {
    id: 'mafia-game',
    titleKey: 'proj_mafia_title',
    descriptionKey: 'proj_mafia_desc',
    longDescriptionKey: 'proj_mafia_long',
    tech: ['React 19', 'TypeScript', 'Zustand', 'Supabase', 'Tailwind CSS', 'PWA'],
    category: 'web',
    featured: true,
    links: {
      live: 'https://shadow-council.vercel.app/',
      github: 'https://github.com/0xGrek/mafia-game-pwa',
    },
    metrics: [
      { value: '17 roles' },
      { value: '16 artifact cards' },
      { value: 'Monte Carlo 1K games' },
    ],
  },
  {
    id: 'tg-bot-ecosystem',
    titleKey: 'proj_tgbots_title',
    descriptionKey: 'proj_tgbots_desc',
    longDescriptionKey: 'proj_tgbots_long',
    tech: ['Python', 'python-telegram-bot', 'SQLite', 'Groq Whisper', 'yt-dlp', 'ClamAV', 'OCR'],
    category: 'ai',
    featured: true,
    links: {},
    metrics: [
      { value: '8+ collector bots' },
      { value: 'Durable queues' },
      { value: 'Dedupe + retry' },
      { value: 'Security hooks' },
    ],
  },
  {
    id: 'lucent-stays',
    titleKey: 'proj_lucent_title',
    descriptionKey: 'proj_lucent_desc',
    longDescriptionKey: 'proj_lucent_long',
    tech: ['HTML/CSS', 'JavaScript', 'Supabase', 'Hostaway API'],
    category: 'web',
    featured: true,
    links: { live: 'https://lucentstays.com' },
    metrics: [
      { value: 'Client site' },
      { value: 'Booking flow' },
    ],
  },
  {
    id: 'wallet-monitor',
    titleKey: 'proj_wallet_title',
    descriptionKey: 'proj_wallet_desc',
    longDescriptionKey: 'proj_wallet_long',
    tech: ['Python', 'asyncio', 'httpx', 'Telegram Bot API'],
    category: 'analytics',
    featured: false,
    links: {},
    metrics: [
      { value: '35 wallets tracked' },
      { value: 'ETH / Polygon / Solana' },
      { value: 'Real-time alerts' },
    ],
  },
  {
    id: 'ton-marketplace-case-study',
    titleKey: 'proj_ton_title',
    descriptionKey: 'proj_ton_desc',
    longDescriptionKey: 'proj_ton_long',
    tech: ['Python', 'asyncio', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'case-study',
    featured: false,
    links: {},
    metrics: [
      { value: 'Private case study' },
      { value: 'Async architecture' },
      { value: 'Risk controls' },
    ],
  },
  {
    id: 'automation-toolkit-archive',
    titleKey: 'proj_toolkit_title',
    descriptionKey: 'proj_toolkit_desc',
    longDescriptionKey: 'proj_toolkit_long',
    tech: ['Python', 'API clients', 'Playwright', 'SQLite', 'TypeScript'],
    category: 'case-study',
    featured: false,
    links: {},
    metrics: [
      { value: 'Private archive' },
      { value: 'API automation' },
      { value: 'Monitoring utilities' },
    ],
  },
  {
    id: 'player-profile',
    titleKey: 'proj_player_title',
    descriptionKey: 'proj_player_desc',
    longDescriptionKey: 'proj_player_long',
    tech: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
    category: 'web',
    featured: false,
    links: {},
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
