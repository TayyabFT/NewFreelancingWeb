import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-900 h-screen flex flex-col items-center justify-center text-white p-6 rounded-xl m-3">
      <div className="text-center mt-16 w-full max-w-4xl h-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Turn <span className="text-blue-400">TikTok Affiliates</span> Into a
          Revenue-
          <span className="block">Generating Engine</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          AffiliTok’s AI-driven platform takes the manual work out of affiliate
          marketing, helping you focus on sales growth.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            href="/get-started"
            className="bg-blue-500 text-white px-3 py-3 rounded-lg hover:bg-blue-800  transition duration-600"
          >
            Get Started →
          </Link>
          <Link
            href="/book-demo"
            className="border border-white px-3 py-3 rounded-lg hover:bg-blue-500 trasition duration-600"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
