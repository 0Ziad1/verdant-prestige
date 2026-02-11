import { Factory, Lightbulb, TrendingUp, ShieldCheck, Wheat } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const JoviraStorySection = () => {
  const { t } = useLanguage();

  const whyItems = [
    { icon: Factory, text: t.joviraStory.why1 },
    { icon: Lightbulb, text: t.joviraStory.why2 },
    { icon: TrendingUp, text: t.joviraStory.why3 },
    { icon: ShieldCheck, text: t.joviraStory.why4 },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Slogan */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/40" />
            <Wheat className="w-6 h-6 text-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-3">
            {t.joviraStory.brandName}
          </h2>
          <p className="text-gold text-lg md:text-xl tracking-wide font-light">
            {t.joviraStory.slogan}
          </p>
        </div>

        {/* Vision & Mission cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-card">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">
              {t.joviraStory.visionLabel}
            </span>
            <p className="text-muted-foreground mt-4 font-light leading-relaxed text-base">
              {t.joviraStory.visionText}
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-card">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">
              {t.joviraStory.missionLabel}
            </span>
            <p className="text-muted-foreground mt-4 font-light leading-relaxed text-base">
              {t.joviraStory.missionText}
            </p>
          </div>
        </div>

        {/* Why Jovira */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-10">
            <span className="text-foreground">{t.joviraStory.whyTitle}</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-secondary/40 border border-border hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Jovira narrative */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-8">
            <span className="text-foreground">{t.joviraStory.aboutTitle}</span>
          </h3>
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-base md:text-lg text-center">
            <p>{t.joviraStory.aboutP1}</p>
            <p>{t.joviraStory.aboutP2}</p>
            <p>{t.joviraStory.aboutP3}</p>
          </div>
          {/* Goal highlight */}
          <div className="mt-10 p-6 rounded-2xl border border-gold/20 bg-gold/5 text-center">
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-3">{t.joviraStory.goalLabel}</p>
            <p className="font-heading text-xl md:text-2xl text-foreground font-semibold">
              {t.joviraStory.goalText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoviraStorySection;
