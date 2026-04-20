"use client";

import React, { createContext, useContext, useState } from "react";

type AuthTab = "signin" | "signup";

interface BrandingContextType {
  activeCardTitle: string;
  setActiveCardTitle: (title: string) => void;
  isAuthOpen: boolean;
  authTab: AuthTab;
  openAuth: (tab: AuthTab) => void;
  closeAuth: () => void;
}

const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

export function BrandingProvider({ children }: { children: React.ReactNode }) {
  const [activeCardTitle, setActiveCardTitle] = useState("TOKEN");
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<AuthTab>("signup");

  const openAuth = (tab: AuthTab) => {
    setAuthTab(tab);
    setIsAuthOpen(true);
  };

  const closeAuth = () => setIsAuthOpen(false);

  return (
    <BrandingContext.Provider
      value={{
        activeCardTitle,
        setActiveCardTitle,
        isAuthOpen,
        authTab,
        openAuth,
        closeAuth,
      }}
    >
      {children}
    </BrandingContext.Provider>
  );
}

export function useBranding() {
  const context = useContext(BrandingContext);
  if (context === undefined) {
    throw new Error("useBranding must be used within a BrandingProvider");
  }
  return context;
}
