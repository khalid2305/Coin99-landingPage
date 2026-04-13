"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "C99 TOKEN",
    content: <div className="p-10 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow dark:shadow-blue-900/10">💰 Coin99 Chart</div>,
  },
  {
    title: "FUNDME",
    content: <div className="p-10 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow dark:shadow-blue-900/10">🚀 Fundraising UI</div>,
  },
  {
    title: "BUSINESS",
    content: <div className="p-10 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow dark:shadow-blue-900/10">🏢 Business Dashboard</div>,
  },
  {
    title: "EXCHANGE",
    content: <div className="p-10 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow dark:shadow-blue-900/10">📈 Trading UI</div>,
  },
];

export default function SectionSwitch() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-2 gap-10 p-10 bg-white dark:bg-gray-950 transition-colors duration-300">


      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`cursor-pointer border-b dark:border-gray-800 pb-2 transition-all ${active === index ? "text-blue-600 font-bold" : "text-gray-500 dark:text-gray-400"
              }`}
          >
            {item.title}
          </div>
        ))}
      </div>



      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{ opacity: 0.5, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {data[active].content}
          </motion.div>

        </AnimatePresence>
      </div>

    </div>
  );
}

