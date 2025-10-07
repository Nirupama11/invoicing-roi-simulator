import React from "react";

function ResultCard() {
  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-full max-w-md text-center">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        ROI Result
      </h3>
      <p className="text-gray-600">Your ROI will appear here after calculation.</p>
    </div>
  );
}

export default ResultCard;
