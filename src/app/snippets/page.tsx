import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { allSnippetsByDate } from "@/lib/content";
import { CodeSnippetDialog } from "./_components/dialog";

export const metadata: Metadata = {
  title: "Code Snippets | Bismit Panda",
  description:
    "A collection of useful code snippets and patterns I frequently use in my projects.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ display?: string }>;
}) {
  const { display } = await searchParams;

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="heading-xl mb-6">Code Snippets</h1>
          <p className="body-lg text-muted-foreground">
            A collection of useful code snippets and patterns I frequently use
            in my projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allSnippetsByDate.map((snippet) => (
            <CodeSnippetDialog
              key={snippet.slug}
              snippet={snippet}
              open={display === snippet.slug}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-muted-foreground">
            Looking for more code examples? Check out my projects and blog
            posts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild>
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
