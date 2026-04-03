'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Monitor, BookOpen, MessageCircle } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const clientLogos: Array<{ src: string; large?: boolean; extraLarge?: boolean }> = [
    { src: '/BandeauONCF.png' },
    { src: '/Bandeaucfg_banque.png' },
    { src: '/Bandeaumamda.png' },
    { src: '/Bandeaucdm.png', large: true },
    { src: '/Bandeauonda.png' },
    { src: '/BandeauCDG.png' },
    { src: '/Bandeauaxa.png' },
    { src: '/Bandeaumaroc_telecom.png', large: true },
    { src: '/Bandeauunesco.png' },
    { src: '/BandeauAWB.png' },
    { src: '/BandeauManagem.png' },
    { src: '/BandeauRAM_clean.png', large: true },
    { src: '/Bandeausaham_bank.png' },
    { src: '/Bandeauworld_bank.png' },
    { src: '/Bandeaubmci.png', large: true },
    { src: '/BandeaurMA.png' },
    { src: '/BandeauTanger_med.png' },
    { src: '/BandeauMin_economie.png', extraLarge: true },
    { src: '/BandeauSRM-CS.png' },
    { src: '/BandeauAkdital.png' },
    { src: '/BandeauBp.png', extraLarge: true },
    { src: '/Bandeauanapec.png', extraLarge: true },
    { src: '/BandeauCDG-capital.png', extraLarge: true },
  ];

  // Triple the logos for smooth infinite scroll on all screen sizes
  const tripleLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative min-h-[80vh] overflow-hidden md:overflow-visible m-0 p-0" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* Gradient Background with Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B1A1F] to-[#D42027]" />
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/Fichier_5@2x.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 h-full flex items-center pt-32 sm:pt-24 pb-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left column - Text */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-block">
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border border-white/30">
                  {t('hero.badge')}
                </div>
              </div>

              {/* Title */}
              <h1 className="h1-hero-internal-white">
                {t('hero.title')}
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-white/90 leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-white text-[#D42027] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl min-h-[48px]">
                    {t('hero.cta_demo')}
                  </button>
                </Link>
                <button
                  onClick={() => {
                    const solutionsSection = document.getElementById('solutions');
                    if (solutionsSection) {
                      solutionsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors min-h-[48px]"
                >
                  {t('hero.cta_discover')}
                </button>
              </div>
            </div>

            {/* Right column - Woman with floating elements */}
            <div className="relative h-full min-h-[500px] min-[768px]:max-[1024px]:min-h-0 hidden lg:flex items-center justify-end">
              {/* Soft pink/rose blob behind woman for depth */}
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FFB6C1]/30 to-[#FFC0CB]/20 rounded-full blur-3xl" />

              {/* Woman image */}
              <div className="relative w-full h-full max-w-2xl z-10">
                <Image
                  src="/HEROImage.png"
                  alt=""
                  fill
                  className="object-cover object-[center_top]"
                  priority
                />
              </div>

              {/* Floating icons */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 animate-float z-20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>

              <div className="absolute top-1/3 left-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 animate-float-delayed z-20">
                <Monitor className="w-6 h-6 text-white" />
              </div>

              <div className="absolute bottom-1/3 right-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 animate-float-delayed-2 z-20">
                <BookOpen className="w-6 h-6 text-white" />
              </div>

              <div className="absolute bottom-20 left-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 animate-float z-20">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Strip - FIXED AT BOTTOM, NO BACKGROUND */}
      {clientLogos.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-[1] overflow-hidden" style={{ height: '90px', background: 'transparent' }}>
          <div className="h-full flex items-center" style={{ background: 'transparent' }}>
            <div className="flex hero-marquee items-center" style={{ gap: '48px', flexWrap: 'nowrap' }}>
              {tripleLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'transparent' }}
                >
                  <img
                    src={logo.src}
                    alt=""
                    style={{
                      height: logo.extraLarge ? '72px' : logo.large ? '72px' : '50px',
                      width: 'auto',
                      objectFit: 'contain',
                      mixBlendMode: 'screen'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes heroMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .hero-marquee {
          animation: heroMarquee 25s linear infinite;
        }
        @media (min-width: 768px) {
          .hero-marquee {
            animation: heroMarquee 60s linear infinite;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delayed-2 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-float-delayed-2 {
          animation: float-delayed-2 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
