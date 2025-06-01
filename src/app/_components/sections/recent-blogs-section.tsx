import { Blog } from "@/components/blog";
import { allPublishedBlogsByDate } from "@/lib/content";
import Link from "next/link";

export function RecentBlogsSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
        <h2 className="heading-lg">Recent Blogs</h2>
        <Link href="/blog" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
          View All Blogs
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPublishedBlogsByDate.slice(0, 3).map((post) => (
          <Blog key={post.slug} blog={post} />
        ))}
      </div>
    </section>
  );
}
