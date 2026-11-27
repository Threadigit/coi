'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLocale } from '@/i18n/context';

type Props = {
  /** YouTube video id used for the muted background preview. */
  videoId: string;
  /** Poster / fallback still (also the LCP image on every device). */
  image: string;
  alt: string;
};

// Start on a dark, cinematic generator-hall shot ("electricity at massive
// scale") that blends with the dark theme and keeps the headline legible.
const START_SECONDS = 872;

/**
 * Cinematic hero background, on every device.
 *
 * The still is always rendered first as the fast LCP element, with a subtle
 * Ken Burns drift. A muted, looping, inline preview of the documentary is then
 * layered on top and only fades in once YouTube reports that it is actually
 * *playing*, so a blocked autoplay or an unavailable video never leaves a
 * player chrome or a blank frame on screen: the still simply stays.
 *
 * It is skipped for reduced-motion, Save-Data and 2g connections. Small glass
 * controls let visitors pause it or turn the sound on.
 */
export default function HeroCinematicPreview({ videoId, image, alt }: Props) {
  const { ui } = useLocale();
  const [mountVideo, setMountVideo] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const userPausedRef = useRef(false);

  const command = (func: string, args: unknown[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    );
  };

  // Decide whether to load the preview at all, then defer it until the hero is
  // visible and the browser is idle so the still stays the LCP element.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const connection = (navigator as unknown as {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (connection?.saveData === true) return;
    if (connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') return;

    const el = containerRef.current;
    if (!el) return;

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        const start = () => setMountVideo(true);
        idleId = w.requestIdleCallback
          ? w.requestIdleCallback(start, { timeout: 1500 })
          : window.setTimeout(start, 400);
        observer.disconnect();
      },
      { threshold: 0.1 }
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

  // Listen to the player so we know when it is genuinely playing.
  useEffect(() => {
    if (!mountVideo) return;
    const onMessage = (e: MessageEvent) => {
      if (e.source !== iframeRef.current?.contentWindow) return;
      let data: { event?: string; info?: unknown } | null = null;
      try {
        data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      if (!data) return;
      let state: number | undefined;
      if (data.event === 'onStateChange' && typeof data.info === 'number') state = data.info;
      else if (data.event === 'infoDelivery' && data.info && typeof data.info === 'object') {
        const s = (data.info as { playerState?: number }).playerState;
        if (typeof s === 'number') state = s;
      }
      if (state === 1) setPlaying(true);
      else if (state === 0 || state === -1) setPlaying(false);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [mountVideo]);

  // Pause when the hero scrolls out of view, resume when it returns (unless
  // the visitor paused it themselves), so it never burns CPU or data off-screen.
  useEffect(() => {
    if (!mountVideo) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!userPausedRef.current) command('playVideo');
        } else {
          command('pauseVideo');
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mountVideo]);

  const handleLoad = () => {
    // Subscribe to player events; repeat a couple of times in case the player
    // is not ready for the first message.
    const subscribe = () =>
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'listening', id: 'hero', channel: 'widget' }),
        '*'
      );
    subscribe();
    window.setTimeout(subscribe, 700);
    window.setTimeout(subscribe, 2000);
  };

  const togglePlay = () => {
    const next = !userPaused;
    setUserPaused(next);
    userPausedRef.current = next;
    command(next ? 'pauseVideo' : 'playVideo');
  };

  const toggleMute = () => {
    command(muted ? 'unMute' : 'mute');
    if (muted) command('setVolume', [70]);
    setMuted(!muted);
  };

  const embedSrc = mountVideo
    ? `https://www.youtube-nocookie.com/embed/${videoId}` +
      `?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}` +
      `&start=${START_SECONDS}&playsinline=1&rel=0&modestbranding=1&disablekb=1` +
      `&iv_load_policy=3&fs=0&cc_load_policy=0&enablejsapi=1` +
      `&origin=${encodeURIComponent(window.location.origin)}`
    : '';

  const control =
    'grid h-11 w-11 place-items-center rounded-sm glass text-on-surface transition-all duration-500 hover:scale-110 hover:bg-white/20 active:scale-95';

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover saturate-[.7] contrast-[1.05] hero-kenburns opacity-80"
        />
        {mountVideo && (
          <iframe
            ref={iframeRef}
            src={embedSrc}
            title={alt}
            tabIndex={-1}
            aria-hidden="true"
            allow="autoplay; encrypted-media"
            onLoad={handleLoad}
            className={`pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.14] saturate-[.75] contrast-[1.05] transition-opacity duration-[1800ms] ease-out ${
              playing ? 'opacity-85' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {mountVideo && (
        <div
          className={`absolute right-4 top-[calc(5.25rem+env(safe-area-inset-top))] z-20 flex gap-2 transition-opacity duration-700 md:right-12 md:top-28 ${
            playing || userPaused ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button type="button" onClick={toggleMute} aria-label={muted ? ui.common.soundOn : ui.common.mute} aria-pressed={!muted} className={control}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{muted ? 'volume_off' : 'volume_up'}</span>
          </button>
          <button type="button" onClick={togglePlay} aria-label={userPaused ? ui.common.playVideo : ui.common.pauseVideo} className={control}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, fontVariationSettings: "'FILL' 1" }}>{userPaused ? 'play_arrow' : 'pause'}</span>
          </button>
        </div>
      )}
    </>
  );
}
