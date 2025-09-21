import type { MetadataRoute } from "next";
import {
  allCategoriesByCount,
  allProjectsByDate,
  allPublishedBlogsByDate,
  allSnippetsByDate,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = allPublishedBlogsByDate.flatMap((blog) => [
    {
      url: `https://bismitpanda.com/blog/${blog.slug}`,
      lastModified: blog.date,
      changeFrequency: "weekly" as const,
      priority: 0.5,
      images: [new URL(blog.image, `https://bismitpanda.com`).toString()],
    },
    {
      url: `https://bismitpanda.com/blog/${blog.slug}/llms.txt`,
      lastModified: blog.date,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
  ]);

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
    images: [
      new URL(project.featuredImage, `https://bismitpanda.com`).toString(),
      ...project.gallery.map((image) =>
        new URL(image.imageUrl, `https://bismitpanda.com`).toString(),
      ),
    ],
  }));

  const snippetUrls = allSnippetsByDate.flatMap((snippet) =>
    snippet.codes.map((code) => ({
      url: `https://bismitpanda.com/snippets/${snippet.slug}/${code.language}`,
      lastModified: snippet.date,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  );

  return [
    {
      url: "https://bismitpanda.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://bismitpanda.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
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
      url: "https://bismitpanda.com/resume",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
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
