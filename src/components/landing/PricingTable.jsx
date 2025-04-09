"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="bg-gradient-to-r from-gray-900 to-green-900 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Our Pricing Is Simple</h2>
        <p className="text-white">Limited Discount For Early Users</p>

        {/* Toggle Button */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <span className="text-gray-300">Monthly</span>
          <div
            className="relative w-14 h-7 bg-transparent border border-white rounded-full flex items-center p-0 cursor-pointer"
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
          >
            <div
              className={`w-6 h-6 bg-green-700 rounded-full shadow-md transform transition-transform ${
                billingCycle === "yearly"
                  ? "translate-x-7 m-0"
                  : "translate-x-0 m-1"
              }`}
            />
          </div>
          <span className="text-gray-300">Yearly</span>
          <span className="text-orange-400 text-sm ml-2">Save up to 20%</span>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 m-3">
          {/* Starter Plan */}
          <div className="bg-[#03150c] p-8 rounded-xl text-left ">
            <h3 className="text-xl font-semibold text-white">Starter</h3>
            <p className="text-white">Ideal for new TikTok Shops</p>
            <p className="text-4xl font-bold mt-4 text-green-400">$199</p>
            <ul className="mt-4 space-y-3 text-white">
              <li className="flex items-center">
                <FaCheck className="text-green-400 mr-2" />
                Up to 10k messages per month
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-400 mr-2" />
                Basic access to CRM
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-400 mr-2" />
                Cold start support with one free affiliate video
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-400 mr-2" />
                Basic customer support via Discord
              </li>
            </ul>
            <button className="mt-6 w-full bg-white text-black py-2 rounded-md font-semibold">
              Start 7-day free trial
            </button>
          </div>

          {/* Growth Plan */}
          <div className="bg-[#03150c] p-8 rounded-xl text-white text-left">
            <h3 className="text-xl font-semibold">Growth</h3>
            <p className="text-white">Recommended for scaling TikTok Shops</p>
            <p className="text-4xl font-bold mt-4 text-green-400">$479</p>
            <ul className="mt-4 space-y-3">
              {[
                "Unlimited messages, invites & emails",
                "Premium access to CRM",
                "Automated spark code collections",
                "AI-powered creator search and list building",
                "Automated outreach to competitors’ creators",
                "Automated creative briefing",
                "Premium access to social intelligence tool",
                "Premium access to AI video generation tool",
                "Free strategy sessions",
                "Intelligent dashboard and reporting",
                "Premium support via Email or WhatsApp",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-white text-black py-2 rounded-md font-semibold">
              Start 7-day free trial
            </button>
          </div>

          {/* Agency Plan */}
          <div className="bg-[#03150c] p-8 rounded-xl text-left text-white ">
            <h3 className="text-xl font-semibold">Agency</h3>
            <p className="text-white">
              Perfect for agencies managing multiple TikTok Shops
            </p>
            <p className="text-4xl font-bold mt-4 text-green-400">Contact us</p>
            <ul className="mt-4 space-y-3">
              {[
                "Unlimited access to Euka",
                "Volume discounts",
                "Dedicated account manager",
                "VIP support via Slack",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="text-green-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-white text-black py-2 rounded-md font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
