
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { TryOn } from './pages/TryOn';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/try-on" element={<TryOn />} />
        <Route path="/collections/:category" element={<Home />} /> {/* Mocking listing as home for now */}
        <Route path="/about" element={<div className="min-h-screen pt-20 text-center font-serif text-3xl">Page À Propos en Construction</div>} />
        <Route path="/contact" element={<div className="min-h-screen pt-20 text-center font-serif text-3xl">Page Contact en Construction</div>} />
      </Routes>
    </Layout>
  );
};

export default App;
