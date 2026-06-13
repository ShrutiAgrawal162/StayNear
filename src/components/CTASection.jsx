import React from "react";

const CTASection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-linear-to-r from-blue-700 to-blue-500 rounded-3xl overflow-hidden shadow-xl">

          <div className="grid md:grid-cols-3 items-center">

            {/* Left Image */}
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                alt="Student"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="md:col-span-2 p-8 md:p-12 text-white">
              <h2 className="text-4xl font-bold leading-tight">
                Ready to move into your new home?
              </h2>

              <p className="mt-4 text-blue-100 text-lg">
                Join thousands of students living comfortably with StayNear.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter your college or city"
                  className="flex-1 px-5 py-4 rounded-xl bg-white text-black placeholder:text-gray-500 outline-none"
                />

                <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition">
                  Get Started
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;