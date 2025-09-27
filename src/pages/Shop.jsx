import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";


const Shop = () => {
  const produits = [
    {
      id: 1,
      name: "Terre & Mer",
      price: "38€",
      image: "/images/lavande.jpg",
      description:
        "Une bougie parfumée qui évoque la fraîcheur des terres et la brise marine. Cire naturelle, mèche coton.",
    },
    {
      id: 2,
      name: "Gourmandise d'Armorique",
      price: "42€",
      image: "/images/vanille.jpg",
      description:
        "Un parfum sucré et chaleureux inspiré des gourmandises bretonnes, pour un moment cosy et raffiné.",
    },
    {
      id: 3,
      name: "Ebène",
      price: "24€",
      image: "/images/figue.jpg",
      description:
        "Une bougie profonde et boisée, parfaite pour créer une atmosphère intime et élégante.",
    },
    {
      id: 4,
      name: "Eclats de Bourgogne",
      price: "45€",
      image: "/images/figue.jpg",
      description:
        "Une bougie profonde et boisée, parfaite pour créer une atmosphère intime et élégante.",
    },
    {
      id: 5,
      name: "Or de Beaune",
      price: "70€",
      image: "/images/figue.jpg",
      description:
        "Une bougie profonde et boisée, parfaite pour créer une atmosphère intime et élégante.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (produit) => {
    alert(`Le produit "${produit.name}" a été ajouté au panier !`);
  };

  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wider">
        Boutique
      </h1>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
        Découvrez nos bougies artisanales, créées avec passion pour sublimer vos instants précieux.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {produits.map((produit) => (
          <div
            key={produit.id}
            className="flex flex-col bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProduct(produit)}
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={produit.image}
                alt={produit.name}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-xl font-semibold mb-2 text-center text-gray-900">{produit.name}</h2>
              <p className="text-gray-700 font-medium mb-4 text-center">{produit.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // évite d’ouvrir la modale
                  handleAddToCart(produit);
                }}
                className="mt-auto w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:from-indigo-700 hover:to-purple-700 transition-transform duration-300"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modale */}
      <Transition appear show={selectedProduct !== null} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setSelectedProduct(null)}
        >
          <div className="min-h-screen px-4 text-center bg-black/50">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="inline-block w-full max-w-md p-6 my-20 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {selectedProduct && (
                  <>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold text-gray-900 mb-4"
                    >
                      {selectedProduct.name}
                    </Dialog.Title>
                    <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
                    <p className="text-xl font-semibold mb-6">{selectedProduct.price}</p>
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:from-indigo-700 hover:to-purple-700 transition-transform duration-300"
                    >
                      Ajouter au panier
                    </button>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Shop;
