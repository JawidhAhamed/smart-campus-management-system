import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { Edit } from "lucide-react";
import { useAuth } from "../contexts/AuthContext"; // Import useAuth

const ExamResults = () => {
  const { user } = useAuth(); // Get user from useAuth
  const [semester, setSemester] = useState("All");
  const [attempt, setAttempt] = useState("All");
  const [session, setSession] = useState("All"); // New state for session
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
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
      session: "MEC",
      semester: 1,
      attempt: 1,
      grade: "A",
      status: "Pass",
    },
    {
      id: 3,
      student: "E660002",
      session: "IT",
      semester: 1,
      attempt: 1,
      grade: "B+",
      status: "Pass",
    },
    {
      id: 4,
      student: "E660003",
      session: "SDP",
      semester: 2,
      attempt: 2,
      grade: "B",
      status: "Pass",
    },
  ]);

  const [newResult, setNewResult] = useState({
    student: "",
    session: "",
    semester: "",
    attempt: "",
    grade: "",
    status: "",
  });

  const [editResult, setEditResult] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = (result) => {
    let tempErrors = {};
    tempErrors.student = result.student ? "" : "This field is required.";
    tempErrors.session = result.session ? "" : "This field is required.";
    tempErrors.semester = result.semester ? "" : "This field is required.";
    tempErrors.attempt = result.attempt ? "" : "This field is required.";
    tempErrors.grade = result.grade ? "" : "This field is required.";
    tempErrors.status = result.status ? "" : "This field is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleAddResult = () => {
    if (validate(newResult)) {
      setData([...data, { ...newResult, id: data.length + 1 }]);
      setShowAddModal(false);
      setNewResult({
        student: "",
        session: "",
        semester: "",
        attempt: "",
        grade: "",
        status: "",
      });
      setErrors({});
    }
  };

  const handleEditResult = () => {
    if (validate(editResult)) {
      setData(
        data.map((item) =>
          item.id === editResult.id ? { ...editResult } : item
        )
      );
      setShowEditModal(false);
      setEditResult(null);
      setErrors({});
    }
  };

  const handleEditClick = (result) => {
    setEditResult(result);
    setErrors({});
    setShowEditModal(true);
  };

  const handleAddClick = () => {
    setNewResult({
      student: "",
      session: "",
      semester: "",
      attempt: "",
      grade: "",
      status: "",
    });
    setErrors({});
    setShowAddModal(true);
  };

  const handleFilter = () => {
    let filteredData = data;

    if (semester !== "All") {
      filteredData = filteredData.filter(
        (item) => item.semester.toString() === semester
      );
    }

    if (attempt !== "All") {
      filteredData = filteredData.filter(
        (item) => item.attempt.toString() === attempt
      );
    }

    if (session !== "All") {
      filteredData = filteredData.filter((item) => item.session === session);
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
        <div className="flex items-center gap-4">
          {(user.role === "admin" || user.role === "lecturer") && (
            <button
              onClick={handleAddClick}
              className=" bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2 rounded flex items-center"
            >
              <AiOutlinePlus className="mr-2" /> Add
            </button>
          )}
        </div>
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

        {(user.role === "admin" || user.role === "lecturer") && (
          <select
            className="border p-2 rounded w-40"
            value={attempt}
            onChange={(e) => setAttempt(e.target.value)}
          >
            <option value="All">Attempt - All</option>
            <option value="1">Attempt 1</option>
            <option value="2">Attempt 2</option>
          </select>
        )}

        {user.role === "admin" && (
          <select
            className="border p-2 rounded w-40"
            value={session}
            onChange={(e) => setSession(e.target.value)}
          >
            <option value="All">Session - All</option>
            <option value="SDP">SDP</option>
            <option value="MEC">MEC</option>
            <option value="IT">IT</option>
          </select>
        )}

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
              {(user.role === "admin" || user.role === "lecturer") && (
                <th className="p-2">Actions</th>
              )}
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

                <td className="p-2 flex justify-center">
                  {(user.role === "admin" || user.role === "lecturer") && (
                    <button
                      onClick={() => handleEditClick(item)}
                      className=" text-black p-2 rounded "
                    >
                      <Edit size={20} />
                    </button>
                  )}
                </td>
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

      {/* Add & Edit Modals */}
      {showAddModal && (
        <Modal title="Add Result" onClose={() => setShowAddModal(false)}>
          <form className="h-[500px] overflow-y-auto ">
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Student</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={newResult.student}
                onChange={(e) =>
                  setNewResult({ ...newResult, student: e.target.value })
                }
              />
              {errors.student && (
                <span className="text-red-500 text-sm">{errors.student}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Session</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={newResult.session}
                onChange={(e) =>
                  setNewResult({ ...newResult, session: e.target.value })
                }
              />
              {errors.session && (
                <span className="text-red-500 text-sm">{errors.session}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Semester</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={newResult.semester}
                onChange={(e) =>
                  setNewResult({ ...newResult, semester: e.target.value })
                }
              />
              {errors.semester && (
                <span className="text-red-500 text-sm">{errors.semester}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Attempt</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={newResult.attempt}
                onChange={(e) =>
                  setNewResult({ ...newResult, attempt: e.target.value })
                }
              />
              {errors.attempt && (
                <span className="text-red-500 text-sm">{errors.attempt}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Grade</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={newResult.grade}
                onChange={(e) =>
                  setNewResult({ ...newResult, grade: e.target.value })
                }
              />
              {errors.grade && (
                <span className="text-red-500 text-sm">{errors.grade}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Status</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={newResult.status}
                onChange={(e) =>
                  setNewResult({ ...newResult, status: e.target.value })
                }
              />
              {errors.status && (
                <span className="text-red-500 text-sm">{errors.status}</span>
              )}
            </div>
            <div className="flex justify-end flex-row gap-2">
              <button
                type="button"
                onClick={handleAddResult}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
      )}

      {showEditModal && (
        <Modal title="Edit Result" onClose={() => setShowEditModal(false)}>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Student</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={editResult.student}
                readOnly
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Session</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={editResult.session}
                onChange={(e) =>
                  setEditResult({ ...editResult, session: e.target.value })
                }
              />
              {errors.session && (
                <span className="text-red-500 text-sm">{errors.session}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Semester</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={editResult.semester}
                onChange={(e) =>
                  setEditResult({ ...editResult, semester: e.target.value })
                }
              />
              {errors.semester && (
                <span className="text-red-500 text-sm">{errors.semester}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Attempt</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={editResult.attempt}
                onChange={(e) =>
                  setEditResult({ ...editResult, attempt: e.target.value })
                }
              />
              {errors.attempt && (
                <span className="text-red-500 text-sm">{errors.attempt}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Grade</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={editResult.grade}
                onChange={(e) =>
                  setEditResult({ ...editResult, grade: e.target.value })
                }
              />
              {errors.grade && (
                <span className="text-red-500 text-sm">{errors.grade}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Status</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={editResult.status}
                onChange={(e) =>
                  setEditResult({ ...editResult, status: e.target.value })
                }
              />
              {errors.status && (
                <span className="text-red-500 text-sm">{errors.status}</span>
              )}
            </div>
            <div className="flex justify-end flex-row gap-2">
              <button
                type="button"
                onClick={handleEditResult}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

// Modal Component
const Modal = ({ title, children, onClose }) => {
  return (
    <div className="fixed -inset-56 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ExamResults;
