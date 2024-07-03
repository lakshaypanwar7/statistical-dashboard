// src/pages/FatherSymptoms.js
import React from "react";

const FatherSymptoms = () => {
  // Placeholder for father's symptoms list data
  const fatherSymptoms = [
    "Father Symptom 1",
    "Father Symptom 2",
    "Father Symptom 3",
    // Add more symptoms as needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Father's Symptoms</h2>
      <ul className="list-disc list-inside">
        {fatherSymptoms.map((symptom, index) => (
          <li key={index} className="mb-2">
            {symptom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FatherSymptoms;
