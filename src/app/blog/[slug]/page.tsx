import { Mdx } from "./_components/mdx";
import { TableOfContents } from "./_components/toc";
import { BlogCard } from "@/components/blog-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { allPublishedBlogsByDate } from "@/lib/content";
import { formatDate } from "date-fns";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPublishedBlogsByDate.map((blog) => ({ slug: blog.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = allPublishedBlogsByDate.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing relative">
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="text-sm font-medium text-muted-foreground mb-4">
              <Link href={`/categories/${blog.categorySlug}`}>
                <Badge variant="outline">{blog.category}</Badge>
              </Link>{" "}
              • {formatDate(blog.date, "MMMM do, yyyy")} • {blog.readingTime}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{blog.title}</h1>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/me-small.png" />
                <AvatarFallback>BP</AvatarFallback>
              </Avatar>
              <div>
                By{" "}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="link-underline">Bismit Panda</span>
                  </HoverCardTrigger>
                  <HoverCardContent asChild>
                    <div className="w-200 mx-auto p-8 rounded-lg">
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src="/placeholder.png"
                            alt="Bismit Panda"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Bismit Panda</h3>
                          <p className="text-muted-foreground">
                            Full Stack Developer with a passion for typography and user experience.
                            Writing about web development, design, and the intersection of
                            technology and creativity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="aspect-16/9 rounded-lg overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="font-semibold text-muted-foreground italic mb-4">{blog.excerpt}</div>

          <TableOfContents headings={blog.headings} />

          <div className="prose prose-lg">
            <Mdx code={blog.html} />
          </div>

          {(!!blog.next || !!blog.prev) && (
            <div className="w-full flex flex-row items-center justify-between mt-12 pt-6 border-t border-t-gray-500 mb-16">
              {blog.prev ? (
                <Link
                  href={`/blog/${blog.prev.slug}`}
                  className="hover:underline flex flex-row font-serif gap-x-2 items-center"
                >
                  <ArrowLeft strokeWidth={1} className="size-5" /> {blog.prev.title}
                </Link>
              ) : (
                <div></div>
              )}

              {blog.next ? (
                <Link
                  href={`/blog/${blog.next.slug}`}
                  className="hover:underline flex flex-row font-serif gap-x-2 items-center"
                >
                  {blog.next.title} <ArrowRight strokeWidth={1} className="size-5" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-8">Related Blogs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blog.relatedBlogs.map((relatedPost) => (
                <BlogCard blog={relatedPost} key={relatedPost.slug} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
