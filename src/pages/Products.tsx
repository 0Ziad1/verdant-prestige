import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';

const Products = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
              {t.products.badge}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6">
              {t.products.title1} <span className="text-gradient-gold">{t.products.title2}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              {t.products.description}
            </p>
          </div>

          {/* Products grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
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

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              {t.products.bottomText}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-medium rounded-lg transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
            >
              {t.products.joinWaitlist}
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Products;
