import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import HeroCinematicPreview from "@/components/HeroCinematicPreview";
import EpisodeScene from "@/components/EpisodeScene";
import CuratorQuote from "@/components/CuratorQuote";
import Shelf from "@/components/Shelf";
import { getEpisodes, episodeNumber } from "@/lib/episodes";
import { episodeData } from "@/lib/episode-data";
import { getMessages, format } from "@/i18n/messages";
import { localeMeta, localizedPath, locales } from "@/i18n/config";
import { getLocale, pageAlternates, absoluteUrl, SITE, ogLocales } from "@/i18n/page";
import { rich } from "@/i18n/rich";
import { videoIdFor } from "@/i18n/video";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLocale(params);
  const m = getMessages(lang).meta;
  return {
    title: { absolute: m.defaultTitle },
    description: m.homeDescription,
    alternates: pageAlternates(lang, "/"),
    openGraph: { ...ogLocales(lang), type: "website", url: localizedPath(lang, "/"), title: m.defaultTitle, description: m.ogDescription, siteName: "Chronicles of Innovation", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLocale(params);
  const m = getMessages(lang);
  const t = m.home;
  const episodes = getEpisodes(lang);
  const spotlight = episodes.find((e) => e.slug === "shipping-container")!;
  const eraLabel = (id: string) => m.eras[id as keyof typeof m.eras].label;
  const heroVideo = videoIdFor(episodeData["edison-vs-tesla"], lang);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        "name": "Chronicles of Innovation",
        "url": SITE,
        "logo": `${SITE}/coi_logo_transparent.png`,
        "description": m.meta.description,
        "foundingDate": "2026",
        "founder": { "@id": `${SITE}/#toluadetuyi` },
        "sameAs": [
          "https://www.youtube.com/@ChronicleofInnovation",
          "https://www.facebook.com/Chronicleofinnovation/",
          "https://www.instagram.com/chronicleofinnovation",
          "https://www.threads.com/@chronicleofinnovation",
          "https://www.tiktok.com/@chronicleofinnovation"
        ]
      },
      {
        "@type": "Person",
        "@id": `${SITE}/#toluadetuyi`,
        "name": "Tolu Adetuyi",
        "url": `${SITE}/about`,
        "jobTitle": m.episodeUi.jobTitle,
        "worksFor": { "@id": `${SITE}/#organization` },
        "sameAs": [
          "https://www.adetuyi.com",
          "https://www.linkedin.com/in/adetuyitolu/",
          "https://x.com/AdetuyiTolu",
          "https://www.youtube.com/@adetuyitolu"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Chronicles of Innovation",
        "url": SITE,
        "inLanguage": locales.map((l) => localeMeta[l].htmlLang),
        "description": m.meta.twitterDescription,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${SITE}${localizedPath(lang, "/archive")}?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "CreativeWorkSeries",
        "@id": `${SITE}/#series`,
        "name": "Chronicles of Innovation",
        "url": SITE,
        "inLanguage": localeMeta[lang].htmlLang,
        "description": m.meta.description,
        "publisher": { "@id": `${SITE}/#organization` },
        "author": { "@id": `${SITE}/#toluadetuyi` }
      },
      {
        "@type": "ItemList",
        "@id": `${SITE}/#episodes`,
        "name": `Chronicles of Innovation: ${m.common.episodes}`,
        "itemListElement": episodes.map((episode, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": absoluteUrl(lang, episode.href),
          "name": episode.title
        }))
      }
    ]
  };

  return (
    <div className="w-full overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Scene 1: the opening title card */}
      <section className="scene cinema flex min-h-[100svh] items-end">
        <div className="absolute inset-0">
          <HeroCinematicPreview
            videoId={heroVideo}
            image="/edison-machine-shop.jpg"
            alt={t.heroAlt}
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-x-0 top-0 h-44 scrim-top" />
          <div className="absolute inset-x-0 bottom-0 h-[85%] scrim-bottom" />
        </div>
        <div className="lb-bar lb-top" aria-hidden="true" />
        <div className="lb-bar lb-bot" aria-hidden="true" />
        <div className="relative z-10 w-full mx-auto max-w-[1600px] px-5 md:px-12 pt-40 pb-[max(2.25rem,env(safe-area-inset-bottom))] md:pb-24 text-center md:text-left">
          <div className="rise kicker mb-6 md:mb-8" style={{ ['--d' as string]: 0 }}>{t.heroKicker}</div>
          <h1
            className="rise title-card text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[5.4rem] text-on-surface max-w-6xl mx-auto md:mx-0"
            style={{ ['--d' as string]: 1 }}
          >
            {rich(t.heroTitle, "text-primary italic pr-2")}
          </h1>
          <div className="mt-6 md:mt-10 grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end">
            <p
              className="rise max-w-xl mx-auto md:mx-0 text-[15px] md:text-xl leading-relaxed text-on-surface/80"
              style={{ ['--d' as string]: 2 }}
            >
              {t.heroBlurb}
            </p>
            <div className="rise flex flex-col sm:flex-row gap-3 md:gap-4 md:justify-end" style={{ ['--d' as string]: 3 }}>
              <Link href={localizedPath(lang, "/episode/edison-vs-tesla")} className="btn btn-primary w-full sm:w-auto sm:min-w-[17rem]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 22 }}>play_arrow</span>
                {t.watchFeature}
              </Link>
              <Link href={localizedPath(lang, "/archive")} className="btn btn-glass w-full sm:w-auto">
                {m.common.viewFullSeries}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 z-10 hidden md:block h-14 w-px -translate-x-1/2 overflow-hidden" aria-hidden="true">
          <div className="scroll-cue h-full w-full bg-white/70" />
        </div>
      </section>

      {/* Scene 2: the series reel */}
      <section className="relative bg-[#05070a] pt-20 md:pt-32 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-12">
          <div className="mb-10 md:mb-16 text-center" data-reveal>
            <div className="kicker mb-5">{t.seriesKicker}</div>
            <h2 className="title-card text-5xl md:text-8xl text-on-surface">{rich(t.seriesTitle, "text-primary italic")}</h2>
          </div>
          <Shelf label={m.common.episodes}>
            {episodes.map((e) => (
              <EpisodeScene
                key={e.slug}
                episode={e}
                lang={lang}
                eraLabel={eraLabel(e.era)}
                episodeLabel={format(m.common.episode, { n: episodeNumber(e.slug) })}
                watchLabel={m.common.watch}
                className="w-[88vw] lg:w-[72vw] max-w-[1200px]"
              />
            ))}
          </Shelf>
          <div className="mt-12 md:mt-16 text-center">
            <Link href={localizedPath(lang, "/archive")} className="link-arrow">
              {m.common.viewFullSeries}
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Scene 3: the curator's statement */}
      <CuratorQuote
        htmlLang={localeMeta[lang].htmlLang}
        kicker={t.philosophyKicker}
        quote={t.quote}
        mission={t.mission}
        name={t.curatorName}
        role={t.curatorRole}
        alt={t.curatorAlt}
        href={localizedPath(lang, "/about")}
      />

      {/* Scene 4: current spotlight */}
      <section className="scene">
        <Link
          href={localizedPath(lang, "/episode/shipping-container")}
          aria-label={t.spotlightLabel}
          className="group relative flex min-h-[100svh] items-end overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/container-hero.jpg"
              alt={t.spotlightAlt}
              fill
              sizes="100vw"
              className="parallax object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35 lg:via-black/45 lg:to-black/30" />
          <div className="absolute inset-0 scrim-side" />
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-12 pb-14 md:pb-24 pt-32">
            <div className="kicker mb-6" data-reveal>{t.spotlightKicker}</div>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-24 items-end">
              <div data-reveal style={{ ['--d' as string]: 1 }}>
                <h2 className="title-card text-[2.8rem] md:text-8xl lg:text-[7.5rem] text-on-surface mb-6 md:mb-8">{t.spotlightTitle}</h2>
                <p className="text-on-surface/85 text-base md:text-xl leading-relaxed max-w-xl mb-8">
                  {t.spotlightBlurb}
                </p>
                <span className="btn btn-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 22 }}>play_arrow</span>
                  {m.common.watchNow}
                </span>
              </div>
              <div data-reveal style={{ ['--d' as string]: 2 }}>
                <div className="kicker !text-secondary mb-5">{t.spotlightTag}</div>
                <dl className="font-mono-label mb-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-white/[0.2] pt-5 text-[11px] uppercase tracking-[0.14em]">
                  <dt className="text-on-surface/50">{m.common.era}</dt>
                  <dd className="text-right text-on-surface">{eraLabel(spotlight.era)}</dd>
                  <dt className="text-on-surface/50">{m.common.year}</dt>
                  <dd className="text-right text-on-surface">{spotlight.year}</dd>
                  <dt className="text-on-surface/50">{m.common.episodeWord}</dt>
                  <dd className="text-right text-on-surface">{episodeNumber(spotlight.slug)}</dd>
                </dl>
                <ul className="border-t border-white/[0.2]">
                  {t.spotlightChapters.map((c, i) => (
                    <li key={c} className="flex items-baseline gap-5 border-b border-white/[0.2] py-4">
                      <span className="text-primary serif-display italic text-lg w-8 shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                      <span className="text-on-surface text-[15px]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Closing scene: the inner circle */}
      <section className="scene cinema flex min-h-[90svh] items-center justify-center px-5 md:px-12 py-24 text-center">
        <div className="relative z-10 w-full max-w-3xl" data-reveal>
          <div className="kicker mb-8 !text-primary">{t.newsletterKicker}</div>
          <h2 className="title-card text-[2.5rem] md:text-7xl lg:text-8xl text-on-surface mb-8">{t.newsletterTitle}</h2>
          <p className="text-on-surface/65 mb-10 text-base md:text-xl leading-relaxed max-w-xl mx-auto">{t.newsletterBlurb}</p>
          <div className="flex justify-center"><NewsletterForm /></div>
        </div>
      </section>
    </div>
  );
}
