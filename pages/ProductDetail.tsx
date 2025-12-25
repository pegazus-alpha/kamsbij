
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ShoppingBag, Heart, Shield, RefreshCcw, Truck, MessageCircle } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('54');
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Bijou introuvable</h2>
          <button onClick={() => navigate('/')} className="text-[#D4AF37] underline">Retour à la boutique</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-[#111] overflow-hidden border border-gray-900 group relative">
              <img 
                src={product.images[activeImg] || product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-zoom-in"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest border border-white/10">
                Vue 360° disponible
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`aspect-square border-2 transition-all ${activeImg === idx ? 'border-[#D4AF37]' : 'border-gray-900'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
              <div className="aspect-square border border-dashed border-gray-700 flex flex-col items-center justify-center text-gray-500 text-[8px] uppercase tracking-tighter">
                <RefreshCcw size={16} className="mb-1" />
                Mode 3D
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <nav className="text-[10px] uppercase tracking-widest text-gray-500 mb-6 flex items-center space-x-2">
              <span className="hover:text-white cursor-pointer">Accueil</span>
              <span>/</span>
              <span className="hover:text-white cursor-pointer">{product.category}</span>
              <span>/</span>
              <span className="text-[#D4AF37]">{product.name}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif mb-4">{product.name}</h1>
            <p className="text-[#D4AF37] text-2xl font-bold mb-8">{product.price.toLocaleString()} FCFA</p>
            
            <div className="prose prose-invert mb-10">
              <p className="text-gray-400 text-sm leading-relaxed">
                {product.description} Conçu avec passion dans nos ateliers, ce bijou incarne l'alliance parfaite entre luxe et tradition.
              </p>
            </div>

            {/* Selection */}
            <div className="mb-10 space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-4">Taille (FR)</label>
                <div className="flex flex-wrap gap-3">
                  {['50', '52', '54', '56', '58'].map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center text-xs font-bold transition-all border ${
                        selectedSize === size ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-gray-800 hover:border-gray-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-4">Options Cadeau</label>
                <label className="flex items-center space-x-3 text-sm text-gray-400 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 accent-[#D4AF37] bg-transparent border-gray-800" />
                  <span className="group-hover:text-white">Ajouter un écrin de luxe & un message (+2,500 FCFA)</span>
                </label>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="flex-grow bg-[#D4AF37] text-black py-5 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center">
                <ShoppingBag size={18} className="mr-3" /> Ajouter au Panier
              </button>
              <button className="px-6 py-5 border border-gray-800 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                <Heart size={20} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-900">
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Garantie à Vie</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck size={20} className="text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Livraison 24h/48h</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={20} className="text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Conseiller Dédié</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <section className="mt-24 pt-16 border-t border-gray-900">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             <div className="lg:col-span-2">
               <h3 className="text-xl font-serif mb-8 text-[#D4AF37]">Spécifications Détaillées</h3>
               <div className="grid grid-cols-2 gap-y-6 text-sm">
                 <div className="border-b border-gray-900 pb-4 pr-4">
                   <p className="text-gray-500 uppercase text-[10px] mb-1">Métal</p>
                   <p className="font-medium">{product.metal} {product.purity}</p>
                 </div>
                 <div className="border-b border-gray-900 pb-4 pr-4">
                   <p className="text-gray-500 uppercase text-[10px] mb-1">Poids approx.</p>
                   <p className="font-medium">{product.specifications.weight}</p>
                 </div>
                 <div className="border-b border-gray-900 pb-4 pr-4">
                   <p className="text-gray-500 uppercase text-[10px] mb-1">Pierres</p>
                   <p className="font-medium">{product.specifications.gemstone || 'Aucune'}</p>
                 </div>
                 <div className="border-b border-gray-900 pb-4 pr-4">
                   <p className="text-gray-500 uppercase text-[10px] mb-1">Certification</p>
                   <p className="font-medium text-[#D4AF37]">{product.specifications.certification}</p>
                 </div>
               </div>
             </div>
             <div className="bg-[#111] p-8 border border-gray-800">
               <h3 className="text-lg font-serif mb-4">Besoin d'aide ?</h3>
               <p className="text-xs text-gray-500 leading-relaxed mb-6">
                 Nos experts en joaillerie sont à votre disposition pour vous guider dans votre choix ou personnaliser cette pièce.
               </p>
               <a 
                 href="https://wa.me/237696988204"
                 className="block text-center border border-[#D4AF37] text-[#D4AF37] py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all"
               >
                 Contacter un Expert
               </a>
             </div>
           </div>
        </section>
      </div>
    </div>
  );
};
