import React, { useState, useRef } from "react";

export default function PrivateFiles() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles([...files, ...newFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...newFiles]);
  };

  const handleSave = () => {
    // Implement save logic here
    console.log("Files to save:", files);
  };

  const handleCancel = () => {
    setFiles([]);
  };

  // const handleButtonClick = () => {
  // };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCreateFolder = () => {
    // Implement create folder logic here
    console.log("Create New Folder clicked!");
  };

  const handleUploadFiles = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDownloadAllFiles = () => {
    // Implement download all files logic here
    console.log("Download All Files clicked!");
  };

  return (
    <div className="space-y-8 ">
      {/* Page Header */}
      <div className="flex flex-col pt-14 md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-white mb-4 md:mb-0">
          Private Files
        </h1>
       
      </div>

      <div className="text-sm mb-4 text-right">
        Maximum size for new files: 30MB, overall limit: 100MB
      </div>

      <div className="border border-gray-300 rounded p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-2">
            {/* Create New Folder Button */}
            <button
              className="p-1 border border-gray-300 rounded"
              onClick={handleCreateFolder}
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
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </button>

            {/* Upload Files Button */}
            <button
              className="p-1 border border-gray-300 rounded"
              onClick={handleUploadFiles}
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
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </button>

            {/* Download All Files Button */}
            <button
              className="p-1 border border-gray-300 rounded"
              onClick={handleDownloadAllFiles}
            >
              <img
                src="/assets/images/download.png"
                alt="Logo"
                className="w-5 h-5"
              />
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="p-1 border border-gray-300 rounded">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button className="p-1 border border-gray-300 rounded">
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
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="border border-dashed border-gray-400 rounded p-10 text-center cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleFileInputClick}
        >
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <p className="text-gray-500">Drag and drop</p>
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Files</h2>
            <ul>
              {files.map((file, index) => (
                <li key={index} className="border-b border-gray-200 py-2">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-start space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save Changes
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
