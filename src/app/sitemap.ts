import { MetadataRoute } from 'next';
import { episodes } from '@/lib/episodes';

const baseUrl = 'https://chroniclesofinnovation.com';

// Internal, indexable pages only. A sitemap must contain URLs on this domain —
// YouTube watch links are intentionally excluded (they live off-site and are
// surfaced via the archive, not as internal pages).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/archive`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Episode pages, generated from the curated catalog with real publish dates.
  const episodeRoutes: MetadataRoute.Sitemap = episodes.map((episode) => ({
    url: `${baseUrl}${episode.href}`,
    lastModified: new Date(episode.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...episodeRoutes];
}
