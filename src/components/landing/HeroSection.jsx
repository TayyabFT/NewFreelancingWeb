import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-4xl md:text-5xl font-bold">
        Turn <span className="text-green-400">TikTok Affiliates</span> Into a
        Revenue-
        <span className="block">Generating Engine</span>
      </h1>
      <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
        Euka’s AI-driven platform takes the manual work out of affiliate
        marketing, helping you focus on sales growth.
      </p>
      <div className="mt-6 flex gap-4 justify-center">
        <Link
          href="/get-started"
          className="bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          Get Started →
        </Link>
        <Link
          href="/book-demo"
          className="border border-white px-6 py-3 rounded-lg"
        >
          Book a Demo
        </Link>
      </div>
    </div>
  );
}
