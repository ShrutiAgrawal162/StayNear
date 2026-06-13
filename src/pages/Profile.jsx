import React from "react";
import { User, Mail, Phone, GraduationCap } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          My Profile
        </h1>

        <p className="text-gray-600 mb-8">
          Manage your personal information.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border p-8">

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">

            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <User size={40} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
               Alexa
              </h2>

              <p className="text-gray-500">
                MCA Student
              </p>
            </div>

          </div>

          {/* Profile Details */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex items-center gap-3 p-4 border rounded-xl">
              <Mail className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>Alexa@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 border rounded-xl">
              <Phone className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 border rounded-xl">
              <GraduationCap className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">University</p>
                <p>BHU</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 border rounded-xl">
              <User className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Student ID</p>
                <p>ST2026</p>
              </div>
            </div>

          </div>

          {/* Button */}
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Edit Profile
          </button>

        </div>
      </div>
    </div>
  );
};

export default Profile;