"use client";
import { ThemeToggle } from "./theme";
import Grid99 from "./grid99";
export default function Hero() {
  return (
    <div className="flex flex-col relative items-center gap-3 bg-white dark:bg-gray-900 text-black dark:text-white border-none">
      <div className=" mt-20 font-bold text-black dark:text-white">
        <h1 className="text-4xl">
          <span className="ml-15">BUILD, LAUNCH, TRADE</span> <br />
          ALL IN ONE CRYPTO UNIVERSE
        </h1>
      </div>
      <Grid99 className="absolute left-20 top-50"/>
      {/* <ThemeToggle/> */}
      <div className="text-gray-500 dark:text-gray-400">
        Coin99 brings together token creation, launchpads, trading,
        <br />
        payments, and blockchain infrastructure into a single powerful <br />
        <span className="ml-40">ecosystem.</span>
      </div>
      <div className=" mt-10 border-3 rounded-2xl h-63 w-[440px] dark:border-gray-600">
        <div className="flex items-center justify-center ml-0.5 border-3 rounded-2xl h-47 w-[430px] bg-blue-500">
              <h1 className="font-bold text-white text-3xl">C99</h1>
        </div>
        <div className="flex flex-col  gap-0.5">
          <h1>COIN99 TOKEN</h1>
          <p>Create and manage your own digital assets effortlessly</p>
        </div>
      </div>
      <Grid99 className="absolute right-0 top-100"/>
    </div>
  );
}
