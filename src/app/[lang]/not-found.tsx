'use client';

import LocalizedLink from '@/i18n/Link';
import { useLocale } from '@/i18n/context';
import { rich } from '@/i18n/rich';

export default function NotFound() {
  const { ui } = useLocale();
  const t = ui.notFound;
  return (
    <div className="w-full min-h-[90svh] flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 relative overflow-hidden text-center">
      <span className="kicker rise block mb-8" style={{ ['--d' as string]: 0 }}>{t.kicker}</span>

      <h1 className="rise title-card text-6xl md:text-8xl lg:text-[9rem] text-on-surface mb-8" style={{ ['--d' as string]: 1 }}>
        {rich(t.title, 'italic text-primary pr-2')}
      </h1>

      <p className="rise text-on-surface/60 max-w-xl mx-auto mb-12 text-lg md:text-xl leading-relaxed" style={{ ['--d' as string]: 2 }}>
        {t.text}
      </p>

      <LocalizedLink href="/" className="rise btn btn-primary !px-8 !py-4 !text-[14px]" style={{ ['--d' as string]: 3 }}>
        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>undo</span>
        {t.back}
      </LocalizedLink>
    </div>
  );
}
