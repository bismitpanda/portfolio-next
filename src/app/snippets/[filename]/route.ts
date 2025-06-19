import { allSnippetsByDate } from "@/lib/content";
import { NextResponse } from "next/server";

export function generateStaticParams() {
  return allSnippetsByDate.flatMap((snippet) =>
    snippet.codes.map((code) => ({
      filename: code.codeFile,
    })),
  );
}

export async function GET(_: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  const snippet = allSnippetsByDate
    .flatMap((snippet) => snippet.codes)
    .find((code) => code.codeFile === filename);

  if (!snippet) {
    return NextResponse.json({ error: "Snippet not found" }, { status: 404 });
  }

  return new NextResponse(snippet.code, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
