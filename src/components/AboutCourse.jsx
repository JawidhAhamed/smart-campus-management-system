import React, { useState } from "react";

const AboutCourse = ({ onBack }) => {
  const [description, setDescription] = useState(
    "Build beautifully designed web and mobile projects for your customers using modern tools used by top companies in 2024. Includes 100+ assets and premium design templates that you can keep and use to customize for all your future projects. Learn to design for all types of devices using Figma and other tools used by some of the top designers in the world. Get hired as a Designer or become a freelancer that can work from anywhere and for anyone. Designers are in high demand!"
  );
  const [attachments, setAttachments] = useState([
    { name: "Introduction of web & mobile Design.pdf", size: "25 mb" },
    { name: "Introduction of web & mobile Design.pdf", size: "25 mb" },
  ]);
  const [dragActive, setDragActive] = useState(false);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = e.dataTransfer.files;
      handleFiles(files);
    }
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

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">About Course</h2>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Course Description</h3>
        <textarea
          className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">Attachment Files</h3>
        <div
          className={`border-2 border-dashed rounded-md p-4 flex items-center justify-center cursor-pointer ${
            dragActive ? "border-blue-500 bg-blue-50" : "border-gray-400"
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="fileInput" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
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
            <span>
              Drag & drop your single/multiple videos of course, or Browse
            </span>
            <span className="text-xs text-gray-500">
              (max file size 100mb each)
            </span>
          </label>
        </div>
        <div className="mt-4">
          {attachments.map((attachment, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-md p-2 mb-2"
            >
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"
                  />
                </svg>
                <span>{attachment.name}</span>
                <span className="text-xs text-gray-500">
                  ({attachment.size})
                </span>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => handleDeleteAttachment(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
          {/* Buttons */}
          <div className="flex justify-end mt-6 space-x-4">
            <button
              onClick={onBack}
              className="px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Back
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
