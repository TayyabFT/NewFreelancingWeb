"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full max-w-6xl flex items-center py-4 mx-auto fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md mt-10"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo and Euka aligned to the far left */}
      <div className="flex items-center gap-2 text-lg font-semibold">
        <FaLeaf
          className={`${isScrolled ? "text-green-500" : "text-green-400"}`}
        />
        <span
          className={`px-3 py-1 rounded-lg ${
            isScrolled ? "bg-gray-200 text-black" : "bg-gray-700 text-white"
          }`}
        >
          Euka
        </span>
      </div>

      {/* Middle section with links */}
      <div className="flex items-center gap-6 ml-auto">
        <Link
          href="/"
          className={`${isScrolled ? "text-black" : "text-green-400"}`}
        >
          Home
        </Link>
        <Link
          href="/case-studies"
          className={`${isScrolled ? "text-black" : ""}`}
        >
          Case Studies
        </Link>
        <Link href="/pricing" className={`${isScrolled ? "text-black" : ""}`}>
          Pricing
        </Link>
        <Link
          href="/find-affiliates"
          className={`${isScrolled ? "text-black" : ""}`}
        >
          Find Affiliates
        </Link>
        <Link href="/about" className={`${isScrolled ? "text-black" : ""}`}>
          About
        </Link>
        <Link href="/blog" className={`${isScrolled ? "text-black" : ""}`}>
          Blog
        </Link>
      </div>

      {/* Sign Up and Login buttons aligned to the far right */}
      <div className="flex items-center gap-4 ml-auto">
        <Link
          href="/signup"
          className={`${isScrolled ? "text-black" : "text-white"}`}
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className={`border px-3 py-1 rounded-lg hover:bg-green-500 transition-colors duration-600 ${
            isScrolled ? "border-black text-black" : "border-white text-white"
          }`}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
