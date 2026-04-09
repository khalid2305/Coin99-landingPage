import { Link } from "lucide-react";
import Grid99 from "./grid99";

export default function Footer() {
  return (
    <div className=" flex flex-col justify-between p-8 bg-gray-400 dark:bg-black transition-colors duration-300">
      <div className=" flex  justify-between">
        <div className="flex flex-col gap-5 mt-15 ml-15 mr-15">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl text-black dark:text-white font-bold">
              COIN <span className="text-blue-600">99</span>
            </h1>
            <p className="text-gray-700 dark:text-gray-400">
              Coin99 brings together token creation, launchpads, trading,
              payments, and <br />
              blockchain infrastructure into a single powerful ecosystem.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center shadow-md"></div>
            <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center shadow-md"></div>
            <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center shadow-md"></div>
            <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center shadow-md"></div>
          </div>
        </div>
        <div className="flex gap-10 mt-15 ml-15 mr-15">
          <div className="flex flex-col gap-3">
            <h1 className="text-black dark:text-white font-bold ">Products</h1>
            <p className="text-gray-600 dark:text-gray-400">C99 Token</p>
            <p className="text-gray-600 dark:text-gray-400">FundMe</p>
            <p className="text-gray-600 dark:text-gray-400">Business</p>
            <p className="text-gray-600 dark:text-gray-400">Exchange</p>
            <p className="text-gray-600 dark:text-gray-400">99 Pay</p>
            <p className="text-gray-600 dark:text-gray-400">Blockchain</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-black dark:text-white font-bold ">Resources</h1>
            <p className="text-gray-600 dark:text-gray-400">Documentation</p>
            <p className="text-gray-600 dark:text-gray-400">Blog</p>
            <p className="text-gray-600 dark:text-gray-400">Support</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-black dark:text-white font-bold ">Company</h1>
            <p className="text-gray-600 dark:text-gray-400">About</p>
            <p className="text-gray-600 dark:text-gray-400">Contact</p>
            <p className="text-gray-600 dark:text-gray-400">Support</p>
          </div>
        </div>
      </div>
      <Grid99 className="mt-5 ml-15 mr-15"/>
      <div className="flex items-center justify-between m-10 ">
         <p className="text-white   ml-3 mr-15">© 2026 — Copyright. All Rights reserved</p>
         <div className="flex gap-5 text-gray-200 hover:text-white transition-colors">
            <a href="">Privacy policy</a>
            <a href="">Terms of service</a>
            <a href="">Cookie Settings</a>
         </div>
      </div>
    </div>
  );
}
