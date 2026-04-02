'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Users, Flame, Zap, Car, FlaskConical, Activity, Brain, Monitor, CirclePlay as PlayCircle, Video, Glasses } from 'lucide-react';

export default function DigitalLearning() {
  const { t } = useLanguage();

  const categories = [
    { icon: ShieldCheck, title: t('hse.digital.cat1') },
    { icon: Users, title: t('hse.digital.cat2') },
    { icon: Flame, title: t('hse.digital.cat3') },
    { icon: Zap, title: t('hse.digital.cat4') },
    { icon: Car, title: t('hse.digital.cat5') },
    { icon: FlaskConical, title: t('hse.digital.cat6') },
    { icon: Activity, title: t('hse.digital.cat7') },
    { icon: Brain, title: t('hse.digital.cat8') },
  ];

  const formats = [
    { icon: Monitor, title: t('hse.digital.format1') },
    { icon: PlayCircle, title: t('hse.digital.format2') },
    { icon: Video, title: t('hse.digital.format3') },
    { icon: Glasses, title: t('hse.digital.format4') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-6">
            {t('hse.digital.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-4xl mx-auto leading-relaxed">
            {t('hse.digital.intro')}
          </p>
        </div>

        {/* Intro text before sub-blocks */}
        <p className="text-[16px] text-[#666] mb-8 leading-relaxed">
          {t('hse.digital.ready.label').includes('emploi')
            ? 'Deux formes de Digital Learning pour répondre à tous vos besoins :'
            : 'Two types of Digital Learning to meet all your needs:'}
        </p>

        <div className="mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#D4A017] text-white font-semibold text-sm uppercase tracking-wide rounded-full">
            {t('hse.digital.ready.label')}
          </div>
          <p className="text-[#666] mb-8 leading-relaxed">
            {t('hse.digital.ready.text')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E0E0E0] rounded-lg text-center hover:border-[#D4A017] hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <cat.icon className="w-8 h-8 text-[#D4A017] mx-auto mb-3" />
                <div className="text-sm font-bold text-[#1A1A2E]">
                  {cat.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="inline-block mb-4 px-4 py-2 bg-[#D4A017] text-white font-semibold text-sm uppercase tracking-wide rounded-full">
            {t('hse.digital.custom.label')}
          </div>
          <p className="text-[#666] mb-8 leading-relaxed">
            {t('hse.digital.custom.text')}
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {formats.map((format, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-white border border-[#E0E0E0] rounded-lg hover:border-[#D4A017] hover:shadow-md transition-all"
              >
                <format.icon className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                <div className="text-sm font-medium text-[#1A1A2E]">
                  {format.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
