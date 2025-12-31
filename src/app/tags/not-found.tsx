import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { allTagsByCount } from "@/lib/content";

export default function TagNotFound() {
  return (
    <div className="pt-20">
      <div className="container-custom flex min-h-[70vh] items-center justify-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="heading-xl mb-4">404</h1>
          <h2 className="heading-md mb-6">Tag Not Found</h2>

          <p className="body-lg mb-8 text-muted-foreground">
            We couldn&apos;t find the tag you&apos;re looking for. It might have
            been renamed or removed, or perhaps you followed an outdated link.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link className="flex items-center gap-2" href="/tags">
                <ArrowLeft className="h-4 w-4" />
                <span>All Tags</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link className="flex items-center gap-2" href="/">
                <Home className="h-4 w-4" />
                <span>Go Home</span>
              </Link>
            </Button>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 font-bold text-xl">Popular Tags</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allTagsByCount.slice(0, 3).map((tag) => (
                <Link
                  className="cursor-pointer"
                  href={`/tags/${tag.slug}`}
                  key={tag.slug}
                >
                  <Button
                    className="cursor-pointer rounded-full"
                    variant="outline"
                  >
                    {tag.name}
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
