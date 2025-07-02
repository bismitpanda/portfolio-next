import { Button } from "@/components/ui/button";
import { allPublishedBlogsByDate } from "@/lib/content";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="pt-20">
      <div className="container-custom flex min-h-[70vh] items-center justify-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="heading-xl mb-4">404</h1>
          <h2 className="heading-md mb-6">Blog Not Found</h2>

          <p className="body-lg mb-8 text-muted-foreground">
            The blog post you&apos;re looking for seems to have vanished into the digital ether.
            Perhaps it was moved, renamed, or is still being written.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link className="flex items-center gap-2" href="/blog">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blog</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link className="flex items-center gap-2" href="/">
                <Home className="h-4 w-4" />
                <span>Go Home</span>
              </Link>
            </Button>
          </div>

          <div className="mt-16">
            <h3 className="mb-4 font-bold text-xl">Recent Blogs</h3>
            <ul className="space-y-2">
              {allPublishedBlogsByDate.slice(0, 3).map((blog) => (
                <li key={blog.slug}>
                  <Link className="link-underline text-lg" href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
