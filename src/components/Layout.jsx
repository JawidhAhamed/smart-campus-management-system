import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Layout({ user }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar />
      <div className="flex-1">
        <TopBar user={user} />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}