'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { ClipboardCheck, Target, Languages, BookOpen, Zap } from 'lucide-react';

export default function LeParcours() {
  const { t } = useLanguage();

  const components = [
    {
      icon: ClipboardCheck,
      title: t('cyber.parcours.comp1.title'),
      desc: t('cyber.parcours.comp1.desc'),
    },
    {
      icon: Target,
      title: t('cyber.parcours.comp2.title'),
      desc: t('cyber.parcours.comp2.desc'),
    },
    {
      icon: Languages,
      title: t('cyber.parcours.comp3.title'),
      desc: t('cyber.parcours.comp3.desc'),
    },
    {
      icon: BookOpen,
      title: t('cyber.parcours.comp4.title'),
      desc: t('cyber.parcours.comp4.desc'),
    },
    {
      icon: Zap,
      title: t('cyber.parcours.comp5.title'),
      desc: t('cyber.parcours.comp5.desc'),
    },
  ];

  const steps = [
    t('cyber.parcours.step1'),
    t('cyber.parcours.step2'),
    t('cyber.parcours.step3'),
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            {t('cyber.parcours.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-3xl mx-auto">
            {t('cyber.parcours.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-4">
            {components.map((comp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 flex items-start gap-4 border border-[#E5E7EB]"
              >
                <div className="w-9 h-9 rounded-full bg-[#E8F4FD] flex items-center justify-center flex-shrink-0">
                  <comp.icon className="w-5 h-5 text-[#4FA8D1]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E] mb-1">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-[#888780]">
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center min-h-[380px]">
            <Image
              src="/Cyberawarecomposantes.png"
              alt="CyberAware Learning Components"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#4FA8D1] text-white rounded-xl px-3.5 py-4 text-center"
            >
              <div className="w-[34px] h-[34px] rounded-full bg-white bg-opacity-25 flex items-center justify-center mx-auto mb-4">
                <span className="text-[22px] font-bold text-white">
                  {idx + 1}
                </span>
              </div>
              <p className="text-[13px] font-medium leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
