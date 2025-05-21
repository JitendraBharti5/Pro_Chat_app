import React from "react";
import Search from "./Search";
import UserList from "./Users";
import Logout from "./Logout";

export default function Left() {
  return (
    <aside className="flex flex-col w-80 h-screen bg-slate-900 text-gray-200">
      <header className="sticky top-0 z-10">
        <Search />
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
        <UserList />
      </main>

      <footer className="sticky bottom-0 z-10">
        <Logout />
      </footer>
    </aside>
  );
}
