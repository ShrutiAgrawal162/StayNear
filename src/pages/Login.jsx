import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Section */}
        <div
          className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200')",
          }}
        >
          <div className="absolute inset-0 bg-blue-700/50"></div>

          <div className="relative z-10 flex flex-col justify-between p-10 text-white w-full">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <span className="text-blue-600 font-bold text-xl">🏢</span>
              </div>
              <h1 className="text-3xl font-bold">StayNear</h1>
            </div>

            {/* Hero Text */}
            <div>
              <h2 className="text-6xl font-bold leading-tight mb-4">
                Find Your Home <br />
                Away From Home
              </h2>

              <p className="text-lg text-gray-200 max-w-md">
                Curated high-end student living environments designed
                for focus, comfort, and community.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>

            <p className="text-gray-500 mb-8">
              Sign in to your account to continue your journey.
            </p>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                EMAIL ADDRESS
              </label>

              <div className="flex items-center border rounded-xl px-4 py-3">
                <Mail size={18} className="text-gray-400" />

                <input
                  type="email"
                  placeholder="student@university.edu"
                  className="w-full outline-none ml-3"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">
                PASSWORD
              </label>

              <div className="flex items-center border rounded-xl px-4 py-3">
                <Lock size={18} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full outline-none ml-3"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff
                      size={18}
                      className="text-gray-400"
                    />
                  ) : (
                    <Eye
                      size={18}
                      className="text-gray-400"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center mt-5 mb-6">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember Me
              </label>

              <a
                href="/forgot-password"
                className="text-blue-600 font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
              Sign In
              <ArrowRight size={18} />
            </button>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 border-t"></div>
              <span className="px-4 text-gray-400">OR</span>
              <div className="flex-1 border-t"></div>
            </div>

            {/* Google Login */}
            <button className="w-full border py-4 rounded-xl font-medium hover:bg-gray-50 transition">
              Continue with Google
            </button>

            {/* Signup */}
            <p className="text-center mt-8 text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 font-semibold"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;