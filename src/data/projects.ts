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
    links: { live: 'https://app-gold-seven-83.vercel.app/' },
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
    links: { live: 'https://portugal-realty-server.onrender.com/', github: 'https://github.com/0xGrek/portugal-realty-dashboard' },
    metrics: [
      { key: 'listings', value: '12,000+' },
      { key: 'portals', value: '4 portals scraped' },
      { key: 'feature', value: 'Fraud detection' },
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
  {
    id: 'lucent-stays',
    slug: 'lucent-stays',
    titleKey: 'proj_lucent_title',
    descriptionKey: 'proj_lucent_desc',
    longDescriptionKey: 'proj_lucent_long',
    tech: ['HTML/CSS', 'JavaScript', 'Supabase', 'Hostaway API'],
    category: 'web',
    rating: 7,
    screenshots: [],
    featured: false,
    links: { live: 'https://lucentstays.com' },
    metrics: [
      { key: 'listings', value: '5+' },
      { key: 'type', value: 'Client Work' },
    ],
  },
  {
    id: 'player-profile',
    slug: 'player-profile',
    titleKey: 'proj_player_title',
    descriptionKey: 'proj_player_desc',
    longDescriptionKey: 'proj_player_long',
    tech: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
    category: 'web',
    rating: 6,
    screenshots: [],
    featured: false,
    links: { live: 'https://rainbow-jelly-29e7d1.netlify.app/player' },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
