import React from "react";

const BookingCard = ({
  image,
  propertyName,
  location,
  checkIn,
  checkOut,
  rent,
  status,
}) => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-4 hover:shadow-md transition">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={propertyName}
            className="w-20 h-20 rounded-xl object-cover"
          />

          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              {propertyName}
            </h3>

            <p className="text-gray-500 text-sm">
              📍 {location}
            </p>
          </div>
        </div>

        {/* Booking Details */}
        <div className="grid grid-cols-2 md:flex gap-6">

          <div>
            <p className="text-gray-500 text-sm">
              Check-in
            </p>

            <p className="font-medium">
              {checkIn}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Check-out
            </p>

            <p className="font-medium">
              {checkOut}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Rent
            </p>

            <p className="font-semibold text-blue-600">
              {rent}
            </p>
          </div>

        </div>

        {/* Status & Button */}
        <div className="flex flex-col gap-3 items-start md:items-end">

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              status === "Confirmed"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {status}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>

        </div>

      </div>

    </div>
  );
};

export default BookingCard;