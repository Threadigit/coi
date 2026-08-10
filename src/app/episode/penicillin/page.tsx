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
        "description": "A dirty petri dish, a patch of mould, and an accident that changed medicine forever. The story of how Alexander Fleming's 1928 discovery — ignored for a decade — was transformed by Oxford scientists and American industry into penicillin, the antibiotic that saved millions.",
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
            "https://adetuyi.com",
            "https://www.youtube.com/@ChronicleofInnovation",
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
        <header className="relative w-full h-[600px] md:h-[870px] overflow-hidden flex items-end px-6 md:px-12 pb-24 md:pb-48">
          <div className="absolute inset-0 z-0">
            <Image
              src="/pen-hero.jpg"
              alt="Alexander Fleming examining a culture dish in his laboratory at St Mary's Hospital"
              fill
              priority
              className="object-cover object-top opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20"></div>
          </div>
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-surface-container-highest px-4 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold text-secondary">Episode 002</span>
              <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-semibold">1928 - 1945</span>
            </div>
            <h1 className="font-headline text-5xl md:text-8xl leading-[1.1] text-on-surface tracking-tight mb-8">
              Penicillin: <br/><span className="text-primary italic">The Accident That Changed Medicine</span>
            </h1>
            <div className="flex items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-xs uppercase tracking-widest font-medium">16 Minute Feature</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>science</span>
                <span className="text-xs uppercase tracking-widest font-medium">The First Antibiotic</span>
              </div>
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
                &ldquo;A dirty petri dish. A patch of mould. And an accident that would go on to save more lives than any invention in history.&rdquo;
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <p className="drop-cap font-body text-xl text-on-surface/80 leading-relaxed mb-8">
                In September 1928, the Scottish bacteriologist Alexander Fleming returned from holiday to a cluttered London laboratory and a stack of forgotten culture dishes. One had been colonised by a stray blue-green mould — and in a clear ring around it, the staphylococcus bacteria had simply vanished. Where others would have washed the dish out, Fleming paused. That contaminated plate held the first clue to penicillin, the substance the mould was quietly producing.
              </p>
              <p className="font-body text-xl text-on-surface/80 leading-relaxed">
                But Fleming could not purify it, and his 1929 paper was largely ignored for more than a decade. It took a second act — Howard Florey, Ernst Chain, and the quietly brilliant Norman Heatley at Oxford — to turn a laboratory curiosity into a medicine, and American scientists and manufacturers to make it by the ton. Within a few years, penicillin was saving wounded soldiers in the Second World War, opening the age of antibiotics and rewriting what medicine could promise.
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
                  <Image src="/ep2-mould-1928.jpg" alt="A sample of Alexander Fleming's original penicillin mould" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-primary text-5xl font-bold mb-4 block">1928</span>
                  <h4 className="font-headline text-2xl mb-4">The Contaminated Dish</h4>
                  <p className="text-slate-400 leading-relaxed">A patch of <span className="italic">Penicillium notatum</span> drifted onto a discarded culture plate and killed the bacteria around it. Fleming noticed what almost anyone else would have thrown away — the accident at the heart of modern medicine.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep2-fleming-color.jpg" alt="Alexander Fleming at his laboratory bench" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover object-top" />
                </div>
                <div className="w-full md:w-1/2 text-right">
                  <span className="font-label text-secondary text-5xl font-bold mb-4 block">1929</span>
                  <h4 className="font-headline text-2xl mb-4">The Discovery No One Wanted</h4>
                  <p className="text-slate-400 leading-relaxed">Fleming published his findings, but without a way to purify the fragile compound, penicillin was dismissed as a curiosity. For more than ten years, the most important antibacterial agent ever found sat unused in the scientific literature.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep2-about.jpg" alt="A wartime advertisement describing the mass production of penicillin" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover object-top" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-primary text-5xl font-bold mb-4 block">1944</span>
                  <h4 className="font-headline text-2xl mb-4">The War Machine</h4>
                  <p className="text-slate-400 leading-relaxed">Oxford proved it could cure, and American industry proved it could scale. Glass flasks gave way to deep-tank fermentation, production times collapsed from weeks to days, and penicillin reached the front lines in time for D-Day.</p>
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
                  <Image src="/ep2-fleming.jpg" alt="Alexander Fleming" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Alexander Fleming</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Accidental Discoverer</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The bacteriologist whose sharp eye turned a contaminated dish into a discovery. He named penicillin but could never make it in a usable form — a problem that would wait a decade for its answer.</p>
                </div>
              </div>

              <div className="bg-surface-container p-12 flex flex-col gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep2-florey.jpg" alt="Howard Florey" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Howard Florey</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Man Who Made It Real</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The Oxford pathologist who led the team that rescued penicillin from obscurity, proved it could cure in patients, and drove the effort to produce it at scale.</p>
                </div>
              </div>

              <div className="bg-surface-container p-12 flex flex-col gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep2-chain.jpg" alt="Ernst Chain" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Ernst Chain</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Chemist</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The biochemist who cracked the problem of isolating and stabilising penicillin. He shared the 1945 Nobel Prize in Medicine with Fleming and Florey for the breakthrough.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-surface">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="font-headline text-5xl mb-8">Continue the Journey</h3>
            <p className="text-slate-400 mb-12 text-lg">Watch the full documentary on YouTube or engage with our community of historians and scientists.</p>
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
