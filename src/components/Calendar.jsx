import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  BellIcon,
} from "@heroicons/react/solid";

const events = [
  {
    id: 1,
    title: "New Syllabus Instructions",
    date: "13 March 2025",
    time: "10:00 AM - 11:00 AM",
  },
  {
    id: 2,
    title: "New Syllabus Instructions",
    date: "13 March 2025",
    time: "10:00 AM - 11:00 AM",
  },
  {
    id: 3,
    title: "New Syllabus Instructions",
    date: "13 March 2025",
    time: "10:00 AM - 11:00 AM",
  },
];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(13);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-3">
        <button onClick={handlePrevMonth}>
          <ChevronLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
        <h2 className="text-lg font-semibold dark:text-white">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button onClick={handleNextMonth}>
          <ChevronRightIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 text-center text-gray-600 dark:text-gray-300 text-sm">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="font-medium">
            {day}
          </div>
        ))}
        {[...Array(daysInMonth)].map((_, index) => {
          const day = index + 1;
          return (
            <div
              key={day}
              className={`p-2 rounded-lg cursor-pointer ${
                day === selectedDate
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSelectedDate(day)}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Upcoming Events */}
      <div className="mt-4">
        <h3 className="text-md font-semibold mb-2 dark:text-white">
          Upcoming Events
        </h3>
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center bg-gray-100 dark:bg-gray-700 p-2 rounded-lg mb-2"
          >
            <BellIcon className="h-6 w-6 text-green-500 mr-3" />
            <div>
              <p className="font-medium dark:text-white">{event.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {event.date}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
