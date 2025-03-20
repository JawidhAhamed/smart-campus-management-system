import React, { useState } from "react";
import AboutCourse from "./AboutCourse";
import CourseDetails from "./CourseDetails"; 

const CourseCreationForm = ({ onClose }) => {
  const [lessonName, setLessonName] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseTime, setCourseTime] = useState("");
  const [totalLessons, setTotalLessons] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [currentTab, setCurrentTab] = useState("courseDetails"); 

  const handleLessonNameChange = (e) => {
    setLessonName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCourseCategory(e.target.value);
  };

  const handleLevelChange = (e) => {
    setCourseLevel(e.target.value);
  };

  const handleTimeChange = (e) => {
    setCourseTime(e.target.value);
  };

  const handleTotalLessonsChange = (e) => {
    setTotalLessons(e.target.value);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.size <= 5 * 1024 * 1024 &&
      (file.type === "image/png" || file.type === "image/jpeg")
    ) {
      setThumbnailImage(file);
    } else {
      alert(
        "Please select a valid PNG or JPEG image with a maximum size of 5MB."
      );
      e.target.value = null; // Clear the input
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (
      file &&
      file.size <= 5 * 1024 * 1024 &&
      (file.type === "image/png" || file.type === "image/jpeg")
    ) {
      setThumbnailImage(file);
    } else {
      alert(
        "Please select a valid PNG or JPEG image with a maximum size of 5MB."
      );
    }
  };

  const handleContinue = () => {
    if (!lessonName || !courseCategory || !courseLevel || !courseTime || !totalLessons) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }
    setCurrentTab("aboutCourse");
  };

  const handleBack = () => {
    setCurrentTab("courseDetails"); 
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex space-x-2 justify-end mb-6">
        <button className="px-6 py-2 bg-[#c5ceff] text-blue-700 rounded-lg hover:bg-[#b3beff]">
          Save As Draft
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Publish Course
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`pb-2 ${
            currentTab === "courseDetails"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setCurrentTab("courseDetails")}
        >
          Course Details
        </button>
        <button
          className={`pb-2 ${
            currentTab === "aboutCourse"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500"
          }`}
        >
          About Course
        </button>
        <button className="text-gray-500 pb-2">Publish Course</button>
      </div>

      {/* Conditional Rendering Based on Current Tab */}
      {currentTab === "courseDetails" ? (
        <CourseDetails
          lessonName={lessonName}
          courseCategory={courseCategory}
          courseLevel={courseLevel}
          courseTime={courseTime}
          totalLessons={totalLessons}
          thumbnailImage={thumbnailImage}
          handleLessonNameChange={handleLessonNameChange}
          handleCategoryChange={handleCategoryChange}
          handleLevelChange={handleLevelChange}
          handleTimeChange={handleTimeChange}
          handleTotalLessonsChange={handleTotalLessonsChange}
          handleThumbnailChange={handleThumbnailChange}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          onClose={onClose}
          handleContinue={handleContinue}
        />
      ) : (
        <AboutCourse onBack={handleBack} />
      )}
    </div>
  );
};

export default CourseCreationForm;
