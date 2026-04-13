"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type contentType = 1 | 2 | 3 | 4 | 5 | 6;

interface Card {
  id: number;
  contentType: contentType;
}

interface HeroCardsProps {
  onCardChange?: (contentType: contentType) => void;
}

const cardData = {
  1: {
    title: "C99 TOKEN",
    description: "Create and manage your own digital assets effortlessly",
    image: "/card-1.svg",
  },
  2: {
    title: "COIN99 CEX",
    description: "Trade assets with speed, security, and precision.",
    image: "/card-2.svg",
  },
  3: {
    title: "PAY 99",
    description: "Accept and manage crypto payments worldwide",
    image: "/card-3.svg",
  },
  4: {
    title: "FUND ME",
    description: "Launch and fund your ideas globally",
    image: "/card-4.svg",
  },
  5: {
    title: "BUSINESS LAUNCHPAD",
    description: "Raise capital with structured institutional tools.",
    image: "/card-5.svg",
  },
  6: {
    title: "BLOCKCHAIN",
    description: "Build scalable and secure decentralized applications.",
    image: "/card-6.svg",
  },
};

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
  { id: 4, contentType: 4 },
  { id: 5, contentType: 5 },
  { id: 6, contentType: 6 },
];

const VISIBLE_CARDS = 4;

function getPositionStyles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    scale: 1 - i * 0.05,
    y: 12 - i * 28,
  }));
}

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
};

const enterAnimation = {
  y: -16,
  scale: 0.9,
};

function CardContent({ contentType }: { contentType: contentType }) {
  const data = cardData[contentType];

  return (
    <div className="flex w-full flex-col">
      <div className="flex h-[200px] w-full items-center justify-center overflow-hidden p-1.5">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover rounded-[16px] select-none"
        />
      </div>

      <div className="flex w-full items-center justify-between gap-2 px-4 pt-2 pb-4">
        <div className="flex min-w-0 flex-1 flex-col gap-1 overflow-hidden">
          <span className="font-semibold text-[16px] truncate">
            {data.title}
          </span>
          <span className="text-[14px] text-gray-500 truncate">
            {data.description}
          </span>
        </div>

        <button className="flex h-10 shrink-0 items-center justify-center rounded-full bg-black text-white p-2">
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
}

function AnimatedCard({
  card,
  index,
  totalVisible,
}: {
  card: Card;
  index: number;
  totalVisible: number;
}) {
  const positionStyles = getPositionStyles(totalVisible);
  const { scale, y } =
    positionStyles[index] ?? positionStyles[positionStyles.length - 1];

  const zIndex = totalVisible - index;

  const exitAnim = index === 0 ? exitAnimation : undefined;
  const initialAnim = index === totalVisible - 1 ? enterAnimation : undefined;

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale, zIndex }}
      exit={exitAnim}
      transition={{ type: "spring", duration: 1, bounce: 0 }}
      style={{
        left: "50%",
        x: "-50%",
        bottom: 20,
      }}
      className="absolute flex h-[300px] w-full max-w-[520px] items-center justify-center rounded-[22px] border bg-white shadow-md overflow-hidden"
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  );
}

export default function HeroCards({ onCardChange }: HeroCardsProps) {
  const [cards, setCards] = useState(initialCards);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextId, setNextId] = useState(7);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const visibleCards = useMemo(
    () => cards.slice(0, VISIBLE_CARDS),
    [cards]
  );

  const handleAnimate = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    const nextContentType = ((cards[cards.length - 1].contentType % 6) +
      1) as contentType;

    setCards((prevCards) => {
      const updated = [
        ...prevCards.slice(1),
        { id: nextId, contentType: nextContentType },
      ];

      // ✅ FIXED (correct state usage)
      onCardChange?.(updated[0].contentType);

      return updated;
    });

    setNextId((prev) => prev + 1);

    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleAnimate();
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAnimating]);

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[340px] w-full max-w-[640px] overflow-hidden">
        <AnimatePresence initial={false}>
          {visibleCards.map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              index={index}
              totalVisible={VISIBLE_CARDS}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}