import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

export default function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isOnline = selectedConversation
    ? onlineUsers.includes(selectedConversation._id)
    : false;

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-slate-800 px-4 py-3 border-b border-slate-700">
      <label htmlFor="my-drawer-2" className="lg:hidden cursor-pointer">
        <CiMenuFries className="text-white text-2xl" />
      </label>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={selectedConversation?.avatarUrl || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover ring ring-slate-700"
          />
          {selectedConversation && (
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-800 ${
                isOnline ? "bg-green-400" : "bg-gray-500"
              }`}
            />
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-100">
            {selectedConversation?.fullname || "Select a user"}
          </h2>
          {selectedConversation && (
            <p className="text-sm text-gray-400">
              {isOnline ? "Online" : "Offline"}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
