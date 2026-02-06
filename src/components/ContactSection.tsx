import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import emailjs from 'emailjs-com'; // <-- new import

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.info.location,
      details: [t.contact.info.locationValue],
    },
    {
      icon: Mail,
      title: t.contact.info.email,
      details: ['jovira2026@gmail.com'],
    },
    {
      icon: Clock,
      title: t.contact.info.hours,
      details: [t.contact.info.hoursValue],
    },
  ];

  // <-- added form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_44gv7qs',   // replace with your EmailJS service ID
        'template_79p2hpb',  // replace with your EmailJS template ID
        e.target,
        'iAqJXoOxKTiOoFd2f'       // replace with your EmailJS user/public ID
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
          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                {item.details.map((detail, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground text-sm font-light"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            ))}
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
