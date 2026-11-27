import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { episodeData } from "@/lib/episode-data";
import { episodeBases } from "@/lib/episodes";
import { getMessages } from "@/i18n/messages";
import { locales, localeMeta, localizedPath, type Locale } from "@/i18n/config";
import { getLocale, pageAlternates, absoluteUrl, SITE, ogLocales } from "@/i18n/page";
import { rich, plain } from "@/i18n/rich";
import { embedUrl, hasDedicatedVideo, videoIdFor, watchUrl } from "@/i18n/video";

type EpisodeText = {
  metaTitle: string; pageTitle: string; pageDescription: string; videoName: string; videoDescription: string;
  breadcrumb: string; heroAlt: string; episodeLabel: string; range: string; title: string; chips: string[];
  quote: string; p1: string; p2: string; castTitle: string;
  milestones: { alt: string; year: string; title: string; text: string }[];
  people: { alt: string; name: string; role: string; text: string }[];
  chapterTitles?: string[];
};

type Params = { lang: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((lang) => episodeBases.map((e) => ({ lang, slug: e.slug })));
}

function load(lang: Locale, slug: string) {
  const d = episodeData[slug];
  if (!d) notFound();
  const m = getMessages(lang);
  const e = (m.episodes as Record<string, EpisodeText>)[slug];
  return { d, m, e };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const lang = await getLocale(params);
  const { d, e } = load(lang, slug);
  const path = `/episode/${slug}`;
  return {
    title: { absolute: e.metaTitle },
    description: e.pageDescription,
    keywords: [...d.keywords, "innovation documentary", "Chronicles of Innovation"],
    authors: [{ name: "Tolu Adetuyi", url: `${SITE}/about` }],
    creator: "Tolu Adetuyi",
    category: "Documentary",
    alternates: pageAlternates(lang, path),
    openGraph: {
      ...ogLocales(lang),
      type: "video.episode",
      title: e.pageTitle,
      description: e.pageDescription,
      url: localizedPath(lang, path),
      siteName: "Chronicles of Innovation",
      releaseDate: d.releaseDate,
      duration: d.durationSeconds,
      series: "Chronicles of Innovation",
      tags: d.keywords,
      images: [{ url: `${path}/opengraph-image`, width: 1200, height: 630 }],
      videos: [{ url: `https://www.youtube.com/embed/${videoIdFor(d, lang)}`, type: "text/html", width: 1280, height: 720 }],
    },
    twitter: {
      card: "summary_large_image",
      title: e.pageTitle,
      description: e.pageDescription,
      images: [`${path}/twitter-image`],
    },
  };
}

const personIcon = (i: number) => i;

