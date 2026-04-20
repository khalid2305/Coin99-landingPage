"use client";
import { Search, Bell, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { AuthModal } from "./AuthModal";
import { useBranding } from "./brandingContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { activeCardTitle, isAuthOpen, authTab, openAuth, closeAuth } = useBranding();

  const [displayedTitle, setDisplayedTitle] = useState(activeCardTitle);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (activeCardTitle === displayedTitle) return;

    setAnimating(true);

    const timer = setTimeout(() => {
      setDisplayedTitle(activeCardTitle);
      setAnimating(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [activeCardTitle]);

  return (
    <>
      <style>{`
        @keyframes slideOutUp {
          from { transform: translateY(0); opacity: 1; }
          to   { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes slideInUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        .title-slide-out {
          animation: slideOutUp 0.25s ease forwards;
        }
        .title-slide-in {
          animation: slideInUp 0.25s ease forwards;
        }
      `}</style>

      <div className="px-4 lg:px-6 py-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex items-center justify-between relative w-full">

          {/* Logo */}
          <div className="flex items-center gap-2 text-black dark:text-white z-10 shrink-0">
            <span className="text-xl font-bold whitespace-nowrap">
              COIN<span className="text-blue-600">99</span>
            </span>

            {/* | static, title animates */}
            <div className="flex items-center gap-1 overflow-hidden h-6">
              <span className="font-bold whitespace-nowrap">|</span>
              <div className="overflow-hidden h-6 flex items-center">
                <span
                  className={`font-bold whitespace-nowrap ${
                    animating ? "title-slide-out" : "title-slide-in"
                  }`}
                >
                  {displayedTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Center nav */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-black dark:text-white">
            <div className="hover:text-blue-600 cursor-pointer transition-colors">RESOURCE</div>
            <div className="hover:text-blue-600 cursor-pointer transition-colors">ABOUT</div>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4 z-10 shrink-0">
            <div className="flex items-center border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-1 w-56 lg:w-60 xl:w-80 transition-colors">
              <Search className="w-4 h-4 text-gray-500 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none bg-transparent placeholder-gray-400 dark:text-white min-w-0"
              />
              <div className="ml-2 px-2 py-1 text-sm border rounded-md text-gray-500 shrink-0">/</div>
            </div>
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer shrink-0" />
            <img src="./Framesvg.svg" className="w-5 h-5 cursor-pointer shrink-0" alt="globe" />
            <button
              onClick={() => openAuth("signup")}
              className="border border-gray-400 dark:border-gray-600 px-4 py-2 rounded-md dark:text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-200 text-sm font-medium whitespace-nowrap"
            >
              Sign Up
            </button>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <Menu
              className="w-6 h-6 cursor-pointer text-black dark:text-white shrink-0"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col gap-4 mt-4 lg:hidden text-black dark:text-white">
            <div className="hover:text-blue-600 cursor-pointer transition-colors">RESOURCE</div>
            <div className="hover:text-blue-600 cursor-pointer transition-colors">ABOUT</div>
            <div className="flex items-center border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-500 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none bg-transparent dark:text-white min-w-0"
              />
            </div>
            <div className="flex items-center gap-4">
              <Bell className="w-5 h-5" />
              <img src="./Framesvg.svg" className="w-5 h-5" alt="globe" />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => openAuth("signin")}
                className="flex-1 border border-gray-400 dark:border-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuth("signup")}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>

      {isAuthOpen && <AuthModal defaultTab={authTab} onClose={closeAuth} />}
    </>
  );
}