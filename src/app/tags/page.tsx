import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { allTagsByCount } from "@/lib/content";

export const metadata: Metadata = {
  title: "All Tags | Bismit Panda's Blog",
  description: "All Tags",
};

export default function Page() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="heading-xl mb-6">Tags</h1>
          <p className="body-lg text-muted-foreground">
            Browse blogs by topic to find exactly what you&apos;re looking for.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allTagsByCount.map((tag) => (
            <Card
              className="group border border-border bg-card transition-shadow hover:shadow-lg"
              key={tag.slug}
            >
              <CardHeader className="pb-3">
                <CardTitle className="font-serif text-2xl transition-colors group-hover:text-primary flex items-center justify-between">
                  {tag.name}{" "}
                  <Badge className="bg-muted/50 font-mono" variant="outline">
                    {tag.count} {tag.count > 1 ? "blogs" : "blog"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href={`/tags/${tag.slug}`}>View Blogs</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
