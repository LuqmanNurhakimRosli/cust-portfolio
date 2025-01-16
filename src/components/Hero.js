import React, { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";

export default function Hero() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div id="hero" className={`${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"} h-screen flex items-center justify-center py-8 border-8`}>
      <section className="container mx-auto px-4 pb-12 lg:flex md:px-40 max-w-full h-full">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-yellow-500">
            Welcome to My Portfolio 
          </h1>
          <p className={`max-w-xl leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-400"} sm:mx-auto lg:ml-0`}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="#contact"
              className="block px-6 py-2 text-center text-white bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <motion.img
            src={heroImage}
            className="w-full mx-auto mt-6 sm:w-10/12 lg:w-full border-4 border-yellow-500 rounded-xl"
            alt="Halloween"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>
    </div>
  );
}