"use client";

import Grid99 from "./grid99";

export default function Heros() {
  return (
    <div className="flex flex-col relative items-center gap-3 bg-white dark:bg-gray-900 text-black dark:text-white border-none">
      <div className=" mt-20 font-bold text-black dark:text-white">
        <h1 className="text-4xl">
          <span className="ml-15">BUILD, LAUNCH, TRADE</span> <br />
          ALL IN ONE CRYPTO UNIVERSE
        </h1>
      </div>
      <Grid99 className="absolute left-20 top-50"/>
      <div className="text-gray-500 dark:text-gray-400">
        Coin99 brings together token creation, launchpads, trading,
        <br />
        payments, and blockchain infrastructure into a single powerful <br />
        <span className="ml-40">ecosystem.</span>
      </div>

      <Grid99 className="absolute right-0 top-100"/>
    </div>
  );
}