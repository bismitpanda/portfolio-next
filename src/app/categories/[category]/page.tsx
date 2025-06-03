import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { allPublishedBlogsByDate, allCategoriesByCount } from "@/lib/content";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: _category } = await params;
  const category = allCategoriesByCount.find((c) => c.slug === _category);

  return {
    title: `${category?.name} | Bismit Panda's Blog`,
    description: category?.description,
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
          <Button asChild variant="ghost" className="group">
            <Link href="/categories" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>All Categories</span>
            </Link>
          </Button>
        </div>
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="heading-lg mb-4">{category.name}</h1>
          <p className="body-lg text-muted-foreground">{category.description}</p>
        </div>
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} blog={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No blogs found</h2>
            <p className="text-muted-foreground mb-8">There are no blogs in this category yet.</p>
            <Button asChild>
              <Link href="/blog">Browse All Blogs</Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
