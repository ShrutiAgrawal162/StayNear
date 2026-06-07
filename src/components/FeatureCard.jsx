import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
      <div className="text-blue-600 mb-4">{icon}</div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;