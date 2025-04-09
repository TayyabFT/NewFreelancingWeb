import React from "react";
import { FaArrowUp } from "react-icons/fa";

const TikTokSales = () => {
  return (
    <div className="bg-white py-12 px-4">
      {/* Header */}
      <h2 className="text-center text-2xl font-bold text-green-900 mb-8">
        Drive TikTok Shop sales with AffiliTok
      </h2>

      {/* Stats Cards */}
      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-green-900 text-white rounded-lg p-6 flex flex-col items-center justify-center">
          <p className="text-sm font-medium mb-2">
            Avg. Increase in Creator partnerships
          </p>
          <div className="flex items-center space-x-2 text-4xl font-bold">
            <FaArrowUp className="text-white text-base" />
            <span>50%</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 text-green-900 rounded-lg p-6 flex flex-col items-center justify-center">
          <p className="text-sm font-medium mb-2">Avg Increase in sales</p>
          <div className="flex items-center space-x-2 text-4xl font-bold">
            <FaArrowUp className="text-green-900 text-base" />
            <span>36%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokSales;
