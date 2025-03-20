import React, { useState } from "react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
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

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-white mb-4 md:mb-0">
          Calendar
        </h1>
      
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
          {months[currentMonth === 0 ? 11 : currentMonth - 1]}{" "}
          {currentMonth === 0 ? currentYear - 1 : currentYear}
        </button>
        <h3 className="text-xl font-bold">
          {months[currentMonth]} {currentYear}
        </h3>
        <button onClick={handleNextMonth} className="text-blue-500">
          {months[currentMonth === 11 ? 0 : currentMonth + 1]}{" "}
          {currentMonth === 11 ? currentYear + 1 : currentYear}
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
        {[...Array(daysInMonth)].map((_, index) => (
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
