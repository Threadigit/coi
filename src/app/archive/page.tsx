import Image from "next/image";
import Link from "next/link";
import EpisodeCard from "@/components/EpisodeCard";
import { episodes } from "@/lib/episodes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Archive",
  description: "Search and explore our curated archive of human progress, spanning the Industrial, Atomic, and Digital eras.",
  alternates: {
    canonical: "/archive",
  },
};

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export default async function Archive({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const q = resolvedParams.q?.toLowerCase() || '';
  // Accept either ?category= (filter chips) or ?era= (home-page era cards).
  const category = (resolvedParams.category || resolvedParams.era)?.toLowerCase() || 'all';

  let items = episodes;

  if (q) {
    items = items.filter(e =>
      [e.title, e.blurb, ...e.keywords, ...e.categories]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }

  if (category !== 'all') {
    items = items.filter(e => e.categories.includes(category));
  }

  const categories = [
    { label: 'ALL ERAS', value: 'all' },
    { label: 'INDUSTRIAL AGE', value: 'industrial' },
    { label: 'DIGITAL REVOLUTION', value: 'digital' },
    { label: 'SPACE EXPLORATION', value: 'space' },
    { label: 'BIOTECH', value: 'biotech' },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://chroniclesofinnovation.com/archive#collection",
    "url": "https://chroniclesofinnovation.com/archive",
    "name": "The Archive — Chronicles of Innovation",
    "description": "Search and explore our curated archive of human progress, spanning the Industrial, Atomic, and Digital eras.",
    "isPartOf": { "@id": "https://chroniclesofinnovation.com/#series" },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": episodes.map((episode, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://chroniclesofinnovation.com${episode.href}`,
        "name": episode.title,
      })),
    },
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative pt-36 md:pt-44 pb-24 px-6 md:px-12 w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[36rem] spotlight-gold pointer-events-none" aria-hidden="true" />
        <div className="blueprint-grid-radial absolute inset-x-0 top-0 h-[32rem] opacity-60 pointer-events-none" aria-hidden="true" />

        {/* Hero Search Section */}
        <section className="relative max-w-[1400px] mx-auto mb-16 md:mb-24">
          <span className="eyebrow rise block mb-6" style={{ ['--d' as string]: 0 }}>The Archive</span>
          <h1
            className="rise serif-headline text-5xl md:text-7xl lg:text-8xl tracking-[-0.035em] text-on-surface leading-[1.02] mb-12 max-w-4xl"
            style={{ ['--d' as string]: 1 }}
          >
            Search the <span className="italic text-gradient-gold pr-2">Archive</span> of Progress
          </h1>
          <form action="/archive" role="search" className="rise relative w-full max-w-3xl" style={{ ['--d' as string]: 2 }}>
            {category !== 'all' && <input type="hidden" name="category" value={category} />}
            <span className="material-symbols-outlined pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-on-surface/50">search</span>
            <input
              name="q"
              defaultValue={q}
              aria-label="Search the archive"
              className="h-16 w-full rounded-full glass pl-16 pr-32 text-lg md:text-xl placeholder:text-on-surface/40 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_4px_rgba(251,203,126,0.12)] transition-all duration-500 text-on-surface"
              placeholder="Explore historical breakthroughs..."
              type="search"
            />
            <button type="submit" className="btn btn-primary absolute right-2 top-1/2 -translate-y-1/2 !py-3 !px-6">
              Search
            </button>
          </form>

          {/* Filter Chips */}
          <div className="rise flex flex-wrap gap-2.5 mt-10" style={{ ['--d' as string]: 3 }}>
            {categories.map((cat) => {
              const isActive = category === cat.value;
              const href = `/archive?category=${cat.value}${q ? `&q=${encodeURIComponent(q)}` : ''}`;

              return (
                <Link
                  key={cat.value}
                  href={href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-on-surface text-surface font-semibold shadow-[0_8px_30px_-10px_rgba(255,255,255,0.5)]"
                      : "bg-white/[0.07] text-on-surface/70 ring-1 ring-white/[0.08] hover:bg-white/[0.13] hover:text-on-surface"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Archive Grid */}
        <section className="relative max-w-[1400px] mx-auto">
          {items.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[1, 2, 3, 4].map((idx) => (
                <article key={`placeholder-${idx}`} className="group" data-reveal style={{ ['--d' as string]: idx % 3 }}>
                  <div className="relative aspect-video overflow-hidden rounded-[1.375rem] card-glass flex items-center justify-center flex-col mb-5">
                    <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-50">satellite_alt</span>
                    <p className="text-xs tracking-[0.18em] text-on-surface/45 uppercase">Incoming Transmission</p>
                  </div>
                  <div className="space-y-2 px-1">
                    <span className="eyebrow !text-[10px]">Awaiting Signal</span>
                    <h3 className="serif-headline text-2xl text-on-surface/70">Classified</h3>
                    <p className="text-on-surface/45 text-sm leading-relaxed">No episodes match this era yet. Check back soon for the next documentary.</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <>
              {/* Featured: the newest matching episode, shown as a cinematic hero card */}
              <Link
                href={items[0].href}
                data-reveal
                className="group relative block overflow-hidden rounded-[2rem] md:rounded-[2.5rem] ring-1 ring-white/10 shadow-[0_50px_120px_-40px_rgba(0,0,0,1)] mb-16 md:mb-24"
              >
                <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9] min-h-[30rem] lg:min-h-0">
                  <Image
                    src={items[0].thumbnail}
                    alt={items[0].title}
                    fill
                    priority
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    className="object-cover saturate-[.8] transition-transform duration-[1400ms] ease-[var(--ease-spring)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 scrim-side" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                  <div className="absolute left-5 top-5 md:left-8 md:top-8 flex items-center gap-2 glass rounded-full px-4 py-1.5">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1", fontSize: 16 }}>{items[0].icon}</span>
                    <span className="eyebrow !text-[10px] !text-on-surface">{items[0].innovation} &middot; {items[0].year}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 max-w-3xl">
                    <span className="eyebrow !text-primary block mb-4">Latest in the Archive</span>
                    <h2 className="serif-headline text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.05] text-on-surface mb-5">{items[0].title}</h2>
                    <p className="hidden sm:block text-on-surface/70 text-lg leading-relaxed mb-8 max-w-2xl line-clamp-2">{items[0].blurb}</p>
                    <span className="btn btn-primary !px-7 !py-3.5">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 20 }}>play_arrow</span>
                      Watch Now
                    </span>
                  </div>
                </div>
              </Link>

              {items.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {items.slice(1).map((episode, i) => (
                    <div key={episode.slug} data-reveal style={{ ['--d' as string]: i % 3 }}>
                      <EpisodeCard episode={episode} image={episode.thumbnail} eyebrow="Archive" showDate />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </main>
    </div>
  );
}
