import React from "react";
import OwnerNavbar from "../components/OwnerNavbar";
import Footer from "../components/Footer";
import {
  CheckCircle,
  XCircle,
  Phone,
  Mail,
} from "lucide-react";

const bookingRequests = [
  {
    id: 1,
    student: "Rahul Sharma",
    property: "Sunrise Student PG",
    date: "10 June 2026",
    phone: "+91 9876543210",
    email: "rahul@gmail.com",
    status: "Pending",
  },
  {
    id: 2,
    student: "Priya Singh",
    property: "Green View PG",
    date: "09 June 2026",
    phone: "+91 9876501234",
    email: "priya@gmail.com",
    status: "Pending",
  },
  {
    id: 3,
    student: "Aman Verma",
    property: "Elite Boys Hostel",
    date: "08 June 2026",
    phone: "+91 9876512345",
    email: "aman@gmail.com",
    status: "Pending",
  },
];

const BookingRequests = () => {
  return (
    <>
      <OwnerNavbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Booking Requests
            </h1>

            <p className="text-gray-600 mt-2">
              Review and manage student booking requests.
            </p>
          </div>

          {/* Requests */}
          <div className="space-y-6">

            {bookingRequests.map((request) => (
              <div
                key={request.id}
                className="bg-white rounded-3xl shadow-md p-6"
              >

                <div className="flex flex-col lg:flex-row justify-between gap-6">

                  {/* Student Info */}
                  <div>
                    <h2 className="text-2xl font-bold">
                      {request.student}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      Property: {request.property}
                    </p>

                    <p className="text-gray-500 mt-1">
                      Requested On: {request.date}
                    </p>

                    <div className="mt-3 space-y-2">

                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone size={16} />
                        <span>{request.phone}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail size={16} />
                        <span>{request.email}</span>
                      </div>

                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3">

                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-center">
                      {request.status}
                    </span>

                    <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                      <CheckCircle size={18} />
                      Approve
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl">
                      <XCircle size={18} />
                      Reject
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

export default BookingRequests;