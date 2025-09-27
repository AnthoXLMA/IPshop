import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact & Service Client</h1>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Nom</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary"
            placeholder="Votre nom"
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

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            rows="5"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary"
            placeholder="Écrivez votre message ici..."
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact; // ✅ indispensable
Contact.jsx

