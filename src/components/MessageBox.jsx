import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function MessageBox({ isOpen, onClose, onSend }) {
  const { user } = useAuth();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [selectedRecipients, setSelectedRecipients] = useState([]);

  useEffect(() => {
    // Fetch recipients based on user role
    if (user.role === "lecturer") {
      // Fetch students
      setRecipients([
        "student1@example.com",
        "student2@example.com",
        "student3@example.com",
      ]);
    } else if (user.role === "student") {
      // Fetch other students and lecturers
      setRecipients([
        "student1@example.com",
        "student2@example.com",
        "lecturer1@example.com",
      ]);
    }
  }, [user.role]);

  const handleFileChange = (e) => {
    setAttachments([...attachments, ...e.target.files]);
  };

  const handleSendMessage = () => {
    const messageData = {
      to: selectedRecipients.join(", "),
      subject,
      body,
      attachments,
    };
    console.log("Sending Message: ", messageData);
    onSend(messageData);
    onClose();
  };

  const handleRecipientChange = (e) => {
    const value = e.target.value;
    if (value === "all" && user.role === "lecturer") {
      setSelectedRecipients(recipients);
    } else {
      setSelectedRecipients(value.split(",").map((email) => email.trim()));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold dark:text-white">New Message</h2>
          <X
            className="cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={onClose}
          />
        </div>

        <input
          type="text"
          className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          list="recipients"
        />
        <datalist id="recipients">
          {recipients.map((recipient, index) => (
            <option key={index} value={recipient} />
          ))}
          {user.role === "lecturer" && (
            <option value="all">All Students</option>
          )}
        </datalist>
        <input
          type="text"
          className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white"
          placeholder="Message Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
        ></textarea>

        <input
          type="file"
          multiple
          className="mb-2 w-full"
          onChange={handleFileChange}
        />
        {attachments.length > 0 && (
          <p className="text-sm text-gray-500">
            {attachments.length} file(s) attached
          </p>
        )}

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-1"
            onClick={handleSendMessage}
          >
            <Send size={16} /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
