import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Accueil", "A propos", "Collection", "Shop", "Blog", "Contact"];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-12">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide font-serif"
        >
          Instants Précieux
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-gray-800 font-light tracking-wide">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item === "Accueil" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
              className="relative group px-2 py-1 transition-colors duration-300 hover:text-primary"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg py-6 px-6 space-y-4 rounded-b-2xl transition-all duration-300">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item === "Accueil" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
              className="block text-gray-800 font-medium py-2 px-3 rounded-lg hover:bg-primary/10 transition-colors duration-300"
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
