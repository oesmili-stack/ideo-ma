'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { FAQSchema } from '@/components/ideo/SchemaOrg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function SuiteFAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('suite.faq.q1'),
      answer: t('suite.faq.a1'),
    },
    {
      question: t('suite.faq.q2'),
      answer: t('suite.faq.a2'),
    },
    {
      question: t('suite.faq.q3'),
      answer: t('suite.faq.a3'),
    },
    {
      question: t('suite.faq.q4'),
      answer: t('suite.faq.a4'),
    },
    {
      question: t('suite.faq.q5'),
      answer: t('suite.faq.a5'),
    },
    {
      question: t('suite.faq.q6'),
      answer: t('suite.faq.a6'),
    },
  ];

  const leftColumn = faqs.slice(0, 3);
  const rightColumn = faqs.slice(3, 6);

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-16">
          {t('suite.faq.title')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 bg-[#F5F5F5]"
                >
                  <AccordionTrigger className="text-left font-bold text-[#1A1A2E] hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A4A5A] leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {rightColumn.map((faq, index) => (
                <AccordionItem
                  key={index + 3}
                  value={`item-${index + 3}`}
                  className="border border-gray-200 rounded-lg px-6 bg-[#F5F5F5]"
                >
                  <AccordionTrigger className="text-left font-bold text-[#1A1A2E] hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A4A5A] leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Structured data for Google rich results */}
        <FAQSchema items={faqs} />
      </div>
    </section>
  );
}
