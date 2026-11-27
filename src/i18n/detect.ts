import { defaultLocale, isLocale, type Locale } from './config';

/**
 * Countries where a supported language is the clear everyday default. Used
 * only as a fallback when the browser gives no usable language signal.
 * Edit freely: it is data, not logic.
 */
export const COUNTRY_DEFAULTS: Record<string, Locale> = {
  // Spanish
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es',
  GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es',
  CR: 'es', PA: 'es', UY: 'es', PR: 'es', GQ: 'es',
  // Chinese (Simplified)
  CN: 'zh', SG: 'zh',
  // Hindi
  IN: 'hi',
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
 * 1. The browser's ranked language list. The first language we recognise wins,
 *    which also means someone who ranks English first stays on English.
 * 2. If the browser says nothing useful (no header, or only languages we do not
 *    offer), fall back to the visitor's country.
 * 3. Otherwise English.
 */
export function detectLocale(
  acceptLanguage: string | null | undefined,
  country: string | null | undefined
): Locale {
  for (const { tag } of parseAcceptLanguage(acceptLanguage)) {
    const match = toSupported(tag);
    if (match !== 'other') return match;
  }
  const c = country?.toUpperCase();
  if (c && COUNTRY_DEFAULTS[c]) return COUNTRY_DEFAULTS[c];
  return defaultLocale;
}

export const BOT_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|whatsapp|telegram|linkedin|pinterest|lighthouse/i;
