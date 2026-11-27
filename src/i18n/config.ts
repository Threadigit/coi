// Single source of truth for the languages the site supports.
// Pure module: safe to import from the proxy, server and client code.

export const locales = ['en', 'es', 'fr', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<
  Locale,
  {
    /** The language's own name, shown in the switcher. */
    name: string;
    /** Short label for the compact switcher button. */
    short: string;
    /** BCP 47 tag for <html lang>, hreflang and Intl formatting. */
    htmlLang: string;
    /** Open Graph locale. */
    og: string;
    /** YouTube interface language (hl). */
    ytHl: string;
    /** YouTube caption language (cc_lang_pref). */
    ytCaption: string;
    /** Countries to target explicitly with hreflang (ISO 3166-1 alpha-2). */
    regions: string[];
  }
> = {
  en: { name: 'English', short: 'EN', htmlLang: 'en', og: 'en_US', ytHl: 'en', ytCaption: 'en', regions: ['US', 'GB', 'CA', 'AU', 'IE', 'NG', 'GH', 'KE', 'ZA', 'IN'] },
  es: { name: 'Español', short: 'ES', htmlLang: 'es', og: 'es_ES', ytHl: 'es', ytCaption: 'es', regions: ['ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'US'] },
  fr: { name: 'Français', short: 'FR', htmlLang: 'fr', og: 'fr_FR', ytHl: 'fr', ytCaption: 'fr', regions: ['FR', 'BE', 'CA', 'CH', 'SN', 'CI', 'CM'] },
  zh: { name: '中文', short: '中文', htmlLang: 'zh-Hans', og: 'zh_CN', ytHl: 'zh-CN', ytCaption: 'zh-Hans', regions: ['CN', 'SG'] },
};

export const LOCALE_COOKIE = 'coi-lang';

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** "/about" in Spanish becomes "/es/about". English stays unprefixed. */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

/** Removes a leading locale segment: "/es/about" becomes "/about". */
export function stripLocale(pathname: string): string {
  const seg = pathname.split('/')[1];
  if (isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return rest === '' ? '/' : rest;
  }
  return pathname || '/';
}

/**
 * Every hreflang entry for a page: each language, each targeted country of that
 * language (all pointing at the same URL), and x-default (English).
 */
export function hreflangEntries(path: string): [code: string, urlPath: string][] {
  const out: [string, string][] = [];
  for (const l of locales) {
    const url = localizedPath(l, path);
    out.push([localeMeta[l].htmlLang, url]);
    for (const r of localeMeta[l].regions) out.push([`${l}-${r}`, url]);
  }
  out.push(['x-default', localizedPath(defaultLocale, path)]);
  return out;
}
