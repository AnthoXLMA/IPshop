import React from "react";

const HeroSection = ({ title, ctaText }) => {
  return (
    <section className="relative bg-gray-900 text-white h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
      <p className="max-w-2xl mb-8">
        Découvrez nos bougies inspirées des terroirs, entre luxe et authenticité.
      </p>
      <a
        href="/collection"
        className="px-6 py-3 bg-primary rounded-lg shadow hover:bg-primary/90 transition"
      >
        {ctaText}
      </a>
    </section>
  );
};

export default HeroSection;  // ✅ obligatoire si tu l’importes sans {}
