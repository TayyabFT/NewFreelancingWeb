import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import videoimg from "@/assets/images/videoimg.png";
export default function AutomationSection() {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-snug">
            Manually messaging and managing affiliates sucks. <br />
            Automate everything with AffiliTok
          </h2>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start space-x-3">
              <FaCheck className="text-green-600 mt-1" />
              <span className="text-gray-700">
                Scout & reach out to 1000s of Top TikTok Shop affiliates
                automatically
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <FaCheck className="text-green-600 mt-1" />
              <span className="text-gray-700">
                Scale your outreach 5x faster, save 10x more time with
                AffiliTok’s AI Automation
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <FaCheck className="text-green-600 mt-1" />
              <span className="text-gray-700">
                Discover trends, generate winning videos with affiliates, and
                multiply content with AI
              </span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={videoimg} // Change to the actual image path
              alt="Euka AI Dashboard"
              width={600}
              height={350}
              className="opacity-90"
            />
          </div>

          {/* Demo Button */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 flex items-center gap-2 rounded-lg shadow-lg text-gray-900 font-semibold hover:bg-gray-200 transition">
            ▶ Start the demo
          </button>
        </div>
      </div>
    </div>
  );
}
