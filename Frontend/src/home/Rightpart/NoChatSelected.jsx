import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { useAuth } from "../../context/AuthProvider.jsx";

export default function NoChatSelected() {
  const [authUser] = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-900 text-gray-400 p-4 relative">
      <label htmlFor="my-drawer-2" className="lg:hidden absolute top-4 left-4 cursor-pointer">
        <CiMenuFries className="text-white text-2xl" />
      </label>
      <h2 className="text-2xl mb-4">
        Welcome, <span className="font-semibold text-gray-100">{authUser.user.fullname}</span>
      </h2>
      <p className="mb-6">Select a contact to start chatting</p>
      <img src="pro-remov.png" alt="ProChat Logo" className="w-64 opacity-60" />
    </div>
  );
}
