import React from "react";
import { Background } from "../components/react-bits/Background";
import { StaggeredMenu } from "../components/react-bits/StaggeredMenu";
import { Footer } from "../sections/Footer";
import { PortfolioAssistant } from "../components/PortfolioAssistant";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#090a0f] text-white flex flex-col selection:bg-amber-500 selection:text-black relative">
      {/* React Bits Ambient Background */}
      <Background />

      {/* React Bits Staggered Navigation */}
      <StaggeredMenu />

      {/* Main Page Flow */}
      <main className="flex-1 w-full pb-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Portfolio AI Assistant */}
      <PortfolioAssistant />
    </div>
  );
};

export default MainLayout;
