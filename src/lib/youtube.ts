import Parser from 'rss-parser';

type CustomFeed = { title: string };
type CustomItem = { 'media:group': any; id?: string };

const parser = new Parser<CustomFeed, CustomItem>({
  customFields: {
    item: ['media:group'],
  }
});

// Number of videos shown per page in the archive.
export const PAGE_SIZE = 6;

// Editorial tags per video (YouTube RSS carries no categories of its own).
// Keys are the YouTube video id; values are archive filter/era slugs.
const VIDEO_CATEGORIES: Record<string, string[]> = {
  otqgociwb3o: ["industrial"], // Edison vs. Tesla — Age of Electricity / Industrial
};

export interface YouTubeVideo {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  publishedAt: string;
  categories: string[];
}

export async function getLatestVideos(channelId: string): Promise<YouTubeVideo[]> {
  try {
    const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
    return feed.items.slice(0, PAGE_SIZE).map((item) => {
      const videoId = item.id?.replace('yt:video:', '') || '';
      return {
        id: videoId,
        title: item.title || '',
        link: item.link || '',
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        publishedAt: item.isoDate || '',
        categories: VIDEO_CATEGORIES[videoId] || [],
      };
    });
  } catch (error) {
    console.error("Error fetching YouTube RSS:", error);
    return [];
  }
}
