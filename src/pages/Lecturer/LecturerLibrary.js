import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Download, Plus, X } from "lucide-react";

const LecturerLibrary = () => {
  const [category, setCategory] = useState("All");
  const [department, setDepartment] = useState("All");
  const [semester, setSemester] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const categories = [
    "All",
    "Past Papers",
    "Tutorials",
    "E-Books",
    "Magazines",
  ];
  const departments = [
    "All",
    "Information Technology",
    "Multimedia Technology",
    "Management",
    "Civil Engineering",
  ];
  const semesters = [
    "All",
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
  ];

  const libraryItems = [
    {
      title: "Software Development Practice",
      lastUpdated: "1 month ago",
      fileType: "pdf",
      category: "Past Papers",
      department: "Information Technology",
      semester: "Semester 1",
    },
    {
      title: "Advanced Multimedia",
      lastUpdated: "2 months ago",
      fileType: "pdf",
      category: "Tutorials",
      department: "Multimedia Technology",
      semester: "Semester 2",
    },
  ];

  const handleFilter = () => {
    return [...libraryItems, ...uploadedFiles].filter(
      (item) =>
        (category === "All" || item.category === category) &&
        (department === "All" || item.department === department) &&
        (semester === "All" || item.semester === semester)
    );
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    if (category !== "All" && department !== "All" && semester !== "All") {
      setUploadedFiles([
        ...uploadedFiles,
        {
          title: file.name,
          lastUpdated: "Just now",
          fileType: file.type,
          category,
          department,
          semester,
        },
      ]);
      setShowModal(false);
    } else {
      alert("Please select all fields before uploading.");
    }
  };

  const filteredItems = handleFilter();

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-white mb-4 md:mb-0">
          Library
        </h1>
        <button
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} className="mr-2" /> Add
        </button>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Dropdown label={category} items={categories} onSelect={setCategory} />
        <Dropdown
          label={department}
          items={departments}
          onSelect={setDepartment}
        />
        <Dropdown label={semester} items={semesters} onSelect={setSemester} />
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
          <Search size={18} className="mr-2" /> Filter
        </button>
      </div>

      {/* Library Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-2">
              <img src="/assets/images/pdf.png" alt="PDF" className="w-9 h-9" />
              <h2 className="font-semibold">{item.title}</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Last Updated: {item.lastUpdated}
            </p>
            <div className="flex justify-end">
              <button className="mt-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* File Upload Modal */}
      {showModal && (
        <div className="fixed -inset-56 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Upload File</h2>
              <button onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Select Category, Department, and Semester */}
            <Dropdown
              label={category}
              items={categories}
              onSelect={setCategory}
            />
            <Dropdown
              label={department}
              items={departments}
              onSelect={setDepartment}
            />
            <Dropdown
              label={semester}
              items={semesters}
              onSelect={setSemester}
            />

            {/* File Upload */}
            <input
              type="file"
              onChange={handleFileUpload}
              className="mt-4 w-full"
            />

            {/* Upload Button */}
            <button
              className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={handleFileUpload}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Dropdown Component
const Dropdown = ({ label, items, onSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-56" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 border rounded-md shadow-sm bg-white hover:bg-gray-100"
      >
        {label}
        <ChevronDown size={18} />
      </button>
      {open && (
        <ul className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => {
                onSelect(item);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LecturerLibrary;
