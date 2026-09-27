import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const SITE = "https://chroniclesofinnovation.com";
const PATH = "/episode/wright-brothers";

const VIDEO_ID = "mhE_0kARZmU";
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const DURATION_SECONDS = 1190; // 19:50
const DURATION_ISO = "PT19M50S";
const RELEASE_DATE = "2026-09-26";
const VIDEO_NAME = "How Two Bicycle Mechanics Taught The World To Fly";

const PAGE_TITLE = "The Wright Brothers: The Invention of Flight";
const PAGE_DESCRIPTION =
  "How two bicycle mechanics from Dayton, Ohio solved the problem of controlled flight — the Wright brothers' road to Kitty Hawk in 1903 and the aerial age they launched.";

const KEYWORDS = [
  "Wright brothers",
  "invention of the airplane",
  "who invented the airplane",
  "first flight",
  "Kitty Hawk",
  "Orville Wright",
  "Wilbur Wright",
  "Wright Flyer",
  "three-axis control",
  "Otto Lilienthal",
  "history of aviation",
  "history of flight",
  "innovation documentary",
  "Chronicles of Innovation",
];

export const metadata: Metadata = {
  title: { absolute: "The Wright Brothers: The Invention of Flight | Chronicles of Innovation" },
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

export default function WrightBrothersEpisode() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `${SITE}${PATH}#video`,
        "name": VIDEO_NAME,
        "alternateName": PAGE_TITLE,
        "description": "For thousands of years humanity accepted the limits of the sky. Then two bicycle mechanics from Dayton, Ohio asked a different question — not how to lift a machine, but how to control it. This is the story of the Wright brothers, the twelve seconds at Kitty Hawk in 1903, and the aerial age they set in motion.",
        "thumbnailUrl": [
          `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
          `${SITE}/wright-hero.jpg`,
          `${SITE}/ep3-kittyhawk-1903.jpg`,
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
            "name": "Wilbur Wright",
            "sameAs": "https://en.wikipedia.org/wiki/Wright_brothers",
          },
          {
            "@type": "Person",
            "name": "Orville Wright",
            "sameAs": "https://en.wikipedia.org/wiki/Wright_brothers",
          },
          {
            "@type": "Person",
            "name": "Otto Lilienthal",
            "sameAs": "https://en.wikipedia.org/wiki/Otto_Lilienthal",
          },
          {
            "@type": "Thing",
            "name": "Wright Flyer",
            "sameAs": "https://en.wikipedia.org/wiki/Wright_Flyer",
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
          { "@type": "ListItem", "position": 3, "name": "The Wright Brothers", "item": `${SITE}${PATH}` },
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
              src="/wright-hero.jpg"
              alt="The Wright Flyer lifting off at Kitty Hawk on December 17, 1903"
              fill
              priority
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/40"></div>
          </div>
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-surface-container-highest px-4 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold text-secondary">Episode 003</span>
              <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-semibold">1899 - 1927</span>
            </div>
            <h1 className="font-headline text-5xl md:text-8xl leading-[1.1] text-on-surface tracking-tight mb-8">
              The Wright Brothers: <br/><span className="text-primary italic">The Invention of Flight</span>
            </h1>
            <div className="flex items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-xs uppercase tracking-widest font-medium">20 Minute Feature</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>flight</span>
                <span className="text-xs uppercase tracking-widest font-medium">The Birth of Flight</span>
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
                &ldquo;Everyone else was chasing lift and horsepower. The Wrights asked the question no one could answer: once you are in the air, how do you stay in control?&rdquo;
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <p className="drop-cap font-body text-xl text-on-surface/80 leading-relaxed mb-8">
                They had no university degrees, no government laboratory, and no team of professional scientists — only a bicycle shop in Dayton, Ohio, a hand-built engine, and a problem that had defeated generations of inventors. While rivals poured money into ever more powerful engines, Wilbur and Orville Wright became convinced that the real obstacle to flight was not power but control. A pilot, they reasoned, had to be able to balance and steer a machine in three dimensions, the way a cyclist balances a bicycle.
              </p>
              <p className="font-body text-xl text-on-surface/80 leading-relaxed">
                So they built their own wind tunnel, corrected the flawed data the field had relied on, and tested glider after glider on the windswept dunes of Kitty Hawk. On December 17, 1903, that patient engineering paid off: the Wright Flyer became the first powered, heavier-than-air machine to achieve controlled flight — twelve seconds that ended millennia of earthbound history. Within a generation their invention would cross the Atlantic, transform in war, carry passengers across the world, and, a century later, send a fragment of the original Flyer to the surface of Mars.
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
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep3-glider-1902.jpg" alt="A Wright glider soaring over the dunes at Kitty Hawk, 1902" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-primary text-5xl font-bold mb-4 block">1902</span>
                  <h4 className="font-headline text-2xl mb-4">The Glider Years</h4>
                  <p className="text-slate-400 leading-relaxed">After a homemade wind tunnel rewrote the science of lift, the brothers made hundreds of glides at Kitty Hawk — perfecting the three-axis control system, wing-warping, and rudder that would make true flight possible.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep3-kittyhawk-1903.jpg" alt="The Wright Flyer on its launching rail at Kitty Hawk, December 1903" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2 text-right">
                  <span className="font-label text-secondary text-5xl font-bold mb-4 block">1903</span>
                  <h4 className="font-headline text-2xl mb-4">Twelve Seconds at Kitty Hawk</h4>
                  <p className="text-slate-400 leading-relaxed">On December 17, with Orville at the controls and Wilbur running alongside, the Flyer rose from its rail and travelled 120 feet in twelve seconds — the first powered, controlled, sustained flight of a heavier-than-air machine.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep3-fortmyer-1909.jpg" alt="A Wright Flyer demonstration flight over Fort Myer, Virginia, 1909" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-primary text-5xl font-bold mb-4 block">1908–09</span>
                  <h4 className="font-headline text-2xl mb-4">Proving It to the World</h4>
                  <p className="text-slate-400 leading-relaxed">Public demonstrations in France and military trials at Fort Myer silenced the doubters. The aerial age had begun — and the airplane would soon reshape travel, warfare, and humanity&apos;s sense of what was possible.</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-surface-container p-12 flex flex-col gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep3-wilbur.jpg" alt="Wilbur Wright" fill className="object-cover object-top" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Wilbur Wright</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Strategist</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The elder brother and driving intellect, who framed flight as a problem of control and led the theoretical work — then carried the Flyer to Europe and made the world believe.</p>
                </div>
              </div>

              <div className="bg-surface-container p-12 flex flex-col gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep3-orville.jpg" alt="Orville Wright" fill className="object-cover object-top" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Orville Wright</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Builder</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The hands-on engineer and mechanic who piloted the first flight at Kitty Hawk, and who lived long enough to see aircraft break the sound barrier.</p>
                </div>
              </div>

              <div className="bg-surface-container p-12 flex flex-col gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep3-lilienthal.jpg" alt="Otto Lilienthal" fill className="object-cover object-top" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Otto Lilienthal</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Glider Pioneer</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The German &ldquo;flying man&rdquo; whose gliding experiments — and fatal 1896 crash — inspired the Wrights and proved that mastering control, not just lift, was the key to flight.</p>
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
