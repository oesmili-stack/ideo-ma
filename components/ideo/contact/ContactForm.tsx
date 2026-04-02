'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { CircleCheck as CheckCircle, Loader as Loader2 } from 'lucide-react';

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xqeglgan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          _subject: 'Nouveau message depuis ideo.ma',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
      } else {
        setError(
          language === 'fr'
            ? 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.'
            : 'An error occurred. Please try again or contact us directly by email.'
        );
      }
    } catch (err) {
      setError(
        language === 'fr'
          ? 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.'
          : 'An error occurred. Please try again or contact us directly by email.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError('');
  };

  return (
    <div className="lg:col-span-3">
      <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
        {t('contact.form.title')}
      </h2>

      {isSubmitted ? (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <p className="text-lg text-[#2C2C2A] mb-6">
            {language === 'fr'
              ? 'Merci ! Votre message a été envoyé. Nous vous répondrons sous 24h.'
              : "Thank you! Your message has been sent. We'll get back to you within 24 hours."}
          </p>
          <button
            onClick={resetForm}
            className="text-[#D42027] font-semibold hover:underline"
          >
            {language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
                {t('contact.form.firstname')}
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder={t('contact.form.firstname.placeholder')}
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent rounded-lg focus:outline-none focus:border-[#D42027] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
                {t('contact.form.lastname')}
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder={t('contact.form.lastname.placeholder')}
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent rounded-lg focus:outline-none focus:border-[#D42027] transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.email.placeholder')}
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent rounded-lg focus:outline-none focus:border-[#D42027] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
                {t('contact.form.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.form.phone.placeholder')}
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent rounded-lg focus:outline-none focus:border-[#D42027] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
              {t('contact.form.company')}
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t('contact.form.company.placeholder')}
              className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent rounded-lg focus:outline-none focus:border-[#D42027] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
              {t('contact.form.subject')}
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent rounded-lg focus:outline-none focus:border-[#D42027] transition-colors"
            >
              <option value="">{t('contact.form.subject')}</option>
              <option value="demo">{t('contact.form.subject.demo')}</option>
              <option value="inquiry">{t('contact.form.subject.inquiry')}</option>
              <option value="partnership">{t('contact.form.subject.partnership')}</option>
              <option value="recruitment">{t('contact.form.subject.recruitment')}</option>
              <option value="other">{t('contact.form.subject.other')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C2C2A] mb-2">
              {t('contact.form.message')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.form.message.placeholder')}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent rounded-lg focus:outline-none focus:border-[#D42027] transition-colors resize-none"
            ></textarea>
          </div>

          {error && (
            <p className="text-[#D42027] text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-[#D42027] text-white font-bold rounded-lg hover:bg-[#b81b21] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
              </>
            ) : (
              t('contact.form.submit')
            )}
          </button>
        </form>
      )}
    </div>
  );
}
