export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
  features: string[];
  specifications: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: 'freekeh',
    name: 'Freekeh',
    description: 'Our flagship line of premium products, crafted with generations of expertise and the finest materials available.',
    fullDescription: 'The Heritage Collection represents the pinnacle of our craftsmanship. Each piece is meticulously handcrafted by master artisans who have dedicated their lives to perfecting their craft. Using only the finest materials sourced from around the world, this collection embodies luxury, durability, and timeless elegance.',
    category: 'Our Products',
    imageUrl: '../assets/package-jovira.jpeg',
    featured: true,
    features: [
      'Handcrafted by master artisans',
      'Premium materials sourced globally',
      'Lifetime warranty included',
      'Exclusive packaging and presentation',
      'Certificate of authenticity',
    ],
    specifications: [
      { label: 'highFibers', value: 'highFibersDetails' },
      { label: 'weightLoss', value: 'weightLossDetails' },
      { label: 'diabeticPatients', value: 'diabeticPatientsDetails' },
      { label: 'muscleBuilding', value: 'muscleBuildingDetails' },
    ],
  },
  {
    id: 'freekehspike',
    name: 'FreekehSpike',
    description: 'Handcrafted excellence for the discerning customer who appreciates true craftsmanship.',
    fullDescription: 'The Artisan Series celebrates the art of handcrafted excellence. Each piece in this limited edition collection is individually numbered and signed by the artisan who created it. The attention to detail and commitment to quality makes every item a unique work of art.',
    category: 'Our Organic Materials',
    imageUrl: '../assets/88036c323236c30a97e7e5a02891e5f5.jpg',
    features: [
      'Limited edition pieces',
      'Individually numbered',
      'Artisan signed',
      'Unique handcrafted details',
      'Collector\'s certificate',
    ],
    specifications: [
      { label: 'energy', value: 'EnergyDetails' },
      { label: 'carbohydrates', value: 'carbDetails' },
      { label: 'protein', value: 'proteinDetails' },
      { label: 'fibers', value: 'fiberDetails' },
    ],
  },
  {
    id: 'handfreekehspike',
    name: 'Agricultural quality',
    description: 'Timeless designs that form the foundation of any refined collection.',
    fullDescription: 'Classic Essentials represents the core of our philosophy: exceptional quality without compromise. These timeless pieces are designed to be the foundation of any refined collection, offering versatility, durability, and understated elegance that never goes out of style.',
    category: 'Core Range',
    imageUrl: '../assets/Create a naturalistic shot with a blur effect, in which you can see a stretch of a cultivated field.jpg',
    features: [
      'Timeless design philosophy',
      'Versatile applications',
      'Premium quality materials',
      'Easy maintenance',
      'Exceptional durability',
    ],
    specifications: [
      { label: 'Style', value: 'Classic Contemporary' },
      { label: 'Materials', value: 'Premium Standard' },
      { label: 'Warranty', value: '5 Years' },
      { label: 'Availability', value: 'Coming Soon' },
    ],
  },
  {
    id: 'executive-line',
    name: 'Executive Line',
    description: 'Premium solutions designed for professionals who demand the very best.',
    fullDescription: 'The Executive Line is designed for professionals who understand that quality is an investment. Each piece combines sophisticated aesthetics with practical functionality, creating tools and accessories that enhance productivity while making a powerful statement.',
    category: 'Professional',
    imageUrl: '../assets/Rückruf_ Hartweizen (Freekeh) wegen Pestizidrückstände.jpg',
    features: [
      'Professional-grade quality',
      'Sophisticated aesthetics',
      'Enhanced functionality',
      'Business-ready presentation',
      'Premium customer support',
    ],
    specifications: [
      { label: 'Grade', value: 'Executive Professional' },
      { label: 'Materials', value: 'Business Premium' },
      { label: 'Warranty', value: '7 Years' },
      { label: 'Availability', value: 'Coming Soon' },
    ],
  },
  {
    id: 'the-reserve',
    name: 'The Reserve',
    description: 'Exclusive products available in limited quantities for our most valued patrons.',
    fullDescription: 'The Reserve is our most exclusive offering, available only to our most valued patrons. These extraordinary pieces are produced in extremely limited quantities, ensuring their rarity and collectible value. Each item is a testament to the heights that can be achieved when there are no compromises.',
    category: 'Exclusive',
    imageUrl: '../assets/jumbo-package-jovira.jpeg',
    features: [
      'Extremely limited availability',
      'Invitation-only access',
      'Bespoke customization options',
      'White-glove delivery service',
      'Exclusive member benefits',
    ],
    specifications: [
      { label: 'Availability', value: 'By Invitation Only' },
      { label: 'Materials', value: 'Ultra Premium' },
      { label: 'Warranty', value: 'Lifetime Plus' },
      { label: 'Status', value: 'Coming Soon' },
    ],
  },
  {
    id: 'prestige-collection',
    name: 'Prestige Collection',
    description: 'Where innovation meets tradition, creating products that define a new era of luxury.',
    fullDescription: 'The Prestige Collection bridges the gap between time-honored craftsmanship and modern innovation. Each piece is designed to meet the exacting standards of today while honoring the traditions that have defined luxury for generations. This collection is for those who appreciate both heritage and progress.',
    category: 'Innovation',
    imageUrl: '../assets/WhatsApp Image 2026-02-01 at 19.33.50 (2).jpeg',
    features: [
      'Cutting-edge design technology',
      'Traditional craftsmanship methods',
      'Sustainable materials',
      'Smart integration capabilities',
      'Future-proof design philosophy',
    ],
    specifications: [
      { label: 'Design', value: 'Modern Heritage' },
      { label: 'Materials', value: 'Eco-Premium' },
      { label: 'Warranty', value: '10 Years' },
      { label: 'Status', value: 'Coming Soon' },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
