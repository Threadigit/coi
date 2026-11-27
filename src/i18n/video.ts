import type { Locale } from './config';
import { localeMeta } from './config';
import type { EpisodeData } from '@/lib/episode-data';

/** The video to show a reader: their language's own upload if there is one. */
export function videoIdFor(ep: Pick<EpisodeData, 'videoId' | 'videoIds'>, lang: Locale) {
  return ep.videoIds?.[lang] ?? ep.videoId;
}

/** True when this language has a dedicated upload (so no caption request is needed). */
export function hasDedicatedVideo(ep: Pick<EpisodeData, 'videoIds'>, lang: Locale) {
  return !!ep.videoIds?.[lang];
}

/**
 * YouTube player URL for a language. `hl` switches the player's interface,
 * and for translated languages we ask for captions in the reader's language
 * (shown when the video has them, including YouTube's automatic translation).
 */
export function embedUrl(ep: Pick<EpisodeData, 'videoId' | 'videoIds'>, lang: Locale) {
  const id = videoIdFor(ep, lang);
  const p = new URLSearchParams({ rel: '0', hl: localeMeta[lang].ytHl });
  if (lang !== 'en' && !hasDedicatedVideo(ep, lang)) {
    p.set('cc_lang_pref', localeMeta[lang].ytCaption);
    p.set('cc_load_policy', '1');
  }
  return `https://www.youtube.com/embed/${id}?${p.toString()}`;
}

export function watchUrl(ep: Pick<EpisodeData, 'videoId' | 'videoIds'>, lang: Locale, startSeconds?: number) {
  const p = new URLSearchParams({ v: videoIdFor(ep, lang), hl: localeMeta[lang].ytHl });
  if (startSeconds !== undefined) p.set('t', `${startSeconds}s`);
  return `https://www.youtube.com/watch?${p.toString()}`;
}
