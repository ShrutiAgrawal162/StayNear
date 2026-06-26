import React from "react";
import { Mail, Phone, Home, Calendar } from "lucide-react";
import OwnerNavbar from "../components/OwnerNavbar";
const OwnerProfile = () => {
  return (
    <>
    <OwnerNavbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-blue-600 to-cyan-500"></div>

          {/* Profile Section */}
          <div className="relative px-8 pb-8">

            <img
              src="https://i.pravatar.cc/200"
              alt="Owner"
              className="w-32 h-32 rounded-full border-4 border-white object-cover absolute -top-16"
            />

            <div className="pt-20">
              <h2 className="text-3xl font-bold">john</h2>
              <p className="text-gray-500">Property Owner</p>
            </div>

            {/* Details */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <Mail className="text-blue-600" />
                <span>john@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <Phone className="text-blue-600" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <Home className="text-blue-600" />
                <span>12 Properties Listed</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <Calendar className="text-blue-600" />
                <span>Joined June 2025</span>
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-blue-600">12</h3>
                <p>Total Properties</p>
              </div>

              <div className="bg-green-50 p-5 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-green-600">8</h3>
                <p>Bookings</p>
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-yellow-600">3</h3>
                <p>Pending</p>
              </div>

            </div>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
              Edit Profile
            </button>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OwnerProfile;