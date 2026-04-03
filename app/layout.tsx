import './globals.css';
import type { Metadata } from 'next';
import { Inter, Libre_Baskerville } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { OrganizationSchema, WebSiteSchema } from '@/components/ideo/SchemaOrg';

const inter = Inter({ subsets: ['latin'] });
const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville'
});

export const metadata: Metadata = {
  title: 'IDEO Factory | E-learning Maroc — Leader du Digital Learning depuis 2006',
  description: 'La suite e-learning complète pour digitaliser la formation dans votre entreprise. Plateforme primée aux Brandon Hall Awards, catalogues internationaux Cegos, production sur mesure et accompagnement de A à Z. +100 000 collaborateurs formés par an.',
  keywords: 'e-learning maroc, digital learning, formation en ligne, LMS, plateforme formation, IDEO Factory, Cegos Maroc, formation professionnelle, cybersécurité, HSE, académie entreprise',
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://www.ideo.ma',
    siteName: 'IDEO Factory',
    title: 'IDEO Factory | Leader du Digital Learning au Maroc depuis 2006',
    description: 'La suite e-learning complète pour digitaliser la formation dans votre entreprise. Plateforme primée, catalogues internationaux, production sur mesure.',
    images: [
      {
        url: 'https://www.ideo.ma/Fichier_8@2x.png',
        width: 1200,
        height: 630,
        alt: 'IDEO Factory - Leader du Digital Learning au Maroc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IDEO Factory | Leader du Digital Learning au Maroc',
    description: 'La suite e-learning complète pour digitaliser la formation dans votre entreprise.',
    images: [
      {
        url: 'https://www.ideo.ma/Fichier_8@2x.png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ideo.ma',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="m-0 p-0">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} ${libreBaskerville.variable} m-0 p-0`}>
        <OrganizationSchema />
        <WebSiteSchema />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
