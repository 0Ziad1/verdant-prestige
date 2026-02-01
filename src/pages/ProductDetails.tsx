import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Bell } from 'lucide-react';
import { getProductById } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-gold hover:underline">
            Return to Home
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
            to="/#products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">Back to Products</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product image */}
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              
              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs uppercase tracking-wider backdrop-blur-sm">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product info */}
            <div className="lg:py-8">
              <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
                {product.category}
              </span>
              
              <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
                {product.name}
              </h1>

              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
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
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <p className="text-foreground font-medium mt-1">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 gradient-gold text-primary-foreground font-medium rounded-lg shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_hsl(43_70%_47%_/_0.3)] gold-shimmer"
                >
                  <Bell className="w-5 h-5" />
                  Notify Me When Available
                </a>
                <Link
                  to="/#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold text-gold font-medium rounded-lg transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
                >
                  Contact Us
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
            Coming Soon
          </span>
          <h2 className="font-heading text-3xl font-semibold mt-4 mb-6 text-foreground">
            This product will be available soon
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Be the first to know when {product.name} becomes available. 
            Sign up for our newsletter and get exclusive early access.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-gold text-primary-foreground font-medium rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
