import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import useGetSocketMessage from "../../context/useGetSocketMessage.js";
import Loading from "../../components/Loading.jsx";

export default function Messages() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage();
  const endRef = useRef();

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      className="flex-1 overflow-y-auto px-2 py-3 bg-slate-900
                 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800"
    >
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <Loading />
        </div>
      ) : messages.length ? (
        messages.map((msg, i) => (
          <Message key={msg._id} message={msg} />
        ))
      ) : (
        <div className="text-center text-gray-500 mt-20">
          <p className="mb-4">Say <span className="italic">“Hi”</span> to start</p>
          <img
            src="pro-remov.png"
            alt="ProChat Logo"
            className="mx-auto w-48 opacity-60"
          />
        </div>
      )}
      <div ref={endRef} />
    </div>
  );
}
