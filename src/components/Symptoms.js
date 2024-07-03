// src/components/Symptoms.js
import React from "react";
import MetricCard from "./MetricCard";

const Symptoms = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <MetricCard
      title="Total Symptoms"
      value="1,000"
      color="red"
      icon={<i className="fas fa-thermometer"></i>}
      link="/symptoms-list" // Link to a detailed symptoms list page
    />
    <MetricCard
      title="Mother Symptoms"
      value="400"
      color="pink"
      icon={<i className="fas fa-female"></i>}
    />
    <MetricCard
      title="Father Symptoms"
      value="350"
      color="blue"
      icon={<i className="fas fa-male"></i>}
    />
    <MetricCard
      title="Newborn Symptoms"
      value="250"
      color="green"
      icon={<i className="fas fa-baby"></i>}
    />
  </div>
);

export default Symptoms;
