import React from "react";

const StatsStrip = () => {
  const stats = [
    { number: "25K+", label: "Properties" },
    { number: "50+", label: "Cities" },
    { number: "120K+", label: "Users" },
    { number: "4.7★", label: "Rating" },
  ];

  return (
    <section className="bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 text-center"
          >
            <h2 className="text-3xl font-bold text-blue-600">
              {item.number}
            </h2>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;