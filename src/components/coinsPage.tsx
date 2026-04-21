"use client"
const row1 = [

  { name: "Solana", symbol: "SOL", price: "$4,85,320", icon:"/icon.svg", change: "+2.45%" },
  { name: "Tether", symbol: "USDT", price: "$4,85,320", icon:"/icon.svg",change: "+2.45%" },
  { name: "Bitcoin", symbol: "BTC", price: "$4,85,320", icon:"/icon.svg",change: "+2.45%" },
  { name: "BNB", symbol: "BNB", price: "$4,85,320", icon:"/icon.svg",change: "+2.45%" },
  { name: "Ethereum", symbol: "ETH", price: "$4,85,320",icon:"/icon.svg" ,change: "+2.45%" },
  { name: "Cosmos", symbol: "ATOM", price: "$4,85,320", icon:"/icon.svg",change: "+2.45%" },
];

const row2 = [
  { name: "Bitcoin", symbol: "BTC", price: "$4,85,320",icon:"/icon.svg", change: "+2.45%"  },
  { name: "Ethereum", symbol: "ETH", price: "$4,85,320",icon:"/icon.svg", change: "+2.45%" },
  { name: "BNB", symbol: "BNB", price: "$4,85,320", icon:"/icon.svg",change: "+2.45%" },
  { name: "Cosmos", symbol: "ATOM", price: "$4,85,320",icon:"/icon.svg", change: "+2.45%" },
  { name: "Tether", symbol: "USDT", price: "$4,85,320", icon:"/icon.svg",change: "+2.45%" },
  { name: "Solana", symbol: "SOL", price: "$4,85,320", icon:"/icon.svg",change: "+2.45%" },
];
type Token = {
  name: string;
  symbol: string;
  price: string;
  icon:string;
  change: string;
};

const TokenCard = ({ name, symbol, price, icon,change }:Token) => {
  return (
    <div className="w-56 min-w-56 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
      <div className="flex items-center gap-2">
        <img
          src={`/${name}.svg`}
          alt={name}
          className="w-6 h-6"
        />
        <h3 className="font-semibold capitalize text-black dark:text-white">
          {name}
        </h3>
        <span className="text-sm text-gray-500">{symbol}</span>
      </div>
      <div className="my-2 border border-gray-200 dark:border-gray-700" />
      <div className="flex items-center gap-2">
        <span className="font-bold text-blue-500">{price}</span>
        <div className="flex justify-between w-[70px] h-[24px] border-1 rounded-2xl bg-[#E8FBF3]">
            <h1 className="text-green-500 text-xs"> <img src={icon} alt="" />
              {change}
            </h1>
        </div>
      </div>
    </div>
  );
};

export default function TopPicksSection() {
  return (
    <section className="w-full py-14 bg-gray-100 dark:bg-black flex flex-col items-center">
      <div className="text-center px-4 max-w-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
          TOP COIN <span className="text-blue-500">99</span> PICKS
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Trade, invest, and manage cryptocurrency easily with secure access.
        </p>
        <button className="mt-5 px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
          Explore Now
        </button>
      </div>
      <div className="w-full overflow-hidden mt-12 space-y-6">
        <div className="flex gap-4 animate-marquee">
          {[...row1, ...row1, ...row1].map((token, i) => (
            <TokenCard key={`r1-${i}`} {...token} />
          ))}
        </div>
        <div className="flex gap-4 animate-marquee-reverse">
          {[...row2, ...row2, ...row2].map((token, i) => (
            <TokenCard key={`r2-${i}`} {...token} />
          ))}
        </div>
      </div>
    </section>
  );
}

