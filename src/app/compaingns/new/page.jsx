"use client";
import { useState } from "react";
import {
  FaBullseye,
  FaEnvelopeOpenText,
  FaRegEnvelope,
  FaCamera,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import MessageSetup from "@/components/dashboard/MessageSetup";
import TargetCreators from "@/components/dashboard/TargetCreators";
// import { saveBotData } from "@/utils/api"; // Import the fetch method
import { saveBotdata } from "@/features/newbot"; // Import the fetch method
const botTypes = [
  {
    title: "Target Collaboration Only",
    description:
      "Send target collaboration invitations. Previously invited creators will be invited to this collaboration if they haven’t accepted a previous one.",
    icon: <FaBullseye size={28} className="text-blue-600" />,
  },
  {
    title: "Message + Open Collab Product Card",
    description:
      "Send an open collaboration product card followed by a message",
    icon: <FaEnvelopeOpenText size={28} className="text-blue-500" />,
  },
  {
    title: "Message + Target Collab Product Card",
    description:
      "Invite the creator to a target collaboration, then send a target collaboration product card followed by a message. This will count as two messages sent.",
    icon: <FaRegEnvelope size={28} className="text-pink-500" />,
  },
  {
    title: "Message + Photo",
    description:
      "Send a message with a photo. Only .png and .jpg files are supported.",
    icon: <FaCamera size={28} className="text-yellow-500" />,
  },
  {
    title: "Message Only",
    description: "Deliver just a message to your target audience.",
    icon: <FaPaperPlane size={28} className="text-gray-500" />,
  },
];

export const handleSave = async (botData) => {
  try {
    const response = await saveBotdata(botData);
    if (response.ok) {
      // Handle success
    } else {
      // Handle error
    }
  } catch (error) {
    console.error("Error saving bot data:", error);
  }
};

function BotDetails({
  onNext,
  botName,
  setBotName,
  productIds,
  setProductIds,
  sendToAll,
  setSendToAll,
}) {
  const [productInput, setProductInput] = useState("");

  const handleAddProduct = () => {
    if (productInput.trim()) {
      setProductIds((prev) => [...prev, productInput.trim()]);
      setProductInput("");
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-medium mb-2">Bot Details</h2>
      <p className="mb-2">Specify your bot name and other details.</p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Enter bot name</label>
        <input
          type="text"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Enter bot name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Products</label>
        <input
          type="text"
          value={productInput}
          onChange={(e) => setProductInput(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Add TikTok Shop Product ID"
        />
        <button
          className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-md"
          onClick={handleAddProduct}
        >
          Add
        </button>
        <ul className="mt-2 list-disc pl-5">
          {productIds.map((id, index) => (
            <li key={index} className="text-sm text-gray-700">
              {id}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={sendToAll}
          onChange={(e) => setSendToAll(e.target.checked)}
        />
        <span>Send to all</span>
      </div>
      <div className="mt-8 flex justify-between">
        <button
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          onClick={() => onNext("selectBotType")}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => onNext("messageSetup")}
        >
          Message Setup
        </button>
      </div>
    </div>
  );
}

export default function CreateNewBotPage() {
  const [selectedCreators, setSelectedCreators] = useState([]);
  const [currentStep, setCurrentStep] = useState("selectBotType");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [botName, setBotName] = useState("");
  const [productIds, setProductIds] = useState([]);
  const [sendToAll, setSendToAll] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [preferredContentType, setPreferredContentType] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [commissionPercentage, setCommissionPercentage] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [sampleOffer, setSampleOffer] = useState(false);
  const [manualReview, setManualReview] = useState(false);
  const [invitationName, setInvitationName] = useState("");
  const [category, setCategory] = useState("");
  const [last_month_gmv, setLastMonthGmv] = useState("");
  const [follower_count, setFollowerCount] = useState("");
  const [post_fulfillment_rate, setPostFulfillmentRate] = useState("");
  const [creator_gender, setCreatorGender] = useState("");
  const [language, setLanguage] = useState("");
  const [follower_age_min, setFollowerAgeMin] = useState("");
  const [follower_age_max, setFollowerAgeMax] = useState("");
  const [follower_gender, setFollowerGender] = useState("");
  const [engagement_rate, setEngagementRate] = useState("");
  const [avg_shoppable_video_views, setAvgShoppableVideoViews] = useState("");
  const [avg_live_views, setAvgLiveViews] = useState("");

  const onSaveClick = () => {
    const userId = localStorage.getItem("UserID");
    const botData = {
      bot_name: botName,
      bot_type: botTypes[selectedIndex].title.replace(/\s+/g, ""),
      status: "active",
      product_ids: productIds,
      send_to_all: sendToAll,
      userId: userId,
      email_address: emailAddress,
      contact_number: contactNumber,
      preferred_content_type: preferredContentType,
      content_type: "Text",
      message_content: messageContent,
      commission_percentage: commissionPercentage,
      include_shop_ads_commission: true,
      valid_until: validUntil,
      sample_offer: sampleOffer,
      manual_review: manualReview,
      invitation_name: invitationName,
      category: category,
      last_month_gmv: last_month_gmv,
      follower_count: follower_count,
      post_fulfillment_rate: post_fulfillment_rate,
      creator_gender: creator_gender,
      language: language,
      follower_age_min: follower_age_min,
      follower_age_max: follower_age_max,
      follower_gender: follower_gender,
      engagement_rate: engagement_rate,
      avg_shoppable_video_views: avg_shoppable_video_views,
      avg_live_views: avg_live_views,
    };
    handleSave(botData);
  };
  const handleNext = (step) => {
    setCurrentStep(step);
  };
  return (
    <div className="p-8 w-[80%]">
      <h1 className="text-2xl font-semibold mb-6">New Bot</h1>
      <div className="flex gap-10">
        <aside className="w-1/4 text-gray-600">
          <ul className="space-y-4">
            <li
              className={`font-semibold ${
                currentStep === "selectBotType" ? "text-blue-600" : ""
              }`}
            >
              1. Select your bot type
            </li>
            <li
              className={`${
                currentStep === "botDetails"
                  ? "font-semibold text-blue-600"
                  : "text-gray-400"
              }`}
            >
              2. Bot Details
            </li>
            <li
              className={`${
                currentStep === "messageSetup"
                  ? "font-semibold text-blue-600"
                  : "text-gray-400"
              }`}
            >
              3. Message Setup
            </li>
            <li
              className={`${
                currentStep === "targetCreators"
                  ? "font-semibold text-blue-600"
                  : "text-gray-400"
              }`}
            >
              4. Target Creators
            </li>
          </ul>
        </aside>

        <div className="w-3/4">
          {currentStep === "selectBotType" && (
            <>
              <h2 className="text-xl font-medium mb-2">Select your bot type</h2>
              <p className="mb-6 text-gray-500">
                Choose the best bot type to streamline your outreach and connect
                with creators effectively.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {botTypes.map((bot, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-5 cursor-pointer transition shadow-sm ${
                      selectedIndex === index
                        ? "border-blue-500 bg-blue-50"
                        : "hover:border-blue-300"
                    }`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <div className="mb-3">{bot.icon}</div>
                    <h3 className="font-semibold mb-2">{bot.title}</h3>
                    <p className="text-sm text-gray-600">{bot.description}</p>
                    {selectedIndex === index && (
                      <div className="mt-2 text-blue-600 flex items-center text-sm">
                        <FaCheckCircle className="w-4 h-4 mr-1" />
                        Selected bot type
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  Back
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={() => handleNext("botDetails")}
                >
                  Bot Details
                </button>
              </div>
            </>
          )}

          {currentStep === "botDetails" && (
            <BotDetails
              botName={botName}
              setBotName={setBotName}
              productIds={productIds}
              setProductIds={setProductIds}
              onNext={handleNext}
              sendToAll={sendToAll}
              setSendToAll={setSendToAll}
            />
          )}
          {currentStep === "messageSetup" && (
            <MessageSetup
              invitationName={invitationName}
              sampleOffer={sampleOffer}
              onNext={handleNext}
              commissionPercentage={commissionPercentage}
              validUntil={validUntil}
              setCommissionPercentage={setCommissionPercentage}
              setInvitationName={setInvitationName}
              setValidUntil={setValidUntil}
              setEmailAddress={setEmailAddress}
              setMessageContent={setMessageContent}
              setContactNumber={setContactNumber}
              setPreferredContentType={setPreferredContentType}
              setSampleOffer={setSampleOffer}
              setManualReview={setManualReview}
              setSendToAll={setSendToAll}
              contactNumber={contactNumber}
            />
          )}
          {currentStep === "targetCreators" && (
            <TargetCreators
              onPrevious={() => handleNext("messageSetup")}
              setSendToAll={setSendToAll}
              setPreferredContentType={setPreferredContentType}
              setSampleOffer={setSampleOffer}
              setManualReview={setManualReview}
              setSelectedCreators={setSelectedCreators}
              onSaveClick={onSaveClick} // <-- pass it here
              category={category}
              setCategory={setCategory}
              last_month_gmv={last_month_gmv}
              setLastMonthGmv={setLastMonthGmv}
              follower_count={follower_count}
              setFollowerCount={setFollowerCount}
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
              avg_live_views={avg_live_views}
              setAvgLiveViews={setAvgLiveViews}
            />
          )}
        </div>
      </div>
    </div>
  );
}
