import type { Metadata } from "next";
import { SnippetsPage } from "./_components/snippets-page";

export const metadata: Metadata = {
  title: "Code Snippets | Bismit Panda",
  description:
    "A collection of useful code snippets and patterns I frequently use in my projects.",
};

export default async function Page() {
  return <SnippetsPage />;
}
