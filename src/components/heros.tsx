"use client";

export default function Heros() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-white dark:bg-gray-900 text-black dark:text-white border-none max-sm:h-[500px] pt-32 sm:pt-20 md:pt-28 pb-20 sm:pb-10 md:pb-16 px-4 text-center">
      
      <div className="font-extrabold text-black dark:text-white mx-auto z-10 px-4">
        <h1 className="text-[28px] sm:text-[36px] md:text-[46px] lg:text-[46px] xl:text-[62px] leading-[1.15] uppercase tracking-tight">
          BUILD, LAUNCH, TRADE<br />ALL IN ONE CRYPTO UNIVERSE
        </h1>
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-center max-w-[650px] mx-auto z-10 text-[15px] md:text-lg lg:text-[19px] mt-2 font-medium leading-relaxed px-2">
        Coin99 brings together token creation, launchpads, trading, payments, and blockchain infrastructure into a single powerful ecosystem.
      </div>
    </div>
  );
}