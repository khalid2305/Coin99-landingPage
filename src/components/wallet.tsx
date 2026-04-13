"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Wallet() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-between w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[500px] bg-[url('/back.png')] bg-cover bg-center p-2 bg-white dark:bg-gray-950">

      <div className="absolute top-1 left-2 xs:top-2 xs:left-3 w-[90px] h-[58px] xs:w-[100px] xs:h-[64px] sm:w-[170px] sm:h-[110px] md:w-[220px] md:h-[140px] lg:w-[242px] lg:h-[155px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={isFlipped ? "silver" : "gold"}
            src={isFlipped ? "/Silver.png" : "/Gold.png"}
            alt="card"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-contain drop-shadow-xl"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          />
        </AnimatePresence>
      </div>

    
      <img
        src="/99.png"
        alt="99"
        className="absolute top-[62px] xs:top-[70px] sm:top-20 md:top-32 w-[60px] xs:w-[70px] sm:w-[130px] md:w-[200px] lg:w-[300px]"
      />

      <div className="absolute top-[95px] xs:top-[110px] sm:top-36 md:top-52 right-3 w-[100px] h-[64px] xs:w-[110px] xs:h-[70px] sm:w-[170px] sm:h-[110px] md:w-[220px] md:h-[140px] lg:w-[242px] lg:h-[155px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={isFlipped ? "gold2" : "silver2"}
            src={isFlipped ? "/Gold.png" : "/Silver.png"}
            alt="card"
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-contain drop-shadow-xl"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          />
        </AnimatePresence>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 mt-auto mb-1.5 px-3 w-full">
        <h1 className="text-[9px] leading-tight xs:text-[10px] sm:text-base md:text-xl lg:text-2xl font-bold text-black dark:text-white text-center">
          START YOUR INDIAN CRYPTO JOURNEY
        </h1>

        <button className="bg-white dark:bg-gray-800 text-violet-500 border-2 border-black dark:border-gray-700 px-2.5 xs:px-3 sm:px-6 py-1 xs:py-1.5 sm:py-2 rounded-lg font-bold text-[9px] xs:text-xs sm:text-base whitespace-nowrap">
          Signup
        </button>
      </div>
    </div>
  );
}