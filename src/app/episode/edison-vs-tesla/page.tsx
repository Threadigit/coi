import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const SITE = "https://chroniclesofinnovation.com";
const PATH = "/episode/edison-vs-tesla";
const VIDEO_ID = "otqgociwb3o";
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const DURATION_SECONDS = 1161; // 19:21
const DURATION_ISO = "PT19M21S";
const RELEASE_DATE = "2026-07-02";
const VIDEO_NAME = "Edison vs. Tesla: The Ruthless War That Lit the World";

const PAGE_TITLE = "Light Bulb & Electricity: Edison vs Tesla's Hidden Battle";
const PAGE_DESCRIPTION =
  "Inside the War of Currents: how Thomas Edison's light bulb empire and Nikola Tesla's alternating current fought a hidden battle to decide how the world would be powered.";

const KEYWORDS = [
  "Edison vs Tesla",
  "war of currents",
  "who invented the light bulb",
  "Thomas Edison",
  "Nikola Tesla",
  "George Westinghouse",
  "history of electricity",
  "AC vs DC",
  "alternating current",
  "direct current",
  "light bulb invention",
  "electricity documentary",
  "innovation documentary",
  "Chronicles of Innovation",
];

export const metadata: Metadata = {
  title: { absolute: "Edison vs Tesla: The War of Currents | Chronicles of Innovation" },
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

export default function EdisonVsTeslaEpisode() {
  const chapters = [
    { time: "00:00", start: 0, title: "The Dark Truth Behind Edison" },
    { time: "01:00", start: 60, title: "The World Before Electricity" },
    { time: "01:36", start: 96, title: "The Rise of Thomas Edison" },
    { time: "03:06", start: 186, title: "The Fatal Flaw in Edison's System" },
    { time: "03:36", start: 216, title: "The Arrival of Nikola Tesla" },
    { time: "04:02", start: 242, title: "Genius vs Power" },
    { time: "05:22", start: 322, title: "The Betrayal That Started It All" },
    { time: "05:52", start: 352, title: "The War of Currents Begins" },
    { time: "06:40", start: 400, title: "Edison's Ruthless Campaign" },
    { time: "09:19", start: 559, title: "Tesla Fights Back With Lightning" },
    { time: "12:02", start: 722, title: "The World's Fair Showdown" },
    { time: "15:35", start: 935, title: "The Man Who Won… But Lost Everything" },
    { time: "17:14", start: 1034, title: "Who Really Won the War?" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `${SITE}${PATH}#video`,
        "name": VIDEO_NAME,
        "alternateName": PAGE_TITLE,
        "description": "The War of Currents was never just science, it was war. Discover how Thomas Edison's direct current empire collided with Nikola Tesla's alternating current, a rivalry that electrified the modern world and broke the men who waged it.",
        "thumbnailUrl": [
          `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
          `${SITE}/edison-machine-shop.jpg`,
          `${SITE}/ep1-niagara-1893.jpg`,
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
            "name": "Thomas Edison",
            "sameAs": "https://en.wikipedia.org/wiki/Thomas_Edison",
          },
          {
            "@type": "Person",
            "name": "Nikola Tesla",
            "sameAs": "https://en.wikipedia.org/wiki/Nikola_Tesla",
          },
          {
            "@type": "Person",
            "name": "George Westinghouse",
            "sameAs": "https://en.wikipedia.org/wiki/George_Westinghouse",
          },
          {
            "@type": "Thing",
            "name": "War of the currents",
            "sameAs": "https://en.wikipedia.org/wiki/War_of_the_currents",
          },
        ],
        "hasPart": chapters.map((chapter, index) => ({
          "@type": "Clip",
          "name": chapter.title,
          "startOffset": chapter.start,
          "endOffset":
            index < chapters.length - 1 ? chapters[index + 1].start : DURATION_SECONDS,
          "url": `${WATCH_URL}&t=${chapter.start}s`,
        })),
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
          { "@type": "ListItem", "position": 3, "name": "Edison vs Tesla", "item": `${SITE}${PATH}` },
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
              src="/edison-machine-shop.jpg"
              alt="Thomas Edison's machine shop, lit by early electric lamps"
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
              <span className="glass rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold text-secondary">Episode 001</span>
              <span className="text-on-surface/60 text-[11px] tracking-[0.18em] uppercase font-semibold">1879 - 1893</span>
            </div>
            <h1 className="font-headline text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.05] text-on-surface tracking-[-0.035em] mb-7 md:mb-10">
              Light Bulb & Electricity: <br/><span className="text-gradient-gold italic pr-2">Edison vs Tesla&apos;s Hidden Battle</span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-on-surface/85">
              <div className="flex items-center gap-2 glass rounded-full pl-3 pr-4 py-2">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">19 Minute Feature</span>
              </div>
              <div className="flex items-center gap-2 glass rounded-full pl-3 pr-4 py-2">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">The War of Currents</span>
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
                &ldquo;This wasn&apos;t a contest of ideas. It was a war for the right to power the world, and only one current could win.&rdquo;
              </p>
            </div>
            <div className="w-full md:w-2/3" data-reveal style={{ ["--d" as string]: 1 }}>
              <p className="drop-cap font-body text-lg md:text-xl text-on-surface/75 leading-[1.7] mb-8">
                For all of human history, when the sun went down, the world went dark. Then, in 1879, Thomas Edison perfected the incandescent light bulb and set out to do something no one had attempted: to wire entire cities and sell electricity itself. His system ran on direct current, reliable over a few blocks, but fatally limited. DC could not travel far without bleeding away, demanding a power station on nearly every corner.
              </p>
              <p className="font-body text-lg md:text-xl text-on-surface/75 leading-[1.7]">
                Into that flaw walked Nikola Tesla, a Serbian immigrant with a head full of alternating-current machines Edison dismissed. When Tesla&apos;s vision collided with Edison&apos;s empire, and George Westinghouse&apos;s capital, it ignited the War of Currents: a brutal campaign of public demonstrations, propaganda, and electrocutions that would decide how humanity would be powered for the next century. One man would win the war. The other would win the future.
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
                  <Image src="/ep1-bulb-1879.jpg" alt="Edison carbon filament light bulb" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-headline italic text-primary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1879</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The Lamp That Banished Night</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">Edison&apos;s carbon-filament bulb finally burned long enough to be practical. It was not the first electric light, but it was the first anyone could sell, the cornerstone of an empire built on direct current.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-[1.75rem] md:rounded-[2.25rem] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
                  <Image src="/ep1-tesla-ac-1888.jpg" alt="Nikola Tesla with his alternating-current equipment" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover" />
                </div>
                <div className="w-full md:w-1/2 md:text-right">
                  <span className="font-headline italic text-secondary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1888</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The Polyphase System</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">Tesla&apos;s alternating-current motor and polyphase patents proved electricity could travel hundreds of miles at high voltage. Westinghouse bought the rights, and the War of Currents turned existential for Edison.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group" data-reveal>
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video rounded-[1.75rem] md:rounded-[2.25rem] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
                  <Image src="/ep1-niagara-1893.jpg" alt="Westinghouse alternating-current generators at Niagara Falls" fill className="saturate-[.5] hover:saturate-100 hover:scale-[1.04] transition-all duration-[900ms] ease-[var(--ease-spring)] object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-headline italic text-primary text-5xl md:text-8xl tracking-[-0.04em] mb-4 block">1893</span>
                  <h4 className="font-headline text-3xl md:text-4xl tracking-[-0.025em] mb-5">The World&apos;s Fair Showdown</h4>
                  <p className="text-on-surface/60 text-lg leading-relaxed">Westinghouse and Tesla lit the Chicago World&apos;s Columbian Exposition with AC, dazzling 27 million visitors. Within two years their current would harness Niagara Falls, settling the war for good.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Architects */}
        <section className="px-5 md:px-12 py-20 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h3 className="font-headline text-4xl md:text-6xl tracking-[-0.03em] mb-4">The Combatants</h3>
              <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="card-glass rounded-[2rem] p-8 md:p-10 flex flex-col gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-3xl overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep1-edison.jpg" alt="Thomas Edison" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Thomas Edison</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Wizard of Menlo Park</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">Champion of direct current and the world&apos;s first electrical empire. A relentless inventor and showman who would wage a ruthless campaign to defend the system he built.</p>
                </div>
              </div>

              <div className="card-glass rounded-[2rem] p-8 md:p-10 flex flex-col gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-3xl overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep1-tesla.jpg" alt="Nikola Tesla" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">Nikola Tesla</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Master of Lightning</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The visionary behind the alternating-current system that powers the world today. He won the technological war but died nearly penniless, his genius vindicated only in hindsight.</p>
                </div>
              </div>

              <div className="card-glass rounded-[2rem] p-8 md:p-10 flex flex-col gap-8" data-reveal>
                <div className="w-32 h-32 relative flex-shrink-0 bg-surface-container-high rounded-3xl overflow-hidden saturate-[.6] ring-1 ring-white/10">
                  <Image src="/ep1-westinghouse.jpg" alt="George Westinghouse" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-2xl tracking-[-0.02em] text-primary mb-2">George Westinghouse</h5>
                  <p className="eyebrow !text-on-surface/50 !text-[10px] mb-4">The Industrialist Backer</p>
                  <p className="text-on-surface/60 text-[15px] leading-relaxed">The engineer-financier who bet his fortune on Tesla&apos;s AC patents. His capital and conviction turned one immigrant&apos;s equations into the grid that lit a continent.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter Timeline */}
        <section className="px-5 md:px-12 py-20 md:py-32 bg-surface-container-low">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="eyebrow mb-4 block">Inside the Feature</span>
              <h3 className="font-headline text-4xl">Chapter <span className="text-gradient-gold italic pr-1">Breakdown</span></h3>
            </div>
            <ol className="divide-y divide-white/[0.07]">
              {chapters.map((chapter, index) => (
                <li key={chapter.time}>
                  <a
                    href={`${WATCH_URL}&t=${chapter.start}s`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 py-5 px-4 -mx-4 rounded-2xl group transition-colors hover:bg-white/[0.05]"
                  >
                    <span className="font-label text-primary serif-display italic text-lg w-10 flex-shrink-0">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-body text-on-surface text-base md:text-lg group-hover:text-primary transition-colors flex-1">{chapter.title}</span>
                    <span className="font-label text-[10px] tracking-widest text-on-surface/50 uppercase tabular-nums flex-shrink-0 group-hover:text-primary transition-colors">{chapter.time}</span>
                  </a>
                </li>
              ))}
            </ol>
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
