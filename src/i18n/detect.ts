import { defaultLocale, isLocale, type Locale } from './config';

/**
 * Countries where a language we offer is the clear everyday language. Used when
 * the visitor's browser is set to English (or says nothing useful), so that
 * location still gives them their own language. Edit freely: it is data.
 */
export const COUNTRY_DEFAULTS: Record<string, Locale> = {
  // Spanish
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es',
  GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es',
  CR: 'es', PA: 'es', UY: 'es', PR: 'es', GQ: 'es',
  // French
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr', SN: 'fr', CI: 'fr', CM: 'fr', ML: 'fr',
  BF: 'fr', NE: 'fr', TG: 'fr', BJ: 'fr', GN: 'fr', CD: 'fr', CG: 'fr', GA: 'fr',
  TD: 'fr', MG: 'fr', HT: 'fr',
  // Chinese (Simplified)
  CN: 'zh',
};

type Ranked = { tag: string; q: number };

export function parseAcceptLanguage(header: string | null | undefined): Ranked[] {
  if (!header) return [];
  return header
    .split(',')
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(';');
      const qParam = params.find((p) => p.trim().startsWith('q='));
      const q = qParam ? parseFloat(qParam.split('=')[1]) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q, i };
    })
    .filter((r) => r.tag && r.tag !== '*' && r.q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i)
    .map(({ tag, q }) => ({ tag, q }));
}

/** "zh-CN" and "zh-Hans" map to "zh", "es-MX" to "es", and so on. */
function toSupported(tag: string): Locale | 'other' {
  const base = tag.split('-')[0];
  return isLocale(base) ? base : 'other';
}

/**
 * Picks the language to show a first-time visitor.
 *
 * 1. If their browser lists a language we offer other than English first, use
 *    it. They asked for it explicitly.
 * 2. Otherwise (English, or nothing useful) their country decides: a visitor in
 *    Mexico, France or China sees their own language even on an English phone.
 *    The switcher, and the saved choice it sets, always overrides this.
 * 3. Otherwise the first offered language the browser lists, or English.
 */
export function detectLocale(
  acceptLanguage: string | null | undefined,
  country: string | null | undefined
): Locale {
  let firstSupported: Locale | undefined;
  for (const { tag } of parseAcceptLanguage(acceptLanguage)) {
    const match = toSupported(tag);
    if (match === 'other') continue;
    firstSupported = match;
    break;
  }
  if (firstSupported && firstSupported !== defaultLocale) return firstSupported;
  const c = country?.toUpperCase();
  if (c && COUNTRY_DEFAULTS[c]) return COUNTRY_DEFAULTS[c];
  return firstSupported ?? defaultLocale;
}

export const BOT_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|whatsapp|telegram|linkedin|pinterest|lighthouse/i;
