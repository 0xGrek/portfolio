import { en } from './en';
import { ua } from './ua';
import { pt } from './pt';
import { es } from './es';

export const languages = { en, ua, pt, es } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export function t(lang: Lang, key: keyof typeof en): string {
  return languages[lang]?.[key] ?? languages[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}
