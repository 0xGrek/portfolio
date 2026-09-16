#!/usr/bin/env node
/**
 * verify_content.mjs — grep the built site (dist/) for a forbidden-string
 * list before it ever gets pushed/deployed. Case-insensitive. Most terms
 * are plain substring matches; a few (currently 'mint', 'farm'/'farming')
 * are word-boundary matches so real words like "footprint" or "farming
 * out" don't false-positive against a substring like "mint"/"farm" hiding
 * inside them. Exits 1 (and prints every hit with file + line) if
 * anything is found; exits 0 otherwise.
 *
 * Run standalone:      node scripts/verify_content.mjs
 * Runs automatically:  npm run build   (build = astro build && verify)
 *
 * Add new terms as new OPSEC/overclaim rules come up — see
 * E:\AGENTS\career\00_MASTER\CAREER_BASE\DISCLOSURE_LEVELS.md and FACTS.md
 * for the source of truth on what must never appear on the public site.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');

// Plain case-insensitive substring matches.
const SUBSTRING_TERMS = [
  '500+',
  'andrianov',
  'onrender',
  'snip',
  'airdrop',
  'casa-app',
  'vila-facaia',
  'hostaway',
  '+351', // PT country code — catches any dialable phone number, formatted or not
  'unipessoal', // PT legal-structure term (sole-member company) — not for public disclosure
];

// Word-boundary / pattern matches — avoids false positives on substrings
// that occur inside unrelated real words (e.g. a future "footprint" or
// "farming out the design" type phrase, or minified JS identifiers), and
// lets a single rule catch formatting variants (spaces/dashes/dots between
// digit groups) instead of one hardcoded literal per format.
const WORD_BOUNDARY_TERMS = [
  { label: 'mint', pattern: /\bmints?\b/gi },
  { label: 'farm', pattern: /\bfarms?(ing)?\b/gi },
  { label: 'phone-913371298', pattern: /913\D?371\D?298/g },
];

const SCAN_EXTENSIONS = new Set(['.html', '.xml', '.txt', '.json', '.js']);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full, out);
    } else if (SCAN_EXTENSIONS.has(extname(entry).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function lineAt(content, idx) {
  const lineNum = content.slice(0, idx).split('\n').length;
  const lineStart = content.lastIndexOf('\n', idx) + 1;
  const lineEndIdx = content.indexOf('\n', idx);
  const rawLine = content.slice(lineStart, lineEndIdx === -1 ? content.length : lineEndIdx).trim();
  return { lineNum, rawLine: rawLine.slice(0, 200) };
}

function scanFile(file, content, hits) {
  const lower = content.toLowerCase();

  for (const term of SUBSTRING_TERMS) {
    const termLower = term.toLowerCase();
    let fromIndex = 0;
    let idx;
    while ((idx = lower.indexOf(termLower, fromIndex)) !== -1) {
      const { lineNum, rawLine } = lineAt(content, idx);
      hits.push({ file: file.replace(DIST_DIR, 'dist'), line: lineNum, term, context: rawLine });
      fromIndex = idx + termLower.length;
    }
  }

  for (const { label, pattern } of WORD_BOUNDARY_TERMS) {
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(content)) !== null) {
      const { lineNum, rawLine } = lineAt(content, m.index);
      hits.push({ file: file.replace(DIST_DIR, 'dist'), line: lineNum, term: label, context: rawLine });
      if (m.index === pattern.lastIndex) pattern.lastIndex++; // avoid infinite loop on zero-width match
    }
  }
}

function main() {
  let files;
  try {
    files = walk(DIST_DIR);
  } catch (err) {
    console.error(`[verify_content] cannot read ${DIST_DIR} — did you run "astro build" first?`);
    console.error(String(err));
    process.exit(1);
  }

  if (files.length === 0) {
    console.error(`[verify_content] no files found under ${DIST_DIR} — build output missing.`);
    process.exit(1);
  }

  const hits = [];
  for (const file of files) {
    scanFile(file, readFileSync(file, 'utf8'), hits);
  }

  if (hits.length > 0) {
    console.error(`[verify_content] BLOCKED — ${hits.length} forbidden-string match(es) found:\n`);
    for (const h of hits) {
      console.error(`  ${h.file}:${h.line}  [${h.term}]  ${h.context}`);
    }
    const allTerms = [...SUBSTRING_TERMS, ...WORD_BOUNDARY_TERMS.map((t) => t.label)];
    console.error(`\n[verify_content] Forbidden list: ${allTerms.join(', ')}`);
    process.exit(1);
  }

  console.log(`[verify_content] OK — scanned ${files.length} file(s) under dist/, 0 forbidden-string matches.`);
  process.exit(0);
}

main();
