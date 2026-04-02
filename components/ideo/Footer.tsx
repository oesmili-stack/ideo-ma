'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Youtube, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const { t, language } = useLanguage();

  const footerLinks = {
    products: [
      { text: 'IDEO Learning Suite', href: '/products/learning-suite' },
      { text: 'IDEO Learning Content', href: '/products/learning-content' },
      { text: 'IDEO Learning Agency', href: '/products/learning-agency' },
    ],
    solutions: [
      { text: t('menu.corporate_academy'), href: '/solutions/academie-entreprise-en-ligne' },
      { text: t('menu.cyberaware'), href: '/solutions/cyberaware' },
      { text: t('menu.hse'), href: '/solutions/hse-learning' },
      { text: t('menu.languages'), href: '/solutions/be-langues' },
      { text: t('menu.onboarding'), href: '/#onboarding' },
      { text: 'AI Learning Academy', href: '/#ai-learning-academy' },
    ],
    services: [
      { text: t('menu.consulting'), href: '/services/conseil-ingenierie' },
      { text: t('menu.ils'), href: '/services/learning-services' },
    ],
    company: [
      { text: t('footer.about'), href: '/about' },
      { text: t('footer.references'), href: '/references' },
      { text: t('footer.contact'), href: '/contact' },
    ],
  };

  return (
    <footer className="bg-[#2C2C2A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Contact Info Row */}
        <div className="mb-12 pb-6 border-b border-[#333]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Fichier_7@2x.png"
                alt="IDEO Factory"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Contact Items */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#999] mt-0.5 flex-shrink-0" />
                <span className="text-[14px] text-[#aaa]">
                  Angle rue Mohamed Kamal et rue Fakir Mohamed, 20180 Casablanca, {language === 'en' ? 'Morocco' : 'Maroc'}
                </span>
              </div>

              {/* Phone */}
              <a href="tel:+212522275168" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#999] flex-shrink-0" />
                <span className="text-[14px] text-[#aaa]">+212 5 22 27 51 68</span>
              </a>

              {/* Email */}
              <a href="mailto:contactma@ideolearning.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#999] flex-shrink-0" />
                <span className="text-[14px] text-[#aaa]">contactma@ideolearning.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.products')}</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.solutions')}</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">
                {t('footer.copyright')}
              </span>
              <span className="text-gray-600">•</span>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors text-xs">
                {t('footer.privacy_policy')}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/ideo-factory/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCVSImlquZhEg1IZ4KDr2G-w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/IDEOFactory/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
