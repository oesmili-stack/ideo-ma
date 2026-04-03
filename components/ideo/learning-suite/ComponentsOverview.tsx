'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function ComponentsOverview() {
  const { t } = useLanguage();

  const components = [
    {
      logo: '/LogoIDEOLEARN.png',
      subtitle: t('suite.components.learn.subtitle'),
      description: t('suite.components.learn.desc'),
      color: '#D42027',
    },
    {
      logo: '/LogoTutoring.png',
      subtitle: t('suite.components.tutoring.subtitle'),
      description: t('suite.components.tutoring.desc'),
      color: '#2E86DE',
    },
    {
      logo: '/LogoStudioManager copy.png',
      subtitle: t('suite.components.studio.subtitle'),
      description: t('suite.components.studio.desc'),
      color: '#E8912D',
    },
  ];

  // Prevent ! from wrapping to next line
  const componentsTitle = t('suite.components.title').replace(/ !/, '\u00A0!').replace(/ \!/, '\u00A0!');

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
            {componentsTitle}
          </h2>
          <p className="text-xl text-[#4A4A5A] max-w-4xl mx-auto">
            {t('suite.components.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {components.map((component, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="h-2"
                style={{ backgroundColor: component.color }}
              />
              <div className="p-8">
                <div className="mb-6 flex items-center justify-center h-14">
                  <Image
                    src={component.logo}
                    alt={component.subtitle}
                    width={140}
                    height={42}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3
                  className="text-sm font-bold uppercase tracking-wide mb-3 text-center"
                  style={{ color: component.color }}
                >
                  {component.subtitle}
                </h3>
                <p className="text-[#4A4A5A] leading-relaxed text-center">
                  {component.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D42027] mb-4">
            {t('suite.components.callout.label')}
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <p className="text-5xl lg:text-6xl font-bold text-[#D42027]">
              60 %
            </p>
            <p className="text-base lg:text-lg text-[#4A4A5A] max-w-xl">
              {t('suite.components.callout.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
