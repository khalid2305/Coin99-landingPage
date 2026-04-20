// import React from "react";
// const Nine = ({ color = "bg-black" }: { color?: string }) => {
//   const pattern = [
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [0, 1, 1, 1],
//     [0, 0, 1, 1],
//     [0, 1, 1, 1],
//   ];
//   return (
//     <div className="grid grid-cols-4 gap-[4px]">
//       {pattern.flatMap((row, rowIndex) =>
//         row.map((cell, cellIndex) => (
//           <div
//             key={`${rowIndex}-${cellIndex}`} 
//             className={`w-[13px] h-[13px] rounded-[1px] ${
//               cell ? color : "bg-transparent"
//             }`}
//           />
//         ))
//       )}
//     </div>
//   );
// };
// export const Grid99 = ({
//   className = "",
//   color,
// }: {
//   className?: string;
//   color?: string;
// }) => {
//   return (
//     <div className={`flex gap-8 select-none pointer-events-none ${className}`}>
//       <Nine color={color} />
//       <Nine color={color} />
//     </div>
//   );
// };
// export default Grid99;

import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion"
import { useTheme } from "next-themes";

const Nine = ({ activeRow }: { activeRow: number }) => {
  const { theme } = useTheme();

  const pattern = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1],
  ];

  return (
    <div className="grid grid-cols-4 gap-[4px] shrink-0">
      {pattern.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <motion.div
            key={`${rowIndex}-${cellIndex}`}
            animate={{
              backgroundColor: cell
                ? rowIndex === activeRow
                  ? theme === "dark"
                    ? "#FFFFFF"
                    : "#808080"
                  : theme === "dark"
                  ? "rgba(219, 198, 198, 0.64)"
                  : "rgba(139, 153, 174, 0.3)"
                : "rgba(0,0,0,0)",
              opacity: cell ? (rowIndex === activeRow ? 1 : 0.6) : 0,
              scale: rowIndex === activeRow ? 1.1 : 1,
            }}
            transition={{ duration: 0.1 }}
            className="w-[12px] h-[12px] rounded-[1px]"
          />
        ))
      )}
    </div>
  );
};

const Grid99 = ({ className = "" }: { className?: string }) => {
  const [activeRow, setActiveRow] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % 6);
    }, 400);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`flex gap-5 select-none pointer-events-none transition-all duration-500 ${className}`}
    >
      <Nine activeRow={activeRow} />
      <Nine activeRow={activeRow} />
    </div>
  );
};


export default Grid99;