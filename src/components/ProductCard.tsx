import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

const ProductCard = ({ id, name, description, category, imageUrl, featured }: ProductCardProps) => {
  const { t, isRTL } = useLanguage();

  return (
    <Link
      to={`/product/${id}`}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-card block ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-2">
          {category}
        </span>
        <h3 className={`font-heading font-semibold text-foreground mb-3 ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          {name}
        </h3>
        <p className="text-muted-foreground text-sm font-light mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <span>{t.products.viewDetails}</span>
          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
    </Link>
  );
};

export default ProductCard;
