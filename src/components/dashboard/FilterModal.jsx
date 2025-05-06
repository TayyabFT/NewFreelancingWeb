"use client";
import { useState } from "react";
import {
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const genderOptions = ["Male", "Female", "Other"];

export default function FilterModal({
  isOpen,
  onClose,
  category,
  setCategory,
  last_month_gmv,
  setLastMonthGmv,
  follower_count,
  setFollowerCount,
  avg_live_views,
  setAvgLiveViews,
  post_fulfillment_rate,
  setPostFulfillmentRate,
  creator_gender,
  setCreatorGender,
  language,
  setLanguage,
  follower_age_min,
  setFollowerAgeMin,
  follower_age_max,
  setFollowerAgeMax,
  follower_gender,
  setFollowerGender,
  engagement_rate,
  setEngagementRate,
  avg_shoppable_video_views,
  setAvgShoppableVideoViews,
}) {
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
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
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
                  <select
                    value={last_month_gmv}
                    onChange={(e) => setLastMonthGmv(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>TikTok Shop Monthly Sales in Dollars</option>
                    <option>10</option>
                    <option>1000</option>
                    <option>10000</option>
                    <option>100000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Follower Count
                  </label>
                  <select
                    value={follower_count}
                    onChange={(e) => setFollowerCount(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Follower Count</option>
                    <option>10000</option>
                    <option>100000</option>
                    <option>1000000</option>
                    <option>10000000</option>
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
              <div className="pl-1 text-sm text-gray-600 mb-2 space-y-4">
                {/* Post Fulfillment Rate */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Post Fulfillment Rate
                  </label>
                  <select
                    value={post_fulfillment_rate}
                    onChange={(e) => setPostFulfillmentRate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Post Fulfillment Rate (%)</option>
                    <option>0</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                  </select>
                </div>

                {/* Gender */}
                <div>
                  <label className="block mb-1 font-medium">Gender</label>
                  <div className="flex gap-3">
                    {genderOptions.map((gender) => (
                      <button
                        key={gender}
                        className={`px-4 py-1 border rounded-full text-sm ${
                          creator_gender === gender
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => setCreatorGender(gender)}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-1">
                    Languages
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Languages</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
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
              <div className="pl-1 text-sm text-gray-600 mb-4 space-y-4">
                {/* Follower Age */}
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1">
                    Follower Age
                  </label>
                  <select
                    value={`${follower_age_min}-${follower_age_max}`}
                    onChange={(e) => {
                      const [min, max] = e.target.value.split("-");
                      setFollowerAgeMin(min);
                      setFollowerAgeMax(max);
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Follower Age</option>
                    <option>13-17</option>
                    <option>18-24</option>
                    <option>25-34</option>
                    <option>35-44</option>
                    <option>45+</option>
                  </select>
                </div>

                {/* Gender */}
                <div>
                  <label className="block mb-1 font-medium">Gender</label>
                  <div className="flex gap-3">
                    {genderOptions.map((gender) => (
                      <button
                        key={gender}
                        className={`px-4 py-1 border rounded-full text-sm ${
                          follower_gender === gender
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => setFollowerGender(gender)}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>
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
              <div className="pl-1 text-sm text-gray-600 mb-4 space-y-4">
                {/* Engagement Rate */}
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1">
                    Engagement Rate
                  </label>
                  <select
                    value={engagement_rate}
                    onChange={(e) => setEngagementRate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option>All</option>
                    <option>2</option>
                    <option>3</option>
                    <option>5</option>
                    <option>10</option>
                  </select>
                </div>

                {/* Average Shoppable Video Views */}
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1">
                    Average Shoppable Video Views
                  </label>
                  <select
                    value={avg_shoppable_video_views}
                    onChange={(e) => setAvgShoppableVideoViews(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Average Shoppable Video Views</option>
                    <option>0</option>
                    <option>101</option>
                    <option>1000</option>
                    <option>10000</option>
                  </select>
                </div>

                {/* Average Live Views */}
                <div>
                  <label className="block text-gray-700 font-semibold text-sm mb-1">
                    Average Live Views
                  </label>
                  <select
                    value={avg_live_views}
                    onChange={(e) => setAvgLiveViews(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Average Live Views</option>
                    <option>100</option>
                    <option>1000</option>
                    <option>10000</option>
                    <option>100000</option>
                  </select>
                </div>
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
