import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-[90svh] flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 relative overflow-hidden text-center">
      <div className="absolute inset-0 spotlight-gold pointer-events-none" aria-hidden="true" />
      <div className="blueprint-grid-radial absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <span className="eyebrow rise block mb-8" style={{ ['--d' as string]: 0 }}>Error 404</span>

      <h1 className="rise font-headline text-6xl md:text-8xl lg:text-[9rem] text-on-surface mb-8 leading-[0.95] tracking-[-0.04em]" style={{ ['--d' as string]: 1 }}>
        Record <span className="italic text-gradient-gold pr-2">Not Found</span>
      </h1>

      <p className="rise text-on-surface/60 max-w-xl mx-auto mb-12 text-lg md:text-xl leading-relaxed" style={{ ['--d' as string]: 2 }}>
        You have ventured beyond the known perimeter. The artifact you are actively searching for has either been redacted, lost to time, or never existed in the first place.
      </p>

      <Link href="/" className="rise btn btn-primary !px-8 !py-4 !text-[14px]" style={{ ['--d' as string]: 3 }}>
        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>undo</span>
        Return to Safety
      </Link>
    </div>
  );
}
