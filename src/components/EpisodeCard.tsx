import Image from 'next/image';
import Link from 'next/link';
import { eras, type Episode } from '@/lib/episodes';

const fill = { fontVariationSettings: "'FILL' 1" } as const;

/**
 * Landscape "poster" card used on the home shelf and the archive grid.
 * Artwork on top with a glass innovation tag, copy beneath.
 */
export default function EpisodeCard({
  episode,
  image,
  eyebrow = 'Archive',
  showDate = false,
  className = '',
}: {
  episode: Episode;
  image?: string;
  eyebrow?: string;
  showDate?: boolean;
  className?: string;
}) {
  return (
    <Link href={episode.href} className={`group block ${className}`}>
      <div className="relative aspect-video overflow-hidden rounded-[1.375rem] bg-surface-container ring-1 ring-white/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] transition-all duration-700 ease-[var(--ease-spring)] group-hover:-translate-y-1.5 group-hover:scale-[1.025] group-hover:ring-primary/40 group-hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,1),0_0_60px_-20px_var(--gold-glow)]">
        <Image
          src={image ?? episode.heroImage}
          alt={episode.title}
          fill
          sizes="(max-width: 768px) 82vw, (max-width: 1280px) 40vw, 32rem"
          className="object-cover saturate-[.7] transition-all duration-[900ms] ease-[var(--ease-spring)] group-hover:saturate-100 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />
        <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full glass px-3 py-1.5">
          <span className="material-symbols-outlined text-primary" style={{ ...fill, fontSize: 15 }}>{episode.icon}</span>
          <span className="text-[11px] font-semibold tracking-[0.02em] text-on-surface">{episode.innovation}</span>
        </div>
        <div className="absolute bottom-3.5 right-3.5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-black opacity-0 scale-75 transition-all duration-500 ease-[var(--ease-spring)] group-hover:opacity-100 group-hover:scale-100">
          <span className="material-symbols-outlined" style={fill}>play_arrow</span>
        </div>
        {!image && <span className="absolute bottom-3 left-4 font-headline italic text-3xl text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">{episode.year}</span>}
      </div>
      <div className="mt-5 space-y-2 px-1">
        <div className="eyebrow !text-[10px] flex items-center justify-between gap-4">
          <span>{eyebrow}</span>
          <span className="!text-on-surface/45 truncate">{eras.find((e) => e.id === episode.era)?.label}</span>
        </div>
        <h3 className="font-headline text-[1.4rem] leading-snug tracking-[-0.01em] text-on-surface transition-colors duration-300 group-hover:text-primary line-clamp-2">{episode.title}</h3>
        <p className="text-[15px] leading-relaxed text-on-surface/55 line-clamp-2">{episode.blurb}</p>
        {showDate && (
          <p className="text-xs text-on-surface/40">Published: {new Date(episode.publishedAt).toLocaleDateString()}</p>
        )}
      </div>
    </Link>
  );
}
