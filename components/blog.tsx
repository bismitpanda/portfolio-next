import { Button } from "./ui/button";
import type { Blog } from "@/lib/content";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export function Blog({ blog }: { blog: Blog["relatedBlogs"][number] }) {
  return (
    <div className="group block rounded-lg overflow-hidden bg-neutral-900">
      <div className="aspect-video bg-neutral-100 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <div className="text-sm font-medium text-neutral-300 mb-2">
          <Link href={`/categories/${blog.categorySlug}`}>{blog.category}</Link> •{" "}
          {formatDate(blog.date, "MMMM do, yyyy")}
        </div>
        <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
        <p className="text-neutral-400">{blog.excerpt}</p>

        <Link href={`/blog/${blog.slug}`} className="cursor-pointer w-full">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer w-full mt-8"
          >
            Read Article
          </Button>
        </Link>
      </div>
    </div>
  );
}
