import { Button } from "@/components/ui/button";
import { allPublishedBlogsByDate } from "@/lib/content";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="pt-20">
      <div className="container-custom min-h-[70vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="heading-xl mb-4">404</h1>
          <h2 className="heading-md mb-6">Blog Not Found</h2>

          <p className="body-lg text-muted-foreground mb-8">
            The blog post you&apos;re looking for seems to have vanished into the digital ether.
            Perhaps it was moved, renamed, or is still being written.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blog</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Go Home</span>
              </Link>
            </Button>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-4">Recent Articles</h3>
            <ul className="space-y-2">
              {allPublishedBlogsByDate.slice(0, 3).map((blog) => (
                <li key={blog.slug}>
                  <Link href={`/blog/${blog.slug}`} className="link-underline text-lg">
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
