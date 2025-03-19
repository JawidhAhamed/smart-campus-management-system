import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Edit } from "lucide-react";


const ExamResults = () => {
  const [semester, setSemester] = useState("All");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      student: "E660000",
      session: "SDP",
      semester: 1,
      attempt: 1,
      grade: "A+",
      status: "Pass",
    },
    {
      id: 2,
      student: "E660001",
      session: "SDP",
      semester: 1,
      attempt: 1,
      grade: "A",
      status: "Pass",
    },
    {
      id: 3,
      student: "E660002",
      session: "SDP",
      semester: 1,
      attempt: 1,
      grade: "B+",
      status: "Pass",
    },
  ]);

  const handleFilter = () => {
    let filteredData = data;

    if (semester !== "All") {
      filteredData = filteredData.filter(
        (item) => item.semester.toString() === semester
      );
    }

    return filteredData;
  };

  // Filter data based on search and filter criteria
  const filteredData = handleFilter().filter((item) =>
    item.student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-white mb-4 md:mb-0">
          Exams & Results
        </h1>
      </div>
      {/* Filter Section */}
      <div className="flex flex-wrap items-center gap-4 bg-white py-4">
        <select
          className="border p-2 rounded w-40"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="All">Semester - All</option>
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
        </select>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center ml-auto"
          onClick={handleFilter}
        >
          <FaSearch className="mr-2" /> Filter
        </button>
      </div>
      {/* Search Input */}
      <div className="my-4 flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Results Table */}
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-2">#</th>
              <th className="p-2">Student</th>
              <th className="p-2">Session</th>
              <th className="p-2">Semester</th>
              <th className="p-2">Attempt</th>
              <th className="p-2">Grade</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="text-center border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.student}</td>
                <td className="p-2">{item.session}</td>
                <td className="p-2">{item.semester}</td>
                <td className="p-2">{item.attempt}</td>
                <td className="p-2">{item.grade}</td>
                <td className="p-2 text-green-500">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button className="border p-2 rounded">← Previous</button>
        <span>1</span>
        <button className="border p-2 rounded">Next →</button>
      </div>
    </div>
  );
};

export default ExamResults;
