'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="lg:col-span-2">
      <div className="space-y-6 mb-8">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-[#D42027] mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-[#1A1A2E] mb-1">
              {t('contact.info.headquarters')}
            </h3>
            <p className="text-[#4A4A5A]">
              Angle rue Mohamed Kamal et rue Fakir Mohamed<br />
              20180 Casablanca, Maroc
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-[#D42027] mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-[#1A1A2E] mb-1">
              {t('contact.info.phone')}
            </h3>
            <Link href="tel:+212522275168" className="text-[#4A4A5A] hover:text-[#D42027] transition-colors">
              +212 5 22 27 51 68
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="w-6 h-6 text-[#D42027] mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-[#1A1A2E] mb-1">
              {t('contact.info.email')}
            </h3>
            <Link href="mailto:contactma@ideolearning.com" className="text-[#4A4A5A] hover:text-[#D42027] transition-colors">
              contactma@ideolearning.com
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-[#D42027] mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-[#1A1A2E] mb-1">
              {t('contact.info.hours')}
            </h3>
            <p className="text-[#4A4A5A]">
              {t('contact.info.hours.time')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#F5F5F5] rounded-lg hover:bg-[#D42027] hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#F5F5F5] rounded-lg hover:bg-[#D42027] hover:text-white transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="mt-8">
        <iframe
          src="https://maps.google.com/maps?q=33.5962445167473,-7.613862845658346&z=17&output=embed"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
