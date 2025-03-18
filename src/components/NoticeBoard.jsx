import React from "react";
import { BellIcon } from "@heroicons/react/solid";

const notices = [
  {
    id: 1,
    title: "New Syllabus Instructions",
    date: "11 Feb 2025",
    daysLeft: "25 Days",
  },
  {
    id: 2,
    title: "New Syllabus Instructions",
    date: "11 Feb 2025",
    daysLeft: "25 Days",
  },
  {
    id: 3,
    title: "New Syllabus Instructions",
    date: "11 Feb 2025",
    daysLeft: "25 Days",
  },
  {
    id: 4,
    title: "New Syllabus Instructions",
    date: "11 Feb 2025",
    daysLeft: "25 Days",
  },
  {
    id: 5,
    title: "New Syllabus Instructions",
    date: "11 Feb 2025",
    daysLeft: "25 Days",
  },
];

const NoticeBoard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold dark:text-white">Notice Board</h2>
        <button className="text-blue-600 dark:text-blue-300 hover:underline">
          View All
        </button>
      </div>
      <div className="space-y-3">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="flex justify-between items-center  dark:bg-gray-700 p-2 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <BellIcon className="h-6 w-6 text-green-500" />
              <div>
                <p className="font-medium dark:text-white">{notice.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Added on: {notice.date}
                </p>
              </div>
            </div>
            <span className=" dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm">
              {notice.daysLeft}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
