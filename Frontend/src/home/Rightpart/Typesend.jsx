import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

export default function Typesend() {
  const [text, setText] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const onSubmit = async e => {
    e.preventDefault();
    if (!text.trim()) return;
    await sendMessages(text);
    setText("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="sticky bottom-0 z-10 bg-slate-800 border-t border-slate-700
                 px-4 py-3 flex items-center space-x-3"
    >
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type a message…"
        className="flex-1 bg-slate-700 text-gray-100 placeholder-gray-400
                   rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full
                   disabled:opacity-50 transition"
      >
        <IoSend className="text-white text-2xl" />
      </button>
    </form>
  );
}
