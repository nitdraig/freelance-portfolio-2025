"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

const BlogSection = ({ language }: { language: "en" | "es" }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const content = {
    en: {
      blog: {
        title: "Latest Blog Posts",
        subtitle: "Insights, tutorials and resources from our team.",
        readMore: "Read More",
      },
    },
    es: {
      blog: {
        title: "Últimas Publicaciones",
        subtitle: "Consejos, tutoriales y recursos del equipo.",
        readMore: "Leer Más",
      },
    },
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://${language}.blog.agustin.top/api/posts`
        );
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data.slice(0, 3));
      } catch (err) {
        console.error(err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [language]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gray-50"
      id="blogs"
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
            {content[language].blog.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[language].blog.subtitle}
          </p>
        </motion.div>

        {/* Posts */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group h-full">
                  <div className="h-48 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                    {/* <img src={post.image} alt="" className="w-full " /> */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center p-6"
                    >
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 mb-3"
                      >
                        {post.category}
                      </Badge>
                      <h3 className="text-lg font-bold leading-tight text-white">
                        {post.title}
                      </h3>
                    </motion.div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardDescription className="text-gray-600 text-lg line-clamp-3">
                      {post.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`https://${language}.blog.agustin.top/posts/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="ghost"
                          className="text-gray-900 hover:bg-gray-100 p-0 h-auto font-semibold group-hover:text-gray-700 transition-colors"
                        >
                          {language === "en" ? "Read More" : "Leer Mas"}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-8 bg-transparent"
              asChild
            >
              <Link href={`https://${language}.blog.agustin.top/posts`}>
                {language === "en" ? "View All Posts" : "Ver Todos los Posts"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
