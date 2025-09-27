import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Collection = () => {
  const produits = [
    { id: 1, name: "Terre & Mer", price: "25€", image: "/images/lavande.jpg" },
    { id: 2, name: "Gourmandise d'Armorique", price: "28€", image: "/images/vanille.jpg" },
    { id: 3, name: "Ebène", price: "30€", image: "/images/figue.jpg" },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Notre Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {produits.map((p) => (
          <Link key={p.id} to={`/produit/${p.id}`} className="block">
            <ProductCard name={p.name} price={p.price} image={p.image} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Collection;
