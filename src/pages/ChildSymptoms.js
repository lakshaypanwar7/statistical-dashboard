// src/pages/ChildSymptoms.js
import React from "react";

const ChildSymptoms = () => {
  // Placeholder for child's symptoms list data
  const childSymptoms = [
    "Child Symptom 1",
    "Child Symptom 2",
    "Child Symptom 3",
    // Add more symptoms as needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Child's Symptoms</h2>
      <ul className="list-disc list-inside">
        {childSymptoms.map((symptom, index) => (
          <li key={index} className="mb-2">
            {symptom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildSymptoms;
