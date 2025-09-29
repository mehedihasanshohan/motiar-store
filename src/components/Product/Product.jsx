import React from 'react';

const Product = ({ product }) => {
  const { id, name, price, description, rating, category, image } = product;
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-sm mt-1">{category}</p>
        <p className="text-gray-700 mt-2">{description.substring(0, 60)}...</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold text-lg">${price}</span>
          <span className="text-yellow-500 font-semibold">{rating} ★</span>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
