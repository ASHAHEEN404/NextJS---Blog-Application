import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="fixed w-64 h-full p-6 text-white shadow-lg bg-gradient-to-b from-gray-800 to-gray-900">
      <h1 className="mb-6 text-2xl font-extrabold tracking-wider text-white">
        Dashboard
      </h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="block px-4 py-3 transition duration-300 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-4 py-3 transition duration-300 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-md"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block px-4 py-3 transition duration-300 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-md"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-3 transition duration-300 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-md"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
