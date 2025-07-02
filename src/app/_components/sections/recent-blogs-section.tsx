import { BlogCard } from "@/components/blog-card";
import { allPublishedBlogsByDate } from "@/lib/content";
import Link from "next/link";

export function RecentBlogsSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="mb-16 flex flex-col items-baseline justify-between md:flex-row">
        <h2 className="heading-lg">Recent Blogs</h2>
        <Link className="link-underline mt-4 text-lg text-muted-foreground md:mt-0" href="/blog">
          View All Blogs
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allPublishedBlogsByDate.slice(0, 3).map((post) => (
          <BlogCard blog={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
}
