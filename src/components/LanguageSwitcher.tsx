import { useLanguage } from '@/i18n/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 text-sm"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-gold" />
      <span className="text-foreground font-medium">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
