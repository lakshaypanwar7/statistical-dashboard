// src/pages/TotalUsersPage.js
import React from "react";
import MetricCard from "../components/MetricCard";

const TotalUsersPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Total Users Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Users by Stage"
          color="text-blue-500"
          icon={<i className="fas fa-users"></i>}
          link="/users-by-stage" // Assuming you'll add a link to detailed page later
        />
        <MetricCard
          title="Users by Week"
          color="text-green-500"
          icon={<i className="fas fa-calendar-week"></i>}
          link="/users-by-week" // Assuming you'll add a link to detailed page later
        />
        <MetricCard
          title="Users by loaction"
          color="text-green-500"
          icon={<i className="fa-solid fa-location-dot"></i>}
          link="/users-by-location" // Assuming you'll add a link to detailed page later
        />
        {/* Additional cards can be added here */}
      </div>
    </div>
  );
};

export default TotalUsersPage;
