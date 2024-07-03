import React from "react";

const Charts = () => (
  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-4">
        User Retention Trend
      </h2>
      <div className="h-64 bg-gray-200 dark:bg-dark-bg rounded-lg"></div>
    </div>
    <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-4">
        Sales Volume by Month
      </h2>
      <div className="h-64 bg-gray-200 dark:bg-dark-bg rounded-lg"></div>
    </div>
  </div>
);

export default Charts;
