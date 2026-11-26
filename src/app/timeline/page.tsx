import type { Metadata } from "next";
import InnovationTimeline from "@/components/InnovationTimeline";
import { episodesByEra } from "@/lib/episodes";

const SITE = "https://chroniclesofinnovation.com";

export const metadata: Metadata = {
  title: "The Chronicle: A Timeline of Innovation",
  description:
    "A journey through the breakthroughs that built the modern world: electricity, flight, penicillin, the shipping container and more, plotted across the Industrial, Atomic, and Digital ages.",
  keywords: [
    "timeline of innovation",
    "history of innovation",
    "innovation timeline",
    "inventions that changed the world",
    "Industrial Age",
    "Atomic Age",
    "Digital Age",
    "Chronicles of Innovation",
  ],
  alternates: { canonical: "/timeline" },
  openGraph: {
    type: "website",
    title: "The Chronicle: A Timeline of Innovation",
    description:
      "A journey through the breakthroughs that built the modern world, across the Industrial, Atomic, and Digital ages.",
    url: "/timeline",
    siteName: "Chronicles of Innovation",
  },
};

export default function TimelinePage() {
  const groups = episodesByEra();
  const ordered = groups.flatMap((g) => g.items);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/timeline#page`,
        "url": `${SITE}/timeline`,
        "name": "The Chronicle: A Timeline of Innovation",
        "description":
          "A journey through the breakthroughs that built the modern world, across the Industrial, Atomic, and Digital ages.",
        "isPartOf": { "@id": `${SITE}/#series` },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": ordered.map((e, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${SITE}${e.href}`,
            "name": `${e.year}: ${e.innovation}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}/timeline#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
          { "@type": "ListItem", "position": 2, "name": "The Chronicle", "item": `${SITE}/timeline` },
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
        <section className="relative max-w-[1400px] mx-auto mb-24 md:mb-36">
          <span className="eyebrow rise block mb-8" style={{ ['--d' as string]: 0 }}>The Chronicle</span>
          <h1 className="rise serif-headline text-[2.7rem] md:text-7xl lg:text-[7rem] tracking-[-0.04em] text-on-surface leading-[1] max-w-5xl" style={{ ['--d' as string]: 1 }}>
            A Timeline of <span className="italic text-gradient-gold pr-2">Innovation</span>
          </h1>
          <p className="rise text-on-surface/60 text-base md:text-2xl leading-relaxed max-w-2xl mt-10" style={{ ['--d' as string]: 2 }}>
            Every breakthrough has a place in time. Follow the thread of human ingenuity, from the first current to the box that moved the world, across the ages that built the modern era.
          </p>
        </section>

        {/* Timeline */}
        <section className="relative max-w-[1400px] mx-auto">
          <InnovationTimeline />
        </section>
      </main>
    </div>
  );
}
