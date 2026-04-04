'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { FAQSchema } from '@/components/ideo/SchemaOrg';

export default function HSEFAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('hse.faq.q1'),
      answer: t('hse.faq.a1'),
    },
    {
      question: t('hse.faq.q2'),
      answer: t('hse.faq.a2'),
    },
    {
      question: t('hse.faq.q3'),
      answer: t('hse.faq.a3'),
    },
    {
      question: t('hse.faq.q4'),
      answer: t('hse.faq.a4'),
    },
    {
      question: t('hse.faq.q5'),
      answer: t('hse.faq.a5'),
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-[#1A1A2E] mb-12 text-center">
          FAQ
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
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4A017] flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openIndex === idx && (
                <p className="text-sm text-[#4A4A5A] mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Structured data for Google rich results */}
        <FAQSchema items={faqs.map(f => ({ question: f.question, answer: f.answer }))} />
      </div>
    </section>
  );
}
