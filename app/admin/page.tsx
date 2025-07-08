"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Pencil, Plus, RefreshCw } from "lucide-react";
import { create } from "domain";
import { useRouter } from "next/navigation";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  status: string;
  readTime: string;
  createdAt: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const t = {
    en: {
      title: "Dashboard",
      subtitle: "Manage your blog posts",
      view: "View",
      edit: "Edit",
      status: {
        draft: "Draft",
        published: "Published",
        scheduled: "Scheduled",
      },
      reload: "Reload",
      empty: "No blog posts found.",
      create: "Create Post",
    },
    es: {
      title: "Panel",
      subtitle: "Administra tus publicaciones del blog",
      view: "Ver",
      edit: "Editar",
      status: {
        draft: "Borrador",
        published: "Publicado",
        scheduled: "Programado",
      },
      reload: "Recargar",
      empty: "No se encontraron publicaciones.",
      create: "Crear Publicación",
    },
  }[language];

  useEffect(() => {
    // Simular carga de posts
    const fetchPosts = async () => {
      setLoading(true);
      // Aquí deberías hacer fetch desde tu backend o CMS
      await new Promise((res) => setTimeout(res, 800)); // Simula demora
      setPosts([
        {
          id: "1",
          title: "Understanding AI Models",
          excerpt: "A brief overview of modern AI models...",
          category: "AI Development",
          status: "published",
          readTime: "5 min",
          createdAt: "2025-07-01",
        },
        {
          id: "2",
          title: "Project Management with AI",
          excerpt: "How to organize AI-based teams efficiently...",
          category: "Project Management",
          status: "draft",
          readTime: "4 min",
          createdAt: "2025-06-15",
        },
      ]);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
            <p className="text-gray-600">{t.subtitle}</p>
          </div>

          <div className="flex gap-2 items-center">
            <Button variant="outline" onClick={() => location.reload()}>
              <RefreshCw className="w-4 h-4 mr-2" />
              {t.reload}
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/admin/create")}
            >
              <Plus className="w-4 h-4 mr-2" />
              {t.create}
            </Button>
            <div className="bg-gray-200 rounded-full p-1 flex">
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 ${
                  language === "en" ? "bg-gray-900 text-white" : "text-gray-600"
                }`}
              >
                EN
              </Button>
              <Button
                variant={language === "es" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("es")}
                className={`rounded-full px-3 ${
                  language === "es" ? "bg-gray-900 text-white" : "text-gray-600"
                }`}
              >
                ES
              </Button>
            </div>
          </div>
        </div>

        {/* Posts List */}
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-500">{t.empty}</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="line-clamp-2 text-lg">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span>{post.readTime}</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>

                  <div className="flex gap-2 mt-2">
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        {t.view}
                      </Button>
                    </Link>

                    <Link href={`/blog/edit/${post.id}`}>
                      <Button size="sm">
                        <Pencil className="w-4 h-4 mr-1" />
                        {t.edit}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
