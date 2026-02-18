export const editBlogContent = {
  en: {
    title: "Edit Blog Post",
    subtitle: "Update your blog post content and settings.",
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
      saveDraft: "Save Changes",
      preview: "Preview",
      publish: "Update",
      uploadImage: "Upload Image",
      delete: "Delete Post",
    },
    backToBlog: "Back to Blog",
    deleteConfirm: "Are you sure you want to delete this post?",
  },
  es: {
    title: "Editar Post del Blog",
    subtitle: "Actualiza el contenido y configuración de tu post.",
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
      saveDraft: "Guardar Cambios",
      preview: "Vista Previa",
      publish: "Actualizar",
      uploadImage: "Subir Imagen",
      delete: "Eliminar Post",
    },
    backToBlog: "Volver al Blog",
    deleteConfirm: "¿Estás seguro de que quieres eliminar este post?",
  },
} as const

export type EditFormData = {
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
  publishDate: string
  status: string
  tags: string
  metaDescription: string
  slug: string
}
