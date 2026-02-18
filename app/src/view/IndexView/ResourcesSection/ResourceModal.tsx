"use client";

import { m } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { Resource } from "@/app/src/data/resources";

type Content = (typeof import("./content")["resourcesSectionContent"])["en"];

type Props = {
  resource: Resource;
  language: "en" | "es";
  content: Content;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
};

export function ResourceModal({
  resource,
  language,
  content,
  open,
  onOpenChange,
  onClose,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            {resource.coverImage ? (
              <div className="relative w-32 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={resource.coverImage}
                  alt={resource.title[language]}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-32 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-12 w-12 text-white/80" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-2">
                <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  {resource.title[language]}
                </DialogTitle>
              </div>
              <DialogDescription className="text-base text-gray-600 mb-4">
                {resource.subtitle[language]}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 mb-4">
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
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {content.description}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {resource.description[language]}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {content.whatsIncluded}
            </h3>
            <ul className="space-y-3">
              {resource.highlights[language].map((highlight, idx) => (
                <m.li
                  key={highlight}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </m.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {content.tags}
            </h3>
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
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
          <Button variant="outline" onClick={onClose}>
            {content.close}
          </Button>
          <Button className="bg-gray-900 hover:bg-gray-800" asChild>
            <a
              href={resource.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4 mr-2" />
              {resource.isFree ? content.download : content.getNow}
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
