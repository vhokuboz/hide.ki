import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content", "posts");

export interface PostMeta {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  date: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  let files: string[];
  try {
    files = fs.readdirSync(postsDir);
  } catch {
    return [];
  }

  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(postsDir, f), "utf-8");
      const { data } = matter(source);
      return {
        slug,
        title: data.title,
        desc: data.desc,
        tags: data.tags ?? [],
        date: data.date,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const source = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf-8");
    const { data, content } = matter(source);
    return {
      slug,
      title: data.title,
      desc: data.desc,
      tags: data.tags ?? [],
      date: data.date,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllSlugs(): string[] {
  let files: string[];
  try {
    files = fs.readdirSync(postsDir);
  } catch {
    return [];
  }
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export const POSTS_PER_PAGE = 6;

export interface PaginatedResult {
  posts: PostMeta[];
  total: number;
  page: number;
  totalPages: number;
}

export function getPostsPage(page: number): PaginatedResult {
  const all = getAllPosts();
  const total = all.length;
  const totalPages = Math.max(total > 0 ? 1 : 0, Math.ceil(total / POSTS_PER_PAGE));
  const start = (page - 1) * POSTS_PER_PAGE;
  return {
    posts: all.slice(start, start + POSTS_PER_PAGE),
    total,
    page,
    totalPages,
  };
}

export function getAllTags(): string[] {
  const tags = new Set(
    getAllPosts().flatMap((p) => p.tags),
  );
  return [...tags].sort();
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}
