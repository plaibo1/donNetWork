import React from "react";

export const AdvantagesCard = ({ title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <span className="text-lg">{description}</span>
    </div>
  );
};
