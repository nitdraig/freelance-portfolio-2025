"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Save, Eye, Trash2 } from "lucide-react"
import Link from "next/link"

type Lang = "en" | "es"

type Props = {
  language: Lang
  onLanguageChange: (lang: Lang) => void
  onSave: () => void
  onPreview: () => void
  onPublish: () => void
  onDelete: () => void
  t: (typeof import("../editContent")["editBlogContent"])["en"]
}

export function EditBlogPostHeader({
  language,
  onLanguageChange,
  onSave,
  onPreview,
  onPublish,
  onDelete,
  t,
}: Props) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/blog">
            <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.backToBlog}
            </Button>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex bg-gray-200 rounded-full p-1">
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => onLanguageChange("en")}
                className={`rounded-full px-4 ${
                  language === "en" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                EN
              </Button>
              <Button
                variant={language === "es" ? "default" : "ghost"}
                size="sm"
                onClick={() => onLanguageChange("es")}
                className={`rounded-full px-4 ${
                  language === "es" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                ES
              </Button>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={onSave}>
                <Save className="mr-2 h-4 w-4" />
                {t.buttons.saveDraft}
              </Button>
              <Button variant="outline" onClick={onPreview}>
                <Eye className="mr-2 h-4 w-4" />
                {t.buttons.preview}
              </Button>
              <Button onClick={onPublish} className="bg-gray-900 text-white hover:bg-gray-800">
                {t.buttons.publish}
              </Button>
              <Button variant="destructive" onClick={onDelete}>
                <Trash2 className="mr-2 h-4 w-4" />
                {t.buttons.delete}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
