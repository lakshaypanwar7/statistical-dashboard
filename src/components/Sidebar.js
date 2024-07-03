// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="bg-blue-800 dark:bg-dark-bg text-white w-64 p-4 flex flex-col">
    <h2 className="text-lg font-bold mb-4">Company Name</h2>
    <nav className="flex flex-col">
      <Link
        to="/"
        className="p-2 rounded hover:bg-blue-700 dark:hover:bg-dark-primary"
      >
        Home
      </Link>
      <Link
        to="/symptoms"
        className="p-2 rounded hover:bg-blue-700 dark:hover:bg-dark-primary"
      >
        Symptoms
      </Link>
      <Link
        to="/checklists"
        className="p-2 rounded hover:bg-blue-700 dark:hover:bg-dark-primary"
      >
        Checklists
      </Link>

      <Link
        to="/miscellaneous"
        className="p-2 rounded hover:bg-blue-700 dark:hover:bg-dark-primary"
      >
        Miscellaneous
      </Link>
    </nav>
  </aside>
);

export default Sidebar;
