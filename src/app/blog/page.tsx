"use client";

import { formatDate } from "date-fns";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allPublishedBlogsByDate, allTagsByCount } from "@/lib/content";
import { FilterCommand } from "./_components/filter-command";
import type { SortBy } from "./_components/sort-toggle";
import { SortToggle } from "./_components/sort-toggle";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTagSlugs, setSelectedTagSlugs] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>("date");
  const [filterOpen, setFilterOpen] = useState(false);

  const tagsWithCount = useMemo(
    () => allTagsByCount.filter((tag) => tag.count > 0),
    [],
  );

  // biome-ignore lint/style/noNonNullAssertion: It is guaranteed that there will be at least one blog
  const latestBlog = allPublishedBlogsByDate[0]!;

  const filteredBlogs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    let blogs = allPublishedBlogsByDate.filter((blog) => {
      const matchesSearch =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.excerpt.toLowerCase().includes(q) ||
        blog.tags.some((t) => t.toLowerCase().includes(q));
      const matchesTags =
        selectedTagSlugs.length === 0 ||
        blog.tagSlugs.some((slug) => selectedTagSlugs.includes(slug));
      return matchesSearch && matchesTags;
    });

    if (sortBy === "title") {
      blogs = [...blogs].sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
      );
    }

    const showFeatured =
      !q && selectedTagSlugs.length === 0 && sortBy === "date";

    if (showFeatured && blogs.length > 0) {
      return blogs.slice(1);
    }

    return blogs;
  }, [searchQuery, selectedTagSlugs, sortBy]);

  const showFeatured =
    !searchQuery.trim() && selectedTagSlugs.length === 0 && sortBy === "date";

  const toggleTag = (slug: string) => {
    setSelectedTagSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  };

  const removeTag = (slug: string) => {
    setSelectedTagSlugs((prev) => prev.filter((s) => s !== slug));
  };

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

        <div className="mb-8">
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap">
            <div className="relative w-full md:min-w-[220px] md:max-w-[320px]">
              <Search className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2" />
              <input
                type="search"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-input bg-background placeholder:text-muted-foreground h-10 w-full rounded-xl border px-4 pl-9 text-sm outline-hidden focus:ring-2 focus:ring-ring"
                aria-label="Search blogs"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <FilterCommand
                tags={tagsWithCount}
                selectedSlugs={selectedTagSlugs}
                onToggleTag={toggleTag}
                open={filterOpen}
                onOpenChange={setFilterOpen}
              />
              <SortToggle
                value={sortBy}
                onToggle={() =>
                  setSortBy((prev) => (prev === "date" ? "title" : "date"))
                }
              />
            </div>
          </div>

          {selectedTagSlugs.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="text-muted-foreground text-xs font-medium">
                Active filters:
              </span>
              {selectedTagSlugs.map((slug) => {
                const name =
                  tagsWithCount.find((t) => t.slug === slug)?.name ?? slug;
                return (
                  <Badge
                    key={slug}
                    variant="outline"
                    className="gap-1 rounded-full border-neutral-600 bg-neutral-800/60 py-1 pr-1 pl-2.5 text-neutral-300"
                  >
                    {name}
                    <button
                      type="button"
                      onClick={() => removeTag(slug)}
                      className="hover:bg-neutral-600 rounded-full p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                      aria-label={`Remove ${name} filter`}
                    >
                      <X className="size-3" />
                    </button>
                  </Badge>
                );
              })}
            </div>
          )}

          {(searchQuery.trim() || selectedTagSlugs.length > 0) && (
            <p className="text-muted-foreground mt-3 text-center text-sm">
              Showing {filteredBlogs.length} blog
              {filteredBlogs.length === 1 ? "" : "s"}
            </p>
          )}
        </div>

        {showFeatured && (
          <div className="mb-20">
            <div className="group relative block rounded-lg bg-neutral-900 p-6">
              <Badge
                className="border-primary/20 bg-neutral-900 opacity-100 text-primary absolute -top-3 left-6"
                variant="outline"
              >
                Featured Blog
              </Badge>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <div className="mb-2 font-medium text-neutral-300 text-sm space-x-1">
                    {latestBlog.tagSlugs.map((tagSlug, index) => (
                      <Link key={tagSlug} href={`/tags/${tagSlug}`}>
                        <Badge variant="outline">
                          {latestBlog.tags[index]}
                        </Badge>
                      </Link>
                    ))}{" "}
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
                      src={`/images/blogs/${latestBlog.slug}.png`}
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
              Try adjusting your search or filters to find what you&apos;re
              looking for.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
