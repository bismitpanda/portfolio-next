import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";
import { readFileSync, writeFileSync } from "fs";
import { slug } from "github-slugger";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkWikiLink from "remark-wiki-link";
import { codeToHtml, ShikiTransformer } from "shiki";

const categories = defineCollection({
  name: "categories",
  directory: "content/categories",
  include: "*.json",
  parser: "json",
  schema: (z) => ({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
  }),
  transform: (data, context) => {
    const count = context
      .documents(blogs)
      .filter((blog) => !blog.draft && blog.category === data.name).length;
    return { ...data, count };
  },
});

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    image: z.string(),
    draft: z.boolean().default(false),
    previous: z.string().optional(),
  }),
  transform: async (_data, context) => {
    const { previous, ...data } = _data;
    const headings: { depth: number; value: string; slug: string }[] = [];

    const blogSlug = slug(data.title);
    const siblings = (await context.collection.documents()).filter(
      (blog) => !blog.draft && blog._meta.fileName != data._meta.fileName,
    );
    let next: { slug: string; title: string } | undefined = undefined;
    let prev: { slug: string; title: string } | undefined =
      previous === undefined
        ? undefined
        : {
            slug: previous,
            title: "",
          };

    for (const sibling of siblings) {
      if (sibling.previous && sibling.previous === blogSlug) {
        if (next !== undefined) {
          throw new Error(`Blog has multiple nexts: "${data.title}"`);
        }

        if (!sibling.draft) {
          next = { title: sibling.title, slug: slug(sibling.title) };
        }
      }

      if (prev && previous && slug(sibling.title) === previous) {
        if (sibling.draft) {
          prev = undefined;
        } else {
          prev.title = sibling.title;
        }
      }
    }

    const relatedBlogs = siblings
      .filter((blog) => blog.category === data.category)
      .slice(0, 3)
      .map((blog) => ({
        ...blog,
        slug: blogSlug,
        categorySlug: slug(blog.category),
      }));

    const time = readingTime(data.content).text;

    const html = await compileMDX(context, data, {
      remarkPlugins: [
        remarkMath,
        remarkGemoji,
        [remarkGfm, { singleTilde: false }],
        [
          ({ headingsRef }: { headingsRef: typeof headings }) =>
            (tree) => {
              for (const node of tree.children) {
                if (node.type === "heading") {
                  if (node.children.length !== 1 || node.children[0].type !== "text") {
                    throw new Error(`Invalid heading with depth ${node.depth} in "${data.title}"`);
                  }

                  headingsRef.push({
                    depth: node.depth,
                    value: node.children[0].value,
                    slug: slug(node.children[0].value),
                  });
                }
              }
            },
          { headingsRef: headings },
        ],
        [
          remarkWikiLink,
          {
            permalinks: siblings.map((sibling) => slug(sibling.title)),
            pageResolver: (title: string) => [slug(title)],
            hrefTemplate: (slug: string) => `/blog/${slug}`,
            wikiLinkClassName:
              "inline-block no-underline rounded-sm bg-blue-800/40 border-[1px] border-blue-800 text-blue-100 text-sm px-1 py-0.5 hover:bg-blue-800/60 transition-colors duration-200",
            newClassName:
              "inline-block rounded-sm bg-yellow-700/40 border-[1px] border-yellow-800 text-yellow-100 text-sm px-1 py-0.5 cursor-not-allowed hover:bg-yellow-700/60",
            aliasDivider: "|",
          },
        ],
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeKatex,
        [
          rehypeShiki,
          {
            theme: "material-theme-darker",
            transformers: [
              transformerNotationDiff(),
              transformerNotationHighlight(),
              transformerNotationFocus(),
              {
                pre(hast) {
                  hast.properties["data-meta"] = this.options.meta?.__raw;
                  hast.properties["data-code"] = this.source;
                  hast.properties["data-language"] = this.options.lang;
                },
                code(hast) {
                  hast.properties["data-line-numbers-max-digits"] =
                    this.lines.length.toString().length;
                },
              } satisfies ShikiTransformer,
            ],
            inline: "tailing-curly-colon",
          },
        ],
      ],
    });

    return {
      ...data,
      html,
      headings,
      slug: blogSlug,
      next,
      prev,
      categorySlug: slug(data.category),
      relatedBlogs,
      readingTime: time,
    };
  },
});

const snippets = defineCollection({
  name: "snippets",
  directory: "content/snippets",
  include: "*.json",
  parser: "json",
  schema: (z) => ({
    name: z.string(),
    description: z.string(),
    codeFile: z.string(),
    language: z.string(),
    date: z.coerce.date(),
  }),
  transform: async (data, { cache }) => {
    const code = readFileSync(`content/snippets/files/${data.codeFile}`).toString().trim();

    const html = await cache(
      { code },
      ({ code }) =>
        codeToHtml(code, {
          lang: data.language.toLowerCase(),
          theme: "material-theme-darker",
        }),
      { key: "__snippets" },
    );

    return { ...data, code, html };
  },
});

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.json",
  parser: "json",
  schema: (z) => ({
    title: z.string(),
    client: z.string(),
    role: z.string(),
    year: z.number(),
    description: z.string(),
    challenge: z.string(),
    solution: z.string(),
    technologies: z.string().array(),
    featuredImage: z.string(),
    projectType: z.enum(["hosted", "github"]),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
  transform: (data) => {
    if (data.projectType === "hosted" && !data.liveUrl) {
      throw new Error("Hosted project must have live url");
    }

    if (data.projectType === "github" && !data.githubUrl) {
      throw new Error("Github project must have github url");
    }

    return { ...data, slug: slug(data.title) };
  },
});

export default defineConfig({
  collections: [blogs, categories, snippets, projects],
});
