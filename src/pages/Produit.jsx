import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Produit = () => {
  const { id } = useParams();

  // Exemple de produit simulé
  const produit = {
    id,
    name: "Bougie Lavande",
    price: "25€",
    description: "Bougie artisanale parfum lavande, inspirée des terroirs du Sud.",
    image: "/images/lavande.jpg",
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={produit.image} alt={produit.name} className="w-full md:w-1/2 rounded-lg" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{produit.name}</h1>
          <p className="text-gray-700 mb-4">{produit.description}</p>
          <p className="text-xl font-semibold mb-4">{produit.price}</p>
          <button className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition">
            Ajouter au panier
          </button>
        </div>
      </div>
    </section>
  );
};

export default Produit;
