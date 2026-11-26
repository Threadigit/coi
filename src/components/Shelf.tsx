'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

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

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

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
      <div ref={ref} onScroll={measure} className="shelf -mx-6 px-6 md:-mx-12 md:px-12 scroll-pl-6 md:scroll-pl-12" tabIndex={-1}>
        {children}
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
