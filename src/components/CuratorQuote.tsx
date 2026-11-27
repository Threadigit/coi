'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Token = { text: string; em: boolean };

/**
 * Splits translated markup into the pieces that light up one by one. Uses the
 * browser's word segmenter, so Chinese (no spaces) breaks into real words, and
 * keeps punctuation and spaces attached to the word they belong to.
 */
function toTokens(markup: string, locale: string): Token[] {
  const tokens: Token[] = [];
  let prefix = '';
  markup.split(/(<em>.*?<\/em>)/g).filter(Boolean).forEach((part) => {
    const em = part.startsWith('<em>');
    const text = em ? part.slice(4, -5) : part;
    const segments: { segment: string; isWordLike?: boolean }[] =
      typeof Intl !== 'undefined' && 'Segmenter' in Intl
        ? Array.from(new Intl.Segmenter(locale, { granularity: 'word' }).segment(text))
        : text.split(/(\s+)/).filter(Boolean).map((segment) => ({ segment, isWordLike: !/^\s+$/.test(segment) }));
    segments.forEach((seg) => {
      if (seg.isWordLike) {
        tokens.push({ text: prefix + seg.segment, em });
        prefix = '';
      } else if (tokens.length && !/^[\u201C\u2018"'(\[]+$/.test(seg.segment)) {
        tokens[tokens.length - 1].text += seg.segment;
      } else {
        prefix += seg.segment;
      }
    });
  });
  if (prefix && tokens.length) tokens[tokens.length - 1].text += prefix;
  return tokens;
}

const STEP = 65; // ms between words

/**
 * The curator's statement as one compact scene. When it scrolls into view the
 * portrait is drawn in, the quote lights up word by word, and the signature
 * lands last. No scroll hijacking: it plays once and stays lit. Reduced-motion
 * visitors see everything immediately.
 */
export default function CuratorQuote({
  htmlLang,
  kicker,
  quote,
  mission,
  name,
  role,
  alt,
  href,
}: {
  htmlLang: string;
  kicker: string;
  /** Translated quote; <em>..</em> marks the gold word. */
  quote: string;
  mission: string;
  name: string;
  role: string;
  alt: string;
  href: string;
}) {
  const tokens = toTokens(quote, htmlLang);
  const plainQuote = tokens.map((t) => t.text).join('');
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

  const signatureDelay = tokens.length * STEP + 250;

  return (
    <section ref={ref} className="scene relative bg-[#05070a] px-5 md:px-12 py-16 md:py-28 lg:py-32" aria-label={kicker}>
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-24">
        {/* Portrait, drawn in from the bottom */}
        <Link href={href} className="group relative block w-full max-w-[26rem] justify-self-center md:justify-self-start" aria-label={`${name}, ${role}`}>
          <div
            className="relative aspect-square md:aspect-[3/4] overflow-hidden bg-surface-container"
            style={{
              clipPath: lit ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
              transition: 'clip-path 1.3s cubic-bezier(0.76, 0, 0.24, 1)',
            }}
          >
            <Image
              src="/avatar.png"
              alt={alt}
              fill
              sizes="(max-width: 1024px) 90vw, 26rem"
              className="object-cover object-top saturate-[.85] transition-[transform,filter] duration-[2200ms] ease-[var(--ease-spring)] group-hover:saturate-100"
              style={{ transform: lit ? 'scale(1)' : 'scale(1.18)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <span className="block text-primary serif-display italic text-2xl">{name}</span>
              <span className="kicker !tracking-[0.3em] !text-on-surface/70 mt-1.5 block">{role}</span>
            </div>
          </div>
        </Link>

        {/* Statement */}
        <div className="relative">
          <div className="kicker relative mb-6 md:mb-8 !text-primary">{kicker}</div>
          <p className="title-card relative text-[1.75rem] sm:text-4xl md:text-[2.2rem] lg:text-[3.1rem] xl:text-[3.6rem] text-on-surface" aria-label={plainQuote}>
            <span aria-hidden="true">
              {tokens.map((tk, i) => (
                <span
                  key={i}
                  className={tk.em ? 'italic text-primary' : ''}
                  style={{
                    opacity: lit ? 1 : 0.14,
                    transition: 'opacity 0.7s ease',
                    transitionDelay: lit ? `${i * STEP}ms` : '0ms',
                  }}
                >
                  {tk.text}
                </span>
              ))}
            </span>
          </p>

          <p
            className="mt-7 md:mt-9 max-w-xl text-on-surface/65 text-[15px] md:text-lg leading-relaxed"
            style={{
              opacity: lit ? 1 : 0,
              transition: 'opacity 1s ease',
              transitionDelay: lit ? `${signatureDelay}ms` : '0ms',
            }}
          >
            {mission}
          </p>
        </div>
      </div>
    </section>
  );
}
