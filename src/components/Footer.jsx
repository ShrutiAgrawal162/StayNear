import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            StayNear
          </h2>

          <p className="mt-4 text-gray-400">
            Find verified PGs, hostels and student
            accommodations across India.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Platform
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Explore PGs</li>
            <li>Hostels</li>
            <li>List Property</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Legal
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 StayNear. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;