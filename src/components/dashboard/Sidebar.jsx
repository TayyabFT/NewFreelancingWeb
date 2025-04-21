"use client";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";
import {
  FiGrid,
  FiBriefcase,
  FiPieChart,
  FiBarChart2,
  FiFileText,
  FiChevronDown,
} from "react-icons/fi";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FiGrid className="w-5 h-5" />,
    isDropdown: false,
  },
  {
    title: "Outreach",
    icon: <FiBriefcase className="w-5 h-5" />,
    isDropdown: true,
    items: ["My Bots ", "Find Creators"],
    textColor: " font-semibold",
  },
  {
    title: "CRM",
    icon: <FiPieChart className="w-5 h-5" />,
    isDropdown: true,
    items: ["Leads", "Contacts"],
  },
  {
    title: "Social Intelligence",
    icon: <FiBarChart2 className="w-5 h-5" />,
    isDropdown: true,
    items: ["Analytics", "Listening"],
  },
  {
    title: "Content",
    icon: <FiFileText className="w-5 h-5" />,
    isDropdown: true,
    items: ["Library", "Posts"],
  },
];

const Sidebar = () => {
  const [openTab, setOpenTab] = useState(null);
  const router = useRouter();
  const toggleTab = (title) => {
    setOpenTab(openTab === title ? null : title);
  };

  return (
    <div className="w-[20%] min-h-screen bg-gray-100 p-4 shadow space-y-8">
      {/* Logo */}
      <div className="flex items-center mb-12">
        <Image src={logo} alt="Euka Logo" className="w-6 h-6 mr-2 rounded-lg" />
        <span className="text-xl font-bold text-blue-900">Euka</span>
      </div>

      {/* Menu */}
      {menuItems.map(({ title, icon, isDropdown, items, textColor }, index) => (
        <div key={title}>
          <div
            className={`flex items-center justify-between cursor-pointer mb-2 hover:bg-blue-300 hover:text-blue-700 p-3 hover:rounded-xl ${
              textColor || "text-gray-600"
            } ${!isDropdown && "hover:text-black"}`}
            onClick={() => isDropdown && toggleTab(title)}
          >
            <div className="flex items-center space-x-2 font-medium">
              {icon}
              <span>{title}</span>
            </div>
            {isDropdown && (
              <FiChevronDown
                className={`w-4 h-4 transition-transform ${
                  openTab === title ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
          {isDropdown && openTab === title && (
            <ul className="ml-7 mb-2 text-sm text-gray-700 space-y-1">
              {items.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    if (item.trim() === "My Bots") router.push("/compaingns");
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          {/* Horizontal line after each section except last */}
          {index !== menuItems.length - 1 && (
            <hr className="border-gray-300 my-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
