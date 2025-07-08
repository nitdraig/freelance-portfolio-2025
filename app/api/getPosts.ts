export const getPosts = async (lang: "en" | "es") => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const data = await res.json();

  // Extraer sólo los campos según el idioma
  return data.posts.map((post: any) => ({
    id: post._id,
    title: post.title[lang],
    excerpt: post.excerpt[lang],
    content: post.content[lang],
    category: post.category,
    date: post.date,
    readTime: post.readTime,
  }));
};
