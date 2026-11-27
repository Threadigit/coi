import Image from 'next/image';
import Link from 'next/link';
import { localizedPath, type Locale } from '@/i18n/config';
import type { Episode } from '@/lib/episodes';

/**
 * A full "scene" for an episode: edge to edge artwork, deep vignette, title
 * card lower left. Used in the home series reel.
 */
export default function EpisodeScene({
  episode,
  lang,
  eraLabel,
  episodeLabel,
  watchLabel,
  className = '',
}: {
  episode: Episode;
  lang: Locale;
  eraLabel: string;
  /** Already formatted, e.g. "Episode 004". */
  episodeLabel: string;
  watchLabel: string;
  className?: string;
}) {
  return (
    <Link
      href={localizedPath(lang, episode.href)}
      className={`group relative block aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-black ${className}`}
    >
      <Image
        src={episode.heroImage}
        alt={episode.title}
        fill
        sizes="(max-width: 1024px) 88vw, 78vw"
        className="object-cover saturate-[.8] transition-transform duration-[2200ms] ease-[var(--ease-spring)] group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/30" />
      <div className="absolute inset-0 scrim-side opacity-80" />
      <span
        className="pointer-events-none absolute right-5 top-2 font-headline italic leading-none text-white/[0.14] text-[7rem] md:text-[12rem] select-none"
        aria-hidden="true"
      >
        {episode.year}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-10 lg:p-14">
        <div className="kicker mb-4 !text-primary">
          {episodeLabel} <span className="mx-2 text-white/40">/</span> {eraLabel}
        </div>
        <h3 className="title-card text-[1.7rem] md:text-5xl lg:text-6xl text-on-surface max-w-3xl mb-4 md:mb-6">{episode.title}</h3>
        <p className="hidden sm:block text-on-surface/70 text-base md:text-lg leading-relaxed max-w-xl mb-6">{episode.blurb}</p>
        <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-on-surface">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/60 transition-colors duration-500 group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 22 }}>play_arrow</span>
          </span>
          {watchLabel}
        </span>
      </div>
    </Link>
  );
}
