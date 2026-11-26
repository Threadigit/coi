import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const SITE = "https://chroniclesofinnovation.com";
const PATH = "/episode/shipping-container";

const VIDEO_ID = "xprFFq5yy1k";
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const DURATION_SECONDS = 1102; // 18:22
const DURATION_ISO = "PT18M22S";
const RELEASE_DATE = "2026-10-30";
const VIDEO_NAME = "How a Simple Box Changed Global Trade: The Shipping Container";

const PAGE_TITLE = "The Shipping Container: The Box That Changed Global Trade";
const PAGE_DESCRIPTION =
  "How a North Carolina trucker named Malcom McLean turned a simple steel box into the shipping container, the invention that rewired global trade and built the modern economy.";

const KEYWORDS = [
  "shipping container",
  "Malcom McLean",
  "containerization",
  "history of global trade",
  "Ideal X",
  "Keith Tantlinger",
  "intermodal container",
  "how the shipping container changed the world",
  "global supply chain",
  "container ship",
  "maritime history",
  "innovation documentary",
  "Chronicles of Innovation",
];

export const metadata: Metadata = {
  title: { absolute: "The Shipping Container: The Box That Changed Global Trade | Chronicles of Innovation" },
  description: PAGE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "Tolu Adetuyi", url: `${SITE}/about` }],
  creator: "Tolu Adetuyi",
  category: "Documentary",
  alternates: {
    canonical: PATH,
  },
  openGraph: {
    type: "video.episode",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PATH,
    siteName: "Chronicles of Innovation",
    locale: "en_US",
    releaseDate: RELEASE_DATE,
    duration: DURATION_SECONDS,
    series: "Chronicles of Innovation",
    tags: KEYWORDS,
    videos: [{ url: EMBED_URL, type: "text/html", width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function ShippingContainerEpisode() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `${SITE}${PATH}#video`,
        "name": VIDEO_NAME,
        "alternateName": PAGE_TITLE,
        "description": "A single steel box changed the way the world does business. The story of how Malcom McLean, a trucker from North Carolina, and engineer Keith Tantlinger turned the shipping container from a simple idea into the system that rewired global trade, from the first voyage of the Ideal X in 1956 to the modern global supply chain.",
        "thumbnailUrl": [
          `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
          `${SITE}/container-hero.jpg`,
          `${SITE}/ep4-port.jpg`,
        ],
        "uploadDate": RELEASE_DATE,
        "duration": DURATION_ISO,
        "contentUrl": WATCH_URL,
        "embedUrl": EMBED_URL,
        "inLanguage": "en",
        "genre": "Documentary",
        "isFamilyFriendly": true,
        "keywords": KEYWORDS.join(", "),
        "publisher": {
          "@type": "Organization",
          "name": "Chronicles of Innovation",
          "url": SITE,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE}/coi_logo_transparent.png`,
          },
        },
        "creator": {
          "@type": "Person",
          "@id": `${SITE}/#toluadetuyi`,
          "name": "Tolu Adetuyi",
          "url": `${SITE}/about`,
          "jobTitle": "Executive Curator & Founder",
          "sameAs": [
            "https://www.adetuyi.com",
            "https://www.linkedin.com/in/adetuyitolu/",
            "https://x.com/AdetuyiTolu",
            "https://www.youtube.com/@adetuyitolu",
          ],
        },
        "isPartOf": {
          "@type": "CreativeWorkSeries",
          "name": "Chronicles of Innovation",
          "url": SITE,
        },
        "about": [
          {
            "@type": "Person",
            "name": "Malcom McLean",
            "sameAs": "https://en.wikipedia.org/wiki/Malcom_McLean",
          },
          {
            "@type": "Person",
            "name": "Keith Tantlinger",
            "sameAs": "https://en.wikipedia.org/wiki/Keith_Tantlinger",
          },
          {
            "@type": "Thing",
            "name": "Containerization",
            "sameAs": "https://en.wikipedia.org/wiki/Containerization",
          },
          {
            "@type": "Thing",
            "name": "Ideal X",
            "sameAs": "https://en.wikipedia.org/wiki/Ideal_X",
          },
        ],
        "potentialAction": {
          "@type": "WatchAction",
          "target": WATCH_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}${PATH}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
          { "@type": "ListItem", "position": 2, "name": "Archive", "item": `${SITE}/archive` },
          { "@type": "ListItem", "position": 3, "name": "The Shipping Container", "item": `${SITE}${PATH}` },
        ],
      },
    ],
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="pt-24">
        {/* Hero Section */}
        <header className="relative isolate w-full cinema min-h-[92svh] md:min-h-[100svh] overflow-hidden flex items-end px-5 md:px-12 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:pb-28 pt-32 md:pt-40">
          <div className="absolute inset-0 z-0">
            <Image
              src="/container-hero.jpg"
              alt="A container ship being loaded by cranes at a port terminal at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-80 saturate-[.8] hero-kenburns"
            />
            <div className="absolute inset-0 scrim-side"></div>
            <div className="absolute inset-x-0 top-0 h-40 scrim-top"></div>
            <div className="absolute inset-x-0 bottom-0 h-[75%] scrim-bottom"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="glass rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold text-secondary">Episode 004</span>
              <span className="text-on-surface/60 text-[11px] tracking-[0.18em] uppercase font-semibold">1956 - Present</span>
            </div>
            <h1 className="font-headline text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.05] text-on-surface tracking-[-0.035em] mb-7 md:mb-10">
              The Shipping Container: <br/><span className="text-gradient-gold italic pr-2">The Box That Built Global Trade</span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-on-surface/85">
              <div className="flex items-center gap-2 glass rounded-full pl-3 pr-4 py-2">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">18 Minute Feature</span>
              </div>
              <div className="flex items-center gap-2 glass rounded-full pl-3 pr-4 py-2">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>inventory_2</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">The Container Revolution</span>
              </div>
            </div>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-8 gap-y-5">
              <a href="#watch" className="btn btn-primary !px-8 !py-4 !text-[14px] w-full sm:w-auto">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1", fontSize: 22}}>play_arrow</span>
                Watch the Feature
              </a>
              <Link href="/about" className="font-label text-[12px] tracking-[0.04em] text-on-surface/55 hover:text-primary transition-colors">
                Curated by <span className="text-secondary">Tolu Adetuyi</span>
              </Link>
            </div>
          </div>
          </div>
        </header>

        {/* Watch Section */}
        <section id="watch" className="relative scroll-mt-4 px-4 md:px-12 py-20 md:py-36 bg-surface-container-lowest overflow-hidden">
          <div className="absolute inset-0 spotlight-gold pointer-events-none" aria-hidden="true"></div>
          <div className="relative max-w-5xl mx-auto" data-reveal>
            <div className="mb-12 text-center">
              <span className="eyebrow mb-4 block">The Full Documentary</span>
              <h2 className="font-headline text-4xl md:text-6xl tracking-[-0.03em]">Watch the <span className="text-gradient-gold italic pr-1">Feature</span></h2>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] md:rounded-[2.25rem] ring-1 ring-white/12 shadow-[0_60px_140px_-40px_rgba(0,0,0,1),0_0_120px_-50px_var(--gold-glow)]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`${EMBED_URL}?rel=0`}
                title={VIDEO_NAME}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="px-5 md:px-12 py-20 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
            <div className="w-full md:w-1/3" data-reveal>
              <h2 className="eyebrow mb-6">The Genesis</h2>
              <p className="font-headline text-2xl text-on-surface-variant leading-relaxed italic">
                &ldquo;It was not a new engine or a new material. It was a box, and it quietly rebuilt the entire economy of the planet.&rdquo;
              </p>
            </div>
            <div className="w-full md:w-2/3" data-reveal style={{ ["--d" as string]: 1 }}>
              <p className="drop-cap font-body text-lg md:text-xl text-on-surface/75 leading-[1.7] mb-8">
                Before the container, moving goods across an ocean was slow, costly, and chaotic. Cargo was loaded piece by piece by armies of dockworkers, and a ship could spend more time sitting in port being filled and emptied than it spent at sea. In 1937, a young North Carolina trucker named Malcom McLean sat for hours waiting to unload his cargo onto a ship and wondered why the whole trailer could not simply be lifted aboard. Decades later, he set out to prove it could.
              </p>
              <p className="font-body text-lg md:text-xl text-on-surface/75 leading-[1.7]">
                Working with the engineer Keith Tantlinger, McLean turned that idea into a standardised steel box that could move seamlessly between truck, train, and ship. On April 26, 1956, his converted tanker, the Ideal X, carried fifty-eight containers from Newark to Houston, and the economics of global trade began to change forever. Shipping costs collapsed, Asian factories were wired to Western shelves, and the modern supply chain was born. But the revolution had a human cost: the great dock labour forces that had loaded ships for centuries all but vanished.
              </p>
            </div>
          </div>
        </section>

        {/* Historical Milestones */}
        <section className="py-20 md:py-32 bg-surface-container-low px-5 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-headline text-[2rem] md:text-6xl tracking-[-0.03em] mb-14 md:mb-28 text-center">Historical <span className="text-gradient-gold italic pr-1">Milestones</span></h3>
            <div className="space-y-28 md:space-y-44">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-[1.75rem] md:rounded-[2.25rem] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)] flex items-center justify-center">
                  <Image src="/ep4-idealx-1956.jpg" alt="Profile drawing of the Ideal X, the first container ship" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-contain p-6" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-headline italic text-primary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1956</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The Voyage of the Ideal X</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">On April 26, McLean&apos;s converted T2 tanker carried fifty-eight containers from Newark to Houston. It cost a fraction of loading loose cargo by hand, the first voyage of the container age.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-[1.75rem] md:rounded-[2.25rem] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
                  <Image src="/ep4-twistlock.jpg" alt="The corner casting of a steel shipping container" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover" />
                </div>
                <div className="w-full md:w-1/2 md:text-right">
                  <span className="font-headline italic text-secondary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1960s</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The Battle for the Standard</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">A box is only useful if every ship, crane, and truck in the world agrees on its size. Tantlinger&apos;s corner castings and twistlocks, released patent-free, became the global ISO standard that let any container stack anywhere.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-[1.75rem] md:rounded-[2.25rem] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
                  <Image src="/ep4-port.jpg" alt="Cranes loading a modern container ship at the Port of Los Angeles" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-headline italic text-primary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">Today</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The World in a Box</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">Containerisation gutted the cost of moving goods, emptied the old docks, and stitched together the factories of Asia with the shelves of the West, building the global supply chain the modern world now runs on.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Pioneers */}
        <section className="px-5 md:px-12 py-20 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h3 className="font-headline text-4xl md:text-6xl tracking-[-0.03em] mb-4">The Pioneers</h3>
              <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card-glass rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-3xl overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep4-mclean.jpg" alt="Malcom McLean" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Malcom McLean</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Visionary</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The trucker-turned-shipping-magnate who refused to accept that loading a ship had to be slow. He risked his fortune to prove that a standard box, not the cargo inside it, was the thing worth moving.</p>
                </div>
              </div>

              <div className="card-glass rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-3xl overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep4-tantlinger.jpg" alt="Keith Tantlinger" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Keith Tantlinger</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Engineer</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The engineer who solved the hard part: the corner castings and twistlocks that let containers lock together, stack high, and lift fast. His employer gave the patents away so the whole world could adopt them.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-40 bg-surface overflow-hidden">
          <div className="absolute inset-0 spotlight-gold pointer-events-none" aria-hidden="true"></div>
          <div className="relative max-w-4xl mx-auto px-6 text-center" data-reveal>
            <h3 className="font-headline text-4xl md:text-7xl tracking-[-0.035em] mb-6 md:mb-8">Continue the Journey</h3>
            <p className="text-on-surface/60 mb-12 text-lg md:text-xl">Watch the full documentary on YouTube or engage with our community of historians and engineers.</p>
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href={WATCH_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-8 !py-4 !text-[14px]">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch on YouTube
                </Link>
              <a href="https://www.youtube.com/channel/UCKU6JFP0__kQ12KSgvtroLQ/community" target="_blank" rel="noopener noreferrer" className="btn btn-glass !px-8 !py-4 !text-[14px] w-full sm:w-auto">
                  <span className="material-symbols-outlined">forum</span>
                  Join the Discussion
                </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
