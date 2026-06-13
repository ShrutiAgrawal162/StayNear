import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import properties from "../data/properties";

import {
  MapPin,
  Star,
  Wifi,
  Car,
  Shield,
  Phone,
  Mail,
} from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            Property Not Found
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img
              src={property.images[currentImage]}
              alt={property.title}
              className="w-full h-[500px] object-cover"
            />

            <button
              onClick={() =>
                setCurrentImage(
                  currentImage === 0
                    ? property.images.length - 1
                    : currentImage - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12"
            >
              ❮
            </button>

            <button
              onClick={() =>
                setCurrentImage(
                  currentImage === property.images.length - 1
                    ? 0
                    : currentImage + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12"
            >
              ❯
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {property.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                onClick={() => setCurrentImage(index)}
                className={`w-24 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                  currentImage === index
                    ? "border-blue-600"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Details */}
          <div className="bg-white rounded-3xl shadow-md p-8 mt-8">

            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {property.title}
                </h1>

                <div className="flex items-center gap-2 text-gray-600 mt-3">
                  <MapPin size={18} />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <Star
                    size={18}
                    className="text-yellow-500 fill-yellow-500"
                  />
                  <span className="font-semibold">
                    {property.rating} Rating
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-600">
                  ₹{property.price}
                </h2>
                <p className="text-gray-500">per month</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">
                Description
              </h3>

              <p className="text-gray-600 leading-8">
                Comfortable student accommodation with
                furnished rooms, WiFi, power backup,
                security and easy access to nearby colleges.
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">
                Amenities
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-xl">
                  <Wifi size={20} />
                  <span>Free WiFi</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-xl">
                  <Car size={20} />
                  <span>Parking</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-xl">
                  <Shield size={20} />
                  <span>24/7 Security</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-xl">
                  <Wifi size={20} />
                  <span>Power Backup</span>
                </div>

              </div>
            </div>

            {/* Owner */}
            <div className="mt-12 bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Owner Details
              </h3>

              <div className="flex flex-col md:flex-row justify-between gap-4">

                <div>
                  <h4 className="font-semibold text-lg">
                    {property.owner}
                  </h4>

                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <Phone size={16} />
                    <span>+91 9876543210</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <Mail size={16} />
                    <span>owner@gmail.com</span>
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
                  Book Now
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PropertyDetails;