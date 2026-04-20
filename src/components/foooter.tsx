"use client";

import Grid99 from "./grid99";
import { FaGithub, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between p-8 bg-gray-400 dark:bg-black transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-5 px-4 md:mt-1">
          <div className="flex flex-col gap-5 md:gap-2">
            <h1 className="text-2xl text-black dark:text-white font-bold">
              COIN <span className="text-blue-600">99</span>
            </h1>

            <p className="text-gray-700 dark:text-gray-400 md:text-sm max-w-xs">
              Coin99 brings together token creation, launchpads, trading,
              payments, and blockchain infrastructure into a single powerful
              ecosystem.
            </p>
          </div>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex gap-4">
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank">
              <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-blue-400/50 hover:scale-110 transition duration-300">
                <FaXTwitter className="w-5 h-5 text-black dark:text-white" />
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com" target="_blank">
              <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-blue-400/50 hover:scale-110 transition duration-300">
                <FaGithub className="w-5 h-5 text-black dark:text-white" />
              </div>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank">
              <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-red-400/50 hover:scale-110 transition duration-300">
                <FaYoutube className="w-5 h-5 text-black dark:text-white" />
              </div>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank">
              <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-pink-400/50 hover:scale-110 transition duration-300">
                <FaInstagram className="w-5 h-5 text-black dark:text-white" />
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE NAV */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-8 md:mt-1 px-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-black dark:text-white font-bold">
              Products
            </h1>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              C99 Token
            </p>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              FundMe
            </p>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              Business
            </p>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              Exchange
            </p>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              99 Pay
            </p>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              Blockchain
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-black dark:text-white font-bold">
              Resources
            </h1>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              Documentation
            </p>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              Blog
            </p>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              Support
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-black dark:text-white font-bold">
              Company
            </h1>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              About
            </p>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              Contact
            </p>
            <p className="text-gray-600 dark:text-gray-400 md:text-sm">
              Support
            </p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <Grid99 className="mt-5 ml-4 mr-4 md:ml-15 md:mr-15" />

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 gap-4 md:gap-0">
        <p className="text-white ml-3 md:ml-1 md:text-sm">
          © 2026 — Copyright. All Rights reserved
        </p>

        <div className="flex gap-4 md:gap-7 text-gray-200 hover:text-white transition-colors ml-3 md:ml-0 flex-wrap">
          <a href="" className="md:text-sm">
            Privacy policy
          </a>
          <a href="" className="md:text-sm">
            Terms of service
          </a>
          <a href="" className="md:text-sm">
            Cookie Settings
          </a>
        </div>
      </div>
    </div>
  );
}