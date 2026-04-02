'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-2">
          <h2 className="text-[28px] sm:text-[42px] font-bold text-[#1a1a1a] mb-2">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal mb-10">
            {t('services.subtitle')}
          </p>
        </div>

        <div>
          {/* Two cards side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* CARD 1: Conseil et Ingénierie */}
            <div
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              {/* Image banner */}
              <div className="w-full h-[150px] sm:h-[200px] overflow-hidden hidden sm:block">
                <img
                  src="/Conseil_Hero.png"
                  alt="Conseil et Ingénierie"
                  className="w-full h-full"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '12px 12px 0 0',
                    objectPosition: 'center top'
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-8">
                <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1a1a1a] mb-3">
                  {t('services.consulting.title')}
                </h3>
                <p className="text-[#D42027] text-[14px] sm:text-[16px] mb-4" style={{ fontWeight: 600 }}>
                  {t('services.consulting.subtitle')}
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#555] leading-[1.7] mb-5">
                  {t('services.consulting.description')}
                </p>

                {/* 3 bullet points with red dashes */}
                <div className="space-y-3 mb-5">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-start gap-3">
                      <div className="text-[#D42027] mt-1">—</div>
                      <p className="text-[#555] text-[15px] leading-relaxed">
                        {t(`services.consulting.point${num}`)}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href="/services/conseil-ingenierie" className="text-[#D42027] font-semibold hover:underline">
                  {t('services.consulting.link')} →
                </Link>
              </div>
            </div>

            {/* CARD 2: Learning Services */}
            <div
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              {/* Image banner - cropped to remove red bar */}
              <div className="w-full h-[150px] sm:h-[200px] overflow-hidden hidden sm:block">
                <img
                  src="/ImageLearningServices.png"
                  alt="Learning Services"
                  className="w-full h-full"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '12px 12px 0 0',
                    objectPosition: 'center 30%'
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-8">
                <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1a1a1a] mb-3">
                  {t('services.ils.title')}
                </h3>
                <p className="text-[#D42027] text-[14px] sm:text-[16px] mb-4" style={{ fontWeight: 600 }}>
                  {t('services.ils.subtitle')}
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#555] leading-[1.7] mb-5">
                  {t('services.ils.description')}
                </p>

                {/* 3 bullet points with red dashes */}
                <div className="space-y-3 mb-5">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-start gap-3">
                      <div className="text-[#D42027] mt-1">—</div>
                      <p className="text-[#555] text-[15px] leading-relaxed">
                        {t(`services.ils.point${num}`)}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href="/services/learning-services" className="text-[#D42027] font-semibold hover:underline">
                  {t('services.ils.link')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
