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
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-primary text-3xl font-light">
            {status === 'already_subscribed' ? 'verified_user' : 'check_circle'}
          </span>
        </div>
        <h3 className="font-headline text-3xl text-primary mb-2 italic">
          {status === 'already_subscribed' ? 'You are already in the Vanguard.' : 'Welcome to the Vanguard.'}
        </h3>
        <p className="font-body text-slate-400">
          {status === 'already_subscribed' 
            ? 'Your email is already securely recorded in our ledger.' 
            : 'Your email has been securely added to the ledger.'}
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-[10px] font-label uppercase tracking-widest text-slate-500 hover:text-primary transition-colors"
        >
          {status === 'already_subscribed' ? 'Subscribe a different email' : 'Subscribe another'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center relative">
      <div className="flex flex-col items-center md:items-start w-full md:w-auto relative">
        <input 
          className="w-full md:w-96 bg-surface-container-high border-none text-on-surface font-label text-xs tracking-widest px-8 py-5 focus:ring-1 focus:ring-primary outline-none rounded-sm placeholder:text-slate-500 disabled:opacity-50 transition-all" 
          placeholder="ENTER YOUR EMAIL ADDRESS" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          required
        />
        {status === 'error' && (
          <span className="text-red-400 text-[10px] font-label uppercase tracking-widest mt-2 absolute -bottom-6 w-full text-center md:text-left">{errorMessage}</span>
        )}
      </div>
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 text-xs font-label font-bold tracking-[0.2em] uppercase rounded-sm hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center min-w-[160px]"
      >
        {status === 'loading' ? (
          <span className="material-symbols-outlined animate-spin text-on-primary">sync</span>
        ) : (
          "INVITE ME"
        )}
      </button>
    </form>
  );
}
