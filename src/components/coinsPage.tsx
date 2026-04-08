"use client"; 
import { useRef } from "react";
 
const coins = [
  { name: "Tether", symbol: "USDT", price: "4,85,320", change: "+2.45%", bg: "bg-green-100", icon: "₮", iconColor: "text-green-600" },
  { name: "Bitcoin", symbol: "BTC", price: "4,85,320", change: "+2.45%", bg: "bg-orange-100", icon: "₿", iconColor: "text-orange-500" },
  { name: "BNB", symbol: "BNB", price: "4,85,320", change: "+2.45%", bg: "bg-yellow-100", icon: "B", iconColor: "text-yellow-600" },
  { name: "Ethereum", symbol: "ETH", price: "4,85,320", change: "+2.45%", bg: "bg-blue-100", icon: "Ξ", iconColor: "text-blue-500" },
  { name: "Cosmos", symbol: "ATOM", price: "4,85,320", change: "+2.45%", bg: "bg-purple-100", icon: "⚛", iconColor: "text-purple-500" },
  { name: "Solana", symbol: "SOL", price: "4,85,320", change: "+2.45%", bg: "bg-indigo-100", icon: "◎", iconColor: "text-indigo-500" },
];
 
const row2 = [
  { name: "Bitcoin", symbol: "BTC", price: "4,85,320", change: "+2.45%", bg: "bg-orange-100", icon: "₿", iconColor: "text-orange-500" },
  { name: "Ethereum", symbol: "ETH", price: "4,85,320", change: "+2.45%", bg: "bg-blue-100", icon: "Ξ", iconColor: "text-blue-500" },
  { name: "BNB", symbol: "BNB", price: "4,85,320", change: "+2.45%", bg: "bg-yellow-100", icon: "B", iconColor: "text-yellow-600" },
  { name: "Cosmos", symbol: "ATOM", price: "4,85,320", change: "+2.45%", bg: "bg-purple-100", icon: "⚛", iconColor: "text-purple-500" },
  { name: "Tether", symbol: "USDT", price: "4,85,320", change: "+2.45%", bg: "bg-green-100", icon: "₮", iconColor: "text-green-600" },
  { name: "Solana", symbol: "SOL", price: "4,85,320", change: "+2.45%", bg: "bg-indigo-100", icon: "◎", iconColor: "text-indigo-500" },
];
 
interface Coin {
  name: string;
  symbol: string;
  price: string;
  change: string;
  bg: string;
  icon: string;
  iconColor: string;
}
 
function CoinCard({ coin }: { coin: Coin }) {
  return (
    <div className="min-w-[250px] bg-gray-100 border border-gray rounded-2xl p-1 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer flex-shrink-0">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-8 h-8 rounded-full ${coin.bg} flex items-center justify-center`}>
          <span className={`text-sm font-bold ${coin.iconColor}`}>{coin.icon}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 leading-tight ">{coin.name}
            <span className="text-xs ml-2 text-gray-400">{coin.symbol}</span>
          </p>
        </div>
      </div>
      <hr className="bg-white h-0.5" />
      <div className=" flex  gap-23">
      <p className="text-base font-bold text-gray-900 mb-1">${coin.price}</p>
      <span className="inline-flex gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        {coin.change}
      </span>
      </div>

    </div>
  );
}
 
function ScrollRow({ coins }: { coins: Coin[] }) {
  const rowRef = useRef<HTMLDivElement>(null);
 
  return (
    <div
      ref={rowRef}
      className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {coins.map((coin, i) => (
        <CoinCard key={i} coin={coin} />
      ))}
    </div>
  );
}
 
export default function TopCoinPicks() {
  return (
    <section className="bg-gradient-to-br from-slate-100 to-indigo-100 px-4 py-14 text-center">
     
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
        TOP{" "}
        <span className="text-blue-600">COIN99</span>{" "}
        PICKS
      </h2>
 
     
      <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6 leading-relaxed">
        Trade, invest, and manage cryptocurrency with institutional-grade security
        and compliance. Access 200+ digital assets on India's most trusted platform.
      </p>
 
   
      <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-150 text-white text-sm font-semibold px-7 py-2.5 rounded-lg mb-8 shadow-md">
        Explore Now
      </button>
 

      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        <ScrollRow coins={coins} />
        <ScrollRow coins={row2} />
      </div>
    </section>
  );
}
