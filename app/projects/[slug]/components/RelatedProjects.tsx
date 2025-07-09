import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/src/contexts/LanguageContext";

const RelatedProjects = ({ language }: any) => {
  return (
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
  );
};

export default RelatedProjects;
