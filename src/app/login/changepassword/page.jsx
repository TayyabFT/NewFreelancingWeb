"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaReact } from "react-icons/fa";

import { changePasswordRequest } from "@/features/forgotpassword";
export default function Page() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("resetEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const result = await changePasswordRequest(
        email,
        password,
        confirmPassword
      );

      if (result.status === 200) {
        alert("Password changed successfully!");
        localStorage.removeItem("email");
        router.push("/login");
      } else {
        alert(result.message || "Failed to change password");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full bg-gradient-to-b from-blue-900 to-black text-white flex flex-col justify-center items-start px-6 md:px-20 py-12 md:m-12 rounded-none md:rounded-xl relative">
        <div className="flex items-center mb-6">
          <FaReact className="text-4xl mr-2 text-blue-400" />
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
      </div>{" "}
      {/* Right side */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">
            Enter Your New Password
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Enter Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 rounded"
            >
              Change password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
