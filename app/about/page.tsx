'use client';

import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import FinalCTA from '@/components/ideo/FinalCTA';
import AboutHero from '@/components/ideo/about/AboutHero';
import OurStory from '@/components/ideo/about/OurStory';
import OurValues from '@/components/ideo/about/OurValues';
import OurStudios from '@/components/ideo/about/OurStudios';
import CegosTestimonial from '@/components/ideo/about/CegosTestimonial';
import CertificationsAwards from '@/components/ideo/about/CertificationsAwards';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <DynamicMetadata
        titleFr="À propos d'IDEO Factory | Pionnier du e-learning au Maroc depuis 2006"
        titleEn="About IDEO Factory | E-learning Pioneer in Morocco since 2006"
        descriptionFr="Pionnier du Digital Learning au Maroc depuis 2006. Triple certification ISO, primé aux Brandon Hall Awards. Partenaire exclusif Cegos depuis 16 ans."
        descriptionEn="Digital Learning pioneer in Morocco since 2006. Triple ISO certification, Brandon Hall Award winner. Exclusive Cegos partner for 16 years."
        canonicalPath="/about"
      />
      <Navbar variant="light" />
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurStudios />
      <CegosTestimonial />
      <CertificationsAwards />
      <FinalCTA />
      <Footer />
    </main>
  );
}
