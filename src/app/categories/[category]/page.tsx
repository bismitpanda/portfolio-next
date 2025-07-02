import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { allCategoriesByCount, allPublishedBlogsByDate } from "@/lib/content";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: _category } = await params;
  const category = allCategoriesByCount.find((c) => c.slug === _category);

  return {
    title: `${category?.name} | Bismit Panda's Blog`,
    description: category?.description,
    keywords: category?.name && [category.name, "blog", "bismit panda", "bismit"],
  };
}

export async function generateStaticParams() {
  return allCategoriesByCount.map((category) => ({ category: category.slug }));
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category: _category } = await params;
  const category = allCategoriesByCount.find((c) => c.slug === _category);

  if (!category) {
    notFound();
  }

  const filteredPosts = allPublishedBlogsByDate.filter(
    (post) => post.categorySlug === category.slug,
  );

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="mb-10">
          <Button asChild className="group" variant="ghost">
            <Link className="flex items-center gap-2" href="/categories">
              <ArrowLeft className="group-hover:-translate-x-1 h-4 w-4 transition-transform" />
              <span>All Categories</span>
            </Link>
          </Button>
        </div>
        <div className="mx-auto mb-16 max-w-3xl">
          <h1 className="heading-lg mb-4">{category.name}</h1>
          <p className="body-lg text-muted-foreground">{category.description}</p>
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
            <p className="mb-8 text-muted-foreground">There are no blogs in this category yet.</p>
            <Button asChild>
              <Link href="/blog">Browse All Blogs</Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
