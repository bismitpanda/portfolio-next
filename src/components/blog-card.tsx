import { formatDate } from "date-fns";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/lib/content";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function BlogCard({ blog }: { blog: Blog["relatedBlogs"][number] }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-neutral-900 transition-shadow duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-neutral-100">
        <Image
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          height={200}
          src={`/images/blogs/${blog.slug}.png`}
          width={400}
          loading="lazy"
        />
      </div>
      <div className="px-6 pt-6">
        <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <div className="flex flex-wrap gap-1.5">
            {blog.tagSlugs.map((tagSlug, index) => (
              <Link
                key={tagSlug}
                href={`/tags/${tagSlug}`}
                className="tap-target transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <Badge
                  variant="outline"
                  className="border-neutral-600 bg-neutral-800/60 text-neutral-300 [a&]:hover:border-neutral-500 [a&]:hover:bg-neutral-700/60"
                >
                  {blog.tags[index]}
                </Badge>
              </Link>
            ))}
          </div>
          <span className="text-neutral-600" aria-hidden>
            ·
          </span>
          <time
            dateTime={
              blog.date instanceof Date
                ? blog.date.toISOString()
                : String(blog.date)
            }
            className="flex items-center gap-1.5 font-medium tabular-nums text-muted-foreground text-sm"
          >
            <Calendar className="size-3.5 shrink-0" aria-hidden />
            {formatDate(blog.date, "MMM d, yyyy")}
          </time>
        </div>
        <p className="mb-2 font-bold font-serif text-2xl">{blog.title}</p>
        <p className="line-clamp-3 text-neutral-400">{blog.excerpt}</p>
      </div>
      <div className="flex flex-1 flex-col justify-end px-6 pb-6">
        <Link
          className="tap-target w-full cursor-pointer"
          href={`/blog/${blog.slug}`}
        >
          <Button className="mt-8 w-full cursor-pointer" size="lg">
            Read Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}
