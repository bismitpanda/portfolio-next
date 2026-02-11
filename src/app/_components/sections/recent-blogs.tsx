"use client";

import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { ItemReveal } from "@/components/motion/section-reveal";
import { allPublishedBlogsByDate } from "@/lib/content";

export function RecentBlogsSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="mb-16 flex flex-col items-baseline justify-between md:flex-row">
        <h2 className="heading-lg">Recent Blogs</h2>
        <Link
          className="link-underline mt-4 text-lg text-muted-foreground md:mt-0"
          href="/blog"
        >
          View All Blogs
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allPublishedBlogsByDate.slice(0, 3).map((post, index) => (
          <ItemReveal key={post.slug} delay={index * 0.06}>
            <BlogCard blog={post} />
          </ItemReveal>
        ))}
      </div>
    </section>
  );
}
