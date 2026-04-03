'use client';

import { useEffect, useState } from 'react';

export default function LogosMarquee() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const doubleLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-[#AAAAAA] overflow-hidden" style={{ height: '60px', padding: '0' }}>
      <div className="h-full flex items-center">
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
            width: 'max-content',
            whiteSpace: 'nowrap',
            gap: isMobile ? '24px' : '48px',
            animation: `internalMarquee ${isMobile ? '45s' : '60s'} linear infinite`,
          }}
        >
          {doubleLogos.map((logo, idx) => (
            <div
              key={idx}
              style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img
                src={logo.src}
                alt=""
                style={{
                  height: logo.extraLarge ? '52px' : logo.large ? '52px' : '35px',
                  width: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'screen'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframes — guaranteed to work in production */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes internalMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
