'use client';

import Navbar from '@/components/ideo/Navbar';
import Hero from '@/components/ideo/Hero';
import GitexBanner from '@/components/ideo/GitexBanner';
import Products from '@/components/ideo/Products';
import Solutions from '@/components/ideo/Solutions';
import Services from '@/components/ideo/Services';
import Sectors from '@/components/ideo/Sectors';
import WhyChooseUs from '@/components/ideo/WhyChooseUs';
import ClientCases from '@/components/ideo/ClientCases';
import Partners from '@/components/ideo/Partners';
import FinalCTA from '@/components/ideo/FinalCTA';
import Footer from '@/components/ideo/Footer';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';

export default function Home() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <DynamicMetadata
        titleFr="IDEO Factory | E-learning Maroc — Leader du Digital Learning depuis 2006"
        titleEn="IDEO Factory | E-learning Morocco — Digital Learning Leader since 2006"
        descriptionFr="La suite e-learning complète pour digitaliser la formation dans votre entreprise. Plateforme primée, catalogues internationaux, production sur mesure."
        descriptionEn="The complete e-learning suite to digitize training in your organization. Award-winning platform, international catalogs, custom content production."
      />
      <Navbar isHomePage={true} />
      <Hero />
      <GitexBanner />
      <Products />
      <Solutions />
      <Services />
      <Sectors />
      <WhyChooseUs />
      <ClientCases />
      <Partners />
      <FinalCTA />
      <Footer />
    </main>
  );
}
