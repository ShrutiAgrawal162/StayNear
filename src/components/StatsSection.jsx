import React from "react";
import {
  Heart,
  Calendar,
  Bell,
  Eye,
} from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      title: "Saved Properties",
      value: "12",
      icon: (
        <Heart
          size={24}
          className="text-blue-600"
        />
      ),
    },
    {
      title: "Active Bookings",
      value: "02",
      icon: (
        <Calendar
          size={24}
          className="text-indigo-600"
        />
      ),
    },
    {
      title: "Notifications",
      value: "05",
      icon: (
        <Bell
          size={24}
          className="text-orange-500"
        />
      ),
    },
    {
      title: "Recently Viewed",
      value: "18",
      icon: (
        <Eye
          size={24}
          className="text-green-600"
        />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 mt-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-900">
                {item.value}
              </h2>
            </div>

            <div className="bg-gray-100 p-3 rounded-xl">
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;