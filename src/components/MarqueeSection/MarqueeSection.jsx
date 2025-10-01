import React from "react";
import chal from '/banner/chal.jfif'
import dal from '/banner/dal.jfif'
import ata from '/banner/ata.jfif'
import tel from '/banner/soyabin.jfif'
import soap from '/banner/soap.jfif'
import paste from '/banner/paste.jfif'
import polarchal from '/banner/polarchal.jfif'



const products = [
  { name: "চাল", title: "Rice", img: chal },
  { name: "ডাল", title: "Lentils", img: dal },
  { name: "সয়াবিন তেল", title: "Oil", img:tel },
  { name: "আটা", title: "Flour", img: ata },
  { name: "নুডলস", title: "Instant Food", img: chal },
  { name: "কেক", title: "Bakery", img: chal},
  { name: "বিস্কুট", title: "Snack", img: chal },
  { name: "সাবান", title: "Soap", img: soap },
  { name: "পেস্ট", title: "Paste", img: paste },
  { name: "চকলেট", title: "Chocolate", img: chal },
  { name: "পানিও", title: "Beverage", img: chal },
  { name: "পাউডার", title: "Powder", img: chal },
  { name: "ব্রাশ", title: "Brush", img: chal },
  { name: "টিস্যু", title: "Tissue", img: chal },
  { name: "পলাচাল", title: "Polarchal", img: polarchal },
  { name: "খাতা", title: "Notebook", img: chal },
  { name: "কলম", title: "Pen", img: chal },
  { name: "পেন্সিল", title: "Pencil", img: chal },
  { name: "চানাচুর", title: "Snack", img: chal },
  { name: "ডিম", title: "Egg", img: chal },
  { name: "হ্যান্ডওয়াশ", title: "Handwash", img: chal },
  { name: "সস", title: "Sauce", img: chal },
];


const MarqueeSection = () => {
  return (
    <div className="bg-sky-900/30 mt-8 overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {products.concat(products).map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 min-w-[100px] text-center"
          >
            <span className="font-semibold text-rose-300 mb-2">{product.name}</span>
            <img
              src={product.img}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-lg shadow-sm"
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default MarqueeSection;
