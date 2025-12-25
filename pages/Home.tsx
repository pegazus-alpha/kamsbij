
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
// Added Instagram to the lucide-react imports to fix 'Cannot find name Instagram' error
import { ShieldCheck, Truck, CreditCard, Sparkles, ChevronRight, Instagram } from 'lucide-react';

const CATEGORIES = [
  { name: 'Or', icon: '✨', path: '/collections/gold' },
  { name: 'Argent', icon: '💍', path: '/collections/silver' },
  { name: 'Diamants', icon: '💎', path: '/collections/diamonds' },
  { name: 'Mariage', icon: '🕊️', path: '/collections/bridal' },
  { name: 'Hommes', icon: '👔', path: '/collections/mens' }
];

export const Home: React.FC = () => {
  const featured = PRODUCTS.filter(p => p.isBestseller || p.isNew).slice(0, 4);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=2000" 
            alt="Jewelry Hero" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.5em] mb-4 block animate-slideDown">Exclusive Collection 2024</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight animate-slideUp">
              Bijoux d'Exception <br /> <span className="italic font-normal">en Or & Diamant</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
              Découvrez l'élégance intemporelle de la Maison KAMS. Des créations uniques pour sublimer chaque instant précieux de votre vie.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/collections/gold" className="bg-[#D4AF37] text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all text-sm flex items-center justify-center">
                Explorer La Collection
              </Link>
              <Link to="/try-on" className="border border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-sm flex items-center justify-center">
                Essai Virtuel AR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[#0a0a0a] border-y border-[#D4AF37]/10 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <ShieldCheck className="text-[#D4AF37] mb-2" size={32} strokeWidth={1} />
            <h4 className="text-xs font-bold uppercase tracking-widest">Or Certifié 18K/22K</h4>
            <p className="text-[10px] text-gray-500">Authenticité garantie par nos experts</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Truck className="text-[#D4AF37] mb-2" size={32} strokeWidth={1} />
            <h4 className="text-xs font-bold uppercase tracking-widest">Livraison Nationale</h4>
            <p className="text-[10px] text-gray-500">Douala, Yaoundé & Partout au Cameroun</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <CreditCard className="text-[#D4AF37] mb-2" size={32} strokeWidth={1} />
            <h4 className="text-xs font-bold uppercase tracking-widest">Paiements Sécurisés</h4>
            <p className="text-[10px] text-gray-500">OM, MTN MoMo, Visa & Crypto</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Sparkles className="text-[#D4AF37] mb-2" size={32} strokeWidth={1} />
            <h4 className="text-xs font-bold uppercase tracking-widest">Sur Mesure</h4>
            <p className="text-[10px] text-gray-500">Créez votre bijou de rêve avec nous</p>
          </div>
        </div>
      </section>

      {/* Shop by Category Icons */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {CATEGORIES.map((cat) => (
              <Link key={cat.name} to={cat.path} className="group flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center text-2xl group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all duration-300 mb-3">
                  {cat.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 group-hover:text-[#D4AF37]">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-white mb-2">Pièces Maîtresses</h2>
              <div className="h-1 w-20 bg-[#D4AF37]"></div>
            </div>
            <Link to="/collections/gold" className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest flex items-center hover:opacity-70 transition-opacity">
              Tout Voir <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
        <div className="bg-[#111] p-12 lg:p-24 flex flex-col justify-center">
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-6">Notre Héritage</span>
          <h2 className="text-4xl font-serif mb-8 leading-tight">L'Art de la Joaillerie, <br /> Ancré au Cameroun</h2>
          <p className="text-gray-400 leading-relaxed mb-8 italic">
            "Depuis 2020, KAMS Bejwery transforme les métaux précieux en histoires éternelles. Chaque pièce est un hommage à la beauté et à l'excellence artisanale."
          </p>
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">
              Basés à Logbessou, Douala, nous avons évolué des importations de luxe vers la création propre. Notre mission est de fournir des bijoux certifiés de standard international au marché local.
            </p>
            <Link to="/about" className="inline-block text-[#D4AF37] border-b border-[#D4AF37] pb-1 text-sm font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all">
              Découvrir Notre Histoire
            </Link>
          </div>
        </div>
        <div className="h-[500px] lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=1000" 
            alt="Craftsmanship" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Instagram Feed Simulation */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Inspiration KAMS</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">@KAMS_Bejwery sur Instagram</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="aspect-square relative group overflow-hidden">
              <img 
                src={`https://picsum.photos/400/400?random=${i+10}`} 
                alt="Instagram" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
