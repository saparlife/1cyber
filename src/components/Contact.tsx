'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function Contact() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: replace with Telegram bot API or webhook
    setSubmitted(true);
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

          <button
            type="submit"
            className="btn-glitch border-2 border-green text-green px-8 py-3 text-sm font-bold uppercase tracking-wider w-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] cursor-pointer"
          >
            {t('submit')}
          </button>
        </form>
      )}
    </section>
  );
}
