import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import CTAButton from '../components/CTAButton';

const Home = () => {
  return (
    <div>
      <HeroSection
        title="Instants Précieux – Quand le luxe rencontre le terroir"
        ctaText="Découvrir la collection"
      />

      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold mb-8">Nos Bougies Phare</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProductCard name="Bougie Lavande" price="25€" />
          <ProductCard name="Bougie Vanille" price="28€" />
          <ProductCard name="Bougie Figue" price="30€" />
        </div>
      </section>

      <div className="text-center mt-12">
        <CTAButton text="Acheter maintenant" />
      </div>
    </div>
  );
};

export default Home;
