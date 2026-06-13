import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Search,
  Heart,
  Calendar,
  Home,
  Building2,
  Bell,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignUp = () => {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8ff] flex flex-col">

      <Navbar />

      <div className="flex-1 py-10 px-4">

        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Join Our Community
            </h1>

            <p className="text-gray-500 mt-4 text-base md:text-lg">
              Choose your role and create your StayNear account.
            </p>
          </div>

          {/* Role Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">

            {/* Student */}
            <div
              onClick={() => setRole("student")}
              className={`cursor-pointer rounded-2xl border-2 p-6 bg-white transition ${
                role === "student"
                  ? "border-blue-600"
                  : "border-gray-200"
              }`}
            >
              <div className="flex justify-between items-start">

                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="text-blue-600" size={22} />
                </div>

                {role === "student" && (
                  <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mt-4">
                Sign Up as Student
              </h3>

              <div className="mt-4 space-y-2 text-gray-600">

                <p className="flex items-center gap-2">
                  <Search size={16} />
                  Search PGs & Hostels
                </p>

                <p className="flex items-center gap-2">
                  <Heart size={16} />
                  Save Properties
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={16} />
                  Book Accommodation
                </p>

              </div>
            </div>

            {/* Owner */}
            <div
              onClick={() => setRole("owner")}
              className={`cursor-pointer rounded-2xl border-2 p-6 bg-white transition ${
                role === "owner"
                  ? "border-blue-600"
                  : "border-gray-200"
              }`}
            >
              <div className="flex justify-between items-start">

                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Building2 size={22} />
                </div>

                {role === "owner" && (
                  <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mt-4">
                Sign Up as Property Owner
              </h3>

              <div className="mt-4 space-y-2 text-gray-600">

                <p className="flex items-center gap-2">
                  <Home size={16} />
                  List Properties
                </p>

                <p className="flex items-center gap-2">
                  <Building2 size={16} />
                  Manage Listings
                </p>

                <p className="flex items-center gap-2">
                  <Bell size={16} />
                  Receive Requests
                </p>

              </div>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border p-6 md:p-8">

            <div className="space-y-5">

              {/* Name */}
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3">
                  <User size={18} className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full outline-none ml-3"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block mb-2 font-medium">
                    Email
                  </label>

                  <div className="flex items-center border rounded-xl px-4 py-3">
                    <Mail size={18} className="text-gray-400" />

                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full outline-none ml-3"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Phone
                  </label>

                  <div className="flex items-center border rounded-xl px-4 py-3">
                    <Phone size={18} className="text-gray-400" />

                    <input
                      type="text"
                      placeholder="+91 9876543210"
                      className="w-full outline-none ml-3"
                    />
                  </div>
                </div>

              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 font-medium">
                  Password
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3">
                  <Lock size={18} className="text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="w-full outline-none ml-3"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-2 font-medium">
                  Confirm Password
                </label>

                <div className="flex items-center border rounded-xl px-4 py-3">
                  <Lock size={18} className="text-gray-400" />

                  <input
                    type="password"
                    placeholder="********"
                    className="w-full outline-none ml-3"
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                I agree to the Terms & Privacy Policy
              </label>

              {/* Button */}
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                Create Account
                <ArrowRight size={18} />
              </button>

              {/* Login */}
              <p className="text-center text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/Login"
                  className="text-blue-600 font-semibold"
                >
                  Login
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default SignUp;