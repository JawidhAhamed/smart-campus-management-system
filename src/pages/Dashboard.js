import NoticeBoard from "../components/NoticeBoard";
import Calendar from "../components/Calendar";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const [courses, setCourses] = useState([
    { year: "2025", title: "Software Development Practise" },
    { year: "2024", title: "Database Management Systems" },
    { year: "2023", title: "Web Development" },
    { year: "2022", title: "Data Structures and Algorithms" },
  ]);

  const { user } = useAuth();
  console.log(user);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center pt-14 justify-between">
        <h1 className="text-3xl font-bold dark:text-white">
          Student Dashboard
        </h1>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          BUTTON
        </button>
      </div>

      {/* Welcome Section */}
      <div className="bg-[#3F51B5] text-white p-8 rounded-xl">
        <h1 className="text-2xl font-semibold">
          Welcome Back, Mr {user?.username}
        </h1>
      </div>

      {/* Recently accessed courses */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-3 dark:text-white">
          Recently accessed courses
        </h2>
        <div className="flex gap-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="border dark:border-gray-700 rounded-lg overflow-hidden mb-3 w-1/2"
            >
              <div className="h-16 bg-green-100 dark:bg-green-900 bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)),linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05))] bg-[size:20px_20px]"></div>
              <div className="p-3 bg-white dark:bg-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {course.year}
                </p>
                <p className="font-medium dark:text-white">{course.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start relative "
          >
            <div className="text-4xl">{item.icon}</div>
            <div className="text-3xl font-bold text-gray-800">{item.count}</div>
            <p className="text-gray-600">{item.title}</p>
            <span
              className={`absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-full ${item.color}`}
            >
              {item.percentage}
            </span>
            <div className="flex justify-between w-full mt-2 text-gray-600 text-sm">
              <span>
                Active: <strong>{item.active}</strong>
              </span>
              <span>
                Inactive: <strong>{item.inactive}</strong>
              </span>
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
        <div className="w-full md:w-1/2">
          <NoticeBoard />
        </div>
        <div className="w-full md:w-1/2">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
