import React from "react";
import chal from '/banner/chal.jfif'
import dal from '/banner/dal.jfif'
import tel from '/banner/soyabin.jfif'
import ata from '/banner/ata.jfif'
import egg2  from '/banner/egg2.jfif'
import ndls  from '/banner/ndls.jfif'
import polarchal  from '/banner/polarchal.jfif'
import handwash  from '/banner/handwash.jfif'

const offers = [
  {
    id: 1,
    name: "চাল",
    img: chal,
    oldPrice: "৳70",
    newPrice: "৳60",
  },
  {
    id: 2,
    name: "ডাল",
    img: dal,
    oldPrice: "৳120",
    newPrice: "৳100",
  },
  {
    id: 3,
    name: "সয়াবিন তেল",
    img: tel,
    oldPrice: "৳180",
    newPrice: "৳160",
  },
  {
    id: 4,
    name: "আটা",
    img: ata,
    oldPrice: "৳55",
    newPrice: "৳48",
  },
  {
    id: 5,
    name: "ডিম",
    img: egg2,
    oldPrice: "৳330",
    newPrice: "৳275",
  },
  {
    id: 6,
    name: "নুডলস",
    img: ndls,
    oldPrice: "৳160",
    newPrice: "৳145",
  },
  {
    id: 7,
    name: "চিনিগুড়া চাল",
    img: polarchal,
    oldPrice: "৳160",
    newPrice: "৳145",
  },
  {
    id: 8,
    name: "হ্যান্ডওয়াশ",
    img: handwash,
    oldPrice: "৳160",
    newPrice: "৳145",
  },
];

const OfferSection = () => {
  return (
    <section className="py-12 px-4 bg-sky-900/30">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
         বিশেষ অফার
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {offers.map((item) => (
          <div
            key={item.id}
            className="relative bg-white/10 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            {/* Offer Tag */}
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              অফার
            </span>

            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-lg mb-2"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>

            {/* Price */}
            <div className="flex gap-2 items-center">
              <span className="line-through text-red-400">{item.oldPrice}</span>
              <span className="text-green-600 font-bold">{item.newPrice}</span>
            </div>

            {/* Button */}
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              কেনাকাটা করুন
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
