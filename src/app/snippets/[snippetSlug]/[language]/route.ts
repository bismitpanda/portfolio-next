import { type NextRequest, NextResponse } from "next/server";
import { allSnippetsByDate } from "@/lib/content";

export function generateStaticParams() {
  return allSnippetsByDate.flatMap((snippet) =>
    snippet.codes.map((code) => ({
      snippetSlug: snippet.slug,
      language: code.language,
    })),
  );
}

export async function GET(
  request: NextRequest,
  { params }: RouteContext<"/snippets/[snippetSlug]/[language]">,
) {
  const { snippetSlug, language } = await params;
  const download = request.nextUrl.searchParams.get("download");

  const snippet = allSnippetsByDate.find(
    (snippet) => snippet.slug === snippetSlug,
  );

  if (!snippet) {
    return NextResponse.json({ error: "Snippet not found" }, { status: 404 });
  }

  const snippetCode = snippet.codes.find((code) => code.language === language);

  if (!snippetCode) {
    return NextResponse.json({ error: "Code not found" }, { status: 404 });
  }

  return new NextResponse(snippetCode.content, {
    headers: {
      "Content-Type": "text/plain",
      ...(download && {
        "Content-Disposition": `attachment; filename=${snippet.slug}.${language}`,
      }),
    },
  });
}
