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

function BotDetails({ onNext }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-medium mb-2">Bot Details</h2>
      <p className="mb-2">Specify your bot name and other details.</p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Enter bot name</label>
        <input
          type="text"
          className="border rounded-md p-2 w-full"
          placeholder="Enter bot name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Products</label>
        <input
          type="text"
          className="border rounded-md p-2 w-full"
          placeholder="Add TikTok Shop Product ID"
        />
        <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-md">
          Add
        </button>
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" />
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
  const [currentStep, setCurrentStep] = useState("selectBotType");
  const [selectedIndex, setSelectedIndex] = useState(0);

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

          {currentStep === "botDetails" && <BotDetails onNext={handleNext} />}
          {currentStep === "messageSetup" && (
            <MessageSetup onNext={handleNext} />
          )}
          {currentStep === "targetCreators" && (
            <TargetCreators onPrevious={() => handleNext("messageSetup")} />
          )}
        </div>
      </div>
    </div>
  );
}
