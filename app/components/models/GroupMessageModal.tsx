"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/app/hooks/use-modal-store";

interface User {
  id: string;
  username: string;
}

interface Message {
  user: User;
  content: string;
  timestamp: string;
}

const usersInChat: User[] = [
  { id: "1", username: "User1" },
  { id: "2", username: "User2" },
  { id: "3", username: "User3" },
  // Add more users as needed
];

const GroupMessageModal = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const isModalOpen = isOpen && type === "GroupMessageModal";
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const handleMessage = (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // socket.on("message", handleMessage);

    // return () => {
    //   socket.off("message", handleMessage);
    // };
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const messageContent = formData.get("message") as string;

    const newMessage: Message = {
      user: { id: "self", username: "You" },
      content: messageContent,
      timestamp: new Date().toISOString(),
    };

    // s

    // cl
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    e.currentTarget.reset();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl h-3/4 overflow-hidden flex">
        <div className="w-1/4 bg-gray-900 text-white p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Chat Participants</h2>
          <ul className="space-y-3">
            {usersInChat.map((user) => (
              <li key={user.id} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <span>{user.username}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.user.id === "self" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-xs ${
                      message.user.id === "self"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-white"
                    }`}
                  >
                    <p className="font-semibold">{message.user.username}</p>
                    <p>{message.content}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            className="bg-gray-100 p-4 flex space-x-2"
            onSubmit={sendMessage}
          >
            <input
              type="text"
              name="message"
              placeholder="Type your message"
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GroupMessageModal;
