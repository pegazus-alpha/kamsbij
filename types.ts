
export type MetalType = 'Gold' | 'Silver' | 'Platinum' | 'Rose Gold';
export type Category = 'Rings' | 'Necklaces' | 'Bracelets' | 'Earrings' | 'Bridal' | 'Mens';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  metal: MetalType;
  purity: string;
  description: string;
  images: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  specifications: {
    weight: string;
    gemstone?: string;
    certification?: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  tier: 'Silver' | 'Gold' | 'Platinum';
}
