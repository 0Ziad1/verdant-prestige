import CountdownTimer from './CountdownTimer';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-pulse-slow opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-gold rounded-full animate-pulse-slow opacity-40" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-gold rounded-full animate-pulse-slow opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full animate-pulse-slow opacity-30" />
        
        {/* Gold gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-gold/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm text-muted-foreground tracking-wider uppercase">
            {t.hero.badge}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 animate-fade-in-up">
          <span className="text-foreground">{t.hero.title1}</span>
          <br />
          <span className="text-gradient-gold">{t.hero.title2}</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay font-light tracking-wide">
          {t.hero.tagline}
        </p>

        {/* Countdown */}
        <div className="mb-12">
          <CountdownTimer />
        </div>

        {/* CTA */}
        <div className="animate-fade-in-delay" style={{ animationDelay: '0.5s' }}>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary-foreground font-medium rounded-lg shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_hsl(43_70%_47%_/_0.3)] gold-shimmer"
          >
            {t.hero.cta}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
