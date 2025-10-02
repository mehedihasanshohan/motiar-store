import React from "react";
import chal from '/banner/chal.jfif'
import dal from '/banner/dal.jfif'
import tel from '/banner/soyabin.jfif'
import soap from '/banner/soap.jfif'
import paste from '/banner/paste.jfif'
import ata from '/banner/ata.jfif'
import mojo2 from '/banner/mojo2.jfif'
import polarchal2 from '/banner/polarchal2.jfif'
import ndls  from '/banner/ndls.jfif'
import biscuit  from '/banner/biscuit.jfif'
import handwash  from '/banner/handwash.jfif'
import egg2  from '/banner/egg2.jfif'
import chanachur  from '/banner/chanachur.jfif'
import tissue from '/banner/tissue.jfif'
import khata  from '/banner/khata.jfif'
import pen  from '/banner/pen.jfif'
import pencil  from '/banner/pencil.jfif'
import brush  from '/banner/brush.webp'
import powder  from '/banner/powder.jfif'
import cake2  from '/banner/cake2.jfif'
import sauce  from '/banner/sauce.jfif'
import chocolate  from '/banner/chocolate.jfif'



const products = [
  { name: "চাল", title: "Rice", img: chal },
  { name: "ডাল", title: "Lentils", img: dal },
  { name: "সয়াবিন তেল", title: "Oil", img:tel },
  { name: "আটা", title: "Flour", img: ata },
  { name: "নুডলস", title: "Instant Food", img: ndls },
  { name: "কেক", title: "Bakery", img: cake2},
  { name: "বিস্কুট", title: "Snack", img: biscuit },
  { name: "সাবান", title: "Soap", img: soap },
  { name: "পেস্ট", title: "Paste", img: paste },
  { name: "চকলেট", title: "Chocolate", img: chocolate },
  { name: "পানিও", title: "Beverage", img: mojo2 },
  { name: "পাউডার", title: "Powder", img: powder },
  { name: "ব্রাশ", title: "Brush", img: brush },
  { name: "টিস্যু", title: "Tissue", img: tissue },
  { name: "চিনিগুড়া চাল", title: "Polarchal", img: polarchal2 },
  { name: "খাতা", title: "Notebook", img: khata },
  { name: "কলম", title: "Pen", img: pen },
  { name: "পেন্সিল", title: "Pencil", img: pencil },
  { name: "চানাচুর", title: "Snack", img: chanachur },
  { name: "ডিম", title: "Egg", img: egg2 },
  { name: "হ্যান্ডওয়াশ", title: "Handwash", img: handwash },
  { name: "সস", title: "Sauce", img: sauce },
];


const MarqueeSection = () => {
  return (
    <div className="bg-sky-900/30 mt-8 overflow-hidden py-4">
      <h2 className="text-center font-semibold text-white mb-2 text-2xl">Popular Categories ...</h2>
      <div className="flex animate-marquee whitespace-nowrap mb-2">
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
