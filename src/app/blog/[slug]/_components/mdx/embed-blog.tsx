import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { allPublishedBlogsByDate } from "@/lib/content";
import { formatDate } from "date-fns";
import { NotepadText } from "lucide-react";
import Link from "next/link";

export function EmbedBlog({ fileName, placeholder }: { fileName: string; placeholder?: string }) {
  const blog = allPublishedBlogsByDate.find((blog) => blog._meta.fileName === fileName);
  if (!blog) return null;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          href={`/blog/${blog.slug}`}
          className="mx-1 inline-flex items-center gap-1 rounded-sm border-[1px] border-blue-800 bg-blue-800/40 px-1 py-0.5 text-sm text-blue-100 !no-underline transition-colors duration-200 hover:bg-blue-800/60 cursor-pointer"
        >
          <NotepadText className="w-4 h-4 mr-1" />
          {placeholder ?? blog.title}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-sm md:w-lg">
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">
            <Link href={`/categories/${blog.categorySlug}`}>
              <Badge variant="outline">{blog.category}</Badge>
            </Link>{" "}
            • {formatDate(blog.date, "MMMM do, yyyy")} • {blog.readingTime}
          </div>
          <div className="font-semibold">{blog.title}</div>
          <div className="text-sm line-clamp-5">{blog.excerpt}</div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
