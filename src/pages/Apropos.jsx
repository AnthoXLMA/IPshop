import React from "react";

const APropos = () => {
  return (
    <div className="font-serif text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bougie-apropos.jpg')" }}
      >
        <div className="bg-black/40 w-full h-full absolute top-0 left-0 rounded-b-3xl"></div>
        <div className="relative text-center text-white px-6 md:px-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
            Notre Histoire
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            L’art de sublimer vos instants précieux à travers des bougies d’exception
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center tracking-wide">
          Instants Précieux, force et finesse
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-8 leading-relaxed font-light">
          Instants Précieux est un créateur de bougies d’exception, où chaque création
          s’inspire des terroirs et des traditions. Nos bougies sont fabriquées à la main avec
          des ingrédients nobles, pour sublimer vos moments les mieux choisis.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed font-light">
          Ce ne sont pas que des bougies que nous vendons mais des senteurs et comme notre nom le porte, des instants précieux.
          Nous recherchons avec soin les senteurs qui accompagnent vos instants raffinés. Chaque
          région apporte sa valeur, ses couleurs et sa fragrance unique, révélant des notes
          authentiques et harmonieuses qui éveillent les sens.
        </p>
      </section>

      {/* Terroirs & Inspirations */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-wide">
          Terroirs & Inspirations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Collines du Sud",
              description: "Lavande et herbes méditerranéennes pour un parfum apaisant et authentique.",
              image: "/images/terroir-sud.jpg",
              alt: "Lavande du Sud"
            },
            {
              title: "Forêts & Bois",
              description: "Notes boisées et chaudes pour créer une ambiance enveloppante et élégante.",
              image: "/images/terroir-foret.jpg",
              alt: "Bois de forêt"
            },
            {
              title: "Vignobles & Terroirs",
              description: "Arômes fins inspirés des régions viticoles pour accompagner vos instants de dégustation.",
              image: "/images/terroir-vin.jpg",
              alt: "Vignobles"
            }
          ].map((terroir) => (
            <div key={terroir.title} className="text-center">
              <img
                src={terroir.image}
                alt={terroir.alt}
                className="rounded-3xl mb-6 shadow-xl"
              />
              <h3 className="text-xl font-semibold mb-2">{terroir.title}</h3>
              <p className="text-gray-600 font-light">{terroir.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artisanat & Engagement */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center tracking-wide">
          Artisanat & Engagement
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-6 leading-relaxed font-light">
          Chaque bougie Instants Précieux est fabriquée à la main avec passion. Nous privilégions
          des ingrédients naturels et durables, ainsi que des partenariats avec des producteurs
          locaux pour garantir un luxe responsable et authentique.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed font-light">
          Notre objectif est simple : transformer des échantillons de quotidien en une seule expérience, simplement merveilleuse, où
          lumière, parfum et émotion se rencontrent pour créer des souvenirs mémorables.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center tracking-wide">
          Découvrez nos créations
        </h3>
        <p className="text-gray-700 mb-8 max-w-xl text-center font-light leading-relaxed">
          Vous pouvez aussi découvrir les bougies qui conviendront parfaitement à vos instants.
        </p>
        <a
          href="/collection"
          className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Découvrir notre collection
        </a>
      </section>

      {/* Call to Action Secondaire */}
      <section className="py-20 bg-gray-50 flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center tracking-wide">
          Découvrez nos créations artisanales
        </h3>
        <p className="text-gray-700 mb-8 max-w-xl text-center font-light leading-relaxed">
          Explorez notre collection et laissez-vous séduire par des bougies uniques, inspirées
          des terroirs et pensées pour vos moments d’exception.
        </p>
        <a
          href="/collection"
          className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Découvrir la collection
        </a>
      </section>
    </div>
  );
};

export default APropos;
