import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section: Cinematic Steam Engine */}
      <section className="relative min-h-screen flex items-end pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvxL0cVvsYT7EvdLMJm9kYpsXXCkV_3O6MPH4s-XYmWr46MUpvYmdWqvcfKYs1Err465LCphAlanJb_Bac8nVDEaYFx5j6uPI6idKUGOqQC-iDmHXR7pcGhJ12eyYy05JqGOT8YuFsIh0uCKo8huIu0huBPinP5waKksy7gx_D1OIyQbRDrGbIllt1Z3vugAYBbbyTxHFLRPDErMtD6lKFW3yX--QGWSUMYw8_biqMEnv9N-lE2Hejkbrjb83GX88Iz3ClhkaXxA"
            alt="Macro view of a golden circuit board" 
            fill
            className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-24 w-full max-w-7xl">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-6">
            <span className="text-secondary font-label uppercase tracking-[0.3em] text-xs">Era III: The Digital Revolution</span>
            <div className="h-px w-24 bg-outline-variant/30 hidden md:block"></div>
          </div>
          <h1 className="serif-display text-5xl md:text-7xl lg:text-8xl text-on-surface leading-tight tracking-tighter max-w-4xl">
            The Silicon Chip: <br className="hidden md:block"/><span className="text-primary italic">Foundation</span> of Modernity
          </h1>
          <div className="mt-12 flex flex-col md:flex-row gap-12 items-start">
            <p className="font-body text-slate-400 max-w-md text-lg leading-relaxed">
              A microscopic architecture that rewired the human experience. Explore how the tyranny of numbers was conquered, shrinking entire rooms of machinery into a sliver of glass.
            </p>
            <Link href="/episode/the-silicon-chip" className="flex items-center gap-4 group cursor-pointer mt-4 md:mt-0">
              <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
              <span className="font-label uppercase tracking-widest text-xs font-bold text-primary">Watch Feature Documentary</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy of Innovation Section */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low relative">
        <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center relative z-10">
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative">
              <Image 
                src="/avatar.png"
                alt="Executive Curator Portrait" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="mt-6">
              <div className="text-primary serif-display italic text-lg">Tolu Adetuyi</div>
              <div className="text-slate-500 font-label uppercase tracking-widest text-[10px]">Executive Curator</div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px] mb-8 block">Philosophy of Progress</span>
            <blockquote className="serif-display text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight mb-12">
              "Innovation is not merely a sequence of <span className="italic text-primary-container">inventions</span>, but the enduring narrative of human curiosity refusing to stay silent."
            </blockquote>
            <p className="font-body text-slate-400 text-lg max-w-xl">
              Our mission at Chronicles is to archive the sparks that ignited entire eras. We don't just show you what was built; we show you why it mattered to the soul of humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Documentary: The Silicon Chip */}
      <section className="py-32 px-6 md:px-12 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px] mb-4 block">Current Spotlight</span>
              <h2 className="serif-display text-5xl text-on-surface">The Silicon Chip</h2>
            </div>
            <Link href="/archive" className="font-label uppercase tracking-widest text-[10px] text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all">
              View Full Series
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <Link href="/episode/the-silicon-chip" className="md:col-span-8 group relative overflow-hidden rounded-sm shadow-2xl block aspect-video">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2dIZrDrxsaHAfA-nWAN3maaVSNVHHkiEHaUV9jxfgT1jN4LZkneCDmpQDwLSLbaxbMyGgI3wGHu_kg_f4VWGaHYLSOGMWL5BBJ3_aHxjBuSNNcD6pqH1Id4xnL45YHygbghbUXT0XfHqE4eOotX8ZZkWFndGLxS4n_KrnS6TGsz6fyBNpNTPg_kzJx0erD_vbvo0aOaEKK5X6crGYPFHp7IfBgRokHvI5h75Fu9jSjC7-0vpR2GoW3rlM3B6OAXkX0ubG-qSJFQ"
                alt="Silicon microchip landscape" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              </div>
            </Link>
            
            <div className="md:col-span-4 space-y-8">
              <div>
                <div className="bg-surface-container-highest px-3 py-1 inline-block rounded-full mb-4">
                  <span className="text-secondary font-label uppercase text-[9px] tracking-widest">Digital Era | 1947–Present</span>
                </div>
                <p className="font-body text-slate-300 leading-relaxed">
                  The transition from macro-machinery to micro-logic. Discover the silent architects of the modern world in this three-part deep dive.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-primary serif-display italic">01.</span>
                  <span className="text-on-surface font-body text-sm tracking-wide group-hover:text-primary transition-colors">The Transistor Birth</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-primary serif-display italic">02.</span>
                  <span className="text-on-surface font-body text-sm tracking-wide group-hover:text-primary transition-colors">Moore's Unrelenting Law</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-primary serif-display italic">03.</span>
                  <span className="text-on-surface font-body text-sm tracking-wide group-hover:text-primary transition-colors">The Quantum Frontier</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Highlights: Eras */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h3 className="serif-display text-4xl text-on-surface mb-16 text-center">Collection Eras</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Industrial */}
            <Link href="/archive?era=industrial" className="group cursor-pointer block">
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-surface-container relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKU84qGHWlJKxF2sPfP3wAqb1VV4rNIJ3XeBLtvD7Wwwm7I0_eMPF-5LD4LfCimSXbhD3rmqXs0pvBHaK6nQxMwpSws0v0eBrzLMgzcJLI2xsG0jCxqgPIYfGL6jSihZTAf10JHzZD3CeuDSlPwqLShvT5nfo5qmbP-e1FvFgONGOmAP11Pp3jQjJqG-MCYrsxUqOXr_Saz-5fvqmlY1JPifyA3PP_pAtRxS4bCpSI9KfY2usLMCgFhIdW_eZCtt1TCSRETAXPCQ"
                  alt="Industrial cogwheels" 
                  fill
                  className="object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-primary/5 transition-all duration-700"></div>
              </div>
              <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px]">1760 – 1840</span>
              <h4 className="serif-display text-2xl text-on-surface mt-2 group-hover:text-primary transition-colors">Industrial</h4>
            </Link>

            {/* Atomic */}
            <Link href="/archive?era=atomic" className="group cursor-pointer block">
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-surface-container relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfHbtx5YZudPtXp21YT6Tgi-BidR3j65-4rJWcIeCBsZb3hcpQ0NljP30-Pj-q6CLNyrPmsyy1V3qBavV82Zs__eqwb41qYyQHsDWPv-pZ0Ac7oOIPy-JRsmUNy2CkLu6av7znlKlwyN0Lclfmux1m6n-sOmLZpqgbj0clsRelcByxkuMK8soKtEW9Pxd4MjpAHokhlTCQEaJxyvJ-jsvNGAAiCEXcri5I9bJiSvmv_z6M-oZDze0XlG5-b2FJocfDPNeZc40BWg"
                  alt="Atomic control room" 
                  fill
                  className="object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-primary/5 transition-all duration-700"></div>
              </div>
              <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px]">1945 – 1990</span>
              <h4 className="serif-display text-2xl text-on-surface mt-2 group-hover:text-primary transition-colors">Atomic</h4>
            </Link>

            {/* Digital */}
            <Link href="/archive?era=digital" className="group cursor-pointer block">
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-surface-container relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw5UFef-njQqu2vs4Q0MrlGvo5UiZgko7lvbPUOnKRjJaowZCMyj5aYGn6BEi4htPcmTyFyv47JuCW9MAJAS0DdWlAvm9qHLY8wcTWpR5XUGpa9jpmkTGpX6To-UI0C5v6RJ0AqMQeqxu6RRRFk__wR7r97TsQt4ak0cSX7SvQodonIiYUsEAjcX2a0ZAO8smLlrAHthQFi03N-aWQbgYSKq8hexndVnlvN8CU-2R4Q714lkSR2fzgpICd3SeWscqK0ESWVGjiZA"
                  alt="Data stream" 
                  fill
                  className="object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-primary/5 transition-all duration-700"></div>
              </div>
              <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px]">1991 – Present</span>
              <h4 className="serif-display text-2xl text-on-surface mt-2 group-hover:text-primary transition-colors">Digital</h4>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-10"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-primary serif-display italic text-2xl mb-4 block">The Inner Circle</span>
          <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl text-on-surface mb-8">Join the Vanguard of Thought</h2>
          <p className="font-body text-slate-400 mb-12 text-lg">Receive exclusive director's cuts, archival scans, and invitations to private screenings. No noise, just pure signal.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              className="w-full md:w-96 bg-surface-container-high border-none text-on-surface font-label text-xs tracking-widest px-8 py-5 focus:ring-1 focus:ring-primary outline-none rounded-sm placeholder:text-slate-500" 
              placeholder="ENTER YOUR EMAIL ADDRESS" 
              type="email" 
              required
            />
            <button 
              type="button"
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 text-xs font-label font-bold tracking-[0.2em] uppercase rounded-sm hover:brightness-110 transition-all"
            >
              INVITE ME
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
