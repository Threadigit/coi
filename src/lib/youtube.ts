import Parser from 'rss-parser';

type CustomFeed = { title: string };
type CustomItem = { 'media:group': any; id?: string };

const parser = new Parser<CustomFeed, CustomItem>({
  customFields: {
    item: ['media:group'],
  }
});

export interface YouTubeVideo {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  publishedAt: string;
}

export async function getLatestVideos(channelId: string): Promise<YouTubeVideo[]> {
  try {
    const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
    return feed.items.slice(0, 6).map((item) => {
      const videoId = item.id?.replace('yt:video:', '') || '';
      return {
        id: videoId,
        title: item.title || '',
        link: item.link || '',
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        publishedAt: item.isoDate || '',
      };
    });
  } catch (error) {
    console.error("Error fetching YouTube RSS:", error);
    return [];
  }
}
