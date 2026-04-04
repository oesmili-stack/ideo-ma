'use client';

import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import ContactHero from '@/components/ideo/contact/ContactHero';
import ContactForm from '@/components/ideo/contact/ContactForm';
import ContactInfo from '@/components/ideo/contact/ContactInfo';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <DynamicMetadata
        titleFr="Contact — IDEO Factory | Demandez une démo e-learning gratuite"
        titleEn="Contact — IDEO Factory | Request a free e-learning demo"
        descriptionFr="Contactez nos experts e-learning. Demandez une démo gratuite ou un diagnostic de votre dispositif de formation. Casablanca, Maroc."
        descriptionEn="Contact our e-learning experts. Request a free demo or a training program assessment. Casablanca, Morocco."
        canonicalPath="/contact"
      />
      <Navbar variant="light" />

      <ContactHero />

      <LogosMarquee />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
