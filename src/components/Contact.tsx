'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';

export function Contact() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
    <section ref={ref} id="contact" className="relative py-24 px-6 max-w-2xl mx-auto z-10">
      <div className="mb-16 reveal">
        <span className="text-dark-gray text-xs tracking-widest uppercase">
          {'// establish connection'}
        </span>
        <h2 className="text-green text-2xl md:text-3xl font-bold mt-2 glow">
          <span className="text-dark-gray">$</span> {t('title')}
        </h2>
      </div>

      {submitted ? (
        <div className="bg-card-bg border border-green p-8 text-center">
          <div className="text-green text-sm mb-2">{'>'} connection established</div>
          <p className="text-green glow-pulse text-lg font-bold">{t('success')}</p>
        </div>
      ) : (
        <div
          className={`bg-card-bg border border-card-border overflow-hidden transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-card-border bg-[#0f0f0f]">
            <span className="w-3 h-3 rounded-full bg-red opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#ffcc00] opacity-80" />
            <span className="w-3 h-3 rounded-full bg-green opacity-80" />
            <span className="text-dark-gray text-xs ml-4">new_request.sh</span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {(['name', 'company', 'website', 'phone'] as const).map((field) => (
              <div key={field} className="flex items-center gap-3">
                <span className="text-green shrink-0 text-sm">{'>'}</span>
                <label className="text-dark-gray text-xs shrink-0 w-20 md:w-28 uppercase tracking-wider">
                  {t(field)}:
                </label>
                <input
                  type={field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  required={field !== 'website' && field !== 'company'}
                  className="flex-1 bg-transparent border-b border-card-border text-green placeholder:text-dark-gray py-1 outline-none focus:border-green transition-colors text-sm"
                />
              </div>
            ))}

            <div className="flex items-start gap-3">
              <span className="text-green shrink-0 text-sm mt-1">{'>'}</span>
              <label className="text-dark-gray text-xs shrink-0 w-20 md:w-28 uppercase tracking-wider mt-1">
                {t('message')}:
              </label>
              <textarea
                name="message"
                rows={2}
                className="flex-1 bg-transparent border-b border-card-border text-green placeholder:text-dark-gray py-1 outline-none focus:border-green transition-colors resize-none text-sm"
              />
            </div>

            {error && (
              <p className="text-red text-xs">{'>'} ERROR: connection_failed. retry.</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="btn-cyber w-full border border-green text-green py-3 text-sm font-bold uppercase tracking-[0.2em] relative z-10 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
            >
              <span className="relative z-10">
                {sending ? '[ SENDING... ]' : `[ ${t('submit')} ]`}
              </span>
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
