'use client';

import Image from 'next/image';

export default function LogosMarquee() {
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

  return (
    <section className="bg-[#AAAAAA] overflow-hidden" style={{ height: '60px', padding: '0' }}>
      <div className="h-full flex items-center">
        <div className="flex animate-marquee md:animate-marquee-desktop items-center" style={{ gap: '48px', flexWrap: 'nowrap' }}>
          {[...clientLogos, ...clientLogos].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center"
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

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (min-width: 768px) {
          .md\\:animate-marquee-desktop {
            animation: marquee 60s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
