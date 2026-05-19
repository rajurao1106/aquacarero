import React from "react";
import { FaSearch, FaRegUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" fixed z-50 bg-white w-full flex justify-center items-center">
      <header className=" w-full max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-20 items-center justify-between border-b border-gray-100">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#0b2f61]">
              AquacareRO
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden space-x-8 md:flex">
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-sky-500"
            >
              Home{" "}
            </a>
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-sky-500"
            >
              About Us{" "}
            </a>
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-sky-500"
            >
              Our Services
            </a>
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-sky-500"
            >
              FAQ{" "}
            </a>
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-sky-500"
            >
              Contact Us
            </a>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden rounded-xl bg-[#22a5f1] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-500 sm:block shadow-sm">
              Заказать звонок
            </button>

            {/* Search Icon Button */}
            <button
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-gray-600 transition-colors hover:bg-gray-100"
              aria-label="Search"
            >
              <FaSearch className="h-4 w-4" />
            </button>

            {/* User Profile Button */}
            <button
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-gray-600 transition-colors hover:bg-gray-100"
              aria-label="User profile"
            >
              <FaRegUser className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>
    </nav>
  );
}
