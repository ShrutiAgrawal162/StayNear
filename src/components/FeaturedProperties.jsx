import React from "react";
import { Link } from "react-router-dom";
import properties from "../data/properties";

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">
            Featured Accommodations
          </span>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Find Your Perfect Stay
          </h2>

          <p className="text-gray-600 mt-4">
            Explore top-rated PGs and hostels loved by students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className="block"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-900">
                    {property.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    📍 {property.location}
                  </p>

                  <div className="flex gap-2 mt-4 flex-wrap">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      WiFi
                    </span>

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      Food
                    </span>

                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                      AC
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-5">
                    <h4 className="text-blue-600 font-bold text-lg">
                      ₹{property.price}
                    </h4>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;