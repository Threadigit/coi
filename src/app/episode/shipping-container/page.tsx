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
  "How a North Carolina trucker named Malcom McLean turned a simple steel box into the shipping container — the invention that rewired global trade and built the modern economy.";

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
        "description": "A single steel box changed the way the world does business. The story of how Malcom McLean, a trucker from North Carolina, and engineer Keith Tantlinger turned the shipping container from a simple idea into the system that rewired global trade — from the first voyage of the Ideal X in 1956 to the modern global supply chain.",
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
        <header className="relative w-full h-[600px] md:h-[870px] overflow-hidden flex items-end px-6 md:px-12 pb-24 md:pb-48">
          <div className="absolute inset-0 z-0">
            <Image
              src="/container-hero.jpg"
              alt="A container ship being loaded by cranes at a port terminal at sunset"
              fill
              priority
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20"></div>
          </div>
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-surface-container-highest px-4 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold text-secondary">Episode 004</span>
              <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-semibold">1956 - Present</span>
            </div>
            <h1 className="font-headline text-5xl md:text-8xl leading-[1.1] text-on-surface tracking-tight mb-8">
              The Shipping Container: <br/><span className="text-primary italic">The Box That Built Global Trade</span>
            </h1>
            <div className="flex items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-xs uppercase tracking-widest font-medium">18 Minute Feature</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>inventory_2</span>
                <span className="text-xs uppercase tracking-widest font-medium">The Container Revolution</span>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/about" className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                Curated by <span className="text-secondary">Tolu Adetuyi</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Watch Section */}
        <section className="px-6 md:px-12 py-24 bg-surface-container-lowest">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary mb-4 block">The Full Documentary</span>
              <h2 className="font-headline text-4xl md:text-5xl">Watch the <span className="text-primary italic">Feature</span></h2>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-sm shadow-2xl border border-outline-variant/20">
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
        <section className="px-6 md:px-12 py-32 bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
            <div className="w-full md:w-1/3">
              <h2 className="font-label text-xs uppercase tracking-[0.4em] text-secondary mb-6">The Genesis</h2>
              <p className="font-headline text-2xl text-on-surface-variant leading-relaxed italic">
                &ldquo;It was not a new engine or a new material. It was a box — and it quietly rebuilt the entire economy of the planet.&rdquo;
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <p className="drop-cap font-body text-xl text-on-surface/80 leading-relaxed mb-8">
                Before the container, moving goods across an ocean was slow, costly, and chaotic. Cargo was loaded piece by piece by armies of dockworkers, and a ship could spend more time sitting in port being filled and emptied than it spent at sea. In 1937, a young North Carolina trucker named Malcom McLean sat for hours waiting to unload his cargo onto a ship and wondered why the whole trailer could not simply be lifted aboard. Decades later, he set out to prove it could.
              </p>
              <p className="font-body text-xl text-on-surface/80 leading-relaxed">
                Working with the engineer Keith Tantlinger, McLean turned that idea into a standardised steel box that could move seamlessly between truck, train, and ship. On April 26, 1956, his converted tanker, the Ideal X, carried fifty-eight containers from Newark to Houston — and the economics of global trade began to change forever. Shipping costs collapsed, Asian factories were wired to Western shelves, and the modern supply chain was born. But the revolution had a human cost: the great dock labour forces that had loaded ships for centuries all but vanished.
              </p>
            </div>
          </div>
        </section>

        {/* Historical Milestones */}
        <section className="py-32 bg-surface-container-low px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-headline text-4xl mb-24 text-center">Historical <span className="text-primary italic">Milestones</span></h3>
            <div className="space-y-40">
              <div className="flex flex-col md:flex-row items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video flex items-center justify-center">
                  <Image src="/ep4-idealx-1956.jpg" alt="Profile drawing of the Ideal X, the first container ship" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-contain p-6" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-primary text-5xl font-bold mb-4 block">1956</span>
                  <h4 className="font-headline text-2xl mb-4">The Voyage of the Ideal X</h4>
                  <p className="text-slate-400 leading-relaxed">On April 26, McLean&apos;s converted T2 tanker carried fifty-eight containers from Newark to Houston. It cost a fraction of loading loose cargo by hand — the first voyage of the container age.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep4-twistlock.jpg" alt="The corner casting of a steel shipping container" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2 text-right">
                  <span className="font-label text-secondary text-5xl font-bold mb-4 block">1960s</span>
                  <h4 className="font-headline text-2xl mb-4">The Battle for the Standard</h4>
                  <p className="text-slate-400 leading-relaxed">A box is only useful if every ship, crane, and truck in the world agrees on its size. Tantlinger&apos;s corner castings and twistlocks — released patent-free — became the global ISO standard that let any container stack anywhere.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep4-port.jpg" alt="Cranes loading a modern container ship at the Port of Los Angeles" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-primary text-5xl font-bold mb-4 block">Today</span>
                  <h4 className="font-headline text-2xl mb-4">The World in a Box</h4>
                  <p className="text-slate-400 leading-relaxed">Containerisation gutted the cost of moving goods, emptied the old docks, and stitched together the factories of Asia with the shelves of the West — building the global supply chain the modern world now runs on.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Pioneers */}
        <section className="px-6 md:px-12 py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h3 className="font-headline text-4xl mb-4">The Pioneers</h3>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface-container p-12 flex flex-col md:flex-row gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep4-mclean.jpg" alt="Malcom McLean" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Malcom McLean</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Visionary</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The trucker-turned-shipping-magnate who refused to accept that loading a ship had to be slow. He risked his fortune to prove that a standard box, not the cargo inside it, was the thing worth moving.</p>
                </div>
              </div>

              <div className="bg-surface-container p-12 flex flex-col md:flex-row gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep4-tantlinger.jpg" alt="Keith Tantlinger" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Keith Tantlinger</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Engineer</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The engineer who solved the hard part: the corner castings and twistlocks that let containers lock together, stack high, and lift fast. His employer gave the patents away so the whole world could adopt them.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-surface">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="font-headline text-5xl mb-8">Continue the Journey</h3>
            <p className="text-slate-400 mb-12 text-lg">Watch the full documentary on YouTube or engage with our community of historians and engineers.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href={WATCH_URL} target="_blank">
                <button className="bg-primary text-on-primary px-10 py-4 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:opacity-90 transition-all w-full md:w-auto cursor-pointer">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch on YouTube
                </button>
              </Link>
              <a href="https://www.youtube.com/channel/UCKU6JFP0__kQ12KSgvtroLQ/community" target="_blank" rel="noopener noreferrer">
                <button className="border border-outline-variant/40 text-secondary px-10 py-4 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:bg-secondary/10 transition-all w-full md:w-auto cursor-pointer">
                  <span className="material-symbols-outlined">forum</span>
                  Join the Discussion
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
