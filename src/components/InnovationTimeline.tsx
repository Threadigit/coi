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

  let n = 0; // running index across all eras, to alternate sides

  return (
    <div ref={wrapRef} className="relative mx-auto max-w-[1400px]">
      {/* Rail: faint base line + gold progress fill. Left on phones, centred on desktop. */}
      <div className="absolute top-2 bottom-2 left-[22px] lg:left-1/2 w-[2px] lg:-translate-x-1/2 rounded-full bg-white/[0.08]" aria-hidden="true" />
      <div
        ref={fillRef}
        className="absolute top-2 left-[22px] lg:left-1/2 w-[2px] lg:-translate-x-1/2 rounded-full bg-gradient-to-b from-primary/0 via-primary to-primary shadow-[0_0_14px_var(--gold-glow)]"
        style={{ height: 0 }}
        aria-hidden="true"
      />

      {groups.map((group) => (
        <section key={group.id} className="relative">
          {/* Era divider */}
          <div className="relative pl-16 lg:pl-0 lg:text-center mt-24 first:mt-0 mb-14 lg:mb-24" data-reveal>
            <div className="absolute left-[22px] lg:left-1/2 top-1 -translate-x-1/2 w-5 h-5 rounded-full bg-surface border-2 border-primary/60 shadow-[0_0_0_6px_var(--color-surface),0_0_24px_var(--gold-glow)]" aria-hidden="true" />
            <div className="lg:pt-12 lg:mx-auto lg:w-fit lg:bg-surface lg:px-12 lg:pb-4 lg:relative lg:z-[1]">
              <span className="eyebrow block mb-3">{group.range}</span>
              <h3 className="serif-display text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-on-surface">{group.label}</h3>
            </div>
          </div>

          {/* Episodes in this era */}
          {group.items.map((e) => {
            const flip = n++ % 2 === 1; // desktop: card on the right when flipped
            return (
              <div key={e.slug} className="relative pl-16 lg:pl-0 mb-16 lg:mb-28 lg:grid lg:grid-cols-2 lg:gap-x-28 lg:items-center" data-reveal>
                {/* Node on the rail */}
                <div className="absolute left-[22px] lg:left-1/2 top-2 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10" aria-hidden="true">
                  <div className="w-11 h-11 rounded-full bg-surface-container-high border border-primary/40 flex items-center justify-center shadow-[0_0_0_6px_var(--color-surface)] transition-transform duration-500 group-hover/card:scale-110">
                    <span className="material-symbols-outlined text-primary text-xl" style={fill}>{e.icon}</span>
                  </div>
                </div>

                {/* Card */}
                <LocalizedLink
                  href={e.href}
                  className={`group/card block max-w-xl lg:max-w-none card-glass overflow-hidden ${flip ? 'lg:col-start-2 lg:row-start-1' : 'lg:col-start-1 lg:row-start-1'}`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={e.heroImage}
                      alt={e.innovation}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40rem"
                      className="object-cover saturate-[.6] group-hover/card:saturate-100 transition-all duration-[900ms] ease-[var(--ease-spring)] group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-2 bg-black/55 px-3 py-1.5 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-primary text-base" style={fill}>{e.icon}</span>
                      <span className="text-[12px] font-semibold tracking-[0.02em] text-on-surface">{e.innovation}</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="serif-display text-primary text-4xl italic block mb-3 tracking-[-0.02em] lg:hidden">{e.year}</span>
                    <p className="text-on-surface/70 leading-relaxed mb-5 lg:text-lg">{e.blurb}</p>
                    <span className="link-arrow">
                      {labels.watchStory}
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                    </span>
                  </div>
                </LocalizedLink>

                {/* Desktop: the year, set large on the opposite side of the rail */}
                <div className={`hidden lg:block ${flip ? 'lg:col-start-1 lg:row-start-1 text-right' : 'lg:col-start-2 lg:row-start-1 text-left'}`} aria-hidden="true">
                  <span className="serif-display italic text-primary text-[9rem] xl:text-[11rem] leading-none tracking-[-0.05em] block">{e.year}</span>
                  <span className="kicker mt-2 block">{e.innovation}</span>
                </div>
              </div>
            );
          })}
        </section>
      ))}

      {/* The story continues */}
      <div className="relative pl-16 lg:pl-0 mt-24 lg:text-center" data-reveal>
        <div className="absolute left-[22px] lg:left-1/2 top-1 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-dashed border-primary/40 animate-pulse bg-surface" aria-hidden="true" />
        <div className="lg:pt-12 lg:mx-auto lg:w-fit lg:bg-surface lg:px-12 lg:pb-4 lg:relative lg:z-[1]">
          <span className="eyebrow block mb-3">{labels.continues}</span>
          <h3 className="serif-display text-2xl md:text-3xl lg:text-4xl text-on-surface/70 italic max-w-xl lg:mx-auto tracking-[-0.02em]">
            {labels.continuesText}
          </h3>
          <LocalizedLink href="/archive" className="link-arrow mt-6">
            {labels.exploreArchive}
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </LocalizedLink>
        </div>
      </div>
    </div>
  );
}
