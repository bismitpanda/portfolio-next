"use client";

import { formatDate } from "date-fns";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allCategoriesByCount, allPublishedBlogsByDate } from "@/lib/content";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const blogsPerPage = 9;

  const latestBlog = allPublishedBlogsByDate[0];

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

  // biome-ignore lint/correctness/useExhaustiveDependencies: This is intentional, since we want to reset the page when the category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage,
  );

  const startBlogNum = (currentPage - 1) * blogsPerPage + 1;
  const endBlogNum = startBlogNum + paginatedBlogs.length - 1;

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    if (currentPage > totalPages - 4) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pageNumbers = getPageNumbers();

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
              className={`rounded-full transition-colors ${
                selectedCategory === "all"
                  ? "!bg-white !text-black !border-black"
                  : "hover:!bg-white/70 hover:!text-black hover:!border-black"
              }`}
              onClick={() => setSelectedCategory("all")}
              variant="outline"
            >
              All Blogs
            </Button>
            {allCategoriesByCount
              .filter((category) => category.count > 0)
              .map((category) => (
                <Button
                  className={`rounded-full transition-colors ${
                    selectedCategory === category.slug
                      ? "!bg-white !text-black !border-black"
                      : "hover:!bg-white/70 hover:!text-black hover:!border-black"
                  }`}
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  variant="outline"
                >
                  {category.name}
                </Button>
              ))}
          </div>

          <div className="mb-8 text-center text-muted-foreground">
            <p className="text-sm">
              Showing {filteredBlogs.length} blog
              {filteredBlogs.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>

        {selectedCategory === "all" && currentPage === 1 && (
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
                      className="cursor-pointer transition-colors hover:bg-neutral-900 hover:text-white"
                      size="lg"
                      variant="outline"
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
          <>
            <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedBlogs.map((post) => (
                <BlogCard blog={post} key={post.slug} />
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              {totalPages > 1 && (
                <>
                  <div className="flex items-center gap-2">
                    <Button
                      className="h-10 w-10 rounded-full"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                      size="icon"
                      variant="outline"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous page</span>
                    </Button>

                    {pageNumbers.map((page, index) =>
                      typeof page === "number" ? (
                        <Button
                          className={`h-10 w-10 rounded-full transition-colors hover:bg-primary hover:text-primary-foreground ${
                            currentPage === page
                              ? "border-primary bg-primary text-primary-foreground"
                              : ""
                          }`}
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          variant="outline"
                        >
                          {page}
                        </Button>
                      ) : (
                        <span
                          className="px-2 text-muted-foreground"
                          key={`ellipsis-${
                            // biome-ignore lint/suspicious/noArrayIndexKey: This is intentional
                            index
                          }`}
                        >
                          ...
                        </span>
                      ),
                    )}

                    <Button
                      className="h-10 w-10 rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(currentPage + 1)}
                      size="icon"
                      variant="outline"
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Button>
                  </div>
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm">
                      Showing{" "}
                      <span className="font-medium text-foreground">
                        {startBlogNum}-{endBlogNum}
                      </span>{" "}
                      of{" "}
                      <span className="font-medium text-foreground">
                        {filteredBlogs.length}
                      </span>{" "}
                      blogs
                    </p>
                  </div>
                </>
              )}
            </div>
          </>
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
