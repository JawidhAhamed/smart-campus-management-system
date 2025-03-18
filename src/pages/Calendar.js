import React, { useState } from "react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState("March 2025");
  const months = [
    "January 2025",
    "February 2025",
    "March 2025",
    "April 2025",
    "May 2025",
    "June 2025",
    "July 2025",
    "August 2025",
    "September 2025",
    "October 2025",
    "November 2025",
    "December 2025",
  ];

  const handlePrevMonth = () => {
    const index = months.indexOf(currentMonth);
    if (index > 0) setCurrentMonth(months[index - 1]);
  };

  const handleNextMonth = () => {
    const index = months.indexOf(currentMonth);
    if (index < months.length - 1) setCurrentMonth(months[index + 1]);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-white mb-4 md:mb-0">
          Calendar
        </h1>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          BUTTON
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <select className="border p-2 rounded">
            <option>Month</option>
          </select>
          <select className="border p-2 rounded w-48">
            <option>All modules</option>
          </select>
        </div>
        <button className="bg-slate-400 p-1.5">New Event</button>
      </div>
      <div className="flex justify-between items-center mb-2">
        <button onClick={handlePrevMonth} className="text-blue-500">
          {months[months.indexOf(currentMonth) - 1] || ""}
        </button>
        <h3 className="text-xl font-bold">{currentMonth}</h3>
        <button onClick={handleNextMonth} className="text-blue-500">
          {months[months.indexOf(currentMonth) + 1] || ""}
        </button>
      </div>
      <div className="grid grid-cols-7 bg-gray-100 text-center p-2 font-semibold">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center border border-gray-300">
        {[...Array(31)].map((_, index) => (
          <div key={index} className="p-4 border border-gray-200">
            {index + 1}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button className="border px-4 py-2 rounded">Export calendar</button>
        <button className="border px-4 py-2 rounded">
          Manage subscriptions
        </button>
      </div>
    </div>
  );
};

export default Calendar;
