import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Rocket, Brain, TrendingUp } from "lucide-react";
const ServicesSection = ({ language }: any) => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === "es" ? <>Que Hago?</> : <>What I Do?</>}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es" ? (
              <>
                {" "}
                Transformo ideas en productos funcionales usando IA, gestionando
                todo el proceso de lanzamiento.
              </>
            ) : (
              <>
                I transform ideas into functional products using AI and manage
                the entire launch process.
              </>
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: (
                <>
                  {" "}
                  {language === "es" ? (
                    <>MVP potenciado con IA</>
                  ) : (
                    <>AI-Powered MVP</>
                  )}
                </>
              ),
              description: (
                <>
                  {" "}
                  {language === "es" ? (
                    <>
                      {" "}
                      Rápido desarrollo de productos mínimos de mercado usando
                      herramientas de IA para acelerar el proceso.
                    </>
                  ) : (
                    <>
                      Rapid development of minimum viable products using AI
                      tools to accelerate the process.
                    </>
                  )}
                </>
              ),
            },
            {
              icon: Rocket,
              title: (
                <>
                  {" "}
                  {language === "es" ? (
                    <>Lanzamiento Completo</>
                  ) : (
                    <>Complete Launch</>
                  )}
                </>
              ),
              description: (
                <>
                  {" "}
                  {language === "es" ? (
                    <>
                      Me encargo de todo el proceso desde el desarrollo hasta el
                      mantenimiento y escalado.
                    </>
                  ) : (
                    <>
                      I take care of the whole process from development to
                      maintenance and scaling.
                    </>
                  )}
                </>
              ),
            },
            {
              icon: TrendingUp,
              title: (
                <>
                  {language === "es" ? (
                    <>Escalado y Ventas</>
                  ) : (
                    <>Scaling & Sales</>
                  )}
                </>
              ),
              description: (
                <>
                  {language === "es" ? (
                    <>
                      Ayudo a escalar el producto, liderar equipos y establecer
                      estrategias de crecimiento.
                    </>
                  ) : (
                    <>
                      I help scale the product, lead teams and establish growth
                      strategies.
                    </>
                  )}
                </>
              ),
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center h-full">
                <CardHeader>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto p-3 bg-gray-900 rounded-full w-fit mb-4"
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
