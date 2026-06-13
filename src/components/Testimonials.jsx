import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    college: "BHU Student",
    review:
      "StayNear helped me find a PG within 2 days. The process was smooth and completely hassle-free.",
  },
  {
    name: "Priya Singh",
    college: "MCA Student",
    review:
      "The listings were genuine and verified. I found a comfortable hostel near my college.",
  },
  {
    name: "Rohit Verma",
    college: "Engineering Student",
    review:
      "Best platform for students looking for affordable accommodation without brokerage.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold mt-3">
            What Students Say
          </h2>

          <p className="text-gray-500 mt-4">
            Thousands of students trust StayNear for finding their ideal stay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 mb-6">
                "{item.review}"
              </p>

              <h3 className="font-bold text-lg">
                {item.name}
              </h3>

              <p className="text-gray-500">
                {item.college}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;