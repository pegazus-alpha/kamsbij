
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Eternal Radiance Diamond Ring',
    price: 1250000,
    category: 'Rings',
    metal: 'Gold',
    purity: '18K',
    description: 'A breathtaking 1.5 carat certified diamond set in a classic 18K gold band.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800'
    ],
    isNew: true,
    isBestseller: true,
    specifications: {
      weight: '4.2g',
      gemstone: 'Diamond (1.5ct)',
      certification: 'GIA-22345678'
    }
  },
  {
    id: '2',
    name: 'Celestial Silver Pendant',
    price: 85000,
    category: 'Necklaces',
    metal: 'Silver',
    purity: '925 Sterling',
    description: 'Minimalist sterling silver pendant inspired by the night sky of Douala.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: {
      weight: '2.5g',
      certification: 'KAMS Certified Silver'
    }
  },
  {
    id: '3',
    name: 'Majestic Gold Bangle',
    price: 450000,
    category: 'Bracelets',
    metal: 'Gold',
    purity: '22K',
    description: 'Hand-crafted 22K gold bangle with intricate traditional Cameroonian patterns.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800'
    ],
    isBestseller: true,
    specifications: {
      weight: '12.8g',
      certification: 'Cameroon Gold Standard'
    }
  },
  {
    id: '4',
    name: 'Royal Emerald Earrings',
    price: 320000,
    category: 'Earrings',
    metal: 'Gold',
    purity: '18K',
    description: 'Stunning teardrop emeralds framed by brilliant-cut diamonds.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800'
    ],
    isNew: true,
    specifications: {
      weight: '5.1g',
      gemstone: 'Emerald & Diamond',
      certification: 'AGS-889021'
    }
  },
  {
    id: '5',
    name: 'Classic Mens Signet Ring',
    price: 210000,
    category: 'Mens',
    metal: 'Gold',
    purity: '18K',
    description: 'A bold, masculine statement piece in solid 18K yellow gold.',
    images: [
      'https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: {
      weight: '8.4g',
      certification: 'KAMS Authentic'
    }
  }
];

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'Gold', path: '/collections/gold' },
  { name: 'Silver', path: '/collections/silver' },
  { name: 'Diamonds', path: '/collections/diamonds' },
  { name: 'Virtual Try-On', path: '/try-on' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
