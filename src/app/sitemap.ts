import { MetadataRoute } from 'next';
import { episodeBases } from '@/lib/episodes';
import { episodeData } from '@/lib/episode-data';
import { locales, localizedPath, hreflangEntries, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';
import { videoIdFor } from '@/i18n/video';
import { SITE_URL, CONTENT_UPDATED } from '@/lib/site';

// Internal, indexable pages only. A sitemap must contain URLs on this domain;
// YouTube watch links are intentionally excluded (they live off-site).
//
// Every page is listed once per language. Each entry carries the complete set
// of language and country alternates so search engines pair the translations,
// and episode pages also carry video and image entries so the documentaries
// can surface in video and image search in every language.

// Next writes video text into the XML as-is, so escape it here.
const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const abs = (p: string) => `${SITE_URL}${p}`;

type Page = {
  path: string;
  lastModified: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Page[] = [
    { path: '/', lastModified: CONTENT_UPDATED.home, changeFrequency: 'weekly', priority: 1 },
    { path: '/archive', lastModified: CONTENT_UPDATED.archive, changeFrequency: 'weekly', priority: 0.9 },
    { path: '/timeline', lastModified: CONTENT_UPDATED.timeline, changeFrequency: 'weekly', priority: 0.8 },
    { path: '/about', lastModified: CONTENT_UPDATED.about, changeFrequency: 'monthly', priority: 0.8 },
    { path: '/privacy', lastModified: CONTENT_UPDATED.legal, changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', lastModified: CONTENT_UPDATED.legal, changeFrequency: 'yearly', priority: 0.3 },
    ...episodeBases.map((e) => ({
      path: e.href,
      lastModified: e.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  const episodeEntry = (path: string, lang: Locale) => {
    const slug = path.replace('/episode/', '');
    const d = episodeData[slug];
    if (!d) return {};
    const e = (getMessages(lang).episodes as Record<string, { videoName: string; videoDescription: string; keywords: string[] }>)[slug];
    const id = videoIdFor(d, lang);
    return {
      images: [...new Set([d.heroImage, ...d.thumbs, ...d.milestoneImages.map((m) => m.src)])].map((src) => abs(src)),
      videos: [
        {
          title: xml(e.videoName).slice(0, 100),
          thumbnail_loc: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
          description: xml(e.videoDescription).slice(0, 2000),
          player_loc: `https://www.youtube.com/embed/${id}`,
          content_loc: `https://www.youtube.com/watch?v=${id}`,
          duration: d.durationSeconds,
          publication_date: d.releaseDate,
          family_friendly: 'yes' as const,
          tag: xml(e.keywords[0]),
        },
      ],
    };
  };

  return pages.flatMap((p) => {
    const languages = Object.fromEntries(hreflangEntries(p.path).map(([code, urlPath]) => [code, abs(urlPath)]));
    return locales.map((l) => ({
      url: abs(localizedPath(l, p.path)),
      lastModified: p.lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      alternates: { languages },
      ...(p.path.startsWith('/episode/') ? episodeEntry(p.path, l) : {}),
    }));
  });
}
