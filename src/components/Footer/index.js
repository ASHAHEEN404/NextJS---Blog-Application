import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full gap-10 p-5 text-white shadow-lg bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="text-sm font-semibold">
        &copy; {new Date().getFullYear()} Abdallah Shaheen @ ITI. All rights
        reserved.
      </div>
      <div className="flex gap-5">
        <Link
          href="/privacy-policy"
          className="text-white transition-colors duration-300 hover:text-slate-300"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-service"
          className="text-white transition-colors duration-300 hover:text-slate-300"
        >
          Terms of Service
        </Link>
        <Link
          href="/contact"
          className="text-white transition-colors duration-300 hover:text-slate-300"
        >
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
