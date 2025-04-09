import socialListing from "@/assets/images/socialListing.png";
import Image from "next/image";

const SocialListing = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-green-900 min-h-screen flex flex-col items-center justify-center text-white">
      {/* Header Section */}
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4 mt-4">
          Social Listening and Content Analytics
        </h1>
        <p className="text-lg mb-6">
          AffiliTok helps eCommerce brands streamline influencer collaborations
          with automated outreach, performance tracking, and real-time insights
          to grow TikTok sales.
        </p>
        <button className="bg-green-800 hover:bg-green-400 text-white font-medium py-3 px-6 rounded-lg shadow-md transition">
          Learn more →
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-5xl">
        <Image
          src={socialListing}
          alt="Dashboard preview"
          className="rounded-xl shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default SocialListing;
