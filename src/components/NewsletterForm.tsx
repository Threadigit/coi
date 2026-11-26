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
      <div className="flex flex-col items-center justify-center py-2 text-center">
        <div className="mb-5">
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
          className="mt-6 eyebrow !text-on-surface/50 hover:!text-primary transition-colors"
        >
          {status === 'already_subscribed' ? 'Subscribe a different email' : 'Subscribe another'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0 mb-6">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        className="h-14 w-full min-w-0 sm:flex-1 border border-white/25 bg-transparent px-5 text-base text-on-surface outline-none placeholder:text-on-surface/45 transition-colors focus:border-primary disabled:opacity-50 sm:border-r-0"
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
        className="btn btn-primary h-14 w-full sm:w-auto !px-10 disabled:opacity-50"
      >
        {status === 'loading' ? (
          <span className="material-symbols-outlined animate-spin text-on-primary">sync</span>
        ) : (
          'Invite me'
        )}
      </button>
      {status === 'error' && (
        <span role="alert" className="text-red-400 text-xs absolute inset-x-0 top-full mt-3">{errorMessage}</span>
      )}
    </form>
  );
}
