'use client';

import { useRouter } from 'next/navigation';

export default function TermsOfService() {
  const router = useRouter();

  return (
    <div className="w-full pt-40 px-6 md:px-12 max-w-4xl mx-auto mb-40">
      <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-label text-[10px] uppercase tracking-widest mb-12">
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Go Back
      </button>
      
      <h1 className="font-headline text-5xl md:text-6xl mb-4 text-on-surface">Terms of Service</h1>
      <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-16">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
      
      <div className="prose prose-invert prose-slate max-w-none font-body text-on-surface-variant leading-relaxed space-y-8">
        <p>Welcome to Chronicles of Innovation. By accessing or using our website, subscribing to our newsletter, or viewing our content, you agree to comply with and be bound by the following Terms of Service ("Terms"). Please review them carefully.</p>
        
        <h2 className="font-headline text-3xl text-primary mt-12 mb-6">1. Acceptance of Terms</h2>
        <p>By accessing the Chronicles of Innovation website, you acknowledge that you have read, understood, and agree to be legally bound by these Terms. If you do not agree to these Terms, please do not use our website or subscribe to our materials.</p>
        
        <h2 className="font-headline text-3xl text-primary mt-12 mb-6">2. Intellectual Property & Copyright</h2>
        <p>All content presented on this website—including but not limited to documentaries, articles, text, graphics, logos, images, and cinematic designs—is the exclusive property of Chronicles of Innovation or its content creators, and is protected by international copyright laws.</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400">
          <li>You may not reproduce, distribute, fundamentally modify, or commercially exploit our original content without explicit written permission.</li>
          <li>You may share links to our public articles, YouTube videos, and website pages provided appropriate credit is explicitly given to Chronicles of Innovation.</li>
        </ul>

        <h2 className="font-headline text-3xl text-primary mt-12 mb-6">3. User Conduct</h2>
        <p>In accessing our platform, you agree not to:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400">
          <li>Use the website in any way that violates applicable local or international laws.</li>
          <li>Attempt to gain unauthorized access to our servers, newsletter databases, or infrastructure.</li>
          <li>Submit malicious data, spam, or abusive material through our subscription forms or contact channels.</li>
        </ul>

        <h2 className="font-headline text-3xl text-primary mt-12 mb-6">4. Disclaimer of Warranties</h2>
        <p>Our historical and technical documentaries are meticulously researched, but they are provided on an "as-is" and "as-available" basis for educational and entertainment purposes. We make no absolute warranties, express or implied, regarding the absolute accuracy, completeness, or reliability of all historical claims made within the content.</p>

        <h2 className="font-headline text-3xl text-primary mt-12 mb-6">5. Limitation of Liability</h2>
        <p>Under no circumstances shall Chronicles of Innovation, its curators, directors, or researchers be held liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website, your reliance on our content, or any interruptions in the availability of our services.</p>

        <h2 className="font-headline text-3xl text-primary mt-12 mb-6">6. Contact Us</h2>
        <p>If you have any questions or require clarification regarding these Terms of Service, please contact us at:</p>
        <p className="font-bold text-on-surface">hello@chroniclesofinnovation.com</p>
      </div>
    </div>
  );
}
