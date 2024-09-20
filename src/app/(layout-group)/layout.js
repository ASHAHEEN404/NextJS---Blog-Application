import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex">
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
