import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/constants";

export const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      content,
      ...data,
    } as Post;
  });

  return posts;
};
