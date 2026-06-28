import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Light Bulb & Electricity Documentary | Edison vs Tesla",
  description: "The hidden battle that electrified the world. Explore the War of Currents between Thomas Edison and Nikola Tesla — the rivalry that decided how humanity would be powered.",
  openGraph: {
    type: "video.movie",
    title: "Light Bulb & Electricity: Edison vs Tesla | Chronicles of Innovation",
  },
  alternates: {
    canonical: "/episode/edison-vs-tesla",
  },
};

export default function EdisonVsTeslaEpisode() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Light Bulb & Electricity: Edison vs Tesla's Hidden Battle",
    "description": "The War of Currents was never just science — it was war. Discover how Thomas Edison's direct current empire collided with Nikola Tesla's alternating current, a rivalry that electrified the modern world and broke the men who waged it.",
    "thumbnailUrl": "https://chroniclesofinnovation.com/edison-machine-shop.jpg",
    "uploadDate": "2026-06-27",
    "duration": "PT12M",
    "contentUrl": "https://www.youtube.com/@ChronicleofInnovation",
    "embedUrl": "https://www.youtube.com/@ChronicleofInnovation",
    "publisher": {
      "@type": "Organization",
      "name": "Chronicles of Innovation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chroniclesofinnovation.com/coi_logo_transparent.png"
      }
    }
  };

  const chapters = [
    { time: "00:00", title: "The Dark Truth Behind Edison" },
    { time: "00:32", title: "This Wasn't Science… It Was War" },
    { time: "01:15", title: "The World Before Electricity" },
    { time: "02:10", title: "The Rise of Thomas Edison" },
    { time: "03:40", title: "The Fatal Flaw in Edison's System" },
    { time: "04:35", title: "The Arrival of Nikola Tesla" },
    { time: "05:50", title: "Genius vs Power" },
    { time: "06:40", title: "The Betrayal That Started It All" },
    { time: "07:30", title: "The War of Currents Begins" },
    { time: "08:30", title: "Edison's Ruthless Campaign" },
    { time: "09:30", title: "Tesla Fights Back With Lightning" },
    { time: "10:20", title: "The World's Fair Showdown" },
    { time: "11:05", title: "The Man Who Won… But Lost Everything" },
    { time: "11:40", title: "Who Really Won the War?" },
  ];

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <main className="pt-24">
        {/* Hero Section */}
        <header className="relative w-full h-[870px] overflow-hidden flex items-end px-6 md:px-12 pb-32 md:pb-48">
          <div className="absolute inset-0 z-0">
            <Image
              src="/edison-machine-shop.jpg"
              alt="Thomas Edison's machine shop, lit by early electric lamps"
              fill
              priority
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-surface-container-highest px-4 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold text-secondary">Episode 001</span>
              <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-semibold">1879 - 1893</span>
            </div>
            <h1 className="font-headline text-5xl md:text-8xl leading-[1.1] text-on-surface tracking-tight mb-8">
              Light Bulb & Electricity: <br/><span className="text-primary italic">Edison vs Tesla&apos;s Hidden Battle</span>
            </h1>
            <div className="flex items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-xs uppercase tracking-widest font-medium">12 Minute Feature</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                <span className="text-xs uppercase tracking-widest font-medium">The War of Currents</span>
              </div>
            </div>
          </div>
        </header>

        {/* Narrative Section */}
        <section className="px-6 md:px-12 py-32 bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
            <div className="w-full md:w-1/3">
              <h2 className="font-label text-xs uppercase tracking-[0.4em] text-secondary mb-6">The Genesis</h2>
              <p className="font-headline text-2xl text-on-surface-variant leading-relaxed italic">
                &ldquo;This wasn&apos;t a contest of ideas. It was a war for the right to power the world — and only one current could win.&rdquo;
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <p className="drop-cap font-body text-xl text-on-surface/80 leading-relaxed mb-8">
                For all of human history, when the sun went down, the world went dark. Then, in 1879, Thomas Edison perfected the incandescent light bulb and set out to do something no one had attempted: to wire entire cities and sell electricity itself. His system ran on direct current — reliable over a few blocks, but fatally limited. DC could not travel far without bleeding away, demanding a power station on nearly every corner.
              </p>
              <p className="font-body text-xl text-on-surface/80 leading-relaxed">
                Into that flaw walked Nikola Tesla, a Serbian immigrant with a head full of alternating-current machines Edison dismissed. When Tesla&apos;s vision collided with Edison&apos;s empire — and George Westinghouse&apos;s capital — it ignited the War of Currents: a brutal campaign of public demonstrations, propaganda, and electrocutions that would decide how humanity would be powered for the next century. One man would win the war. The other would win the future.
              </p>
            </div>
          </div>
        </section>

        {/* Historical Milestones */}
        <section className="py-32 bg-surface-container-low px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-headline text-4xl mb-24 text-center">Historical <span className="text-primary italic">Milestones</span></h3>
            <div className="space-y-40">
              <div className="flex flex-col md:flex-row items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep1-bulb-1879.jpg" alt="Edison carbon filament light bulb" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-primary text-5xl font-bold mb-4 block">1879</span>
                  <h4 className="font-headline text-2xl mb-4">The Lamp That Banished Night</h4>
                  <p className="text-slate-400 leading-relaxed">Edison&apos;s carbon-filament bulb finally burned long enough to be practical. It was not the first electric light, but it was the first anyone could sell — the cornerstone of an empire built on direct current.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep1-tesla-ac-1888.jpg" alt="Nikola Tesla with his alternating-current equipment" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2 text-right">
                  <span className="font-label text-secondary text-5xl font-bold mb-4 block">1888</span>
                  <h4 className="font-headline text-2xl mb-4">The Polyphase System</h4>
                  <p className="text-slate-400 leading-relaxed">Tesla&apos;s alternating-current motor and polyphase patents proved electricity could travel hundreds of miles at high voltage. Westinghouse bought the rights — and the War of Currents turned existential for Edison.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="/ep1-niagara-1893.jpg" alt="Westinghouse alternating-current generators at Niagara Falls" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-primary text-5xl font-bold mb-4 block">1893</span>
                  <h4 className="font-headline text-2xl mb-4">The World&apos;s Fair Showdown</h4>
                  <p className="text-slate-400 leading-relaxed">Westinghouse and Tesla lit the Chicago World&apos;s Columbian Exposition with AC, dazzling 27 million visitors. Within two years their current would harness Niagara Falls — settling the war for good.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Architects */}
        <section className="px-6 md:px-12 py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h3 className="font-headline text-4xl mb-4">The Combatants</h3>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-surface-container p-12 flex flex-col gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep1-edison.jpg" alt="Thomas Edison" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Thomas Edison</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Wizard of Menlo Park</p>
                  <p className="text-slate-400 text-sm leading-relaxed">Champion of direct current and the world&apos;s first electrical empire. A relentless inventor and showman who would wage a ruthless campaign to defend the system he built.</p>
                </div>
              </div>

              <div className="bg-surface-container p-12 flex flex-col gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep1-tesla.jpg" alt="Nikola Tesla" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Nikola Tesla</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Master of Lightning</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The visionary behind the alternating-current system that powers the world today. He won the technological war but died nearly penniless, his genius vindicated only in hindsight.</p>
                </div>
              </div>

              <div className="bg-surface-container p-12 flex flex-col gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="/ep1-westinghouse.jpg" alt="George Westinghouse" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">George Westinghouse</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Industrialist Backer</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The engineer-financier who bet his fortune on Tesla&apos;s AC patents. His capital and conviction turned one immigrant&apos;s equations into the grid that lit a continent.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter Timeline */}
        <section className="px-6 md:px-12 py-32 bg-surface-container-low">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary mb-4 block">Inside the Feature</span>
              <h3 className="font-headline text-4xl">Chapter <span className="text-primary italic">Breakdown</span></h3>
            </div>
            <ol className="divide-y divide-outline-variant/15">
              {chapters.map((chapter, index) => (
                <li key={chapter.time} className="flex items-center gap-6 py-5 group">
                  <span className="font-label text-primary serif-display italic text-lg w-10 flex-shrink-0">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-body text-on-surface text-base md:text-lg group-hover:text-primary transition-colors flex-1">{chapter.title}</span>
                  <span className="font-label text-[10px] tracking-widest text-slate-500 uppercase tabular-nums flex-shrink-0">{chapter.time}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-surface">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="font-headline text-5xl mb-8">Continue the Journey</h3>
            <p className="text-slate-400 mb-12 text-lg">Experience the full documentary on our YouTube channel or engage with our community of historians and engineers.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="https://www.youtube.com/@ChronicleofInnovation" target="_blank">
                <button className="bg-primary text-on-primary px-10 py-4 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:opacity-90 transition-all w-full md:w-auto">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch on YouTube
                </button>
              </Link>
              <a href="mailto:hello@chroniclesofinnovation.com?subject=Join%20the%20Discussion%3A%20Edison%20vs%20Tesla&body=I'd%20like%20to%20join%20the%20conversation%20about%20the%20Light%20Bulb%20%26%20Electricity%20episode.">
                <button className="border border-outline-variant/40 text-secondary px-10 py-4 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:bg-secondary/10 transition-all w-full md:w-auto">
                  <span className="material-symbols-outlined">forum</span>
                  Join the Discussion
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
