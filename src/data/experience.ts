export interface Experience {
  id: string;
  titleKey: string;
  companyKey: string;
  periodKey: string;
  locationKey: string;
  descriptionKey: string;
  bullets: string[]; // i18n keys for bullet points
  tags: string[];
  icon?: string;
}

export const experience: Experience[] = [
  {
    id: 'official',
    titleKey: 'exp_official_title',
    companyKey: 'exp_official_company',
    periodKey: 'exp_official_period',
    locationKey: 'exp_official_location',
    descriptionKey: 'exp_official_desc',
    bullets: [
      'exp_official_b1',
      'exp_official_b2',
      'exp_official_b3',
    ],
    tags: ['TypeScript', 'Python', 'PostgreSQL', 'Linux', 'Docker', 'Git', 'REST API'],
  },
  {
    id: 'crypto_eng',
    titleKey: 'exp_crypto_eng_title',
    companyKey: 'exp_crypto_eng_company',
    periodKey: 'exp_crypto_eng_period',
    locationKey: 'exp_crypto_eng_location',
    descriptionKey: 'exp_crypto_eng_desc',
    bullets: [
      'exp_crypto_eng_b1',
      'exp_crypto_eng_b2',
      'exp_crypto_eng_b3',
    ],
    tags: ['Python', 'web3.py', 'ccxt', 'EVM', 'Solana', 'TON', 'Telegram', 'Multi-agent AI'],
  },
  {
    id: 'webdev',
    titleKey: 'exp_webdev_title',
    companyKey: 'exp_webdev_company',
    periodKey: 'exp_webdev_period',
    locationKey: 'exp_webdev_location',
    descriptionKey: 'exp_webdev_desc',
    bullets: [
      'exp_webdev_b1',
      'exp_webdev_b2',
      'exp_webdev_b3',
    ],
    tags: ['React', 'TypeScript', 'Python', 'Astro', 'Supabase', 'Telegram Bot API', 'Vercel'],
  },
  {
    id: 'police',
    titleKey: 'exp_police_title',
    companyKey: 'exp_police_company',
    periodKey: 'exp_police_period',
    locationKey: 'exp_police_location',
    descriptionKey: 'exp_police_desc',
    bullets: [],
    tags: [],
    icon: 'shield',
  },
  {
    id: 'freelance',
    titleKey: 'exp_freelance_title',
    companyKey: 'exp_freelance_company',
    periodKey: 'exp_freelance_period',
    locationKey: 'exp_freelance_location',
    descriptionKey: 'exp_freelance_desc',
    bullets: [
      'exp_freelance_b1',
      'exp_freelance_b2',
      'exp_freelance_b3',
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Python', 'Vercel', 'PWA'],
  },
  {
    id: 'crypto',
    titleKey: 'exp_crypto_title',
    companyKey: 'exp_crypto_company',
    periodKey: 'exp_crypto_period',
    locationKey: 'exp_crypto_location',
    descriptionKey: 'exp_crypto_desc',
    bullets: [
      'exp_crypto_b1',
      'exp_crypto_b2',
      'exp_crypto_b3',
      'exp_crypto_b4',
      'exp_crypto_b5',
      'exp_crypto_b6',
    ],
    tags: ['Python', 'ccxt', 'web3.py', 'EVM', 'Solana', 'Bitcoin', 'TON', 'ZennoPoster', 'Playwright', 'ADB'],
  },
  {
    id: 'ai',
    titleKey: 'exp_ai_title',
    companyKey: 'exp_ai_company',
    periodKey: 'exp_ai_period',
    locationKey: 'exp_ai_location',
    descriptionKey: 'exp_ai_desc',
    bullets: [
      'exp_ai_b1',
      'exp_ai_b2',
      'exp_ai_b3',
      'exp_ai_b4',
    ],
    tags: ['Python', 'Claude', 'Gemini', 'Telegram', 'Flask', 'Telethon', 'PostgreSQL', 'Multi-agent AI'],
  },
  {
    id: 'onchain',
    titleKey: 'exp_onchain_title',
    companyKey: 'exp_onchain_company',
    periodKey: 'exp_onchain_period',
    locationKey: 'exp_onchain_location',
    descriptionKey: 'exp_onchain_desc',
    bullets: [
      'exp_onchain_b1',
      'exp_onchain_b2',
      'exp_onchain_b3',
      'exp_onchain_b4',
    ],
    tags: ['Python', 'asyncio', 'Arkham', 'Nansen', 'DeBank', 'BubbleMaps', 'Dexscreener', 'On-chain Analytics'],
  },
];
