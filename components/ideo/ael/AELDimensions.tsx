'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Monitor, HeartHandshake, Megaphone } from 'lucide-react';
import Image from 'next/image';

export default function AELDimensions() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="text-xs lg:text-sm font-bold tracking-[2px] uppercase px-4 py-2 bg-[#D42027] text-white shadow-md inline-block" style={{ borderRadius: '20px' }}>
            {t('ael.dimensions.badge')}
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-6">
          {t('ael.dimensions.title')}
        </h2>

        <p className="text-base text-[#555] leading-relaxed text-center max-w-3xl mx-auto mb-16">
          {t('ael.dimensions.intro')}
        </p>

        {/* Desktop: CSS Grid Radial Layout */}
        <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-6 max-w-[1100px] mx-auto items-center justify-items-center p-10">
          {/* Top Card - Grid Area: Row 1, Col 2 */}
          <div className="col-start-2 row-start-1 w-full max-w-[320px] bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E5E5] border-b-[3px] border-b-[#D42027]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,32,39,0.08)] flex items-center justify-center mb-4">
              <BookOpen className="w-[22px] h-[22px] text-[#D42027]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
              {t('ael.dimensions.card1.title')}
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              {t('ael.dimensions.card1.description')}
            </p>
          </div>

          {/* Left Card - Grid Area: Row 2, Col 1 */}
          <div className="col-start-1 row-start-2 w-full max-w-[320px] bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E5E5] border-r-[3px] border-r-[#D42027]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,32,39,0.08)] flex items-center justify-center mb-4">
              <HeartHandshake className="w-[22px] h-[22px] text-[#D42027]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
              {t('ael.dimensions.card3.title')}
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              {t('ael.dimensions.card3.description')}
            </p>
          </div>

          {/* Center - Grid Area: Row 2, Col 2 */}
          <div className="col-start-2 row-start-2 relative flex items-center justify-center">
            {/* Orbit ring - behind everything */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-dashed border-[rgba(212,32,39,0.12)] rounded-full pointer-events-none -z-10" />

            {/* Vertical connector - top */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[2px] h-6 bg-[rgba(212,32,39,0.2)]" />

            {/* Vertical connector - bottom */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-6 bg-[rgba(212,32,39,0.2)]" />

            {/* Horizontal connector - left */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 h-[2px] w-6 bg-[rgba(212,32,39,0.2)]" />

            {/* Horizontal connector - right */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 h-[2px] w-6 bg-[rgba(212,32,39,0.2)]" />

            {/* Center circle with logo */}
            <div className="w-[200px] h-[200px] border-[2.5px] border-dashed border-[rgba(212,32,39,0.4)] rounded-full flex items-center justify-center bg-transparent">
              <Image
                src="/Logo-IDEO-AEL.png"
                alt="IDEO AEL"
                width={130}
                height={130}
                className="w-[130px] h-auto"
              />
            </div>
          </div>

          {/* Right Card - Grid Area: Row 2, Col 3 */}
          <div className="col-start-3 row-start-2 w-full max-w-[320px] bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E5E5] border-l-[3px] border-l-[#D42027]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,32,39,0.08)] flex items-center justify-center mb-4">
              <Monitor className="w-[22px] h-[22px] text-[#D42027]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
              {t('ael.dimensions.card2.title')}
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              {t('ael.dimensions.card2.description')}
            </p>
          </div>

          {/* Bottom Card - Grid Area: Row 3, Col 2 */}
          <div className="col-start-2 row-start-3 w-full max-w-[320px] bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E5E5] border-t-[3px] border-t-[#D42027]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,32,39,0.08)] flex items-center justify-center mb-4">
              <Megaphone className="w-[22px] h-[22px] text-[#D42027]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
              {t('ael.dimensions.card4.title')}
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              {t('ael.dimensions.card4.description')}
            </p>
          </div>
        </div>

        {/* Mobile: Stacked Layout */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Logo at top */}
          <div className="flex justify-center mb-2">
            <div className="w-[160px] h-[160px] border-[2.5px] border-dashed border-[rgba(212,32,39,0.4)] rounded-full flex items-center justify-center bg-transparent">
              <Image
                src="/Logo-IDEO-AEL.png"
                alt="IDEO AEL"
                width={100}
                height={100}
                className="w-[100px] h-auto"
              />
            </div>
          </div>

          {/* Top Card */}
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E5E5] border-l-[3px] border-l-[#D42027]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,32,39,0.08)] flex items-center justify-center mb-4">
              <BookOpen className="w-[22px] h-[22px] text-[#D42027]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
              {t('ael.dimensions.card1.title')}
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              {t('ael.dimensions.card1.description')}
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E5E5] border-l-[3px] border-l-[#D42027]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,32,39,0.08)] flex items-center justify-center mb-4">
              <Monitor className="w-[22px] h-[22px] text-[#D42027]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
              {t('ael.dimensions.card2.title')}
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              {t('ael.dimensions.card2.description')}
            </p>
          </div>

          {/* Bottom Card */}
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E5E5] border-l-[3px] border-l-[#D42027]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,32,39,0.08)] flex items-center justify-center mb-4">
              <Megaphone className="w-[22px] h-[22px] text-[#D42027]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
              {t('ael.dimensions.card4.title')}
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              {t('ael.dimensions.card4.description')}
            </p>
          </div>

          {/* Left Card */}
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E5E5E5] border-l-[3px] border-l-[#D42027]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(212,32,39,0.08)] flex items-center justify-center mb-4">
              <HeartHandshake className="w-[22px] h-[22px] text-[#D42027]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
              {t('ael.dimensions.card3.title')}
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              {t('ael.dimensions.card3.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
