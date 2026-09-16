#!/usr/bin/env node
/**
 * verify_content.mjs — grep the built site (dist/) for a forbidden-string
 * list before it ever gets pushed/deployed. Case-insensitive substring
 * match. Exits 1 (and prints every hit with file + line) if anything is
 * found; exits 0 silently-ish otherwise.
 *
 * Run after `npm run build`:
 *   node scripts/verify_content.mjs
 *
 * Add new terms to FORBIDDEN as new OPSEC/overclaim rules come up — see
 * E:\AGENTS\career\00_MASTER\CAREER_BASE\DISCLOSURE_LEVELS.md and FACTS.md
 * for the source of truth on what must never appear on the public site.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');

const FORBIDDEN = [
  'mint',
  '500+',
  'andrianov',
  'onrender',
  'snip',
  'farm',
  'airdrop',
  '913371298',
  'casa-app',
  'vila-facaia',
];

const SCAN_EXTENSIONS = new Set(['.html', '.xml', '.txt', '.json']);

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

function main() {
  let files;
  try {
    files = walk(DIST_DIR);
  } catch (err) {
    console.error(`[verify_content] cannot read ${DIST_DIR} — did you run "npm run build" first?`);
    console.error(String(err));
    process.exit(1);
  }

  if (files.length === 0) {
    console.error(`[verify_content] no files found under ${DIST_DIR} — build output missing.`);
    process.exit(1);
  }

  const hits = [];

  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    const lower = content.toLowerCase();
    for (const term of FORBIDDEN) {
      let fromIndex = 0;
      const termLower = term.toLowerCase();
      let idx;
      while ((idx = lower.indexOf(termLower, fromIndex)) !== -1) {
        const lineNum = lower.slice(0, idx).split('\n').length;
        const lineStart = lower.lastIndexOf('\n', idx) + 1;
        const lineEnd = lower.indexOf('\n', idx);
        const rawLine = content.slice(lineStart, lineEnd === -1 ? content.length : lineEnd).trim();
        hits.push({
          file: file.replace(DIST_DIR, 'dist'),
          line: lineNum,
          term,
          context: rawLine.slice(0, 200),
        });
        fromIndex = idx + termLower.length;
      }
    }
  }

  if (hits.length > 0) {
    console.error(`[verify_content] BLOCKED — ${hits.length} forbidden-string match(es) found:\n`);
    for (const h of hits) {
      console.error(`  ${h.file}:${h.line}  [${h.term}]  ${h.context}`);
    }
    console.error(`\n[verify_content] Forbidden list: ${FORBIDDEN.join(', ')}`);
    process.exit(1);
  }

  console.log(`[verify_content] OK — scanned ${files.length} file(s) under dist/, 0 forbidden-string matches.`);
  process.exit(0);
}

main();
