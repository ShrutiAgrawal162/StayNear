import React from "react";
import BookingCard from "../components/BookingCard";

const MyBookings = () => {
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
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      propertyName: "Green View PG",
      location: "DLW, Varanasi",
      checkIn: "10 Jul 2025",
      checkOut: "10 Jan 2026",
      rent: "₹7,200/month",
      status: "Confirmed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          My Bookings
        </h1>

        <p className="text-gray-600 mb-8">
          View and manage all your accommodation bookings.
        </p>

        <div className="space-y-5">
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

    </div>
  );
};

export default MyBookings;