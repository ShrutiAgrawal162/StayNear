import React from "react";
import FeatureCard from "./FeatureCard";
import {
  ShieldCheck,
  BadgeIndianRupee,
  Users,
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Why Students Love StayNear
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Making student accommodation easy and secure.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShieldCheck size={40} />}
            title="Verified Listings"
            description="Every property is verified before listing."
          />

          <FeatureCard
            icon={<BadgeIndianRupee size={40} />}
            title="Zero Brokerage"
            description="No hidden charges or broker fees."
          />

          <FeatureCard
            icon={<Users size={40} />}
            title="Community First"
            description="Connect with students near you."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;