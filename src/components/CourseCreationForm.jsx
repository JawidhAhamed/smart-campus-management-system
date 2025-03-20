import React, { useState, useEffect } from "react";
import AboutCourse from "./AboutCourse"; // Import the AboutCourse component
import CourseDetails from "./CourseDetails"; // Import the CourseDetails component

const CourseCreationForm = ({
  onClose,
  onAddCourse,
  onEditCourse,
  editingCourse,
}) => {
  const [lessonName, setLessonName] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseTime, setCourseTime] = useState("");
  const [totalLessons, setTotalLessons] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [currentTab, setCurrentTab] = useState("courseDetails"); // State to manage the current tab

  useEffect(() => {
    if (editingCourse) {
      setLessonName(editingCourse.title);
      setCourseCategory(editingCourse.subtitle);
      setCourseLevel(editingCourse.level);
      setCourseTime(editingCourse.time);
      setTotalLessons(editingCourse.totalLessons);
      setThumbnailImage(editingCourse.thumbnailImage);
      setDescription(editingCourse.description);
      setAttachments(editingCourse.attachments || []);
    }
  }, [editingCourse]);

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

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const files = e.target.files;
      handleFiles(files);
    }
  };

  const handleFiles = (files) => {
    const newAttachments = [...attachments];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size <= 100 * 1024 * 1024) {
        // 100MB max size
        newAttachments.push({
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(2)} mb`,
        });
      } else {
        alert(`File ${file.name} exceeds 100MB limit.`);
      }
    }
    setAttachments(newAttachments);
  };

  const handleDeleteAttachment = (index) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  const handleContinue = () => {
    if (currentTab === "courseDetails") {
      if (
        !lessonName ||
        !courseCategory ||
        !courseLevel ||
        !courseTime ||
        !totalLessons ||
        !thumbnailImage
      ) {
        alert("Please fill in all the course details.");
        return;
      }
      setCurrentTab("aboutCourse");
    } else if (currentTab === "aboutCourse") {
      if (!description || attachments.length === 0) {
        alert(
          "Please fill in the description and add at least one attachment."
        );
        return;
      }
      setCurrentTab("publishCourse");
    }
  };

  const handleBack = () => {
    if (currentTab === "aboutCourse") {
      setCurrentTab("courseDetails");
    } else if (currentTab === "publishCourse") {
      setCurrentTab("aboutCourse");
    }
  };

  const handlePublish = () => {
    if (
      !lessonName ||
      !courseCategory ||
      !courseLevel ||
      !courseTime ||
      !totalLessons ||
      !thumbnailImage ||
      !description ||
      attachments.length === 0
    ) {
      alert("Please complete all sections before publishing.");
      return;
    }

    const newCourse = {
      id: editingCourse ? editingCourse.id : Date.now(), // Generate a unique ID for the new course
      title: lessonName,
      subtitle: courseCategory,
      university: "Kingston University", // Example university, you can change it
      description: description,
      attachments: attachments,
    };

    if (editingCourse) {
      onEditCourse(newCourse);
    } else {
      onAddCourse(newCourse);
    }
    onClose(); // Close the form after publishing
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex space-x-2 justify-end mb-6">
        <button className="px-6 py-2 bg-[#c5ceff] text-blue-700 rounded-lg hover:bg-[#b3beff]">
          Save As Draft
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={handlePublish}
        >
          {editingCourse ? "Update Course" : "Publish Course"}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`pb-2 ${
            currentTab === "courseDetails"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 cursor-not-allowed"
          }`}
          disabled
        >
          Course Details
        </button>
        <button
          className={`pb-2 ${
            currentTab === "aboutCourse"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 cursor-not-allowed"
          }`}
          disabled
        >
          About Course
        </button>
        <button
          className={`pb-2 ${
            currentTab === "publishCourse"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 cursor-not-allowed"
          }`}
          disabled
        >
          Publish Course
        </button>
      </div>

      {/* Conditional Rendering Based on Current Tab */}
      {currentTab === "courseDetails" && (
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
      )}
      {currentTab === "aboutCourse" && (
        <AboutCourse
          description={description}
          attachments={attachments}
          handleDescriptionChange={handleDescriptionChange}
          handleFileChange={handleFileChange}
          handleDeleteAttachment={handleDeleteAttachment}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      )}
      {currentTab === "publishCourse" && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Publish Course</h2>
          <p>
            Review all the details and click "Publish Course" to make it live.
          </p>
          {/* Add any additional publish course details or actions here */}
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4"
            onClick={handlePublish}
          >
            {editingCourse ? "Update Course" : "Publish Course"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCreationForm;
