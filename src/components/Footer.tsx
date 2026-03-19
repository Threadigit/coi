import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-outline-variant/20 bg-background flex flex-col md:flex-row justify-between items-center gap-8 mt-20">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="font-headline italic text-primary text-xl">Chronicles of Innovation</div>
        <p className="font-label text-[10px] uppercase tracking-widest text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} Chronicles of Innovation. Curating the Spark of Progress.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link href="/terms" className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-on-surface transition-opacity duration-500 hover:underline decoration-primary underline-offset-4">Terms of Service</Link>
        <Link href="/privacy" className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-on-surface transition-opacity duration-500 hover:underline decoration-primary underline-offset-4">Privacy Policy</Link>
        <Link href="mailto:hello@chroniclesofinnovation.com" className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-on-surface transition-opacity duration-500 hover:underline decoration-primary underline-offset-4">Contact</Link>
        <Link href="https://www.youtube.com/@ChronicleofInnovation" target="_blank" className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-on-surface transition-opacity duration-500 hover:underline decoration-primary underline-offset-4">YouTube</Link>
      </div>
    </footer>
  );
}
