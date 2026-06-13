import React, { useState } from "react";
import OwnerNavbar from "../components/OwnerNavbar";
import Footer from "../components/Footer";
import {
  Building2,
  MapPin,
  IndianRupee,
  FileText,
  Upload,
} from "lucide-react";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    propertyName: "",
    location: "",
    price: "",
    type: "",
    description: "",
    amenities: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Property Added Successfully!");
  };

  return (
    <>
      <OwnerNavbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Add New Property
            </h1>

            <p className="text-gray-600 mt-2">
              List your PG or Hostel for students.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Property Name */}
              <div>
                <label className="block font-medium mb-2">
                  Property Name
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3">
                  <Building2
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="text"
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleChange}
                    placeholder="Sunrise Student PG"
                    className="w-full outline-none ml-3"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block font-medium mb-2">
                  Location
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3">
                  <MapPin
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Near BHU, Varanasi"
                    className="w-full outline-none ml-3"
                  />
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block font-medium mb-2">
                  Monthly Rent
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3">
                  <IndianRupee
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="8500"
                    className="w-full outline-none ml-3"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block font-medium mb-2">
                  Property Type
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none"
                >
                  <option value="">
                    Select Property Type
                  </option>

                  <option value="PG">
                    PG
                  </option>

                  <option value="Hostel">
                    Hostel
                  </option>

                  <option value="Apartment">
                    Apartment
                  </option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block font-medium mb-2">
                  Description
                </label>

                <div className="border rounded-xl p-4">
                  <textarea
                    rows="5"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Write property details..."
                    className="w-full outline-none resize-none"
                  />
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="block font-medium mb-2">
                  Amenities
                </label>

                <input
                  type="text"
                  name="amenities"
                  value={formData.amenities}
                  onChange={handleChange}
                  placeholder="WiFi, AC, Food, Parking..."
                  className="w-full border rounded-xl px-4 py-3 outline-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block font-medium mb-2">
                  Upload Property Images
                </label>

                <label className="flex items-center justify-center gap-2 border-2 border-dashed rounded-xl p-8 cursor-pointer hover:bg-gray-50">
                  <Upload
                    size={22}
                    className="text-gray-500"
                  />

                  <span className="text-gray-600">
                    Click to Upload Images
                  </span>

                  <input
                    type="file"
                    multiple
                    className="hidden"
                  />
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Add Property
              </button>

            </form>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddProperty;