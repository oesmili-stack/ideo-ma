'use client';

import Navbar from '@/components/ideo/Navbar';
import CyberAwareHero from '@/components/ideo/cyberaware/CyberAwareHero';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import LeConstat from '@/components/ideo/cyberaware/LeConstat';
import LeParcours from '@/components/ideo/cyberaware/LeParcours';
import LeCatalogue from '@/components/ideo/cyberaware/LeCatalogue';
import LaCampagne from '@/components/ideo/cyberaware/LaCampagne';
import DeploiementEtPacks from '@/components/ideo/cyberaware/DeploiementEtPacks';
import CyberAwareCTA from '@/components/ideo/cyberaware/CyberAwareCTA';
import Footer from '@/components/ideo/Footer';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';
import { ServiceSchema } from '@/components/ideo/SchemaOrg';

export default function CyberAwarePage() {
  return (
    <main className="min-h-screen bg-white">
      <DynamicMetadata
        titleFr="CyberAware — IDEO Factory | Académie digitale cybersécurité au Maroc"
        titleEn="CyberAware — IDEO Factory | Digital Cybersecurity Academy in Morocco"
        descriptionFr="Sensibilisez vos collaborateurs à la cybersécurité et à la protection des données. 37 modules e-learning prêts à déployer."
        descriptionEn="Train your teams on cybersecurity and data protection. 37 e-learning modules ready to deploy."
        canonicalPath="/solutions/cyberaware"
      />
      <ServiceSchema
        name="CyberAware"
        description="Programme de sensibilisation à la cybersécurité et à la protection des données personnelles adapté au contexte marocain. 37 modules e-learning en darija et français."
        url="/solutions/cyberaware"
      />
      <Navbar variant="light" />
      <CyberAwareHero />
      <LogosMarquee />
      <LeConstat />
      <LeParcours />
      <LeCatalogue />
      <LaCampagne />
      <DeploiementEtPacks />
      <CyberAwareCTA />
      <Footer />
    </main>
  );
}
