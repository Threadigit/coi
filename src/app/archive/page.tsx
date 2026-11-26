import Image from "next/image";
import Link from "next/link";
import EpisodeCard from "@/components/EpisodeCard";
import { episodes, eras } from "@/lib/episodes";
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
    "name": "The Archive | Chronicles of Innovation",
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
      <main className="relative pt-28 md:pt-44 pb-24 px-5 md:px-12 w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[36rem] spotlight-gold pointer-events-none" aria-hidden="true" />
        <div className="blueprint-grid-radial absolute inset-x-0 top-0 h-[32rem] opacity-60 pointer-events-none" aria-hidden="true" />

        {/* Hero Search Section */}
        <section className="relative max-w-[1600px] mx-auto mb-14 md:mb-20">
          <div className="kicker rise mb-8 md:mb-10">The Archive</div>
          <h1
            className="rise title-card text-[2.6rem] md:text-7xl lg:text-[6.5rem] text-on-surface mb-8 md:mb-12 max-w-5xl"
            style={{ ['--d' as string]: 1 }}
          >
            Search the <span className="italic text-primary pr-2">Archive</span> of Progress
          </h1>
          <form action="/archive" role="search" className="rise relative w-full max-w-3xl" style={{ ['--d' as string]: 2 }}>
            {category !== 'all' && <input type="hidden" name="category" value={category} />}
            <span className="material-symbols-outlined pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-on-surface/50">search</span>
            <input
              name="q"
              defaultValue={q}
              aria-label="Search the archive"
              className="h-14 md:h-16 w-full border-b border-white/30 bg-transparent pl-10 md:pl-12 pr-32 text-base md:text-2xl placeholder:text-on-surface/40 focus:outline-none focus:border-primary transition-colors duration-500 text-on-surface"
              placeholder="Explore historical breakthroughs..."
              type="search"
            />
            <button type="submit" className="btn btn-primary absolute right-0 top-1/2 -translate-y-1/2 !min-h-0 !py-3 !px-6">
              Search
            </button>
          </form>

          {/* Filter Chips */}
          <div className="rise no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 flex md:flex-wrap gap-x-8 gap-y-3 mt-8 md:mt-12 overflow-x-auto border-b border-white/[0.12]" style={{ ['--d' as string]: 3 }}>
            {categories.map((cat) => {
              const isActive = category === cat.value;
              const count = cat.value === 'all' ? episodes.length : episodes.filter((e) => e.categories.includes(cat.value)).length;
              const href = `/archive?category=${cat.value}${q ? `&q=${encodeURIComponent(q)}` : ''}`;

              return (
                <Link
                  key={cat.value}
                  href={href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`shrink-0 whitespace-nowrap pb-4 -mb-px border-b-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                    isActive
                      ? "border-primary text-on-surface"
                      : "border-transparent text-on-surface/55 hover:text-on-surface"
                  }`}
                >
                  {cat.label}
                  <sup className="font-mono-label ml-1.5 text-[10px] opacity-60">{count}</sup>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Archive Grid */}
        <section className="relative max-w-[1600px] mx-auto">
          <div className="eyebrow border-t border-white/[0.14] pt-6 mb-10">{`All Episodes · ${items.length}`}</div>
          {items.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[1, 2, 3, 4].map((idx) => (
                <article key={`placeholder-${idx}`} className="group" data-reveal style={{ ['--d' as string]: idx % 3 }}>
                  <div className="relative aspect-video overflow-hidden rounded-sm card-glass flex items-center justify-center flex-col mb-5">
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
                className="group relative block overflow-hidden mb-16 md:mb-24 -mx-5 md:-mx-12"
              >
                <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[86svh]">
                  <Image
                    src={items[0].thumbnail}
                    alt={items[0].title}
                    fill
                    priority
                    sizes="(max-width: 1600px) 100vw, 1600px"
                    className="object-cover saturate-[.85] transition-transform duration-[1800ms] ease-[var(--ease-spring)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 scrim-side" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-14 max-w-5xl">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="h-px w-10 bg-primary" aria-hidden="true" />
                      <span className="eyebrow !text-on-surface/80">Latest in the Archive &middot; {items[0].innovation} &middot; {items[0].year}</span>
                    </div>
                    <h2 className="title-card text-[1.9rem] md:text-6xl lg:text-7xl text-on-surface mb-5">{items[0].title}</h2>
                    <p className="hidden sm:block text-on-surface/70 text-lg leading-relaxed mb-8 max-w-2xl line-clamp-2">{items[0].blurb}</p>
                    <span className="btn btn-primary">
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
