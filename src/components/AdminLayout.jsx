import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ user }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <AdminSidebar />
      <div className="flex-1 ">
        <TopBar user={user} />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
