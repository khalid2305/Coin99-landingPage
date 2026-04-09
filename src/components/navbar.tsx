import { Search, Globe, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4  bg-white dark:bg-gray-900">
      <div className="flex items-center gap-2 text-black dark:text-white">
        <span className="text-xl font-bold">
          COIN<span className="text-blue-600">99</span>
        </span>
        <span className="font-bold text-black dark:text-white">| TOKEN</span>
      </div>
      <div className="flex items-center gap-8 text-black dark:text-white">
        <div>
          RESOURCE
        </div>
        <div>
          ABOUT
        </div>
      </div>
      <div className="flex items-center gap-4 p-1 bg-white-100">
        <div className="flex items-center border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-1 w-[420px]">
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />

          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none bg-transparent placeholder-gray-400 dark:text-white"
          />

          <div className="ml-2 px-2 py-1 text-sm border rounded-md text-gray-500 dark:text-gray-400">
            /
          </div>
        </div>

        <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />

        <button className="border border-gray-400 dark:border-gray-600 px-4 py-2 rounded-md dark:text-white">
          Sign Up
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
}
