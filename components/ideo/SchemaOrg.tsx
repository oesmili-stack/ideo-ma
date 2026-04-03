'use client';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IDEO Factory',
    alternateName: 'IDEO Learning',
    url: 'https://www.ideo.ma',
    logo: 'https://www.ideo.ma/Fichier_8@2x.png',
    image: 'https://www.ideo.ma/Fichier_8@2x.png',
    description: 'Leader du Digital Learning au Maroc depuis 2006. Plateforme LMS primée, catalogues internationaux, production sur mesure et accompagnement de A à Z.',
    foundingDate: '2006',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 50,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Angle rue Mohamed Kamal et rue Fakir Mohamed',
      addressLocality: 'Casablanca',
      postalCode: '20180',
      addressCountry: 'MA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212-522-275-168',
      contactType: 'sales',
      email: 'contactma@ideolearning.com',
      availableLanguage: ['French', 'English', 'Arabic'],
    },
    sameAs: [
      'https://www.linkedin.com/company/ideo-factory/posts/?feedView=all',
      'https://www.youtube.com/channel/UCVSImlquZhEg1IZ4KDr2G-w',
      'https://www.facebook.com/IDEOFactory/',
    ],
    award: [
      'Brandon Hall Group Silver Award - Excellence in Innovation 2019',
      'Brandon Hall Group Silver Award - Best Advance in Learning Management Technology 2024',
    ],
    knowsAbout: [
      'E-learning',
      'Digital Learning',
      'LMS',
      'Formation professionnelle',
      'Cybersécurité',
      'Formation en langues',
      'HSE',
      'Réalité virtuelle',
    ],
    areaServed: [
      { '@type': 'Country', name: 'Morocco' },
      { '@type': 'Country', name: 'Senegal' },
      { '@type': 'Country', name: 'Ivory Coast' },
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'ISO 9001:2015' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'ISO 29990:2010' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'ISO 27001:2013' },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IDEO Factory',
    url: 'https://www.ideo.ma',
    inLanguage: ['fr', 'en'],
    publisher: {
      '@type': 'Organization',
      name: 'IDEO Factory',
      url: 'https://www.ideo.ma',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://www.ideo.ma${url}`,
    provider: {
      '@type': 'Organization',
      name: 'IDEO Factory',
      url: 'https://www.ideo.ma',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Morocco',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
