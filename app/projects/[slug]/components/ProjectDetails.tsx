import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink, Github, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Language = "en" | "es";

type Project = {
  challenge?: Record<Language, string>;
  solution?: Record<Language, string>;
  results?: Record<Language, string[]>;
  tags?: string[];
  demoUrl?: string;
  githubUrl?: string;
};

interface ProjectDetailsProps {
  project: Project;
  language: Language;
}

// Helper para mensajes vacíos según el idioma
const emptyMessage = (lang: Language, field: string) => {
  const messages: Record<Language, Record<string, string>> = {
    en: {
      challenge: "Challenge description not available",
      solution: "Solution description not available",
      results: "No results available",
      tags: "No technologies listed",
    },
    es: {
      challenge: "Descripción del desafío no disponible",
      solution: "Descripción de la solución no disponible",
      results: "No hay resultados disponibles",
      tags: "No hay tecnologías listadas",
    },
  };
  return messages[lang][field] ?? "N/A";
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, language }) => {
  const lang = language === "en" ? "en" : "es";

  return (
    <section className="py-20 px-4 bg-white text-black">
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
                {lang === "en" ? "The Challenge" : "El Desafío"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {project.challenge?.[lang] ?? emptyMessage(lang, "challenge")}
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
                {lang === "en" ? "The Solution" : "La Solución"}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {project.solution?.[lang] ?? emptyMessage(lang, "solution")}
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
                {lang === "en" ? "Results & Impact" : "Resultados e Impacto"}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results?.[lang]?.length ? (
                  project.results[lang].map((result, index) => (
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
                      <span className="text-gray-900 font-medium">{result}</span>
                    </motion.div>
                  ))
                ) : (
                  <p>{emptyMessage(lang, "results")}</p>
                )}
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
                    {lang === "en" ? "Technologies Used" : "Tecnologías Utilizadas"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.length ? (
                      project.tags.map((tech) => (
                        <motion.div key={tech} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))
                    ) : (
                      <p>{emptyMessage(lang, "tags")}</p>
                    )}
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
                    {lang === "en" ? "Project Links" : "Enlaces del Proyecto"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.demoUrl && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full justify-start">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          {lang === "en" ? "Live Demo" : "Demo en Vivo"}
                        </a>
                      </Button>
                    </motion.div>
                  )}

                  {project.githubUrl ? (
                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {lang === "en" ? "Source Code" : "Código Fuente"}
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full justify-start bg-transparent" disabled>
                      <Heart className="mr-2 h-4 w-4" />
                      {lang === "en" ? "Source Code Unavailable" : "Código Fuente No Disponible"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
