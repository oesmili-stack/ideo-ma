'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function LeCatalogue() {
  const { t } = useLanguage();

  const stats = [
    { number: '37', label: t('cyber.catalogue.stat1') },
    { number: '2', label: t('cyber.catalogue.stat2') },
    { number: '15 min', label: t('cyber.catalogue.stat3') },
    { number: '2', label: t('cyber.catalogue.stat4') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            {t('cyber.catalogue.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-4xl mx-auto">
            {t('cyber.catalogue.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-extrabold text-[#D42027] mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-[#888780]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[48%_52%] gap-8 items-center mb-8">
          <div>
            <div className="grid gap-6">
              <div className="bg-[#F8FBFD] border border-[#4FA8D1] border-l-4 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                  {t('cyber.catalogue.cyber.title')}
                </h3>
                <div className="text-2xl font-bold text-[#D42027] mb-4">
                  21 {t('cyber.catalogue.cyber.modules')}
                </div>
                <p className="text-sm text-[#4A4A5A] leading-relaxed">
                  {t('cyber.catalogue.cyber.desc')}
                </p>
              </div>

              <div className="bg-[#FEFAFA] border border-[#D42027] border-l-4 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                  {t('cyber.catalogue.data.title')}
                </h3>
                <div className="text-2xl font-bold text-[#D42027] mb-4">
                  16 {t('cyber.catalogue.data.modules')}
                </div>
                <p className="text-sm text-[#4A4A5A] leading-relaxed">
                  {t('cyber.catalogue.data.desc')}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/CyberAware-plateforme_(1).png"
              alt="CyberAware Platform"
              width={600}
              height={450}
              className="w-full max-w-full max-h-[450px] h-auto object-contain rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        <div className="bg-[#F8F9FA] border-l-4 border-[#4FA8D1] rounded-lg p-4">
          <p className="text-[15px] text-[#1A1A2E]">
            {t('cyber.catalogue.banner')}{' '}
            <Link href="/contact" className="text-[#D42027] font-semibold hover:underline">
              {t('cyber.catalogue.banner.link')}
            </Link>{' '}
            {t('cyber.catalogue.banner.text')}
          </p>
        </div>
      </div>
    </section>
  );
}
