import React from "react";
import MetricCard from "./MetricCard";

const Home = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <MetricCard
      title="Total Users"
      value="2,345"
      color="text-blue-500" // Adjust the color of the icon
      icon={<i className="fas fa-users"></i>}
      link="/total-users"
    />
    <MetricCard
      title="Mother Accounts"
      value="1,200"
      color="text-pink-500"
      icon={<i className="fas fa-female"></i>}
    />
    <MetricCard
      title="Father Accounts"
      value="1,145"
      color="text-blue-500"
      icon={<i className="fas fa-male"></i>}
    />
    <MetricCard
      title="Connected Accounts"
      value="1,100"
      color="text-green-500"
      icon={<i className="fas fa-link"></i>}
    />
    <MetricCard
      title="Single Accounts"
      value="1,245"
      color="text-yellow-500"
      icon={<i className="fas fa-user"></i>}
    />
  </div>
);

export default Home;
