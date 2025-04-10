"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 mt-3">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between py-4 px-6 ${
          isScrolled
            ? "bg-white text-black shadow-md rounded-lg mt-2"
            : "bg-transparent text-white mt-2"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaReact className={isScrolled ? "text-blue-400" : "text-blue-400"} />
          <span
            className={`px-3 py-1 rounded-lg whitespace-nowrap ${
              isScrolled ? "bg-gray-200 text-black" : "bg-gray-700 text-white"
            }`}
          >
            AffiliTok
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {[
            "Home",
            "Case Studies",
            "Pricing",
            "Find Affiliates",
            "About",
            "Blog",
            "Made by Fiza",
          ].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className={isScrolled ? "text-black" : "text-white"}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Sign Up & Login (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => router.push("/signup")}
            className={`border px-3 py-1 rounded-lg hover:bg-blue-500 transition-colors duration-300 ${
              isScrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/login")}
            className={`border px-3 py-1 rounded-lg hover:bg-blue-500 transition-colors duration-300 ${
              isScrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-xl focus:outline-none z-50 ${
            menuOpen || isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-transparent bg-opacity-60 z-40 flex justify-end"
        >
          <div className="w-64 bg-white h-full shadow-lg flex flex-col p-6 space-y-4">
            {[
              "Home",
              "Case Studies",
              "Pricing",
              "Find Affiliates",
              "About",
              "Blog",
              "Made by Fiza",
            ].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-black text-lg py-2 border-b border-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/signup"
              className="text-black text-md mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="border border-black px-3 py-2 rounded-lg text-center text-black"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
