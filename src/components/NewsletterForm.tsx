'use client';

import { useState } from 'react';
import { useLocale } from '@/i18n/context';

export default function NewsletterForm() {
  const { ui } = useLocale();
  const t = ui.newsletter;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'already_subscribed' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    let result: { success?: boolean; alreadySubscribed?: boolean } = {};
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      result = await res.json();
    } catch {
      result = { success: false };
    }

    if (result.success) {
      if (result.alreadySubscribed) {
        setStatus('already_subscribed');
      } else {
        setStatus('success');
      }
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(t.error);
    }
  };

  if (status === 'success' || status === 'already_subscribed') {
    return (
      <div className="flex flex-col items-center justify-center py-2 text-center">
        <div className="mb-5">
          <span className="material-symbols-outlined text-primary text-3xl font-light">
            {status === 'already_subscribed' ? 'verified_user' : 'check_circle'}
          </span>
        </div>
        <h3 className="font-headline text-3xl md:text-4xl text-primary mb-3 italic tracking-[-0.02em]">
          {status === 'already_subscribed' ? t.alreadyTitle : t.successTitle}
        </h3>
        <p className="text-on-surface/60">
          {status === 'already_subscribed' ? t.alreadyText : t.successText}
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 eyebrow !text-on-surface/50 hover:!text-primary transition-colors"
        >
          {status === 'already_subscribed' ? t.different : t.another}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0 mb-6">
      <label htmlFor="newsletter-email" className="sr-only">{t.label}</label>
      <input
        id="newsletter-email"
        className="h-14 w-full min-w-0 sm:flex-1 border border-white/25 bg-transparent px-5 text-base text-on-surface outline-none placeholder:text-on-surface/45 transition-colors focus:border-primary disabled:opacity-50 sm:border-r-0"
        placeholder={t.placeholder}
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary h-14 w-full sm:w-auto !px-10 disabled:opacity-50"
      >
        {status === 'loading' ? (
          <span className="material-symbols-outlined animate-spin text-on-primary">sync</span>
        ) : (
          t.submit
        )}
      </button>
      {status === 'error' && (
        <span role="alert" className="text-red-400 text-xs absolute inset-x-0 top-full mt-3">{errorMessage}</span>
      )}
    </form>
  );
}
