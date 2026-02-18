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
import { Download, BookOpen, Sparkles, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Resource } from "@/app/src/data/resources";

type Content = (typeof import("./content")["resourcesSectionContent"])["en"];

type Props = {
  resource: Resource;
  language: "en" | "es";
  content: Content;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onOpenModal: () => void;
};

export function ResourceCard({
  resource,
  language,
  content,
  isHovered,
  onHoverStart,
  onHoverEnd,
  onOpenModal,
}: Props) {
  return (
    <m.div
      key={resource.id}
      whileHover={{ y: -8 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="group cursor-pointer"
      onClick={onOpenModal}
    >
      <Card className="border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
        <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
          {resource.coverImage ? (
            <m.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              <Image
                src={resource.coverImage}
                alt={resource.title[language]}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </m.div>
          ) : (
            <m.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-center p-6"
            >
              <BookOpen className="h-16 w-16 text-white/80 mx-auto mb-4" />
              <p className="text-white/60 text-sm">
                {language === "es" ? "Portada" : "Cover"}
              </p>
            </m.div>
          )}

          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {resource.isNew && (
              <Badge className="bg-green-500 text-white border-0">
                <Sparkles className="h-3 w-3 mr-1" />
                {content.new}
              </Badge>
            )}
            {resource.isFree && (
              <Badge className="bg-blue-500 text-white border-0">
                {content.free}
              </Badge>
            )}
            {resource.isFeatured && (
              <Badge className="bg-purple-500 text-white border-0">
                {content.featured}
              </Badge>
            )}
          </div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3"
          >
            <m.div
              initial={{ scale: 0.95 }}
              animate={{ scale: isHovered ? 1 : 0.95 }}
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
            </m.div>
            <m.div
              initial={{ scale: 0.95 }}
              animate={{ scale: isHovered ? 1 : 0.95 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal();
                }}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </m.div>
          </m.div>
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-gray-900 group-hover:text-gray-700 transition-colors">
            {resource.title[language]}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {isHovered
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

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="flex gap-2 md:opacity-0 md:group-hover:opacity-100 opacity-100"
          >
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={(e) => e.stopPropagation()}
              asChild
            >
              <a
                href={resource.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-3 w-3 mr-1" />
                {content.downloadLabel}
              </a>
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-gray-900 hover:bg-gray-800"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal();
              }}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              {content.viewLabel}
            </Button>
          </m.div>
        </CardContent>
      </Card>
    </m.div>
  );
}
