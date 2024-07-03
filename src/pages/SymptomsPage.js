// src/pages/SymptomsPage.js
import React from "react";
import MetricCard from "../components/MetricCard";
import { Link } from "react-router-dom";

const SymptomsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Link to="/all-symptoms">
        <MetricCard
          title="Total Symptoms"
          value="500"
          color="text-red-500"
          icon={<i className="fas fa-notes-medical"></i>}
        />
      </Link>
      <Link to="/mother-symptoms">
        <MetricCard
          title="Mother Symptoms"
          value="200"
          color="text-pink-500"
          icon={<i className="fas fa-female"></i>}
        />
      </Link>
      <Link to="/father-symptoms">
        <MetricCard
          title="Father Symptoms"
          value="150"
          color="text-blue-500"
          icon={<i className="fas fa-male"></i>}
        />
      </Link>
      <Link to="/child-symptoms">
        <MetricCard
          title="Child Symptoms"
          value="150"
          color="text-yellow-500"
          icon={<i className="fas fa-baby"></i>}
        />
      </Link>
    </div>
  );
};

export default SymptomsPage;
