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
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = allPublishedBlogsByDate.find((blog) => blog.slug === slug);

  return {
    title: `${blog?.title} | Bismit Panda's Blog`,
    description: blog?.excerpt,
    keywords: blog?.category && [blog.category, "blog", "bismit panda", "bismit"],
  };
}

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
          <Button asChild className="group" variant="ghost">
            <Link className="flex items-center gap-2" href="/blog">
              <ArrowLeft className="group-hover:-translate-x-1 h-4 w-4 transition-transform" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <div className="mb-4 font-medium text-muted-foreground text-sm">
              <Link href={`/categories/${blog.categorySlug}`}>
                <Badge variant="outline">{blog.category}</Badge>
              </Link>{" "}
              • {formatDate(blog.date, "MMMM do, yyyy")} • {blog.readingTime}
            </div>
            <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl">{blog.title}</h1>
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
                    <div className="mx-auto w-200 rounded-lg p-8">
                      <div className="flex items-center gap-6">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
                          <Image
                            alt="Bismit Panda"
                            className="h-full w-full object-cover"
                            height={80}
                            src="/placeholder.png"
                            width={80}
                          />
                        </div>
                        <div>
                          <h3 className="mb-2 font-bold text-xl">Bismit Panda</h3>
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
            <div className="aspect-16/9 overflow-hidden rounded-lg">
              <Image
                alt={blog.title}
                className="h-full w-full object-cover"
                height={600}
                src={blog.image}
                width={1200}
              />
            </div>
          </div>

          <div className="mb-4 font-semibold text-muted-foreground italic">{blog.excerpt}</div>

          <TableOfContents headings={blog.headings} />

          <div className="prose prose-lg">
            <Mdx code={blog.html} />
          </div>

          {(!!blog.next || !!blog.prev) && (
            <div className="mt-12 mb-16 flex w-full flex-row items-center justify-between border-t border-t-gray-500 pt-6">
              {blog.prev ? (
                <Link
                  className="flex flex-row items-center gap-x-2 font-serif hover:underline"
                  href={`/blog/${blog.prev.slug}`}
                >
                  <ArrowLeft className="size-5" strokeWidth={1} /> {blog.prev.title}
                </Link>
              ) : (
                <div />
              )}

              {blog.next ? (
                <Link
                  className="flex flex-row items-center gap-x-2 font-serif hover:underline"
                  href={`/blog/${blog.next.slug}`}
                >
                  {blog.next.title} <ArrowRight className="size-5" strokeWidth={1} />
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}

          {blog.relatedBlogs.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-8 font-bold text-2xl">Related Blogs</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {blog.relatedBlogs.map((relatedPost) => (
                  <BlogCard blog={relatedPost} key={relatedPost.slug} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
