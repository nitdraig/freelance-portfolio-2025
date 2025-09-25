"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = {
  en: [
    {
      text: "Exceptionally talented, flexible, good eye for frontend and detail. Trustworthy.",
      name: "Mike Massoud",
      role: "CEO at AroundNotes",
    },
    {
      text: "Agustín has demonstrated a notorious ability to transform complex visions into tangible products. Its approach is practical and results -oriented, with a responsibility and discipline that guarantee the fulfillment of the deadlines. ",
      name: "Pablo Vegvarel",
      role: "CEO at Personas",
    },
    {
      text: "Agustín is an exceptionally intelligent and strategic individual, capable of tackling the most complex challenges with clarity and precision. His professionalism and ability to think long-term make him an invaluable contributor to any team.",
      name: "Manuel Esteban Florez Lopez",
      role: "CTO at InkuA",
    },
  ],
  es: [
    {
      text: "Excepcionalmente talentoso, flexible, buen ojo para frontend y sus detalles. Confiable.",
      name: "Mike Massoud",
      role: "CEO at AroundNotes",
    },
    {
      text: "Agustín ha demostrado una notoria habilidad para transformar visiones complejas en productos tangibles. Su enfoque es práctico y orientado a resultados, con una responsabilidad y disciplina que garantizan el cumplimiento de los plazos. ",
      name: "Pablo Vegvarel",
      role: "CEO en Personas",
    },
    {
      text: "Agustín es un individuo excepcionalmente inteligente y estratégico, capaz de abordar los desafíos más complejos con claridad y precisión. Su profesionalismo y su capacidad para pensar a largo plazo lo convierten en un contribuyente invaluable a cualquier equipo ",
      name: "Manuel Esteban Florez Lopez",
      role: "CTO en InkuA",
    },
  ],
};

const TestimonialSection = ({ language }: { language: "en" | "es" }) => {
  const localizedTestimonials = testimonials[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % localizedTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, localizedTestimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % localizedTestimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + localizedTestimonials.length) % localizedTestimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === "en" ? "Testimonials" : "Testimonios"}
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {localizedTestimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full max-w-2xl mx-auto">
                      <CardHeader>
                        <div className="flex items-center gap-1 mb-4 justify-center">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                            >
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>
                        <CardDescription className="text-gray-600 text-lg text-center leading-relaxed">
                          "{testimonial.text}"
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3 justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg"
                          >
                            {testimonial.name.charAt(0)}
                          </motion.div>
                          <div className="text-center">
                            <p className="font-semibold text-gray-900 text-lg">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:bg-gray-50 z-10"
            aria-label={language === "en" ? "Previous testimonial" : "Testimonio anterior"}
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:bg-gray-50 z-10"
            aria-label={language === "en" ? "Next testimonial" : "Siguiente testimonio"}
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {localizedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                  ? "bg-gray-900 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`${language === "en" ? "Go to testimonial" : "Ir al testimonio"} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
