const PremiumFeatures = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-green-900 text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mx-2">Add-on premium features</h2>

        {/* Feature Boxes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#03150c] p-6 rounded-2xl text-left mx-3">
            <h3 className="text-lg font-semibold">3K CRM message</h3>
            <p className="text-white mt-2">
              Re-engaged with affiliates to increase post rate and content
              quality and build a community of highly engaged creators.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#03150c] p-6 rounded-2xl text-left mx-3">
            <h3 className="text-lg font-semibold">Social intelligence</h3>
            <p className="text-white mt-2">
              Leverage AI to uncover trends, winning hooks, and competitor
              insights to inform your marketing, brand, and competitive
              strategy.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#03150c] p-6 rounded-2xl text-left mx-3">
            <h3 className="text-lg font-semibold">AI video generation tool</h3>
            <p className="text-white mt-2">
              Select ideal creators, generate tailored scripts, and produce
              affordable & high-performing UGC effortlessly.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <p className="text-gray-300 mt-6 mx-3">
          Premium solutions can be added to any plan. Start a free trial or{" "}
          <a href="#" className="text-green-400 hover:underline">
            request a demo
          </a>{" "}
          to learn more.
        </p>
      </div>
    </div>
  );
};

export default PremiumFeatures;
