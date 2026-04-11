import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://0xgrek.dev',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', ua: 'uk-UA', ru: 'ru-RU', pt: 'pt-PT' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ua', 'ru', 'pt'],
    routing: { prefixDefaultLocale: true },
  },
});
