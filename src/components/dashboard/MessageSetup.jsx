"use client";
import { useState } from "react";
import PhoneFeild from "./PhoneFeild";

export default function MessageSetup({
  onNext,
  sampleOffer,
  setMessageContent,
  setInvitationName,
  setCommissionPercentage,
  setValidUntil,
  setEmailAddress,
  setSampleOffer,
  setManualReview,
  invitationName,
  commissionPercentage,
  validUntil,
  manualReview,
  setContactNumber,
  contactNumber,
}) {
  const [notes, setNotes] = useState("");
  return (
    <div className="mt-6">
      <h2 className="text-xl font-medium mb-2">Customize Your Message</h2>
      <p className="mb-4">
        Build an outreach message sequence with an initial message and optional
        follow-ups. Follow-up messages will be sent only if the creator doesn't
        reply to the initial message.
      </p>

      {/* Offer Free Samples */}
      <div className="mb-4">
        <h3 className="font-semibold">Offer Free Samples</h3>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            className="mr-2"
            checked={sampleOffer}
            onChange={(e) => setSampleOffer(e.target.checked)}
          />
          <span>
            Each invited creator can request a free sample of every product in
            the invitation, including variations.
          </span>
        </div>

        {sampleOffer && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Review Options</h3>
            <div className="flex items-center mb-2">
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="manual"
                  name="reviewOption"
                  className="mr-2"
                  checked={manualReview === "manual"}
                  onChange={() => setManualReview("manual")}
                />
                <label htmlFor="manual">Manually Review Requests</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="auto"
                  name="reviewOption"
                  className="mr-2"
                  checked={manualReview === "auto"}
                  onChange={() => setManualReview("auto")}
                />
                <label htmlFor="auto">Auto Approve Requests</label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Notes & Right Panel */}
      <div className="flex gap-4 mb-4 mt-10">
        <div className="w-1/2">
          <h1 className="text-xl mb-3">Notes</h1>
          <p className="text-sm text-gray-500 mb-2">
            Give this invitation a name that's easy to remember. Creators won't
            see this name. During the valid period, creators can accept your
            invitation to collaborate and promote your products on TikTok.
            However, creators will lose the shoppable video link if the invite
            expires. Therefore, we recommend setting the valid until date to at
            least 3 months into the future.
          </p>
        </div>

        <div className="w-1/2 border-l pl-4 text-lg-gray-500">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Invitation Name
            </label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              value={invitationName}
              onChange={(e) => {
                setInvitationName(e.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Commission Percentage
            </label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              placeholder="Apply Smart Ads Commission"
              value={commissionPercentage}
              onChange={(e) => setCommissionPercentage(e.target.value)}
            />
          </div>

          <div>
            <input type="checkbox" className="mr-2" />
            <span>Enable shop ads for products in this collaboration.</span>
          </div>

          <div className="mb-4 mt-4">
            <label className="block text-sm font-medium mb-1">
              Valid Until
            </label>
            <input
              type="date"
              className="border rounded-md p-2 w-full"
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex gap-4 mb-4 mt-10">
        <div className="w-1/2">
          <h1 className="text-xl mb-3">Contact Info</h1>
          <p className="text-sm text-gray-500 mb-2">
            Add your contact info to connect with creators
          </p>
        </div>

        <div className="w-1/2 border-l pl-4 text-lg-gray-500">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="border rounded-md p-2 w-full"
              placeholder="Enter your email address"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <PhoneFeild
              contactNumber={contactNumber}
              setContactNumber={setContactNumber}
              // onChange={(number) => setContactNumber(number)}
            />
          </div>
        </div>
      </div>

      {/* Content Type */}
      <div className="flex gap-4 mb-4 mt-10">
        <div className="w-1/2">
          <h1 className="text-xl">Preferred Content Type</h1>
          <p className="text-sm text-gray-500 mb-2">
            Select the type of content you want to receive from creators. Let
            creators know if you have a preference between shoppable videos or
            LIVEs.
          </p>
        </div>

        <div className="w-1/2 border-l pl-4 text-lg-gray-500">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="border rounded-md p-2 w-full h-56 resize-none"
              placeholder="Enter your message"
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
                setMessageContent(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          onClick={() => onNext("botDetails")}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => onNext("targetCreators")}
        >
          Target Creators
        </button>
      </div>
    </div>
  );
}
