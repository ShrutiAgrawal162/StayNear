import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

const Properties = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            Explore PGs & Hostels
          </h1>

          <p className="text-gray-600 mb-8">
            Find your perfect stay near college.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <Link
                key={property.id}
                to={`/property/${property.id}`}
              >
                <PropertyCard
                  id={property.id}
                  image={property.image}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  rating={property.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Properties;