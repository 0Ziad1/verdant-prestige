import ProductCard from './ProductCard';
import { products } from '@/data/products';

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
            Our Products
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6">
            Discover <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Explore our curated collection of premium products, each designed to deliver 
            exceptional quality and unparalleled satisfaction.
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
            All products will be available once we launch. Be the first to know.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-medium rounded-lg transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
