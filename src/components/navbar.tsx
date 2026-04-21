"use client";
import { Search, Bell, Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AuthModal } from "./AuthModal";
import { useBranding } from "./brandingContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { activeCardTitle, isAuthOpen, authTab, openAuth, closeAuth } = useBranding();

  const [displayedTitle, setDisplayedTitle] = useState(activeCardTitle);
  const [animating, setAnimating] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent focus if user is already typing in an input or textarea
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

      <div className="px-4 lg:px-6 py-5 bg-white dark:bg-gray-900 transition-colors duration-300 sticky top-0 z-50">
        <div className="flex items-center justify-between relative w-full">

          {/* Logo */}
          <div className="flex items-center justify-start gap-2 text-black dark:text-white z-10 shrink-0">
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

          {/* Right Side: Links, Search, and Buttons grouped together */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-5 z-10 pl-8">
            {/* Nav Links */}
            <div className="flex items-center gap-6 text-black dark:text-white text-[13px] tracking-wide font-bold mr-[6px]">
              <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">
                RESOURCES <ChevronDown className="w-4 h-4 mt-[1px] opacity-70" strokeWidth={2.5} />
              </div>
              <div className="hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">ABOUT</div>
            </div>

            {/* Search Input - Stretches very wide */}
            <div className="flex flex-1 max-w-[500px] xl:max-w-[700px] items-center bg-[#FAFAFA] dark:bg-gray-800 rounded-[10px] px-3 py-[7px] transition-colors border border-gray-200/60 dark:border-gray-700 hover:border-gray-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)]">
              <Search className="w-[15px] h-[15px] text-[#94A3B8] dark:text-gray-500 mr-2 shrink-0" strokeWidth={2.5} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search"
                className="flex-1 outline-none bg-transparent placeholder-[#94A3B8] dark:text-white text-[13px] min-w-0"
              />
              <div className="ml-2 px-[7px] py-[2px] text-[11px] font-medium bg-[#F1F5F9] dark:bg-gray-700 rounded-md text-[#94A3B8] shrink-0 border border-transparent">/</div>
            </div>

            {/* Globe */}
            <Globe className="w-5 h-5 text-[#64748B] dark:text-gray-400 cursor-pointer shrink-0 hover:text-gray-900 transition-colors" strokeWidth={1.5} />

            {/* Sign Up Button */}
            <button
              onClick={() => openAuth("signup")}
              className="border border-[#E2E8F0] dark:border-gray-700 bg-white dark:bg-gray-800 px-[14px] py-[6px] rounded-[8px] text-[#2563EB] hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-700 transition-all duration-200 text-[13px] font-semibold whitespace-nowrap shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
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

        {/* Mobile overlay sidebar */}
        {open && (
          <div className="fixed inset-0 z-[100] bg-[#F7F8FA] dark:bg-zinc-950 flex flex-col h-full overflow-hidden animate-in fade-in slide-in-from-right-8 duration-300">
            {/* Header */}
            <div className="px-4 py-5 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-[#F7F8FA] dark:bg-zinc-950">
              <div className="text-[26px] font-bold text-black dark:text-white mt-1">
                COIN<span className="text-[#2563EB]">99</span>
              </div>
              <X className="w-7 h-7 cursor-pointer text-black dark:text-white" onClick={() => setOpen(false)} strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col pb-24 text-black dark:text-white">
              <div className="flex flex-col gap-7 text-[18px]">
                <div className="flex justify-between items-center cursor-pointer">
                  <span>Products</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <span>Trade</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <span>Resources</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="cursor-pointer">About</div>
              </div>

              <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-7"></div>

              <div className="flex flex-col gap-7 text-[18px]">
                <div className="flex justify-between items-center cursor-pointer">
                  <span>English</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <span>USD</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>

              <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-7"></div>

              <div className="cursor-pointer text-[18px]">Download the app</div>
            </div>

          </div>
        )}
      </div>

      {isAuthOpen && <AuthModal defaultTab={authTab} onClose={closeAuth} />}
    </>
  );
}