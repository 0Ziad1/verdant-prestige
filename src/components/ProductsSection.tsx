import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      name: 'The Heritage Collection',
      description: 'Our flagship line of premium products, crafted with generations of expertise and the finest materials available.',
      category: 'Signature',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      featured: true,
    },
    {
      name: 'Artisan Series',
      description: 'Handcrafted excellence for the discerning customer who appreciates true craftsmanship.',
      category: 'Limited Edition',
      imageUrl: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80',
    },
    {
      name: 'Classic Essentials',
      description: 'Timeless designs that form the foundation of any refined collection.',
      category: 'Core Range',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    },
    {
      name: 'Executive Line',
      description: 'Premium solutions designed for professionals who demand the very best.',
      category: 'Professional',
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    },
    {
      name: 'The Reserve',
      description: 'Exclusive products available in limited quantities for our most valued patrons.',
      category: 'Exclusive',
      imageUrl: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&q=80',
    },
  ];

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
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
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
