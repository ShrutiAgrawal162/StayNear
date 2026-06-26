import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  Building2,
  ClipboardList,
  PlusCircle,
} from "lucide-react";
import OwnerProfile from "../pages/OwnerProfile";
const OwnerNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/OwnerDashboard">
            <h1 className="text-3xl font-bold text-blue-600">
              StayNear
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink to="/" className={navClass}>
              <div className="flex items-center gap-1">
                <Home size={18} />
                Home
              </div>
            </NavLink>

            <NavLink
              to="/OwnerDashboard"
              className={navClass}
            >
              <div className="flex items-center gap-1">
                <LayoutDashboard size={18} />
                Dashboard
              </div>
            </NavLink>

            <NavLink
              to="/MyProperties"
              className={navClass}
            >
              <div className="flex items-center gap-1">
                <Building2 size={18} />
                My Properties
              </div>
            </NavLink>

            <NavLink
              to="/BookingRequest"
              className={navClass}
            >
              <div className="flex items-center gap-1">
                <ClipboardList size={18} />
                Requests
              </div>
            </NavLink>

            <NavLink
              to="/AddProperty"
              className={navClass}
            >
              <div className="flex items-center gap-1">
                <PlusCircle size={18} />
                Add Property
              </div>
            </NavLink>

          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">

          <NavLink
           to="/OwnerProfile"
           className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
            <User size={18} />
            Profile
          </NavLink>

            <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              <LogOut size={18} />
              Logout
            </button>

          </div>

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
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-2xl font-bold text-blue-600">
            StayNear
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-5 p-5">

          <NavLink
            to="/"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <Home size={18} />
              Home
            </div>
          </NavLink>

          <NavLink
            to="/OwnerDashboard"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <LayoutDashboard size={18} />
              Dashboard
            </div>
          </NavLink>

          <NavLink
            to="/MyProperties"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <Building2 size={18} />
              My Properties
            </div>
          </NavLink>

          <NavLink
            to="/BookingRequest"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <ClipboardList size={18} />
              Booking Requests
            </div>
          </NavLink>

          <NavLink
            to="/AddProperty"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <PlusCircle size={18} />
              Add Property
            </div>
          </NavLink>

          <hr />

          <NavLink
            to="/OwnerProfile"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <User size={18} />
            Profile
          </NavLink>

          <button className="flex items-center gap-2 text-red-600">
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </div>
    </>
  );
};

export default OwnerNavbar;