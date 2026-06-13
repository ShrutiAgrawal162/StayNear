import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">

        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h1 className="text-4xl md:text-6xl font-bold">
              About StayNear
            </h1>

            <p className="mt-6 text-lg max-w-3xl mx-auto">
              Helping students find safe, affordable and verified
              accommodations near their colleges and universities.
            </p>

          </div>
        </section>

        {/* About Content */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
                alt="Student Accommodation"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>

              <p className="text-gray-600 mb-4">
                StayNear is designed to simplify the search for student
                accommodation by connecting students with verified PGs,
                hostels and rental properties.
              </p>

              <p className="text-gray-600">
                We aim to provide a trusted platform where students can
                compare properties, save favorites, manage bookings and
                find the perfect stay near their educational institutions.
              </p>

            </div>

          </div>

        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose StayNear?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">
                  Verified Listings
                </h3>

                <p className="text-gray-600">
                  Browse trusted PGs and hostels with accurate information.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">
                  Student Friendly
                </h3>

                <p className="text-gray-600">
                  Affordable options designed specifically for students.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">
                  Easy Booking
                </h3>

                <p className="text-gray-600">
                  Save properties and manage bookings in one place.
                </p>
              </div>

            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default About;