'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

export default function IdeoLearnDetail() {
  const { t } = useLanguage();

  const features = [
    t('suite.learn.point1'),
    t('suite.learn.point2'),
    t('suite.learn.point3'),
    t('suite.learn.point4'),
    t('suite.learn.point5'),
    t('suite.learn.point6'),
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold tracking-wide uppercase text-[#D42027] mb-2 block">
              {t('suite.learn.label')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6">
              {t('suite.learn.title')}
            </h2>
            <p className="text-lg text-[#4A4A5A] mb-8 leading-relaxed">
              {t('suite.learn.intro')}
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D42027] flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A5A]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <Image
                src="/IDEO_Learn_Mockup-2.png"
                alt="IDEO Learn Platform"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
