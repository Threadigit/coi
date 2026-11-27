'use client';

import Image from 'next/image';
import LocalizedLink from '@/i18n/Link';
import { useEffect, useRef } from 'react';
import type { Episode } from '@/lib/episodes';

type Group = { id: string; label: string; range: string; items: Episode[] };
type Labels = { watchStory: string; continues: string; continuesText: string; exploreArchive: string };

const fill = { fontVariationSettings: "'FILL' 1" } as const;

export default function InnovationTimeline({ groups, labels }: { groups: Group[]; labels: Labels }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wrap = wrapRef.current;
    const line = fillRef.current;
    if (!wrap) return;

    if (reduce) {
      if (line) line.style.height = '100%';
      return;
    }

    // Grow the gold progress line as the chronicle scrolls past the viewport centre.
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!line) return;
      const rect = wrap.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55;
      const passed = Math.min(Math.max(anchor - rect.top, 0), rect.height);
      line.style.height = `${(passed / rect.height) * 100}%`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative max-w-4xl">
      {/* Rail: faint base line + gold progress fill */}
      <div className="absolute top-2 bottom-2 left-[22px] md:left-[30px] w-[2px] rounded-full bg-white/[0.08]" aria-hidden="true" />
      <div
        ref={fillRef}
        className="absolute top-2 left-[22px] md:left-[30px] w-[2px] rounded-full bg-gradient-to-b from-primary/0 via-primary to-primary "
        style={{ height: 0 }}
        aria-hidden="true"
      />

      {groups.map((group) => (
        <section key={group.id} className="relative">
          {/* Era divider */}
          <div className="relative pl-14 md:pl-24 mt-20 first:mt-0 mb-14" data-reveal>
            <div className="absolute left-[22px] md:left-[30px] top-1 -translate-x-1/2 w-5 h-5 rounded-full bg-surface border-2 border-primary/60 " aria-hidden="true" />
            <span className="eyebrow block mb-3">{group.range}</span>
            <h3 className="serif-display text-3xl md:text-5xl tracking-[-0.03em] text-on-surface">{group.label}</h3>
          </div>

          {/* Episodes in this era */}
          {group.items.map((e) => (
            <div key={e.slug} className="relative pl-14 md:pl-24 mb-16 md:mb-20" data-reveal>
              {/* Node */}
              <div className="absolute left-[22px] md:left-[30px] top-2 -translate-x-1/2 z-10" aria-hidden="true">
                <div className="w-11 h-11 rounded-full glass flex items-center justify-center  transition-transform duration-500 group-hover/card:scale-110 group-hover/card:border-primary/50">
                  <span className="material-symbols-outlined text-primary text-xl" style={fill}>{e.icon}</span>
                </div>
              </div>

              {/* Card */}
              <LocalizedLink
                href={e.href}
                className="group/card block max-w-xl card-glass rounded-sm overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={e.heroImage}
                    alt={e.innovation}
                    fill
                    sizes="(max-width: 768px) 100vw, 36rem"
                    className="object-cover saturate-[.6] group-hover/card:saturate-100 transition-all duration-[900ms] ease-[var(--ease-spring)] group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-2 bg-black/55 backdrop-blur-sm px-2.5 py-1.5">
                    <span className="material-symbols-outlined text-primary text-base" style={fill}>{e.icon}</span>
                    <span className="text-[12px] font-semibold tracking-[0.02em] text-on-surface">{e.innovation}</span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <span className="serif-display text-primary text-4xl italic block mb-3 tracking-[-0.02em]">{e.year}</span>
                  <p className="text-on-surface/70 leading-relaxed mb-5">{e.blurb}</p>
                  <span className="link-arrow">
                    {labels.watchStory}
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                  </span>
                </div>
              </LocalizedLink>
            </div>
          ))}
        </section>
      ))}

      {/* The story continues */}
      <div className="relative pl-14 md:pl-24 mt-20" data-reveal>
        <div className="absolute left-[22px] md:left-[30px] top-1 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-dashed border-primary/40 animate-pulse" aria-hidden="true" />
        <span className="eyebrow block mb-3">{labels.continues}</span>
        <h3 className="serif-display text-2xl md:text-3xl text-on-surface/70 italic max-w-xl tracking-[-0.02em]">
          {labels.continuesText}
        </h3>
        <LocalizedLink
          href="/archive"
          className="link-arrow mt-6"
        >
          {labels.exploreArchive}
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
        </LocalizedLink>
      </div>
    </div>
  );
}
