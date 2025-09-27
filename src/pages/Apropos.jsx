import React from "react";

const APropos = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bougie-apropos.jpg')" }}
      >
        <div className="bg-black/40 w-full h-full absolute top-0 left-0"></div>
        <div className="relative text-center text-white px-6 md:px-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
            Notre Histoire
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            L’art de sublimer vos instants précieux à travers des bougies d’exception
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Instants Précieux, une maison artisanale
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-8">
          Instants Précieux est une maison artisanale de bougies d’exception, où chaque création
          s’inspire des terroirs et des traditions. Nos bougies sont fabriquées à la main avec
          des ingrédients nobles, pour sublimer vos moments du quotidien.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          Nous recherchons avec soin les senteurs qui accompagnent vos instants raffinés. Chaque
          région apporte sa valeur, ses couleurs et sa fragrance unique, révélant des notes
          authentiques et harmonieuses qui éveillent les sens.
        </p>
      </section>

      {/* Terroirs & Inspirations */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Terroirs & Inspirations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <img
              src="/images/terroir-sud.jpg"
              alt="Lavande du Sud"
              className="rounded-lg mb-6 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Collines du Sud</h3>
            <p className="text-gray-600">
              Lavande et herbes méditerranéennes pour un parfum apaisant et authentique.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/terroir-foret.jpg"
              alt="Bois de forêt"
              className="rounded-lg mb-6 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Forêts & Bois</h3>
            <p className="text-gray-600">
              Notes boisées et chaudes pour créer une ambiance enveloppante et élégante.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/terroir-vin.jpg"
              alt="Vignobles"
              className="rounded-lg mb-6 shadow-lg"
            />
            <h3 className="text-xl font-semibold mb-2">Vignobles & Terroirs</h3>
            <p className="text-gray-600">
              Arômes fins inspirés des régions viticoles pour accompagner vos instants de dégustation.
            </p>
          </div>
        </div>
      </section>

      {/* Artisanat & Engagement */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Artisanat & Engagement
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-6">
          Chaque bougie Instants Précieux est fabriquée à la main avec passion. Nous privilégions
          des ingrédients naturels et durables, ainsi que des partenariats avec des producteurs
          locaux pour garantir un luxe responsable et authentique.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          Notre objectif est simple : transformer le quotidien en une parenthèse précieuse, où
          lumière, parfum et émotion se rencontrent pour créer des souvenirs mémorables.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Découvrez nos créations artisanales
        </h3>
        <p className="text-gray-700 mb-8 max-w-xl text-center font-medium">
          Vous pouvez aussi découvrir les bougies qui conviendront parfaitement à vos instants.
        </p>
        <a
          href="/collection"
          className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
        >
          Découvrir la collection
        </a>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Découvrez nos créations artisanales
        </h3>
        <p className="text-gray-700 mb-8 max-w-xl text-center">
          Explorez notre collection et laissez-vous séduire par des bougies uniques, inspirées
          des terroirs et pensées pour vos moments d’exception.
        </p>
        <a
          href="/collection"
          className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
        >
          Découvrir la collection
        </a>
      </section>
    </div>
  );
};

export default APropos;
