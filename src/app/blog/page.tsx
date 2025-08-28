"use client";

import { formatDate } from "date-fns";
import { Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allCategoriesByCount, allPublishedBlogsByDate } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // biome-ignore lint/style/noNonNullAssertion: It is guaranteed that there will be at least one blog
  const latestBlog = allPublishedBlogsByDate[0]!;

  const filteredBlogs = useMemo(() => {
    const blogs = allPublishedBlogsByDate.filter((blog) => {
      const categoryMatch =
        selectedCategory === "all" || blog.categorySlug === selectedCategory;
      return categoryMatch;
    });

    if (selectedCategory === "all") {
      return blogs.slice(1);
    }

    return blogs;
  }, [selectedCategory]);

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="heading-xl mb-6">Blog</h1>
          <p className="body-lg text-muted-foreground">
            Thoughts, insights, and perspectives on design, development, and the
            digital landscape.
          </p>
        </div>

        <div className="mb-12">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span className="font-medium text-sm">Filter by:</span>
            </div>
            <Button
              className={cn(
                "rounded-full transition-colors",
                selectedCategory === "all"
                  ? "!bg-white !text-black !border-black"
                  : "hover:!bg-white/70 hover:!text-black hover:!border-black",
              )}
              onClick={() => setSelectedCategory("all")}
              variant="outline"
            >
              All Blogs
            </Button>
            {allCategoriesByCount
              .filter((category) => category.count > 0)
              .map((category) => (
                <Button
                  className={cn(
                    "rounded-full transition-colors group",
                    selectedCategory === category.slug
                      ? "!bg-white !text-black !border-black"
                      : "hover:!bg-white/70 hover:!text-black hover:!border-black",
                  )}
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  variant="outline"
                >
                  {category.name}
                  <span
                    className={cn(
                      "font-mono font-medium border border-input text-xs px-1 py-.5 rounded-sm group-hover:border-black/40",
                      selectedCategory === category.slug &&
                        "bg-white text-black border-black/40",
                    )}
                  >
                    {category.count}
                  </span>
                </Button>
              ))}
          </div>

          {selectedCategory !== "all" && (
            <div className="mb-8 text-center text-muted-foreground">
              <p className="text-sm">
                Showing {filteredBlogs.length} blog
                {filteredBlogs.length === 1 ? "" : "s"}
              </p>
            </div>
          )}
        </div>

        {selectedCategory === "all" && (
          <div className="mb-20">
            <div className="mb-8 text-center">
              <Badge
                className="border-primary/20 bg-primary/10 text-primary"
                variant="outline"
              >
                Featured Blog
              </Badge>
            </div>
            <div className="group block rounded-lg bg-neutral-900 p-6">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <div className="mb-2 font-medium text-neutral-300 text-sm">
                    <Link href={`/categories/${latestBlog.categorySlug}`}>
                      <Badge variant="outline">{latestBlog.category}</Badge>
                    </Link>{" "}
                    • {formatDate(latestBlog.date, "MMMM do, yyyy")}
                  </div>
                  <h2 className="mb-4 font-bold text-4xl transition-colors md:text-5xl">
                    {latestBlog.title}
                  </h2>
                  <p className="mb-6 text-neutral-400 text-xl">
                    {latestBlog.excerpt}
                  </p>
                  <Link
                    className="cursor-pointer"
                    href={`/blog/${latestBlog.slug}`}
                  >
                    <Button
                      className="cursor-pointer transition-colors"
                      size="lg"
                    >
                      Read Blog
                    </Button>
                  </Link>
                </div>
                <div className="order-1 overflow-hidden rounded-lg md:order-2">
                  <div className="aspect-video overflow-hidden rounded-lg bg-neutral-200">
                    <Image
                      alt={latestBlog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      height={400}
                      src={latestBlog.image}
                      width={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredBlogs.length > 0 ? (
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((post) => (
              <BlogCard blog={post} key={post.slug} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h2 className="mb-2 font-bold text-2xl">No Blogs Found</h2>
            <p className="text-muted-foreground">
              Try adjusting your filter to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
