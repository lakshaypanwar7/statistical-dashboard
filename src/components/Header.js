// src/components/Header.js
import React from "react";

const Header = () => (
  <header className="bg-white dark:bg-dark-card shadow p-4 flex items-center justify-between">
    <h1 className="text-xl font-bold text-gray-800 dark:text-dark-text">
      Dashboard
    </h1>
    <div className="flex items-center">
      <img
        className="w-8 h-8 rounded-full"
        src="/path/to/logo.png" // Update the path as needed
        alt="User Profile"
      />
    </div>
  </header>
);

export default Header;
