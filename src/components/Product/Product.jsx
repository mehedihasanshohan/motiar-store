import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
  const { id, name, price, description, rating, category, image } = product;

  return (
    <div className="max-w-sm bg-slate-400 border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white">{name}</h2>
        <p className="text-gray-200 text-sm mt-1">{category}</p>
        <p className="text-gray-200 mt-2">{description.substring(0, 60)}...</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-900 font-bold text-lg">৳{price}</span>
          <span className="text-yellow-200 font-semibold">{rating} ★</span>
        </div>
        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
        <Link to={`/products/${id}`}>
         <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
           Show Details
         </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
