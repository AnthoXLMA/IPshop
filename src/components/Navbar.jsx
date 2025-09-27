import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="text-3xl md:text-4xl font-extrabold text-primary tracking-wider">
          Instants Précieux
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {["Accueil", "A propos", "Collection", "Shop", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Accueil" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
              className="relative group px-1 py-2 transition-all duration-300 hover:text-primary"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 space-y-4">
          {["Accueil", "A propos", "Collection", "Shop", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Accueil" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
              className="block text-gray-800 font-semibold py-2 px-3 rounded-lg hover:bg-primary/10 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
