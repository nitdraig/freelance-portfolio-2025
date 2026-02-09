"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Download, BookOpen, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { resources, Resource } from "../../data/resources";

export default function ResourcesSection({ language }: { language: "en" | "es" }) {
    const [hoveredResource, setHoveredResource] = useState<string | null>(null);
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const content = {
        en: {
            title: "Resources",
            subtitle: "Free guides and ebooks to help you grow as a professional.",
            download: "Download Free",
            getNow: "Get Now",
            new: "New",
            free: "Free",
            featured: "Featured",
        },
        es: {
            title: "Recursos",
            subtitle: "Guías y ebooks gratuitos para ayudarte a crecer como profesional.",
            download: "Descargar Gratis",
            getNow: "Obtener Ahora",
            new: "Nuevo",
            free: "Gratis",
            featured: "Destacado",
        },
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

    const handleOpenModal = (resource: Resource) => {
        setSelectedResource(resource);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedResource(null);
    };

    return (
        <motion.section
            id="resources"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-20 px-4 bg-white"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {content[language].title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {content[language].subtitle}
                    </p>
                </motion.div>

                {/* Resources Grid */}
                {resources.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`grid gap-8 ${resources.length === 1
                            ? "grid-cols-1 justify-items-center max-w-md mx-auto"
                            : "md:grid-cols-2 lg:grid-cols-3"
                            }`}
                    >
                        {resources.map((resource: Resource) => {
                            return (
                                <motion.div
                                    key={resource.id}
                                    whileHover={{ y: -8 }}
                                    onHoverStart={() => setHoveredResource(resource.id)}
                                    onHoverEnd={() => setHoveredResource(null)}
                                    className="group cursor-pointer"
                                    onClick={() => handleOpenModal(resource)}
                                >
                                    <Card className="border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                                        <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                                            {resource.coverImage ? (
                                                <motion.div
                                                    animate={{
                                                        scale: hoveredResource === resource.id ? 1.1 : 1,
                                                        rotate: hoveredResource === resource.id ? 5 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <img
                                                        src={resource.coverImage}
                                                        alt={resource.title[language]}
                                                        className="h-full w-full object-cover object-center"
                                                        loading="lazy"
                                                        width="400"
                                                        height="300"
                                                    />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    animate={{
                                                        scale: hoveredResource === resource.id ? 1.1 : 1,
                                                        rotate: hoveredResource === resource.id ? 5 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-center p-6"
                                                >
                                                    <BookOpen className="h-16 w-16 text-white/80 mx-auto mb-4" />
                                                    <p className="text-white/60 text-sm">
                                                        {language === "es" ? "Portada" : "Cover"}
                                                    </p>
                                                </motion.div>
                                            )}

                                            {/* Badges */}
                                            <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                                                {resource.isNew && (
                                                    <Badge className="bg-green-500 text-white border-0">
                                                        <Sparkles className="h-3 w-3 mr-1" />
                                                        {content[language].new}
                                                    </Badge>
                                                )}
                                                {resource.isFree && (
                                                    <Badge className="bg-blue-500 text-white border-0">
                                                        {content[language].free}
                                                    </Badge>
                                                )}
                                                {resource.isFeatured && (
                                                    <Badge className="bg-purple-500 text-white border-0">
                                                        {content[language].featured}
                                                    </Badge>
                                                )}
                                            </div>

                                            {/* Hover Overlay */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: hoveredResource === resource.id ? 1 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3"
                                            >
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{
                                                        scale: hoveredResource === resource.id ? 1 : 0,
                                                    }}
                                                    transition={{ delay: 0.1, duration: 0.2 }}
                                                >
                                                    <Button size="sm" variant="secondary" asChild>
                                                        <a
                                                            href={resource.downloadUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Download className="h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                </motion.div>
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{
                                                        scale: hoveredResource === resource.id ? 1 : 0,
                                                    }}
                                                    transition={{ delay: 0.2, duration: 0.2 }}
                                                >
                                                    <Button
                                                        size="sm"
                                                        variant="secondary"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleOpenModal(resource);
                                                        }}
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-gray-900 group-hover:text-gray-700 transition-colors">
                                                {resource.title[language]}
                                            </CardTitle>
                                            <CardDescription className="text-gray-600">
                                                {hoveredResource === resource.id
                                                    ? resource.description[language]
                                                    : resource.subtitle[language]}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {resource.tags.map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="secondary"
                                                        className="bg-gray-100 text-gray-700 text-xs"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{
                                                    opacity: hoveredResource === resource.id ? 1 : 0,
                                                    y: hoveredResource === resource.id ? 0 : 10,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="flex gap-2 md:opacity-0 md:group-hover:opacity-100 opacity-100"
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="flex-1 bg-transparent"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}
                                                    asChild
                                                >
                                                    <a
                                                        href={resource.downloadUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Download className="h-3 w-3 mr-1" />
                                                        {language === "en" ? "Download" : "Descargar"}
                                                    </a>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="flex-1 bg-gray-900 hover:bg-gray-800"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleOpenModal(resource);
                                                    }}
                                                >
                                                    <ExternalLink className="h-3 w-3 mr-1" />
                                                    {language === "en" ? "View" : "Ver"}
                                                </Button>
                                            </motion.div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ) : (
                    /* Empty State */
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center py-12"
                    >
                        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">
                            {language === "es"
                                ? "Próximamente: más recursos disponibles"
                                : "Coming soon: more resources available"}
                        </p>
                    </motion.div>
                )}

                {/* Modal */}
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        {selectedResource && (
                            <>
                                <DialogHeader>
                                    <div className="flex items-start gap-4 mb-4">
                                        {selectedResource.coverImage ? (
                                            <img
                                                src={selectedResource.coverImage}
                                                alt={selectedResource.title[language]}
                                                className="w-32 h-48 object-cover rounded-lg flex-shrink-0"
                                            />
                                        ) : (
                                            <div className="w-32 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <BookOpen className="h-12 w-12 text-white/80" />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                                                    {selectedResource.title[language]}
                                                </DialogTitle>
                                            </div>
                                            <DialogDescription className="text-base text-gray-600 mb-4">
                                                {selectedResource.subtitle[language]}
                                            </DialogDescription>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {selectedResource.isNew && (
                                                    <Badge className="bg-green-500 text-white border-0">
                                                        <Sparkles className="h-3 w-3 mr-1" />
                                                        {content[language].new}
                                                    </Badge>
                                                )}
                                                {selectedResource.isFree && (
                                                    <Badge className="bg-blue-500 text-white border-0">
                                                        {content[language].free}
                                                    </Badge>
                                                )}
                                                {selectedResource.isFeatured && (
                                                    <Badge className="bg-purple-500 text-white border-0">
                                                        {content[language].featured}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </DialogHeader>

                                <div className="space-y-6">
                                    {/* Description */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {language === "es" ? "Descripción" : "Description"}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {selectedResource.description[language]}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            {language === "es" ? "Qué incluye" : "What's Included"}
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedResource.highlights[language].map((highlight, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{highlight}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tags */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            {language === "es" ? "Etiquetas" : "Tags"}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedResource.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="bg-gray-100 text-gray-700"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <DialogFooter className="mt-6">
                                    <Button
                                        variant="outline"
                                        onClick={handleCloseModal}
                                    >
                                        {language === "es" ? "Cerrar" : "Close"}
                                    </Button>
                                    <Button
                                        className="bg-gray-900 hover:bg-gray-800"
                                        asChild
                                    >
                                        <a
                                            href={selectedResource.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Download className="h-4 w-4 mr-2" />
                                            {selectedResource.isFree
                                                ? content[language].download
                                                : content[language].getNow}
                                        </a>
                                    </Button>
                                </DialogFooter>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </motion.section>
    );
}
