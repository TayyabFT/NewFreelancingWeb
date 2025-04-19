"use client";
import { useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiMail,
  FiList,
  FiSearch,
  FiUsers,
  FiFileText,
} from "react-icons/fi";

export default function Sidebar() {
  const [outreachOpen, setOutreachOpen] = useState(true);

  return (
    <div className="w-[20%] bg-white h-screen p-6 border-r border-gray-200">
      <h1 className="text-2xl font-bold mb-8">Euka</h1>

      <h2 className="text-lg font-semibold text-gray-500 mb-6">DASHBOARD</h2>

      {/* OUTREACH Section */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer mb-2"
          onClick={() => setOutreachOpen(!outreachOpen)}
        >
          <h3 className="font-medium">OUTREACH</h3>
          {outreachOpen ? <FiChevronDown /> : <FiChevronRight />}
        </div>

        {outreachOpen && (
          <div className="ml-4 space-y-2">
            <p className="text-sm text-gray-500">
              Find and reach out to creators efficiently via messages, invites,
              and emails.
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-2 text-gray-700">
                <FiMail className="text-gray-500" />
                <span>Email Campaigns</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <FiList className="text-gray-500" />
                <span>My Lists</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <FiSearch className="text-gray-500" />
                <span>Find Creators</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      {/* CRM Section */}
      <div className="mb-4">
        <h3 className="font-medium mb-4">CRM</h3>

        <div className="ml-4 space-y-3">
          <div className="flex items-center space-x-2 text-gray-700">
            <FiUsers className="text-gray-500" />
            <span>SOCIAL INTELLIGENCE</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FiFileText className="text-gray-500" />
            <span>CONTENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
