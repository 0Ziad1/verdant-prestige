import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import emailjs from 'emailjs-com';

const PHONE_NUMBER = '+966501234567';
const EMAIL_ADDRESS = 'jovira2026@gmail.com';

const ContactSection = () => {
  const { t } = useLanguage();

  // <-- added form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_e0hgaqk',   // replace with your EmailJS service ID
        'template_uy2v0yn',  // replace with your EmailJS template ID
        e.target,
        'oT02WjPiWOuAC1X-v'       // replace with your EmailJS user/public ID
      )
      .then(() => {
        // alert('Message sent successfully!');
        e.target.reset();
      })
      .catch((error) => {
        alert('Failed to send message: ' + error.text);
      });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
            {t.contact.badge}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6">
            {t.contact.title1}{' '}
            <span className="text-gradient-gold">{t.contact.title2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info card - styled like reference */}
          <div className="p-8 rounded-2xl bg-card border border-border flex flex-col items-center text-center gap-8">
            {/* Phone */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-muted-foreground text-sm font-light">{t.contact.info.phone}</h3>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="text-foreground text-xl font-bold hover:text-gold transition-colors"
                dir="ltr"
              >
                {t.contact.info.phoneValue}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-muted-foreground text-sm font-light">{t.contact.info.email}</h3>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="text-foreground text-xl font-bold hover:text-gold transition-colors"
              >
                {EMAIL_ADDRESS}
              </a>
            </div>

            {/* Location & Hours */}
            <div className="grid grid-cols-2 gap-6 w-full pt-4 border-t border-border">
              <div className="flex flex-col items-center gap-1">
                <MapPin className="w-5 h-5 text-gold mb-1" />
                <h4 className="text-sm font-semibold text-foreground">{t.contact.info.location}</h4>
                <p className="text-muted-foreground text-xs">{t.contact.info.locationValue}</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Clock className="w-5 h-5 text-gold mb-1" />
                <h4 className="text-sm font-semibold text-foreground">{t.contact.info.hours}</h4>
                <p className="text-muted-foreground text-xs">{t.contact.info.hoursValue}</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
              {t.contact.form.submit}
            </h3>

            {/* <-- add onSubmit handler */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name" // <-- added name attribute
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors text-foreground"
                  placeholder={t.contact.form.namePlaceholder}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email" // <-- added name attribute
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors text-foreground"
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  rows={4}
                  name="message" // <-- added name attribute
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors text-foreground resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 gradient-gold text-primary-foreground font-medium rounded-lg shadow-gold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_40px_hsl(43_70%_47%_/_0.3)] gold-shimmer"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
