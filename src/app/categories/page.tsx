import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { allCategoriesByCount } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "All Categories | Bismit Panda's Blog",
  description: "All Categories",
};

export default function Page() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="heading-xl mb-6">Categories</h1>
          <p className="body-lg text-muted-foreground">
            Browse blogs by topic to find exactly what you&apos;re looking for.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allCategoriesByCount.map((category) => (
            <Card
              className="group border border-border bg-card transition-shadow hover:shadow-lg"
              key={category.slug}
            >
              <CardHeader className="pb-3">
                <CardTitle className="font-serif text-2xl transition-colors group-hover:text-primary flex items-center justify-between">
                  {category.name}{" "}
                  <Badge className="bg-muted/50 font-mono" variant="outline">
                    {category.count} {category.count > 1 ? "blogs" : "blog"}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href={`/categories/${category.slug}`}>View Blogs</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
