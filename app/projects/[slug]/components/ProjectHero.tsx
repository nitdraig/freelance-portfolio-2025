"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Users,
  CheckCircle,
  Award,
  Clock,
  Zap,
  TrendingUp,
  Heart,
  Target,
  Layers,
} from "lucide-react";
import Image from "next/image";

const ProjectHero = ({
  project,
  language,
  containerVariants,
  itemVariants,
}: any) => {
  return (
    <section className={`py-24 px-4 bg-gradient-to-r ${project.color}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <motion.div variants={itemVariants}>
              <Badge
                variant="secondary"
                className="mb-4 bg-white/20 text-white backdrop-blur-sm"
              >
                {project.featured ? "Featured Project" : "Project"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title[language]}
              </h1>
              <h2 className="text-xl font-medium opacity-80 mb-6">
                {project.shortDescription[language]}
              </h2>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                {project.description[language]}
              </p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-6 mb-8">
              {project.year && (
                <div className="text-center">
                  <Clock className="h-6 w-6 text-white/80 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{project.year}</div>
                  <div className="text-xs text-white/70">
                    {language === "en" ? "Year" : "Año"}
                  </div>
                </div>
              )}
              <div className="text-center">
                <CheckCircle className="h-6 w-6 text-white/80 mx-auto mb-2" />
                <div className="text-sm font-semibold">
                  {project.status === "active"
                    ? language === "en"
                      ? "Active"
                      : "Activo"
                    : project.status === "archived"
                    ? language === "en"
                      ? "Archived"
                      : "Archivado"
                    : language === "en"
                    ? "In Development"
                    : "En Desarrollo"}
                </div>
                <div className="text-xs text-white/70">
                  {language === "en" ? "Status" : "Estado"}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {language === "en" ? "View Live Demo" : "Ver Demo"}
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {project.githubUrl ? (
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {language === "en" ? "Source Code" : "Código Fuente"}
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    disabled
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    {language === "en"
                      ? "Source Code Unavailable"
                      : "Código Fuente No Disponible"}
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title[language]}
                width={900}
                height={800}
                className="w-full h-full object-cover "
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectHero;
