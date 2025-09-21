import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { allSnippetsByDate } from "@/lib/content";
import { SnippetCode } from "./_components/code";
import { SnippetHeader } from "./_components/header";
import { SnippetSidebar } from "./_components/sidebar";

export const metadata: Metadata = {
  title: "Code Snippets | Bismit Panda",
  description:
    "A collection of useful code snippets and patterns I frequently use in my projects.",
};

export async function generateStaticParams() {
  return allSnippetsByDate.map((snippet) => ({
    snippetSlug: snippet.slug,
  }));
}

export default async function Page({
  params,
}: PageProps<"/snippets/[snippetSlug]">) {
  const { snippetSlug } = await params;
  const snippet = allSnippetsByDate.find(
    (snippet) => snippet.slug === snippetSlug,
  );

  if (!snippet) {
    notFound();
  }

  return (
    <div className="pt-20">
      <div className="container-custom section-spacing">
        <div className="mb-8">
          <Button asChild variant="ghost" className="group">
            <Link href="/snippets" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Snippets</span>
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <SnippetHeader snippet={snippet} />
            {snippet.codes.map((code) => (
              <SnippetCode
                key={code.language}
                snippet={code}
                slug={snippet.slug}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <SnippetSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
