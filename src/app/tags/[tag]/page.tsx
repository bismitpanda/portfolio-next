import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { allPublishedBlogsByDate, allTagsByCount } from "@/lib/content";

export async function generateMetadata({
  params,
}: PageProps<"/tags/[tag]">): Promise<Metadata> {
  const { tag: _tag } = await params;
  const tag = allTagsByCount.find((t) => t.slug === _tag);

  return {
    title: `${tag?.name} | Bismit Panda's Blog`,
    keywords: tag?.name && [tag.name, "blog", "bismit panda", "bismit"],
  };
}

export async function generateStaticParams() {
  return allTagsByCount.map((tag) => ({ tag: tag.slug }));
}

export default async function Page({ params }: PageProps<"/tags/[tag]">) {
  const { tag: _tag } = await params;
  const tag = allTagsByCount.find((t) => t.slug === _tag);

  if (!tag) {
    notFound();
  }

  const filteredPosts = allPublishedBlogsByDate.filter((post) =>
    post.tagSlugs.includes(tag.slug),
  );

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="mb-10">
          <Button asChild className="group" variant="ghost">
            <Link className="flex items-center gap-2" href="/tags">
              <ArrowLeft className="group-hover:-translate-x-1 h-4 w-4 transition-transform" />
              <span>All Tags</span>
            </Link>
          </Button>
        </div>
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="heading-lg mb-4">{tag.name}</h2>
        </div>
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard blog={post} key={post.slug} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <h2 className="mb-4 font-bold text-2xl">No blogs found</h2>
            <p className="mb-8 text-muted-foreground">
              There are no blogs with this tag yet.
            </p>
            <Button asChild>
              <Link href="/blog">Browse All Blogs</Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
