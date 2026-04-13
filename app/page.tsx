"use client";

import Navbar from "@/src/components/navbar";
import Hero from "@/src/components/hero";
import HeroSection from "@/src/components/heroSection";
import EcoSystem from "@/src/components/Ecosystem";
import SignupEco from "@/src/components/signup";
import Wallet from "@/src/components/wallet";
import Footer from "@/src/components/foooter";
import TopPicksSection from "@/src/components/coinsPage";
import { Sidebar } from "lucide-react";
import Heros from "@/src/components/heros";


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Heros/>
        <Hero/>
        <HeroSection/>
        <TopPicksSection
    />
        <EcoSystem/>
        <SignupEco/>
        <Wallet/>
        <Footer/>
        <Sidebar/>
        {/* <SectionSwitch/>
        <FundMe/>
        <SimpleMarquee/> */}
    </div>
  );
}
