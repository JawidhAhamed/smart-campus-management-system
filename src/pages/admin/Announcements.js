import React, { useState } from "react";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Classes Preparation",
      date: "24 May 2024",
    },
    {
      id: 2,
      title: "Fees Reminder",
      date: "12 May 2024",
    },
    {
      id: 3,
      title: "Parents Teacher Meeting",
      date: "10 May 2024",
    },
    {
      id: 4,
      title: "New Academic Session For Admission (2024-25)",
      date: "28 Apr 2024",
    },
    {
      id: 5,
      title: "Staff Meeting",
      date: "23 Apr 2024",
    },
  ]);

  const handleAddNew = () => {
    console.log("Add New Announcement clicked");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold dark:text-white mb-4 ">
          Announcement
        </h2>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900"
          onClick={handleAddNew}
        >
          + Add New
        </button>
      </div>

      <ul className="space-y-4">
        {announcements.map((announcement) => (
          <li
            key={announcement.id}
            className="flex items-start border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12 0H7m12 0v-3m-6 3v-6"
                  />
                </svg>
                <label
                  htmlFor={`announcement-${announcement.id}`}
                  className="text-lg font-medium"
                >
                  {announcement.title}
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Added on: {announcement.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
