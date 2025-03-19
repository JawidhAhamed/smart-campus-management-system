import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import LecturerSidebar from "./LecturerSidebar";

export default function LecturerLayout({ user }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex ">
      <LecturerSidebar />
      <div className="flex-1 ">
        <TopBar user={user} />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
