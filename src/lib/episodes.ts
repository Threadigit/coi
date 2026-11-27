// Curated source of truth for published episodes that have a dedicated page.
// The archive, homepage, timeline, and sitemap are all generated from this.
// Human-readable text (titles, blurbs, labels) is in src/i18n/messages/*.json.

import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export type EraId = "industrial" | "atomic" | "digital";

export interface EpisodeBase {
  slug: string;
  href: string;
  videoId: string;
  icon: string; // Material Symbols name paired with the innovation tag
  year: number; // the defining year of the innovation (not the publish date)
  era: EraId; // chronological era, for the timeline
  heroImage: string; // local cinematic image (used by the timeline + spotlight)
  publishedAt: string; // ISO date
  thumbnail: string;
  categories: string[]; // archive filter / era tags
  keywords: string[]; // extra English terms the archive search should match
}

export interface Episode extends EpisodeBase {
  title: string; // localized
  innovation: string; // localized tag, e.g. "Electricity"
  blurb: string; // localized
}

export const eraIds: EraId[] = ["industrial", "atomic", "digital"];

// Newest first.
export const episodeBases: EpisodeBase[] = [
  {
    slug: "shipping-container",
    href: "/episode/shipping-container",
    videoId: "xprFFq5yy1k",
    icon: "inventory_2",
    year: 1956,
    era: "atomic",
    heroImage: "/container-hero.jpg",
    publishedAt: "2026-10-30",
    thumbnail: "https://i.ytimg.com/vi/xprFFq5yy1k/maxresdefault.jpg",
    categories: ["industrial"],
    keywords: ["shipping container", "malcom mclean", "containerization", "global trade", "ideal x", "keith tantlinger", "supply chain", "container ship", "maritime", "logistics"],
  },
  {
    slug: "wright-brothers",
    href: "/episode/wright-brothers",
    videoId: "mhE_0kARZmU",
    icon: "flight",
    year: 1903,
    era: "industrial",
    heroImage: "/wright-hero.jpg",
    publishedAt: "2026-09-26",
    thumbnail: "https://i.ytimg.com/vi/mhE_0kARZmU/maxresdefault.jpg",
    categories: ["industrial"],
    keywords: ["wright brothers", "airplane", "aviation", "flight", "kitty hawk", "orville wright", "wilbur wright", "wright flyer", "otto lilienthal", "first flight"],
  },
  {
    slug: "penicillin",
    href: "/episode/penicillin",
    videoId: "zbeBT46ymp4",
    icon: "biotech",
    year: 1928,
    era: "industrial",
    heroImage: "/pen-hero.jpg",
    publishedAt: "2026-08-09",
    thumbnail: "https://i.ytimg.com/vi/zbeBT46ymp4/maxresdefault.jpg",
    categories: ["industrial", "biotech"],
    keywords: ["penicillin", "alexander fleming", "howard florey", "ernst chain", "antibiotic", "antibiotics", "mould", "mold", "petri dish", "medicine", "miracle drug"],
  },
  {
    slug: "edison-vs-tesla",
    href: "/episode/edison-vs-tesla",
    videoId: "otqgociwb3o",
    icon: "bolt",
    year: 1879,
    era: "industrial",
    heroImage: "/edison-machine-shop.jpg",
    publishedAt: "2026-07-02",
    thumbnail: "https://i.ytimg.com/vi/otqgociwb3o/maxresdefault.jpg",
    categories: ["industrial"],
    keywords: ["edison", "tesla", "electricity", "light bulb", "war of currents", "alternating current", "direct current", "westinghouse", "power"],
  },
];

/** Episodes with their text in the visitor's language. */
export function getEpisodes(lang: Locale): Episode[] {
  const eps = getMessages(lang).episodes as Record<string, { listTitle: string; innovation: string; blurb: string }>;
  return episodeBases.map((b) => ({
    ...b,
    title: eps[b.slug].listTitle,
    innovation: eps[b.slug].innovation,
    blurb: eps[b.slug].blurb,
  }));
}

// Episodes grouped by era (era order preserved), each era's episodes sorted
// chronologically by year. Eras with no episodes are omitted.
export function episodesByEra(lang: Locale) {
  const m = getMessages(lang);
  const eps = getEpisodes(lang);
  return eraIds
    .map((id) => ({
      id,
      label: m.eras[id].label,
      range: m.eras[id].range,
      items: eps.filter((e) => e.era === id).sort((a, b) => a.year - b.year),
    }))
    .filter((g) => g.items.length > 0);
}

/** Episode number as shown to visitors: 004 for the newest of four. */
export function episodeNumber(slug: string) {
  const i = episodeBases.findIndex((e) => e.slug === slug);
  return String(episodeBases.length - i).padStart(3, "0");
}
