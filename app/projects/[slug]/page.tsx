"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Users, CheckCircle, Award, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"

// Mock project data - in real app, this would come from your CMS/API
const projectsData = {
  "saas-mvp-platform": {
    en: {
      title: "SaaS MVP Platform",
      subtitle: "AI-Powered Management Platform",
      description:
        "A comprehensive management platform developed in just 2 weeks using cutting-edge AI tools and modern web technologies. This project demonstrates the power of AI-accelerated development.",
      challenge:
        "The client needed a robust management platform but had a tight deadline and limited budget. Traditional development would have taken 3-4 months.",
      solution:
        "Leveraged AI tools like GitHub Copilot, v0.dev, and ChatGPT to accelerate development. Used Next.js for the frontend, Supabase for the backend, and implemented AI-powered features for user management and analytics.",
      results: [
        "100+ users in the first month",
        "60% reduction in development time",
        "95% customer satisfaction rate",
        "$10K MRR by month 3",
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "OpenAI API", "Vercel"],
      features: [
        "User Management System",
        "AI-Powered Analytics",
        "Real-time Dashboard",
        "API Integration",
        "Mobile Responsive Design",
        "Advanced Search & Filtering",
      ],
      timeline: "2 weeks",
      team: "2 developers",
      role: "Lead Developer & PM",
    },
    es: {
      title: "Plataforma SaaS MVP",
      subtitle: "Plataforma de Gestión con IA",
      description:
        "Una plataforma de gestión integral desarrollada en solo 2 semanas usando herramientas de IA de vanguardia y tecnologías web modernas. Este proyecto demuestra el poder del desarrollo acelerado por IA.",
      challenge:
        "El cliente necesitaba una plataforma de gestión robusta pero tenía un plazo ajustado y presupuesto limitado. El desarrollo tradicional habría tomado 3-4 meses.",
      solution:
        "Aproveché herramientas de IA como GitHub Copilot, v0.dev y ChatGPT para acelerar el desarrollo. Usé Next.js para el frontend, Supabase para el backend, e implementé características impulsadas por IA para gestión de usuarios y analytics.",
      results: [
        "100+ usuarios en el primer mes",
        "60% reducción en tiempo de desarrollo",
        "95% tasa de satisfacción del cliente",
        "$10K MRR para el mes 3",
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "OpenAI API", "Vercel"],
      features: [
        "Sistema de Gestión de Usuarios",
        "Analytics con IA",
        "Dashboard en Tiempo Real",
        "Integración de API",
        "Diseño Responsivo Móvil",
        "Búsqueda y Filtrado Avanzado",
      ],
      timeline: "2 semanas",
      team: "2 desarrolladores",
      role: "Desarrollador Principal y PM",
    },
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const [language, setLanguage] = useState<"en" | "es">("en")

  const projectData = projectsData[params.slug as keyof typeof projectsData]

  if (!projectData) {
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
    )
  }

  const t = projectData[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

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
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-gray-200 bg-white sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {language === "en" ? "Back to Home" : "Volver al Inicio"}
                </Button>
              </motion.div>
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex bg-gray-200 rounded-full p-1">
                <Button
                  variant={language === "en" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-4 ${
                    language === "en" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  EN
                </Button>
                <Button
                  variant={language === "es" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("es")}
                  className={`rounded-full px-4 ${
                    language === "es" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  ES
                </Button>
              </div>

              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" asChild>
                    <a href="https://demo.example.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="bg-gray-900 hover:bg-gray-800">
                    <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div variants={itemVariants}>
                <Badge variant="secondary" className="mb-4 bg-gray-200 text-gray-700">
                  Featured Project
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
                <h2 className="text-xl text-gray-600 mb-6">{t.subtitle}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.description}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">{t.timeline}</div>
                  <div className="text-xs text-gray-500">Timeline</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">{t.team}</div>
                  <div className="text-xs text-gray-500">Team Size</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">{t.role}</div>
                  <div className="text-xs text-gray-500">My Role</div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <a href="https://demo.example.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt={t.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4">
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
                <p className="text-gray-700 leading-relaxed">{t.challenge}</p>
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
                <p className="text-gray-700 leading-relaxed">{t.solution}</p>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === "en" ? "Results & Impact" : "Resultados e Impacto"}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.results.map((result: string, index: number) => (
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
                      {language === "en" ? "Technologies Used" : "Tecnologías Utilizadas"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {t.technologies.map((tech: string) => (
                        <motion.div key={tech} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {language === "en" ? "Key Features" : "Características Clave"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {t.features.map((feature: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
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
                      {language === "en" ? "Project Links" : "Enlaces del Proyecto"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full justify-start" asChild>
                        <a href="https://demo.example.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                        <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </motion.div>
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
              <Button size="lg" variant="outline" asChild>
                <Link href="/#projects">{language === "en" ? "View All Projects" : "Ver Todos los Proyectos"}</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
