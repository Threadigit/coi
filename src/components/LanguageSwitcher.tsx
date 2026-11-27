'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from '@/i18n/context';
import {
  LOCALE_COOKIE,
  localeMeta,
  locales,
  localizedPath,
  stripLocale,
  type Locale,
} from '@/i18n/config';

function choose(next: Locale) {
  // Remember the choice so the proxy stops auto-detecting for this visitor.
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
  const { pathname, search, hash } = window.location;
  // A full navigation, so <html lang>, fonts and the dictionary all reset cleanly.
  window.location.assign(localizedPath(next, stripLocale(pathname)) + search + hash);
}

/** Desktop: a compact globe button with a dropdown. */
export function LanguageMenu() {
  const { lang, ui } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${ui.nav.language}: ${localeMeta[lang].name}`}
        className="flex h-11 items-center gap-2 px-1 text-[12px] font-medium uppercase tracking-[0.12em] text-on-surface/70 transition-colors hover:text-on-surface"
      >
        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>language</span>
        <span>{localeMeta[lang].short}</span>
      </button>
      {open && (
        <ul className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] border border-white/15 bg-[#0f1419]/95 py-1 backdrop-blur-md">
          {locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                lang={localeMeta[l].htmlLang}
                aria-current={l === lang ? 'true' : undefined}
                onClick={() => (l === lang ? setOpen(false) : choose(l))}
                className={`flex w-full items-center justify-between gap-6 px-4 py-3 text-left text-[14px] transition-colors hover:bg-white/10 ${
                  l === lang ? 'text-primary' : 'text-on-surface/85'
                }`}
              >
                {localeMeta[l].name}
                {l === lang && <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Mobile menu: all languages visible at once. */
export function LanguageList() {
  const { lang, ui } = useLocale();
  return (
    <div className="mt-10">
      <div className="kicker mb-4 !text-on-surface/50">{ui.nav.language}</div>
      <div className="grid grid-cols-2 gap-2">
        {locales.map((l) => (
          <button
            key={l}
            type="button"
            lang={localeMeta[l].htmlLang}
            aria-current={l === lang ? 'true' : undefined}
            onClick={() => (l === lang ? undefined : choose(l))}
            className={`flex min-h-12 items-center justify-center border px-4 text-[15px] transition-colors ${
              l === lang
                ? 'border-primary text-primary'
                : 'border-white/20 text-on-surface/85 active:bg-white/10'
            }`}
          >
            {localeMeta[l].name}
          </button>
        ))}
      </div>
    </div>
  );
}
