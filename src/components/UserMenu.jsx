import React, { useState } from "react";
import { LogOut, Settings, User as UserIcon } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import SettingsComponent from "./Settings";
import EditProfile from "./EditProfile";

export default function UserMenu({ isOpen, onClose, user }) {
  const { logout } = useAuth();
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleUserIconClick = () => {
    setIsEditProfileOpen(true);
  };

  const handleEditProfileClose = () => {
    setIsEditProfileOpen(false);
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  const handleSaveProfile = (updatedUser) => {
    // Update the user information
    user.username = updatedUser.username;
    user.profilePicture = updatedUser.profilePicture;
  };

  if (!isOpen) return null;

  return (
    <div className="absolute z-50 right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 ">
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex items-center gap-3" onClick={handleUserIconClick}>
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center cursor-pointer">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <UserIcon
                className="text-blue-600 dark:text-blue-300"
                size={20}
              />
            )}
          </div>
          <div>
            <h4 className="font-medium dark:text-white">{user?.username}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user?.email}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded">
            {user?.role}
          </span>
        </div>
      </div>
      <div className="p-2">
        <button
          className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          onClick={handleSettingsClick}
        >
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <button
          onClick={logout}
          className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Edit Profile */}
      {isEditProfileOpen && (
        <EditProfile
          user={user}
          onSave={handleSaveProfile}
          onClose={handleEditProfileClose}
        />
      )}

      {/* Settings */}
      {isSettingsOpen && (
        <SettingsComponent
          isOpen={isSettingsOpen}
          onClose={handleSettingsClose}
        />
      )}
    </div>
  );
}
