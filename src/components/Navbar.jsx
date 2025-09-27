import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">Instants Précieux</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-primary">Accueil</Link>
          <Link to="/apropos" className="hover:text-primary">La Marque</Link>
          <Link to="/collection" className="hover:text-primary">Collection</Link>
          <Link to="/shop" className="hover:text-primary">Boutique</Link>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
