import React from "react";

export default function Settings({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="absolute z-50 right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 p-4">
      <h3 className="text-lg font-bold dark:text-white mb-4">Settings</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium dark:text-white">Setting 1</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium dark:text-white">Setting 2</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}