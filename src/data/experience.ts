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
    tags: ['Astro', 'React', 'Tailwind', 'Node.js', 'Python', 'Telegram Bots'],
  },
  {
    id: 'crypto_auto',
    titleKey: 'exp_crypto_auto_title',
    companyKey: 'exp_crypto_auto_company',
    periodKey: 'exp_crypto_auto_period',
    locationKey: 'exp_crypto_auto_location',
    descriptionKey: 'exp_crypto_auto_desc',
    bullets: [
      'exp_crypto_auto_b1',
      'exp_crypto_auto_b2',
      'exp_crypto_auto_b3',
    ],
    tags: ['Python', 'Telegram API', 'DeFi', 'On-chain', 'AI Agents', 'Web3'],
  },
  {
    id: 'ai_dev',
    titleKey: 'exp_ai_dev_title',
    companyKey: 'exp_ai_dev_company',
    periodKey: 'exp_ai_dev_period',
    locationKey: 'exp_ai_dev_location',
    descriptionKey: 'exp_ai_dev_desc',
    bullets: [
      'exp_ai_dev_b1',
      'exp_ai_dev_b2',
      'exp_ai_dev_b3',
    ],
    tags: ['Claude', 'MCP', 'Multi-Agent', 'Gemini API', 'Automation'],
  },
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
    tags: ['TypeScript', 'Python', 'PostgreSQL', 'Linux', 'Docker', 'Git'],
  },
];
