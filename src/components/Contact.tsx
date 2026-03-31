'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function Contact() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get('name'),
      company: form.get('company'),
      website: form.get('website'),
      phone: form.get('phone'),
      message: form.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-12 fade-in">
        {'> '}{t('title')}
      </h2>

      {submitted ? (
        <div className="fade-in visible text-green text-center py-10 border border-green bg-card-bg">
          <p>{t('success')}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 fade-in">
          {(['name', 'company', 'website', 'phone'] as const).map((field) => (
            <div key={field} className="flex items-center gap-3">
              <span className="text-green shrink-0">{'>'}</span>
              <div className="flex-1">
                <input
                  type={field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  placeholder={t(field)}
                  required={field !== 'website'}
                  className="w-full bg-transparent border-b border-card-border text-green placeholder:text-dark-gray py-2 outline-none focus:border-green transition-colors"
                />
              </div>
            </div>
          ))}

          <div className="flex items-start gap-3">
            <span className="text-green shrink-0 mt-2">{'>'}</span>
            <textarea
              name="message"
              placeholder={t('message')}
              rows={3}
              className="flex-1 bg-transparent border-b border-card-border text-green placeholder:text-dark-gray py-2 outline-none focus:border-green transition-colors resize-none"
            />
          </div>

          {error && (
            <p className="text-red text-sm text-center">Error. Try again.</p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="btn-glitch border-2 border-green text-green px-8 py-3 text-sm font-bold uppercase tracking-wider w-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] cursor-pointer disabled:opacity-50 disabled:cursor-wait"
          >
            {sending ? '...' : t('submit')}
          </button>
        </form>
      )}
    </section>
  );
}
