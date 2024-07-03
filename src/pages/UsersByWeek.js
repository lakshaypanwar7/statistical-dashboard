// src/pages/UsersByWeek.js
import React from "react";

const UsersByWeek = () => {
  // Sample data for users in each week (for simplicity, using a static range)
  const weeks = Array.from({ length: 40 }, (_, index) => ({
    week: index + 1,
    users: Math.floor(Math.random() * 100), // Random number of users for demo purposes
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users by Week</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 dark:bg-gray-900 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-bold text-white">
                Week
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-white">
                Number of Users
              </th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((weekData, index) => (
              <tr key={index} className="hover:bg-gray-700 transition">
                <td className="px-4 py-2 text-white">{weekData.week}</td>
                <td className="px-4 py-2 text-white">{weekData.users}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersByWeek;
