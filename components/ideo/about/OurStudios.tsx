'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function OurStudios() {
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

  const studios = [
    { image: '/Studio3.jpg', label: t('about.studios.tvset') },
    { image: '/Studio2.jpg', label: t('about.studios.greenscreen') },
    { image: '/Studio1.jpg', label: t('about.studios.controlroom') },
    { image: '/Studio4.png', label: t('about.studios.soundstudio') },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-8 text-center">
          {t('about.studios.title')}
        </h2>

        <div className="mb-12 space-y-4 text-[#4A4A5A] leading-relaxed">
          <p className="text-lg">
            {t('about.studios.text1')}
          </p>
          <p className="text-lg">
            {t('about.studios.text2')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {studios.map((studio, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={studio.image}
                  alt={studio.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-bold">
                  {studio.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
