import { Button } from "@/components/ui/button";
import { allCategoriesByCount } from "@/lib/content";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function CategoryNotFound() {
  return (
    <div className="pt-20">
      <div className="container-custom min-h-[70vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="heading-xl mb-4">404</h1>
          <h2 className="heading-md mb-6">Category Not Found</h2>

          <p className="body-lg text-muted-foreground mb-8">
            We couldn&apos;t find the category you&apos;re looking for. It might have been renamed
            or removed, or perhaps you followed an outdated link.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/categories" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span>All Categories</span>
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
            <h3 className="text-xl font-bold mb-6">Popular Categories</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {allCategoriesByCount.slice(0, 3).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="cursor-pointer"
                >
                  <Button variant="outline" className="rounded-full cursor-pointer">
                    {category.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
