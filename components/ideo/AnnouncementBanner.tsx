'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('announcement-dismissed', 'true');
  };

  if (!isVisible) return null;

  const content = {
    fr: {
      text: '📍 Retrouvez-nous au GITEX Africa 2026 — Marrakech, du 7 au 9 avril',
      link: 'En savoir plus →'
    },
    en: {
      text: '📍 Meet us at GITEX Africa 2026 — Marrakech, April 7-9',
      link: 'Learn more →'
    }
  };

  const currentContent = content[language];

  return (
    <div data-announcement-banner className="fixed top-0 left-0 right-0 w-full bg-[#111111] py-[10px] z-[60]">
      <div className="container mx-auto px-4 flex items-center justify-center gap-3 relative">
        <span className="text-white text-[14px] font-medium text-center">
          {currentContent.text}
        </span>
        <a
          href="https://gitexafrica.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[14px] font-medium hover:underline whitespace-nowrap"
        >
          {currentContent.link}
        </a>
        <button
          onClick={handleDismiss}
          className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
