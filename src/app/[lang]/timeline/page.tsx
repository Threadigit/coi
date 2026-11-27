import InnovationTimeline from "@/components/InnovationTimeline";
import { episodesByEra } from "@/lib/episodes";
import { getMessages } from "@/i18n/messages";
import { localeMeta, localizedPath } from "@/i18n/config";
import { getLocale, pageAlternates, absoluteUrl, SITE, ogLocales } from "@/i18n/page";
import { rich } from "@/i18n/rich";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLocale(params);
  const m = getMessages(lang).meta;
  return {
    title: m.timelineTitle,
    description: m.timelineDescription,
    keywords: ["timeline of innovation", "history of innovation", "innovation timeline", "inventions that changed the world", "Industrial Age", "Atomic Age", "Digital Age", "Chronicles of Innovation"],
    alternates: pageAlternates(lang, "/timeline"),
    openGraph: { ...ogLocales(lang), type: "website", title: m.timelineTitle, description: m.timelineShortDescription, url: localizedPath(lang, "/timeline"), siteName: "Chronicles of Innovation", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  };
}

export default async function TimelinePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLocale(params);
  const m = getMessages(lang);
  const t = m.timeline;
  const groups = episodesByEra(lang);
  const ordered = groups.flatMap((g) => g.items);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl(lang, "/timeline")}#page`,
        "url": absoluteUrl(lang, "/timeline"),
        "name": m.meta.timelineTitle,
        "description": m.meta.timelineShortDescription,
        "inLanguage": localeMeta[lang].htmlLang,
        "isPartOf": { "@id": `${SITE}/#series` },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": ordered.map((e, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": absoluteUrl(lang, e.href),
            "name": `${e.year}: ${e.innovation}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(lang, "/timeline")}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": m.nav.home, "item": absoluteUrl(lang, "/") },
          { "@type": "ListItem", "position": 2, "name": m.nav.chronicle, "item": absoluteUrl(lang, "/timeline") },
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
      <main className="relative pt-32 md:pt-48 pb-24 px-5 md:px-12 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[40rem] spotlight-gold pointer-events-none" aria-hidden="true" />
        <div className="blueprint-grid-radial absolute inset-x-0 top-0 h-[34rem] opacity-60 pointer-events-none" aria-hidden="true" />
        {/* Intro */}
        <section className="relative max-w-[1600px] mx-auto mb-24 md:mb-40 lg:text-center">
          <span className="kicker rise block mb-8" style={{ ['--d' as string]: 0 }}>{t.kicker}</span>
          <h1 className="rise title-card text-[2.7rem] md:text-7xl lg:text-[7rem] text-on-surface max-w-5xl lg:mx-auto" style={{ ['--d' as string]: 1 }}>
            {rich(t.title, "italic text-primary pr-2")}
          </h1>
          <p className="rise text-on-surface/60 text-base md:text-2xl leading-relaxed max-w-2xl mt-10 lg:mx-auto" style={{ ['--d' as string]: 2 }}>
            {t.intro}
          </p>
        </section>

        {/* Timeline */}
        <section className="relative max-w-[1600px] mx-auto">
          <InnovationTimeline groups={groups} labels={{ watchStory: t.watchStory, continues: t.continues, continuesText: t.continuesText, exploreArchive: t.exploreArchive }} />
        </section>
      </main>
    </div>
  );
}
