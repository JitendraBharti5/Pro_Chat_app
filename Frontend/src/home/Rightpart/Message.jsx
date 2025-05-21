import React from "react";

export default function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const containerAlign = itsMe ? "justify-end" : "justify-start";
  const bubbleStyles = itsMe
    ? "bg-blue-600 text-white"
    : "bg-gray-700 text-gray-200";

  const time = new Date(message.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className={`flex ${containerAlign} px-4`}>
      <div className={`max-w-[75%] ${bubbleStyles} rounded-2xl px-4 py-2 mb-2`}>
        <p className="whitespace-pre-wrap break-words">{message.message}</p>
        <div className="text-right mt-1">
          <span className="text-xs text-gray-300">{time}</span>
        </div>
      </div>
    </div>
  );
}
