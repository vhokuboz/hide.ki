import { getAllPosts, getAllTags, getPostsPage } from "@/lib/posts";

export default async function sitemap() {
  const siteUrl = "https://hide.ki";

  const staticRoutes = ["/", "/blog", "/about"].map((r) => ({
    url: `${siteUrl}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r === "/" ? 1 : 0.8,
  }));

  const blogPosts = getAllPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tagPages = getAllTags().map((t) => ({
    url: `${siteUrl}/tag/${t}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const { totalPages } = getPostsPage(1);
  const blogPages =
    totalPages > 1
      ? Array.from({ length: totalPages - 1 }, (_, i) => ({
          url: `${siteUrl}/blog/page/${i + 2}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.6,
        }))
      : [];

  return [...staticRoutes, ...blogPosts, ...tagPages, ...blogPages];
}
