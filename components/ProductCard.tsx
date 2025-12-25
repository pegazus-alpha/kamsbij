
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-[4/5] overflow-hidden bg-[#111] relative border border-gray-900 group-hover:border-[#D4AF37]/40 transition-colors">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Nouveau</span>
        )}
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
          <button className="bg-white text-black p-3 rounded-full hover:bg-[#D4AF37] transition-colors">
            <Heart size={18} />
          </button>
          <button className="bg-white text-black p-3 rounded-full hover:bg-[#D4AF37] transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col items-center">
        <Link to={`/product/${product.id}`} className="text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{product.metal} {product.purity}</p>
          <h3 className="text-sm font-medium tracking-wide group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
          <p className="mt-2 text-[#D4AF37] font-semibold">{product.price.toLocaleString()} FCFA</p>
        </Link>
      </div>
    </div>
  );
};
