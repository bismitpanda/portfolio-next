import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allPublishedBlogsByDate, allCategoriesByCount } from "@/lib/content";
import { formatDate } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allCategoriesByCount.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: _category } = await params;
  const category = allCategoriesByCount.find((c) => c.slug === _category);

  if (!category) {
    notFound();
  }

  const filteredPosts = allPublishedBlogsByDate.filter((post) => post.category === category.name);

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
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="hover:scale-[1.02] transition-transform block rounded-lg overflow-hidden bg-neutral-900"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    <Badge variant="outline">{post.category}</Badge> •{" "}
                    {formatDate(post.date, "MMMM do, yyyy")}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No articles found</h2>
            <p className="text-muted-foreground mb-8">
              There are no articles in this category yet.
            </p>
            <Button asChild>
              <Link href="/blog">Browse All Articles</Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
