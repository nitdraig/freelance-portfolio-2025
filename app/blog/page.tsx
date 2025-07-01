"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, Search, Plus } from "lucide-react"
import Link from "next/link"

export default function BlogIndex() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [searchTerm, setSearchTerm] = useState("")

  const content = {
    en: {
      title: "Blog",
      subtitle: "Insights on AI development, project management, and building successful products.",
      search: "Search articles...",
      createPost: "Create Post",
      posts: [
        {
          id: "building-mvps-with-ai",
          title: "Building MVPs with AI: A Complete Guide",
          excerpt:
            "How to leverage AI tools to build and launch your MVP in weeks, not months. From ideation to deployment.",
          date: "Dec 15, 2024",
          readTime: "8 min read",
          category: "AI Development",
        },
        {
          id: "future-of-fullstack",
          title: "The Future of Fullstack Development",
          excerpt: "How AI is transforming the way we build applications and what it means for developers in 2025.",
          date: "Dec 10, 2024",
          readTime: "6 min read",
          category: "Technology",
        },
        {
          id: "idea-to-10k-mrr",
          title: "From Idea to $10K MRR in 30 Days",
          excerpt: "A case study of how we built and launched a SaaS product that reached $10K MRR in its first month.",
          date: "Dec 5, 2024",
          readTime: "12 min read",
          category: "Case Study",
        },
      ],
    },
    es: {
      title: "Blog",
      subtitle: "Reflexiones sobre desarrollo con IA, gestión de proyectos y construcción de productos exitosos.",
      search: "Buscar artículos...",
      createPost: "Crear Post",
      posts: [
        {
          id: "construyendo-mvps-con-ia",
          title: "Construyendo MVPs con IA: Guía Completa",
          excerpt: "Cómo aprovechar las herramientas de IA para construir y lanzar tu MVP en semanas, no meses.",
          date: "15 Dic, 2024",
          readTime: "8 min de lectura",
          category: "Desarrollo IA",
        },
        {
          id: "futuro-desarrollo-fullstack",
          title: "El Futuro del Desarrollo Fullstack",
          excerpt:
            "Cómo la IA está transformando la forma en que construimos aplicaciones y qué significa para los desarrolladores en 2025.",
          date: "10 Dic, 2024",
          readTime: "6 min de lectura",
          category: "Tecnología",
        },
        {
          id: "idea-a-10k-mrr",
          title: "De Idea a $10K MRR en 30 Días",
          excerpt:
            "Un caso de estudio de cómo construimos y lanzamos un producto SaaS que alcanzó $10K MRR en su primer mes.",
          date: "5 Dic, 2024",
          readTime: "12 min de lectura",
          category: "Caso de Estudio",
        },
      ],
    },
  }

  const t = content[language]

  const filteredPosts = t.posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" ? "Home" : "Inicio"}
              </Button>
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex bg-gray-200 rounded-full p-1">
                <Button
                  variant={language === "en" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-4 ${
                    language === "en" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  EN
                </Button>
                <Button
                  variant={language === "es" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("es")}
                  className={`rounded-full px-4 ${
                    language === "es" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  ES
                </Button>
              </div>

              <Link href="/blog/create">
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  <Plus className="mr-2 h-4 w-4" />
                  {t.createPost}
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t.subtitle}</p>

            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder={t.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-gray-900"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-6">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-bold leading-tight text-white">{post.title}</h3>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <CardDescription className="text-gray-600 line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant="ghost"
                    className="text-gray-900 hover:bg-gray-100 p-0 h-auto font-semibold group-hover:text-gray-700 transition-colors"
                  >
                    {language === "en" ? "Read More" : "Leer Más"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {language === "en"
                ? "No articles found matching your search."
                : "No se encontraron artículos que coincidan con tu búsqueda."}
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
