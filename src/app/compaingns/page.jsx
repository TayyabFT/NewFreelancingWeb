"use client";
import { usePathname } from "next/navigation";
import MyBotsPage from "@/components/dashboard/MyBotsPage";
import Sidebar from "@/components/dashboard/Sidebar";
import CreateNewBotPage from "@/app/compaingns/new/page";

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex">
      <MyBotsPage />
    </div>
  );
}
