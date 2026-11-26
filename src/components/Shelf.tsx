'use client';

import { Children, useCallback, useEffect, useRef, useState } from 'react';

/**
 * A horizontally scrolling, snap-aligned row ("shelf") with glass paddle
 * buttons on pointer devices. Touch users simply swipe.
 */
export default function Shelf({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [index, setIndex] = useState(0);
  const count = Children.count(children);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setEdge({ start: el.scrollLeft <= 4, end: atEnd });
    const max = el.scrollWidth - el.clientWidth;
    setIndex(max > 0 ? Math.round((el.scrollLeft / max) * (count - 1)) : 0);
  }, [count]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const frame = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [measure]);

  const page = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  const paddle =
    'hidden md:grid absolute top-[38%] z-20 h-12 w-12 -translate-y-1/2 place-items-center rounded-full glass text-on-surface transition-all duration-500 hover:scale-110 hover:bg-white/20';

  return (
    <div className="relative group/shelf" role="region" aria-label={label}>
      <div ref={ref} onScroll={measure} className="shelf -mx-5 px-5 md:-mx-12 md:px-12 scroll-pl-5 md:scroll-pl-12" tabIndex={-1}>
        {children}
      </div>
      <div className="mt-8 flex items-center justify-center gap-2 md:hidden" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-on-surface' : 'w-1.5 bg-white/25'}`} />
        ))}
      </div>
      <button
        type="button"
        aria-label="Scroll back"
        onClick={() => page(-1)}
        className={`${paddle} left-2 ${edge.start ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover/shelf:opacity-100 focus-visible:opacity-100'}`}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        type="button"
        aria-label="Scroll forward"
        onClick={() => page(1)}
        className={`${paddle} right-2 ${edge.end ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover/shelf:opacity-100 focus-visible:opacity-100'}`}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
