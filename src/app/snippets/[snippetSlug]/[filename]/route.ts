import { NextResponse } from "next/server";
import { allSnippetsByDate } from "@/lib/content";

export function generateStaticParams() {
  return allSnippetsByDate.flatMap((snippet) =>
    snippet.codes.map((code) => ({
      snippetSlug: snippet.slug,
      filename: code.codeFile,
    })),
  );
}

export async function GET(
  _: Request,
  { params }: { params: Promise<{ snippetSlug: string; filename: string }> },
) {
  const { snippetSlug, filename } = await params;
  const snippet = allSnippetsByDate.find(
    (snippet) => snippet.slug === snippetSlug,
  );

  if (!snippet) {
    return NextResponse.json({ error: "Snippet not found" }, { status: 404 });
  }

  const snippetCode = snippet.codes.find((code) => code.codeFile === filename);

  if (!snippetCode) {
    return NextResponse.json({ error: "Code not found" }, { status: 404 });
  }

  return new NextResponse(snippetCode.code, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
