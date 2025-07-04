import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { Blog } from "@/lib/content";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ blog }: { blog: Blog["relatedBlogs"][number] }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-neutral-900">
      <div className="aspect-video overflow-hidden bg-neutral-100">
        <Image
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          height={200}
          src={blog.image}
          width={400}
        />
      </div>
      <div className="px-6 pt-6">
        <div className="mb-2 font-medium text-muted-foreground text-sm">
          <Link href={`/categories/${blog.categorySlug}`}>
            <Badge variant="outline">{blog.category}</Badge>
          </Link>{" "}
          • {formatDate(blog.date, "MMMM do, yyyy")}
        </div>
        <h3 className="mb-2 font-bold text-2xl">{blog.title}</h3>
        <p className="line-clamp-3 text-neutral-400">{blog.excerpt}</p>
      </div>
      <div className="flex flex-1 flex-col justify-end px-6 pb-6">
        <Link className="w-full cursor-pointer" href={`/blog/${blog.slug}`}>
          <Button
            className="mt-8 w-full cursor-pointer transition-colors hover:bg-neutral-900 hover:text-white"
            size="lg"
            variant="outline"
          >
            Read Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}
