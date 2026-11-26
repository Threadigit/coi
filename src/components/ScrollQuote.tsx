'use client';

import { useEffect, useRef } from 'react';

/**
 * A title-sequence style quote: the words light up one by one as the scene
 * scrolls through the viewport. The scene is tall and the text is pinned in a
 * sticky frame. Reduced-motion users get the fully lit quote.
 */
export default function ScrollQuote({
  words,
  highlight = [],
  kicker,
  children,
}: {
  words: string[];
  highlight?: string[];
  kicker?: string;
  children?: React.ReactNode;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const set = (n: number) =>
      refs.current.forEach((el, i) => {
        if (el) el.style.opacity = i < n ? '1' : '0.16';
      });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      set(words.length);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = scene.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(Math.max(-r.top / total, 0), 1);
      set(Math.round(p * 1.15 * words.length));
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
  }, [words.length]);

  return (
    <div ref={sceneRef} className="relative h-[210svh] bg-[#05070a]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1500px] px-5 md:px-12">
          {kicker && <div className="kicker mb-8 !text-primary">{kicker}</div>}
          <p className="title-card text-[1.9rem] sm:text-5xl lg:text-[4.75rem] text-on-surface" aria-label={words.join(' ')}>
            <span aria-hidden="true">
              {words.map((w, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  style={{ opacity: 0.16, transition: 'opacity 0.5s ease' }}
                  className={highlight.includes(w.replace(/[^a-z]/gi, '').toLowerCase()) ? 'italic text-primary' : ''}
                >
                  {w}{' '}
                </span>
              ))}
            </span>
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}
