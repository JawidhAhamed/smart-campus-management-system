import React, { useState } from "react";
import CourseCreationForm from "../../components/CourseCreationForm";
const courses = [
  {
    id: 1,
    title: "Bsc(Hons) in Computer Science",
    subtitle: "Software Engineering Top-Up",
    university: "Kingston University",
    description: "Degree Programme offered by Kingston university is a.......",
  },
  {
    id: 2,
    title: "Bsc(Hons) in Computer Science",
    subtitle: "Software Engineering Top-Up",
    university: "Kingston University",
    description: "Degree Programme offered by Kingston university is a.......",
  },
  {
    id: 3,
    title: "Bsc(Hons) in Computer Science",
    subtitle: "Software Engineering Top-Up",
    university: "Kingston University",
    description: "Degree Programme offered by Kingston university is a.......",
  },
  {
    id: 4,
    title: "Bsc(Hons) in Computer Science",
    subtitle: "Software Engineering Top-Up",
    university: "Kingston University",
    description: "Degree Programme offered by Kingston university is a.......",
  },
  {
    id: 5,
    title: "Bsc(Hons) in Computer Science",
    subtitle: "Software Engineering Top-Up",
    university: "Kingston University",
    description: "Degree Programme offered by Kingston university is a.......",
  },
  {
    id: 6,
    title: "Bsc(Hons) in Computer Science",
    subtitle: "Software Engineering Top-Up",
    university: "Kingston University",
    description: "Degree Programme offered by Kingston university is a.......",
  },
  {
    id: 7,
    title: "Bsc(Hons) in Computer Science",
    subtitle: "Software Engineering Top-Up",
    university: "Kingston University",
    description: "Degree Programme offered by Kingston university is a.......",
  },
  {
    id: 8,
    title: "Bsc(Hons) in Computer Science",
    subtitle: "Software Engineering Top-Up",
    university: "Kingston University",
    description: "Degree Programme offered by Kingston university is a.......",
  },
  {
    id: 9,
    title: "Bsc(Hons) in Computer Science",
    subtitle: "Software Engineering Top-Up",
    university: "Kingston University",
    description: "Degree Programme offered by Kingston university is a.......",
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-gray-500 text-sm">{course.subtitle}</p>
        </div>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <img
        src="/assets/images/course.png"
        alt="Course"
        className="w-full h-40 object-cover my-2 rounded-lg"
      />
      <h4 className="font-semibold">Degree Program</h4>
      <p className="text-sm text-gray-500">{course.university}</p>
      <p className="text-sm text-gray-600 mt-1">{course.description}</p>
      <div className="flex justify-end mt-3 space-x-2">
        <button className="px-4 py-1 border border-gray-400 rounded-lg text-gray-600">
          Delete
        </button>
        <button className="px-4 py-1 bg-gray-900 text-white rounded-lg">
          Edit
        </button>
      </div>
    </div>
  );
};

const CourseManagement = () => {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center pt-14 justify-between">
        {!isCreating && (
          <h1 className="text-3xl font-bold dark:text-white">
            Course Management
          </h1>
        )}
        {!isCreating && (
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => setIsCreating(true)}
          >
            Create New
          </button>
        )}
      </div>

      {isCreating ? (
        <CourseCreationForm
          onClose={() => setIsCreating(false)}
          showHeader={false}
        />
      ) : (
        <div className="flex flex-wrap gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseManagement;
