import React, { useState } from "react";

const Payments = () => {
  const [totalEarnings, setTotalEarnings] = useState(430.0);
  const [pendingPayments, setPendingPayments] = useState(100.0);
  const [withdrawalMethod, setWithdrawalMethod] = useState("1502********4832");
  const [paymentHistory, setPaymentHistory] = useState([
    {
      studentId: "E660000",
      date: "Mar 21, 2025",
      amount: "400 USD",
      totalPayments: 1,
      status: "Success",
    },
    {
      studentId: "E660000",
      date: "Mar 21, 2025",
      amount: "400 USD",
      totalPayments: 3,
      status: "Success",
    },
    {
      studentId: "E660000",
      date: "Mar 21, 2025",
      amount: "400 USD",
      totalPayments: 1,
      status: "Success",
    },
    {
      studentId: "E660000",
      date: "Mar 21, 2025",
      amount: "400 USD",
      totalPayments: 5,
      status: "Success",
    },
    {
      studentId: "E660000",
      date: "Mar 21, 2025",
      amount: "400 USD",
      totalPayments: 5,
      status: "Pending",
    },
    {
      studentId: "E660000",
      date: "Mar 21, 2025",
      amount: "400 USD",
      totalPayments: 1,
      status: "Success",
    },
    {
      studentId: "E660000",
      date: "Mar 21, 2025",
      amount: "400 USD",
      totalPayments: 1,
      status: "Pending",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filter, setFilter] = useState("All");

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page when items per page change
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const filteredPayments = paymentHistory.filter((payment) => {
    if (filter === "All") return true;
    return payment.status === filter;
  });

  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPayments = filteredPayments.slice(startIndex, endIndex);

  return (
    <div className="space-y-8">
      <div className="bg-white  p-14">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Payments</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Total Earnings</h3>
            <p className="text-3xl font-bold text-green-500">
              ${totalEarnings.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">as of 01-December 2022</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">Pending Payments</h3>
            <p className="text-3xl font-bold text-yellow-500">
              ${pendingPayments.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">as of 01-December 2022</p>
          </div>
          <div className="p-4 border rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2">Withdrawal Method</h3>
              <p className="text-base font-semibold">{withdrawalMethod}</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15.172a4 4 0 01-5.656 0L4.228 12.586a2 2 0 010-2.828z"
                  />
                </svg>
              </button>
              <button className="text-red-500 hover:text-red-700">
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Payment History</h3>
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded-md ${
                filter === "All"
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300"
              }`}
              onClick={() => handleFilterChange("All")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                filter === "Success"
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300"
              }`}
              onClick={() => handleFilterChange("Success")}
            >
              Success
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                filter === "Pending"
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300"
              }`}
              onClick={() => handleFilterChange("Pending")}
            >
              Pending
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Payments
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentPayments.map((payment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {payment.studentId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.totalPayments}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div>
              <label htmlFor="itemsPerPage" className="mr-2">
                Items per page:
              </label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md mr-2"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
