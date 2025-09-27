import React from 'react';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <img src={image || '/images/placeholder.jpg'} alt={name} className="w-full h-64 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
