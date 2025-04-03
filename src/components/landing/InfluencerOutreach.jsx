import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import chatimg from "@/assets/images/chatimg.png";

export default function InfluencerOutreach() {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-snug">
            Influencer Outreach & <br /> Collab Management
          </h2>

          <p className="mt-4 text-gray-700">
            Reach out to 1000s affiliates via Direct Message, Target Collab, and
            Email automatically. Re-engage with affiliates, nurture and coach
            them to post high-converting videos.
          </p>

          <button className="mt-6 bg-green-900 text-white px-6 py-3 flex items-center gap-2 rounded-lg hover:bg-green-500 transition duration-600">
            Learn more <FaArrowRight />
          </button>
        </div>

        {/* Right Section (Just One Image) */}
        <div className="relative">
          <Image
            src={chatimg} // Replace with actual image path
            alt="Influencer Outreach"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
