import Sidebar from "./Sidebar";
export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%]">
        <h1>main content</h1>
      </div>
    </div>
  );
}
