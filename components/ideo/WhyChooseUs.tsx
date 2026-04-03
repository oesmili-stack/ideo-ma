'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function AnimatedCounter({ end, suffix = '', prefix = '', format = true }: { end: number; suffix?: string; prefix?: string; format?: boolean }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  const formatNumber = (num: number) => {
    if (!format) return num.toString();
    return num.toLocaleString('fr-FR').replace(/,/g, ' ');
  };

  return (
    <div ref={ref} className="text-[18px] md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
}

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const counters = [
    { value: 100000, prefix: '+', suffix: '', label: t('why.counter1'), format: true },
    { value: 5000, prefix: '+', suffix: 'h', label: t('why.counter2'), format: true },
    { value: 50000, prefix: '+', suffix: '', label: t('why.counter3'), format: true },
    { value: 50, prefix: '~', suffix: '', label: t('why.counter4'), format: false },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-2">
          <h2 className="text-[28px] sm:text-[42px] font-bold text-[#1a1a1a] mb-10">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 - Triple certification ISO */}
          <div
            className="bg-white rounded-xl p-8 text-left transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            style={{
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
            }}
          >
            {/* ISO Badges - 3 logos side by side, smaller on mobile */}
            <div className="flex items-center justify-start gap-2 mb-6">
              <Image
                src="/ISO9001.png"
                alt="ISO 9001"
                width={80}
                height={40}
                className="h-[28px] sm:h-[40px] w-auto object-contain"
              />
              <Image
                src="/ISO29990.png"
                alt="ISO 29990"
                width={80}
                height={40}
                className="h-[28px] sm:h-[40px] w-auto object-contain"
              />
              <Image
                src="/ISO27001.png"
                alt="ISO 27001"
                width={80}
                height={40}
                className="h-[28px] sm:h-[40px] w-auto object-contain"
              />
            </div>
            <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-3">
              {t('why.cert.title')}
            </h3>
            <p className="text-[15px] text-[#555] leading-relaxed mb-3">
              {t('why.cert.line1')}
            </p>
            <p className="text-[15px] text-[#555] leading-relaxed">
              {t('why.cert.line2')}
            </p>
          </div>

          {/* Card 2 - Brandon Hall Awards */}
          <div
            className="bg-white rounded-xl p-8 text-left transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
            }}
          >
            {/* Brandon Hall Badge */}
            <div className="mb-6">
              <Image
                src="/brandohall.png"
                alt="Brandon Hall Awards"
                width={180}
                height={60}
                className="h-[60px] w-auto object-contain"
              />
            </div>
            <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-3">
              {t('why.awards.title')}
            </h3>
            <p className="text-[15px] text-[#555] leading-relaxed mb-3">
              {t('why.awards.line1')}
            </p>
            <p className="text-[15px] text-[#555] leading-relaxed">
              {t('why.awards.line2')}
            </p>
          </div>

          {/* Card 3 - 20 ans d'expertise */}
          <div
            className="bg-white rounded-xl p-8 text-left transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
            }}
          >
            {/* IDEO Logo */}
            <div className="mb-6">
              <Image
                src="/Fichier_8@2x.png"
                alt="IDEO Factory"
                width={140}
                height={50}
                className="h-[50px] w-auto object-contain"
              />
            </div>
            <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-3">
              {t('why.expertise.title')}
            </h3>
            <p className="text-[15px] text-[#555] leading-relaxed mb-3">
              {t('why.expertise.line1')}
            </p>
            <p className="text-[15px] text-[#555] leading-relaxed">
              {t('why.expertise.line2')}
            </p>
          </div>
        </div>

        {/* Link to About page */}
        <div className="text-center my-8">
          <Link href="/about" className="text-[#D42027] font-semibold hover:underline">
            {t('why.discover_story')} →
          </Link>
        </div>

        {/* Counters Bar */}
        <div className="bg-[#D42027] rounded-xl md:rounded-2xl py-8 md:py-12 px-5 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {counters.map((counter, idx) => (
              <div key={idx} className="text-center text-white">
                <AnimatedCounter
                  end={counter.value}
                  prefix={counter.prefix}
                  suffix={counter.suffix}
                  format={counter.format}
                />
                <p className="text-white/90 mt-2 md:mt-3 text-[11px] md:text-sm lg:text-base">
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
