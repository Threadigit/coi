'use client';

import { createContext, useContext } from 'react';
import type { Locale } from './config';
import type { UiMessages } from './messages';

const LocaleContext = createContext<{ lang: Locale; ui: UiMessages } | null>(null);

export function LocaleProvider({
  lang,
  ui,
  children,
}: {
  lang: Locale;
  ui: UiMessages;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={{ lang, ui }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>');
  return ctx;
}
