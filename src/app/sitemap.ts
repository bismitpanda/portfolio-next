import {
  allPublishedBlogsByDate,
  allCategoriesByCount,
  allProjectsByDate,
  allSnippetsByDate,
} from "@/lib/content";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = allPublishedBlogsByDate.map((blog) => ({
    url: `https://bismitpanda.com/blog/${blog.slug}`,
    lastModified: blog.date,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const categoryUrls = allCategoriesByCount.map((category) => ({
    url: `https://bismitpanda.com/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const projectUrls = allProjectsByDate.map((project) => ({
    url: `https://bismitpanda.com/projects/${project.slug}`,
    lastModified: new Date(project.year, 0, 1),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const snippetUrls = allSnippetsByDate.map((snippet) => ({
    url: `https://bismitpanda.com/snippets/${snippet.codeFile}`,
    lastModified: snippet.date,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: "https://bismitpanda.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://bismitpanda.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bismitpanda.com/categories",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bismitpanda.com/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bismitpanda.com/snippets",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...blogUrls,
    ...categoryUrls,
    ...projectUrls,
    ...snippetUrls,
  ];
}
