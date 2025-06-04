import { allPublishedBlogsByDate } from "@/lib/content";
import { formatDate } from "date-fns";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

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

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blog = allPublishedBlogsByDate.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  const typewriter = await readFile(join(process.cwd(), "assets/Typewriter-Serial-Regular.ttf"));

  return new ImageResponse(
    (
      <div tw="text-6xl flex font-[Typewriter_Serial] w-full h-full relative bg-white">
        <div tw="flex flex-col w-full h-full justify-between p-10">
          <div tw="text-lg text-gray-500">
            {`${formatDate(blog.date, "MMM d, yyyy")} • ${blog.readingTime}`}
          </div>
          <div tw="flex flex-col items-start justify-between">
            <div tw="text-[#aa6f1a] mb-6">Blog:</div>
            <div tw="font-bold mb-6">{blog.title}</div>
            <div tw="text-lg text-gray-500">{blog.excerpt}</div>
          </div>
        </div>
      </div>
    ),
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
