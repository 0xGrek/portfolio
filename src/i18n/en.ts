export const en = {
  // ── Meta ──────────────────────────────────────────────
  meta_title: 'Serhii | AI Engineer & Software Developer',
  meta_description: 'AI/software engineer building agent workflows, data pipelines, dashboards, internal tools, and product-facing automation.',
  meta_keywords:
    'AI engineer Lisbon, software developer Portugal, Python automation engineer, data pipeline developer, multi-agent systems',

  // ── Nav ───────────────────────────────────────────────
  nav_about: 'About',
  nav_experience: 'Experience',
  nav_projects: 'Projects',
  nav_skills: 'Skills',
  nav_services: 'Services',
  nav_education: 'Education',
  nav_blog: 'Blog',
  nav_contact: 'Contact',
  nav_cv: 'Download CV',

  // ── Hero ──────────────────────────────────────────────
  hero_greeting: "Hi, I'm",
  hero_name: 'Serhii',
  hero_handle: '@0xGrek',
  hero_title: 'AI Engineer & Software Developer',
  hero_subtitle_lead: 'I build applied AI/software systems: agent workflows, data ingestion, dashboards, internal tools, and product-facing automation for real operations.',
  hero_subtitle_body: "",
  hero_cta_projects: 'My Projects',
  hero_cta_contact: 'Contact Me',
  hero_available: 'Open to opportunities',
  hero_location: '📍 Lisbon, Portugal — UTC+1',

  // ── About ─────────────────────────────────────────────
  about_title: 'About Me',
  about_text_1: 'I build practical systems where messy inputs become reliable workflows: AI agents, data pipelines, internal dashboards, Telegram intake, and backend automation.',
  about_text_2: 'My background combines software delivery with investigation-style thinking: structured analysis, risk signals, monitoring, and decisions under uncertainty.',
  about_text_3: '',
  about_text_4: "",
  about_stats_tools: 'Production Systems',
  about_stats_chains: 'Data Pipelines',
  about_stats_web3: 'AI Agents',
  about_stats_police: 'Analytics Background',

  // ── Experience ────────────────────────────────────────
  experience_title: 'Experience',

  // Experience — AI Developer (newest)
  exp_ai_title: 'AI Developer',
  exp_ai_company: 'Sole Proprietor',
  exp_ai_period: '2024 – Present',
  exp_ai_location: 'Portugal',
  exp_ai_desc: 'Multi-agent AI systems, content and social media automation, Claude/Gemini integration.',
  exp_ai_b1: 'Orchestrating 11 AI agents for data processing',
  exp_ai_b2: 'Designed LLM routing across specialist memory domains',
  exp_ai_b3: 'Automated digest generation from 500+ daily Telegram messages',

  // Experience — Software Dev (current)
  exp_dev_title: 'Software Developer',
  exp_dev_company: 'IT Company, Lda | Lisbon, Portugal',
  exp_dev_period: 'June 2025 – Present',
  exp_dev_location: 'Lisbon, Portugal',
  exp_dev_desc: 'Development and maintenance of production systems, business process automation, server and database administration.',
  exp_dev_b1: 'Development and maintenance of production systems',
  exp_dev_b2: 'Reporting, metrics and business analytics automation',
  exp_dev_b3: 'Server, database and IT infrastructure administration',
  exp_dev_tech: 'TypeScript, Python, PostgreSQL, Linux, Docker, Git',

  // Experience — Crypto & Automation
  exp_crypto_title: 'On-Chain Data Automation',
  exp_crypto_company: 'Sole Proprietor',
  exp_crypto_period: '2023 – Present',
  exp_crypto_location: 'Portugal',
  exp_crypto_desc: 'Building monitoring, alerting, and analytics tools for fragmented public data and transaction flows.',
  exp_crypto_b1: 'Built wallet and transaction monitoring utilities',
  exp_crypto_b2: 'Created alerting flows, dashboards, and structured review outputs',
  exp_crypto_b3: 'Worked with public-chain data as a secondary analytics domain',

  // Experience — Web Developer
  exp_webdev_title: 'Web Developer',
  exp_webdev_company: 'Freelance',
  exp_webdev_period: '2023 – Present',
  exp_webdev_location: '',
  exp_webdev_desc: 'Telegram bots and mini-apps. Built a system of 11 bots for life-tracking and business automation.',
  exp_webdev_b1: '15+ Telegram bots and mini-apps in production',
  exp_webdev_b2: 'System of 11 bots for life-tracking, fitness, planning',
  exp_webdev_b3: 'Web apps, landing pages and portfolio sites',
  exp_webdev_tech: 'Astro, React, Tailwind, Node.js, Python, Telegram Bots',

  // Experience — Police (past)
  exp_police_title: 'Data Analysis & Systems Investigation Specialist',
  exp_police_company: 'National Police of Ukraine | Ukraine',
  exp_police_period: '2019 – 2022',
  exp_police_location: 'Ukraine',
  exp_police_desc: 'Development of methodologies for structuring unorganized data for strategic decision-making. Designing real-time risk monitoring and assessment systems.',
  exp_police_highlights: '',

  // ── Projects ──────────────────────────────────────────
  projects_title: 'Projects',
  projects_subtitle: "What I've built",
  project_tech: 'Tech Stack',
  project_view: 'View Details',
  project_close: 'Close',
  project_screenshots: 'Screenshots',
  project_video: 'Demo Video',

  proj_ai_orch_title: 'AI Knowledge Orchestrator - Multi-Agent Content Router',
  proj_ai_orch_desc:
    'Local multi-agent knowledge system for routing Telegram content into specialist memory domains and digest workflows.',
  proj_ai_orch_long:
    'A local AI operations system that classifies incoming content, routes it to specialist memory domains, and turns noisy daily inputs into structured digests. The core proof is system design: dispatcher routing, specialist agents, local knowledge organization, reviewable outputs, and operational dashboarding.',

  proj_mafia_title: 'Mafia Game — Multiplayer Host Controller',
  proj_mafia_desc:
    'Full-featured PWA for hosting live Mafia games. 17 roles, 3 factions, 16 artifact cards, real-time cloud sync. Includes a Monte Carlo simulator for game balance tuning.',
  proj_mafia_long:
    'A production PWA built for hosting live-session Mafia games with friends. The game engine is deterministic: 17 unique roles, 3 factions, and 16 artifact cards that modify game state in complex ways. Real-time state is synced via Supabase so multiple devices can participate simultaneously. The Monte Carlo simulator runs 1,000 simulated games to validate role balance — an engineering approach grounded in probability analysis. Deployed on Vercel with full offline support.',

  proj_realty_title: 'Portugal Realty — Real Estate Aggregator',
  proj_realty_desc:
    'Scrapes 4 Portuguese real estate portals, cross-deduplicates 12,000+ listings, detects fraudulent relistings, and provides a mortgage calculator with 2026 Portuguese tax rules.',
  proj_realty_long:
    'Built out of genuine need — finding housing in Lisbon is painful. The aggregator scrapes Idealista, Imovirtual, Remax, and Era simultaneously, deduplicates listings across portals using address fingerprinting, and flags suspicious patterns like the same property being relisted multiple times at different prices. The mortgage calculator applies current Portuguese fiscal rules (IMT, IS, bank rates) for accurate monthly payment estimates. 12,000+ active listings in the database. Runs on Render.com with PostgreSQL backend.',

  proj_tgbots_title: 'Universal Telegram Collector Platform',
  proj_tgbots_desc:
    'Reusable multi-bot intake infrastructure for Telegram: durable queues, YouTube ingestion, audio/video transcription, dedupe, metadata-first storage, and optional ClamAV/OCR hooks.',
  proj_tgbots_long:
    'A reusable collector platform that turns Telegram into structured intake infrastructure. Instead of duplicating bot code, each domain bot is now a thin configuration wrapper over a shared collector core. The system handles visible and hidden Telegram links, YouTube video normalization, durable SQLite queues, Groq Whisper transcription for voice/audio/video, dedupe by Telegram file_unique_id and normalized URL, metadata-first recovery, retryable failures, and optional security hooks such as ClamAV quarantine, OCR, large-file policy, /health, /queue, and /retry commands. Built as a product foundation for client-specific automation bots.',

  proj_wallet_title: 'On-Chain Wallet Monitor',
  proj_wallet_desc:
    'Async Python system tracking 35 wallets across ETH, Polygon, and Solana with real-time Telegram alerts for significant movements.',
  proj_wallet_long:
    'A production monitoring system I run daily for on-chain intelligence. Tracks 35 wallets across three chains using both active polling and passive webhook receivers. Significant movements — large transfers, new token positions, protocol interactions — trigger immediate Telegram alerts with transaction links and context. Built with asyncio for concurrent chain polling, httpx for API calls, and SQLite for historical state. The system has caught multiple "smart money" moves minutes after they happened.',

  proj_ton_title: 'TON Marketplace Automation Case Study',
  proj_ton_desc: 'Private architecture case study for event-driven marketplace monitoring, API integration, operator dashboards, simulation modes, and risk controls.',
  proj_ton_long: 'A private historical project used only as an architecture reference. The public wording focuses on async Python, marketplace data ingestion, API integration, operator dashboarding, balance guards, logging, and simulation modes. It is not presented as a current financial product.',

  proj_toolkit_title: 'Automation Toolkit Archive',
  proj_toolkit_desc:
    'Private archive of Python automation research covering API clients, browser automation, monitoring utilities, and reusable data workflows.',
  proj_toolkit_long:
    'Historical automation work from 2023-2024 used to practice robust engineering patterns: API wrappers, queueable jobs, browser automation, monitoring, data normalization, retry handling, and operational scripts. It stays below the main portfolio because the stronger current story is AI systems and product automation.',

  proj_lucent_title: 'LucentStays — Dubai Rentals',
  proj_lucent_desc: 'Booking platform for short-term luxury apartment rentals in Dubai',
  proj_lucent_long:
    'Built a complete booking platform for a Dubai-based rental business. Features property listings with dynamic data from Supabase, integrated Hostaway booking system, currency toggle (AED/USD), and WhatsApp contact integration. Covers Downtown, Business Bay, Dubai Marina, and other premium areas.',

  proj_private_title: '50+ Private Projects',
  proj_private_desc:
    'Custom software under NDA: AI workflow tools, data pipelines, dashboards, scrapers, internal automations, Telegram bots, real estate and business systems',

  proj_player_title: 'Football Player Profile',
  proj_player_desc: 'Digital recruitment card for young football players and scouts',
  proj_player_long:
    'Sports recruitment showcase for a young Ukrainian football player. Displays personal stats, physical metrics, match history, achievements, and academic performance. Dark theme design optimized for sharing with football clubs and scouts.',

  // ── Skills ────────────────────────────────────────────
  skills_title: 'Skills',
  skills_tech_core: 'Core Technical Skills',
  skills_tech_core_langs: 'Programming Languages',
  skills_tech_core_dev: 'Development & DevOps',
  skills_tech_core_ai: 'AI & Agent Systems',
  skills_blockchain: 'Data & Backend Systems',
  skills_blockchain_platforms: 'Data Workflows',
  skills_blockchain_defi: 'Storage & APIs',
  skills_blockchain_analysis: 'Product Analytics',
  skills_security: 'Analysis & Monitoring',
  skills_security_core: 'Core Skills',
  skills_security_tools: 'Analysis Tools',
  skills_security_compliance: 'Compliance',
  skills_automation: 'Automation & Infrastructure',
  skills_automation_tools: 'Tools & Libraries',
  skills_automation_infra: 'Infrastructure',
  skills_languages: 'Languages',

  // ── Education ─────────────────────────────────────────
  education_title: 'Education & Certifications',

  edu_law_title: "Bachelor's — Data Analysis & Systems Investigation",
  edu_law_school: 'Dnipropetrovsk State University of Internal Affairs (DDUVS)',
  edu_law_period: '2016 – 2020',
  edu_law_location: 'Dnipro, Ukraine',
  edu_law_desc: 'Full-time degree program. Specialized in data analysis, systems investigation, and structured intelligence work.',

  edu_econ_title: "Bachelor's — Economic Analytics",
  edu_econ_school: 'DSUIA',
  edu_econ_period: '2020',
  edu_econ_location: 'Dnipro, Ukraine',
  edu_econ_desc: 'Specialization: Economic Security and Data Analysis.',

  edu_lyceum_title: 'Military Lyceum',
  edu_lyceum_school: 'Kryvyi Rih Lyceum with Enhanced Military & Physical Training',
  edu_lyceum_period: '2015 – 2017',
  edu_lyceum_location: 'Kryvyi Rih, Ukraine',
  edu_lyceum_desc: '',

  edu_cert_title: 'Tactical Training Certificate',
  edu_cert_school: 'Ministry of Interior of Ukraine',
  edu_cert_period: '2021',
  edu_cert_location: 'Kyiv, Ukraine',
  edu_cert_desc: 'Programme supported by the US Embassy in Ukraine.',

  edu_pt_a2_title: 'Portuguese Language Certificate — A2',
  edu_pt_a2_institution: 'IEFP / Portuguese Language School',
  edu_pt_a2_period: '2025',
  edu_pt_a2_location: 'Portugal',
  edu_pt_a2_desc: 'Official A2 level certificate in Portuguese language (CIPLE equivalent). Demonstrates ability to communicate in everyday situations in Portugal.',

  edu_onchain_title: 'On-Chain Analysis School',
  edu_onchain_institution: 'On-Chain School',
  edu_onchain_period: '2026 — Present',
  edu_onchain_location: 'Online',
  edu_onchain_desc: 'Ongoing training in blockchain forensics, wallet clustering, transaction flow analysis, and on-chain investigation techniques.',

  // ── Blog ──────────────────────────────────────────────
  blog_title: 'Blog',
  blog_subtitle: 'Writing on AI systems, data automation, backend workflows, and product engineering.',
  blog_read_more: 'Read More',
  blog_all_posts: 'All Posts',
  blog_empty: 'Articles coming soon.',

  // ── Contact ───────────────────────────────────────────
  contact_title: 'Get in Touch',
  contact_subtitle:
    "I'll help transform chaos in your data into a structured profitable system. Let's talk.",
  contact_form_name: 'Your Name',
  contact_form_email: 'Your Email',
  contact_form_message: 'Message',
  contact_form_submit: 'Send Message',
  contact_form_success: "Message sent! I'll reply within 24 hours.",
  contact_form_error: 'Something went wrong. Please email me directly.',
  contact_available: 'Open for collaboration in AI automation, data systems, and software engineering',
  contact_response_time: 'Response time: < 24 hours',

  // ── Services ──────────────────────────────────────────
  services_title: 'How I Can Help',
  services_subtitle: 'I build automated systems that solve specific business problems, letting you focus on what matters.',
  services_disclaimer: "",
  services_cat_regular: 'For Business & Services',
  services_cat_it: 'For IT, Finance & Online Projects',

  services_show_more: 'Show details ▼',
  services_show_less: 'Hide details ▲',

  services_food_title: 'Bakeries, Restaurants & Cafes',
  services_food_desc: 'Order and communication automation',
  services_food_examples: 'What I can build:|Telegram bot for orders that accepts orders 24/7|Automatic table booking without administrator involvement|CRM system that reminds clients about holidays and collects reviews',

  services_medical_title: 'Medical Clinics & Dentistry',
  services_medical_desc: 'Appointment and patient communication automation',
  services_medical_examples: 'What I can build:|Smart bot for booking appointments with the right doctor|Automatic visit reminders for patients to reduce no-shows|AI assistant for answering common questions about services and preparation',

  services_auto_title: 'Auto Repair & Car Wash',
  services_auto_desc: 'Online booking and automatic notifications',
  services_auto_examples: 'What I can build:|Bot for online booking for repair or wash with convenient time selection|Automatic order status notifications ("Your car is ready")|Reminder system for clients about scheduled maintenance',

  services_legal_title: 'Law Firms & Consulting',
  services_legal_desc: 'AI automation of routine legal processes',
  services_legal_examples: 'What I can build:|AI bot for initial consultation that qualifies inquiries|Automatic document generation (contracts, deeds) from your templates|Internal case deadline tracker with notifications',

  services_hotels_example: 'Built: LucentStays — Dubai luxury rentals',
  services_hotels_title: 'Hotels & Vacation Rentals (Airbnb)',
  services_hotels_desc: 'Guest communication automation',
  services_hotels_examples: 'What I can build:|Multilingual AI concierge for answering guest questions 24/7|Review monitoring system that instantly notifies about new comments|Staff communication automation (cleaning notifications)',

  services_construction_title: 'Construction & Real Estate',
  services_construction_desc: 'Data aggregation and communication automation',
  services_construction_example: 'Built: Portugal Realty — 12K listings from 4 portals daily',
  services_construction_examples: 'What I can build:|Listing aggregator collecting offers from 4-5 portals in one place|Fraud and duplicate detection system for listings|Automatic progress update mailings for investors',

  services_research_title: 'Research & Analysis',
  services_research_desc: 'Data collection and analysis from any source',
  services_research_examples: 'What I can build:|Security vulnerability research|Competitor analysis and automatic data collection from any public sources|Dashboards that explain in plain language WHAT is happening and WHY',

  services_crypto_title: 'Monitoring & Risk Data',
  services_crypto_desc: 'Alerting, transaction analytics, and infrastructure observability',
  services_crypto_examples: 'What I can build:|Wallet or public-data monitoring with instant notifications|Dashboards for unusual activity, relists, or operational signals|Review tools that turn noisy events into structured decisions',

  services_ai_title: 'AI & Content Automation',
  services_ai_desc: 'Multi-agent systems and content generation',
  services_ai_examples: 'What I can build:|Multi-agent AI systems for data analysis and content generation|System that turns one video (webinar, podcast) into a week of content: short clips, posts, articles with auto-posting|Integration of AI models (Claude, Gemini) into your business processes',

  services_cta_title: 'Audit & Intelligent Automation.',
  services_cta_desc: 'I deploy AI agents to automate routine tasks. 1 hour of automation today = 1 free month per year.',
  services_cta_button: 'Contact me',

  // ── Projects UI ───────────────────────────────────────
  proj_visit_site: 'Visit Site',
  proj_collapse: 'Collapse ▲',
  proj_show_more: 'Show more',
  proj_show_less: 'Collapse',

  // ── Footer ────────────────────────────────────────────
  footer_built_with: 'Built with Astro + Tailwind',
  footer_rights: '© 2026 Serhii. All rights reserved.',
  footer_privacy: 'Privacy Policy',
  footer_compliance: 'Compliance & Confidentiality: All solutions are developed in accordance with data security standards and NDA terms.',
} as const;
