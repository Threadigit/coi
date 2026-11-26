'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const QUOTE = [
  '“Innovation', 'is', 'not', 'merely', 'a', 'sequence', 'of', 'inventions,', 'but', 'the',
  'enduring', 'narrative', 'of', 'human', 'curiosity', 'refusing', 'to', 'stay', 'silent.”',
];
const STEP = 65; // ms between words

/**
 * The curator's statement as one compact scene. When it scrolls into view the
 * portrait is drawn in, the quote lights up word by word, and the signature
 * lands last. No scroll hijacking: it plays once and stays lit. Reduced-motion
 * visitors see everything immediately.
 */
export default function CuratorQuote() {
  const ref = useRef<HTMLElement>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      // Defer so the first paint is the settled state without a sync setState.
      const id = requestAnimationFrame(() => setLit(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLit(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const signatureDelay = QUOTE.length * STEP + 250;

  return (
    <section ref={ref} className="scene relative bg-[#05070a] px-5 md:px-12 py-16 md:py-28 lg:py-32" aria-label="Philosophy of Progress">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-24">
        {/* Portrait, drawn in from the bottom */}
        <Link href="/about" className="group relative block w-full max-w-[26rem] justify-self-center md:justify-self-start" aria-label="Tolu Adetuyi, Executive Curator">
          <div
            className="relative aspect-square md:aspect-[3/4] overflow-hidden bg-surface-container"
            style={{
              clipPath: lit ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
              transition: 'clip-path 1.3s cubic-bezier(0.76, 0, 0.24, 1)',
            }}
          >
            <Image
              src="/avatar.png"
              alt="Executive Curator Portrait"
              fill
              sizes="(max-width: 1024px) 90vw, 26rem"
              className="object-cover object-top saturate-[.85] transition-[transform,filter] duration-[2200ms] ease-[var(--ease-spring)] group-hover:saturate-100"
              style={{ transform: lit ? 'scale(1)' : 'scale(1.18)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </Link>

        {/* Statement */}
        <div className="relative">
          <div className="kicker relative mb-6 md:mb-8 !text-primary">Philosophy of Progress</div>
          <p className="title-card relative text-[1.75rem] sm:text-4xl md:text-[2.2rem] lg:text-[3.1rem] xl:text-[3.6rem] text-on-surface" aria-label={QUOTE.join(' ')}>
            <span aria-hidden="true">
              {QUOTE.map((w, i) => (
                <span
                  key={i}
                  className={w.startsWith('inventions') ? 'italic text-primary' : ''}
                  style={{
                    opacity: lit ? 1 : 0.14,
                    transition: 'opacity 0.7s ease',
                    transitionDelay: lit ? `${i * STEP}ms` : '0ms',
                  }}
                >
                  {w}{' '}
                </span>
              ))}
            </span>
          </p>

          <div
            className="mt-7 md:mt-9 flex items-center gap-5"
            style={{
              opacity: lit ? 1 : 0,
              transform: lit ? 'none' : 'translateY(10px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
              transitionDelay: lit ? `${signatureDelay}ms` : '0ms',
            }}
          >
            <span className="h-px w-10 md:w-14 bg-primary" aria-hidden="true" />
            <span>
              <span className="block text-primary serif-display italic text-xl md:text-2xl">Tolu Adetuyi</span>
              <span className="kicker !tracking-[0.3em] !text-on-surface/60 mt-1 block">Executive Curator</span>
            </span>
          </div>

          <p
            className="mt-8 md:mt-10 max-w-xl text-on-surface/65 text-[15px] md:text-lg leading-relaxed"
            style={{
              opacity: lit ? 1 : 0,
              transition: 'opacity 1s ease',
              transitionDelay: lit ? `${signatureDelay + 350}ms` : '0ms',
            }}
          >
            Our mission at Chronicles of Innovation is to archive the sparks that ignited entire eras. We don&apos;t just show you what was built; we show you why it mattered to the soul of humanity.
          </p>
        </div>
      </div>
    </section>
  );
}
