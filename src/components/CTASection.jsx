import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 px-6 my-16 bg-linear-to-r from-blue-600 to-cyan-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Find Your Perfect Stay?
        </h2>

        <p className="text-lg text-white/90 mb-10">
          Search verified PGs, hostels and student accommodations near your
          college.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search city, college or locality"
            className="flex-1 px-5 py-4 rounded-xl bg-white text-gray-800 placeholder:text-gray-500 outline-none shadow-lg"
          />

          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition duration-300">
            Find Stay
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;