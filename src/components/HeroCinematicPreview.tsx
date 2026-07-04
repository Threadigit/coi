'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  /** YouTube video id used for the muted background preview. */
  videoId: string;
  /** Poster / fallback still (also the LCP image on every device). */
  image: string;
  alt: string;
};

/**
 * Cinematic hero background.
 *
 * The still image is always rendered as the fast LCP element (with a subtle
 * Ken Burns drift that is disabled for reduced-motion users via CSS). On
 * capable devices only, a muted, looping, autoplaying preview of the
 * documentary is lazily layered on top and cross-fades in.
 *
 * The video is intentionally skipped on small screens, touch/coarse pointers,
 * reduced-motion, Save-Data, and slow connections so mobile visitors are never
 * served an autoplaying video background.
 */
export default function HeroCinematicPreview({ videoId, image, alt }: Props) {
  const [mountVideo, setMountVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Never override an explicit motion or data preference.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const connection = (navigator as unknown as {
      connection?: { saveData?: boolean; effectiveType?: string; downlink?: number };
    }).connection;
    if (connection?.saveData === true) return;

    const effectiveType = connection?.effectiveType;
    const isWideFinePointer =
      window.matchMedia('(min-width: 1024px)').matches &&
      window.matchMedia('(pointer: fine)').matches;

    let allowVideo: boolean;
    if (isWideFinePointer) {
      // Desktop/laptop: play unless we positively detect a slow (2g) link.
      allowVideo = effectiveType !== 'slow-2g' && effectiveType !== '2g';
    } else {
      // Phones/tablets: only on a confirmed fast connection. If the link can't
      // be measured (e.g. iOS Safari has no Network Information API), fall back
      // to the still so video is never streamed over a weak or metered link.
      const downlink = connection?.downlink;
      allowVideo = effectiveType === '4g' && (downlink === undefined || downlink >= 2);
    }
    if (!allowVideo) return;

    const el = containerRef.current;
    if (!el) return;

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    // Defer until the hero is visible and the browser is idle so the poster
    // image stays the LCP element and the iframe never blocks first paint.
    let idleId: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        const start = () => setMountVideo(true);
        idleId = w.requestIdleCallback
          ? w.requestIdleCallback(start, { timeout: 2000 })
          : window.setTimeout(start, 600);
        observer.disconnect();
      },
      { threshold: 0.25 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (idleId !== undefined) {
        if (w.cancelIdleCallback) w.cancelIdleCallback(idleId);
        else clearTimeout(idleId);
      }
    };
  }, []);

  // Start on a dark, cinematic generator-hall shot ("electricity at massive
  // scale") that blends with the dark theme and keeps the headline legible.
  const START_SECONDS = 872;
  const embedSrc =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}` +
    `&start=${START_SECONDS}&playsinline=1&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3&fs=0&cc_load_policy=0`;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover grayscale hero-kenburns transition-opacity duration-1000 ${
          videoReady ? 'opacity-0' : 'opacity-60'
        }`}
      />
      {mountVideo && (
        <iframe
          src={embedSrc}
          title={alt}
          tabIndex={-1}
          aria-hidden="true"
          allow="autoplay; encrypted-media"
          onLoad={() => setVideoReady(true)}
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 grayscale transition-opacity duration-1000 ${
            videoReady ? 'opacity-60' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
