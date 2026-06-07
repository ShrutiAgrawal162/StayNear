import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="StayNear Logo"
            className="h-10 w-auto"
          />

          <h1 className="text-2xl font-bold text-blue-700">
            StayNear
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li className="cursor-pointer hover:text-blue-600 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Explore
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Contact
          </li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          List Property
        </button>

      </div>
    </nav>
  );
};

export default Navbar;