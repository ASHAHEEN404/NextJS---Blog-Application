"use client";

import React from "react";
import Link from "next/link";
import { routes } from "./routes";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full p-6 mb-1 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-700">
      <nav className="flex items-center justify-center gap-8">
        {routes.map((item) => (
          <Link
            className={`px-5 py-3 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 ${
              pathname === item.href
                ? "bg-white text-gray-900 font-semibold shadow-md"
                : "text-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
            key={item.title}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
