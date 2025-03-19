import React, { useState } from "react";

export default function EditProfile({ user, onSave, onClose }) {
  const [newUsername, setNewUsername] = useState(user?.username || "");
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const handleSave = () => {
    const updatedUser = { ...user };
    if (newUsername) {
      updatedUser.username = newUsername;
    }
    if (newProfilePicture) {
      updatedUser.profilePicture = URL.createObjectURL(newProfilePicture);
    }
    onSave(updatedUser);
    onClose();
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewProfilePicture(e.target.files[0]);
    }
  };

  return (
    <div className="absolute z-50 right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 p-4">
      <h3 className="text-lg font-bold dark:text-white mb-4">Edit Profile</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium dark:text-white">
          Username
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium dark:text-white">
          Profile Picture
        </label>
        <input
          type="file"
          className="mt-1 block w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          onChange={handleProfilePictureChange}
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
