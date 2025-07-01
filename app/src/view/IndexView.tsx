"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { HeroSection } from "./IndexView/hero-section";
import AboutSection from "./IndexView/AboutSection";
import ServicesSection from "./IndexView/ServicesSection";
import { ProjectsSection } from "./IndexView/projects-section";
import BlogSection from "./IndexView/BlogSection";
import TestimonialSection from "./IndexView/TestimonialSection";
import ContactSection from "./IndexView/ContactSection";
import MainLayout from "../layouts/MainLayout";

const IndexView = () => {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <HeroSection language={language} />

      <AboutSection language={language} />

      <ServicesSection language={language} />

      <ProjectsSection language={language} />

      {/* <BlogSection language={language} /> */}

      {/* <TestimonialSection language={language} /> */}

      <ContactSection language={language} />
    </div>
  );
};

export default IndexView;
