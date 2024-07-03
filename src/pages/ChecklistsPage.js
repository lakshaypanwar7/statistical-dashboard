// src/pages/ChecklistsPage.js
import React from "react";
import { Link } from "react-router-dom";

const ChecklistsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Checklists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">Completed Checklist Items</h3>
          <p className="text-gray-400">
            Review the checklist items that have been completed.
          </p>
          <Link
            to="/completed-checklist"
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">
            Incomplete Checklist Items
          </h3>
          <p className="text-gray-400">
            See which checklist items are still pending.
          </p>
          <Link
            to="/incomplete-checklist"
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">
            User Created Checklist Items
          </h3>
          <p className="text-gray-400">
            Explore the checklist items created by users.
          </p>
          <Link
            to="/user-created-checklist"
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
        <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-xl mb-4">Edited Checklist Items</h3>
          <p className="text-gray-400">
            Find out which checklist items were edited, and see the dates and
            times of changes.
          </p>
          <Link
            to="/edited-checklist"
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChecklistsPage;
