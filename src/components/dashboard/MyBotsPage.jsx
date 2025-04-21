// app/my-bots/page.jsx
"use client";
import { useRouter } from "next/navigation";
const mockBots = [
  {
    name: "High GMV target Apr 2025",
    type: "Target Collaboration Only",
    reached: 5603,
    replies: 6,
    samples: 10,
    remaining: 1515,
    status: "Running",
    date: "6 days ago",
  },
  {
    name: "Tiktok provided list April 2025",
    type: "Target Collaboration Only",
    reached: 4075,
    replies: 7,
    samples: 11,
    remaining: 0,
    status: "Stopped",
    date: "9 days ago",
  },
  {
    name: "Sample posted bot",
    type: "Message + Open Collab Product Card",
    reached: 1859,
    replies: 173,
    samples: 101,
    remaining: 1837,
    status: "Stopped",
    date: "5 months ago",
  },
  {
    name: "Creators who are Showcasing",
    type: "Message Only",
    reached: 1259,
    replies: 324,
    samples: 0,
    remaining: 395,
    status: "Stopped",
    date: "7 months ago",
  },
  {
    name: "Content Unfulfilled bot",
    type: "Message Only",
    reached: 680,
    replies: 53,
    samples: 0,
    remaining: 181,
    status: "Stopped",
    date: "7 months ago",
  },
];

export default function MyBotsPage() {
  const router = useRouter();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 shadow rounded">
          <p className="text-sm text-gray-500">Target Invites Sent</p>
          <p className="text-2xl font-semibold">129971</p>
          <p className="text-xs text-gray-400">
            Weekly new creator limit / max quota reached
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <p className="text-sm text-gray-500">Messages Sent</p>
          <p className="text-2xl font-semibold">100678</p>
          <p className="text-xs text-gray-400">
            Weekly new creator limit reached
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <p className="text-sm text-gray-500">Message Reply Rate</p>
          <p className="text-2xl font-semibold">6.74%</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl font-bold">My Bots</h2>
        <button className="border px-3 py-1 text-sm rounded">
          Best Practices Guide
        </button>
        <button className="border px-3 py-1 text-sm rounded">
          Check Weekly Outreach Limits
        </button>
        <button className="border px-3 py-1 text-sm rounded">
          Auto-Responder Bot
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded">
            Active
          </button>
          <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded">
            Archived
          </button>
        </div>
        <div className="flex gap-4">
          <select className="border p-2 text-sm rounded">
            <option>All</option>
          </select>
          <select className="border p-2 text-sm rounded">
            <option>All</option>
          </select>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
            onClick={() => router.push("/compaingns/new")}
          >
            + New Bot
          </button>
        </div>
      </div>

      <table className="w-full text-left bg-white shadow rounded">
        <thead className="border-b">
          <tr className="text-gray-600 text-sm">
            <th className="p-3">Bot Name</th>
            <th className="p-3">Message Type</th>
            <th className="p-3">Creators Reached</th>
            <th className="p-3">Replies</th>
            <th className="p-3">Sample Requests</th>
            <th className="p-3">Remaining Creators</th>
            <th className="p-3">Bot Status</th>
            <th className="p-3">Created Date</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockBots.map((bot, i) => (
            <tr key={i} className="border-b hover:bg-gray-50 text-sm">
              <td className="p-3">{bot.name}</td>
              <td className="p-3">{bot.type}</td>
              <td className="p-3">{bot.reached}</td>
              <td className="p-3">{bot.replies}</td>
              <td className="p-3">{bot.samples}</td>
              <td className="p-3">{bot.remaining}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    bot.status === "Running"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {bot.status}
                </span>
              </td>
              <td className="p-3">{bot.date}</td>
              <td className="p-3">
                <button
                  className={`text-sm px-4 py-1 rounded ${
                    bot.status === "Running"
                      ? "bg-red-200 text-red-800"
                      : "bg-blue-200 text-blue-800"
                  }`}
                >
                  {bot.status === "Running" ? "Stop" : "Start"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
