'use client';

import { useState } from 'react';
import { subscribeToNewsletter } from '@/app/actions/subscribe';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'already_subscribed' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    const result = await subscribeToNewsletter(email);
    
    if (result.success) {
      if (result.alreadySubscribed) {
        setStatus('already_subscribed');
      } else {
        setStatus('success');
      }
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Failed to subscribe.');
    }
  };

  if (status === 'success' || status === 'already_subscribed') {
    return (
      <div className="flex flex-col items-center justify-center py-6 animate-in fade-in duration-700">
        <div className="w-16 h-16 rounded-full bg-primary/10 ring-1 ring-primary/30 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-primary text-3xl font-light">
            {status === 'already_subscribed' ? 'verified_user' : 'check_circle'}
          </span>
        </div>
        <h3 className="font-headline text-3xl md:text-4xl text-primary mb-3 italic tracking-[-0.02em]">
          {status === 'already_subscribed' ? 'You are already in the Vanguard.' : 'Welcome to the Vanguard.'}
        </h3>
        <p className="text-on-surface/60">
          {status === 'already_subscribed' 
            ? 'Your email is already securely recorded in our ledger.' 
            : 'Your email has been securely added to the ledger.'}
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-xs text-on-surface/45 hover:text-primary transition-colors"
        >
          {status === 'already_subscribed' ? 'Subscribe a different email' : 'Subscribe another'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center sm:rounded-full sm:bg-white/[0.07] sm:p-1.5 sm:ring-1 sm:ring-white/10 sm:focus-within:ring-primary/50 transition-shadow">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        className="h-14 w-full flex-1 rounded-full bg-white/[0.07] px-7 text-[15px] text-on-surface outline-none ring-1 ring-white/10 placeholder:text-on-surface/40 transition-shadow focus:ring-primary/50 disabled:opacity-50 sm:h-12 sm:bg-transparent sm:ring-0 sm:focus:ring-0"
        placeholder="Enter your email address"
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
        className="btn btn-primary h-14 sm:h-12 !px-8 disabled:opacity-50 min-w-[9rem]"
      >
        {status === 'loading' ? (
          <span className="material-symbols-outlined animate-spin text-on-primary">sync</span>
        ) : (
          'Invite me'
        )}
      </button>
      {status === 'error' && (
        <span role="alert" className="text-red-400 text-xs absolute -bottom-7 inset-x-0 text-center">{errorMessage}</span>
      )}
    </form>
  );
}
