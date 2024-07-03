// src/pages/MiscellaneousPage.js
import React from "react";

const MiscellaneousPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Miscellaneous</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">Content Pieces Watched</h3>
          <p className="text-gray-400">
            Track the content pieces watched by users.
          </p>
        </div>
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">Specialists Added</h3>
          <p className="text-gray-400">
            View the number of specialists added by users.
          </p>
        </div>
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">
            Mental Health Input Selected
          </h3>
          <p className="text-gray-400">
            Check the mental health inputs selected by users.
          </p>
        </div>
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">Ovulation Usage</h3>
          <p className="text-gray-400">
            See how many users are tracking ovulation.
          </p>
        </div>
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">Paused or Cancelled Users</h3>
          <p className="text-gray-400">
            Monitor the users who have paused or cancelled their usage.
          </p>
        </div>
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">
            Suggested Products and Doctors
          </h3>
          <p className="text-gray-400">
            Find out how many users have suggested products or doctors.
          </p>
        </div>
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">Feedback and Functions</h3>
          <p className="text-gray-400">
            Review the feedback and functions provided by users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousPage;
