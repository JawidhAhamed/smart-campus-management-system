import { useState } from "react";
import { ChevronDown, Search, Download } from "lucide-react";

const Library = () => {
  const [category, setCategory] = useState("Past Papers");
  const [department, setDepartment] = useState("Information Technology");
  const [semester, setSemester] = useState("Semester 1");

  const categories = ["Past Papers", "Tutorials", "E-Books", "Magazines"];
  const departments = [
    "Information Technology",
    "Multimedia Technology",
    "Management",
    "Civil Engineering",
  ];
  const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4"];

  const libraryItems = [
    {
      title: "Software Development Practise",
      lastUpdated: "1 month ago",
      fileType: "pdf",
    },
    {
      title: "Software Development Practise",
      lastUpdated: "1 month ago",
      fileType: "pdf",
    },
    {
      title: "Software Development Practise",
      lastUpdated: "1 month ago",
      fileType: "pdf",
    },
    {
      title: "Software Development Practise",
      lastUpdated: "1 month ago",
      fileType: "pdf",
    },
    {
      title: "Software Development Practise",
      lastUpdated: "1 month ago",
      fileType: "pdf",
    },
    {
      title: "Software Development Practise",
      lastUpdated: "1 month ago",
      fileType: "pdf",
    },
    {
      title: "Software Development Practise",
      lastUpdated: "1 month ago",
      fileType: "pdf",
    },
    {
      title: "Software Development Practise",
      lastUpdated: "1 month ago",
      fileType: "pdf",
    },
    {
      title: "Software Development Practise",
      lastUpdated: "1 month ago",
      fileType: "pdf",
    },
  ];

  return (
    <div className="space-y-8 ">
      {/* Page Header */}
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-white mb-4 md:mb-0">
          Library
        </h1>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          BUTTON
        </button>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Dropdown
          label={category}
          items={categories}
          onSelect={(item) => setCategory(item)}
        />
        <Dropdown
          label={department}
          items={departments}
          onSelect={(item) => setDepartment(item)}
        />
        <Dropdown
          label={semester}
          items={semesters}
          onSelect={(item) => setSemester(item)}
        />

        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
          <Search size={18} className="mr-2" /> Filter
        </button>
      </div>

      {/* Library Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {libraryItems.map((item, index) => (
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
    </div>
  );
};

// Dropdown Component
const Dropdown = ({ label, items, onSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-56">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 border rounded-md shadow-sm bg-white hover:bg-gray-100"
      >
        {label}
        <ChevronDown size={18} />
      </button>
      {open && (
        <ul className="absolute w-full mt-1 bg-white border rounded-md shadow-lg">
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

export default Library;
