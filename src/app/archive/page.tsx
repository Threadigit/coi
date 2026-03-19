import Image from "next/image";
import Link from "next/link";
import { getLatestVideos } from "@/lib/youtube";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Archive",
  description: "Search and explore our curated archive of human progress, spanning the Industrial, Atomic, and Digital eras.",
  alternates: {
    canonical: "/archive",
  },
};

// Explicit Channel ID for Chronicles of Innovation
const CHANNEL_ID = "UCKU6JFP0__kQ12KSgvtroLQ";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export default async function Archive({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const q = resolvedParams.q?.toLowerCase() || '';
  const category = (resolvedParams.category as string)?.toLowerCase() || 'all';

  let videos = await getLatestVideos(CHANNEL_ID);

  if (q) {
    videos = videos.filter(v => v.title.toLowerCase().includes(q));
  }
  
  if (category !== 'all') {
    // As a placeholder functionality if YouTube RSS doesn't have tags, filter by the title/desc.
    // In a real database, you'd filter by 'video.category === category'
    videos = videos.filter(v => v.title.toLowerCase().includes(category));
  }

  const categories = [
    { label: 'ALL ERAS', value: 'all' },
    { label: 'INDUSTRIAL AGE', value: 'industrial' },
    { label: 'DIGITAL REVOLUTION', value: 'digital' },
    { label: 'SPACE EXPLORATION', value: 'space' },
    { label: 'BIOTECH', value: 'biotech' },
  ];

  return (
    <div className="w-full">
      <main className="pt-32 pb-24 px-6 md:px-12 w-full">
        {/* Hero Search Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <h1 className="serif-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight mb-8">
                Search the <span className="italic text-primary">Archive</span> <br/>of Progress
              </h1>
              <form action="/archive" className="relative group">
                {category !== 'all' && <input type="hidden" name="category" value={category} />}
                <input 
                  name="q"
                  defaultValue={q}
                  className="w-full bg-surface-container-low border-b border-outline-variant/30 py-6 px-4 text-2xl font-body placeholder:text-slate-700 focus:outline-none focus:border-primary transition-all duration-500 text-on-surface" 
                  placeholder="Explore historical breakthroughs..." 
                  type="search" 
                />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-0">
                  <span className="material-symbols-outlined text-primary text-4xl">manage_search</span>
                </button>
              </form>
            </div>
          </div>
          
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mt-12">
            {categories.map((cat) => {
              const isActive = category === cat.value;
              const href = `/archive?category=${cat.value}${q ? `&q=${q}` : ''}`;
              
              return (
                <Link 
                  key={cat.value} 
                  href={href}
                  className={`px-6 py-2 rounded-full font-label text-xs tracking-widest transition-all ${
                    isActive 
                      ? "bg-primary text-on-primary font-bold" 
                      : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-bright"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Archive Grid */}
        <section className="max-w-7xl mx-auto">
          {videos.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[1, 2, 3, 4].map((idx) => (
                <article key={`placeholder-${idx}`} className="group cursor-pointer">
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface-container-low mb-4 border border-outline-variant/20 group-hover:border-primary/50 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-50">satellite_alt</span>
                      <p className="font-label text-xs tracking-widest text-slate-500 uppercase">Incoming Transmission</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">AWAITING SIGNAL</span>
                    <h3 className="serif-headline text-2xl font-bold text-slate-400">Classified</h3>
                    <p className="font-body text-slate-500 text-sm leading-relaxed">The archive is currently decoding historical footage. Check back soon for the premiere of this documentary.</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {videos.map((video) => (
                <Link href={video.link} target="_blank" key={video.id} className="group cursor-pointer block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface-container-low mb-4">
                    <Image 
                      src={video.thumbnail}
                      alt={video.title} 
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="space-y-2">
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">ARCHIVE</span>
                    <h3 className="serif-headline text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2">{video.title}</h3>
                    <p className="font-body text-slate-500 text-xs">Published: {new Date(video.publishedAt).toLocaleDateString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination/Load More */}
          <div className="mt-32 flex flex-col items-center">
            <button className="group flex flex-col items-center gap-4">
              <span className="font-label text-[10px] tracking-[0.3em] text-slate-500 group-hover:text-primary transition-colors uppercase">Load More Archives</span>
              <span className="material-symbols-outlined text-primary text-3xl animate-bounce">keyboard_double_arrow_down</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
