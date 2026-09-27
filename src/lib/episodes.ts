// Curated source of truth for published episodes that have a dedicated page.
// The archive lists these and links to the on-site episode pages (not YouTube).

export interface Episode {
  slug: string;
  href: string;
  videoId: string;
  title: string;
  innovation: string; // the actual innovation, shown as a tag (e.g. "Electricity")
  icon: string; // Material Symbols name paired with the innovation tag
  blurb: string;
  publishedAt: string; // ISO date
  thumbnail: string;
  categories: string[]; // archive filter / era tags
  keywords: string[]; // extra terms the archive search should match
}

// Newest first.
export const episodes: Episode[] = [
  {
    slug: "wright-brothers",
    href: "/episode/wright-brothers",
    videoId: "mhE_0kARZmU",
    title: "How Two Bicycle Mechanics Taught The World To Fly",
    innovation: "Flight",
    icon: "flight",
    blurb:
      "Two bicycle mechanics from Dayton solved the problem of controlled flight — and launched the aerial age at Kitty Hawk.",
    publishedAt: "2026-09-26",
    thumbnail: "https://i.ytimg.com/vi/mhE_0kARZmU/maxresdefault.jpg",
    categories: ["industrial"],
    keywords: [
      "wright brothers",
      "airplane",
      "aviation",
      "flight",
      "kitty hawk",
      "orville wright",
      "wilbur wright",
      "wright flyer",
      "otto lilienthal",
      "first flight",
    ],
  },
  {
    slug: "penicillin",
    href: "/episode/penicillin",
    videoId: "zbeBT46ymp4",
    title: "The Miracle Drug That Shouldn't Exist: Penicillin",
    innovation: "Penicillin",
    icon: "biotech",
    blurb:
      "A contaminated petri dish, a patch of mould, and the accident that became the world's first antibiotic.",
    publishedAt: "2026-08-09",
    thumbnail: "https://i.ytimg.com/vi/zbeBT46ymp4/maxresdefault.jpg",
    categories: ["industrial", "biotech"],
    keywords: [
      "penicillin",
      "alexander fleming",
      "howard florey",
      "ernst chain",
      "antibiotic",
      "antibiotics",
      "mould",
      "mold",
      "petri dish",
      "medicine",
      "miracle drug",
    ],
  },
  {
    slug: "edison-vs-tesla",
    href: "/episode/edison-vs-tesla",
    videoId: "otqgociwb3o",
    title: "Edison vs. Tesla: The Ruthless War That Lit the World",
    innovation: "Electricity",
    icon: "bolt",
    blurb:
      "The War of Currents between Edison and Tesla that decided how the world would be powered.",
    publishedAt: "2026-07-02",
    thumbnail: "https://i.ytimg.com/vi/otqgociwb3o/maxresdefault.jpg",
    categories: ["industrial"],
    keywords: [
      "edison",
      "tesla",
      "electricity",
      "light bulb",
      "war of currents",
      "alternating current",
      "direct current",
      "westinghouse",
      "power",
    ],
  },
];
