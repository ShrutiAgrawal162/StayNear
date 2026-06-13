import React from "react";
import OwnerNavbar from "../components/OwnerNavbar";
import Footer from "../components/Footer";
import {
  MapPin,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

const myProperties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    title: "Sunrise Student PG",
    location: "Near BHU, Varanasi",
    price: "8500",
    status: "Active",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
    title: "Elite Boys Hostel",
    location: "Lanka, Varanasi",
    price: "6500",
    status: "Active",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
    title: "Green View PG",
    location: "DLW, Varanasi",
    price: "7200",
    status: "Pending",
  },
];

const MyProperties = () => {
  return (
    <>
      <OwnerNavbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              My Properties
            </h1>

            <p className="text-gray-600 mt-2">
              Manage all your listed PGs and Hostels.
            </p>
          </div>

          {/* Property Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {myProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
              >

                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-bold">
                      {property.title}
                    </h2>

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        property.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                  </div>

                  <h3 className="text-blue-600 font-bold text-xl mb-5">
                    ₹{property.price}/month
                  </h3>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-3">

                    <button className="flex items-center justify-center gap-1 bg-blue-100 text-blue-600 py-2 rounded-xl hover:bg-blue-200">
                      <Eye size={16} />
                      View
                    </button>

                    <button className="flex items-center justify-center gap-1 bg-green-100 text-green-600 py-2 rounded-xl hover:bg-green-200">
                      <Pencil size={16} />
                      Edit
                    </button>

                    <button className="flex items-center justify-center gap-1 bg-red-100 text-red-600 py-2 rounded-xl hover:bg-red-200">
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyProperties;