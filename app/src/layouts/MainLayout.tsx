"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="top-center" autoClose={5000} theme="light" />
    </>
  );
};

export default MainLayout;
