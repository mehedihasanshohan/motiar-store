import React from "react";
import { FaUtensils, FaCookie, FaSoap } from "react-icons/fa"; // Icons from react-icons

const products = [
  { name: "Chal", title: "Rice", icon: <FaUtensils /> },
  { name: "Dal", title: "Lentils", icon: <FaUtensils /> },
  { name: "Soyabin Tel", title: "Oil", icon: <FaUtensils /> },
  { name: "Aata", title: "Flour", icon: <FaUtensils /> },
  { name: "Biscuits", title: "Snack", icon: <FaCookie /> },
  { name: "Cake", title: "Bakery", icon: <FaCookie /> },
  { name: "Ruti", title: "Bread", icon: <FaUtensils /> },
  { name: "Noodles", title: "Instant Food", icon: <FaUtensils /> },
  { name: "Chanachur", title: "Snack", icon: <FaCookie /> },
  { name: "Handwash Powder", title: "Cleaning", icon: <FaSoap /> },
];

const MarqueeSection = () => {
  return (
    <div className="bg-yellow-100 overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 px-6 text-gray-800 font-semibold"
          >
            <span className="text-xl">{product.icon}</span>
            <span>{product.name} - {product.title}</span>
          </div>
        ))}
        {/* Duplicate for infinite scroll */}
        {products.map((product, index) => (
          <div
            key={index + products.length}
            className="flex items-center space-x-2 px-6 text-gray-800 font-semibold"
          >
            <span className="text-xl">{product.icon}</span>
            <span>{product.name} - {product.title}</span>
          </div>
        ))}
      </div>

      {/* Tailwind CSS animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 50s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default MarqueeSection;