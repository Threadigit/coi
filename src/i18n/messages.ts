import en from './messages/en.json';
import es from './messages/es.json';
import fr from './messages/fr.json';
import zh from './messages/zh.json';
import type { Locale } from './config';

export type Messages = typeof en;

// Typed against English, so a missing or misspelled key in any language is a
// compile error rather than a blank on the page.
const all: Record<Locale, Messages> = { en, es, fr, zh };

export function getMessages(locale: Locale): Messages {
  return all[locale];
}

/** The small slice of text that client components need. */
export function getUiMessages(locale: Locale) {
  const m = all[locale];
  return { nav: m.nav, common: m.common, newsletter: m.newsletter, notFound: m.notFound, legal: { ...m.legal, privacyTitle: m.meta.privacyTitle, termsTitle: m.meta.termsTitle } };
}
export type UiMessages = ReturnType<typeof getUiMessages>;

export function format(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
