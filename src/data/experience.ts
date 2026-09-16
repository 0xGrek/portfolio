export interface Experience {
  id: string;
  titleKey: string;
  companyKey: string;
  periodKey: string;
  locationKey: string;
  descriptionKey: string;
  bullets: string[]; // i18n keys for bullet points
  tags: string[];
  highlightsKey?: string; // i18n key for career progression line (police)
}

export const experience: Experience[] = [
  {
    id: 'software-dev',
    titleKey: 'exp_dev_title',
    companyKey: 'exp_dev_company',
    periodKey: 'exp_dev_period',
    locationKey: 'exp_dev_location',
    descriptionKey: 'exp_dev_desc',
    bullets: ['exp_dev_b1', 'exp_dev_b2', 'exp_dev_b3', 'exp_dev_b4', 'exp_dev_b5'],
    tags: ['Python', 'Claude/OpenAI API', 'PostgreSQL', 'Telegram Bot API', 'Render/Vercel', 'CI/CD'],
  },
  {
    id: 'ai-dev',
    titleKey: 'exp_ai_title',
    companyKey: 'exp_ai_company',
    periodKey: 'exp_ai_period',
    locationKey: 'exp_ai_location',
    descriptionKey: 'exp_ai_desc',
    bullets: ['exp_ai_b1', 'exp_ai_b2', 'exp_ai_b3'],
    tags: ['Claude/OpenAI API', 'MCP', 'Multi-Agent', 'LLM routing', 'Python'],
  },
  {
    id: 'crypto-automation',
    titleKey: 'exp_crypto_title',
    companyKey: 'exp_crypto_company',
    periodKey: 'exp_crypto_period',
    locationKey: 'exp_crypto_location',
    descriptionKey: 'exp_crypto_desc',
    bullets: ['exp_crypto_b1', 'exp_crypto_b2', 'exp_crypto_b3'],
    tags: ['Python', 'asyncio', 'Web3 / on-chain', 'Monitoring', 'Telegram Alerts'],
  },
  {
    id: 'web-dev',
    titleKey: 'exp_webdev_title',
    companyKey: 'exp_webdev_company',
    periodKey: 'exp_webdev_period',
    locationKey: 'exp_webdev_location',
    descriptionKey: 'exp_webdev_desc',
    bullets: ['exp_webdev_b1', 'exp_webdev_b2', 'exp_webdev_b3'],
    tags: ['Astro', 'React', 'Tailwind', 'Supabase', 'Node.js', 'Telegram Bots'],
  },
  {
    id: 'police',
    titleKey: 'exp_police_title',
    companyKey: 'exp_police_company',
    periodKey: 'exp_police_period',
    locationKey: 'exp_police_location',
    descriptionKey: 'exp_police_desc',
    bullets: ['exp_police_b1', 'exp_police_b2', 'exp_police_b3'],
    tags: [],
  },
];
