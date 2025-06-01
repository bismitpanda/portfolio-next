import { allSnippetsByDate } from "@/lib/content";
import { NextResponse } from "next/server";

export function generateStaticParams() {
  return allSnippetsByDate.map((snippet) => ({
    filename: snippet.codeFile,
  }));
}

export async function GET(_: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  const snippet = allSnippetsByDate.find((snippet) => snippet.codeFile === filename);

  if (!snippet) {
    return NextResponse.json({ error: "Snippet not found" }, { status: 404 });
  }

  return new NextResponse(snippet.code, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
