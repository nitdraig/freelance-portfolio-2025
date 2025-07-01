import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import Image from "next/image";
import { useLanguage } from "@/app/src/contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <header className="sticky top-0 z-50 w-full  bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-[ #1C1124]/60">
      <div className="container text-[#E5E5E5] px-10 flex h-16 items-center justify-between">
        <Link href="/#" className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/logo-black.png"
            alt="Logo"
            width={120}
            height={50}
            className=" h-full w-[5rem] invert hover:translate-y-0.5 transition-transform duration-300 ease-in-out "
          />
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/#about"
            className="text-sm font-medium hover:text-[#A78EC4] transition-colors"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-medium hover:text-[#A78EC4] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            className="text-sm font-medium hover:text-[#A78EC4] transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:text-[#A78EC4] transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-1">
          <Button
            variant={language === "en" ? "default" : "ghost"}
            size="sm"
            onClick={toggleLanguage}
            className={`rounded-full px-4 ${
              language === "en"
                ? "bg-white text-gray-900"
                : "text-white hover:bg-white/10"
            }`}
          >
            EN
          </Button>
          <Button
            variant={language === "es" ? "default" : "ghost"}
            size="sm"
            onClick={toggleLanguage}
            className={`rounded-full px-4 ${
              language === "es"
                ? "bg-white text-gray-900"
                : "text-white hover:bg-white/10"
            }`}
          >
            ES
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
