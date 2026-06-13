import React from "react";
import BookingCard from "./BookingCard";

const CurrentBookings = () => {
  const bookings = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      propertyName: "Sunrise Student PG",
      location: "Near BHU, Varanasi",
      checkIn: "01 Jun 2025",
      checkOut: "31 Dec 2025",
      rent: "₹8,500/month",
      status: "Confirmed",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
      propertyName: "Elite Boys Hostel",
      location: "Lanka, Varanasi",
      checkIn: "15 May 2025",
      checkOut: "14 Nov 2025",
      rent: "₹6,500/month",
      status: "Upcoming",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Current Bookings
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          View All Bookings
        </button>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            image={booking.image}
            propertyName={booking.propertyName}
            location={booking.location}
            checkIn={booking.checkIn}
            checkOut={booking.checkOut}
            rent={booking.rent}
            status={booking.status}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentBookings;