import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      college: "Delhi University",
      review:
        "Found a great PG within a week.",
    },
    {
      name: "Priya Singh",
      college: "BHU",
      review:
        "Very easy to use and trusted listings.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Student Stories
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((item, index) => (
            <TestimonialCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;