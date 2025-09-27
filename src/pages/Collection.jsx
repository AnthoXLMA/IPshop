import React from "react";
import { Link } from "react-router-dom";

// Données des collections avec mini description
const collections = [
  {
    id: "gourmandes",
    title: "Les Gourmandes",
    coverImage: "/images/cover-gourmandes.jpg",
    description: "Laissez-vous envelopper par des notes sucrées et réconfortantes, parfaites pour un moment cocooning et gourmand.",
  },
  {
    id: "boisees",
    title: "Les Boisées",
    coverImage: "/images/cover-boisees.jpg",
    description: "Plongez dans des senteurs profondes et chaleureuses, idéales pour créer une atmosphère enveloppante et apaisante.",
  },
  {
    id: "vivifiantes",
    title: "Les Vivifiantes",
    coverImage: "/images/cover-vivifiantes.jpg",
    description: "Éveillez vos sens avec des fragrances fraîches et tonifiantes, pour apporter clarté, énergie et légèreté à vos instants.",
  },
];

const CollectionsOverview = () => {
  return (
    <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto font-serif">
      {/* Titre */}
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center tracking-wide">
        Nos Collections
      </h1>

      {/* Texte introductif */}
      <div className="mb-16 text-center text-gray-600 max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <p>
          Chez nous, chaque bougie est bien plus qu’un simple parfum : c’est une invitation à prendre un <strong>moment pour vous</strong>, à respirer, à vous recentrer et à savourer l’instant. Nos collections ont été pensées pour accompagner vos envies et vos émotions, et transformer chaque pause en un <strong>rituel sensoriel unique</strong>.
        </p>
        <p>
          Chaque collection est une <strong>source d’inspiration pour vos rituels quotidiens</strong>, que ce soit pour réveiller vos sens le matin, accompagner une pause lecture, ou sublimer un bain relaxant. Choisissez la bougie qui vous ressemble et laissez-vous guider vers <strong>l’instant le plus précieux de votre journée</strong>.
        </p>
      </div>

      {/* Cartes des collections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {collections.map((col) => (
          <Link
            key={col.id}
            to={`/collections/${col.id}`}
            className="relative group block overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={col.coverImage}
              alt={col.title}
              className="w-full h-80 object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            {/* Texte */}
            <div className="absolute bottom-6 left-6 right-6 text-center text-white">
              <h2 className="text-2xl font-semibold mb-2">{col.title}</h2>
              <p className="text-sm">{col.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CollectionsOverview;
