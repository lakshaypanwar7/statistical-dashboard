// src/pages/MotherSymptoms.js
import React from "react";

const MotherSymptoms = () => {
  // Placeholder for mother's symptoms list data
  const motherSymptoms = [
    "Week 6 : Stomach Aches, Concession",
    "Week 8 : Vomitting",
    "Week 18 : Nausea",
    // Add more symptoms as needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mother's Symptoms</h2>
      <ul className="list-disc list-inside">
        {motherSymptoms.map((symptom, index) => (
          <li key={index} className="mb-2">
            {symptom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MotherSymptoms;
