import { FaCheck } from "react-icons/fa6";

const FeaturesList = () => {
  const features = [
    "Top creators for a product",
    "Top selling points",
    "Winning hooks",
    "Trending video formats",
    "Top sellers in a niche",
    "Video performance",
  ];

  return (
    <div className="bg-white py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <FaCheck className="text-blue-500 w-5 h-5" />
              <span className="text-gray-800 text-sm font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
