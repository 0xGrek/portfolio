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
    tags: ['Python', 'Claude API', 'OpenAI API', 'Web3 / on-chain', 'Telegram Bot API', 'PostgreSQL', 'SQLite', 'Render', 'Vercel', 'CI/CD'],
  },
  {
    id: 'freelance',
    titleKey: 'exp_freelance_title',
    companyKey: 'exp_freelance_company',
    periodKey: 'exp_freelance_period',
    locationKey: 'exp_freelance_location',
    descriptionKey: 'exp_freelance_desc',
    bullets: ['exp_freelance_b1', 'exp_freelance_b2', 'exp_freelance_b3', 'exp_freelance_b4'],
    tags: ['Python', 'Web3 / on-chain', 'Anthropic Claude API', 'LLM routing', 'Data scraping', 'Telegram Bot API'],
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
    highlightsKey: 'exp_police_highlights',
  },
];
