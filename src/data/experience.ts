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
    id: 'police',
    titleKey: 'exp_police_title',
    companyKey: 'exp_police_company',
    periodKey: 'exp_police_period',
    locationKey: 'exp_police_location',
    descriptionKey: 'exp_police_desc',
    bullets: [],
    tags: [],
    highlightsKey: 'exp_police_highlights',
  },
  {
    id: 'web-dev',
    titleKey: 'exp_webdev_title',
    companyKey: 'exp_webdev_company',
    periodKey: 'exp_webdev_period',
    locationKey: 'exp_webdev_location',
    descriptionKey: 'exp_webdev_desc',
    bullets: ['exp_webdev_b1', 'exp_webdev_b2', 'exp_webdev_b3'],
    tags: ['Astro', 'React', 'Tailwind', 'Node.js', 'Python', 'Telegram Bots'],
  },
  {
    id: 'crypto-automation',
    titleKey: 'exp_crypto_title',
    companyKey: 'exp_crypto_company',
    periodKey: 'exp_crypto_period',
    locationKey: 'exp_crypto_location',
    descriptionKey: 'exp_crypto_desc',
    bullets: ['exp_crypto_b1', 'exp_crypto_b2', 'exp_crypto_b3'],
    tags: ['Python', 'Telegram API', 'DeFi', 'On-chain', 'AI Agents', 'Web3'],
  },
  {
    id: 'software-dev',
    titleKey: 'exp_dev_title',
    companyKey: 'exp_dev_company',
    periodKey: 'exp_dev_period',
    locationKey: 'exp_dev_location',
    descriptionKey: 'exp_dev_desc',
    bullets: ['exp_dev_b1', 'exp_dev_b2', 'exp_dev_b3'],
    tags: ['TypeScript', 'Python', 'PostgreSQL', 'Linux', 'Docker', 'Git'],
  },
  {
    id: 'ai-dev',
    titleKey: 'exp_ai_title',
    companyKey: 'exp_ai_company',
    periodKey: 'exp_ai_period',
    locationKey: 'exp_ai_location',
    descriptionKey: 'exp_ai_desc',
    bullets: ['exp_ai_b1', 'exp_ai_b2', 'exp_ai_b3'],
    tags: ['Claude', 'MCP', 'Multi-Agent', 'Gemini API', 'Automation'],
    icon: 'bot',
  },
];
