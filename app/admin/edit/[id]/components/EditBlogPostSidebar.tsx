"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock } from "lucide-react"
import type { EditFormData } from "../editContent"

type T = (typeof import("../editContent")["editBlogContent"])["en"]

type Props = {
  formData: EditFormData
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSelectChange: (name: string, value: string) => void
  t: T
}

export function EditBlogPostSidebar({ formData, onInputChange, onSelectChange, t }: Props) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Post Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>{t.form.status}</Label>
            <Select value={formData.status} onValueChange={(value) => onSelectChange("status", value)}>
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
            <Select value={formData.category} onValueChange={(value) => onSelectChange("category", value)}>
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
                onChange={onInputChange}
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
                onChange={onInputChange}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

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
  )
}
