'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Episode } from '@/lib/episodes';

/**
 * Kinetic stacked list of episodes for the hero. One row is "live" at a time
 * (full brightness, gold tag) and the highlight steps down the list. Hovering
 * or focusing pauses it. Hidden on small screens, where the shelf takes over.
 */
export default function HeroIndex({ episodes }: { episodes: Episode[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % episodes.length), 3200);
    return () => window.clearInterval(id);
  }, [paused, episodes.length]);

  return (
    <ol
      className="hidden lg:block w-full max-w-[28rem]"
      aria-label="Episodes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {episodes.map((e, i) => (
        <li key={e.slug} className="border-t border-white/[0.14] last:border-b">
          <Link
            href={e.href}
            onMouseEnter={() => setActive(i)}
            className={`group flex items-baseline justify-between gap-6 py-3.5 transition-all duration-700 ease-[var(--ease-spring)] ${
              active === i ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-2'
            }`}
          >
            <span className="font-headline text-xl leading-snug tracking-[-0.01em] text-on-surface line-clamp-1">{e.innovation}</span>
            <span className={`font-mono-label shrink-0 text-[11px] uppercase tracking-[0.16em] transition-colors duration-500 ${active === i ? 'text-primary' : 'text-on-surface/60'}`}>
              {e.year}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
