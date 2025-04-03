import Link from "next/link";

export default function PartnershipSection() {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">
            We’re transforming TikTok Shop marketing through the power of
            AI-driven creator partnerships.
          </h2>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-gray-700">
            At Euka AI, we've built the intelligent infrastructure that's
            defining the future of social commerce. Our AI-powered platform
            helps leading TikTok Shop brands discover, connect with, and manage
            creator relationships at scale – turning authentic content into
            measurable sales growth.
          </p>
          <Link
            href="/learn-more"
            className="text-gray-500 font-semibold mt-4 inline-block hover:text-green-500 transition duration-600"
          >
            Learn more →
          </Link>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="mt-20 flex flex-wrap justify-center gap-12 text-gray-800 mb-10">
        <span className="font-semibold">DREAM PAIRS</span>
        <span className="font-bold">BetterAlt.</span>
        <span className="font-semibold">nello™</span>
        <span className="font-bold">The Ordinary.</span>
        <span className="italic">Mia McAmor</span>
        <span className="font-bold">WYZE</span>
        <span className="font-bold">boom.boom™</span>
        <span className="font-bold">⚫ Positiv</span>
      </div>
    </div>
  );
}
