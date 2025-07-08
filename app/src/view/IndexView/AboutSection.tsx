import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Rocket, Users } from "lucide-react";

const AboutSection = ({ language }: any) => {
  const skillsEs = ["Liderazgo", "Escalado", "Estrategia", "Ventas"];
  const skillsEn = ["Leadership", "Scaling", "Strategy", "Sales"];
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-white"
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
            {language === "en" ? "About Me" : "Sobre Mí"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "en"
              ? "I transform ideas into functional products using AI and manage the entire launch process."
              : "Transformo ideas en productos funcionales usando IA y gestiono todo el proceso de lanzamiento."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <Card className="border-gray-400 shadow-sm hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 bg-gray-100 rounded-lg"
                  >
                    <Code className="h-6 w-6 text-gray-700" />
                  </motion.div>
                  <CardTitle className="text-2xl text-gray-900">
                    {language === "es"
                      ? "Desarrollo Fullstack"
                      : "Fullstack Development"}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-base">
                  {language === "es"
                    ? "Creo productos completos usando las últimas tecnologías y herramientas de IA para acelerar el desarrollo."
                    : "I create complete products using the latest technologies and AI tools to accelerate development."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "AI Tools"].map(
                    (tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Card className="border-gray-400 shadow-sm hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 bg-gray-100 rounded-lg"
                  >
                    <Users className="h-6 w-6 text-gray-700" />
                  </motion.div>
                  <CardTitle className="text-2xl text-gray-900">
                    {language === "es"
                      ? "Gestión de Proyectos"
                      : "Project Management"}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-base">
                  {language === "es"
                    ? "Lidero equipos, escalamos productos y gestiono todo el proceso desde la idea hasta el lanzamiento."
                    : "I lead teams, scale products and manage the entire process from idea to launch."}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {(language === "es" ? skillsEs : skillsEn).map(
                    (skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
