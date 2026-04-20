"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

/* ─── per-accordion data ──────────────────────────── */
const accordionItems = [
  {
    title: "C99 TOKEN",
    badge: "C99",
    price: "$9.99",
    change: "+2.5%",
    marketCap: "$9.99B",
    volume: "$9.9M",
    color: "#3b82f6",
    content:
      "Trade with confidence using advanced tools, real-time data, and a secure trading environment.",
    chart: [
      { day: "Mon", value: 3000 },
      { day: "Tue", value: 4500 },
      { day: "Wed", value: 4000 },
      { day: "Thu", value: 6000 },
      { day: "Fri", value: 7500 },
      { day: "Sat", value: 9000 },
      { day: "Sun", value: 12000 },
    ],
  },
  {
    title: "FUNDME",
    badge: "FME",
    price: "$4.20",
    change: "+5.1%",
    marketCap: "$4.2B",
    volume: "$3.1M",
    color: "#8b5cf6",
    content:
      "Launch and fund your blockchain projects with ease using Coin99's FundMe platform.",
    chart: [
      { day: "Mon", value: 1200 },
      { day: "Tue", value: 2800 },
      { day: "Wed", value: 2200 },
      { day: "Thu", value: 3500 },
      { day: "Fri", value: 4800 },
      { day: "Sat", value: 5500 },
      { day: "Sun", value: 7000 },
    ],
  },
  {
    title: "BUSINESS",
    badge: "BIZ",
    price: "$2.75",
    change: "+1.8%",
    marketCap: "$2.75B",
    volume: "$1.8M",
    color: "#10b981",
    content:
      "Accept crypto payments and manage your business finances on-chain.",
    chart: [
      { day: "Mon", value: 800 },
      { day: "Tue", value: 1500 },
      { day: "Wed", value: 1200 },
      { day: "Thu", value: 2000 },
      { day: "Fri", value: 2500 },
      { day: "Sat", value: 3200 },
      { day: "Sun", value: 4100 },
    ],
  },
  {
    title: "CENTRALISED EXCHANGE",
    badge: "CEX",
    price: "$7.50",
    change: "+3.3%",
    marketCap: "$7.5B",
    volume: "$6.2M",
    color: "#f59e0b",
    content:
      "Trade 200+ assets on India's most trusted centralised exchange.",
    chart: [
      { day: "Mon", value: 4500 },
      { day: "Tue", value: 5200 },
      { day: "Wed", value: 4800 },
      { day: "Thu", value: 7000 },
      { day: "Fri", value: 8500 },
      { day: "Sat", value: 9800 },
      { day: "Sun", value: 11000 },
    ],
  },
  {
    title: "PAY 99",
    badge: "P99",
    price: "$1.99",
    change: "+0.9%",
    marketCap: "$1.99B",
    volume: "$0.8M",
    color: "#ec4899",
    content:
      "Send, receive and pay with crypto instantly using Pay99.",
    chart: [
      { day: "Mon", value: 500 },
      { day: "Tue", value: 900 },
      { day: "Wed", value: 700 },
      { day: "Thu", value: 1100 },
      { day: "Fri", value: 1400 },
      { day: "Sat", value: 1800 },
      { day: "Sun", value: 2500 },
    ],
  },
  {
    title: "BLOCKCHAIN 99",
    badge: "B99",
    price: "$12.40",
    change: "+6.7%",
    marketCap: "$12.4B",
    volume: "$11.3M",
    color: "#06b6d4",
    content:
      "Build and deploy on the Coin99 blockchain infrastructure.",
    chart: [
      { day: "Mon", value: 6000 },
      { day: "Tue", value: 7500 },
      { day: "Wed", value: 7000 },
      { day: "Thu", value: 9000 },
      { day: "Fri", value: 10500 },
      { day: "Sat", value: 12000 },
      { day: "Sun", value: 14000 },
    ],
  },
];

