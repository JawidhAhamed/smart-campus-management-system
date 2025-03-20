import { useState } from "react";

export default function Assignments() {
  const [sessionFilter, setSessionFilter] = useState("All");
  const [semesterFilter, setSemesterFilter] = useState("All");

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy assignment data
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Course Work 1",
      course: "KU-SE",
      session: "SDP",
      semester: 1,
      dueDate: "21.03.2025",
      status: "Pending",
    },
    {
      id: 2,
      title: "Course Work 1",
      course: "KU-SE",
      session: "SDP",
      semester: 1,
      dueDate: "21.03.2025",
      status: "Submitted",
    },
    {
      id: 3,
      title: "Course Work 1",
      course: "KU-SE",
      session: "SDP",
      semester: 1,
      dueDate: "21.03.2025",
      status: "Pending",
    },
  ]);

  // Function to handle filter change
  const handleFilterChange = (filterType, value) => {
    if (filterType === "session") {
      setSessionFilter(value);
    } else if (filterType === "semester") {
      setSemesterFilter(value);
    }
  };

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter assignments based on filters and search query
  const filteredAssignments = assignments.filter((assignment) => {
    const sessionMatch =
      sessionFilter === "All" || assignment.session === sessionFilter;
    const semesterMatch =
      semesterFilter === "All" ||
      assignment.semester.toString() === semesterFilter;
    const searchMatch = assignment.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return sessionMatch && semesterMatch && searchMatch;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-white mb-4 md:mb-0">
          Assignments
        </h1>
      
      </div>

      <div className="mb-4 flex flex-col md:flex-row items-center">
        <div className="mr-2 w-full md:w-1/3 mb-4 md:mb-0">
          <label
            htmlFor="sessionFilter"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Session
          </label>
          <select
            id="sessionFilter"
            value={sessionFilter}
            onChange={(e) => handleFilterChange("session", e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-600 dark:text-white"
          >
            <option value="All">All</option>
            <option value="SDP">SDP</option>
            {/* Add more session options as needed */}
          </select>
        </div>

        <div className="mr-2 w-full md:w-1/3 mb-4 md:mb-0">
          <label
            htmlFor="semesterFilter"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Semester
          </label>
          <select
            id="semesterFilter"
            value={semesterFilter}
            onChange={(e) => handleFilterChange("semester", e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-600 dark:text-white"
          >
            <option value="All">All</option>
            <option value="1">1</option>
            {/* Add more semester options as needed */}
          </select>
        </div>

        <button
          className="w-full mt-5 md:w-1/6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-800 dark:hover:bg-blue-900"
          onClick={() => {
            // Implement filter logic here if needed
          }}
        >
          Filter
        </button>
      </div>

      <div className="mb-4 relative w-full md:w-1/3 ml-auto">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Session
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Semester
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {filteredAssignments.map((assignment) => (
              <tr key={assignment.id}>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                  {assignment.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                  {assignment.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                  {assignment.course}
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                  {assignment.session}
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                  {assignment.semester}
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                  {assignment.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                  {assignment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button className="text-blue-500 dark:text-blue-300">← Previous</button>
        <span className="dark:text-white">1</span>
        <button className="text-blue-500 dark:text-blue-300">Next →</button>
      </div>
    </div>
  );
}
