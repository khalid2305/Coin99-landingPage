"use client";
import { Search, Bell, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4 lg:px-6 py-4 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-black dark:text-white">
          <span className="text-xl font-bold">
            COIN<span className="text-blue-600">99</span>
          </span>
          <span className="hidden lg:block font-bold">| TOKEN</span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-black dark:text-white">
          <div>RESOURCE</div>
          <div>ABOUT</div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-1 w-56 lg:w-80">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none bg-transparent placeholder-gray-400 dark:text-white"
            />
            <div className="ml-2 px-2 py-1 text-sm border rounded-md text-gray-500">
              /
            </div>
          </div>
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
          <img src="./Framesvg.svg" className="w-5 h-5 cursor-pointer" />
          <button className="border border-gray-400 dark:border-gray-600 px-4 py-2 rounded-md dark:text-white">
            Sign Up
          </button>
        </div>

        <div className="lg:hidden">
          <Menu
            className="w-6 h-6 cursor-pointer text-black dark:text-white"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 mt-4 lg:hidden text-black dark:text-white">
          <div>RESOURCE</div>
          <div>ABOUT</div>
          <div className="flex items-center border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5" />
            <img src="./Framesvg.svg" className="w-5 h-5" />
          </div>
          <button className="border border-gray-400 px-4 py-2 rounded-md w-full">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}