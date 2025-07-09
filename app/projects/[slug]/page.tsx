"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { projects } from "@/app/src/data/data";
import { useLanguage } from "@/app/src/contexts/LanguageContext";
import ProjectDetails from "./components/ProjectDetails";
import { HeroSection } from "@/app/src/view/IndexView/HeroSection";
import RelatedProjects from "./components/RelatedProjects";
import ProjectHero from "./components/ProjectHero";

export default function ProjectDetail() {
  const params = useParams();
  const { language } = useLanguage();

  // Buscar el proyecto por slug
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === "en" ? "Project not found" : "Proyecto no encontrado"}
          </h1>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" ? "Back to Home" : "Volver al Inicio"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero
        language={language}
        project={project}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <ProjectDetails project={project} language={language} />
      <RelatedProjects language={language} />
    </div>
  );
}
