import { Bell } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const announcements = [
  {
    id: 1,
    title: "New Syllabus Instructions",
    date: "11 Feb 2025",
    daysLeft: 25,
  },
  {
    id: 2,
    title: "Assignment Submission Guidelines",
    date: "11 Feb 2025",
    daysLeft: 25,
  },
  {
    id: 3,
    title: "Upcoming Workshop Registration",
    date: "11 Feb 2025",
    daysLeft: 25,
  },
  { id: 4, title: "Mid-term Exam Schedule", date: "11 Feb 2025", daysLeft: 25 },
  {
    id: 5,
    title: "Project Presentation Guidelines",
    date: "11 Feb 2025",
    daysLeft: 25,
  },
];

export default function Home() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center pt-14 justify-between">
        <h1 className="text-3xl font-bold dark:text-white">Home</h1>
        
      </div>

      {/* Welcome Section */}
      <div className="bg-[#3F51B5] text-white p-8 rounded-xl">
        <h1 className="text-2xl font-semibold">
          Welcome Back, Mr {user?.username}
        </h1>
      </div>

      {/* Announcements Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold dark:text-white">
            Site Announcements
          </h2>
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            View All
          </button>
        </div>

        <div className="divide-y dark:divide-gray-700">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="flex items-start gap-4 p-4">
              <div className="p-2 bg-[#E8F5E9] dark:bg-green-900 rounded-full">
                <Bell
                  className="text-[#66BB6A] dark:text-green-400"
                  size={20}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {announcement.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Added on: {announcement.date}
                </p>
              </div>
              <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                {announcement.daysLeft} Days
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Module Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold dark:text-white">
            Module Categories
          </h2>
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            View All
          </button>
        </div>
        <div className="p-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-medium dark:text-white">SDP</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
