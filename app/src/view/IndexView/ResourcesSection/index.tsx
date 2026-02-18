"use client";

import { m } from "framer-motion";
import { useState } from "react";
import { BookOpen } from "lucide-react";
import { resources } from "@/app/src/data/resources";
import { resourcesSectionContent } from "./content";
import { ResourcesSectionHeader } from "./ResourcesSectionHeader";
import { ResourceCard } from "./ResourceCard";
import { ResourceModal } from "./ResourceModal";

export default function ResourcesSection({ language }: { language: "en" | "es" }) {
  const [hoveredResource, setHoveredResource] = useState<string | null>(null);
  const [selectedResource, setSelectedResource] = useState<typeof resources[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const content = resourcesSectionContent[language];

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

  const handleOpenModal = (resource: typeof resources[0]) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedResource(null);
  };

  return (
    <m.section
      id="resources"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <ResourcesSectionHeader title={content.title} subtitle={content.subtitle} />

        {resources.length > 0 ? (
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid gap-8 ${
              resources.length === 1
                ? "grid-cols-1 justify-items-center max-w-md mx-auto"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                language={language}
                content={content}
                isHovered={hoveredResource === resource.id}
                onHoverStart={() => setHoveredResource(resource.id)}
                onHoverEnd={() => setHoveredResource(null)}
                onOpenModal={() => handleOpenModal(resource)}
              />
            ))}
          </m.div>
        ) : (
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">{content.comingSoon}</p>
          </m.div>
        )}

        {selectedResource && (
          <ResourceModal
            resource={selectedResource}
            language={language}
            content={content}
            open={isModalOpen}
            onOpenChange={(open) => {
              setIsModalOpen(open);
              if (!open) setSelectedResource(null);
            }}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </m.section>
  );
}
