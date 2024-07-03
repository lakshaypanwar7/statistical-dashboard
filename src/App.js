// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import TotalUsersPage from "./pages/TotalUsersPage";
import SymptomsPage from "./pages/SymptomsPage";
import AllSymptoms from "./pages/AllSymptoms";
import MotherSymptoms from "./pages/MotherSymptoms";
import FatherSymptoms from "./pages/FatherSymptoms";
import ChildSymptoms from "./pages/ChildSymptoms";

import UsersByStage from "./pages/UsersByStage"; // Import the new page
import UsersByWeek from "./pages/UsersByWeek"; // Import the new page
import UsersByLocation from "./pages/UsersByLocation"; // Import the new page
import ChecklistsPage from "./pages/ChecklistsPage";
import MiscellaneousPage from "./pages/MiscellaneousPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 dark:bg-dark-bg">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          <div className="p-4 flex justify-end">
            <button
              className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
              onClick={() => setDarkMode(!darkMode)}
            >
              Toggle Dark Mode
            </button>
          </div>
          <main className="flex-grow p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/symptoms" element={<SymptomsPage />} />
              <Route path="/total-users" element={<TotalUsersPage />} />
              <Route path="/all-symptoms" element={<AllSymptoms />} />
              <Route path="/mother-symptoms" element={<MotherSymptoms />} />
              <Route path="/father-symptoms" element={<FatherSymptoms />} />
              <Route path="/child-symptoms" element={<ChildSymptoms />} />
              <Route path="/users-by-stage" element={<UsersByStage />} />{" "}
              {/* Add route for UsersByStage */}
              <Route path="/users-by-week" element={<UsersByWeek />} />{" "}
              {/* Add route for UsersByWeek */}
              <Route
                path="/users-by-location"
                element={<UsersByLocation />}
              />{" "}
              <Route path="/checklists" element={<ChecklistsPage />} />
              <Route path="/miscellaneous" element={<MiscellaneousPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
