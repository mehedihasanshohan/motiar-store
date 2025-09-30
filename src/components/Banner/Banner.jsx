import React from 'react';
import img1 from '/1.jpg';
import img2 from '/2.jpg';
import img3 from '/3.jpg';
import img4 from '/4.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full h-64">
      {[img1, img2, img3, img4].map((img, i) => {
        const next = (i + 1) % 4 + 1;
        const prev = i === 0 ? 4 : i;
        return (
          <div key={i} id={`slide${i + 1}`} className="carousel-item relative w-full">
            <img src={img} className="w-full h-64 object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
              <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
