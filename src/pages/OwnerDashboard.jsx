import React from "react";
import OwnerNavbar from "../components/OwnerNavbar";
import Footer from "../components/Footer";

import {
  Building2,
  Calendar,
  Bell,
  IndianRupee,
  PlusCircle,
  Home,
  ClipboardList,
} from "lucide-react";

import { Link } from "react-router-dom";

const OwnerDashboard = () => {
  return (
    <>
      <OwnerNavbar />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome Back, Owner 👋
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your properties and booking requests.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">Properties</p>
                  <h2 className="text-3xl font-bold">12</h2>
                </div>

                <Building2
                  size={40}
                  className="text-blue-600"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">Bookings</p>
                  <h2 className="text-3xl font-bold">38</h2>
                </div>

                <Calendar
                  size={40}
                  className="text-green-600"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">
                    Pending Requests
                  </p>
                  <h2 className="text-3xl font-bold">7</h2>
                </div>

                <Bell
                  size={40}
                  className="text-orange-500"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">Revenue</p>
                  <h2 className="text-3xl font-bold">
                    ₹54,000
                  </h2>
                </div>

                <IndianRupee
                  size={40}
                  className="text-purple-600"
                />
              </div>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-10">

            <h2 className="text-2xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="grid md:grid-cols-3 gap-5">

              <Link to="/add-property">
                <div className="bg-blue-50 hover:bg-blue-100 transition p-6 rounded-xl cursor-pointer">
                  <PlusCircle
                    size={35}
                    className="text-blue-600 mb-3"
                  />

                  <h3 className="font-bold text-lg">
                    Add Property
                  </h3>

                  <p className="text-gray-600">
                    Add a new PG or Hostel listing.
                  </p>
                </div>
              </Link>

              <Link to="/my-properties">
                <div className="bg-green-50 hover:bg-green-100 transition p-6 rounded-xl cursor-pointer">
                  <Home
                    size={35}
                    className="text-green-600 mb-3"
                  />

                  <h3 className="font-bold text-lg">
                    My Properties
                  </h3>

                  <p className="text-gray-600">
                    Manage all your listed properties.
                  </p>
                </div>
              </Link>

              <Link to="/booking-requests">
                <div className="bg-orange-50 hover:bg-orange-100 transition p-6 rounded-xl cursor-pointer">
                  <ClipboardList
                    size={35}
                    className="text-orange-500 mb-3"
                  />

                  <h3 className="font-bold text-lg">
                    Booking Requests
                  </h3>

                  <p className="text-gray-600">
                    Review student booking requests.
                  </p>
                </div>
              </Link>

            </div>
          </div>

          {/* Recent Requests */}
          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">
              Recent Booking Requests
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">

                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">
                      Student
                    </th>

                    <th className="text-left py-3">
                      Property
                    </th>

                    <th className="text-left py-3">
                      Date
                    </th>

                    <th className="text-left py-3">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-b">
                    <td className="py-4">
                      Rahul Sharma
                    </td>

                    <td>
                      Sunrise Student PG
                    </td>

                    <td>
                      10 June 2026
                    </td>

                    <td>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                        Pending
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-4">
                      Priya Singh
                    </td>

                    <td>
                      Green View PG
                    </td>

                    <td>
                      09 June 2026
                    </td>

                    <td>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Approved
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4">
                      Aman Verma
                    </td>

                    <td>
                      Elite Boys Hostel
                    </td>

                    <td>
                      08 June 2026
                    </td>

                    <td>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        Rejected
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default OwnerDashboard;