'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MetadataConfig {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
}

export default function DynamicMetadata({ titleFr, titleEn, descriptionFr, descriptionEn }: MetadataConfig) {
  const { language } = useLanguage();

  useEffect(() => {
    const title = language === 'fr' ? titleFr : titleEn;
    const description = language === 'fr' ? descriptionFr : descriptionEn;

    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [language, titleFr, titleEn, descriptionFr, descriptionEn]);

  return null;
}
