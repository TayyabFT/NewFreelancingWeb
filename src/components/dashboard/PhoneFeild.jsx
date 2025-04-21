"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function PhoneFeild() {
  const [phone, setPhone] = useState("");

  return (
    <div className="">
      <label className="block text-sm font-medium mb-2">Phone Number</label>
      <PhoneInput
        country={"us"} // Default country
        value={phone}
        onChange={(phone) => setPhone(phone)}
        inputClass="!w-full !h-12 !text-base !rounded-md !px-14 !border-gray-300 focus:!border-blue-500 focus:!shadow-md"
        containerClass="!w-full"
        buttonClass="!bg-white"
        enableSearch
      />
    </div>
  );
}
