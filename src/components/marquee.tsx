"use client";

const items = [
  "🔥 Bitcoin",
  "🚀 Ethereum",
  "💎 Solana",
  "⚡ BNB",
  "🌐 Tether",
];

export default function SimpleMarquee() {
  return (
    <div className="w-full overflow-hidden bg-black py-4">
      
      <div className="flex w-max marquee">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-6 text-white text-lg font-semibold whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}