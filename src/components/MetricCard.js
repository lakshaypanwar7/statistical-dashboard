import React from "react";

const MetricCard = ({ title, value, color, icon, link }) => (
  <div
    className={`bg-gray-700 text-white p-4 rounded-lg shadow-md flex items-center justify-between w-full h-40`}
  >
    <div className="flex items-center">
      <div className={`text-3xl mr-4 ${color}`}>{icon}</div>
      <div>
        <h3 className="text-lg">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
    {link && (
      <a href={link} className="text-blue-500 hover:underline">
        More Info
      </a>
    )}
  </div>
);

export default MetricCard;
