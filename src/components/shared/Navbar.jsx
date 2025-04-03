"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
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
    <nav
      className={`w-full max-w-6xl flex items-center justify-between py-4 px-6 mx-auto fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md p-3 rounded-lg"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-lg font-semibold">
        <FaLeaf className={isScrolled ? "text-green-500" : "text-green-400"} />
        <span
          className={`px-3 py-1 rounded-lg ${
            isScrolled ? "bg-gray-200 text-black" : "bg-gray-700 text-white"
          }`}
        >
          Euka
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
        ].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            className={isScrolled ? "text-black" : "text-green-400"}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Sign Up & Login (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href="/signup"
          className={isScrolled ? "text-black" : "text-white"}
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className={`border px-3 py-1 rounded-lg hover:bg-green-500 transition-colors duration-300 ${
            isScrolled ? "border-black text-black" : "border-white text-white"
          }`}
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        >
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col p-6">
            <button
              className="text-xl self-end mb-4"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
            {[
              "Home",
              "Case Studies",
              "Pricing",
              "Find Affiliates",
              "About",
              "Blog",
            ].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-black text-lg py-2 border-b border-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="mt-4">
              <Link href="/signup" className="block text-black py-2">
                Sign Up
              </Link>
              <Link
                href="/login"
                className="block border px-3 py-2 rounded-lg text-center text-black border-black mt-2"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
