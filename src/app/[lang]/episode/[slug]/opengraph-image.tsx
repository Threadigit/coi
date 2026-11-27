import { locales, isLocale, defaultLocale } from '@/i18n/config';
import { episodeBases } from '@/lib/episodes';
import { OG_SIZE, renderEpisodeOg } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Chronicles of Innovation';

export function generateStaticParams() {
  return locales.flatMap((lang) => episodeBases.map((e) => ({ lang, slug: e.slug })));
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  return renderEpisodeOg(isLocale(lang) ? lang : defaultLocale, slug);
}
