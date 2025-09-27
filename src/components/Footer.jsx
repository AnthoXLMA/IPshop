import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 Instants Précieux. Tous droits réservés.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary">Facebook</a>
          <a href="#" className="hover:text-primary">Instagram</a>
          <a href="#" className="hover:text-primary">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // ✅ obligatoire
