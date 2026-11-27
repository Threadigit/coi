import { locales, isLocale, defaultLocale } from '@/i18n/config';
import { OG_SIZE, renderSiteOg } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Chronicles of Innovation';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return renderSiteOg(isLocale(lang) ? lang : defaultLocale);
}
