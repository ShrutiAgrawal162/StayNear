import React from "react";

const features = [
  {
    title: "Verified Listings",
    desc: "Every property is verified before being listed.",
    icon: "✓",
  },
  {
    title: "Zero Brokerage",
    desc: "No hidden charges or brokerage fees.",
    icon: "₹",
  },
  {
    title: "Near Universities",
    desc: "Find stays close to your college campus.",
    icon: "📍",
  },
  {
    title: "Student Community",
    desc: "Connect with like-minded students.",
    icon: "👥",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold">
            Why Choose StayNear
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Why Students Love StayNear
          </h2>

          <p className="text-gray-500 mt-4">
            Everything you need to find a safe and comfortable student home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;