import { useState, useEffect, useRef } from "react";
import { Search, MessageSquare, Bell, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import NotificationPanel from "./NotificationPanel";
import UserMenu from "./UserMenu";
import MessageBox from "./MessageBox";
import { useAuth } from "../contexts/AuthContext";

const mockNotifications = [
  {
    id: 1,
    title: "New Assignment Posted",
    message: "A new assignment has been posted in SDP course.",
    time: "5 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    title: "Upcoming Deadline",
    message: "Project submission deadline is approaching.",
    time: "1 hour ago",
    isRead: true,
  },
  {
    id: 3,
    title: "Exam Schedule",
    message: "Mid-term exam schedule has been published.",
    time: "2 hours ago",
    isRead: false,
  },
];

const mockSuggestions = [
  "Assignment 1",
  "Assignment 2",
  "Project Submission",
  "Exam Schedule",
  "Course Material",
];

export default function TopBar() {
  const { isDark, toggleTheme } = useTheme();
  const { user, setUser } = useAuth();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const userMenuRef = useRef(null);

  useEffect(() => {
    console.log("TopBar user:", user);
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredSuggestions = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleSearch = () => {
    const filteredSuggestions = mockSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const handleSendMessage = (message) => {
    console.log("Message sent:", message);
  };

  return (
    <div className="bg-white fixed top-0 w-full pl-32 lg:pl-4 lg:w-10/12 dark:bg-gray-800 border-b dark:border-gray-700 px-4 py-3 flex items-center gap-4 z-50">
      {/* Search */}
      <div className="hidden md:flex w-1/3 relative">
        <input
          type="text"
          placeholder="SEARCH"
          className="w-full pl-4 pr-10 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          size={20}
          onClick={handleSearch}
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg mt-1 z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Academic Year */}
        <div className="hidden md:flex justify-center rounded-lg border border-gray-400 p-2 items-center gap-2 text-sm ml-auto">
          <span className="text-gray-500 dark:text-gray-400">
            Academic Year:
          </span>
          <span className="font-medium dark:text-white">2024/2025</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 ml-auto">
          <button
            className="hidden sm:block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border border-gray-400"
            onClick={() => setIsMessageBoxOpen(true)}
          >
            <MessageSquare
              size={20}
              className="text-gray-600 dark:text-gray-300"
            />
          </button>

          <div className="hidden sm:block relative">
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border border-gray-400"
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setIsUserMenuOpen(false);
              }}
            >
              <Bell size={20} className="text-gray-600 dark:text-gray-300" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            <NotificationPanel
              notifications={notifications}
              isOpen={isNotificationsOpen}
              onClose={() => setIsNotificationsOpen(false)}
              onMarkAsRead={handleMarkAsRead}
            />
          </div>

          <button
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border border-gray-400"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Moon size={20} className="text-gray-300" />
            ) : (
              <Sun size={20} className="text-gray-600" />
            )}
          </button>

          <div className="relative" ref={userMenuRef}>
            <button
              className="rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center border border-gray-400 ml-auto"
              onClick={() => {
                setIsUserMenuOpen(!isUserMenuOpen);
                setIsNotificationsOpen(false);
              }}
            >
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  className="text-blue-600 dark:text-blue-300 w-[35px] h-[35px] rounded-full"
                  alt="Profile"
                />
              ) : (
                <img
                  src="/assets/images/profile.png"
                  className="text-blue-600 dark:text-blue-300 w-[35px] h-[35px] rounded-full"
                  alt="Profile"
                />
              )}
            </button>
            <UserMenu
              isOpen={isUserMenuOpen}
              onClose={() => setIsUserMenuOpen(false)}
              user={user}
              onUpdateUser={handleUpdateUser}
            />
          </div>
        </div>
      </div>

      {/* Message Box */}
      <MessageBox
        isOpen={isMessageBoxOpen}
        onClose={() => setIsMessageBoxOpen(false)}
        onSend={handleSendMessage}
      />
    </div>
  );
}
