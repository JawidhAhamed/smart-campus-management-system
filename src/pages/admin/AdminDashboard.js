import NoticeBoard from "../../components/NoticeBoard";
import Calendar from "../../components/Calendar";
import Cards from "../../data/Cards";

export default function AdminDashboard({ user }) {
  const data = Cards;

  console.log("User object:", user);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center pt-14 justify-between">
        <h1 className="text-3xl font-bold dark:text-white">Admin Dashboard</h1>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          BUTTON
        </button>
      </div>

      {/* Welcome Section */}
      <div className="bg-[#3F51B5] text-white p-8 rounded-xl">
        <h1 className="text-2xl font-semibold">
          Welcome Back, Mr {user?.username || "Admin"}
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 dark:bg-gray-800">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start relative dark:bg-gray-800 dark:text-white"
          >
            <div className="text-4xl">{item.icon}</div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white">
              {item.count}
            </div>
            <p className="text-gray-600 dark:text-white">{item.title}</p>
            <span
              className={`absolute top-3 right-3 text-white dark:text-white text-xs px-2 py-1 rounded-full ${item.color}`}
            >
              {item.percentage}
            </span>
            <div className="flex justify-between w-full mt-2 text-gray-600 text-sm dark:text-white">
              <span>
                Active: <strong>{item.active}</strong>
              </span>
              <span>
                Inactive: <strong>{item.inactive}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6  dark:bg-gray-800 min-h-screen">
        <div className="w-full md:w-1/2">
          <NoticeBoard />
        </div>
        <div className="w-full md:w-1/2">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
