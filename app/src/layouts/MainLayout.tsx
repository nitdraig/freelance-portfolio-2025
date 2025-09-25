"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "../contexts/LanguageContext";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LanguageProvider>
        <main className="flex-1 text-white">
          <Navbar />
          {children}
          <Footer />
        </main>
      </LanguageProvider>
    </>
  );
};

export default MainLayout;
