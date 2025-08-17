import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { formatDate } from "date-fns";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { allPublishedBlogsByDate } from "@/lib/content";

export const alt = "Bismit Panda's Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return allPublishedBlogsByDate.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = allPublishedBlogsByDate.find((blog) => blog.slug === slug);

  if (!blog) {
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
      <div tw="text-lg text-gray-500">
        {`${formatDate(blog.date, "MMM d, yyyy")} • ${blog.readingTime}`}
      </div>
      <div tw="flex flex-col items-start justify-between">
        <div tw="text-[#aa6f1a] mb-6">Blog:</div>
        <div tw="font-bold mb-6">{blog.title}</div>
        <div tw="text-lg text-gray-500">{blog.excerpt}</div>
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
