# Serhii Ivanenko Portfolio

Personal portfolio for AI/software systems, data automation, and product engineering work.

Live site: https://0xgrek.com

## Overview

This repository contains the public portfolio site for Serhii Ivanenko
(`0xGrek`). It presents selected projects, technical experience, services,
education, and contact links in a multilingual static site.

The portfolio is built as a fast static Astro site and deployed as the central
hub for GitHub, live demos, and case studies.

## Featured Projects

- Shadow Council / Mafia Game: React and TypeScript PWA for hosting live social deduction games.
- Portugal Realty: Python and Flask real estate data platform for Portuguese listings.
- AI Knowledge Orchestrator: architecture case study for multi-agent knowledge routing.
- LucentStays: client booking website for short-term rentals.

## Stack

- Astro 5
- TypeScript
- Tailwind CSS
- Astro i18n routing
- Astro sitemap
- Geist Sans / Geist Mono
- Lenis smooth scrolling

## Project Structure

```text
src/
  components/     UI, layout, sections, SEO schema
  data/           projects, experience, skills
  i18n/           English, Ukrainian, Portuguese, Spanish copy
  layouts/        base page layout and metadata
  pages/          localized routes
  styles/         global styling
public/           static assets, robots.txt, social preview image
```

## Local Development

Requirements:

- Node.js 22.12+
- npm

Install dependencies:

```bash
npm ci
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment Notes

The site is configured with:

- canonical site URL: `https://0xgrek.com`
- localized routes: `/en`, `/ua`, `/pt`, `/es`
- sitemap generation
- Open Graph default image: `/og-default.png`
- robots.txt in `public/robots.txt`

## Repository Status

Public portfolio hub. Some linked projects are open-source repositories, while
private historical automation work is represented only as sanitized case studies
without operational source code.
