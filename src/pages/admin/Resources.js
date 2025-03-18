import React, { useState } from "react";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("classroom");
  const [formData, setFormData] = useState({
    course: "",
    courseLevel: "",
    module: "",
    lecturer: "",
    floor: "",
    hall: "",
    date: "",
    startTime: "",
    endTime: "",
  });
  const [errors, setErrors] = useState({});

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.course) {
      newErrors.course = "Course is required";
      isValid = false;
    }
    if (!formData.courseLevel) {
      newErrors.courseLevel = "Course Level is required";
      isValid = false;
    }
    if (!formData.module) {
      newErrors.module = "Module is required";
      isValid = false;
    }
    if (!formData.lecturer) {
      newErrors.lecturer = "Lecturer is required";
      isValid = false;
    }
    if (!formData.floor) {
      newErrors.floor = "Floor is required";
      isValid = false;
    }
    if (!formData.hall) {
      newErrors.hall = "Hall is required";
      isValid = false;
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
      isValid = false;
    }
    if (!formData.startTime) {
      newErrors.startTime = "Start Time is required";
      isValid = false;
    }
    if (!formData.endTime) {
      newErrors.endTime = "End Time is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      // Submit the form data (e.g., to an API)
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white pt-14">
        <h2 className="text-3xl font-bold dark:text-white mb-4">
          Resource Management
        </h2>

        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 w-1/2 ${
              activeTab === "classroom"
                ? "border-2 border-blue-600 text-blue-600"
                : "text-gray-500 border-2"
            }`}
            onClick={() => handleTabChange("classroom")}
          >
            Classroom Allocation
          </button>
          <button
            className={`px-4 py-2 w-1/2 ${
              activeTab === "equipment"
                ? "border-2 border-blue-600 text-blue-600"
                : "text-gray-500 border-2"
            }`}
            onClick={() => handleTabChange("equipment")}
          >
            Equipment Allocation
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-around space-x-6">
            {/* Classroom Allocation Fields */}
            {activeTab === "classroom" && (
              <>
                <div className="w-2/6 flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700">
                      Course
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select course category</option>
                      {/* Add options here */}
                    </select>
                    {errors.course && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.course}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">
                      Module
                    </label>
                    <select
                      name="module"
                      value={formData.module}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select course module</option>
                      {/* Add options here */}
                    </select>
                    {errors.module && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.module}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">
                      Floor
                    </label>
                    <select
                      name="floor"
                      value={formData.floor}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select floor</option>
                      {/* Add options here */}
                    </select>
                    {errors.floor && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.floor}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <div>
                      <label className="block text-sm font-bold text-gray-700">
                        Start Time
                      </label>
                      <input
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.startTime && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.startTime}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700">
                        End Time
                      </label>
                      <input
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.endTime && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.endTime}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-2/6 flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700">
                      Course Level
                    </label>
                    <select
                      name="courseLevel"
                      value={formData.courseLevel}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select course level</option>
                      {/* Add options here */}
                    </select>
                    {errors.courseLevel && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.courseLevel}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">
                      Lecturer
                    </label>
                    <select
                      name="lecturer"
                      value={formData.lecturer}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select lecturer</option>
                      {/* Add options here */}
                    </select>
                    {errors.lecturer && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lecturer}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">
                      Hall
                    </label>
                    <select
                      name="hall"
                      value={formData.hall}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select lecture hall</option>
                      {/* Add options here */}
                    </select>
                    {errors.hall && (
                      <p className="text-red-500 text-xs mt-1">{errors.hall}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Equipment Allocation Fields */}
            
            {activeTab === "equipment" && (
              <>
                  <div className="w-2/6 flex flex-col gap-6">
                    {" "}
                    <div>
                      <label className="block text-sm font-bold text-gray-700">
                        Equipment
                      </label>
                      <select
                        name="equipment"
                        value={formData.equipment}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select equipment</option>
                        {/* Add options here */}
                      </select>
                      {errors.equipment && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.equipment}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700">
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.date && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.date}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <div>
                        <label className="block text-sm font-bold text-gray-700">
                          Start Time
                        </label>
                        <input
                          type="time"
                          name="startTime"
                          value={formData.startTime}
                          onChange={handleChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.startTime && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.startTime}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700">
                          End Time
                        </label>
                        <input
                          type="time"
                          name="endTime"
                          value={formData.endTime}
                          onChange={handleChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.endTime && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.endTime}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-2/6 flex flex-col gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700">
                        Equipment Type
                      </label>
                      <select
                        name="equipmentType"
                        value={formData.equipmentType}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select equipment type</option>
                        {/* Add options here */}
                      </select>
                      {errors.equipmentType && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.equipmentType}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.quantity && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.quantity}
                        </p>
                      )}
                    </div>
                  </div>
              </>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-sm absolute right-10 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              ALLOCATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resources;
