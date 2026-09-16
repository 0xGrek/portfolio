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
    id: 'ai-automation',
    titleKey: 'skills_ai_automation',
    subGroups: [
      {
        skills: [
          'Anthropic Claude API',
          'OpenAI API',
          'Multi-provider LLM routing',
          'Multi-agent orchestration',
          'MCP (Model Context Protocol)',
          'Prompt engineering',
          'Telegram Bot API (python-telegram-bot, Telethon)',
          'Playwright',
          'Puppeteer',
          'Web scraping',
        ],
      },
    ],
  },
  {
    id: 'backend-data',
    titleKey: 'skills_backend_data',
    subGroups: [
      {
        skills: [
          'FastAPI',
          'Flask',
          'SQLAlchemy',
          'PostgreSQL',
          'SQLite (FTS5)',
          'Supabase',
          'asyncio',
          'httpx',
          'REST APIs',
        ],
      },
    ],
  },
  {
    id: 'frontend-desktop',
    titleKey: 'skills_frontend_desktop',
    subGroups: [
      {
        skills: [
          'React 19',
          'TypeScript',
          'Next.js (App Router)',
          'NextAuth OAuth',
          'Vite',
          'Tailwind CSS',
          'Zustand',
          'PWA',
          'Tauri v2 desktop apps (Python sidecar)',
        ],
      },
    ],
  },
  {
    id: 'web3',
    titleKey: 'skills_web3',
    subGroups: [
      {
        skills: [
          'On-chain data parsing',
          'Wallet clustering',
          'Transaction graph analysis',
          'DeFi risk analysis',
          'EVM tooling (web3.py)',
          'Solana (solders)',
        ],
      },
    ],
  },
  {
    id: 'testing-devops',
    titleKey: 'skills_testing_devops',
    subGroups: [
      {
        skills: [
          'pytest',
          'Playwright e2e',
          'GitHub Actions CI',
          'pre-push git hooks',
          'Secret scanning (TruffleHog)',
          'Render',
          'Vercel',
          'Docker (basics)',
          'Linux',
        ],
      },
    ],
  },
  {
    id: 'core-languages',
    titleKey: 'skills_core_languages',
    subGroups: [
      {
        skills: ['Python (primary, advanced)', 'TypeScript', 'JavaScript', 'Bash', 'PowerShell'],
      },
    ],
  },
  {
    id: 'languages',
    titleKey: 'skills_languages',
    subGroups: [
      {
        skills: ['Ukrainian (Native)', 'English (B1–B2)', 'Portuguese (A2 · IEFP)', 'Russian (Advanced)'],
      },
    ],
  },
];
