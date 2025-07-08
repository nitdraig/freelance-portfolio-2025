"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = {
  en: [
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {localizedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {testimonial.text}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold"
                    >
                      {testimonial.name.charAt(0)}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900">
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
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
