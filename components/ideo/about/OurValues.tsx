'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbulb, RefreshCw, Handshake } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function OurValues() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
    },
    {
      icon: RefreshCw,
      title: t('about.values.flexibility.title'),
      description: t('about.values.flexibility.desc'),
    },
    {
      icon: Handshake,
      title: t('about.values.engagement.title'),
      description: t('about.values.engagement.desc'),
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-16 text-center">
          {t('about.values.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 border-t-4 border-[#D42027] shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D42027] to-[#b81b21] rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                {value.title}
              </h3>
              <p className="text-[#4A4A5A] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
