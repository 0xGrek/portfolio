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
  category: 'web' | 'crypto' | 'ai' | 'analytics' | 'trading';
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
    titleKey: 'proj_ton_title',
    descriptionKey: 'proj_ton_desc',
    longDescriptionKey: 'proj_ton_long',
    tech: ['Python', 'aiogram', 'Pyrogram', 'SQLAlchemy', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    category: 'trading',
    featured: true,
    links: {},
    metrics: [
      { value: '115,000 LOC' },
      { value: '4 parallel bots' },
      { value: '400+ Pyrogram sessions' },
      { value: '6 marketplace APIs' },
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
    links: { live: 'https://shadow-council.vercel.app/' },
    metrics: [
      { value: '17 roles' },
      { value: '16 artifact cards' },
      { value: 'Monte Carlo 1K games' },
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
    links: {},
    metrics: [
      { value: '12,000+' },
      { value: '4 portals scraped' },
      { value: 'Fraud detection' },
    ],
  },
  {
    id: 'tg-bot-ecosystem',
    titleKey: 'proj_tgbots_title',
    descriptionKey: 'proj_tgbots_desc',
    longDescriptionKey: 'proj_tgbots_long',
    tech: ['Python', 'python-telegram-bot', 'Gemini', 'Groq Whisper', 'Flask'],
    category: 'ai',
    featured: false,
    links: {},
    metrics: [
      { value: '11 bots' },
      { value: 'Life tracking + YouTube pipeline' },
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
    id: 'crypto-toolkit',
    titleKey: 'proj_toolkit_title',
    descriptionKey: 'proj_toolkit_desc',
    longDescriptionKey: 'proj_toolkit_long',
    tech: ['Python', 'ccxt', 'web3.py', 'Playwright', 'ADB', 'TypeScript'],
    category: 'crypto',
    featured: true,
    links: {},
    metrics: [
      { value: '101 tools' },
      { value: '10+ blockchains' },
      { value: '9 CEX exchanges' },
      { value: '1000+ account infra' },
    ],
  },
  {
    id: 'lucent-stays',
    titleKey: 'proj_lucent_title',
    descriptionKey: 'proj_lucent_desc',
    longDescriptionKey: 'proj_lucent_long',
    tech: ['HTML/CSS', 'JavaScript', 'Supabase', 'Hostaway API'],
    category: 'web',
    featured: false,
    links: { live: 'https://lucentstays.com' },
    metrics: [
      { value: '5+' },
      { value: 'Client Work' },
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
    links: { live: 'https://rainbow-jelly-29e7d1.netlify.app/player' },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
