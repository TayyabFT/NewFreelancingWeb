"use client";
import { useState, useEffect } from "react";
import {
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function FilterModal({ isOpen, onClose }) {
  const [openSections, setOpenSections] = useState({
    general: false,
    creatorData: false,
    followerDemographics: false,
    videoPerformance: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="relative">
      {/* Right-side Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-xl transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-black"
            onClick={onClose}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>

          {/* Modal Title */}
          <h2 className="text-lg font-semibold mb-1">Filters</h2>
          <p className="text-gray-500 text-sm mb-5">
            To get started: use "General" category filters to select creators in
            your product category with past success in generating GMV, and then
            use the CRM to re-engage top performing creators.
          </p>

          {/* Section: General */}
          <div>
            <button
              onClick={() => toggleSection("general")}
              className="w-full flex justify-between items-center py-2 text-left text-gray-700 font-medium"
            >
              General
              {openSections.general ? (
                <ChevronDownIcon className="w-4 h-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </button>
            {openSections.general && (
              <div className="pl-1 text-sm text-gray-600 mb-2 space-y-3">
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Categories
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Categories</option>
                    <option>Beauty</option>
                    <option>Fashion</option>
                    <option>Electronics</option>
                    <option>Home</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Last Month GMV
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>TikTok Shop Monthly Sales</option>
                    <option>$0 - $1k</option>
                    <option>$1k - $10k</option>
                    <option>$10k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Follower Count
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Follower Count</option>
                    <option>1k - 10k</option>
                    <option>10k - 100k</option>
                    <option>100k - 1M</option>
                    <option>1M+</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Creator Data */}
          <div>
            <button
              onClick={() => toggleSection("creatorData")}
              className="w-full flex justify-between items-center py-2 text-left text-gray-700 font-medium"
            >
              Creator Data
              {openSections.creatorData ? (
                <ChevronDownIcon className="w-4 h-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </button>
            {openSections.creatorData && (
              <div className="pl-4 text-sm text-gray-600 mb-2">
                <p>• Number of Posts</p>
                <p>• Engagement Rate</p>
              </div>
            )}
          </div>

          {/* Follower Demographics */}
          <div>
            <button
              onClick={() => toggleSection("followerDemographics")}
              className="w-full flex justify-between items-center py-2 text-left text-gray-700 font-medium"
            >
              Follower Demographics
              {openSections.followerDemographics ? (
                <ChevronDownIcon className="w-4 h-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </button>
            {openSections.followerDemographics && (
              <div className="pl-4 text-sm text-gray-600 mb-2">
                <p>• Age Range</p>
                <p>• Gender</p>
              </div>
            )}
          </div>

          {/* Video Performance */}
          <div>
            <button
              onClick={() => toggleSection("videoPerformance")}
              className="w-full flex justify-between items-center py-2 text-left text-gray-700 font-medium"
            >
              Video Performance
              {openSections.videoPerformance ? (
                <ChevronDownIcon className="w-4 h-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </button>
            {openSections.videoPerformance && (
              <div className="pl-4 text-sm text-gray-600 mb-2">
                <p>• Avg Views</p>
                <p>• Watch Time</p>
              </div>
            )}
          </div>

          {/* Apply Button */}
          <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
