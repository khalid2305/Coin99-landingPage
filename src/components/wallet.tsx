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
    <div className="relative flex flex-col items-center justify-between w-full h-[500px] bg-[url('/back.png')] bg-cover bg-center p-3 bg-white dark:bg-gray-950">
      <div className="absolute top-10 left-10 w-[242px] h-[155px]">
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
        className="absolute w-[300px] top-20"
      />
     
      <div className="absolute top-60 right-10 w-[242px] h-[155px]">
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
      
      <div className="flex items-center justify-center gap-4 mt-auto mb-5">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          START YOUR INDIAN CRYPTO JOURNEY
        </h1>
      
        <button className="bg-white dark:bg-gray-800 text-violet-500 border-2 border-black dark:border-gray-700 px-6 py-2 rounded-lg font-bold">
          Signup
        </button>
      </div>

    </div>
  );
}