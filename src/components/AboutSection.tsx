import { Award, Shield, Gem } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every product is crafted with meticulous attention to detail, using only the finest materials.',
    },
    {
      icon: Shield,
      title: 'Trusted Excellence',
      description: 'Built on decades of industry expertise, delivering products you can rely on.',
    },
    {
      icon: Gem,
      title: 'Timeless Design',
      description: 'Elegant aesthetics that transcend trends, creating lasting value for our customers.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
            About Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6">
            Crafting <span className="text-gradient-gold">Tomorrow's</span> Legacy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            We are a company built on the foundation of excellence. Our mission is to deliver 
            products that exceed expectations and stand the test of time.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '50K+', label: 'Happy Customers' },
            { value: '100+', label: 'Premium Products' },
            { value: '15', label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-semibold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
