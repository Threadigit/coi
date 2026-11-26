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
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-x-0 top-0 h-44 scrim-top"></div>
            <div className="absolute inset-x-0 bottom-0 h-[75%] scrim-bottom"></div>
          </div>
          <div className="lb-bar lb-top" aria-hidden="true"></div>
          <div className="lb-bar lb-bot" aria-hidden="true"></div>
          <div className="relative z-10 w-full max-w-[1500px] mx-auto">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <span className="kicker">Episode 001</span>
              <span className="kicker !text-on-surface/50">1879 - 1893</span>
            </div>
            <h1 className="title-card text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[6rem] text-on-surface mb-7 md:mb-10">
              Light Bulb & Electricity: <br/><span className="text-primary italic pr-2">Edison vs Tesla&apos;s Hidden Battle</span>
            </h1>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.2] pt-5 text-on-surface/85 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">19 Minute Feature</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary !text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">The War of Currents</span>
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
          <div className="max-w-[1600px] mx-auto px-5 md:px-12 pt-20 md:pt-32 pb-10 md:pb-14 text-center" data-reveal>
            <span className="kicker mb-5 block">The Full Documentary</span>
            <h2 className="title-card text-4xl md:text-7xl">Watch the <span className="text-primary italic pr-1">Feature</span></h2>
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

        {/* Historical Milestones: one scene each */}
        <section className="bg-[#05070a]">
          <div className="px-5 md:px-12 py-20 md:py-32 text-center" data-reveal>
            <div className="kicker mb-5">The Story in Three Scenes</div>
            <h3 className="title-card text-4xl md:text-7xl">Historical <span className="text-primary italic pr-1">Milestones</span></h3>
          </div>
          <div className="scene relative flex min-h-[85svh] md:min-h-[100svh] items-end ">
            <div className="absolute inset-0 overflow-hidden">
              <Image src="/ep1-bulb-1879.jpg" alt="Edison carbon filament light bulb" fill sizes="100vw" className="parallax object-cover saturate-[.8]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
            <div className="absolute inset-0 scrim-side"></div>
            <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 md:px-12 pb-14 md:pb-24 pt-28" data-reveal>
              <span className="font-headline italic text-primary text-7xl md:text-[9rem] leading-none tracking-[-0.04em] block mb-4 md:mb-6">1879</span>
              <h4 className="title-card text-3xl md:text-6xl mb-5 md:mb-6 max-w-3xl">The Lamp That Banished Night</h4>
              <p className="text-on-surface/80 text-base md:text-xl leading-relaxed max-w-xl">Edison&apos;s carbon-filament bulb finally burned long enough to be practical. It was not the first electric light, but it was the first anyone could sell, the cornerstone of an empire built on direct current.</p>
            </div>
          </div>
          <div className="scene relative flex min-h-[85svh] md:min-h-[100svh] items-end ">
            <div className="absolute inset-0 overflow-hidden">
              <Image src="/ep1-tesla-ac-1888.jpg" alt="Nikola Tesla with his alternating-current equipment" fill sizes="100vw" className="parallax object-cover saturate-[.8]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
            <div className="absolute inset-0 scrim-side"></div>
            <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 md:px-12 pb-14 md:pb-24 pt-28" data-reveal>
              <span className="font-headline italic text-primary text-7xl md:text-[9rem] leading-none tracking-[-0.04em] block mb-4 md:mb-6">1888</span>
              <h4 className="title-card text-3xl md:text-6xl mb-5 md:mb-6 max-w-3xl">The Polyphase System</h4>
              <p className="text-on-surface/80 text-base md:text-xl leading-relaxed max-w-xl">Tesla&apos;s alternating-current motor and polyphase patents proved electricity could travel hundreds of miles at high voltage. Westinghouse bought the rights, and the War of Currents turned existential for Edison.</p>
            </div>
          </div>
          <div className="scene relative flex min-h-[85svh] md:min-h-[100svh] items-end ">
            <div className="absolute inset-0 overflow-hidden">
              <Image src="/ep1-niagara-1893.jpg" alt="Westinghouse alternating-current generators at Niagara Falls" fill sizes="100vw" className="parallax object-cover saturate-[.8]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
            <div className="absolute inset-0 scrim-side"></div>
            <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 md:px-12 pb-14 md:pb-24 pt-28" data-reveal>
              <span className="font-headline italic text-primary text-7xl md:text-[9rem] leading-none tracking-[-0.04em] block mb-4 md:mb-6">1893</span>
              <h4 className="title-card text-3xl md:text-6xl mb-5 md:mb-6 max-w-3xl">The World&apos;s Fair Showdown</h4>
              <p className="text-on-surface/80 text-base md:text-xl leading-relaxed max-w-xl">Westinghouse and Tesla lit the Chicago World&apos;s Columbian Exposition with AC, dazzling 27 million visitors. Within two years their current would harness Niagara Falls, settling the war for good.</p>
            </div>
          </div>
        </section>

        {/* The Cast */}
        <section className="px-5 md:px-12 py-20 md:py-32 bg-[#05070a]">
          <div className="max-w-[1500px] mx-auto">
            <div className="mb-12 md:mb-16 text-center" data-reveal>
              <div className="kicker mb-5">Featuring</div>
              <h3 className="title-card text-4xl md:text-6xl">The Combatants</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12 md:gap-y-12 mx-auto">
              <div className="group flex items-start gap-5" data-reveal>
                <div className="relative h-28 w-28 md:h-32 md:w-32 shrink-0 overflow-hidden bg-surface-container-high">
                  <Image src="/ep1-edison.jpg" alt="Thomas Edison" fill sizes="128px" className="object-cover saturate-[.4] transition-all duration-[900ms] group-hover:saturate-100" />
                </div>
                <div className="min-w-0">
                  <h5 className="title-card text-xl md:text-2xl text-primary mb-1.5">Thomas Edison</h5>
                  <p className="kicker !tracking-[0.25em] !text-[10px] mb-3">The Wizard of Menlo Park</p>
                  <p className="text-on-surface/60 text-[14px] leading-relaxed">Champion of direct current and the world&apos;s first electrical empire. A relentless inventor and showman who would wage a ruthless campaign to defend the system he built.</p>
                </div>
              </div>
              <div className="group flex items-start gap-5" data-reveal>
                <div className="relative h-28 w-28 md:h-32 md:w-32 shrink-0 overflow-hidden bg-surface-container-high">
                  <Image src="/ep1-tesla.jpg" alt="Nikola Tesla" fill sizes="128px" className="object-cover saturate-[.4] transition-all duration-[900ms] group-hover:saturate-100" />
                </div>
                <div className="min-w-0">
                  <h5 className="title-card text-xl md:text-2xl text-primary mb-1.5">Nikola Tesla</h5>
                  <p className="kicker !tracking-[0.25em] !text-[10px] mb-3">The Master of Lightning</p>
                  <p className="text-on-surface/60 text-[14px] leading-relaxed">The visionary behind the alternating-current system that powers the world today. He won the technological war but died nearly penniless, his genius vindicated only in hindsight.</p>
                </div>
              </div>
              <div className="group flex items-start gap-5" data-reveal>
                <div className="relative h-28 w-28 md:h-32 md:w-32 shrink-0 overflow-hidden bg-surface-container-high">
                  <Image src="/ep1-westinghouse.jpg" alt="George Westinghouse" fill sizes="128px" className="object-cover saturate-[.4] transition-all duration-[900ms] group-hover:saturate-100" />
                </div>
                <div className="min-w-0">
                  <h5 className="title-card text-xl md:text-2xl text-primary mb-1.5">George Westinghouse</h5>
                  <p className="kicker !tracking-[0.25em] !text-[10px] mb-3">The Industrialist Backer</p>
                  <p className="text-on-surface/60 text-[14px] leading-relaxed">The engineer-financier who bet his fortune on Tesla&apos;s AC patents. His capital and conviction turned one immigrant&apos;s equations into the grid that lit a continent.</p>
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
              <h3 className="font-headline text-4xl">Chapter <span className="text-primary italic pr-1">Breakdown</span></h3>
            </div>
            <ol className="divide-y divide-white/[0.07]">
              {chapters.map((chapter, index) => (
                <li key={chapter.time}>
                  <a
                    href={`${WATCH_URL}&t=${chapter.start}s`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 py-5 px-4 -mx-4 rounded-sm group transition-colors hover:bg-white/[0.05]"
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
