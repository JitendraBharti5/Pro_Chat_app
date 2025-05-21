import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

export default function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === user._id;
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      onClick={() => setSelectedConversation(user)}
      className={`
        flex items-center px-4 py-3 cursor-pointer transition 
        ${isSelected ? "bg-slate-700" : "hover:bg-slate-800"}
      `}
    >
      <div className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt={user.fullname}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span
          className={`
            absolute bottom-0 right-0 w-3 h-3 rounded-full border-2
            ${isOnline ? "bg-green-400 border-slate-900" : "bg-gray-500 border-slate-900"}
          `}
        />
      </div>
      <div className="ml-4">
        <p className="font-semibold">{user.fullname}</p>
        <p className="text-sm text-gray-400">{user.email}</p>
      </div>
    </div>
  );
}
