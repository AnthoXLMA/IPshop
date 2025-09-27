import React from "react";
import HeroSection from "../components/HeroSection";
import CTAButton from "../components/CTAButton";

const Home = () => {
  const instants = [
    {
      title: "Détente",
      description: "Un moment de calme pour un bain relaxant ou une lecture apaisante.",
      image: "/images/detente.jpg",
      link: "/instants/detente"
    },
    {
      title: "Cocooning",
      description: "Chaleur et confort pour vos soirées d’hiver.",
      image: "/images/cocooning.jpg",
      link: "/instants/cocooning"
    },
    {
      title: "Moments Partagés",
      description: "Un verre de vin, une bougie, et des instants mémorables entre amis.",
      image: "/images/partages.jpg",
      link: "/instants/partages"
    }
  ];

  return (
    <div className="font-serif text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Instants Précieux"
        subtitle="Quand le luxe rencontre le terroir"
        ctaText="Découvrir la collection"
        image="/images/hero-bougie.jpg"
      />

      {/* Instants Section */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 tracking-wide">
          Concepts
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Instants Précieux : des bougies pensées pour sublimer vos moments. Qu’il s’agisse d’un verre de grand cru, d’un bain relaxant, d’une lecture ou d’une soirée à deux, chaque parfum et chaque flamme transforment l’ordinaire en parenthèse raffinée.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {instants.map((instant) => (
            <a
              key={instant.title}
              href={instant.link}
              className="block group rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={instant.image}
                  alt={instant.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
              <div className="text-center px-6 py-6">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{instant.title}</h3>
                <p className="text-gray-600">{instant.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center tracking-wide">
          Prêt à sublimer vos instants ?
        </h3>
        <p className="text-gray-700 mb-8 max-w-xl text-center text-lg leading-relaxed">
          Parcourez notre boutique et laissez-vous séduire par nos créations uniques, fabriquées à la main avec passion.
        </p>
        <CTAButton text="Acheter maintenant" />
      </section>
    </div>
  );
};

export default Home;
