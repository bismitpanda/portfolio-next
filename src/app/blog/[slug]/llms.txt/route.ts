import { notFound } from "next/navigation";
import { NextResponse } from "next/server";
import { allPublishedBlogsByDate } from "@/lib/content";

export const dynamic = "force-static";

export function generateStaticParams() {
  return allPublishedBlogsByDate.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function GET(
  _: Request,
  { params }: RouteContext<"/blog/[slug]/llms.txt">,
) {
  const { slug } = await params;
  const blog = allPublishedBlogsByDate.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  const content = `---
title: ${blog.title}
excerpt: ${blog.excerpt}
date: ${blog.date}
category: ${blog.category}
---

${blog.content}`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=UTF-8",
    },
  });
}
