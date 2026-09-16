export const en = {
  // ── Meta ──────────────────────────────────────────────
  meta_title: 'Serhii Ivanenko — AI Agent Engineer · Web3 Data Consultant',
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
  hero_name: 'Serhii Ivanenko',
  hero_handle: '@0xGrek',
  hero_title: 'AI Agent Engineer · Web3 Data Consultant',
  hero_subtitle_lead: 'I build applied AI/software systems: agent workflows, data ingestion, dashboards, internal tools, and product-facing automation for real operations.',
  hero_subtitle_body: "",
  hero_cta_projects: 'My Projects',
  hero_cta_contact: 'Contact Me',
  hero_available: 'Open to opportunities',
  hero_location: 'Lisbon, Portugal',
  hero_location_fallback: 'Lisbon time',
  hero_scroll_hint: 'scroll',

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

  // Experience — Software Engineer (current)
  exp_dev_title: 'Software Developer',
  exp_dev_company: 'Lisbon-based software company',
  exp_dev_period: 'June 2025 – Present',
  exp_dev_location: 'Lisbon, Portugal',
  exp_dev_desc: 'Full lifecycle: from requirements and architecture to production and support.',
  exp_dev_b1: 'Develop and maintain production systems: application code, servers, databases, infrastructure',
  exp_dev_b2: 'Build AI pipelines on Claude and OpenAI for client business-process automation',
  exp_dev_b3: 'Telegram bots with CRM integration and routing across multiple LLM providers',
  exp_dev_b4: 'Web3 automation under NDA: on-chain data parsers, scrapers, wallet and market monitoring',
  exp_dev_b5: 'Deploy to Render/Vercel, CI/CD, PostgreSQL/SQLite',

  // Experience — AI Developer, sole proprietor (ongoing)
  exp_ai_title: 'AI Developer',
  exp_ai_company: 'Self-employed (Ukrainian sole proprietor)',
  exp_ai_period: '2024 – Present',
  exp_ai_location: 'Portugal',
  exp_ai_desc: 'Multi-agent AI systems running daily on real data.',
  exp_ai_b1: 'Own multi-agent system with 20+ specialized agents: cost-aware model routing per task, a shared skill library, and persistent memory across sessions',
  exp_ai_b2: 'Daily pipeline that classifies a stream of Telegram sources with an LLM and compiles a short digest; new classifiers first run in shadow mode, failures self-heal automatically',
  exp_ai_b3: 'AI assistant for a client business: drafts replies to customers from conversation history, learns from operator edits, syncs with the CRM',

  // Experience — On-Chain Data Automation, sole proprietor (ongoing)
  exp_crypto_title: 'On-Chain Data Automation',
  exp_crypto_company: 'Self-employed (Ukrainian sole proprietor)',
  exp_crypto_period: '2023 – Present',
  exp_crypto_location: 'Portugal',
  exp_crypto_desc: 'Monitoring and analytics tools for fragmented public data and transaction flows.',
  exp_crypto_b1: 'Wallet and transaction monitoring utilities with Telegram alerts',
  exp_crypto_b2: 'Dashboards and structured reports for activity review',
  exp_crypto_b3: 'Since 2025 — advising Web3 teams and traders: market structure, token and wallet flows, what to monitor',

  // Experience — Web Developer, sole proprietor (ongoing)
  exp_webdev_title: 'Web Developer',
  exp_webdev_company: 'Self-employed (Ukrainian sole proprietor)',
  exp_webdev_period: '2023 – Present',
  exp_webdev_location: 'Portugal',
  exp_webdev_desc: 'Websites and Telegram apps for clients and personal projects.',
  exp_webdev_b1: 'Client site for a Dubai apartment-rental business (LucentStays): property catalog, booking-platform integration, currency toggle, WhatsApp contact',
  exp_webdev_b2: 'Telegram bots and mini-apps for life-tracking, fitness, and business automation',
  exp_webdev_b3: 'Landing pages and portfolio sites on Astro/React',

  // Experience — Police (past)
  exp_police_title: 'Data Analyst / Financial Investigations',
  exp_police_company: 'National Police of Ukraine',
  exp_police_period: '2019 – 2022',
  exp_police_location: 'Dnipro, Ukraine',
  exp_police_desc: 'Regional data analysis and criminal pattern detection.',
  exp_police_b1: 'Financial-crime analysis: transaction graphs, account clustering',
  exp_police_b2: 'Risk-scoring models for law-enforcement reporting',
  exp_police_b3: 'Methodology for structuring fragmented data for operational decisions',

  // ── Projects ──────────────────────────────────────────
  projects_title: 'Projects',
  projects_subtitle: "What I've built",
  project_tech: 'Tech Stack',
  project_view: 'View Details',
  project_close: 'Close',
  project_screenshots: 'Screenshots',
  project_video: 'Demo Video',

  tier_live_demo: 'Live demo',
  tier_case_study: 'Case study',
  tier_source_private: 'Source private',
  proj_source_private_note: 'Source private — available on request',
  proj_screenshots_more: 'more',

  proj_ai_orch_title: 'Multi-Agent LLM Orchestration System',
  proj_ai_orch_desc:
    'Multi-agent system run daily: cost-aware model routing across 20+ role-specialized agents, shared skill library, and a Telegram digest pipeline.',
  proj_ai_orch_long:
    'A multi-agent system I run daily: cost-aware model routing across 20+ role-specialized agents, a shared skill library, and persistent cross-session memory. An LLM classification + daily digest pipeline runs over curated Telegram sources, with a shadow-mode classifier and self-healing scheduled runs. The public write-up repo documents an earlier, ~11-agent version of the architecture.',

  proj_mafia_title: 'Shadow Council — Host Console for Social-Deduction Games',
  proj_mafia_desc:
    'Installable PWA running the full host flow for a live social-deduction game: setup, roles, night actions, voting, and round history with undo.',
  proj_mafia_long:
    'A production PWA built for hosting live social-deduction ("Mafia") game sessions with friends. The game engine is deterministic: 17 unique roles across 3 factions, plus 16 artifact cards that modify game state in complex ways. Real-time state is synced via Supabase so multiple devices can participate simultaneously. A Monte Carlo simulator runs at least 500 simulated games to validate role balance before shipping rule changes. Deployed on Vercel with full offline PWA support.',

  proj_realty_title: 'Portugal Realty — Real-Estate Aggregator',
  proj_realty_desc:
    'Aggregates 4 Portuguese property portals into one deduplicated, fraud-flagged market view, plus a Portuguese-tax-rules transfer-tax calculator.',
  proj_realty_long:
    'Built out of genuine need — finding housing in Lisbon is fragmented across portals. Aggregates listings from 4 Portuguese property portals into one deduplicated view using Haversine geo-matching and fuzzy address fingerprinting, flags suspicious relist-fraud patterns (554 cases flagged), and applies current Portuguese fiscal rules (IMT transfer tax) for accurate cost estimates. SQLAlchemy over PostgreSQL, deployed on Render.',

  proj_lucent_title: 'LucentStays — Dubai Rentals',
  proj_lucent_desc: 'Client project: booking platform for short-term luxury apartment rentals in Dubai.',
  proj_lucent_long:
    'A client project: a complete booking platform for a Dubai-based rental business. Property listings with dynamic data from Supabase, an integrated booking-platform API, a currency toggle (AED/USD), and WhatsApp contact integration. Covers Downtown, Business Bay, Dubai Marina, and other premium areas.',

  proj_viola_title: 'AI Assistant & Operator Dashboard',
  proj_viola_desc:
    'Production AI receptionist for a service business: drafts customer replies from messaging history and learns from the operator\'s corrections.',
  proj_viola_long:
    'A client project: a production assistant for a service business that drafts customer replies from messaging history and learns from the operator\'s real corrections (few-shot pairs). Includes an operator dashboard (inbox, priority queue, booking alerts), CRM sync, a Telegram operator bot, and a watchdog that restarts failed background jobs. Multi-provider LLM routing (Claude + OpenAI) for resilience.',

  proj_radar_title: 'Radar — EU Car-Market Intelligence',
  proj_radar_desc:
    'Aggregates car listings across 14 marketplace scrapers and 12 EU countries, normalizes and dedupes them, and scores deals with landed-cost calculators.',
  proj_radar_long:
    'Aggregates car listings across 14 marketplace scrapers covering 12 EU countries (9 verified live), normalizes and dedupes them (VIN / URL / photo-hash), and scores deals on a 0–12 scale. Landed-cost calculators handle Portugal ISV import tax and Ukraine customs for cross-border buying decisions, with Telegram alerts on hot deals and a scheduler with overlap protection. 1,195 automated tests.',

  proj_gitguardian_title: 'Git Guardian — Pre-Push Security Gate',
  proj_gitguardian_desc:
    'Pre-push git hook / desktop app that scans repos for secrets, PII, and build junk before code leaves the machine, scoring push-readiness 0–10.',
  proj_gitguardian_long:
    'A pre-push git hook and desktop app (Tauri + Python) that scans a repository for secrets, PII, hardcoded paths, and build junk before code ever leaves the machine. Combines regex/heuristic scanners, TruffleHog verified-secret detection, and ExifTool metadata checks into one composite 0–10 readiness score that gates the push. Runs its own CI on every push (dogfooding).',

  proj_controlcenter_title: 'Control Center — Desktop Fleet Panel',
  proj_controlcenter_desc:
    'Cross-platform desktop app giving a single GUI panel to monitor and control a fleet of background bots and agents in real time.',
  proj_controlcenter_long:
    'A cross-platform desktop app (Tauri + React/TypeScript, Python sidecar) that gives a single live GUI panel to monitor and control a fleet of background bots/agents, replacing manual log-checking across many separate processes. Built on a shared Rust runtime library for process-lifecycle management.',

  proj_sidecar_title: 'tauri-sidecar-shell — Shared Desktop Runtime Library',
  proj_sidecar_desc:
    'Shared Rust runtime library used across multiple desktop apps so each one does not reimplement the same process-lifecycle boilerplate.',
  proj_sidecar_long:
    'A shared Rust runtime library used across multiple Tauri desktop apps: Windows Job Object kill-on-close (so child processes actually die when the app closes), health-check backoff, port reuse, and a single-instance guard. Replaces 60+ lines of per-app boilerplate with roughly 15 lines of config. Small, focused, and covered by its own CI workflow.',

  proj_connectionshub_title: 'Connections Hub — OAuth Service Launcher',
  proj_connectionshub_desc:
    'Dashboard of service tiles with real NextAuth OAuth integration (GitHub/Google), config-driven and requiring no database.',
  proj_connectionshub_long:
    'A dashboard of service tiles with real NextAuth OAuth integration (GitHub, Google), config-driven so a new provider is a config entry, not a code change. Runs with no backend database, degrading gracefully to a placeholder mode when OAuth is not configured — designed so a public demo could run safely without exposing real credentials.',

  proj_datahub_title: 'Data Hub — Full-Text Search Archive',
  proj_datahub_desc:
    'Ingests chat exports from multiple platforms into one searchable archive with SQLite FTS5 full-text search, exposed via a REST API.',
  proj_datahub_long:
    'Ingests chat exports from multiple platforms into one searchable personal archive, using SQLite FTS5 full-text search rather than standing up a heavier search engine — right-sized for a personal-scale corpus. Exposed via a REST API so other internal tools can query it, not just a UI.',

  proj_notes_title: 'Note-Taking System — Telegram-to-Kanban Pipeline',
  proj_notes_desc:
    'Telegram bot that classifies incoming messages with an LLM and automatically files them into a Kanban board.',
  proj_notes_long:
    'A Telegram bot that classifies incoming messages with an LLM classification step and automatically files them into the right board/column of a Kanban-style planner, instead of relying on manual triage or rigid keyword rules.',

  proj_transcription_title: 'Transcription Bot — Local Speech-to-Text Pipeline',
  proj_transcription_desc:
    'Fully local, Whisper-based transcription pipeline with speaker diarization and resume-on-failure checkpointing.',
  proj_transcription_long:
    'A local speech-to-text pipeline: fully local Whisper-family inference (no cloud API dependency, so it is free and keeps audio on-device), a speaker-diarization layer for multi-speaker recordings, and checkpointing so long transcription jobs can resume after a crash instead of restarting from zero.',

  // ── Skills ────────────────────────────────────────────
  skills_title: 'Skills',
  skills_ai_automation: 'AI & Automation',
  skills_backend_data: 'Backend & Data',
  skills_frontend_desktop: 'Frontend & Desktop',
  skills_web3: 'Web3',
  skills_testing_devops: 'Testing, Security & DevOps',
  skills_core_languages: 'Programming Languages',
  skills_languages: 'Languages',

  // ── Education ─────────────────────────────────────────
  education_title: 'Education & Certifications',

  edu_rnu_title: 'Professional Bachelor, Business Administration',
  edu_rnu_school: 'Riga Nordic University (formerly ISMA)',
  edu_rnu_period: '2026 – 2028 (in progress)',
  edu_rnu_location: 'Riga, Latvia · Online, English-taught',
  edu_rnu_desc: 'Transfer admission into Year 3. Programme delivered online, exams on-site.',

  edu_law_title: "Bachelor's Degree in Law Enforcement",
  edu_law_school: 'Dnipropetrovsk State University of Internal Affairs (DDUVS)',
  edu_law_period: '2016 – 2020',
  edu_law_location: 'Dnipro, Ukraine',
  edu_law_desc: 'Full-time. Specialization: criminal investigation and operational-search activities.',

  edu_econ_title: "Bachelor's Degree in Economic Analytics",
  edu_econ_school: 'DDUVS',
  edu_econ_period: '2020',
  edu_econ_location: 'Dnipro, Ukraine',
  edu_econ_desc: 'Specialization: Economic security and data analysis.',

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
  edu_pt_a2_institution: 'IEFP',
  edu_pt_a2_period: '2025',
  edu_pt_a2_location: 'Portugal',
  edu_pt_a2_desc: 'Official A2-level certificate in Portuguese. Demonstrates ability to communicate in everyday situations in Portugal.',

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
  contact_remote_note: 'Remote-ready worldwide',
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

  services_hotels_example: 'Built: LucentStays — Dubai apartment rentals',
  services_hotels_title: 'Hotels & Vacation Rentals (Airbnb)',
  services_hotels_desc: 'Guest communication automation',
  services_hotels_examples: 'What I can build:|Multilingual AI concierge for answering guest questions 24/7|Review monitoring system that instantly notifies about new comments|Staff communication automation (cleaning notifications)',

  services_construction_title: 'Construction & Real Estate',
  services_construction_desc: 'Data aggregation and communication automation',
  services_construction_example: 'Built: Portugal Realty — 12K listings from 4 portals',
  services_construction_examples: 'What I can build:|Listing aggregator collecting offers from 4-5 portals in one place|Fraud and duplicate detection system for listings|Automatic progress update mailings for investors',

  services_research_title: 'Research & Analysis',
  services_research_desc: 'Data collection and analysis from any source',
  services_research_examples: 'What I can build:|Security vulnerability research|Competitor analysis and automatic data collection from any public sources|Dashboards that explain in plain language WHAT is happening and WHY',

  services_crypto_title: 'Monitoring & Risk Data',
  services_crypto_desc: 'Alerting, transaction analytics, and infrastructure observability',
  services_crypto_examples: 'What I can build:|Wallet or public-data monitoring with instant notifications|Dashboards for unusual activity, relists, or operational signals|Review tools that turn noisy events into structured decisions',

  services_ai_title: 'AI & Content Automation',
  services_ai_desc: 'Multi-agent systems and content generation',
  services_ai_examples: 'What I can build:|Multi-agent AI systems for data analysis and content generation|System that turns one video (webinar, podcast) into a week of content: short clips, posts, articles with auto-posting|Integration of AI models (Claude, OpenAI) into your business processes',

  services_cta_title: 'Audit & Intelligent Automation.',
  services_cta_desc: 'I deploy AI agents to automate routine tasks. 1 hour of automation today = 1 free month per year.',
  services_cta_button: 'Contact me',

  // ── Projects UI ───────────────────────────────────────
  proj_visit_site: 'Visit Site',
  proj_view_demo: 'Demo',
  proj_view_github: 'GitHub',
  proj_collapse: 'Collapse ▲',
  proj_show_more: 'Show more',
  proj_show_less: 'Collapse',

  // ── Footer ────────────────────────────────────────────
  footer_built_with: 'Built with Astro + Tailwind',
  footer_rights: '© 2026 Serhii. All rights reserved.',
  footer_privacy: 'Privacy Policy',
  footer_back_to_top: 'Top',
  footer_compliance: 'Compliance & Confidentiality: All solutions are developed in accordance with data security standards and NDA terms.',
} as const;
