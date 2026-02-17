"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "../contexts/LanguageContext";

import AboutSection from "./IndexView/AboutSection";
import ServicesSection from "./IndexView/ServicesSection";
import { ProjectsSection } from "./IndexView/ProjectsSection";
import BlogSection from "./IndexView/BlogSection";
import ResourcesSection from "./IndexView/ResourcesSection";
import TestimonialSection from "./IndexView/TestimonialSection";
import { HeroSection } from "./IndexView/HeroSection";

const ContactSection = dynamic(
  () => import("./IndexView/ContactSection"),
  { ssr: false }
);

const IndexView = () => {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <ProjectsSection language={language} />
      <BlogSection language={language} />
      <ResourcesSection language={language} />
      <TestimonialSection language={language} />
      <Suspense fallback={<section id="contact" className="py-20 px-4 bg-gray-50 min-h-[400px]" />}>
        <ContactSection language={language} />
      </Suspense>
    </div>
  );
};

export default IndexView;
