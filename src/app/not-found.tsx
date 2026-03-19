import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 px-6 md:px-12 relative overflow-hidden text-center">
      {/* Background blueprint grid for cinematic texture */}
      <div className="blueprint-grid-radial absolute inset-0 -z-10 opacity-30"></div>
      
      <span className="font-label text-secondary uppercase tracking-[0.3em] text-xs mb-6 block">Error 404</span>
      
      <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-on-surface mb-6 leading-none">
        Record <span className="italic text-primary">Not Found</span>
      </h1>
      
      <p className="font-body text-slate-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
        You have ventured beyond the known perimeter. The artifact you are actively searching for has either been redacted, lost to time, or never existed in the first place.
      </p>
      
      <Link 
        href="/"
        className="inline-flex items-center gap-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-xs font-bold tracking-[0.2em] px-10 py-5 rounded-sm uppercase hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-[0_0_40px_rgba(229,208,167,0.15)] hover:shadow-[0_0_60px_rgba(229,208,167,0.3)]"
      >
        <span className="material-symbols-outlined text-sm font-light">undo</span>
        Return to Safety
      </Link>
    </div>
  );
}
