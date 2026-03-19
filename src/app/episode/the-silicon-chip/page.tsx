import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Silicon Chip Documentary",
  description: "Explore how the tyranny of numbers was conquered, shrinking entire rooms of machinery into a sliver of glass.",
  openGraph: {
    type: "video.movie",
    title: "The Silicon Chip Documentary | Chronicles of Innovation",
  },
  alternates: {
    canonical: "/episode/the-silicon-chip",
  },
};

export default function SiliconChipEpisode() {
  return (
    <div className="w-full">
      <main className="pt-24">
        {/* Hero Section */}
        <header className="relative w-full h-[870px] overflow-hidden flex items-end px-6 md:px-12 pb-24">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvxL0cVvsYT7EvdLMJm9kYpsXXCkV_3O6MPH4s-XYmWr46MUpvYmdWqvcfKYs1Err465LCphAlanJb_Bac8nVDEaYFx5j6uPI6idKUGOqQC-iDmHXR7pcGhJ12eyYy05JqGOT8YuFsIh0uCKo8huIu0huBPinP5waKksy7gx_D1OIyQbRDrGbIllt1Z3vugAYBbbyTxHFLRPDErMtD6lKFW3yX--QGWSUMYw8_biqMEnv9N-lE2Hejkbrjb83GX88Iz3ClhkaXxA" 
              alt="Macro view of a golden circuit board" 
              fill
              className="object-cover opacity-60" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-surface-container-highest px-4 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold text-secondary">Episode 014</span>
              <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-semibold">1958 - Present</span>
            </div>
            <h1 className="font-headline text-5xl md:text-8xl leading-[1.1] text-on-surface tracking-tight mb-8">
              The Silicon Chip: <br/><span className="text-primary italic">The Foundation of Modernity</span>
            </h1>
            <div className="flex items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                <span className="text-xs uppercase tracking-widest font-medium">24 Minute Read</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
                <span className="text-xs uppercase tracking-widest font-medium">12.4k Views</span>
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
                "The microchip is the single most important invention since the printing press, fundamentally altering the fabric of human cognition."
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <p className="drop-cap font-body text-xl text-on-surface/80 leading-relaxed mb-8">
                It began in the sweltering summer of 1958 at Texas Instruments. Jack Kilby, a newcomer who hadn't yet earned his vacation time, sat alone in the lab. While his colleagues enjoyed their break, Kilby was obsessed with the "tyranny of numbers"—the problem that computers were becoming too complex because of the miles of wiring required to connect individual components. His solution was radical: what if all the components—transistors, resistors, and capacitors—were made of the same material and integrated into a single block of semiconductor?
              </p>
              <p className="font-body text-xl text-on-surface/80 leading-relaxed">
                Simultaneously, at Fairchild Semiconductor, Robert Noyce was working on a similar concept using silicon instead of germanium. Noyce's approach, using the planar process, allowed for the mass production of these integrated circuits. This convergence of engineering brilliance didn't just solve a wiring problem; it launched the digital age, shrinking the power of a room-sized computer into a sliver of glass smaller than a fingernail.
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
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyKaAXB9alUulHYvP1XsWap7MTQb1UXaNSVlI0OAy-1kixTB8Ti0aGas7MRx6r7S8JuoajJZm06iQeyeGe1HRUb8FPSUnxYJbd4k-r27B_A5DSX7cM2yVMmx5gjHbO1ZA7b3xV3KTT4hEhzbesrWIIOG6ixsTcyDU9D4y54FO3VVMFAoQkx-MDHeI7NkAlWZoOJib4aPU1TzMcwr1jfS-W2ZidsljA6R2VoV24cCVtxJ4YIy1zzdbDEtzSeuBe4oZbspe283B48Q" alt="Vintage mainframe computer" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-primary text-5xl font-bold mb-4 block">1958</span>
                  <h4 className="font-headline text-2xl mb-4">The Kilby Prototype</h4>
                  <p className="text-slate-400 leading-relaxed">The first integrated circuit was a crude device consisting of a sliver of germanium with wires attached. It proved that integration was possible, forever changing the trajectory of hardware design.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                <div className="w-full md:w-1/2 overflow-hidden bg-surface relative aspect-video">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAIiNg0F1H6rvmdBjIqjcAi3gcqX6-UdXTpfpj6Kgrtbak7SjZoR5YPXJjE2hYYovN4R_eQ2M-q4CEZPnegDRfInhJ-T560YxUYVDGjpSpFvcL2-qe7WuNOcXK-9A1GJaIPuSDfbpJTd4Zw-ZH0LD94D_nLaDuKlNA03uq3tQyeJh2EM71bZfeqqhU1gcke5MW0LIeRTLDDk0diGJQjY4GSmkv2bz60h5xy_khA2xQkr0d4Zdf0COLk3o4uamJsz848sHXO9ND9w" alt="CPU close-up" fill className="grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
                </div>
                <div className="w-full md:w-1/2 text-right">
                  <span className="font-label text-secondary text-5xl font-bold mb-4 block">1971</span>
                  <h4 className="font-headline text-2xl mb-4">Intel 4004</h4>
                  <p className="text-slate-400 leading-relaxed">The world's first commercially available microprocessor. It delivered the same computing power as the ENIAC computer, which filled 3,000 cubic feet, in a package the size of a postage stamp.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Architects */}
        <section className="px-6 md:px-12 py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h3 className="font-headline text-4xl mb-4">The Architects</h3>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface-container p-12 flex flex-col md:flex-row gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs3cW_Nh0Sx230FeCBlZipZLO3LDnLaGkmc_9_iTrzqsIWBr9GZmGg-9PuBj61qZcoIWNMZbCckXDAOjPtBU0vP2Q_EilLGai_pIWugQqnsPvVveLESNk6TVu75tv95VrwUhcaQoEmuG3LkIPJuIsZX_MyfZNtK0IOoI4YJVcoRTltvvlWXJdAn5m3B606S354JvR3IcJYIR_6R-Sg-zChg64YA8ONAff2Vs3Cy5lXxjFn5tHm_15HitlmEInTxO43WZ-agsBgDA" alt="Robert Noyce" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Robert Noyce</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Mayor of Silicon Valley</p>
                  <p className="text-slate-400 text-sm leading-relaxed">Co-founder of Fairchild and Intel. He developed the planar process which allowed integrated circuits to be manufactured reliably and at scale.</p>
                </div>
              </div>

              <div className="bg-surface-container p-12 flex flex-col md:flex-row gap-8 hover:bg-surface-container-high transition-colors">
                <div className="w-32 h-32 relative flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden grayscale">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3lejEx1p8J1hooSuCOtqCyOxuslTVwaskFRYnGqftR8p0k8dmcFsynZ-7DcWaiqnoHPthpfOK1PHA1pm9XMtEkq8sr3cAjyJulZvYKAFLNcD2GuYnJsSnMvywi-S1PEABFVBclKO4so3w2-BtlNKoEARJogyCLv_koXSdpVgHggbJCLiuL3F8RlkLMLnXJa_4Oz_Vi9ZR8Kxhlqr7bWeUctYj9VPPqyUqa0KHD8XA0tilzuval2LDqDQsxQHmkGDHwc4A-PQGNQ" alt="Gordon Moore" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-headline text-xl text-primary mb-2">Gordon Moore</h5>
                  <p className="font-label text-[10px] tracking-widest text-slate-500 uppercase mb-4">The Oracle of Capacity</p>
                  <p className="text-slate-400 text-sm leading-relaxed">Author of Moore's Law, predicting that the number of transistors on a microchip would double every two years, driving the exponential growth of tech.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-surface">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="font-headline text-5xl mb-8">Continue the Journey</h3>
            <p className="text-slate-400 mb-12 text-lg">Experience the full documentary series on our YouTube channel or engage with our community of historians and engineers.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="https://www.youtube.com/@ChronicleofInnovation" target="_blank">
                <button className="bg-primary text-on-primary px-10 py-4 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:opacity-90 transition-all w-full md:w-auto">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch on YouTube
                </button>
              </Link>
              <button className="border border-outline-variant/40 text-secondary px-10 py-4 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:bg-secondary/10 transition-all w-full md:w-auto">
                <span className="material-symbols-outlined">forum</span>
                Join the Discussion
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
