#!/usr/bin/env node
/**
 * check_hardcode.mjs — rough (line-based, not a real HTML/AST parser) scan
 * for two smells that keep sneaking into .astro components instead of
 * living in src/i18n/* (copy) or src/data/* (contacts, links, tags, facts):
 *
 *   1. Text nodes containing letters, sitting directly in template markup
 *      outside a `{t(...)}` / `{td(...)}` i18n call — i.e. hardcoded
 *      visible copy that won't get translated.
 *   2. Literal http(s):// URLs anywhere outside src/data/ — contact links,
 *      social URLs, canonical domains etc. belong in src/data/site.ts (or
 *      another data file), not copy-pasted into components.
 *
 * This is intentionally coarse: it strips frontmatter/<script>/<style>/
 * comments, blanks out {...} expressions (tracking brace depth so nested
 * ones are fully removed, not just the innermost pair), and pattern-matches
 * what's left. It WILL have false positives (e.g. a decorative "·"
 * separator) — that's fine, a human reviews the findings.
 *
 * Known blind spot: because a whole `{condition && (<a>text</a>)}` block
 * gets blanked as one JS expression, hardcoded text nested INSIDE a
 * conditionally-rendered block is invisible to this scan (that's how a
 * hardcoded "Demo"/"GitHub" button label in Projects.astro slipped past
 * it during the 2026-09-16 audit — found by hand, fixed, not caught by
 * this script). This is a rough line/regex scan, not an AST parser; it
 * catches the common case (plain hardcoded text, hardcoded URLs) and
 * documents where it doesn't reach rather than overclaiming coverage.
 *
 * Run standalone:      node scripts/check_hardcode.mjs
 * Runs automatically:  npm run build   (build = check_hardcode && astro build && verify)
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC_DIR = join(ROOT, 'src');
const DATA_DIR = join(SRC_DIR, 'data');
const I18N_DIR = join(SRC_DIR, 'i18n');

// Directories we never want to flag even though they're under src/ — these
// ARE the allowed homes for literal strings/URLs/facts.
const ALLOWED_DIRS = [DATA_DIR, I18N_DIR];

function isAllowed(path) {
  return ALLOWED_DIRS.some((dir) => path === dir || path.startsWith(dir + sep));
}

function walk(dir, exts, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.astro' || entry.startsWith('.')) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full, exts, out);
    } else if (exts.has(extname(entry).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

// Replace a matched span with a same-length run of newlines (blank lines)
// so every later line number stays aligned with the original file — makes
// findings clickable/greppable instead of pointing at the wrong line.
function blankOut(str, re) {
  return str.replace(re, (m) => '\n'.repeat((m.match(/\n/g) || []).length));
}

/** Strip Astro frontmatter (--- ... ---), <script>, <style> and HTML comments,
 *  preserving line numbers so findings map back to the real file. */
function stripNonTemplate(content) {
  let s = content;
  if (s.startsWith('---')) {
    const end = s.indexOf('\n---', 3);
    if (end !== -1) s = blankOut(s, new RegExp('^[\\s\\S]{0,' + (end + 4) + '}'));
  }
  s = blankOut(s, /<script[\s\S]*?<\/script>/gi);
  s = blankOut(s, /<style[\s\S]*?<\/style>/gi);
  s = blankOut(s, /<!--[\s\S]*?-->/g);
  return s;
}

// A run of 2+ letters (Latin or Cyrillic) — enough to rule out stray
// punctuation, single decorative glyphs (→ ✓ ▼ ·) and bare numbers.
const LETTERS_RE = /[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁёІіЇїЄєҐґ]{2,}/;

function lineOf(str, index) {
  let line = 1;
  for (let i = 0; i < index; i++) if (str.charCodeAt(i) === 10) line++;
  return line;
}

// Blank out every {...} Astro/JS expression, tracking brace depth so
// nested braces (conditionals, template literals with ${...}, map()
// callbacks spanning many lines) are fully removed rather than just the
// innermost pair. Everything at depth 0 passes through unchanged; inside
// an expression, characters become spaces (newlines stay newlines, so
// line numbers of what remains still match the original file).
function blankExpressions(str) {
  let out = '';
  let depth = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '{') { depth++; out += ' '; continue; }
    if (ch === '}') { depth = Math.max(0, depth - 1); out += ' '; continue; }
    out += depth > 0 ? (ch === '\n' ? '\n' : ' ') : ch;
  }
  return out;
}

function findHardcodedText(file, templateSrc, hits) {
  // Text nodes can be split across lines (a plain-text link label sitting
  // alone between two tags), so this scans the whole blanked template at
  // once rather than line by line.
  const withoutExprs = blankExpressions(templateSrc);
  const textNodeRe = />([^<>]+)</g;
  let m;
  while ((m = textNodeRe.exec(withoutExprs)) !== null) {
    const text = m[1].replace(/\s+/g, ' ').trim();
    if (!text) continue;
    if (!LETTERS_RE.test(text)) continue;
    if (/^(doctype|DOCTYPE)/.test(text)) continue;
    const startIndex = m.index + 1; // just past the '>'
    hits.push({ file, line: lineOf(withoutExprs, startIndex), kind: 'hardcoded-text', snippet: text.slice(0, 100) });
  }
}

// Spec-mandated constants, not site "facts" — the SVG XML namespace and the
// JSON-LD @context URL are always exactly this string, everywhere, for
// every project on the web. Flagging them ~40 times per build is just
// noise that would bury real findings.
const URL_ALLOWLIST = new Set([
  'http://www.w3.org/2000/svg',
  'https://schema.org',
]);

function findHardcodedUrls(file, fullContent, hits) {
  const lines = fullContent.split('\n');
  const urlRe = /(['"`])(https?:\/\/[^'"`\s]+)\1/g;
  for (let i = 0; i < lines.length; i++) {
    let m;
    urlRe.lastIndex = 0;
    while ((m = urlRe.exec(lines[i])) !== null) {
      if (URL_ALLOWLIST.has(m[2])) continue;
      hits.push({ file, line: i + 1, kind: 'hardcoded-url', snippet: m[2] });
    }
  }
}

function main() {
  const astroFiles = walk(SRC_DIR, new Set(['.astro']));
  const tsFiles = walk(SRC_DIR, new Set(['.ts'])).filter((f) => !isAllowed(f));

  const hits = [];

  for (const file of astroFiles) {
    const content = readFileSync(file, 'utf8');
    const templateOnly = stripNonTemplate(content);
    findHardcodedText(file, templateOnly, hits);
    if (!isAllowed(file)) findHardcodedUrls(file, content, hits);
  }
  for (const file of tsFiles) {
    findHardcodedUrls(file, readFileSync(file, 'utf8'), hits);
  }

  if (hits.length > 0) {
    console.error(`[check_hardcode] ${hits.length} finding(s) — review each; some may be false positives:\n`);
    for (const h of hits) {
      const rel = relative(ROOT, h.file);
      console.error(`  ${rel}:${h.line}  [${h.kind}]  ${h.snippet}`);
    }
    console.error(
      `\n[check_hardcode] Visible copy belongs in src/i18n/* (via t()/td()); URLs, emails,\n` +
      `and other facts belong in src/data/* (e.g. src/data/site.ts for contact info).\n` +
      `This is a coarse line-based scan, not an AST parser — a false positive is fine,\n` +
      `fix the file or, if it's a genuine non-issue, leave a comment explaining why.`
    );
    process.exit(1);
  }

  console.log(`[check_hardcode] OK — scanned ${astroFiles.length} .astro file(s), 0 findings.`);
  process.exit(0);
}

main();