export default async function EpisodePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const lang = await getLocale(params);
  const { d, m, e } = load(lang, slug);
  const u = m.episodeUi;
  const path = `/episode/${slug}`;
  const watch = watchUrl(d, lang);
  const embed = embedUrl(d, lang);
  const plainWatch = `https://www.youtube.com/watch?v=${videoIdFor(d, lang)}`;
  const videoLang = hasDedicatedVideo(d, lang) ? localeMeta[lang].htmlLang : "en";
  const KEYWORDS = [...d.keywords, "innovation documentary", "Chronicles of Innovation"];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `${absoluteUrl(lang, path)}#video`,
        "name": e.videoName,
        "alternateName": e.pageTitle,
        "description": e.videoDescription,
        "thumbnailUrl": [`https://i.ytimg.com/vi/${videoIdFor(d, lang)}/maxresdefault.jpg`, ...d.thumbs.map((t) => `${SITE}${t}`)],
        "uploadDate": d.releaseDate,
        "duration": d.durationIso,
        "contentUrl": plainWatch,
        "embedUrl": `https://www.youtube.com/embed/${videoIdFor(d, lang)}`,
        "inLanguage": videoLang,
        "genre": "Documentary",
        "isFamilyFriendly": true,
        "keywords": KEYWORDS.join(", "),
        "publisher": { "@type": "Organization", "name": "Chronicles of Innovation", "url": SITE, "logo": { "@type": "ImageObject", "url": `${SITE}/coi_logo_transparent.png` } },
        "creator": {
          "@type": "Person", "@id": `${SITE}/#toluadetuyi`, "name": "Tolu Adetuyi", "url": `${SITE}/about`, "jobTitle": u.jobTitle,
          "sameAs": ["https://www.adetuyi.com", "https://www.linkedin.com/in/adetuyitolu/", "https://x.com/AdetuyiTolu", "https://www.youtube.com/@adetuyitolu"],
        },
        "isPartOf": { "@type": "CreativeWorkSeries", "name": "Chronicles of Innovation", "url": SITE },
        "about": d.about.map((a) => ({ "@type": a.type, "name": a.name, "sameAs": a.sameAs })),
        ...(d.chapters && e.chapterTitles
          ? {
              "hasPart": d.chapters.map((c, i) => ({
                "@type": "Clip",
                "name": e.chapterTitles![i],
                "startOffset": c.start,
                "endOffset": i < d.chapters!.length - 1 ? d.chapters![i + 1].start : d.durationSeconds,
                "url": `${plainWatch}&t=${c.start}s`,
              })),
            }
          : {}),
        "potentialAction": { "@type": "WatchAction", "target": plainWatch },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(lang, path)}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": u.home, "item": absoluteUrl(lang, "/") },
          { "@type": "ListItem", "position": 2, "name": u.archive, "item": absoluteUrl(lang, "/archive") },
          { "@type": "ListItem", "position": 3, "name": e.breadcrumb, "item": absoluteUrl(lang, path) },
        ],
      },
    ],
  };

  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="pt-24">
        {/* Hero Section */}
        <header className="relative isolate w-full cinema min-h-[92svh] md:min-h-[100svh] overflow-hidden flex items-end px-5 md:px-12 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:pb-28 pt-32 md:pt-40">
          <div className="absolute inset-0 z-0">
            <Image src={d.heroImage} alt={e.heroAlt} fill priority sizes="100vw" className="object-cover opacity-80 saturate-[.8] hero-kenburns" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-x-0 top-0 h-44 scrim-top"></div>
            <div className="absolute inset-x-0 bottom-0 h-[75%] scrim-bottom"></div>
          </div>
          <div className="lb-bar lb-top" aria-hidden="true"></div>
          <div className="lb-bar lb-bot" aria-hidden="true"></div>
          <div className="relative z-10 w-full max-w-[1600px] mx-auto">
            <div className="max-w-5xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                <span className="kicker">{e.episodeLabel}</span>
                <span className="kicker !text-on-surface/50">{e.range}</span>
              </div>
              <h1 className="title-card text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[6rem] text-on-surface mb-7 md:mb-10">
                {rich(e.title, "text-primary italic pr-2")}
              </h1>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.2] pt-5 text-on-surface/85 max-w-2xl">
                {e.chips.map((chip, i) => (
                  <div key={chip} className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary !text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{d.chipIcons[personIcon(i)]}</span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-semibold">{chip}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-8 gap-y-5">
                <a href="#watch" className="btn btn-primary w-full sm:w-auto sm:min-w-[16rem]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 22 }}>play_arrow</span>
                  {u.watchTheFeature}
                </a>
                <Link href={localizedPath(lang, "/about")} className="font-label text-[12px] tracking-[0.04em] text-on-surface/55 hover:text-primary transition-colors">
                  {u.curatedBy} <span className="text-secondary">Tolu Adetuyi</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Watch Section: full-width theatre */}
        <section id="watch" className="relative scroll-mt-0 bg-black">
          <div className="max-w-[1600px] mx-auto px-5 md:px-12 pt-20 md:pt-32 pb-10 md:pb-14 text-center" data-reveal>
            <span className="kicker mb-5 block">{u.fullDocumentary}</span>
            <h2 className="title-card text-4xl md:text-7xl">{rich(u.watchHeading, "text-primary italic pr-1")}</h2>
          </div>
          <div className="relative mx-auto aspect-video w-full max-h-[calc(100svh-5rem)] bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={embed}
              title={e.videoName}
              lang={videoLang}
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
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-24">
            <div className="w-full md:w-1/3" data-reveal>
              <h2 className="eyebrow mb-6">{u.genesis}</h2>
              <p className="font-headline text-2xl text-on-surface-variant leading-relaxed italic">&ldquo;{e.quote}&rdquo;</p>
            </div>
            <div className="w-full md:w-2/3 max-w-3xl" data-reveal style={{ ["--d" as string]: 1 }}>
              <p className="drop-cap font-body text-lg md:text-xl text-on-surface/75 leading-[1.7] mb-8">{e.p1}</p>
              <p className="font-body text-lg md:text-xl text-on-surface/75 leading-[1.7]">{e.p2}</p>
            </div>
          </div>
        </section>

        {/* Historical Milestones: one scene each */}
        <section className="bg-[#05070a]">
          <div className="px-5 md:px-12 py-20 md:py-32 text-center" data-reveal>
            <div className="kicker mb-5">{u.scenes}</div>
            <h3 className="title-card text-4xl md:text-7xl">{rich(u.milestones, "text-primary italic pr-1")}</h3>
          </div>
          {e.milestones.map((ms, i) => {
            const img = d.milestoneImages[i];
            return (
              <div key={ms.title} className={`scene relative flex min-h-[85svh] md:min-h-[100svh] items-end ${img.contain ? "bg-[#0a0e12]" : ""}`}>
                <div className="absolute inset-0 overflow-hidden">
                  <Image src={img.src} alt={ms.alt} fill sizes="100vw" className={`${img.contain ? "object-contain p-8 md:p-24 opacity-90" : "parallax object-cover"} saturate-[.8]`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
                <div className="absolute inset-0 scrim-side"></div>
                <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-12 pb-14 md:pb-24 pt-28" data-reveal>
                  <span className="font-headline italic text-primary text-5xl md:text-[9rem] leading-none tracking-[-0.04em] block mb-4 md:mb-6">{ms.year}</span>
                  <h4 className="title-card text-3xl md:text-6xl mb-5 md:mb-6 max-w-3xl">{ms.title}</h4>
                  <p className="text-on-surface/80 text-base md:text-xl leading-relaxed max-w-xl">{rich(ms.text)}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* The Cast */}
        <section className="px-5 md:px-12 py-20 md:py-32 bg-[#05070a]">
          <div className="max-w-[1600px] mx-auto">
            <div className="mb-12 md:mb-16 text-center" data-reveal>
              <div className="kicker mb-5">{u.featuring}</div>
              <h3 className="title-card text-4xl md:text-6xl">{e.castTitle}</h3>
            </div>
            <div className={`grid grid-cols-1 ${e.people.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 max-w-4xl"} gap-10 md:gap-x-12 md:gap-y-12 mx-auto`}>
              {e.people.map((p, i) => (
                <div key={p.name} className="group flex items-start gap-5" data-reveal>
                  <div className="relative h-28 w-28 md:h-32 md:w-32 shrink-0 overflow-hidden bg-surface-container-high">
                    <Image src={d.peopleImages[i]} alt={p.alt} fill sizes="128px" className="object-cover saturate-[.4] transition-all duration-[900ms] group-hover:saturate-100" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="title-card text-xl md:text-2xl text-primary mb-1.5">{p.name}</h5>
                    <p className="kicker !tracking-[0.25em] !text-[10px] mb-3">{p.role}</p>
                    <p className="text-on-surface/60 text-[14px] leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter Timeline */}
        {d.chapters && e.chapterTitles && (
          <section className="px-5 md:px-12 py-20 md:py-32 bg-surface-container-low">
            <div className="max-w-5xl mx-auto">
              <div className="mb-16 text-center">
                <span className="eyebrow mb-4 block">{u.insideFeature}</span>
                <h3 className="font-headline text-4xl">{rich(u.chapterBreakdown, "text-primary italic pr-1")}</h3>
              </div>
              <ol className="divide-y divide-white/[0.07]">
                {d.chapters.map((chapter, index) => (
                  <li key={chapter.time}>
                    <a
                      href={watchUrl(d, lang, chapter.start)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-6 py-5 px-4 -mx-4 rounded-sm group transition-colors hover:bg-white/[0.05]"
                    >
                      <span className="font-label text-primary serif-display italic text-lg w-10 flex-shrink-0">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-body text-on-surface text-base md:text-lg group-hover:text-primary transition-colors flex-1">{e.chapterTitles![index]}</span>
                      <span className="font-label text-[10px] tracking-widest text-on-surface/50 uppercase tabular-nums flex-shrink-0 group-hover:text-primary transition-colors">{chapter.time}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="relative py-24 md:py-40 bg-surface overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-6 text-center" data-reveal>
            <h3 className="font-headline text-4xl md:text-7xl tracking-[-0.035em] mb-6 md:mb-8">{u.continueTitle}</h3>
            <p className="text-on-surface/60 mb-12 text-lg md:text-xl">{u.continueText}</p>
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href={watch} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-8 !py-4 !text-[14px]">
                <span className="material-symbols-outlined">play_circle</span>
                {u.watchOnYouTube}
              </Link>
              <a href="https://www.youtube.com/channel/UCKU6JFP0__kQ12KSgvtroLQ/community" target="_blank" rel="noopener noreferrer" className="btn btn-glass w-full sm:w-auto">
                <span className="material-symbols-outlined">forum</span>
                {u.joinDiscussion}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
