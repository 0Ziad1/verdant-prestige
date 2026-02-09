import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />

      {/* Products preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
              {t.products.badge}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6">
              {t.products.title1} <span className="text-gradient-gold">{t.products.title2}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              {t.products.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                category={product.category}
                imageUrl={product.imageUrl}
                featured={product.featured}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-medium rounded-lg transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
            >
              {t.products.viewDetails}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
            {t.contact.badge}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6">
            {t.contact.title1}{' '}
            <span className="text-gradient-gold">{t.contact.title2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light mb-8">
            {t.contact.description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary-foreground font-medium rounded-lg shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_hsl(43_70%_47%_/_0.3)] gold-shimmer"
          >
            {t.contact.badge}
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
