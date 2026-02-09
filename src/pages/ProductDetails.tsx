import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Bell } from 'lucide-react';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';

// Map product IDs to translation keys
const productIdToKey: Record<string, keyof typeof import('@/i18n/translations').translations.en.productData> = {
  'freekeh': 'Freekeh',
  'freekehspike': 'FreekehSpike',
  'handfreekehspike': 'HandFreekehSpike',
  'executive-line': 'executive',
  'the-reserve': 'reserve',
  'prestige-collection': 'prestige',
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { t, isRTL } = useLanguage();

  const normalizedId = id?.toLowerCase();

  const product = products.find(
    p => p.id.toLowerCase() === normalizedId
  );

  const translationKey = normalizedId
    ? productIdToKey[normalizedId]
    : undefined;

  const productTranslations = translationKey ? t.productData[translationKey] : undefined;

  if (!product || !productTranslations) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">{t.productDetails.notFound}</h1>
          <Link to="/" className="text-gold hover:underline">
            {t.productDetails.returnHome}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero section with product image */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span className="text-sm uppercase tracking-wider">{t.productDetails.backToProducts}</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product image */}
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={product.imageUrl}
                alt={productTranslations.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs uppercase tracking-wider backdrop-blur-sm">
                  {productTranslations.category}
                </span>
              </div>
            </div>

            {/* Product info */}
            <div className="lg:py-8">
              <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
                {productTranslations.category}
              </span>

              <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
                {productTranslations.name}
              </h1>

              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                {productTranslations.fullDescription}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {t.productDetails.keyFeatures}
                </h3>
                <ul className="space-y-3">
                  {productTranslations.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mb-10">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {t.productDetails.specifications}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {t.specs[spec.label as keyof typeof t.specs]}
                      </span>

                      <p className="text-foreground font-medium mt-1">
                        {t.specs[spec.value as keyof typeof t.specs]}
                      </p>

                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 gradient-gold text-primary-foreground font-medium rounded-lg shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_hsl(43_70%_47%_/_0.3)] gold-shimmer"
                >
                  <Bell className="w-5 h-5" />
                  {t.productDetails.notifyMe}
                </a>
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold text-gold font-medium rounded-lg transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
                >
                  {t.productDetails.contactUs}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products placeholder */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
            {t.productDetails.comingSoonBadge}
          </span>
          <h2 className="font-heading text-3xl font-semibold mt-4 mb-6 text-foreground">
            {t.productDetails.comingSoonTitle}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            {t.productDetails.comingSoonDesc.replace('{product}', productTranslations.name)}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-gold text-primary-foreground font-medium rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
          >
            {t.productDetails.joinWaitlist}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
