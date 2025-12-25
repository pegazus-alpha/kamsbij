
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../constants';
import { ShoppingBag, Heart, User, Menu, X, Instagram, Facebook, Phone, MessageCircle } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Top Banner */}
      <div className="bg-[#bf953f] text-black text-xs py-1.5 text-center font-semibold tracking-widest uppercase">
        L'excellence à votre portée - Livraison Gratuite sur Douala & Yaoundé
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-black/95 border-b border-[#D4AF37]/20 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-[#D4AF37]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group">
            <span className="text-2xl font-serif tracking-[0.2em] font-bold gold-text">KAMS</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 group-hover:text-[#D4AF37] transition-colors">Bejwery</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            {NAVIGATION.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`hover:text-[#D4AF37] transition-colors ${location.pathname === item.path ? 'text-[#D4AF37]' : 'text-gray-300'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-gray-300">
            <button className="hover:text-[#D4AF37] transition-colors hidden sm:block">
              <Heart size={20} />
            </button>
            <Link to="/cart" className="hover:text-[#D4AF37] transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </Link>
            <Link to="/account" className="hover:text-[#D4AF37] transition-colors">
              <User size={20} />
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-black border-b border-[#D4AF37]/20 p-8 flex flex-col space-y-6 animate-fadeIn">
            {NAVIGATION.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="text-lg uppercase tracking-widest font-serif border-b border-gray-800 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#D4AF37]/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="font-serif text-2xl gold-text mb-6">KAMS Bejwery</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Maison de joaillerie d'exception à Douala. Spécialiste de l'Or 18K/22K, de l'Argent et du Diamant certifié.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Collections</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/collections/gold" className="hover:text-white">Or 18 Carats</Link></li>
              <li><Link to="/collections/silver" className="hover:text-white">Argent Massif</Link></li>
              <li><Link to="/collections/diamonds" className="hover:text-white">Diamants & Pierres</Link></li>
              <li><Link to="/collections/bridal" className="hover:text-white">Mariage & Fiançailles</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/care" className="hover:text-white">Entretien des Bijoux</Link></li>
              <li><Link to="/bespoke" className="hover:text-white">Création Sur Mesure</Link></li>
              <li><Link to="/shipping" className="hover:text-white">Livraison & Retours</Link></li>
              <li><Link to="/faq" className="hover:text-white">Foire Aux Questions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Privilèges</h4>
            <p className="text-xs text-gray-500 mb-4 italic">Rejoignez le KAMS Diamonds Club pour des offres exclusives.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Votre e-mail" 
                className="bg-transparent border border-gray-800 px-4 py-2 text-sm focus:outline-none focus:border-[#D4AF37] flex-grow"
              />
              <button className="bg-[#D4AF37] text-black px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#bf953f] transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 pt-8 text-center text-[10px] text-gray-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} KAMS Bejwery Douala. Tous droits réservés.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/237696988204" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={24} color="white" fill="white" />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
        </span>
      </a>
    </div>
  );
};
