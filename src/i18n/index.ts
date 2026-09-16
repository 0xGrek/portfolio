import { en } from './en';
import { ua } from './ua';
import { pt } from './pt';
import { es } from './es';

export const languages = { en, ua, pt, es } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ua';

export function t(lang: Lang, key: keyof typeof en): string {
  return languages[lang]?.[key] ?? languages[defaultLang][key] ?? key;
}

/**
 * Dynamic-key variant of t() for keys built at runtime — template
 * literals like `services_${id}_title`, or a key read off a data object
 * (exp.titleKey, project.descriptionKey, ...). TypeScript can't check an
 * arbitrary runtime string against the `keyof typeof en` union, so call
 * sites used to reach for `as any` on every call. This centralizes that
 * one necessary cast in a single, typed, auditable place instead of
 * scattering `as any` across every component.
 */
export function td(lang: Lang, key: string): string {
  return t(lang, key as keyof typeof en);
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}
