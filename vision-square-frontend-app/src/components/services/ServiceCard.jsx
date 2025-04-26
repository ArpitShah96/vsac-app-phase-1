import React, { useState } from "react";

const ServiceCard = ({ title, description, image, detailedDescription }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="w-full sm:w-80 md:w-96 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <img
        className="w-full h-44 sm:h-52 md:h-56 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-950">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2">{description}</p>

        {showDetails && (
          <p className="text-sm sm:text-base text-gray-700 mt-3">
            {detailedDescription}
          </p>
        )}

        <button
          className="text-red-700 mt-3 text-sm sm:text-base font-medium hover:underline"
          onClick={toggleDetails}
        >
          {showDetails ? "Show Less" : "Learn More"}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
