// src/pages/UsersByStage.js
import React from "react";

const UsersByStage = () => {
  // Sample data for users in each stage
  const stages = [
    { stage: "Pre-Conception", users: 120 },
    { stage: "Pregnancy", users: 200 },
    { stage: "Postpartum", users: 150 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users by Stage</h2>
      <div className="space-y-6">
        {stages.map((stageData, index) => (
          <div
            key={index}
            className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              {stageData.stage}
            </h3>
            <p className="text-white">Number of Users: {stageData.users}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersByStage;
