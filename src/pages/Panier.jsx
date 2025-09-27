import React from "react";
import { useCartStore } from "../store/cartStore";

const Panier = () => {
  const { items, removeItem, clearCart } = useCartStore();

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>

      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <span>{item.name}</span>
              <span>{item.price}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="mt-4 px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            Vider le panier
          </button>
        </div>
      )}
    </section>
  );
};

export default Panier;
