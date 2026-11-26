'use client';

import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="w-full pt-40 md:pt-48 px-6 md:px-12 max-w-3xl mx-auto mb-40">
      <button onClick={() => router.back()} className="link-arrow !text-on-surface/60 hover:!text-primary mb-10 -ml-1 px-1 py-3">
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Go Back
      </button>
      
      <h1 className="font-headline text-5xl md:text-7xl tracking-[-0.035em] mb-5 text-on-surface">Privacy Policy</h1>
      <p className="eyebrow mb-16">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
      
      <div className="prose prose-invert prose-slate max-w-none text-on-surface/65 text-[17px] leading-[1.75] space-y-8">
        <p>At Chronicles of Innovation, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website and subscribe to the Vanguard newsletter.</p>
        
        <h2 className="font-headline text-3xl tracking-[-0.02em] text-on-surface mt-16 mb-5">1. Information We Collect</h2>
        <p>We only collect the minimum amount of information necessary to provide you with our service. When you subscribe to our newsletter, we collect the following:</p>
        <ul className="list-disc pl-6 space-y-2 text-on-surface/60">
          <li><strong>Email Address:</strong> Used strictly to send you the Vanguard newsletter, exclusive updates, and notifications about new documentary releases.</li>
        </ul>
        
        <h2 className="font-headline text-3xl tracking-[-0.02em] text-on-surface mt-16 mb-5">2. How We Use Your Information</h2>
        <p>The information we collect is used exclusively for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 text-on-surface/60">
          <li>To send you our curated email newsletter.</li>
          <li>To notify you of new video content, events, or changes to our policies.</li>
          <li>We <strong>never</strong> sell, rent, or lease your personal information to third parties.</li>
        </ul>

        <h2 className="font-headline text-3xl tracking-[-0.02em] text-on-surface mt-16 mb-5">3. Third-Party Services</h2>
        <p>We utilize trusted third-party services to operate our digital infrastructure safely:</p>
        <ul className="list-disc pl-6 space-y-2 text-on-surface/60">
          <li><strong>Brevo:</strong> We use Brevo as our secure email marketing platform. Your email address is stored on their secure servers for the sole purpose of delivering our newsletter.</li>
          <li><strong>YouTube:</strong> Our videos are embedded via YouTube, which may collect anonymous usage data or employ cookies in accordance with Google's Privacy Policy.</li>
        </ul>

        <h2 className="font-headline text-3xl tracking-[-0.02em] text-on-surface mt-16 mb-5">4. Your Data Rights & Opting Out</h2>
        <p>You maintain ultimate control over the data you share with us. You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 text-on-surface/60">
          <li><strong>Unsubscribe:</strong> You can opt out of our communications at any time by clicking the "Unsubscribe" link automatically included at the bottom of every email we send.</li>
          <li><strong>Data Deletion:</strong> You may request the total deletion of your email address from our ledger by contacting us.</li>
        </ul>

        <h2 className="font-headline text-3xl tracking-[-0.02em] text-on-surface mt-16 mb-5">5. Contact Us</h2>
        <p>If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact the archives at:</p>
        <p className="font-bold text-on-surface">hello@chroniclesofinnovation.com</p>
      </div>
    </div>
  );
}
