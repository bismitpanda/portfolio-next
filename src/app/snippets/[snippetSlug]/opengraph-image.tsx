import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { formatDate } from "date-fns";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { allSnippetsByDate } from "@/lib/content";

export const alt = "Bismit Panda's Snippet";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function generateStaticParams() {
  return allSnippetsByDate.map((snippet) => ({
    snippetSlug: snippet.slug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ snippetSlug: string }>;
}) {
  const { snippetSlug } = await params;

  const snippet = allSnippetsByDate.find(
    (snippet) => snippet.slug === snippetSlug,
  );

  if (!snippet) {
    notFound();
  }

  const typewriter = await readFile(
    join(process.cwd(), "assets/fonts/Typewriter-Serial-Regular.ttf"),
  );

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundColor: "white",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
        backgroundSize: "100px 100px",
        padding: "40px",
        fontFamily: "Typewriter Serial",
        fontWeight: 400,
        fontSize: "60px",
      }}
    >
      <div tw="text-xl text-gray-500 flex justify-start items-center">
        <span>{formatDate(snippet.date, "MMM d, yyyy")}</span>
        {snippet.codes.map((code) => (
          <span
            tw="text-gray-500 text-lg px-1.5 py-1 border-gray-500 border rounded-lg mx-1"
            key={code.language}
          >
            {code.language}
          </span>
        ))}
      </div>
      <div tw="flex flex-col items-start justify-between">
        <div tw="text-[#aa6f1a] mb-6">Snippet:</div>
        <div tw="font-bold mb-6">{snippet.name}</div>
        <div tw="text-2xl text-gray-500">{snippet.description}</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Typewriter Serial",
          data: typewriter,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
