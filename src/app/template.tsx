'use client';

import { useLayoutEffect } from 'react';

/**
 * Wraps every page. Drives the site-wide scroll reveal: any element with a
 * `data-reveal` attribute eases in as it enters the viewport. Elements already
 * on screen are marked visible *before* the reveal styles are armed, so there
 * is never a flash of hidden content, and nothing is hidden at all without JS
 * or for reduced-motion users (see globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
    );

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const vh = window.innerHeight;
    const pending: HTMLElement[] = [];
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add('is-visible');
      else pending.push(el);
    });
    root.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <div className="page-transition">{children}</div>;
}
