import React from "react";
import useGetAllUsers from "../../context/useGetAllUsers";
import User from "./User";

export default function Users() {
  const [allUsers] = useGetAllUsers();

  return (
    <div className="divide-y divide-slate-700">
      {allUsers.map(user => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
}
