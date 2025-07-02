import { CodeSnippetDialog } from "./_components/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allSnippetsByDate } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code Snippets | Bismit Panda",
  description: "Code Snippets",
};

export default function Page() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="heading-xl mb-6">Code Snippets</h1>
          <p className="body-lg text-muted-foreground">
            A collection of useful code snippets and patterns I frequently use in my projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allSnippetsByDate.map((snippet) => (
            <CodeSnippetDialog key={snippet.name} snippet={snippet}>
              <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg">
                <div className="grow p-6">
                  <h3 className="mb-2 flex items-center space-x-4 font-bold text-xl transition-colors group-hover:text-primary">
                    <span>{snippet.name}</span>
                    <div className="flex flex-row items-center justify-center gap-2">
                      {snippet.codes.slice(0, 2).map((code) => (
                        <Badge
                          className="bg-muted/50 font-mono"
                          key={code.language}
                          variant="outline"
                        >
                          {code.language}
                        </Badge>
                      ))}
                      {snippet.codes.length > 2 && (
                        <Badge className="bg-muted/50 font-mono" variant="outline">
                          +{snippet.codes.length - 2}
                        </Badge>
                      )}
                    </div>
                  </h3>
                  <p className="text-muted-foreground text-sm">{snippet.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <Button className="w-full" variant="outline">
                    View Snippet
                  </Button>
                </div>
              </div>
            </CodeSnippetDialog>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-muted-foreground">
            Looking for more code examples? Check out my projects and blog posts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
