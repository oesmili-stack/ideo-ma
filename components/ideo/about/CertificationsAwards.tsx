'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function CertificationsAwards() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const animateCounter = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>
    ) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, interval);
    };

    animateCounter(100000, setCounter1);
    animateCounter(5000, setCounter2);
    animateCounter(50000, setCounter3);
    animateCounter(50, setCounter4);
  }, [isVisible]);

  const isoCertifications = [
    { image: '/ISOCadre.jpg', label: 'ISO 9001:2015', height: 280 },
    { image: '/ISOCadre2.jpg', label: 'ISO 29990:2010', height: 280 },
    { image: '/ISOCadre3.png', label: 'ISO 27001:2013', height: 280 },
  ];


  const counters = [
    { value: counter1, label: t('about.cert.counter1'), prefix: '+' },
    { value: counter2, label: t('about.cert.counter2'), suffix: 'h', prefix: '+' },
    { value: counter3, label: t('about.cert.counter3'), prefix: '+' },
    { value: counter4, label: t('about.cert.counter4'), prefix: '~' },
  ];

  const formatNumber = (num: number) => {
    return num.toLocaleString('fr-FR');
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6">
            {t('about.cert.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-4xl mx-auto">
            {t('about.cert.subtitle')}
          </p>
        </div>

        {/* ROW 1 - ISO Certifications */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-6 md:gap-12 mb-12">
          {isoCertifications.map((cert, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative mb-2 w-[196px] h-[280px] md:w-auto md:h-auto" style={{ maxWidth: '280px' }}>
                <Image
                  src={cert.image}
                  alt={cert.label}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-500">
                {cert.label}
              </p>
            </div>
          ))}
        </div>

        {/* ROW 2 - Brandon Hall Awards */}
        <div className="flex justify-center mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative h-[300px] w-auto">
              <Image
                src="/Brandonhallbis.png"
                alt="Brandon Hall Group Excellence Awards"
                height={300}
                width={1200}
                className="object-contain h-full w-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#D42027] rounded-xl md:rounded-2xl py-8 px-5 md:p-12 lg:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {counters.map((counter, idx) => (
              <div
                key={idx}
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="text-[24px] md:text-[42px] font-bold text-white mb-1 md:mb-2 whitespace-nowrap">
                  {counter.prefix}
                  {formatNumber(counter.value)}
                  {counter.suffix || ''}
                </div>
                <p className="text-[11px] md:text-[14px] text-white opacity-90">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
