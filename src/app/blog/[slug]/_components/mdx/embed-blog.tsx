import { formatDate } from "date-fns";
import { NotepadText } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { allPublishedBlogsByDate } from "@/lib/content";

export function EmbedBlog({
  fileName,
  placeholder,
}: {
  fileName: string;
  placeholder?: string;
}) {
  const blog = allPublishedBlogsByDate.find(
    (blog) => blog._meta.fileName === fileName,
  );
  if (!blog) return null;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          className="no-underline! mx-1 inline-flex cursor-pointer items-center gap-1 rounded-sm border border-blue-800 bg-blue-800/40 px-1 py-0.5 text-blue-100 text-sm transition-colors duration-200 hover:bg-blue-800/60"
          href={`/blog/${blog.slug}`}
        >
          <NotepadText className="mr-1 h-4 w-4" />
          {placeholder ?? blog.title}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-sm md:w-lg">
        <div className="flex flex-col gap-2">
          <div className="text-muted-foreground text-sm">
            {blog.tagSlugs.map((tagSlug, index) => (
              <Link key={tagSlug} href={`/tags/${tagSlug}`}>
                <Badge variant="outline">{blog.tags[index]}</Badge>
              </Link>
            ))}{" "}
            • {formatDate(blog.date, "MMMM do, yyyy")} • {blog.readingTime}
          </div>
          <div className="font-semibold">{blog.title}</div>
          <div className="line-clamp-5 text-sm">{blog.excerpt}</div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
