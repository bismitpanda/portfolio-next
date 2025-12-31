import { formatDate } from "date-fns";
import { ArrowLeft, ArrowRight, Share2Icon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { Linkedin, XDark } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { allPublishedBlogsByDate } from "@/lib/content";
import { Mdx } from "./_components/mdx";
import { BlogSidebar } from "./_components/sidebar";
import { MobileTableOfContents } from "./_components/toc";

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const blog = allPublishedBlogsByDate.find((blog) => blog.slug === slug);

  return {
    title: `${blog?.title} | Bismit Panda's Blog`,
    description: blog?.excerpt,
    keywords: blog?.tags && [...blog.tags, "blog", "bismit panda", "bismit"],
  };
}

export async function generateStaticParams() {
  return allPublishedBlogsByDate.map((blog) => ({ slug: blog.slug }));
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const blog = allPublishedBlogsByDate.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  const path = `https://bismitpanda.com/blog/${blog.slug}`;

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

        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="mb-4 font-medium text-muted-foreground text-sm">
              {blog.tagSlugs.map((tagSlug, index) => (
                <Link key={tagSlug} href={`/tags/${tagSlug}`}>
                  <Badge variant="outline">{blog.tags[index]}</Badge>
                </Link>
              ))}{" "}
              • {formatDate(blog.date, "MMMM do, yyyy")} • {blog.readingTime}
            </div>
            <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  alt="Bismit Panda"
                  className="object-cover"
                  src="/images/photo.png"
                />
                <AvatarFallback>BP</AvatarFallback>
              </Avatar>
              <div>
                By <span className="font-medium">Bismit Panda</span>
              </div>
              <div className="grow" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Share2Icon className="size-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0">
                  <div className="flex flex-col">
                    <Link
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(path)}`}
                      className="flex flex-row items-center gap-2 p-4"
                    >
                      <Linkedin className="size-4" />
                    </Link>
                    <Link
                      href={`https://x.com/intent/post?url=${encodeURIComponent(path)}`}
                      className="flex flex-row items-center gap-2 p-4"
                    >
                      <XDark className="size-4" />
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="mb-12">
            <div className="aspect-16/9 overflow-hidden rounded-lg">
              <Image
                alt={blog.title}
                className="h-full w-full object-cover"
                height={600}
                src={`/images/blogs/${blog.slug}.png`}
                width={1200}
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="mb-4 font-semibold text-muted-foreground italic">
            {blog.excerpt}
          </div>

          <MobileTableOfContents headings={blog.headings} />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] relative gap-8">
            <div className="prose prose-lg min-w-0">
              <Mdx code={blog.html} />
            </div>
            <BlogSidebar headings={blog.headings} />
          </div>

          {(!!blog.next || !!blog.prev) && (
            <div className="mt-12 mb-16 flex w-full flex-row items-center justify-between border-t border-t-gray-500 pt-6">
              {blog.prev ? (
                <Link
                  className="flex flex-row items-center gap-x-2 font-serif hover:underline"
                  href={`/blog/${blog.prev.slug}`}
                >
                  <ArrowLeft className="size-5" strokeWidth={1} />{" "}
                  {blog.prev.title}
                </Link>
              ) : (
                <div />
              )}

              {blog.next ? (
                <Link
                  className="flex flex-row items-center gap-x-2 font-serif hover:underline"
                  href={`/blog/${blog.next.slug}`}
                >
                  {blog.next.title}{" "}
                  <ArrowRight className="size-5" strokeWidth={1} />
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
