"use client";
import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { verifyOtp } from "@/features/forgotpassword";
export default function OTPVerificationPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const router = useRouter();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    const storedEmail = localStorage.getItem("resetEmail");

    try {
      const response = await verifyOtp(storedEmail, fullOtp);

      if (response.status === 200) {
        router.push("/login/changepassword");
      } else {
        alert(response.message || "Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/2 w-full bg-gradient-to-b from-blue-900 to-black text-white flex flex-col justify-center items-start px-6 md:px-20 py-12 md:m-12 rounded-none md:rounded-xl relative">
        <div className="flex items-center mb-6">
          <FaLeaf className="text-4xl mr-2 text-blue-400" />
          <span className="text-2xl font-bold">Euka</span>
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
        <div className="absolute bottom-4 left-6 right-6 md:left-auto md:right-auto flex flex-wrap gap-3 text-sm md:text-base">
          <span className="font-bold">BetterAlt.</span>
          <span className="font-semibold">nello™</span>
          <span className="font-semibold">DREAM PAIRS</span>
          <span className="font-bold">The Ordinary.</span>
          <span className="font-bold">WYZE</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Enter OTP to Verify</h2>
          <p className="text-gray-500 text-sm mb-6">
            Please enter the OTP sent to your email or click the reset password
            link provided in the same email to continue.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 mb-6">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className="w-12 h-14 text-center text-xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
              Submit
            </button>

            <p className="text-sm text-gray-600 mt-4">
              Didn't receive OTP code?{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Resend Code
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
