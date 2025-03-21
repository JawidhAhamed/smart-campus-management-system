import React, { useState } from "react";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Classes Preparation",
      date: "24 May 2024",
    },
    {
      id: 2,
      title: "Fees Reminder",
      date: "12 May 2024",
    },
    {
      id: 3,
      title: "Parents Teacher Meeting",
      date: "10 May 2024",
    },
    {
      id: 4,
      title: "New Academic Session For Admission (2024-25)",
      date: "28 Apr 2024",
    },
    {
      id: 5,
      title: "Staff Meeting",
      date: "23 Apr 2024",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    date: "",
  });

  const handleAddNew = () => {
    setShowAddModal(true);
  };

  const handleSaveAnnouncement = () => {
    const newId = announcements.length + 1;
    const newAnn = { ...newAnnouncement, id: newId };
    setAnnouncements([...announcements, newAnn]);
    setShowAddModal(false);
    setNewAnnouncement({ title: "", date: "" });

    // NoticeBoard.jsx file-ila add panrathu
    const noticeBoardNotices =
      JSON.parse(localStorage.getItem("notices")) || [];
    localStorage.setItem(
      "notices",
      JSON.stringify([...noticeBoardNotices, newAnn])
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold dark:text-white mb-4 ">
          Announcement
        </h2>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900"
          onClick={handleAddNew}
        >
          + Add New
        </button>
      </div>

      <ul className="space-y-4">
        {announcements.map((announcement) => (
          <li
            key={announcement.id}
            className="flex items-start border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12 0H7m12 0v-3m-6 3v-6"
                  />
                </svg>
                <label
                  htmlFor={`announcement-${announcement.id}`}
                  className="text-lg font-medium"
                >
                  {announcement.title}
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Added on: {announcement.date}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Add New Announcement</h2>
            <form>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={newAnnouncement.title}
                  onChange={(e) =>
                    setNewAnnouncement({
                      ...newAnnouncement,
                      title: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={newAnnouncement.date}
                  onChange={(e) =>
                    setNewAnnouncement({
                      ...newAnnouncement,
                      date: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end flex-row gap-2">
                <button
                  type="button"
                  onClick={handleSaveAnnouncement}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Save
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcements;
