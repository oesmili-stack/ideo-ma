'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Plane, Landmark, Building2, Zap, Globe, Signal, Heart, Wheat } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ClientLogoProps {
  src: string;
  name: string;
  scale?: number;
}

function ClientLogo({ src, name, scale = 1 }: ClientLogoProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[200px] h-[120px] bg-white border border-[#E5E5E5] rounded-lg flex items-center justify-center p-4">
        <div className="relative w-full h-full" style={{ transform: `scale(${scale})` }}>
          <Image
            src={src}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <span className="text-sm text-gray-500 text-center max-w-[200px]">
        {name}
      </span>
    </div>
  );
}

interface SectorBlockProps {
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
  clients: { name: string; logo: string; scale?: number }[];
  index: number;
}

function SectorBlock({ icon: Icon, titleKey, descKey, clients, index }: SectorBlockProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;
  const bgColor = isEven ? 'bg-white' : 'bg-[#F9FAFB]';

  return (
    <section
      ref={blockRef}
      className={`py-12 sm:py-20 ${bgColor} transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Icon className="w-12 h-12 text-[#D42027]" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E]">
              {t(titleKey)}
            </h2>
          </div>
          <p className="text-lg text-gray-600 italic leading-relaxed max-w-5xl">
            {t(descKey)}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 justify-items-center">
          {clients.map((client, idx) => (
            <ClientLogo key={idx} src={client.logo} name={client.name} scale={client.scale} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SectorBlocks() {
  const sectors = [
    {
      icon: Plane,
      titleKey: 'references.transport.title',
      descKey: 'references.transport.desc',
      clients: [
        { name: 'Royal Air Maroc', logo: '/ref-S1-01-royal-air-maroc.png' },
        { name: 'ONCF', logo: '/ref-S1-05-oncf.png' },
        { name: 'ONDA', logo: '/ref-S1-02-onda.jpg' },
        { name: 'Tanger Med', logo: '/ref-S1-03-tanger-med.png' },
        { name: 'CITAL', logo: '/ref-S1-04-cital.png' },
      ],
    },
    {
      icon: Landmark,
      titleKey: 'references.banking.title',
      descKey: 'references.banking.desc',
      clients: [
        { name: 'Attijariwafa Bank', logo: '/ref-S2-01-attijariwafa-bank.png' },
        { name: 'CDG', logo: '/ref-S2-02-cdg.png' },
        { name: 'SAHAM Bank', logo: '/ref-S2-03-saham-bank.png' },
        { name: 'BCP', logo: '/ref-S2-04-bcp.jpg', scale: 1.3 },
        { name: 'BMCI', logo: '/ref-S2-05-bmci.jpg' },
        { name: 'CFG Bank', logo: '/ref-S2-06-cfg-bank.png' },
        { name: 'Crédit du Maroc', logo: '/ref-S2-07-credit-du-maroc.png', scale: 1.3 },
        { name: 'CDG Capital', logo: '/ref-S2-08-cdg-capital.png', scale: 1.3 },
        { name: 'RMA Assurance', logo: '/ref-S2-09-rma-assurance.png' },
        { name: 'AXA Assurance', logo: '/ref-S2-10-axa-assurance.jpg' },
        { name: 'MAMDA MCMA', logo: '/ref-S2-11-mamda-mcma.png' },
        { name: 'SOFAC', logo: '/ref-S2-12-sofac.png' },
        { name: 'Al Amana', logo: '/ref-S2-13-al-amana.png', scale: 1.5 },
        { name: 'Attawfiq', logo: '/ref-S2-14-attawfiq.png' },
        { name: 'Arrawaj', logo: '/ref-S2-15-arrawaj.png' },
        { name: 'CMS Mohammed VI', logo: '/ref-S2-16-cms-mohammed-vi.jpg' },
      ],
    },
    {
      icon: Building2,
      titleKey: 'references.public.title',
      descKey: 'references.public.desc',
      clients: [
        { name: 'Ministère de l\'Agriculture', logo: '/ref-S3-01-min-agriculture.jpg' },
        { name: 'Ministère de l\'Économie et des Finances', logo: '/ref-S3-02-min-economie.jpg', scale: 1.3 },
        { name: 'Ministère du Tourisme', logo: '/ref-S3-03-min-tourisme.jpg' },
        { name: 'Ministère de l\'Industrie et du Commerce', logo: '/ref-S3-04-min-industrie.webp' },
        { name: 'Ministère de la Justice', logo: '/ref-S3-05-min-justice.jpg' },
        { name: 'Ministère de la Solidarité', logo: '/ref-S3-06-min-solidarite.png' },
        { name: 'Ministère des Relations avec le Parlement', logo: '/ref-S3-07-min-relations-parlement.jpg' },
        { name: 'Ministère des Affaires Étrangères', logo: '/ref-S3-08-min-affaires-etrangeres.jpg' },
        { name: 'DGCT', logo: '/ref-S3-09-dgct.jpg', scale: 1.3 },
        { name: 'CNSS', logo: '/ref-S3-10-cnss.png' },
        { name: 'ANAPEC', logo: '/ref-S3-11-anapec.png', scale: 1.3 },
        { name: 'OFPPT', logo: '/ref-S3-12-ofppt.webp' },
        { name: 'ODCO', logo: '/ref-S3-13-odco.jpg' },
        { name: 'HCP', logo: '/ref-S3-14-hcp.jpg', scale: 1.3 },
        { name: 'OMPIC', logo: '/ref-S3-15-ompic.png' },
        { name: 'Al Omrane', logo: '/ref-S3-16-al-omrane.png' },
        { name: 'ANLCA', logo: '/ref-S3-17-anlca.jpg' },
        { name: 'CRI Drâa-Tafilalet', logo: '/ref-S3-18-cri-draa.jpg' },
      ],
    },
    {
      icon: Zap,
      titleKey: 'references.energy.title',
      descKey: 'references.energy.desc',
      clients: [
        { name: 'TAQA Morocco', logo: '/ref-S4-01-taqa.png', scale: 1.3 },
        { name: 'Masen', logo: '/ref-S4-02-masen.jpg', scale: 1.3 },
        { name: 'ONEE', logo: '/ref-S4-03-onee.jpg' },
        { name: 'AMEE', logo: '/ref-S4-04-amee.png' },
        { name: 'SRM Casa-Settat', logo: '/ref-S4-05-srm-casa-settat.png' },
        { name: 'Managem', logo: '/ref-S4-06-managem.jpg', scale: 1.2 },
        { name: 'Richbond', logo: '/ref-S4-07-richbond.png' },
        { name: 'Ingelec', logo: '/ref-S4-08-ingelec.png' },
        { name: 'JESA', logo: '/ref-S4-09-jesa.jpg', scale: 1.3 },
        { name: 'Aya Gold & Silver', logo: '/ref-S4-10-aya-gold.jpg' },
        { name: 'AKWA Group', logo: '/ref-S4-11-akwa-group.jpg', scale: 1.3 },
      ],
    },
    {
      icon: Globe,
      titleKey: 'references.international.title',
      descKey: 'references.international.desc',
      clients: [
        { name: 'ONU Femmes', logo: '/ref-S5-01-un-women.png' },
        { name: 'PNUD', logo: '/ref-S5-02-pnud.png' },
        { name: 'UNOPS', logo: '/ref-S5-03-unops.png' },
        { name: 'UNESCO', logo: '/ref-S5-04-unesco.jpg' },
        { name: 'World Bank', logo: '/ref-S5-05-world-bank.png' },
        { name: 'UCLG Africa', logo: '/ref-S5-06-uclg-africa.jpg' },
        { name: 'Enabel', logo: '/ref-S5-07-enabel.jpg' },
        { name: 'MCC Morocco', logo: '/ref-S5-08-mcc.png' },
        { name: 'GIZ', logo: '/ref-S5-09-giz.jpg', scale: 1.5 },
      ],
    },
    {
      icon: Signal,
      titleKey: 'references.telecoms.title',
      descKey: 'references.telecoms.desc',
      clients: [
        { name: 'Maroc Telecom', logo: '/ref-S6-01-maroc-telecom.jpg', scale: 1.3 },
        { name: 'Poste Maroc', logo: '/ref-S6-02-poste-maroc.png' },
        { name: 'Majorel', logo: '/ref-S6-03-majorel.png', scale: 1.3 },
        { name: 'Outsourcia', logo: '/ref-S6-04-outsourcia.png' },
        { name: 'Adesias', logo: '/ref-S6-05-adesias.png' },
        { name: 'McDonald\'s Maroc', logo: '/ref-S6-06-mcdonalds.webp' },
        { name: 'MAP', logo: '/ref-S6-07-map.jpg' },
        { name: 'Djezzy', logo: '/ref-S6-08-djezzy.png' },
      ],
    },
    {
      icon: Heart,
      titleKey: 'references.pharma.title',
      descKey: 'references.pharma.desc',
      clients: [
        { name: 'Afric-Phar', logo: '/ref-S7-01-afric-phar.jpg', scale: 1.3 },
        { name: 'Akdital', logo: '/ref-S7-02-akdital.png' },
        { name: 'Pharma 5', logo: '/ref-S7-03-pharma5.jpg' },
        { name: 'Hydrapharm', logo: '/ref-S7-04-hydrapharm.jpg', scale: 1.3 },
      ],
    },
    {
      icon: Wheat,
      titleKey: 'references.agriculture.title',
      descKey: 'references.agriculture.desc',
      clients: [
        { name: 'Azura', logo: '/ref-S8-01-azura.png' },
        { name: 'ORMVAG', logo: '/ref-S8-02-ormvag.jpg' },
        { name: 'ORMVAL', logo: '/ref-S8-03-ormval.jpg' },
        { name: 'INRA', logo: '/ref-S8-04-inra.jpg' },
        { name: 'FM6 Environnement', logo: '/ref-S8-05-fm6-environnement.png' },
        { name: '4C Maroc', logo: '/ref-S8-06-4c-maroc.png' },
      ],
    },
  ];

  return (
    <>
      {sectors.map((sector, index) => (
        <SectorBlock
          key={index}
          icon={sector.icon}
          titleKey={sector.titleKey}
          descKey={sector.descKey}
          clients={sector.clients}
          index={index}
        />
      ))}
    </>
  );
}
