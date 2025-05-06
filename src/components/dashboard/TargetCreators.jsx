"use client";
import { useState } from "react";
import FilterModal from "./FilterModal";
const creatorsData = [
  {
    name: "POP MART US SHOP (@popmart)",
    followers: "299.3K",
    gmv: "$3.7M",
    avgShoppableVideos: 0,
    avgLiveViews: "535.1K",
    categories: "Toys & Hobbies, Collectibles, Phones & Electronics",
  },
  {
    name: "CANVAS BEAUTY BRAND (@canvasbeauty)",
    followers: "503.2K",
    gmv: "$2M",
    avgShoppableVideos: 3,
    avgLiveViews: "1.4M",
    categories: "Beauty & Personal Care, Luggage & Bags, Health",
  },
  {
    name: "simplymandys (@simplymandys)",
    followers: "344.3K",
    gmv: "$1M",
    avgShoppableVideos: 0,
    avgLiveViews: "412.9K",
    categories: "Beauty & Personal Care, Health, Household Appliances",
  },
];

export default function TargetCreators({
  onPrevious,
  setSendToAll,
  setPreferredContentType,
  setSampleOffer,
  setManualReview,
  onSaveClick,
  category,
  setCategory,
  last_month_gmv,
  setLastMonthGmv,
  follower_count,
  setFollowerCount,
  avg_live_views,
  setAvgLiveViews,
  avg_shoppable_videos_count,
  setAvgShoppableVideosCount,
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
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-1">Target Creators</h2>
      <p className="text-gray-600 mb-5">
        Use filters to select which creators to target, or choose from an
        uploaded list of creators.
      </p>

      {/* Toggle Buttons */}
      <div className="flex items-center justify-between mb-4">
        <div className="space-x-2">
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md font-medium">
            By Filters
          </button>
          <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100">
            By List
          </button>
        </div>

        {/* Filters Button */}
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Filters
        </button>
        <FilterModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          category={category}
          setCategory={setCategory}
          last_month_gmv={last_month_gmv}
          setLastMonthGmv={setLastMonthGmv}
          follower_count={follower_count}
          setFollowerCount={setFollowerCount}
          avg_live_views={avg_live_views}
          setAvgLiveViews={setAvgLiveViews}
          avg_shoppable_videos_count={avg_shoppable_videos_count}
          setAvgShoppableVideosCount={setAvgShoppableVideosCount}
          post_fulfillment_rate={post_fulfillment_rate}
          setPostFulfillmentRate={setPostFulfillmentRate}
          creator_gender={creator_gender}
          setCreatorGender={setCreatorGender}
          language={language}
          setLanguage={setLanguage}
          follower_age_min={follower_age_min}
          setFollowerAgeMin={setFollowerAgeMin}
          follower_age_max={follower_age_max}
          setFollowerAgeMax={setFollowerAgeMax}
          follower_gender={follower_gender}
          setFollowerGender={setFollowerGender}
          engagement_rate={engagement_rate}
          setEngagementRate={setEngagementRate}
          avg_shoppable_video_views={avg_shoppable_video_views}
          setAvgShoppableVideoViews={setAvgShoppableVideoViews}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 text-left">
            <tr>
              <th className="p-3 font-semibold">Name</th>
              <th className="p-3 font-semibold">Followers</th>
              <th className="p-3 font-semibold">GMV</th>
              <th className="p-3 font-semibold">Avg Shoppable Videos</th>
              <th className="p-3 font-semibold">Avg Live Views</th>
              <th className="p-3 font-semibold">Categories</th>
            </tr>
          </thead>
          <tbody>
            {creatorsData.map((creator, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3">{creator.name}</td>
                <td className="p-3">{creator.followers}</td>
                <td className="p-3">{creator.gmv}</td>
                <td className="p-3">{creator.avgShoppableVideos}</td>
                <td className="p-3">{creator.avgLiveViews}</td>
                <td className="p-3">{creator.categories}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8 flex justify-between">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => onSaveClick()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
