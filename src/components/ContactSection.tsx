import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Premium Avenue', 'Business District', 'New York, NY 10001'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@company.com', 'support@company.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 4PM', 'Sun: Closed'],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Have questions? We'd love to hear from you. Reach out and our team 
            will get back to you shortly.
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
                  <p key={index} className="text-muted-foreground text-sm font-light">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors text-foreground"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors text-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors text-foreground"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-gold focus:outline-none transition-colors text-foreground resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 gradient-gold text-primary-foreground font-medium rounded-lg shadow-gold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_40px_hsl(43_70%_47%_/_0.3)] gold-shimmer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
