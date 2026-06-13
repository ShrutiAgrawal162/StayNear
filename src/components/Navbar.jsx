import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const hideAuthButtons =
    location.pathname === "/Login" ||
    location.pathname === "/SignUp";

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
              StayNear
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/Properties"
                className="hover:text-blue-600 transition"
              >
                Explore
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className="hover:text-blue-600 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="hover:text-blue-600 transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          {!hideAuthButtons && (
            <div className="hidden md:flex gap-3">
              <Link to="/Login">
                <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                  Login
                </button>
              </Link>

              <Link to="/SignUp">
                <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Sign Up
                </button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-2xl font-bold text-blue-600">
            StayNear
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col p-5 gap-5">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="font-medium"
          >
            Home
          </Link>

          <Link
            to="/Properties"
            onClick={() => setMenuOpen(false)}
            className="font-medium"
          >
            Explore
          </Link>

          <Link
            to="/About"
            onClick={() => setMenuOpen(false)}
            className="font-medium"
          >
            About
          </Link>

          <Link
            to="/Contact"
            onClick={() => setMenuOpen(false)}
            className="font-medium"
          >
            Contact
          </Link>

          {!hideAuthButtons && (
            <>
              <hr />

              <Link to="/Login" onClick={() => setMenuOpen(false)}>
                <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg">
                  Login
                </button>
              </Link>

              <Link to="/SignUp" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;