/* ─── single card content (shared) ───────────────── */
function CardContent({ item }: { item: (typeof accordionItems)[0] }) {
  return (
    <>
      <p className="text-center text-xs font-semibold text-gray-400 tracking-widest mb-4 uppercase">
        COIN99
      </p>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.title}</span>
        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{ backgroundColor: `${item.color}22`, color: item.color }}>
          {item.badge}
        </span>
      </div>
      <p className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">{item.price}</p>
      <p className="text-xs text-green-500 font-medium mb-4">↑ {item.change} in 24 Hours</p>
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Trading Schedule</p>
      <div className="h-40 mb-4">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <BarChart data={item.chart} barSize={20}>
            <XAxis dataKey="day" tick={{ fontSize: 9, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 9, fill: "#9ca3af" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
            <Tooltip
              contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
              formatter={(v: unknown) => [`$${Number(v).toLocaleString()}`, "Price"]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {item.chart.map((_, idx) => (
                <Cell key={idx} fill={idx === item.chart.length - 1 ? item.color : `${item.color}55`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="border-t border-gray-200/60 pt-4">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">Details</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400 mb-1">Market Cap</p>
            <p className="text-lg font-extrabold text-gray-900 dark:text-white">
              {item.marketCap.slice(0, -1)}<span style={{ color: item.color }} className="text-base">{item.marketCap.slice(-1)}</span>
            </p>
            <p className="text-xs text-green-500 font-medium">↑ {item.change}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Volume (24h)</p>
            <p className="text-lg font-extrabold text-gray-900 dark:text-white">
              {item.volume.slice(0, -1)}<span style={{ color: item.color }} className="text-base">{item.volume.slice(-1)}</span>
            </p>
            <p className="text-xs text-green-500 font-medium">↑ 15.6%</p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── main section ────────────────────────────────── */
export default function Ecosystem() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex(i);
  const active = accordionItems[openIndex];

  return (
    <section className="bg-[#f0f4ff] dark:bg-gray-950 px-6 py-16 md:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* ── LEFT: accordion ── */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            EXPLORE THE{" "}
            <span className="text-blue-600">COIN99</span>{" "}
            ECOSYSTEM
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-sm">
            Discover a complete suite of tools designed to help you create
            tokens, launch projects, trade assets, accept payments, and build on
            blockchain — all within the Coin99 ecosystem.
          </p>

          <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800 border-t border-gray-100 dark:border-gray-800">
            {accordionItems.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center py-4 text-left group"
                >
                  <span
                    className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                      openIndex === i
                        ? "text-blue-600"
                        : "text-gray-800 dark:text-gray-200 group-hover:text-blue-500"
                    }`}
                  >
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" as const }}
                    className="text-gray-400 text-lg leading-none"
                  >
                    ⌄
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.p
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden text-sm text-gray-500 dark:text-gray-400 pb-4 leading-relaxed"
                    >
                      {item.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: stacked card deck ── */}
        <div className="flex justify-center sticky top-8">
          <div className="relative w-full max-w-sm" style={{ height: 520 }}>
            {accordionItems.map((item, i) => {
              const dist = i - openIndex;
              const absDist = Math.abs(dist);
              const isActive = dist === 0;
              if (absDist > 2) return null;

              const bgTint = isActive ? `${item.color}18` : `${item.color}0a`;
              const borderTint = isActive ? `${item.color}50` : `${item.color}25`;
              const yOffset = isActive ? 0 : -absDist * 20;
              const scaleVal = isActive ? 1 : 1 - absDist * 0.04;
              const opacityVal = isActive ? 1 : 1 - absDist * 0.35;
              const zIdx = isActive ? 10 : 10 - absDist;

              return (
                <motion.div
                  key={item.title}
                  animate={{ y: yOffset, scale: scaleVal, opacity: opacityVal }}
                  transition={{ duration: 0.45, ease: "easeOut" as const }}
                  className="absolute inset-x-0 rounded-2xl shadow-lg"
                  style={{
                    top: 0,
                    zIndex: zIdx,
                    background: bgTint,
                    border: `1.5px solid ${borderTint}`,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {/* active card: full content */}
                  {isActive && (
                    <div className="p-5">
                      <CardContent item={item} />
                    </div>
                  )}
                  {/* background cards: just title peek */}
                  {!isActive && (
                    <div className="p-5 flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                        {item.title}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: `${item.color}22`, color: item.color }}
                      >
                        {item.badge}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}