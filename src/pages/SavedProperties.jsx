import React from "react";
import PropertyCard from "../components/PropertyCard";

const SavedProperties = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Saved Properties
        </h1>

        <p className="text-gray-600 mb-8">
          Properties you have saved for later.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />

        </div>

      </div>

    </div>
  );
};

export default SavedProperties;