import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLocale, locales, localeMeta, localizedPath, defaultLocale, type Locale } from './config';

export const SITE = 'https://chroniclesofinnovation.com';

/** Resolves the [lang] route param, or shows a 404 for anything unsupported. */
export async function getLocale(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

/** Canonical URL plus hreflang links to every translation of a page. */
export function pageAlternates(lang: Locale, path: string): NonNullable<Metadata['alternates']> {
  return {
    canonical: localizedPath(lang, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, localizedPath(l, path)])),
      'x-default': localizedPath(defaultLocale, path),
    },
  };
}

export function absoluteUrl(lang: Locale, path: string) {
  return `${SITE}${localizedPath(lang, path)}`;
}

export function ogLocales(lang: Locale) {
  return {
    locale: localeMeta[lang].og,
    alternateLocale: locales.filter((l) => l !== lang).map((l) => localeMeta[l].og),
  };
}
