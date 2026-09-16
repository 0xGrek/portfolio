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
- **`ua.ts` Experience section (`exp_*` keys) as of 2026-09-16**: this UA
  copy was dictated/approved by Serhii verbatim (including his own word
  choices like "production" and "лайф-трекінг, фітнес" — his own phrasing
  from the old site and his CV, source: `master` commit `b4d4762` and the
  `mid_FINAL` CV). Don't re-translate the **UA** text as part of a routine
  localization pass — treat it the same as `hero_subtitle_lead`.
  **This exemption is UA-only.** The `en.ts`/`pt.ts`/`es.ts` Experience
  copy is a translation of that UA original done during the same pass, not
  separately dictated by Serhii — it still has to follow the normal
  glossary rules below (that's why "skills"/"shadow"/"Utilities" leaking
  into the PT/ES Experience bullets was a real bug, not a frozen quote,
  and got fixed on 2026-09-16). If Serhii asks for a new Experience pass,
  that supersedes this note for whichever language(s) he redictates.

## Translate everything else

Ordinary English vocabulary that leaked into prose gets translated, even if
it's common in tech slang. Ukrainian uses Cyrillic naturalized loanwords
where noted; PT/ES are Latin-script, so their "naturalization" is often
just borrowing the word unchanged (`pipeline`, `dashboard`) — that's fine,
it's not the same as leaving an *ordinary* English word like `skills` or
`shadow` untranslated, which reads as broken PT/ES, not as a loanword.

| English                    | UA                    | PT                              | ES                               |
|----------------------------|------------------------|----------------------------------|-----------------------------------|
| pipeline(s)                | пайплайн(и) *(naturalized, not `pipeline`)* | pipeline(s) *(kept — established PT loanword)* | pipeline(s) *(kept — established ES loanword)* |
| dashboard(s)                | дашборд(и) *(naturalized)* | dashboard(s) *(kept)* | dashboard(s) *(kept)* |
| workflow(s)                | робочі процеси | fluxo(s) de trabalho | flujo(s) de trabajo |
| internal tools              | внутрішні інструменти | ferramentas internas | herramientas internas |
| monitoring                  | моніторинг *(already naturalized)* | monitorização | monitoreo |
| alerting / alerts           | сповіщення | alertas / notificações | alertas / notificaciones |
| analytics tools              | аналітичні інструменти | ferramentas de analytics | herramientas de analytics |
| structured review outputs   | структуровані результати перевірки | resultados estruturados de revisão | resultados estructurados de revisión |
| part-time                    | часткова зайнятість | a tempo parcial | a tiempo parcial |
| backend                      | бекенд *(naturalized, matches "фронтенд")* | backend *(kept — established PT loanword)* | backend *(kept — established ES loanword)* |
| software delivery            | розробка та постачання програмних продуктів | desenvolvimento e entrega de software | desarrollo y entrega de software |
| boilerplate                  | шаблонний код | código repetitivo | código repetitivo |
| skills (as in "skill library") | навички | competências *(matches `nav_skills`)* | habilidades *(matches `nav_skills`)* |
| shadow (mode)                 | тіньовий режим | modo sombra | modo sombra |
| utilities (noun, "utils")     | утиліти | utilitários | utilidades |
| tiles (UI dashboard tiles)    | плитки | blocos | bloques |
| provider                       | провайдер | fornecedor | proveedor |
| inputs (noun, "incoming data") | вхідні дані | entradas | entradas |

If a new English word shows up during a future edit and doesn't fit either
list, default to translating it, then add it to this table so the next pass
stays consistent.
