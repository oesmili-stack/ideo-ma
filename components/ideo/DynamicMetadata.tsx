'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MetadataConfig {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  canonicalPath?: string;
}

function setMetaTag(name: string, content: string, isProperty?: boolean) {
  const attr = isProperty ? 'property' : 'name';
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  } else {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    tag.setAttribute('content', content);
    document.head.appendChild(tag);
  }
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (link) {
    link.href = url;
  } else {
    link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.head.appendChild(link);
  }
}

export default function DynamicMetadata({ titleFr, titleEn, descriptionFr, descriptionEn, canonicalPath }: MetadataConfig) {
  const { language } = useLanguage();

  useEffect(() => {
    const title = language === 'fr' ? titleFr : titleEn;
    const description = language === 'fr' ? descriptionFr : descriptionEn;

    // Title
    document.title = title;

    // Meta description
    setMetaTag('description', description);

    // Open Graph
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', 'IDEO Factory', true);
    setMetaTag('og:locale', language === 'fr' ? 'fr_MA' : 'en_US', true);

    if (canonicalPath) {
      const fullUrl = `https://www.ideo.ma${canonicalPath}`;
      setMetaTag('og:url', fullUrl, true);
      setCanonical(fullUrl);
    }

    // Twitter
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);

    // Language hint
    document.documentElement.lang = language;

  }, [language, titleFr, titleEn, descriptionFr, descriptionEn, canonicalPath]);

  return null;
}
