import Image from 'next/image';
import Link from 'next/link';
import { localizedPath, type Locale } from '@/i18n/config';
import type { Episode } from '@/lib/episodes';

const fill = { fontVariationSettings: "'FILL' 1" } as const;

/**
 * Landscape "poster" card used on the home shelf and the archive grid.
 * Artwork on top with a glass innovation tag, copy beneath.
 */
export default function EpisodeCard({
  episode,
  lang,
  eraLabel,
  image,
  eyebrow,
  publishedText,
  className = '',
}: {
  episode: Episode;
  lang: Locale;
  eraLabel: string;
  image?: string;
  eyebrow: string;
  /** Already formatted, e.g. "Published: 9/26/2026". Omit to hide. */
  publishedText?: string;
  className?: string;
}) {
  return (
    <Link href={localizedPath(lang, episode.href)} className={`group block ${className}`}>
      <div className="relative aspect-video overflow-hidden bg-surface-container">
        <Image
          src={image ?? episode.heroImage}
          alt={episode.title}
          fill
          sizes="(max-width: 768px) 82vw, (max-width: 1280px) 40vw, 32rem"
          className="object-cover saturate-[.75] transition-all duration-[1200ms] ease-[var(--ease-spring)] group-hover:saturate-100 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 bg-black/55 px-2.5 py-1.5 backdrop-blur-sm">
          <span className="material-symbols-outlined text-primary" style={{ ...fill, fontSize: 14 }}>{episode.icon}</span>
          <span className="eyebrow !text-[10px] !text-on-surface">{episode.innovation}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-700 ease-[var(--ease-spring)] group-hover:scale-x-100" />
      </div>
      <div className="mt-5 space-y-2.5">
        <div className="eyebrow !text-[10px] flex items-center justify-between gap-4">
          <span>{eyebrow}</span>
          <span className="!text-on-surface/45 truncate">{eraLabel} &middot; {episode.year}</span>
        </div>
        <h3 className="font-headline text-[1.4rem] leading-snug tracking-[-0.01em] text-on-surface transition-colors duration-300 group-hover:text-primary line-clamp-2">{episode.title}</h3>
        <p className="text-[15px] leading-relaxed text-on-surface/55 line-clamp-2">{episode.blurb}</p>
        {publishedText && <p className="text-xs text-on-surface/40">{publishedText}</p>}
      </div>
    </Link>
  );
}
