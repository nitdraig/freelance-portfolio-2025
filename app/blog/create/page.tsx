"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, Eye, Upload, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function CreateBlogPost() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    readTime: "",
    publishDate: "",
    status: "draft",
    tags: "",
    metaDescription: "",
    slug: "",
  })

  const content = {
    en: {
      title: "Create New Blog Post",
      subtitle: "Write and publish your thoughts on AI development and project management.",
      form: {
        title: "Title",
        titlePlaceholder: "Enter your blog post title...",
        excerpt: "Excerpt",
        excerptPlaceholder: "Brief description of your post...",
        content: "Content",
        contentPlaceholder: "Write your blog post content here...",
        category: "Category",
        categoryPlaceholder: "Select a category",
        readTime: "Read Time",
        readTimePlaceholder: "e.g., 5 min read",
        publishDate: "Publish Date",
        status: "Status",
        tags: "Tags",
        tagsPlaceholder: "Separate tags with commas",
        metaDescription: "Meta Description",
        metaDescriptionPlaceholder: "SEO description for search engines...",
        slug: "URL Slug",
        slugPlaceholder: "url-friendly-slug",
      },
      categories: [
        "AI Development",
        "Technology",
        "Case Study",
        "Project Management",
        "Tutorials",
        "Industry Insights",
      ],
      statuses: [
        { value: "draft", label: "Draft" },
        { value: "published", label: "Published" },
        { value: "scheduled", label: "Scheduled" },
      ],
      buttons: {
        saveDraft: "Save Draft",
        preview: "Preview",
        publish: "Publish",
        uploadImage: "Upload Image",
      },
    },
    es: {
      title: "Crear Nuevo Post del Blog",
      subtitle: "Escribe y publica tus pensamientos sobre desarrollo con IA y gestión de proyectos.",
      form: {
        title: "Título",
        titlePlaceholder: "Ingresa el título de tu post...",
        excerpt: "Extracto",
        excerptPlaceholder: "Breve descripción de tu post...",
        content: "Contenido",
        contentPlaceholder: "Escribe el contenido de tu blog aquí...",
        category: "Categoría",
        categoryPlaceholder: "Selecciona una categoría",
        readTime: "Tiempo de Lectura",
        readTimePlaceholder: "ej., 5 min de lectura",
        publishDate: "Fecha de Publicación",
        status: "Estado",
        tags: "Etiquetas",
        tagsPlaceholder: "Separa las etiquetas con comas",
        metaDescription: "Meta Descripción",
        metaDescriptionPlaceholder: "Descripción SEO para motores de búsqueda...",
        slug: "URL Slug",
        slugPlaceholder: "slug-amigable-url",
      },
      categories: [
        "Desarrollo IA",
        "Tecnología",
        "Caso de Estudio",
        "Gestión de Proyectos",
        "Tutoriales",
        "Insights de Industria",
      ],
      statuses: [
        { value: "draft", label: "Borrador" },
        { value: "published", label: "Publicado" },
        { value: "scheduled", label: "Programado" },
      ],
      buttons: {
        saveDraft: "Guardar Borrador",
        preview: "Vista Previa",
        publish: "Publicar",
        uploadImage: "Subir Imagen",
      },
    },
  }

  const t = content[language]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()
      setFormData((prev) => ({
        ...prev,
        slug: slug,
      }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (action: "draft" | "publish" | "preview") => {
    console.log("Form submitted:", { ...formData, action })
    // Here you would typically send the data to your CMS/backend
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog">
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" ? "Back to Blog" : "Volver al Blog"}
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

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => handleSubmit("draft")}>
                  <Save className="mr-2 h-4 w-4" />
                  {t.buttons.saveDraft}
                </Button>
                <Button variant="outline" onClick={() => handleSubmit("preview")}>
                  <Eye className="mr-2 h-4 w-4" />
                  {t.buttons.preview}
                </Button>
                <Button onClick={() => handleSubmit("publish")} className="bg-gray-900 text-white hover:bg-gray-800">
                  {t.buttons.publish}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Write your blog post content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">{t.form.title}</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder={t.form.titlePlaceholder}
                    className="text-lg font-semibold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">{t.form.excerpt}</Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder={t.form.excerptPlaceholder}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="content">{t.form.content}</Label>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      {t.buttons.uploadImage}
                    </Button>
                  </div>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder={t.form.contentPlaceholder}
                    rows={20}
                    className="font-mono text-sm"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>Optimize your post for search engines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="slug">{t.form.slug}</Label>
                  <Input
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder={t.form.slugPlaceholder}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metaDescription">{t.form.metaDescription}</Label>
                  <Textarea
                    id="metaDescription"
                    name="metaDescription"
                    value={formData.metaDescription}
                    onChange={handleInputChange}
                    placeholder={t.form.metaDescriptionPlaceholder}
                    rows={3}
                  />
                  <p className="text-xs text-gray-500">{formData.metaDescription.length}/160 characters</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">{t.form.tags}</Label>
                  <Input
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder={t.form.tagsPlaceholder}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Post Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>{t.form.status}</Label>
                  <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {t.statuses.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>{t.form.category}</Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.form.categoryPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="readTime">{t.form.readTime}</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="readTime"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      placeholder={t.form.readTimePlaceholder}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publishDate">{t.form.publishDate}</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="publishDate"
                      name="publishDate"
                      type="datetime-local"
                      value={formData.publishDate}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preview Card */}
            {formData.title && (
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    {formData.category && (
                      <Badge variant="secondary" className="mb-2">
                        {formData.category}
                      </Badge>
                    )}
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{formData.title}</h3>
                    {formData.excerpt && <p className="text-gray-600 text-sm line-clamp-3 mb-3">{formData.excerpt}</p>}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      {formData.readTime && <span>{formData.readTime}</span>}
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
