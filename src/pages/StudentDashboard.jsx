import React, { useState } from "react";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import WelcomeSection from "../components/WelcomeSection";
import StatsSection from "../components/StatsSection";
import FeaturedProperties from "../components/FeaturedProperties";
import CurrentBookings from "../components/CurrentBookings";

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <DashboardSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="w-full">

        {/* Navbar */}
        <DashboardNavbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Dashboard Content */}
        <div className="p-4 md:p-6">

          {/* Welcome Section */}
          <WelcomeSection userName="Alexa" />

          {/* Stats Section */}
          <StatsSection />

          {/* Main Sections */}
          <div className="mt-8 space-y-8">

            {/* Featured Properties */}
            <FeaturedProperties />

            {/* Current Bookings */}
            <CurrentBookings />

          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;