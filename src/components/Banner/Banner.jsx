// import carouserimg1 from '/banner/caro1.jpeg'
// import carouserimg2 from '/banner/caro2.jpeg'
// import carouserimg3 from '/banner/caro3.jpeg'
// import carouserimg4 from '/banner/caro5.jpg'


// const Banner = () => {
//   return (
//    <div className="carousel w-full h-128 max-w-7xl mx-auto rounded-lg mt-6">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img
//       src={carouserimg1}
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide4" className="btn btn-circle">❮</a>
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide2" className="carousel-item relative w-full">
//     <img
//       src={carouserimg2}
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide1" className="btn btn-circle">❮</a>
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide3" className="carousel-item relative w-full">
//     <img
//       src={carouserimg3}
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide2" className="btn btn-circle">❮</a>
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide4" className="carousel-item relative w-full">
//     <img
//     src={carouserimg4}
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide3" className="btn btn-circle">❮</a>
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Banner;



// import carouserimg1 from '/banner/caro1.jpeg'
// import carouserimg2 from '/banner/caro2.jpeg'
// import carouserimg3 from '/banner/caro3.jpeg'
// import carouserimg4 from '/banner/caro5.jpg'
import img1 from '/shop/3.jpg'
import img2 from '/shop/6.jpg'
import img3 from '/shop/8.jpg'
import img4 from '/shop/12.jpg'
import { NavLink } from 'react-router';


const Banner = () => {
  return (
    <div className="carousel w-full bg-sky-900/30 h-128">

      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full object-cover h-128" />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-6">
          {/* <h2 className="text-3xl md:text-5xl font-bold mb-12">স্বাগতম মতিয়ার স্টোরে</h2>
           */}
           <h2 className="text-3xl md:text-5xl font-bold mb-4
                          bg-gradient-to-r from-amber-200 via-pink-500 to-gray-200
                          bg-clip-text text-transparent">
                          স্বাগতম মতিয়ার স্টোরে
          </h2>
          <p className="mb-4 text-amber-200">সেরা দামে টাটকা ও মানসম্মত পণ্য এখন আপনার হাতের নাগালে</p>
          <button className="btn btn-primary">
            <NavLink to='/products'>
              কেনাকাটা করুন
            </NavLink>
          </button>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover h-128" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4
                          bg-gradient-to-r from-amber-200 via-pink-500 to-gray-200
                          bg-clip-text text-transparent">প্রতিদিন সেরা অফার</h2>
          <p className="mb-8 text-amber-200">অবিশ্বাস্য ছাড় ও আকর্ষণীয় দামে নিত্যপ্রয়োজনীয় পণ্য</p>
            <button className="btn btn-primary ">
              <NavLink to='/products'>
                  অফার দেখুন
              </NavLink>
            </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover h-128" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4
                          bg-gradient-to-r from-amber-200 via-pink-500 to-gray-200
                          bg-clip-text text-transparent">গুণগত মানের নিশ্চয়তা</h2>
          <p className="mb-8 text-amber-200">আপনার পরিবারে পৌঁছে দিন টাটকা পণ্য</p>
          <button className="btn btn-primary">অর্ডার করুন</button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full object-cover h-128" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4
                          bg-gradient-to-r from-amber-200 via-pink-500 to-gray-200
                          bg-clip-text text-transparent">স্মার্ট কেনাকাটা করুন, জীবন হোক সহজ</h2>
          <p className="mb-8 text-amber-200">আপনার বিশ্বস্ত পাড়ার দোকান</p>
          <button className="btn btn-primary">Visit Us</button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Banner;
