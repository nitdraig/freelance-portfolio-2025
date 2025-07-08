import mongoose, { Schema, models } from "mongoose";

const PostSchema = new Schema({
  id: String,
  title: {
    en: String,
    es: String,
  },
  excerpt: {
    en: String,
    es: String,
  },
  content: {
    en: String,
    es: String,
  },
  category: String,
  date: String,
  readTime: String,
});

export default models.Post || mongoose.model("Post", PostSchema);
