"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import type { EditFormData } from "../editContent"

type T = (typeof import("../editContent")["editBlogContent"])["en"]

type Props = {
  formData: EditFormData
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  t: T
}

export function EditBlogPostForm({ formData, onInputChange, t }: Props) {
  return (
    <div className="lg:col-span-2 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Content</CardTitle>
          <CardDescription>Edit your blog post content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">{t.form.title}</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={onInputChange}
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
              onChange={onInputChange}
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
              onChange={onInputChange}
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
              onChange={onInputChange}
              placeholder={t.form.slugPlaceholder}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="metaDescription">{t.form.metaDescription}</Label>
            <Textarea
              id="metaDescription"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={onInputChange}
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
              onChange={onInputChange}
              placeholder={t.form.tagsPlaceholder}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
