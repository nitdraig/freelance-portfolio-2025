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
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { projects } from "@/app/src/data/data";
import { useLanguage } from "@/app/src/contexts/LanguageContext";

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

  // Obtener el icono correcto basado en el proyecto
  const codeOut =
    "El proyecto no tiene un enlace de demostración, pero puedes ver el código en GitHub.";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
                <h2 className="text-xl opacity-90 mb-6">
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

      {/* Project Details */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === "en" ? "The Challenge" : "El Desafío"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "en"
                    ? "This project aimed to solve critical industry challenges by developing innovative solutions."
                    : "Este proyecto buscaba resolver desafíos críticos de la industria desarrollando soluciones innovadoras."}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === "en" ? "The Solution" : "La Solución"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "en"
                    ? "We implemented cutting-edge technologies and methodologies to deliver a robust and scalable solution."
                    : "Implementamos tecnologías y metodologías de vanguardia para entregar una solución robusta y escalable."}
                </p>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === "en"
                    ? "Results & Impact"
                    : "Resultados e Impacto"}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    language === "en"
                      ? "Improved user experience by 40%"
                      : "Experiencia de usuario mejorada en un 40%",
                    language === "en"
                      ? "Reduced operational costs by 25%"
                      : "Costos operativos reducidos en un 25%",
                    language === "en"
                      ? "Increased customer satisfaction"
                      : "Satisfacción del cliente incrementada",
                    language === "en"
                      ? "Scalable architecture for future growth"
                      : "Arquitectura escalable para crecimiento futuro",
                  ].map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-900 font-medium">
                        {result}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {language === "en"
                        ? "Technologies Used"
                        : "Tecnologías Utilizadas"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-700"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {language === "en"
                        ? "Project Links"
                        : "Enlaces del Proyecto"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full justify-start">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {language === "en" ? "Live Demo" : "Demo en Vivo"}
                        </a>
                      </Button>
                    </motion.div>
                    {project.githubUrl ? (
                      <Button
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
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {language === "en" ? "More Projects" : "Más Proyectos"}
          </h3>

          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link href="/#projects">
                  {language === "en"
                    ? "View All Projects"
                    : "Ver Todos los Proyectos"}
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
