import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  BookOpen,
  Calendar,
  GraduationCap,
  Folder,
  Menu,
  Book,
  X,
} from "lucide-react";

const navItems = [
  { path: "/", name: "HOME", icon: Home },
  { path: "/dashboard", name: "DASHBOARD", icon: LayoutDashboard },
  { path: "/assignments", name: "ASSIGNMENTS", icon: BookOpen },
  { path: "/calendar", name: "CALENDAR", icon: Calendar },
  { path: "/exams-results", name: "EXAMS & RESULTS", icon: GraduationCap },
  { path: "/courses", name: "COURSES", icon: Book },
  { path: "/private-files", name: "PRIVATE FILES", icon: Folder },
  { path: "/library", name: "LIBRARY", icon: BookOpen },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-[100] p-2 rounded-md bg-blue-600 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-16 w-full  left-0 max-h-full bg-white dark:bg-gray-800 shadow-xl transition-transform duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:w-2/12 lg:static`}
      >
        {/* Logo */}
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex items-center gap-4">
            {/* <GraduationCap className="text-[#F57C00]" size={32} /> */}
            <img
              src="/assets/images/l1.png"
              alt="Logo"
              className="w-[40px] h-[40px]"
            />
            <span className="text-xl font-bold dark:text-white">
              SDP Project
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-2">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-[#E3F2FD] dark:bg-blue-900 text-[#2196F3] dark:text-blue-300"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
