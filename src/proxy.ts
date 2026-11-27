import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, isLocale, LOCALE_COOKIE } from './i18n/config';
import { BOT_PATTERN, detectLocale } from './i18n/detect';

/**
 * Locale routing.
 *
 * English lives at the root (/about) and every other language under its own
 * prefix (/es/about). For a visitor on an unprefixed URL we pick a language:
 *   1. their saved choice (cookie, set by the language switcher),
 *   2. otherwise the browser's language list, then their country,
 *   3. otherwise English.
 * Search engines and link-preview bots always get English.
 */

// Country headers set by common hosts (Vercel, Cloudflare, generic CDNs).
const COUNTRY_HEADERS = ['x-vercel-ip-country', 'cf-ipcountry', 'cloudfront-viewer-country', 'x-country-code'];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split('/')[1];

  // An explicit /en prefix is the same page as the unprefixed URL.
  if (first === defaultLocale) {
    const rest = pathname.slice(defaultLocale.length + 1) || '/';
    const url = request.nextUrl.clone();
    url.pathname = rest;
    return NextResponse.redirect(url, 308);
  }

  // Already a localized URL: pass through.
  if (isLocale(first)) return NextResponse.next();

  // Unprefixed URL: choose a language.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const ua = request.headers.get('user-agent') ?? '';
  let locale = defaultLocale;
  if (isLocale(saved)) {
    locale = saved;
  } else if (!BOT_PATTERN.test(ua)) {
    const country = COUNTRY_HEADERS.map((h) => request.headers.get(h)).find(Boolean);
    locale = detectLocale(request.headers.get('accept-language'), country);
  }

  const vary = 'Accept-Language, Cookie';

  if (locale !== defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    url.search = search;
    const res = NextResponse.redirect(url, 307);
    res.headers.set('Vary', vary);
    return res;
  }

  // English: serve the /en tree at the unprefixed URL.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  const res = NextResponse.rewrite(url);
  res.headers.set('Vary', vary);
  return res;
}

export const config = {
  matcher: [
    // Everything except Next internals, files with an extension, and the
    // generated social images (which live outside the locale tree).
    '/((?!_next/|api/|.*\\..*|opengraph-image|twitter-image|.*/opengraph-image|.*/twitter-image).*)',
  ],
};
