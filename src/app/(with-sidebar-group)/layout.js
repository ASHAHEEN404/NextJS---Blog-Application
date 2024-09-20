import Sidebar from "@/components/Sidebar";
import React from "react";


export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
