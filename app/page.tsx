"use client";

import Navbar from "@/src/components/navbar";
import Image from "next/image";
import Hero from "@/src/components/hero";
import HeroSection from "@/src/components/heroSection";
import CoinPage from "@/src/components/coinsPage";
import EcoSystem from "@/src/components/Ecosystem";
import SignupEco from "@/src/components/signup";
import Wallet from "@/src/components/wallet";
import Footer from "@/src/components/foooter";
import SectionSwitch from "@/src/components/framerMotion";
import FundMe from "@/src/components/EcoSystem/fundme";
import SimpleMarquee from "@/src/components/marquee";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeroSection/>
        <CoinPage/>
        <EcoSystem/>
        <SignupEco/>
        <Wallet/>
        <Footer/>
        <SectionSwitch/>
        <FundMe/>
        <SimpleMarquee/>
    </div>
  );
}
