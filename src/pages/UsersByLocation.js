// src/pages/UsersByLocation.js
import React from "react";

const UsersByLocation = () => {
  // Sample data for users in each location (for simplicity, using a static list)
  const locations = [
    { location: "New York", users: 1200 },
    { location: "Los Angeles", users: 950 },
    { location: "Chicago", users: 800 },
    { location: "Houston", users: 650 },
    { location: "Phoenix", users: 500 },
    { location: "Philadelphia", users: 450 },
    { location: "San Antonio", users: 400 },
    { location: "San Diego", users: 300 },
    { location: "Dallas", users: 200 },
    { location: "San Jose", users: 100 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users by Location</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 dark:bg-gray-900 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-bold text-white">
                Location
              </th>
              <th className="px-4 py-2 text-left text-sm font-bold text-white">
                Number of Users
              </th>
            </tr>
          </thead>
          <tbody>
            {locations.map((locationData, index) => (
              <tr key={index} className="hover:bg-gray-700 transition">
                <td className="px-4 py-2 text-white">
                  {locationData.location}
                </td>
                <td className="px-4 py-2 text-white">{locationData.users}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersByLocation;
