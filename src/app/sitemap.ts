import { MetadataRoute } from 'next';
import { episodeBases } from '@/lib/episodes';
import { locales, localeMeta, localizedPath } from '@/i18n/config';

const baseUrl = 'https://chroniclesofinnovation.com';

// Internal, indexable pages only. A sitemap must contain URLs on this domain;
// YouTube watch links are intentionally excluded (they live off-site and are
// surfaced via the archive, not as internal pages).
// Every page is listed once per language, each carrying the full set of
// language alternates so search engines pair the translations.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: {
    path: string;
    lastModified: Date;
    changeFrequency: 'weekly' | 'monthly' | 'yearly';
    priority: number;
  }[] = [
    { path: '/', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { path: '/archive', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { path: '/timeline', lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { path: '/about', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { path: '/privacy', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    // Episode pages, generated from the curated catalog with real publish dates.
    ...episodeBases.map((e) => ({
      path: e.href,
      lastModified: new Date(e.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return pages.flatMap((p) => {
    const languages = {
      ...Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, `${baseUrl}${localizedPath(l, p.path)}`])),
      'x-default': `${baseUrl}${localizedPath('en', p.path)}`,
    };
    return locales.map((l) => ({
      url: `${baseUrl}${localizedPath(l, p.path)}`,
      lastModified: p.lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      alternates: { languages },
    }));
  });
}
