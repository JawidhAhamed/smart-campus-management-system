import { X } from "lucide-react";

export default function NotificationPanel({
  notifications,
  isOpen,
  onClose,
  onMarkAsRead,
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50">
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <h3 className="font-semibold dark:text-white">Notifications</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <X size={20} />
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <p className="p-4 text-center text-gray-500 dark:text-gray-400">
            No notifications
          </p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b dark:border-gray-700 last:border-0 cursor-pointer
                ${
                  notification.isRead
                    ? "bg-white dark:bg-gray-800"
                    : "bg-blue-50 dark:bg-gray-700"
                }`}
              onClick={() => onMarkAsRead(notification.id)}
            >
              <h4 className="font-medium dark:text-white">
                {notification.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {notification.message}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
                {notification.time}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
