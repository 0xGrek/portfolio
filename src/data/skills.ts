export interface SkillSubGroup {
  nameKey?: string;
  skills: string[];
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  subGroups: SkillSubGroup[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'tech-core',
    titleKey: 'skills_tech_core',
    subGroups: [
      {
        nameKey: 'skills_tech_core_langs',
        skills: ['Python', 'TypeScript / JavaScript'],
      },
      {
        nameKey: 'skills_tech_core_dev',
        skills: [
          'FastAPI',
          'Astro',
          'PostgreSQL & Supabase',
          'Redis',
          'Docker',
          'Git & GitHub Actions',
          'Vercel',
          'REST APIs',
          'Pydantic',
        ],
      },
      {
        nameKey: 'skills_tech_core_ai',
        skills: [
          'Multi-agent System Orchestration (CrewAI, LangGraph)',
          'Routing & Classification of LLM Requests',
          'RAG Pipeline Development (Knowledge Bases for AI)',
          'Prompt Engineering',
          'Claude Code',
          'OpenClaw',
          'Telegram Bot + LLM Integration',
        ],
      },
    ],
  },
  {
    id: 'blockchain',
    titleKey: 'skills_blockchain',
    subGroups: [
      {
        nameKey: 'skills_blockchain_platforms',
        skills: [
          'Scraping and API ingestion',
          'Data normalization',
          'Duplicate detection',
          'Queue processing',
          'Dashboard reporting',
        ],
      },
      {
        nameKey: 'skills_blockchain_defi',
        skills: [
          'PostgreSQL',
          'SQLite',
          'REST APIs',
          'Webhooks',
          'Background jobs',
        ],
      },
      {
        nameKey: 'skills_blockchain_analysis',
        skills: [
          'Real estate market intelligence',
          'Fraud and relist signals',
          'Operational dashboards',
          'Structured exports',
        ],
      },
    ],
  },
  {
    id: 'security',
    titleKey: 'skills_security',
    subGroups: [
      {
        nameKey: 'skills_security_core',
        skills: [
          'Monitoring systems',
          'Transaction alerts',
          'Anomaly detection',
          'OSINT research',
          'Structured reporting',
          'Risk signal triage',
        ],
      },
      {
        nameKey: 'skills_security_tools',
        skills: [
          'Arkham',
          'Nansen',
          'Dune Analytics',
          'DeBank',
          'Bubblemaps',
          'MetaSleuth',
          'Phalcon Explorer',
          'Dexscreener',
          'Telegram Alerts',
        ],
      },
      {
        nameKey: 'skills_security_compliance',
        skills: ['Data review workflows', 'Alert documentation', 'Operational handoff'],
      },
    ],
  },
  {
    id: 'automation',
    titleKey: 'skills_automation',
    subGroups: [
      {
        nameKey: 'skills_automation_tools',
        skills: [
          'Telegram Bot API',
          'Playwright',
          'yt-dlp',
          'Groq Whisper',
          'OCR and file intake',
        ],
      },
      {
        nameKey: 'skills_automation_infra',
        skills: [
          'Docker',
          'Linux',
          'Render',
          'Vercel',
          'Supabase',
          'GitHub Actions',
          'Logging and retry recovery',
        ],
      },
    ],
  },
  {
    id: 'languages',
    titleKey: 'skills_languages',
    subGroups: [
      {
        skills: ['Ukrainian (Native)', 'English (Technical Working Proficiency)', 'Portuguese (A2)'],
      },
    ],
  },
];
