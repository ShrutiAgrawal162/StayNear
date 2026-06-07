import React from "react";

const TestimonialCard = ({
  name,
  college,
  review,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <p className="text-gray-600 mb-4">
        "{review}"
      </p>

      <h4 className="font-semibold">
        {name}
      </h4>

      <p className="text-sm text-gray-500">
        {college}
      </p>
    </div>
  );
};

export default TestimonialCard;