'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { PenTool, Palette, Video, Layers, Scissors, Mic, Code, ClipboardCheck } from 'lucide-react';
import Image from 'next/image';

export default function OurTeam() {
  const { t } = useLanguage();

  const roles = [
    {
      icon: PenTool,
      color: 'text-[#D42027]',
      title: t('agency.team.role1.title'),
      description: t('agency.team.role1.desc'),
    },
    {
      icon: Palette,
      color: 'text-[#6B7FD7]',
      title: t('agency.team.role2.title'),
      description: t('agency.team.role2.desc'),
    },
    {
      icon: Video,
      color: 'text-[#E8912D]',
      title: t('agency.team.role3.title'),
      description: t('agency.team.role3.desc'),
    },
    {
      icon: Layers,
      color: 'text-[#2ECC71]',
      title: t('agency.team.role4.title'),
      description: t('agency.team.role4.desc'),
    },
    {
      icon: Scissors,
      color: 'text-[#9B59B6]',
      title: t('agency.team.role5.title'),
      description: t('agency.team.role5.desc'),
    },
    {
      icon: Mic,
      color: 'text-[#E74C3C]',
      title: t('agency.team.role6.title'),
      description: t('agency.team.role6.desc'),
    },
    {
      icon: Code,
      color: 'text-[#1ABC9C]',
      title: t('agency.team.role7.title'),
      description: t('agency.team.role7.desc'),
    },
    {
      icon: ClipboardCheck,
      color: 'text-[#3498DB]',
      title: t('agency.team.role8.title'),
      description: t('agency.team.role8.desc'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="badge-surtitre">
            {t('agency.team.badge')}
          </span>
          <h2 className="h2-section">
            {t('agency.team.title')}
          </h2>
        </div>

        <div className="mb-12">
          <Image
            src="/equipe-IDEO.png"
            alt="IDEO Team"
            width={1400}
            height={350}
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <Icon className={`w-9 h-9 ${role.color} mb-3`} strokeWidth={1.5} />
                <h3 className="font-bold text-[#1A1A2E] mb-2 text-[16px]">{role.title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
