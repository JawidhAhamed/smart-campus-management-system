import React, { useState, useEffect } from "react";

const CourseDetails = ({
  lessonName,
  courseCategory,
  courseLevel,
  courseTime,
  totalLessons,
  thumbnailImage,
  handleLessonNameChange,
  handleCategoryChange,
  handleLevelChange,
  handleTimeChange,
  handleTotalLessonsChange,
  handleThumbnailChange,
  handleDragOver,
  handleDrop,
  onClose,
  handleContinue,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      lessonName &&
      courseCategory &&
      courseLevel &&
      courseTime &&
      totalLessons &&
      thumbnailImage;
    setIsFormValid(isValid);
  }, [
    lessonName,
    courseCategory,
    courseLevel,
    courseTime,
    totalLessons,
    thumbnailImage,
  ]);

  return (
    <>
      {/* Form Title */}
      <h2 className="text-2xl font-semibold mb-4">Course Details</h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Thumbnail Image (Left) */}
        <div onDragOver={handleDragOver} onDrop={handleDrop}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Thumbnail Image (Required)
          </label>
          <div className="border-2 border-dashed border-gray-400 rounded-md p-6 flex flex-col items-center justify-center">
            {thumbnailImage ? (
              <img
                src={URL.createObjectURL(thumbnailImage)}
                alt="Thumbnail"
                className="max-w-full max-h-40"
              />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-400 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <p className="text-sm text-gray-500">
                  Drag or{" "}
                  <label
                    htmlFor="thumbnailInput"
                    className="text-blue-600 cursor-pointer"
                  >
                    Browse
                  </label>
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPEG (max 5mb size)
                </p>
                <input
                  type="file"
                  id="thumbnailInput"
                  accept="image/png, image/jpeg"
                  onChange={handleThumbnailChange}
                  className="hidden"
                />
              </>
            )}
          </div>
        </div>

        {/* Thumbnail Image (Right) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Thumbnail Image (Required)
          </label>
          <input
            type="text"
            placeholder="Name of the Lesson"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={lessonName}
            onChange={handleLessonNameChange}
          />
          <p className="text-sm text-gray-500 mt-1">{lessonName.length}/100</p>
        </div>

        {/* Course Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Category
          </label>
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            value={courseCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Enter course category</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            {/* Add category options here */}
          </select>
        </div>

        {/* Course Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Level
          </label>
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            value={courseLevel}
            onChange={handleLevelChange}
          >
            <option value="">Select course level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            {/* Add level options here */}
          </select>
        </div>

        {/* Course Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Time
          </label>
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            value={courseTime}
            onChange={handleTimeChange}
          >
            <option value="">Enter course category</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            {/* Add time options here */}
          </select>
        </div>

        {/* Total Lesson */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Lesson
          </label>
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            value={totalLessons}
            onChange={handleTotalLessonsChange}
          >
            <option value="">Enter course category</option>
            <option value="5">5 lessons</option>
            <option value="10">10 lessons</option>
            {/* Add lesson options here */}
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={onClose}
          className="px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
        >
          Cancel
        </button>
        <button
          onClick={handleContinue}
          className={`px-6 py-2 rounded-lg text-white ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default CourseDetails;
