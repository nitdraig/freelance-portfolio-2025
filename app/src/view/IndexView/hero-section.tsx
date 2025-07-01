"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Download,
  Code,
  Brain,
  Rocket,
  Award,
  Coffee,
} from "lucide-react";
import Image from "next/image";

export function HeroSection({ language }: any) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 z-10"></div>
        <Image
          src="/agustin-hero.png?height=1080&width=1920"
          alt="Developer workspace background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column - Text Content */}
        <div className="text-white">
          <motion.div variants={itemVariants} className="mt-0">
            {/* <Badge
              variant="secondary"
              className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 bg-green-400 rounded-full mr-2"
              />
              {language === "es" ? <>Disponible</> : <> Available</>}
            </Badge> */}

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Agustin Avellaneda
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium mb-4 text-white/90"
            >
              {language === "es" ? (
                <>AI-Powered Fullstack Developer & PM</>
              ) : (
                <> AI-Powered Fullstack Developer & PM</>
              )}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 mb-4 leading-relaxed max-w-2xl"
            >
              {language === "es" ? (
                <>
                  Transformo ideas en productos exitosos utilizando van
                  Herramientas de IA y metodologías probadas de gestión de
                  proyectos.
                </>
              ) : (
                <>
                  I transform ideas into successful products using cutting-edge
                  AI tools and proven project management methodologies.
                </>
              )}
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 mb-4"
          >
            {[
              {
                number: "5+",
                label: (
                  <>
                    {language === "es" ? (
                      <>Años de experiencia</>
                    ) : (
                      <>Years Experience</>
                    )}
                  </>
                ),
              },
              {
                number: "50+",
                label: (
                  <>
                    {language === "es" ? (
                      <> Proyectos Entregados</>
                    ) : (
                      <>Projects Delivered</>
                    )}
                  </>
                ),
              },
              {
                number: "25+",
                label: (
                  <>
                    {language === "es" ? (
                      <>Clientes satisfechos</>
                    ) : (
                      <> Satisfied Clients</>
                    )}
                  </>
                ),
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  className="text-2xl font-bold text-white mb-1"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4 text-white/70"
          >
            <MapPin className="h-4 w-4" />
            <span> Catamarca, Argentina 🇦🇷</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8"
              >
                <>
                  {language === "es" ? (
                    <>Ver mis trabajos</>
                  ) : (
                    <>View My Works</>
                  )}
                </>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 bg-transparent backdrop-blur-sm"
              >
                {language === "es" ? <>Hablemos!</> : <>Let's talk!</>}
              </Button>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 font-semibold px-8"
              >
                <Download className="mr-2 h-4 w-4" />
                {language === "es" ? <>Hablemos!</> : <>Let's talk!</>}
              </Button>
            </motion.div> */}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Profile Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Profile Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Decorative Elements */}
              {[
                { Icon: Code, position: "-top-4 -left-4", size: "w-20 h-20" },
                { Icon: Brain, position: "-top-2 -right-6", size: "w-16 h-16" },
                {
                  Icon: Rocket,
                  position: "-bottom-4 -left-6",
                  size: "w-18 h-18",
                },
                {
                  Icon: Award,
                  position: "-bottom-2 -right-4",
                  size: "w-14 h-14",
                },
              ].map(({ Icon, position, size }, index) => (
                <motion.div
                  key={index}
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  className={`absolute ${position} ${size} bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center`}
                >
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </motion.div>
              ))}

              {/* Main Profile Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl"
              >
                <Image
                  src="/profile.jpg?height=400&width=400"
                  alt="Agustin Avellaneda - AI-Powered Developer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </motion.div>

              {/* Floating Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-8 right-8 cursor-pointer"
              >
                <Badge
                  variant="secondary"
                  className="mb-4 bg-white text-black border-white/30 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="w-2 h-2 bg-green-600 rounded-full mr-2"
                  />
                  {language === "es" ? <>Disponible</> : <> Available</>}
                </Badge>
              </motion.div>

              {/* Floating Tech Stack */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Coffee className="h-4 w-4 text-gray-700" />
                  <span className="text-sm font-semibold text-gray-900">
                    React • AI • Node.js
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
