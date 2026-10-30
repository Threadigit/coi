import type { Metadata } from "next";
import InnovationTimeline from "@/components/InnovationTimeline";
import { episodesByEra } from "@/lib/episodes";

const SITE = "https://chroniclesofinnovation.com";

export const metadata: Metadata = {
  title: "The Chronicle — A Timeline of Innovation",
  description:
    "A journey through the breakthroughs that built the modern world — electricity, flight, penicillin, the shipping container and more, plotted across the Industrial, Atomic, and Digital ages.",
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
    title: "The Chronicle — A Timeline of Innovation",
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
        "name": "The Chronicle — A Timeline of Innovation",
        "description":
          "A journey through the breakthroughs that built the modern world, across the Industrial, Atomic, and Digital ages.",
        "isPartOf": { "@id": `${SITE}/#series` },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": ordered.map((e, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${SITE}${e.href}`,
            "name": `${e.year} — ${e.innovation}`,
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
      <main className="pt-40 pb-32 px-6 md:px-12">
        {/* Intro */}
        <section className="max-w-7xl mx-auto mb-24 md:mb-32">
          <div className="blueprint-grid-radial absolute inset-x-0 top-0 h-[500px] -z-10 opacity-30 pointer-events-none"></div>
          <span className="font-label text-secondary uppercase tracking-[0.3em] text-xs mb-8 block">The Chronicle</span>
          <h1 className="serif-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-on-surface leading-[1.05] max-w-4xl">
            A Timeline of <span className="italic text-primary">Innovation</span>
          </h1>
          <p className="font-body text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mt-10">
            Every breakthrough has a place in time. Follow the thread of human ingenuity — from the first current to the box that moved the world — across the ages that built the modern era.
          </p>
        </section>

        {/* Timeline */}
        <section className="max-w-7xl mx-auto">
          <InnovationTimeline />
        </section>
      </main>
    </div>
  );
}
