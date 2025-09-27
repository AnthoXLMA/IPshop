import React from "react";
import ProductCard from "../components/ProductCard";

const Experiences = () => {
  const coffrets = [
    { id: 1, name: "Coffret Romantique", price: "45€", image: "/images/romantique.jpg" },
    { id: 2, name: "Coffret Terroir", price: "50€", image: "/images/terroir.jpg" },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Expériences & Coffrets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {coffrets.map((c) => (
          <ProductCard key={c.id} name={c.name} price={c.price} image={c.image} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;

