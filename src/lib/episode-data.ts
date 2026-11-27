// Language-neutral facts about each episode: video, imagery, SEO entities.
// All human-readable text lives in src/i18n/messages/*.json under "episodes".
import type { Locale } from "@/i18n/config";

export interface EpisodeData {
  slug: string;
  /** Default (English) YouTube video. */
  videoId: string;
  /**
   * Optional dubbed or translated uploads. Add an entry here and that language
   * gets its own video everywhere (page, JSON-LD, links). Languages without an
   * entry use the default video with captions and interface requested in the
   * reader's language.
   */
  videoIds?: Partial<Record<Locale, string>>;
  durationSeconds: number;
  durationIso: string;
  releaseDate: string;
  keywords: string[];
  thumbs: string[];
  about: { type: "Person" | "Thing"; name: string; sameAs: string }[];
  heroImage: string;
  chipIcons: [string, string];
  milestoneImages: { src: string; contain: boolean }[];
  peopleImages: string[];
  chapters?: { time: string; start: number }[];
}

export const episodeData: Record<string, EpisodeData> = {
  "shipping-container": {
    slug: "shipping-container",
    videoId: "xprFFq5yy1k",
    durationSeconds: 1102,
    durationIso: "PT18M22S",
    releaseDate: "2026-10-30",
    keywords: ["shipping container", "Malcom McLean", "containerization", "history of global trade", "Ideal X", "Keith Tantlinger", "intermodal container", "how the shipping container changed the world", "global supply chain", "container ship", "maritime history", "innovation documentary", "Chronicles of Innovation"],
    thumbs: ["/container-hero.jpg", "/ep4-port.jpg"],
    about: [{"type": "Person", "name": "Malcom McLean", "sameAs": "https://en.wikipedia.org/wiki/Malcom_McLean"}, {"type": "Person", "name": "Keith Tantlinger", "sameAs": "https://en.wikipedia.org/wiki/Keith_Tantlinger"}, {"type": "Thing", "name": "Containerization", "sameAs": "https://en.wikipedia.org/wiki/Containerization"}, {"type": "Thing", "name": "Ideal X", "sameAs": "https://en.wikipedia.org/wiki/Ideal_X"}],
    heroImage: "/container-hero.jpg",
    chipIcons: ["timer", "inventory_2"],
    milestoneImages: [{"src": "/ep4-idealx-1956.jpg", "contain": true}, {"src": "/ep4-twistlock.jpg", "contain": false}, {"src": "/ep4-port.jpg", "contain": false}],
    peopleImages: ["/ep4-mclean.jpg", "/ep4-tantlinger.jpg"],
  },
  "wright-brothers": {
    slug: "wright-brothers",
    videoId: "mhE_0kARZmU",
    durationSeconds: 1190,
    durationIso: "PT19M50S",
    releaseDate: "2026-09-26",
    keywords: ["Wright brothers", "invention of the airplane", "who invented the airplane", "first flight", "Kitty Hawk", "Orville Wright", "Wilbur Wright", "Wright Flyer", "three-axis control", "Otto Lilienthal", "history of aviation", "history of flight", "innovation documentary", "Chronicles of Innovation"],
    thumbs: ["/wright-hero.jpg", "/ep3-kittyhawk-1903.jpg"],
    about: [{"type": "Person", "name": "Wilbur Wright", "sameAs": "https://en.wikipedia.org/wiki/Wright_brothers"}, {"type": "Person", "name": "Orville Wright", "sameAs": "https://en.wikipedia.org/wiki/Wright_brothers"}, {"type": "Person", "name": "Otto Lilienthal", "sameAs": "https://en.wikipedia.org/wiki/Otto_Lilienthal"}, {"type": "Thing", "name": "Wright Flyer", "sameAs": "https://en.wikipedia.org/wiki/Wright_Flyer"}],
    heroImage: "/wright-hero.jpg",
    chipIcons: ["timer", "flight"],
    milestoneImages: [{"src": "/ep3-glider-1902.jpg", "contain": false}, {"src": "/ep3-kittyhawk-1903.jpg", "contain": false}, {"src": "/ep3-fortmyer-1909.jpg", "contain": false}],
    peopleImages: ["/ep3-wilbur.jpg", "/ep3-orville.jpg", "/ep3-lilienthal.jpg"],
  },
  "penicillin": {
    slug: "penicillin",
    videoId: "zbeBT46ymp4",
    durationSeconds: 976,
    durationIso: "PT16M16S",
    releaseDate: "2026-08-09",
    keywords: ["penicillin", "Alexander Fleming", "who discovered penicillin", "history of penicillin", "first antibiotic", "Howard Florey", "Ernst Chain", "penicillin discovery", "history of antibiotics", "medical history", "Penicillium notatum", "miracle drug", "innovation documentary", "Chronicles of Innovation"],
    thumbs: ["/pen-hero.jpg", "/ep2-mould-1928.jpg"],
    about: [{"type": "Person", "name": "Alexander Fleming", "sameAs": "https://en.wikipedia.org/wiki/Alexander_Fleming"}, {"type": "Person", "name": "Howard Florey", "sameAs": "https://en.wikipedia.org/wiki/Howard_Florey"}, {"type": "Person", "name": "Ernst Chain", "sameAs": "https://en.wikipedia.org/wiki/Ernst_Chain"}, {"type": "Thing", "name": "Penicillin", "sameAs": "https://en.wikipedia.org/wiki/Penicillin"}],
    heroImage: "/pen-hero.jpg",
    chipIcons: ["timer", "science"],
    milestoneImages: [{"src": "/ep2-mould-1928.jpg", "contain": false}, {"src": "/ep2-fleming-color.jpg", "contain": false}, {"src": "/ep2-about.jpg", "contain": false}],
    peopleImages: ["/ep2-fleming.jpg", "/ep2-florey.jpg", "/ep2-chain.jpg"],
  },
  "edison-vs-tesla": {
    slug: "edison-vs-tesla",
    videoId: "otqgociwb3o",
    durationSeconds: 1161,
    durationIso: "PT19M21S",
    releaseDate: "2026-07-02",
    keywords: ["Edison vs Tesla", "war of currents", "who invented the light bulb", "Thomas Edison", "Nikola Tesla", "George Westinghouse", "history of electricity", "AC vs DC", "alternating current", "direct current", "light bulb invention", "electricity documentary", "innovation documentary", "Chronicles of Innovation"],
    thumbs: ["/edison-machine-shop.jpg", "/ep1-niagara-1893.jpg"],
    about: [{"type": "Person", "name": "Thomas Edison", "sameAs": "https://en.wikipedia.org/wiki/Thomas_Edison"}, {"type": "Person", "name": "Nikola Tesla", "sameAs": "https://en.wikipedia.org/wiki/Nikola_Tesla"}, {"type": "Person", "name": "George Westinghouse", "sameAs": "https://en.wikipedia.org/wiki/George_Westinghouse"}, {"type": "Thing", "name": "War of the currents", "sameAs": "https://en.wikipedia.org/wiki/War_of_the_currents"}],
    heroImage: "/edison-machine-shop.jpg",
    chipIcons: ["timer", "bolt"],
    milestoneImages: [{"src": "/ep1-bulb-1879.jpg", "contain": false}, {"src": "/ep1-tesla-ac-1888.jpg", "contain": false}, {"src": "/ep1-niagara-1893.jpg", "contain": false}],
    peopleImages: ["/ep1-edison.jpg", "/ep1-tesla.jpg", "/ep1-westinghouse.jpg"],
    chapters: [{"time": "00:00", "start": 0}, {"time": "01:00", "start": 60}, {"time": "01:36", "start": 96}, {"time": "03:06", "start": 186}, {"time": "03:36", "start": 216}, {"time": "04:02", "start": 242}, {"time": "05:22", "start": 322}, {"time": "05:52", "start": 352}, {"time": "06:40", "start": 400}, {"time": "09:19", "start": 559}, {"time": "12:02", "start": 722}, {"time": "15:35", "start": 935}, {"time": "17:14", "start": 1034}],
  },
};
