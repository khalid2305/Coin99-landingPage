"use client";
 
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
 
const accordionItems = [
  {
    title: "C99 TOKEN",
    content:
      "Trade with confidence using advanced tools, real-time data, and a secure trading environment.",
  },
  { title: "FUNDME", content: "Launch and fund your blockchain projects with ease using Coin99's FundMe platform." },
  { title: "BUSINESS", content: "Accept crypto payments and manage your business finances on-chain." },
  { title: "CENTRALISED EXCHANGE", content: "Trade 200+ assets on India's most trusted centralised exchange." },
  { title: "PAY 99", content: "Send, receive and pay with crypto instantly using Pay99." },
  { title: "BLOCKCHAIN 99", content: "Build and deploy on the Coin99 blockchain infrastructure." },
];
 
const chartData = [
  { day: "Mon 15", value: 3000 },
  { day: "Tue 16", value: 4500 },
  { day: "Wed 17", value: 4000 },
  { day: "Thu 18", value: 6000 },
  { day: "Fri 19", value: 7500 },
  { day: "Sat 20", value: 9000 },
  { day: "Sun 21", value: 12000 },
];
 
export default function Ecosystem() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
 
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
 
  return (
    <section className="bg-white px-6 py-16 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
 
      
        <div>
 
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            EXPLORE THE{" "}
            <span className="text-blue-600">COIN99</span>{" "}
            ECOSYSTEM
          </h2>
 
    
          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm">
            Discover a complete suite of tools designed to help you create tokens,
            launch projects, trade assets, accept payments, and build on blockchain
            — all within the Coin99 ecosystem.
          </p>
 
        
          <div className="flex flex-col divide-y divide-gray-100 border-t border-gray-100">
            {accordionItems.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-sm font-bold text-gray-800 tracking-wide">
                    {item.title}
                  </span>
                  <span className="text-gray-400 text-lg leading-none">
                    {openIndex === i ? "^" : "⌄"}
                  </span>
                </button>
                {openIndex === i && (
                  <p className="text-sm text-gray-500 pb-4 leading-relaxed">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
 
       
        <div className="flex justify-center">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-5 w-full max-w-sm">
 
      
            <p className="text-center text-xs font-semibold text-gray-400 tracking-widest mb-4">
              COIN99
            </p>
 
   
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-semibold text-gray-700">Coin99</span>
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">C99</span>
              <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-medium">₮</span>
            </div>
 
            <p className="text-3xl font-extrabold text-gray-900 mb-1">$9.99</p>
            <p className="text-xs text-green-500 font-medium mb-4">↑ 2.5% in 24 Hours</p>
 
          
            <p className="text-xs font-semibold text-gray-500 mb-2">Trading Schedule</p>
 
   
            <div className="h-40 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 9, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 9, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v / 1000}k`}
                    domain={[0, 15000]}
                    ticks={[0, 3000, 6000, 9000, 12000, 15000]}
                  />
                  <Tooltip
                    contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                    formatter={(v: unknown) => [`$${Number(v).toLocaleString()}`, "Price"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
 
     
            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs font-semibold text-gray-500 mb-3">Details</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Market Cap</p>
                  <p className="text-lg font-extrabold text-gray-900">
                    $9.99<span className="text-blue-500 text-base">B</span>
                  </p>
                  <p className="text-xs text-green-500 font-medium">↑ 4.74%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Volume (24h)</p>
                  <p className="text-lg font-extrabold text-gray-900">
                    $9.9<span className="text-blue-500 text-base">M</span>
                  </p>
                  <p className="text-xs text-green-500 font-medium">↑ 15.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </div>
      
    </section>
  );
}