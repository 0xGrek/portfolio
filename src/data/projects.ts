export interface ProjectMetric {
  key: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  tech: string[];
  category: 'web' | 'crypto' | 'ai' | 'analytics' | 'trading';
  rating: number; // 1-10
  screenshots: string[]; // paths in /public/media/projects/{id}/
  video?: string; // path to .mp4
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
    id: 'ton-gift-flipper',
    slug: 'ton-gift-flipper',
    titleKey: 'proj_ton_title',
    descriptionKey: 'proj_ton_desc',
    longDescriptionKey: 'proj_ton_long',
    tech: ['Python', 'aiogram', 'Pyrogram', 'SQLAlchemy', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    category: 'trading',
    rating: 10,
    screenshots: [],
    featured: true,
    links: {},
    metrics: [
      { key: 'loc', value: '115,000 LOC' },
      { key: 'instances', value: '4 parallel bots' },
      { key: 'sessions', value: '400+ Pyrogram sessions' },
      { key: 'apis', value: '6 marketplace APIs' },
    ],
  },
  {
    id: 'mafia-game',
    slug: 'mafia-game-pwa',
    titleKey: 'proj_mafia_title',
    descriptionKey: 'proj_mafia_desc',
    longDescriptionKey: 'proj_mafia_long',
    tech: ['React 19', 'TypeScript', 'Zustand', 'Supabase', 'Tailwind CSS', 'PWA'],
    category: 'web',
    rating: 8,
    screenshots: [
      '/media/projects/mafia-game/screenshot-1.webp',
      '/media/projects/mafia-game/screenshot-2.webp',
    ],
    video: '/media/projects/mafia-game/demo.mp4',
    featured: true,
    links: {},
    metrics: [
      { key: 'roles', value: '17 roles' },
      { key: 'artifacts', value: '16 artifact cards' },
      { key: 'simulator', value: 'Monte Carlo 1K games' },
    ],
  },
  {
    id: 'portugal-realty',
    slug: 'portugal-realty-aggregator',
    titleKey: 'proj_realty_title',
    descriptionKey: 'proj_realty_desc',
    longDescriptionKey: 'proj_realty_long',
    tech: ['Python', 'httpx', 'Pydantic', 'Flask', 'PostgreSQL', 'Render.com'],
    category: 'web',
    rating: 7,
    screenshots: [
      '/media/projects/portugal-realty/screenshot-1.webp',
      '/media/projects/portugal-realty/screenshot-2.webp',
    ],
    featured: true,
    links: {},
    metrics: [
      { key: 'listings', value: '12,000+' },
      { key: 'portals', value: '4 portals scraped' },
      { key: 'feature', value: 'Fraud detection' },
    ],
  },
  {
    id: 'ai-orchestrator',
    slug: 'ai-knowledge-orchestrator',
    titleKey: 'proj_orchestrator_title',
    descriptionKey: 'proj_orchestrator_desc',
    longDescriptionKey: 'proj_orchestrator_long',
    tech: ['Python', 'Claude CLI', 'Tkinter', 'LLM Routing'],
    category: 'ai',
    rating: 7,
    screenshots: ['/media/projects/ai-orchestrator/screenshot-1.webp'],
    video: '/media/projects/ai-orchestrator/demo.mp4',
    featured: true,
    links: {},
    metrics: [
      { key: 'agents', value: '8 specialized agents' },
      { key: 'usage', value: 'Daily production use' },
    ],
  },
  {
    id: 'tg-bot-ecosystem',
    slug: 'telegram-bot-ecosystem',
    titleKey: 'proj_tgbots_title',
    descriptionKey: 'proj_tgbots_desc',
    longDescriptionKey: 'proj_tgbots_long',
    tech: ['Python', 'python-telegram-bot', 'Gemini', 'Groq Whisper', 'Flask'],
    category: 'ai',
    rating: 6,
    screenshots: ['/media/projects/tg-bot-ecosystem/screenshot-1.webp'],
    featured: false,
    links: {},
    metrics: [
      { key: 'bots', value: '11 bots' },
      { key: 'features', value: 'Life tracking + YouTube pipeline' },
    ],
  },
  {
    id: 'wallet-monitor',
    slug: 'onchain-wallet-monitor',
    titleKey: 'proj_wallet_title',
    descriptionKey: 'proj_wallet_desc',
    longDescriptionKey: 'proj_wallet_long',
    tech: ['Python', 'asyncio', 'httpx', 'Telegram Bot API'],
    category: 'analytics',
    rating: 6,
    screenshots: ['/media/projects/wallet-monitor/screenshot-1.webp'],
    featured: false,
    links: {},
    metrics: [
      { key: 'wallets', value: '35 wallets tracked' },
      { key: 'chains', value: 'ETH / Polygon / Solana' },
      { key: 'mode', value: 'Real-time alerts' },
    ],
  },
  {
    id: 'crypto-toolkit',
    slug: 'crypto-automation-toolkit',
    titleKey: 'proj_toolkit_title',
    descriptionKey: 'proj_toolkit_desc',
    longDescriptionKey: 'proj_toolkit_long',
    tech: ['Python', 'ccxt', 'web3.py', 'Playwright', 'ADB', 'TypeScript'],
    category: 'crypto',
    rating: 9,
    screenshots: [],
    featured: true,
    links: {},
    metrics: [
      { key: 'tools', value: '101 tools' },
      { key: 'chains', value: '10+ blockchains' },
      { key: 'exchanges', value: '9 CEX exchanges' },
      { key: 'accounts', value: '1000+ account infra' },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
