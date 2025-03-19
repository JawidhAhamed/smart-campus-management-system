import NoticeBoard from "../../components/NoticeBoard";
import Calendar from "../../components/Calendar";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaClock } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../../contexts/AuthContext";

const classSchedules = [
  { time: "09:00 - 09:45", class: "Class V, B", type: "past" },
  { time: "09:00 - 09:45", class: "Class IV, C", type: "past" },
  { time: "11:30 - 12:15", class: "Class V, B", type: "upcoming" },
  { time: "01:30 - 02:15", class: "Class V, B", type: "upcoming" },
];

export default function LecturerDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevDay = () => {
    setSelectedDate((prev) => new Date(prev.setDate(prev.getDate() - 1)));
  };

  const handleNextDay = () => {
    setSelectedDate((prev) => new Date(prev.setDate(prev.getDate() + 1)));
  };

  const { user } = useAuth();
  console.log(user);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center pt-14 justify-between">
        <h1 className="text-3xl font-bold dark:text-white">
          Lecturer Dashboard
        </h1>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          BUTTON
        </button>
      </div>

      {/* Welcome Section */}
      <div className="bg-[#3F51B5] text-white p-8 rounded-xl">
        <h1 className="text-2xl font-semibold">
          Welcome Back, Mr {user?.username }
        </h1>
      </div>

      {/* Class Time */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Today's Class</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevDay}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <FaChevronLeft />
            </button>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd, MMMM yyyy"
              className="p-2 border rounded-lg text-center cursor-pointer"
            />
            <button
              onClick={handleNextDay}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {classSchedules.map((schedule, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 text-white rounded-md ${
                  schedule.type === "past" ? "bg-red-500" : "bg-blue-500"
                }`}
              >
                <FaClock /> {schedule.time}
              </div>
              <p className="mt-2 text-gray-800">{schedule.class}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
        <div className="w-full md:w-1/2">
          <NoticeBoard />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-md rounded-lg border border-b-2 mb-2 p-4 w-full">
            <h1>Schedules</h1>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 border border-blue-600 rounded-md"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add New
            </button>
          </div>
          <Calendar />
        </div>
      </div>
    </div>
  );
}
