import React, { useContext, useState } from "react";
import { DarkModeContext } from "../components/DarkModeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-2">
      <nav
        className={`w-[90%] md:w-1/2 mx-auto p-2 md:p-4 shadow-lg rounded-full ${
          darkMode ? "bg-gray-800" : "bg-white"
        } flex items-center justify-between`}
      >
        {/* Logo */}
        <div className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200">
          Portfolio
        </div>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent
            flex-col md:flex-row flex items-center md:space-x-2 md:flex ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
        >
          <a
            href="#hero"
            className="text-sm md:text-base hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-2 md:px-3 py-1 md:py-2"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-sm md:text-base hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-2 md:px-3 py-1 md:py-2"
          >
            Services
          </a>
          <a
            href="#testimonial"
            className="text-sm md:text-base hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-2 md:px-3 py-1 md:py-2"
          >
            Testimonial
          </a>
          <a
            href="#team"
            className="text-sm md:text-base hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-2 md:px-3 py-1 md:py-2"
          >
            Team
          </a>
          <a
            href="#contact"
            className="text-sm md:text-base hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300 px-2 md:px-3 py-1 md:py-2"
          >
            Contact Us
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <div
          onClick={toggleDarkMode}
          className={`cursor-pointer flex items-center justify-center w-10 md:w-12 h-5 md:h-6 rounded-full ${
            darkMode ? "bg-yellow-400" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-4 md:w-5 h-4 md:h-5 rounded-full bg-white transform transition-transform ${
              darkMode ? "translate-x-5 md:translate-x-6" : ""
            }`}
          ></div>
        </div>
      </nav>
    </div>
  );
}