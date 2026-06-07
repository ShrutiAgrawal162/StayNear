import React from "react";
import { Search, MapPin, Wallet, Bed } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600"
        alt="Student Accommodation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Find Your Ideal
            <br />
            <span className="text-blue-600">
              Student Living
            </span>
            <br />
            Space.
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Discover verified PGs and hostels near your university
            with zero brokerage and premium student-first amenities.
          </p>

          {/* Search Bar */}
          <div className="mt-10 bg-white rounded-2xl shadow-2xl p-3 flex flex-wrap gap-3 items-center max-w-4xl">
            
            <div className="flex items-center gap-2 border-r pr-4">
              <MapPin size={18} className="text-blue-600" />
              <input
                type="text"
                placeholder="Location"
                className="outline-none"
              />
            </div>

            <div className="flex items-center gap-2 border-r pr-4">
              <Wallet size={18} className="text-blue-600" />
              <input
                type="text"
                placeholder="Budget"
                className="outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <Bed size={18} className="text-blue-600" />
              <input
                type="text"
                placeholder="Room Type"
                className="outline-none"
              />
            </div>

            <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition">
              <Search size={18} />
              Search
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-8 text-sm text-gray-700 font-medium">
            <span>🏠 25,000+ Properties</span>
            <span>📍 50+ Cities</span>
            <span>⭐ 4.7/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;