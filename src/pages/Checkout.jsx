import React from "react";

const Checkout = () => {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Finaliser votre commande</h1>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Nom complet</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary"
            placeholder="Jean Dupont"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Adresse</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary"
            placeholder="12 rue des Bougies"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Ville</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary"
            placeholder="Paris"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary"
            placeholder="exemple@email.com"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
        >
          Confirmer et Payer
        </button>
      </form>
    </section>
  );
};

export default Checkout; // ✅ obligatoire
