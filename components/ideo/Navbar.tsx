'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, BookOpen, Camera, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  variant?: 'light' | 'dark';
  isHomePage?: boolean;
  scrolled?: boolean;
}

export default function Navbar({ variant = 'dark', isHomePage = false, scrolled: forcedScrolled }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimeout) clearTimeout(closeTimeout);
      document.body.style.overflow = '';
    };
  }, [closeTimeout, mobileMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
    setCloseTimeout(timeout);
  };

  const handleDropdownClick = (menu: string) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const menuItems = {
    products: [
      { icon: Monitor, title: t('menu.learning_suite'), desc: t('menu.learning_suite_desc'), href: '/products/learning-suite' },
      { icon: BookOpen, title: t('menu.learning_content'), desc: t('menu.learning_content_desc'), href: '/products/learning-content' },
      { icon: Camera, title: t('menu.learning_agency'), desc: t('menu.learning_agency_desc'), href: '/products/learning-agency' },
    ],
    solutions: [
      { title: t('menu.corporate_academy'), desc: t('menu.corporate_academy_desc'), href: '/solutions/academie-entreprise-en-ligne' },
      { title: t('menu.cyberaware'), desc: t('menu.cyberaware_desc'), href: '/solutions/cyberaware' },
      { title: t('menu.hse'), desc: t('menu.hse_desc'), href: '/solutions/hse-learning' },
      { title: t('menu.languages'), desc: t('menu.languages_desc'), href: '/solutions/be-langues' },
      { title: t('menu.onboarding'), desc: t('menu.onboarding_desc'), href: '/#onboarding' },
    ],
    services: [
      { title: t('menu.consulting'), desc: t('menu.consulting_desc'), href: '/services/conseil-ingenierie' },
      { title: t('menu.ils'), desc: t('menu.ils_desc'), href: '/services/learning-services' },
    ],
  };

  const isLightBg = variant === 'light';
  const effectiveScrolled = forcedScrolled !== undefined ? forcedScrolled : isScrolled;
  const shouldUseDarkText = effectiveScrolled || isLightBg;

  // Pour la homepage, on utilise gris au lieu de rouge pour le hover
  const getHoverColor = () => {
    if (isHomePage && !effectiveScrolled) {
      return 'hover:text-gray-300';
    }
    return 'hover:text-[#D42027]';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 m-0 ${
        effectiveScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 m-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {shouldUseDarkText ? (
                <Image
                  src="/Fichier_8@2x.png"
                  alt="IDEO Factory"
                  width={120}
                  height={40}
                  className="h-9 max-h-9 min-w-[80px] md:min-w-[80px] xl:min-w-[100px] w-auto object-contain"
                />
              ) : (
                <Image
                  src="/Fichier_7@2x.png"
                  alt="IDEO Factory"
                  width={120}
                  height={40}
                  className="h-9 max-h-9 min-w-[80px] md:min-w-[80px] xl:min-w-[100px] w-auto object-contain"
                />
              )}
            </Link>

            {/* Nav Links - Desktop */}
            <div className="hidden min-[1025px]:flex items-center min-[1025px]:gap-8 min-[1025px]:max-[1366px]:gap-3">
              {['products', 'solutions', 'services'].map((menu) => (
                <div
                  key={menu}
                  className="relative dropdown-container"
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleDropdownClick(menu)}
                    className={`flex items-center gap-1 ${getHoverColor()} transition-colors font-medium cursor-pointer min-h-[44px] whitespace-nowrap min-[1025px]:max-[1366px]:text-sm ${
                      shouldUseDarkText ? 'text-[#1A1A2E]' : 'text-white'
                    }`}
                  >
                    {t(`nav.${menu}`)}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {openMenu === menu && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg py-4 px-6 min-w-[320px] z-[100]"
                      onMouseEnter={() => handleMouseEnter(menu)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {menuItems[menu as keyof typeof menuItems].map((item, idx) => {
                        const itemHref = 'href' in item ? item.href : '#';
                        return (
                          <Link
                            key={idx}
                            href={itemHref}
                            className="block py-3 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors min-h-[44px]"
                          >
                            <div className="flex items-start gap-3">
                              {'icon' in item && item.icon && (
                                <item.icon className="w-5 h-5 text-[#D42027] mt-1" />
                              )}
                              <div>
                                <div className="font-semibold text-[#2C2C2A] mb-1">
                                  {item.title}
                                </div>
                                <div className="text-sm text-[#888780]">
                                  {item.desc}
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/references" className={`${getHoverColor()} transition-colors font-medium whitespace-nowrap min-[1025px]:max-[1366px]:text-sm ${
                shouldUseDarkText ? 'text-[#1A1A2E]' : 'text-white'
              }`}>
                {t('nav.references')}
              </Link>
              <Link href="/about" className={`${getHoverColor()} transition-colors font-medium whitespace-nowrap min-[1025px]:max-[1366px]:text-sm ${
                shouldUseDarkText ? 'text-[#1A1A2E]' : 'text-white'
              }`}>
                {t('nav.about')}
              </Link>
              <Link href="/contact" className={`${getHoverColor()} transition-colors font-medium whitespace-nowrap min-[1025px]:max-[1366px]:text-sm ${
                shouldUseDarkText ? 'text-[#1A1A2E]' : 'text-white'
              }`}>
                {t('footer.contact')}
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language switcher - Desktop and Mobile */}
            <div className={`flex items-center gap-1 rounded-lg p-1 ${
              shouldUseDarkText ? 'bg-gray-100' : 'bg-white/20'
            }`}>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  language === 'fr'
                    ? shouldUseDarkText
                      ? 'bg-white text-[#2C2C2A] shadow-sm'
                      : 'bg-white text-[#D42027] shadow-sm'
                    : shouldUseDarkText
                    ? 'text-[#888780] hover:text-[#2C2C2A]'
                    : 'text-white hover:text-white/80'
                } text-sm md:text-sm`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  language === 'en'
                    ? shouldUseDarkText
                      ? 'bg-white text-[#2C2C2A] shadow-sm'
                      : 'bg-white text-[#D42027] shadow-sm'
                    : shouldUseDarkText
                    ? 'text-[#888780] hover:text-[#2C2C2A]'
                    : 'text-white hover:text-white/80'
                } text-sm md:text-sm`}
              >
                EN
              </button>
            </div>

            {/* CTA Button - Desktop only */}
            <Link href="/contact" className="hidden min-[1025px]:block">
              <button className="px-6 py-2 rounded-lg font-medium transition-colors bg-[#D42027] text-white hover:bg-[#b81b21]">
                {t('nav.demo')}
              </button>
            </Link>

            {/* Mobile hamburger menu */}
            <button
              onClick={toggleMobileMenu}
              className={`min-[1025px]:hidden p-2 ${
                shouldUseDarkText ? 'text-[#1A1A2E]' : 'text-white'
              }`}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[10000] min-[1025px]:hidden">
          <div className="absolute inset-0 bg-white">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src="/Fichier_8@2x.png"
                  alt="IDEO Factory"
                  width={120}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-[#1A1A2E]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile menu content */}
            <div className="overflow-y-auto h-[calc(100vh-73px)] flex flex-col">
              <div className="flex-1">
                {/* Produits */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown('products')}
                    className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium text-[#1A1A2E]"
                  >
                    {t('nav.products')}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileDropdownOpen === 'products' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen === 'products' && (
                    <div className="bg-gray-50">
                      {menuItems.products.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block px-6 py-3 text-[#2C2C2A] border-t border-gray-200"
                        >
                          <div className="flex items-start gap-3">
                            <item.icon className="w-5 h-5 text-[#D42027] mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-semibold mb-1">{item.title}</div>
                              <div className="text-sm text-[#888780]">{item.desc}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solutions */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown('solutions')}
                    className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium text-[#1A1A2E]"
                  >
                    {t('nav.solutions')}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileDropdownOpen === 'solutions' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen === 'solutions' && (
                    <div className="bg-gray-50">
                      {menuItems.solutions.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block px-6 py-3 text-[#2C2C2A] border-t border-gray-200"
                        >
                          <div className="font-semibold mb-1">{item.title}</div>
                          <div className="text-sm text-[#888780]">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown('services')}
                    className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium text-[#1A1A2E]"
                  >
                    {t('nav.services')}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileDropdownOpen === 'services' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen === 'services' && (
                    <div className="bg-gray-50">
                      {menuItems.services.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block px-6 py-3 text-[#2C2C2A] border-t border-gray-200"
                        >
                          <div className="font-semibold mb-1">{item.title}</div>
                          <div className="text-sm text-[#888780]">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Références */}
                <Link
                  href="/references"
                  onClick={closeMobileMenu}
                  className="block px-6 py-4 text-lg font-medium text-[#1A1A2E] border-b border-gray-200"
                >
                  {t('nav.references')}
                </Link>

                {/* À propos */}
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block px-6 py-4 text-lg font-medium text-[#1A1A2E] border-b border-gray-200"
                >
                  {t('nav.about')}
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block px-6 py-4 text-lg font-medium text-[#1A1A2E] border-b border-gray-200"
                >
                  {t('footer.contact')}
                </Link>

                {/* Language switcher - Mobile */}
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center gap-1 rounded-lg p-1 bg-gray-100 w-fit">
                    <button
                      onClick={() => setLanguage('fr')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        language === 'fr'
                          ? 'bg-white text-[#2C2C2A] shadow-sm'
                          : 'text-[#888780] hover:text-[#2C2C2A]'
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        language === 'en'
                          ? 'bg-white text-[#2C2C2A] shadow-sm'
                          : 'text-[#888780] hover:text-[#2C2C2A]'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Button - Mobile (at bottom) */}
              <div className="p-6 border-t border-gray-200 bg-white">
                <Link href="/contact" onClick={closeMobileMenu} className="block">
                  <button className="w-full px-6 py-3 rounded-lg font-medium transition-colors bg-[#D42027] text-white hover:bg-[#b81b21]">
                    {t('nav.demo')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
