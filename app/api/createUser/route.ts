import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/mongodb";
import User from "@/models/user";

async function createUser() {
  await connectToDB();
  const hashed = await bcrypt.hash("admin123", 10);
  await User.create({
    name: "Admin",
    email: "admin@example.com",
    password: hashed,
  });
}

createUser();
