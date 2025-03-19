import React, { useState } from "react";
import { FaEdit, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: "E660000",
      username: "Rusiru",
      regDate: "Mar 21, 2025",
      email: "lecture@sdp.com",
      role: "Lecturer",
      status: "Active",
    },
    {
      id: "E660001",
      username: "Ishani",
      regDate: "Mar 21, 2025",
      email: "student@sdp.com",
      role: "Student",
      status: "Active",
    },
    {
      id: "E660002",
      username: "Jawidh",
      regDate: "Mar 21, 2025",
      email: "lecture@sdp.com",
      role: "Lecturer",
      status: "Active",
    },
    {
      id: "E660003",
      username: "Uresha",
      regDate: "Mar 21, 2025",
      email: "student@sdp.com",
      role: "Student",
      status: "Active",
    },
    {
      id: "E660004",
      username: "Sathnidu",
      regDate: "Mar 21, 2024",
      email: "student@sdp.com",
      role: "Student",
      status: "Inactive",
    },
    {
      id: "E660005",
      username: "E660000",
      regDate: "Mar 21, 2025",
      email: "student@sdp.com",
      role: "Student",
      status: "Success",
    },
    {
      id: "E660006",
      username: "E660000",
      regDate: "Mar 21, 2026",
      email: "student@sdp.com",
      role: "Student",
      status: "Inactive",
    },
  ]);

  const [editUser, setEditUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filter, setFilter] = useState("All");
  const [currentYear, setCurrentYear] = useState(2025);

  const handleEditClick = (user) => {
    setEditUser(user);
    setShowEditModal(true);
  };

  const handleSave = () => {
    setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));
    setShowEditModal(false);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleYearChange = (direction) => {
    setCurrentYear(currentYear + direction);
  };

  const filteredUsers = users.filter((user) => {
    const userYear = parseInt(user.regDate.split(", ")[1]);
    if (filter === "All") return userYear === currentYear;
    return user.role === filter && userYear === currentYear;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-white mb-4 md:mb-0">
          User Management
        </h1>
      </div>

      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-full border ${
              filter === "All"
                ? "border-indigo-500 text-indigo-500"
                : "border-gray-300 text-gray-700"
            } hover:bg-indigo-100 focus:outline-none`}
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full border ${
              filter === "Lecturer"
                ? "border-indigo-500 text-indigo-500"
                : "border-gray-300 text-gray-700"
            } hover:bg-indigo-100 focus:outline-none`}
            onClick={() => handleFilterChange("Lecturer")}
          >
            Lectures
          </button>
          <button
            className={`px-4 py-2 rounded-full border ${
              filter === "Student"
                ? "border-indigo-500 text-indigo-500"
                : "border-gray-300 text-gray-700"
            } hover:bg-indigo-100 focus:outline-none`}
            onClick={() => handleFilterChange("Student")}
          >
            Students
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleYearChange(-1)}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FaChevronLeft />
          </button>
          <button className="p-2 border rounded-lg text-center cursor-pointer">
            {currentYear}
          </button>
          <button
            onClick={() => handleYearChange(1)}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-2">User ID</th>
            <th className="p-2">Username</th>
            <th className="p-2">Reg Date</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index} className="text-center border-b">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.username}</td>
              <td className="p-2">{user.regDate}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.status}</td>
              <td className="p-2">
                <button
                  onClick={() => handleEditClick(user)}
                  className="text-black p-2 rounded flex items-center justify-center"
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Edit User</h2>
            <form>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={editUser.username}
                  onChange={(e) =>
                    setEditUser({ ...editUser, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="border p-2 rounded w-full"
                  value={editUser.email}
                  onChange={(e) =>
                    setEditUser({ ...editUser, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2">Role</label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={editUser.role}
                  onChange={(e) =>
                    setEditUser({ ...editUser, role: e.target.value })
                  }
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2">Status</label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={editUser.status}
                  onChange={(e) =>
                    setEditUser({ ...editUser, status: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end flex-row gap-2">
                <button
                  type="button"
                  onClick={handleSave}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
