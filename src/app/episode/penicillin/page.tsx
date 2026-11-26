import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const SITE = "https://chroniclesofinnovation.com";
const PATH = "/episode/penicillin";

const VIDEO_ID = "zbeBT46ymp4";
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const DURATION_SECONDS = 976; // 16:16
const DURATION_ISO = "PT16M16S";
const RELEASE_DATE = "2026-08-09";
const VIDEO_NAME = "The Miracle Drug That Shouldn't Exist: Penicillin";

const PAGE_TITLE = "Penicillin: The Miracle Drug That Shouldn't Exist";
const PAGE_DESCRIPTION =
  "How a contaminated petri dish became penicillin: Alexander Fleming's accidental 1928 discovery, and the Oxford team that turned a patch of mould into the world's first antibiotic.";

const KEYWORDS = [
  "penicillin",
  "Alexander Fleming",
  "who discovered penicillin",
  "history of penicillin",
  "first antibiotic",
  "Howard Florey",
  "Ernst Chain",
  "penicillin discovery",
  "history of antibiotics",
  "medical history",
  "Penicillium notatum",
  "miracle drug",
  "innovation documentary",
  "Chronicles of Innovation",
];

export const metadata: Metadata = {
  title: { absolute: "Penicillin: The Accident That Changed Medicine | Chronicles of Innovation" },
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

export default function PenicillinEpisode() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `${SITE}${PATH}#video`,
        "name": VIDEO_NAME,
        "alternateName": PAGE_TITLE,
        "description": "A dirty petri dish, a patch of mould, and an accident that changed medicine forever. The story of how Alexander Fleming's 1928 discovery, ignored for a decade, was transformed by Oxford scientists and American industry into penicillin, the antibiotic that saved millions.",
        "thumbnailUrl": [
          `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
          `${SITE}/pen-hero.jpg`,
          `${SITE}/ep2-mould-1928.jpg`,
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
            "name": "Alexander Fleming",
            "sameAs": "https://en.wikipedia.org/wiki/Alexander_Fleming",
          },
          {
            "@type": "Person",
            "name": "Howard Florey",
            "sameAs": "https://en.wikipedia.org/wiki/Howard_Florey",
          },
          {
            "@type": "Person",
            "name": "Ernst Chain",
            "sameAs": "https://en.wikipedia.org/wiki/Ernst_Chain",
          },
          {
            "@type": "Thing",
            "name": "Penicillin",
            "sameAs": "https://en.wikipedia.org/wiki/Penicillin",
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
          { "@type": "ListItem", "position": 3, "name": "Penicillin", "item": `${SITE}${PATH}` },
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
              src="/pen-hero.jpg"
              alt="Alexander Fleming examining a culture dish in his laboratory at St Mary's Hospital"
              fill
              priority
              className="object-cover object-top opacity-50"
            />
            <div className="absolute inset-0 scrim-side"></div>
            <div className="absolute inset-x-0 top-0 h-40 scrim-top"></div>
            <div className="absolute inset-x-0 bottom-0 h-[75%] scrim-bottom"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <span className="h-px w-10 bg-primary" aria-hidden="true"></span>
              <span className="eyebrow !text-on-surface/85">Episode 002</span>
              <span className="eyebrow !text-on-surface/55">1928 - 1945</span>
            </div>
            <h1 className="font-headline text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.05] text-on-surface tracking-[-0.035em] mb-7 md:mb-10">
              Penicillin: <br/><span className="text-primary italic pr-2">The Accident That Changed Medicine</span>
            </h1>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.2] pt-5 text-on-surface/85 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">16 Minute Feature</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>science</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">The First Antibiotic</span>
              </div>
            </div>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-8 gap-y-5">
              <a href="#watch" className="btn btn-primary w-full sm:w-auto sm:min-w-[16rem]">
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

        {/* Watch Section: full-width theatre */}
        <section id="watch" className="relative scroll-mt-0 bg-black">
          <div className="max-w-[1600px] mx-auto px-5 md:px-12 pt-16 md:pt-24 pb-8 md:pb-10 border-0" data-reveal>
            <span className="eyebrow mb-4 block">The Full Documentary</span>
            <h2 className="font-headline text-4xl md:text-6xl tracking-[-0.03em]">Watch the <span className="text-primary italic pr-1">Feature</span></h2>
          </div>
          <div className="relative mx-auto aspect-video w-full max-h-[calc(100svh-5rem)] bg-black">
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
          <div className="h-14 md:h-24" aria-hidden="true"></div>
        </section>

        {/* Narrative Section */}
        <section className="px-5 md:px-12 py-20 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
            <div className="w-full md:w-1/3" data-reveal>
              <h2 className="eyebrow mb-6">The Genesis</h2>
              <p className="font-headline text-2xl text-on-surface-variant leading-relaxed italic">
                &ldquo;A dirty petri dish. A patch of mould. And an accident that would go on to save more lives than any invention in history.&rdquo;
              </p>
            </div>
            <div className="w-full md:w-2/3" data-reveal style={{ ["--d" as string]: 1 }}>
              <p className="drop-cap font-body text-lg md:text-xl text-on-surface/75 leading-[1.7] mb-8">
                In September 1928, the Scottish bacteriologist Alexander Fleming returned from holiday to a cluttered London laboratory and a stack of forgotten culture dishes. One had been colonised by a stray blue-green mould, and in a clear ring around it, the staphylococcus bacteria had simply vanished. Where others would have washed the dish out, Fleming paused. That contaminated plate held the first clue to penicillin, the substance the mould was quietly producing.
              </p>
              <p className="font-body text-lg md:text-xl text-on-surface/75 leading-[1.7]">
                But Fleming could not purify it, and his 1929 paper was largely ignored for more than a decade. It took a second act, Howard Florey, Ernst Chain, and the quietly brilliant Norman Heatley at Oxford, to turn a laboratory curiosity into a medicine, and American scientists and manufacturers to make it by the ton. Within a few years, penicillin was saving wounded soldiers in the Second World War, opening the age of antibiotics and rewriting what medicine could promise.
              </p>
            </div>
          </div>
        </section>

        {/* Historical Milestones */}
        <section className="py-20 md:py-32 bg-surface-container-low px-5 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-headline text-[2rem] md:text-6xl tracking-[-0.03em] mb-14 md:mb-28 text-center">Historical <span className="text-primary italic pr-1">Milestones</span></h3>
            <div className="space-y-28 md:space-y-44">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-sm md:rounded-sm ring-1 ring-white/10 ">
                  <Image src="/ep2-mould-1928.jpg" alt="A sample of Alexander Fleming's original penicillin mould" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-headline italic text-primary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1928</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The Contaminated Dish</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">A patch of <span className="italic">Penicillium notatum</span> drifted onto a discarded culture plate and killed the bacteria around it. Fleming noticed what almost anyone else would have thrown away, the accident at the heart of modern medicine.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-sm md:rounded-sm ring-1 ring-white/10 ">
                  <Image src="/ep2-fleming-color.jpg" alt="Alexander Fleming at his laboratory bench" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover object-top" />
                </div>
                <div className="w-full md:w-1/2 md:text-right">
                  <span className="font-headline italic text-secondary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1929</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The Discovery No One Wanted</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">Fleming published his findings, but without a way to purify the fragile compound, penicillin was dismissed as a curiosity. For more than ten years, the most important antibacterial agent ever found sat unused in the scientific literature.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-sm md:rounded-sm ring-1 ring-white/10 ">
                  <Image src="/ep2-about.jpg" alt="A wartime advertisement describing the mass production of penicillin" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover object-top" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-headline italic text-primary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1944</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The War Machine</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">Oxford proved it could cure, and American industry proved it could scale. Glass flasks gave way to deep-tank fermentation, production times collapsed from weeks to days, and penicillin reached the front lines in time for D-Day.</p>
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
              <div className="h-[3px] w-16 rounded-sm bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="card-glass rounded-sm p-8 md:p-10 flex flex-col gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-sm overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep2-fleming.jpg" alt="Alexander Fleming" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Alexander Fleming</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Accidental Discoverer</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The bacteriologist whose sharp eye turned a contaminated dish into a discovery. He named penicillin but could never make it in a usable form, a problem that would wait a decade for its answer.</p>
                </div>
              </div>

              <div className="card-glass rounded-sm p-8 md:p-10 flex flex-col gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-sm overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep2-florey.jpg" alt="Howard Florey" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Howard Florey</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Man Who Made It Real</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The Oxford pathologist who led the team that rescued penicillin from obscurity, proved it could cure in patients, and drove the effort to produce it at scale.</p>
                </div>
              </div>

              <div className="card-glass rounded-sm p-8 md:p-10 flex flex-col gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-sm overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep2-chain.jpg" alt="Ernst Chain" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Ernst Chain</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Chemist</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The biochemist who cracked the problem of isolating and stabilising penicillin. He shared the 1945 Nobel Prize in Medicine with Fleming and Florey for the breakthrough.</p>
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
            <p className="text-on-surface/60 mb-12 text-lg md:text-xl">Watch the full documentary on YouTube or engage with our community of historians and scientists.</p>
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href={WATCH_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-8 !py-4 !text-[14px]">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch on YouTube
                </Link>
              <a href="https://www.youtube.com/channel/UCKU6JFP0__kQ12KSgvtroLQ/community" target="_blank" rel="noopener noreferrer" className="btn btn-glass w-full sm:w-auto">
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
