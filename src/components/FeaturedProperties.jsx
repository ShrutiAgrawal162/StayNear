import React from "react";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      title: "Sunrise PG",
      location: "Delhi",
      price: "8,500",
      rating: "4.8",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
      title: "BlueNest Hostel",
      location: "Pune",
      price: "7,200",
      rating: "4.7",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      title: "Urban Stay",
      location: "Bangalore",
      price: "9,000",
      rating: "4.9",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Accommodations
          </h2>

          <p className="mt-3 text-gray-600">
            Discover the most popular student stays.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              rating={property.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;