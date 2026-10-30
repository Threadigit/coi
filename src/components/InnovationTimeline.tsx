'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { episodesByEra } from '@/lib/episodes';

const fill = { fontVariationSettings: "'FILL' 1" } as const;

export default function InnovationTimeline() {
  const groups = episodesByEra();
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wrap = wrapRef.current;
    const line = fillRef.current;
    if (!wrap) return;

    if (reduce) {
      if (line) line.style.height = '100%';
      return;
    }

    setAnimate(true);

    // Reveal each node/card as it scrolls into view.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );
    wrap.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

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
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative max-w-3xl mx-auto ${animate ? 'timeline-animate' : ''}`}>
      {/* Rail: faint base line + gold progress fill */}
      <div className="absolute top-2 bottom-2 left-[22px] md:left-[30px] w-[2px] bg-outline-variant/20" aria-hidden="true" />
      <div
        ref={fillRef}
        className="absolute top-2 left-[22px] md:left-[30px] w-[2px] bg-gradient-to-b from-primary/0 via-primary to-primary"
        style={{ height: 0 }}
        aria-hidden="true"
      />

      {groups.map((group) => (
        <section key={group.id} className="relative">
          {/* Era divider */}
          <div className="relative pl-16 md:pl-24 mt-20 first:mt-0 mb-14" data-reveal>
            <div className="absolute left-[22px] md:left-[30px] top-1 -translate-x-1/2 w-5 h-5 rounded-full bg-surface border-2 border-primary/50 shadow-[0_0_0_5px_var(--color-surface)]" aria-hidden="true" />
            <span className="font-label text-[10px] uppercase tracking-[0.35em] text-secondary block mb-2">{group.range}</span>
            <h3 className="serif-display text-3xl md:text-5xl text-on-surface">{group.label}</h3>
          </div>

          {/* Episodes in this era */}
          {group.items.map((e) => (
            <div key={e.slug} className="relative pl-16 md:pl-24 mb-16 md:mb-20" data-reveal>
              {/* Node */}
              <div className="absolute left-[22px] md:left-[30px] top-2 -translate-x-1/2 z-10" aria-hidden="true">
                <div className="w-11 h-11 rounded-full bg-surface-container-high border border-primary/40 flex items-center justify-center shadow-[0_0_0_5px_var(--color-surface)] transition-transform duration-500 group-hover/card:scale-110">
                  <span className="material-symbols-outlined text-primary text-xl" style={fill}>{e.icon}</span>
                </div>
              </div>

              {/* Card */}
              <Link
                href={e.href}
                className="group/card block max-w-xl bg-surface-container/50 hover:bg-surface-container border border-outline-variant/15 hover:border-primary/30 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={e.heroImage}
                    alt={e.innovation}
                    fill
                    sizes="(max-width: 768px) 100vw, 36rem"
                    className="object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base" style={fill}>{e.icon}</span>
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface font-semibold">{e.innovation}</span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <span className="serif-display text-primary text-3xl italic block mb-3">{e.year}</span>
                  <p className="font-body text-slate-300 leading-relaxed mb-5">{e.blurb}</p>
                  <span className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary">
                    Watch the story
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/card:translate-x-1">arrow_forward</span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </section>
      ))}

      {/* The story continues */}
      <div className="relative pl-16 md:pl-24 mt-20" data-reveal>
        <div className="absolute left-[22px] md:left-[30px] top-1 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-dashed border-primary/40 animate-pulse" aria-hidden="true" />
        <span className="font-label text-[10px] uppercase tracking-[0.35em] text-secondary block mb-2">The Chronicle Continues</span>
        <h3 className="serif-display text-2xl md:text-3xl text-on-surface-variant italic max-w-xl">
          New chapters are being written. The next breakthrough is already waiting to be told.
        </h3>
        <Link
          href="/archive"
          className="inline-flex items-center gap-2 mt-6 font-label text-[10px] uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all"
        >
          Explore the full archive
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
