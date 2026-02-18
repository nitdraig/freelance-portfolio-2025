"use client";

import { m } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects } from "../../data/data";

export function ProjectsSection({ language }: any) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3); // Mostrar 3 inicialmente

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // Mostrar 3 más cada vez
  };

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

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === "es" ? "Proyectos Destacados" : "Featured Projects"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es"
              ? "Algunos ejemplos de MVPs y productos que he desarrollado y lanzado."
              : "Some examples of MVPs and products I have developed and launched."}
          </p>
        </m.div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, visibleCount).map((project: any) => {
            return (
              <m.div
                key={project.slug}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredProject(project.slug)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <Card className="border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                  >
                    <m.div
                      animate={{
                        scale: hoveredProject === project.slug ? 1.1 : 1,
                        rotate: hoveredProject === project.slug ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title[language]} - Screenshot del proyecto`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center"
                      />
                    </m.div>

                    <m.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.slug ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3"
                    >
                      <m.div
                        initial={{ scale: 0.95 }}
                        animate={{
                          scale: hoveredProject === project.slug ? 1 : 0.95,
                        }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        <Button size="sm" variant="secondary" asChild>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </m.div>
                      <m.div
                        initial={{ scale: 0.95 }}
                        animate={{
                          scale: hoveredProject === project.slug ? 1 : 0.95,
                        }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                      >
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={`/projects/${project.slug}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                      </m.div>
                    </m.div>

                    {/* {project.featured && (
                      <m.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="absolute top-3 right-3"
                      >
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-900"
                        >
                          Featured
                        </Badge>
                      </m.div>
                    )} */}
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-gray-900 group-hover:text-gray-700 transition-colors">
                      {project.title[language]}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {hoveredProject === project.slug
                        ? project.description[language]
                        : project.shortDescription[language]}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: any) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <m.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredProject === project.slug ? 1 : 0,
                        y: hoveredProject === project.slug ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-2 md:opacity-0 md:group-hover:opacity-100 opacity-100"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gray-900 hover:bg-gray-800"
                        asChild
                      >
                        <Link href={`/projects/${project.slug}`}>
                          <Eye className="h-3 w-3 mr-1" />
                          {language === "en" ? "View" : "Ver"}
                        </Link>
                      </Button>
                    </m.div>
                  </CardContent>
                </Card>
              </m.div>
            );
          })}
        </m.div>

        {/* Show More Button */}
        {visibleCount < projects.length && (
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-8 bg-transparent"
                onClick={handleShowMore}
              >
                {language === "en" ? "See More" : "Ver Más"}
              </Button>
            </m.div>
          </m.div>
        )}
      </div>
    </section>
  );
}
