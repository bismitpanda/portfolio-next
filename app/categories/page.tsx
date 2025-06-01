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
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Categories</h1>
          <p className="body-lg text-muted-foreground">
            Browse blogs by topic to find exactly what you&apos;re looking for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCategoriesByCount.map((category) => (
            <Card
              key={category.slug}
              className="group border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-sm">{category.count} blogs</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
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
