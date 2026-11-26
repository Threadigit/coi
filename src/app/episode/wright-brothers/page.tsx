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
  "How two bicycle mechanics from Dayton, Ohio solved the problem of controlled flight, the Wright brothers' road to Kitty Hawk in 1903 and the aerial age they launched.";

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
        "description": "For thousands of years humanity accepted the limits of the sky. Then two bicycle mechanics from Dayton, Ohio asked a different question, not how to lift a machine, but how to control it. This is the story of the Wright brothers, the twelve seconds at Kitty Hawk in 1903, and the aerial age they set in motion.",
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
        <header className="relative isolate w-full cinema min-h-[92svh] md:min-h-[100svh] overflow-hidden flex items-end px-5 md:px-12 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:pb-28 pt-32 md:pt-40">
          <div className="absolute inset-0 z-0">
            <Image
              src="/wright-hero.jpg"
              alt="The Wright Flyer lifting off at Kitty Hawk on December 17, 1903"
              fill
              priority
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 scrim-side"></div>
            <div className="absolute inset-x-0 top-0 h-40 scrim-top"></div>
            <div className="absolute inset-x-0 bottom-0 h-[75%] scrim-bottom"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="glass rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold text-secondary">Episode 003</span>
              <span className="text-on-surface/60 text-[11px] tracking-[0.18em] uppercase font-semibold">1899 - 1927</span>
            </div>
            <h1 className="font-headline text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.05] text-on-surface tracking-[-0.035em] mb-7 md:mb-10">
              The Wright Brothers: <br/><span className="text-gradient-gold italic pr-2">The Invention of Flight</span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-on-surface/85">
              <div className="flex items-center gap-2 glass rounded-full pl-3 pr-4 py-2">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">20 Minute Feature</span>
              </div>
              <div className="flex items-center gap-2 glass rounded-full pl-3 pr-4 py-2">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>flight</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">The Birth of Flight</span>
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
                &ldquo;Everyone else was chasing lift and horsepower. The Wrights asked the question no one could answer: once you are in the air, how do you stay in control?&rdquo;
              </p>
            </div>
            <div className="w-full md:w-2/3" data-reveal style={{ ["--d" as string]: 1 }}>
              <p className="drop-cap font-body text-lg md:text-xl text-on-surface/75 leading-[1.7] mb-8">
                They had no university degrees, no government laboratory, and no team of professional scientists, only a bicycle shop in Dayton, Ohio, a hand-built engine, and a problem that had defeated generations of inventors. While rivals poured money into ever more powerful engines, Wilbur and Orville Wright became convinced that the real obstacle to flight was not power but control. A pilot, they reasoned, had to be able to balance and steer a machine in three dimensions, the way a cyclist balances a bicycle.
              </p>
              <p className="font-body text-lg md:text-xl text-on-surface/75 leading-[1.7]">
                So they built their own wind tunnel, corrected the flawed data the field had relied on, and tested glider after glider on the windswept dunes of Kitty Hawk. On December 17, 1903, that patient engineering paid off: the Wright Flyer became the first powered, heavier-than-air machine to achieve controlled flight, twelve seconds that ended millennia of earthbound history. Within a generation their invention would cross the Atlantic, transform in war, carry passengers across the world, and, a century later, send a fragment of the original Flyer to the surface of Mars.
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
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-[1.75rem] md:rounded-[2.25rem] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
                  <Image src="/ep3-glider-1902.jpg" alt="A Wright glider soaring over the dunes at Kitty Hawk, 1902" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-headline italic text-primary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1902</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The Glider Years</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">After a homemade wind tunnel rewrote the science of lift, the brothers made hundreds of glides at Kitty Hawk, perfecting the three-axis control system, wing-warping, and rudder that would make true flight possible.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-[1.75rem] md:rounded-[2.25rem] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
                  <Image src="/ep3-kittyhawk-1903.jpg" alt="The Wright Flyer on its launching rail at Kitty Hawk, December 1903" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover" />
                </div>
                <div className="w-full md:w-1/2 md:text-right">
                  <span className="font-headline italic text-secondary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1903</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">Twelve Seconds at Kitty Hawk</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">On December 17, with Orville at the controls and Wilbur running alongside, the Flyer rose from its rail and travelled 120 feet in twelve seconds, the first powered, controlled, sustained flight of a heavier-than-air machine.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-[1.75rem] md:rounded-[2.25rem] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
                  <Image src="/ep3-fortmyer-1909.jpg" alt="A Wright Flyer demonstration flight over Fort Myer, Virginia, 1909" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-headline italic text-primary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1908–09</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">Proving It to the World</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">Public demonstrations in France and military trials at Fort Myer silenced the doubters. The aerial age had begun, and the airplane would soon reshape travel, warfare, and humanity&apos;s sense of what was possible.</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="card-glass rounded-[2rem] p-8 md:p-10 flex flex-col gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-3xl overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep3-wilbur.jpg" alt="Wilbur Wright" fill className="object-cover object-top" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Wilbur Wright</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Strategist</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The elder brother and driving intellect, who framed flight as a problem of control and led the theoretical work, then carried the Flyer to Europe and made the world believe.</p>
                </div>
              </div>

              <div className="card-glass rounded-[2rem] p-8 md:p-10 flex flex-col gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-3xl overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep3-orville.jpg" alt="Orville Wright" fill className="object-cover object-top" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Orville Wright</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Builder</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The hands-on engineer and mechanic who piloted the first flight at Kitty Hawk, and who lived long enough to see aircraft break the sound barrier.</p>
                </div>
              </div>

              <div className="card-glass rounded-[2rem] p-8 md:p-10 flex flex-col gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-3xl overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep3-lilienthal.jpg" alt="Otto Lilienthal" fill className="object-cover object-top" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Otto Lilienthal</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Glider Pioneer</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The German &ldquo;flying man&rdquo; whose gliding experiments, and fatal 1896 crash, inspired the Wrights and proved that mastering control, not just lift, was the key to flight.</p>
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
