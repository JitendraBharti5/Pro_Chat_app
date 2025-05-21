import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

export default function Search() {
  const [q, setQ] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const onSubmit = e => {
    e.preventDefault();
    if (!q.trim()) return;
    const u = allUsers.find(u =>
      u.fullname?.toLowerCase().includes(q.toLowerCase())
    );
    if (u) {
      setSelectedConversation(u);
      setQ("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="p-4 bg-slate-800 border-b border-slate-700 flex items-center space-x-3"
    >
      <div className="relative flex-1">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-2 bg-slate-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-50"
        disabled={!q.trim()}
      >
        <FaSearch className="text-white" />
      </button>
    </form>
  );
}
