import React from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import CTAButton from "../components/CTAButton";

const Home = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Instants Précieux"
        subtitle="Quand le luxe rencontre le terroir"
        ctaText="Découvrir la collection"
        image="/images/hero-bougie.jpg"
      />

      {/* Collection Section */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide">
          Nos Bougies d’Exception
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Découvrez nos créations artisanales inspirées des terroirs, chaque bougie est conçue pour sublimer vos moments précieux.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <ProductCard
            name="Terre & Mer"
            price="25€"
            image="/images/lavande.jpg"
          />
          <ProductCard
            name="Gourmandise d'Armorique"
            price="28€"
            image="/images/vanille.jpg"
          />
          <ProductCard
            name="Ebène"
            price="30€"
            image="/images/figue.jpg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Prêt à sublimer vos instants ?
        </h3>
        <p className="text-gray-700 mb-8 max-w-xl text-center">
          Parcourez notre boutique et laissez-vous séduire par nos créations uniques, fabriquées à la main avec passion.
        </p>
        <CTAButton text="Acheter maintenant" />
      </section>
    </div>
  );
};

export default Home;
