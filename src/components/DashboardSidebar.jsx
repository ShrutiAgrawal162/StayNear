import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  Heart,
  Calendar,
  User,
  LogOut,
  X,
} from "lucide-react";

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              StayNear
            </h1>
            <p className="text-gray-500 text-sm">
              Student Portal
            </p>
          </div>

          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <div className="p-4 space-y-2">

          <Link
            to="/StudentDashboard"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/Properties"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50"
          >
            <Search size={20} />
            Explore PGs
          </Link>

          <Link
            to="/SavedProperties"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50"
          >
            <Heart size={20} />
            Saved Properties
          </Link>

          <Link
            to="/MyBookings"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50"
          >
            <Calendar size={20} />
            My Bookings
          </Link>

          <Link
            to="/Profile"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50"
          >
            <User size={20} />
            Profile
          </Link>

        </div>

        {/* Logout */}
        <div className="absolute bottom-5 left-0 w-full px-4">
          <Link
            to="/Login"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 text-red-500 rounded-lg hover:bg-red-50"
          >
            <LogOut size={20} />
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;