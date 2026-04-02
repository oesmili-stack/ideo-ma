'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function BeFAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t('be.faq.q1'), a: t('be.faq.a1') },
    { q: t('be.faq.q2'), a: t('be.faq.a2') },
    { q: t('be.faq.q3'), a: t('be.faq.a3') },
    { q: t('be.faq.q4'), a: t('be.faq.a4') },
    { q: t('be.faq.q5'), a: t('be.faq.a5') },
    { q: t('be.faq.q6'), a: t('be.faq.a6') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-black text-[#1A1A2E] text-center mb-12">
          {t('be.faq.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E5EA] rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-bold text-[#1A1A2E] flex-1">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#4A4A5A] flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openIndex === idx && (
                <p className="text-sm text-[#4A4A5A] mt-4 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
