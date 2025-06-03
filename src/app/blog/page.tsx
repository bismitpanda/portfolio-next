import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allPublishedBlogsByDate } from "@/lib/content";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const latestBlog = allPublishedBlogsByDate[0];

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Blog</h1>
          <p className="body-lg text-neutral-500">
            Thoughts, insights, and perspectives on design, development, and the digital landscape.
          </p>
        </div>

        <div className="mb-20">
          <div className="group block bg-neutral-900 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm font-medium text-neutral-300 mb-2">
                  <Link href={`/categories/${latestBlog.categorySlug}`}>
                    <Badge variant="outline">{latestBlog.category}</Badge>
                  </Link>{" "}
                  • {formatDate(latestBlog.date, "MMMM do, yyyy")}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 transition-colors">
                  {latestBlog.title}
                </h2>
                <p className="text-xl text-neutral-400 mb-6">{latestBlog.excerpt}</p>
                <Link href={`/blog/${latestBlog.slug}`} className="cursor-pointer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
                  >
                    Read Blog
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden">
                  <Image
                    src={latestBlog.image}
                    alt={latestBlog.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPublishedBlogsByDate.slice(1).map((post) => (
            <BlogCard blog={post} key={post.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
