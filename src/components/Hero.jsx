import React from "react";

const Hero = () => {
  return (
    <section className="relative">

      {/* Hero Section */}
      <div
        className="relative min-h-[90vh] md:h-175 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="hidden sm:inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-blue-600 text-sm font-medium">
                Verified PGs & Hostels for Students
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-6 md:mt-8 leading-tight">
              Find Your Ideal
              <br />
              <span className="text-blue-600">
                Student Living
              </span>{" "}
              Space.
            </h1>

            {/* Description */}
            <p className="text-gray-700 text-base md:text-lg mt-4 md:mt-6 max-w-xl">
              Discover verified PGs, hostels and shared rooms near your
              university with zero brokerage and premium student-first
              amenities.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
                Explore Properties →
              </button>

              <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition">
                List Your Property
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-5 mt-6 md:-mt-16 relative z-20">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

            <input
              type="text"
              placeholder="Enter city or university"
              className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
            />

            <select className="border border-gray-200 rounded-xl px-4 py-4 outline-none">
              <option>Budget</option>
              <option>₹2,000 - ₹5,000</option>
              <option>₹5,000 - ₹10,000</option>
              <option>₹10,000+</option>
            </select>

            <select className="border border-gray-200 rounded-xl px-4 py-4 outline-none">
              <option>Room Type</option>
              <option>Single</option>
              <option>Double</option>
              <option>Shared</option>
            </select>

            <select className="border border-gray-200 rounded-xl px-4 py-4 outline-none">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Any</option>
            </select>

            <button className="bg-blue-600 text-white rounded-xl py-4 font-semibold hover:bg-blue-700 transition">
              Search
            </button>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;