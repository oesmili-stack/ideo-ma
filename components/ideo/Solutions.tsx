'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { GraduationCap, Shield, TriangleAlert as AlertTriangle, MessageCircle, Rocket, Bot } from 'lucide-react';

export default function Solutions() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-[#f7f7f8]" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-2">
          <h2 className="text-[28px] sm:text-[42px] font-bold text-[#1a1a1a] mb-2">
            {t('solutions.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal mb-10">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* TIER 1: Académie d'Entreprise - Full width flagship */}
        <div className="mb-6 mt-6">
          <div
            className="bg-white rounded-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #D42027'
            }}
          >
            <div className="flex flex-col md:flex-row">
              {/* LEFT SIDE - Content (45%) */}
              <div className="md:w-[45%] p-4 sm:p-10 flex flex-col justify-center">
                <img
                  src="/IDEO_Academie_En_Ligne@2x-8.png"
                  alt="IDEO AEL Logo"
                  style={{
                    maxHeight: '50px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                  className="mb-3 sm:max-h-[60px]"
                />
                <p className="text-[#D42027] text-[16px] sm:text-[18px] font-semibold mb-3">
                  {t('solutions.academy.subtitle')}
                </p>
                <p className="text-[#555555] text-[14px] sm:text-[15px] leading-[1.6] mb-5">
                  {t('solutions.academy.description')}
                </p>
                <Link href="/solutions/academie-entreprise-en-ligne" className="text-[#D42027] font-semibold hover:underline inline-block">
                  {t('solutions.academy.link')} →
                </Link>
              </div>

              {/* RIGHT SIDE - Image (55%) */}
              <div className="md:w-[55%] p-4 sm:p-6 flex items-center">
                <img
                  src="/AELIMage3.png"
                  alt="Académie d'Entreprise en Ligne"
                  className="w-full h-full rounded-lg"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* TIER 2: CyberAware & Be! Langues - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-4 sm:p-8 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <img
              src="/logoCyberAware.png"
              alt="CyberAware Logo"
              style={{
                maxHeight: '65px',
                width: 'auto',
                objectFit: 'contain'
              }}
              className="mb-3"
            />
            <p className="text-[#D42027] font-semibold mb-4">
              {t('solutions.cyberaware.subtitle')}
            </p>
            <p className="text-[#888780] leading-relaxed mb-4">
              {t('solutions.cyberaware.description')}
            </p>
            <Link href="/cyberaware" className="text-[#D42027] font-semibold hover:underline">
              {t('solutions.cyberaware.link')} →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-8 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <img
              src="/LogoBebyideo.png"
              alt="Be! by IDEO Logo"
              style={{
                maxHeight: '55px',
                width: 'auto',
                objectFit: 'contain'
              }}
              className="mb-3 sm:max-h-[65px]"
            />
            <p className="text-[#D42027] font-semibold mb-4 text-sm sm:text-base">
              {t('solutions.languages.subtitle')}
            </p>
            <p className="text-[#888780] leading-relaxed mb-4 text-sm sm:text-base">
              {t('solutions.languages.description')}
            </p>
            <Link href="/solutions/be-langues" className="text-[#D42027] font-semibold hover:underline text-sm sm:text-base">
              {t('solutions.languages.link')} →
            </Link>
          </div>
        </div>

        {/* TIER 3: HSE, onBoarding, AI - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-4 sm:p-8 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <img
              src="/LogoHSELearning.png"
              alt="HSE Learning Logo"
              style={{
                maxHeight: '65px',
                width: 'auto',
                objectFit: 'contain'
              }}
              className="mb-3"
            />
            <p className="text-[#D42027] font-semibold mb-4">
              {t('solutions.hse.subtitle')}
            </p>
            <p className="text-[#888780] leading-relaxed mb-4">
              {t('solutions.hse.description')}
            </p>
            <Link href="/solutions/hse-learning" className="text-[#D42027] font-semibold hover:underline">
              {t('solutions.hse.link')} →
            </Link>
          </div>

          <div id="onboarding" className="bg-white rounded-xl p-4 sm:p-8 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', scrollMarginTop: '120px' }}>
            <img
              src="/IDEO_onBoarding@2x-8.png"
              alt="IDEO onBoarding Logo"
              style={{
                maxHeight: '65px',
                width: 'auto',
                objectFit: 'contain'
              }}
              className="mb-3"
            />
            <p className="text-[#D42027] font-semibold mb-4">
              {t('solutions.onboarding.subtitle')}
            </p>
            <p className="text-[#888780] leading-relaxed">
              {t('solutions.onboarding.description')}
            </p>
          </div>

          <div id="ai-learning-academy" className="bg-white rounded-xl p-4 sm:p-8 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', scrollMarginTop: '120px' }}>
            <img
              src="/IDEO_AI_Academy@2x-8.png"
              alt="AI Learning Academy Logo"
              style={{
                maxHeight: '65px',
                width: 'auto',
                objectFit: 'contain'
              }}
              className="mb-3"
            />
            <p className="text-[#D42027] font-semibold mb-4">
              {t('solutions.ai.subtitle')}
            </p>
            <p className="text-[#888780] leading-relaxed">
              {t('solutions.ai.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
