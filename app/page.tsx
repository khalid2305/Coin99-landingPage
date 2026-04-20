"use client";
import dynamic from "next/dynamic";
import Navbar from "@/src/components/navbar";
import Heros from "@/src/components/heros";
import HeroSection from "@/src/components/heroSection";
import SignupEco from "@/src/components/signup";
import Footer from "@/src/components/foooter";
import TopPicksSection from "@/src/components/coinsPage";
import Grid99 from "@/src/components/grid99";
import { useBranding } from "@/src/components/brandingContext";

const Hero = dynamic(() => import("@/src/components/hero"), { ssr: false });
const EcoSystem = dynamic(() => import("@/src/components/Ecosystem"), { ssr: false });
const Wallet = dynamic(() => import("@/src/components/wallet"), { ssr: false });

const cardTitles: Record<number, string> = {
  1: "C99 TOKEN",
  2: "COIN99 CEX",
  3: "PAY 99",
  4: "FUND ME",
  5: "BUSINESS LAUNCHPAD",
  6: "BLOCKCHAIN",
};

export default function Home() {
  const { setActiveCardTitle } = useBranding();

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div className="relative bg-white dark:bg-gray-900">
    <Grid99 className="
      absolute z-0 pointer-events-none select-none opacity-60
      left-1 top-100
      md:top-50 md:size-min
      sm:left-0 sm:top-[20%] 
      lg:left-4 lg:top-[30%]
      max-sm:top-102
    " />
    <Grid99 className="
      absolute z-0 pointer-events-none select-none opacity-60
      right-1 bottom-0
      sm:right-0 
      lg:right-4 lg:bottom-[8%]
    " />


        <Heros />
        <Hero onCardChange={(contentType) => setActiveCardTitle(cardTitles[contentType])} />

      </div> {/* ← this closing tag was missing before! */}

      <HeroSection />
      <TopPicksSection />
      <EcoSystem />
      <SignupEco />
      <Wallet />
      <Footer />
    </div>
  );
}