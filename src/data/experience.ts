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
    id: 'software-dev',
    titleKey: 'exp_dev_title',
    companyKey: 'exp_dev_company',
    periodKey: 'exp_dev_period',
    locationKey: 'exp_dev_tech',
    descriptionKey: 'exp_dev_desc',
    bullets: [],
    tags: ['TypeScript', 'Python', 'PostgreSQL', 'Linux', 'Docker', 'Git'],
    icon: 'code',
  },
  {
    id: 'founder-specialist',
    titleKey: 'exp_founder_title',
    companyKey: 'exp_founder_company',
    periodKey: 'exp_founder_period',
    locationKey: 'exp_founder_tech',
    descriptionKey: 'exp_founder_desc',
    bullets: [],
    tags: ['Python', 'Web3', 'DeFi', 'AI Agents', 'Telegram API', 'Astro', 'React'],
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
];
