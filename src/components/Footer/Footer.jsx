import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import profile  from '/banner/profile.jpeg'


const Footer = () => {
  return (
    <footer className="bg-sky-500/20 text-neutral-content py-6">
      <div className="container mx-auto flex flex-col items-center gap-4">

        <div className="flex items-center gap-3">
           <p className="text-sm text-gray-300">
            <span className="text-rose-300 font-semibold">Motiar Store</span> © {new Date().getFullYear()} — All rights reserved |
          </p>
          <p className="text-sm text-gray-300">
            | Design & Develop —{" "}
            <span className="font-semibold text-rose-300">
              Mehedi Hasan Shohan
            </span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 text-xl">
           <img
            src={profile}
            alt="Mehedi Hasan Shohan"
            className="w-12 h-12 rounded-full border-2 hover:scale-200 border-white shadow-lg  transform transition-transform duration-300 ease-in-out"
          />
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com/mehedihasanshohan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mehedi-hasan-1a08b22b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:mhshohan01@gmail.com"
            className="hover:text-red-400 transition"
          >
            <BiLogoGmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
