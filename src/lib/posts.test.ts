import { describe, it, expect } from "vitest";
import { getAllPosts, getPostBySlug, getAllSlugs } from "./posts";

describe("posts library", () => {
  it("getAllPosts returns an array of post metas sorted by date descending", () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
    for (const post of posts) {
      expect(post).toHaveProperty("slug");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("desc");
      expect(post).toHaveProperty("tags");
      expect(post).toHaveProperty("date");
    }
    if (posts.length > 1) {
      for (let i = 1; i < posts.length; i++) {
        expect(posts[i - 1].date.localeCompare(posts[i].date)).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it("getPostBySlug returns a post with content for a valid slug", () => {
    const slugs = getAllSlugs();
    if (slugs.length === 0) return;
    const post = getPostBySlug(slugs[0]);
    expect(post).not.toBeNull();
    expect(post!.slug).toBe(slugs[0]);
    expect(typeof post!.content).toBe("string");
    expect(post!.content.length).toBeGreaterThan(0);
  });

  it("getPostBySlug returns null for an invalid slug", () => {
    expect(getPostBySlug("this-post-does-not-exist")).toBeNull();
  });

  it("getAllSlugs returns string slugs without .md extension", () => {
    const slugs = getAllSlugs();
    expect(Array.isArray(slugs)).toBe(true);
    for (const slug of slugs) {
      expect(slug.endsWith(".md")).toBe(false);
      expect(typeof slug).toBe("string");
      expect(slug.length).toBeGreaterThan(0);
    }
  });
});
