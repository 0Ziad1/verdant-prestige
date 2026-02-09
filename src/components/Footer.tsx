import { Instagram, Twitter, Linkedin, Facebook, Target, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/jovira_2026/', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/021128364839', label: 'WhatsApp' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/jovira-company', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1BwWGAGBvU/?mibextid=wwXIfr', label: 'Facebook' },
  ];

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-heading text-2xl font-semibold">
            <span className="text-foreground">JO</span>
            <span className="text-gold">VIRA</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 JOVIRA. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
