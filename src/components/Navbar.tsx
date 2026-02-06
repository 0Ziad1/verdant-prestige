import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.products, href: '/#products' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading text-2xl font-semibold">
          <span className="text-foreground">JO</span>
          <span className="text-gold">VIRA</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            to="/#contact"
            className="px-5 py-2.5 gradient-gold text-primary-foreground text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-gold"
          >
            {t.nav.getNotified}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <Link
              to="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3 gradient-gold text-primary-foreground text-sm font-medium rounded-lg text-center mt-2"
            >
              {t.nav.getNotified}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
