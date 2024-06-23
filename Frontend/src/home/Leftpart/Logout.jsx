import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
  return (
    <>
      <hr />
      <div className=" h-[5vh] bg-transparent flex">
        <div>
          <BiLogOutCircle
            className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1"
            onClick={handleLogout}
          />
        </div>
        <h2 className="text-2xl text-center p-2 ml-2 mt-1 ">
            Pro<span className="text-green-500 font-semibold">Chat</span>
          </h2>
      </div>
      <div className="">
          <p className="pl-2 pr-2 pt-2 ml-2 mt-1">A Product From JITENDRA Private Limited</p>
          </div>
    </>
  );
}

export default Logout;
