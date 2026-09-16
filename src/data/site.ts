// Single source of truth for contact info, social links and site-wide
// constants. Nothing here is user-facing copy (that belongs in
// src/i18n/*) — this is identifiers: URLs, handles, an email address.
//
// Before this file existed, the email/LinkedIn/GitHub URLs were copy-pasted
// across Hero.astro, Contact.astro and SchemaOrg.astro. Update contact info
// in exactly one place from now on.

export const SITE_URL = 'https://0xgrek.com';
export const OG_IMAGE_PATH = '/og-default.png';

export const CONTACT = {
  email: 'ivanenko.pt@gmail.com',
  emailHref: 'mailto:ivanenko.pt@gmail.com',
  linkedinHandle: 'ivanenko-pt',
  linkedinUrl: 'https://linkedin.com/in/ivanenko-pt',
  githubHandle: '0xGrek',
  githubUrl: 'https://github.com/0xGrek',
} as const;

export const LOCATION = {
  city: 'Lisbon',
  country: 'Portugal',
  countryCode: 'PT',
  googleMapsUrl: 'https://www.google.com/maps/place/Lisbon,+Portugal',
  timezone: 'Europe/Lisbon',
} as const;

// Live URLs for client projects, referenced from both src/data/projects.ts
// (the project card's own "live" link) and the Services section (the
// "done: LucentStays" example badge) — one literal instead of two.
export const CLIENT_PROJECT_URLS = {
  lucentStays: 'https://lucentstays.com',
} as const;
