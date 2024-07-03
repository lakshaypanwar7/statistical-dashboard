// MetricCards.js
import React from "react";
import MetricCard from "./MetricCard";

const metrics = [
  { title: "Active Users", value: "1,234", icon: "👥", color: "blue" },
  { title: "New Sign-Ups", value: "456", icon: "📝", color: "green" },
  { title: "User Retention", value: "89%", icon: "🔄", color: "yellow" },
  { title: "User Engagement", value: "76%", icon: "📊", color: "red" },
  { title: "Content Views", value: "12,345", icon: "📺", color: "purple" },
  { title: "Sales Volume", value: "$789", icon: "💰", color: "indigo" },
  { title: "Error Rates", value: "1.2%", icon: "⚠️", color: "orange" },
];

const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricCards;
