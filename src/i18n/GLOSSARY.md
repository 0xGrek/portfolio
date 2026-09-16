# i18n glossary — what stays in English

Rule: every language file (`en.ts`, `ua.ts`, `pt.ts`, `es.ts`) is written in its
own language. English words leak in only for the categories below — everything
else gets translated. When translating, pick **one** rendering per term and
keep it consistent across the whole file (don't mix "пайплайн" and "конвеєр
даних" for the same concept in the same language).

## Allowed to stay in English (any language file)

- **Brands / products**: Telegram, WhatsApp, Claude, OpenAI, Python, React,
  Astro, Supabase, GitHub, Vercel, Render, MCP — plus other proper-noun tech
  names already used as tags/stack items (TypeScript, PostgreSQL, SQLite,
  Docker, Linux, Tailwind, Node.js, Next.js/NextAuth, Rust, Tauri, Whisper).
- **Established abbreviations**: AI, API, CRM, CI/CD, LLM, SQL — plus other
  standard technical acronyms that have no natural translation and would look
  absurd translated (PWA, GUI, REST, OAuth, JWT, FTS5, VIN, IMT, ISV, NDA).
- **Project names and tech tags**: the `tags: [...]` arrays in
  `src/data/*.ts`, and proper-noun project titles ("Git Guardian", "Radar",
  "Shadow Council", "Control Center", "LucentStays", "Portugal Realty", etc).
- **The personal brand tagline**: `hero_title` / `meta_title`
  ("AI Agent Engineer · Web3 Data Consultant") is kept identical across all
  four languages by design — it's a title, not a sentence.
- **`hero_subtitle_lead`**: frozen verbatim per Serhii — do not touch, in any
  language, until he explicitly asks for a rewrite.
- **Experience section (`exp_*` keys) as of 2026-09-16**: this copy was
  dictated/approved by Serhii verbatim (including his own word choices like
  "production"). Don't re-translate it as part of a routine localization
  pass — treat it the same as `hero_subtitle_lead`. If Serhii asks for a new
  Experience pass, that supersedes this note.

## Translate everything else

Ordinary English vocabulary that leaked into prose gets translated, even if
it's common in tech slang. Fixed renderings used on this site (Ukrainian
shown; mirror the equivalent naturalized/translated form in pt/es):

| English            | UA rendering            |
|--------------------|--------------------------|
| pipeline(s)        | пайплайн(и) *(naturalized loanword, not `pipeline`)* |
| dashboard(s)       | дашборд(и) *(naturalized loanword)* |
| workflow(s)        | робочі процеси |
| internal tools     | внутрішні інструменти |
| monitoring         | моніторинг *(already naturalized — keep)* |
| alerting / alerts  | сповіщення |
| analytics tools    | аналітичні інструменти |
| structured review outputs | структуровані результати перевірки |
| part-time          | часткова зайнятість |
| backend            | бекенд *(naturalized loanword, matches existing "фронтенд")* |
| software delivery  | розробка та постачання програмних продуктів |
| boilerplate        | шаблонний код |

If a new English word shows up during a future edit and doesn't fit either
list, default to translating it, then add it to this table so the next pass
stays consistent.
