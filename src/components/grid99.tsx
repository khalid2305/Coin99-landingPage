import React from "react";
const Nine = ({ color = "bg-[#F1F5F9]" }: { color?: string }) => {
  const pattern = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1],
  ];
  return (
    <div className="grid grid-cols-4 gap-[4px]">
      {pattern.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div
            key={`${rowIndex}-${cellIndex}`} 
            className={`w-[13px] h-[13px] rounded-[1px] ${
              cell ? color : "bg-transparent"
            }`}
          />
        ))
      )}
    </div>
  );
};
export const Grid99 = ({
  className = "",
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <div className={`flex gap-8 select-none pointer-events-none ${className}`}>
      <Nine color={color} />
      <Nine color={color} />
    </div>
  );
};
export default Grid99;