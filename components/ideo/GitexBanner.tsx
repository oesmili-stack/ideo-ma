'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function GitexBanner() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#111111] py-3">
      <div className="text-center">
        <span className="text-white text-sm font-medium">
          {t('gitex.announcement')}{' '}
          <a
            href="https://gitexafrica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            {t('gitex.link')} →
          </a>
        </span>
      </div>
    </div>
  );
}
