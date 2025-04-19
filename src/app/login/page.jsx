"use client";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { loginUser } from "@/assets/features/login";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    try {
      const res = await loginUser(email, password);
      alert("Login successful!");
      console.log("Response:", res);
      // optionally redirect or store token here
    } catch (err) {
      console.error(err);
      setError(err.message);
      alert("Login unsuccessful: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side */}
      <div className="md:w-1/2 w-full bg-gradient-to-b from-green-900 to-black text-white flex flex-col justify-center items-start px-6 md:px-20 py-12 md:m-12 rounded-none md:rounded-xl relative">
        <div className="flex items-center mb-6">
          <FaReact className="text-4xl mr-2 text-green-400" />
          <span className="text-2xl font-bold">AffiliTok</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Find the right creators.
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Boost sales.
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Grow your brand.
        </h3>
        <div
          className="absolute bottom-4 left-6 right-6 md:left-auto md:right-auto flex flex-wrap gap-3 text-sm md:text-base"
          suppressHydrationWarning
        >
          <span className="font-bold">BetterAlt.</span>
          <span className="font-semibold">nello™</span>
          <span className="font-semibold">DREAM PAIRS</span>
          <span className="font-bold">The Ordinary.</span>
          <span className="italic">Mia McAmor</span>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Log In</h2>
          <p className="text-sm text-gray-600 mb-6">
            Continue growing your brand with TikTok creators.
          </p>
          {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Your Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                suppressHydrationWarning
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3fcf8e] hover:bg-[#34b27b] text-white font-semibold py-2 rounded"
            >
              Sign in
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot your password?
            </a>
            <br />
            <a href="/signup" className="text-sm text-gray-600 hover:underline">
              Don't have an account? Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
