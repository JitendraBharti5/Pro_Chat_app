import React, { useEffect } from "react";
import useConversation from "../../zustand/useConversation.js";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import NoChatSelected from "./NoChatSelected";

export default function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // clear old conversation when unmounting
  useEffect(() => () => setSelectedConversation(null), [setSelectedConversation]);

  return (
    <section className="flex flex-col w-full h-screen text-gray-300 bg-slate-900">
      {selectedConversation ? (
        <>
          <Chatuser />
          <Messages />
          <Typesend />
        </>
      ) : (
        <NoChatSelected />
      )}
    </section>
  );
}
