import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLocale, localeMeta, localizedPath, hreflangEntries, locales, type Locale } from './config';
import { getMessages } from './messages';
import { SITE_URL } from '@/lib/site';

export const SITE = SITE_URL;

/** Resolves the [lang] route param, or shows a 404 for anything unsupported. */
export async function getLocale(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

/** Canonical URL plus hreflang links (languages, countries, x-default). */
export function pageAlternates(lang: Locale, path: string): NonNullable<Metadata['alternates']> {
  return {
    canonical: localizedPath(lang, path),
    languages: Object.fromEntries(hreflangEntries(path)),
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

/** Open Graph and Twitter images with alt text in the page's language. */
export function socialImages(lang: Locale, alt?: string, imagePath = `/${lang}/opengraph-image`, twitterPath = `/${lang}/twitter-image`) {
  const text = alt ?? getMessages(lang).meta.ogImageAlt;
  return {
    openGraph: [{ url: imagePath, width: 1200, height: 630, alt: text }],
    twitter: [{ url: twitterPath, alt: text }],
  };
}
