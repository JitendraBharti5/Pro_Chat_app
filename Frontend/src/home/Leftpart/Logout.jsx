import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export default function Logout() {
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      toast.success("Logged out");
      window.location.reload();
    } catch {
      toast.error("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-slate-800 border-t border-slate-700 flex items-center justify-between">
      <button
        onClick={logout}
        disabled={loading}
        className="flex items-center space-x-2 text-red-400 hover:text-red-500 disabled:opacity-50"
      >
        <BiLogOutCircle className="text-2xl" />
        <span className="font-medium">Logout</span>
      </button>
      <div className="text-xs text-gray-500">
        Pro<span className="text-green-400">Chat</span>  
        <br />
        A Product from JITENDRA Pvt. Ltd.
      </div>
    </div>
  );
}
