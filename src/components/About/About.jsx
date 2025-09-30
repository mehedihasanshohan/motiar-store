import React from "react";
import shopImg from "/1.jpg"; // replace with your shop image

const About = () => {
  return (
    <div className=" bg-sky-500/20 px-4 py-16 space-y-16">
      {/* Header */}
      <h2 className="text-5xl font-bold text-center text-white">
        Welcome to Our General Store
      </h2>
      <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto">
        Serving our community with quality products and friendly service.
        Your satisfaction is our top priority!
      </p>

      {/* Shop Image */}
      <div className="flex justify-center">
        <img
          src={shopImg}
          alt="Shop"
          className="w-full md:w-3/4 rounded-xl shadow-xl"
        />
      </div>

      {/* Customer Services */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Friendly Service</h3>
          <p className="text-gray-600">
            Our staff is always ready to help you find what you need with a smile.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Quality Products</h3>
          <p className="text-gray-600">
            We offer high-quality products at competitive prices for our customers.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Open & Convenient</h3>
          <p className="text-gray-600">
            Easy to access, well-organized store layout, making your shopping a breeze.
          </p>
        </div>
      </div>

      {/* Map & Address */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <iframe
          title="Motiar General Store"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.5260998736435!2d89.74417357418864!3d23.722396589853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe3e50bb24f0e9%3A0xccf6fe471df8eca2!2sMotiar%20General%20Store!5e1!3m2!1sen!2sbd!4v1759213575165!5m2!1sen!2sbd"
          className="w-full md:w-2/3 h-80 rounded-xl shadow-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="space-y-4 text-white md:w-1/3">
          <h3 className="text-2xl font-semibold text-blue-500">Our Location</h3>
          <p className="text-amber-200">
            Goalundo Railgait <br />
            Goalundo <br />
            Rajbari
          </p>
          <h3 className="text-2xl font-semibold text-blue-500">Contact</h3>
          <p className="text-amber-200">Phone: +8801985545365</p>
          <p className="text-amber-200">Email: mhshohan01@gmail.com</p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-500">
        Visit us today and experience the best shopping with friendly service!
      </p>
    </div>
  );
};

export default About;
