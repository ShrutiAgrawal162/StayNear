import React from "react";
import { Search, Bell, User, Menu, House } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ setSidebarOpen }) => {
  return (
    <div className="flex justify-between items-center p-4 md:p-6 bg-white border-b">

      {/* Left Section */}
      <div className="flex items-center gap-3 md:gap-4">

        {/* Hamburger Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu size={26} />
        </button>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-gray-100 px-4 py-3 rounded-xl w-full max-w-md">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search accommodation..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
          />
        </div>

      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* Home */}
        <Link to="/">
          <House
            size={22}
            className="cursor-pointer hover:text-blue-600 transition"
          />
        </Link>

        {/* Notification */}
        <Bell
          size={22}
          className="cursor-pointer hover:text-blue-600 transition"
        />

        {/* Profile */}
        <Link to="/Profile">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
            <User size={18} />
          </div>
        </Link>

      </div>

    </div>
  );
};

export default DashboardNavbar;