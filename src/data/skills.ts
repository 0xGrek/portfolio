export interface SkillSubGroup {
  nameKey: string;
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
          'Multi-agent Orchestration (CrewAI, LangGraph)',
          'LLM Routing & Classification',
          'RAG Pipelines',
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
          'EVM (Ethereum, Polygon, Arbitrum, Base, Optimism)',
          'Solana',
          'TON',
          'Bitcoin (Ordinals, BRC-20)',
          'SUI',
          'Aptos',
          'StarkNet',
        ],
      },
      {
        nameKey: 'skills_blockchain_defi',
        skills: [
          'Deep knowledge of 50+ DeFi Protocols',
          'DEX Aggregation (1inch, Jupiter)',
          'Bridge Protocols (LayerZero, Wormhole)',
        ],
      },
      {
        nameKey: 'skills_blockchain_analysis',
        skills: [
          'MEV Analysis (EigenPhi, Flashbots)',
          'Smart Contract Reading (Solidity, ABI)',
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
          'On-chain Forensics',
          'Wallet Clustering & Attribution',
          'Smart Contract Vulnerability Analysis',
          'Exploit Analysis',
          'OSINT (on-chain → off-chain)',
          'Sybil Attack Detection',
          'Financial Crime Investigation (SAR Writing)',
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
          'Chainalysis',
          'Elliptic',
          'TRM Labs',
          'MetaSleuth',
          'Phalcon Explorer',
          'Dexscreener',
        ],
      },
      {
        nameKey: 'skills_security_compliance',
        skills: ['AML / KYC Awareness', 'FATF Travel Rule', 'Sanctions Screening'],
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
          'web3.py',
          'ethers.js',
          'ccxt (9 exchanges)',
          'Pyrogram & Telethon (400+ sessions)',
          'Playwright',
          'Puppeteer',
          'ZennoPoster',
          'BAS',
        ],
      },
      {
        nameKey: 'skills_automation_infra',
        skills: [
          'Multi-account Infrastructure (1000+)',
          'Anti-fingerprint Management (Dolphin Anty)',
          'Residential Proxy Rotation',
          'RPC Management (Alchemy, QuickNode)',
          'Transaction Simulation (Tenderly)',
        ],
      },
    ],
  },
  {
    id: 'languages',
    titleKey: 'skills_languages',
    subGroups: [
      {
        nameKey: '',
        skills: ['Ukrainian (Native)', 'Russian (Native)', 'English (A2)', 'Portuguese (A2)'],
      },
    ],
  },
];
