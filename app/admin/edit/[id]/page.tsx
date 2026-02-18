"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { useParams } from "next/navigation"
import { editBlogContent, type EditFormData } from "./editContent"
import { EditBlogPostHeader } from "./components/EditBlogPostHeader"
import { EditBlogPostForm } from "./components/EditBlogPostForm"
import { EditBlogPostSidebar } from "./components/EditBlogPostSidebar"

const initialFormData: EditFormData = {
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
}

const mockPost: EditFormData = {
  title: "Building MVPs with AI: A Complete Guide",
  excerpt:
    "How to leverage AI tools to build and launch your MVP in weeks, not months. From ideation to deployment.",
  content: `# Building MVPs with AI: A Complete Guide

In today's fast-paced startup environment, the ability to quickly validate ideas and bring products to market is crucial...`,
  category: "AI Development",
  readTime: "8 min read",
  publishDate: "2024-12-15T10:00",
  status: "published",
  tags: "AI, MVP, Development, Startup",
  metaDescription: "Learn how to leverage AI tools to build and launch your MVP in weeks, not months.",
  slug: "building-mvps-with-ai",
}

export default function EditBlogPost() {
  const params = useParams()
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [formData, setFormData] = useState<EditFormData>(initialFormData)

  useEffect(() => {
    // In real app, fetch post by params.id from CMS/API
    setFormData(mockPost)
  }, [params.id])

  const t = editBlogContent[language]

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSelectChange = useCallback((name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(
    (action: "save" | "publish" | "preview") => {
      console.log("Form updated:", { ...formData, action })
    },
    [formData]
  )

  const handleDelete = useCallback(() => {
    if (confirm(t.deleteConfirm)) {
      console.log("Post deleted:", params.id)
    }
  }, [params.id, t.deleteConfirm])

  return (
    <div className="min-h-screen bg-gray-50">
      <EditBlogPostHeader
        language={language}
        onLanguageChange={setLanguage}
        onSave={() => handleSubmit("save")}
        onPreview={() => handleSubmit("preview")}
        onPublish={() => handleSubmit("publish")}
        onDelete={handleDelete}
        t={t}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <EditBlogPostForm formData={formData} onInputChange={handleInputChange} t={t} />
          <EditBlogPostSidebar
            formData={formData}
            onInputChange={handleInputChange}
            onSelectChange={handleSelectChange}
            t={t}
          />
        </div>
      </main>
    </div>
  )
}
