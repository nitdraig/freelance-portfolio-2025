import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import Image from "next/image";
import { useLanguage } from "@/app/src/contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <header className="fixed top-0 z-50 w-full  bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-[ #1C1124]/60">
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
            className="text-md font-medium hover:text-[#A78EC4] transition-colors"
          >
            {language === "es" ? <>Yo</> : <>Me</>}
          </Link>
          <Link
            href="/#projects"
            className="text-md font-medium hover:text-[#A78EC4] transition-colors"
          >
            {language === "es" ? <>Casos de éxito</> : <>Success Cases</>}
          </Link>

          <Link
            href="/#contact"
            className="text-md font-medium hover:text-[#A78EC4] transition-colors"
          >
            {language === "es" ? <> Contactarme</> : <>Contact</>}
          </Link>
          <Link
            href="/#blogs"
            className="text-md font-medium hover:text-[#A78EC4] transition-colors"
          >
            Blogs
          </Link>
        </nav>

        <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-1">
          <Button
            variant={language === "en" ? "default" : "ghost"}
            size="sm"
            onClick={toggleLanguage}
            className={`rounded-full px-4 ${
              language === "en"
                ? "bg-white text-gray-900 hover:text-white/90"
                : "text-white hover:bg-black hover:text-white "
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
                ? "bg-white text-gray-900 hover:text-white/90"
                : "text-white hover:bg-black hover:text-white "
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
