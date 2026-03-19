import { MetadataRoute } from 'next';
import { getLatestVideos } from '@/lib/youtube';

const CHANNEL_ID = 'UCKU6JFP0__kQ12KSgvtroLQ';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://chroniclesofinnovation.com';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/archive`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/episode/the-silicon-chip`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic routes from YouTube
  let videoRoutes: MetadataRoute.Sitemap = [];
  try {
    const videos = await getLatestVideos(CHANNEL_ID);
    videoRoutes = videos.map((video) => ({
      url: video.link,
      lastModified: new Date(video.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Sitemap: Failed to fetch dynamic video routes', error);
  }

  return [...staticRoutes, ...videoRoutes];
}
