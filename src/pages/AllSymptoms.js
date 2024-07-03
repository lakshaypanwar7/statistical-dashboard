// src/pages/AllSymptoms.js
import React from "react";

const AllSymptoms = () => {
  // Placeholder for symptoms list data
  const symptoms = [
    "Symptom 1",
    "Symptom 2",
    "Symptom 3",
    // Add more symptoms as needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Symptoms</h2>
      <ul className="list-disc list-inside">
        {symptoms.map((symptom, index) => (
          <li key={index} className="mb-2">
            {symptom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllSymptoms;
