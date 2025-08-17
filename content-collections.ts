import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki, { type RehypeShikiOptions } from "@shikijs/rehype";
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import { compareDesc } from "date-fns";
import { readFile } from "fs/promises";
import { slug } from "github-slugger";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { codeToHtml, type ShikiTransformer } from "shiki";
import { z } from "zod/v4";

const categorySchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
});

type Headings = { depth: number; value: string; slug: string }[];

const blogSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  image: z.string(),
  draft: z.boolean().default(false),
  previous: z.string().optional(),
});

const snippetSchema = z.object({
  name: z.string(),
  description: z.string(),
  codes: z.array(
    z.object({
      language: z.string(),
      codeFile: z.string(),
    }),
  ),
  date: z.coerce.date(),
});

const projectSchema = z.object({
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
  isFeatured: z.boolean().default(false),
  gallery: z.string().array().default([]),
});

const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  description: z.string(),
  highlights: z.string().array(),
});

const educationSchema = z.object({
  title: z.string(),
  institution: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  description: z.string(),
  achievements: z.string().array(),
});

const certificationSchema = z.object({
  title: z.string(),
  provider: z.string(),
  description: z.string().array(),
  date: z.coerce.date(),
  validity: z.number().optional(),
  link: z.string(),
  verificationLink: z.string().optional(),
});

const achievementSchema = z.object({
  title: z.string(),
  description: z.string().array(),
  date: z.coerce.date(),
  organization: z.string(),
});

const categories = defineCollection({
  name: "categories",
  directory: "content/categories",
  include: "*.yml",
  parser: "yaml",
  schema: categorySchema,
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
  schema: blogSchema,
  transform: async (_data, context) => {
    const { previous, ...data } = _data;
    const headings: Headings = [];

    const blogSlug = slug(data.title);
    const allSiblings = await context.collection.documents();
    const siblings = allSiblings.filter(
      (blog) => !blog.draft && blog._meta.fileName != data._meta.fileName,
    );
    let next: { slug: string; title: string } | undefined;
    const prev: { slug: string; title: string } | undefined =
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

        next = { title: sibling.title, slug: slug(sibling.title) };
      }

      if (prev && previous && slug(sibling.title) === previous) {
        prev.title = sibling.title;
      }
    }

    const relatedBlogs = siblings
      .filter((blog) => blog.category === data.category)
      .toSorted((a, b) => compareDesc(a.date, b.date))
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
                  if (
                    node.children.length !== 1 ||
                    node.children[0].type !== "text"
                  ) {
                    throw new Error(
                      `Invalid heading with depth ${node.depth} in "${data.title}"`,
                    );
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
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeKatex,
        [
          rehypeShiki,
          {
            theme: "vitesse-dark",
            transformers: [
              transformerNotationDiff(),
              transformerNotationHighlight(),
              transformerNotationFocus(),
              transformerNotationErrorLevel(),
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
          } satisfies RehypeShikiOptions,
        ],
      ],
    });

    const cachedHeadings = await context.cache(
      { content: data.content, _meta: data._meta },
      () => headings,
      {
        key: "__headings",
      },
    );

    return {
      ...data,
      html,
      headings: cachedHeadings,
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
  include: "*.yml",
  parser: "yaml",
  schema: snippetSchema,
  transform: async (data, { cache }) => {
    const codes = [];
    const snippetSlug = slug(data.name);

    for (const code of data.codes) {
      const codeContent = (
        await readFile(
          `content/snippets/files/${snippetSlug}/${code.codeFile}`,
          "utf-8",
        )
      ).trim();
      const html = await cache(
        { code },
        ({ code }) =>
          codeToHtml(codeContent, {
            lang: code.language.toLowerCase(),
            theme: "vitesse-dark",
            meta: {
              "data-show-line-numbers": "true",
            },
          }),
        { key: "__snippets" },
      );
      codes.push({
        html,
        code: codeContent,
        ...code,
      });
    }

    return { ...data, slug: snippetSlug, codes };
  },
});

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.yml",
  parser: "yaml",
  schema: projectSchema,
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

const experiences = defineCollection({
  name: "experiences",
  directory: "content/experiences",
  include: "*.yml",
  parser: "yaml",
  schema: experienceSchema,
  transform: (data) => {
    return { ...data, isOnGoing: data.endDate === undefined };
  },
});

const certifications = defineCollection({
  name: "certifications",
  directory: "content/certifications",
  include: "*.yml",
  parser: "yaml",
  schema: certificationSchema,
});

const education = defineCollection({
  name: "education",
  directory: "content/education",
  include: "*.yml",
  parser: "yaml",
  schema: educationSchema,
  transform: (data) => {
    return { ...data, isOnGoing: data.endDate === undefined };
  },
});

const achievements = defineCollection({
  name: "achievements",
  directory: "content/achievements",
  include: "*.yml",
  parser: "yaml",
  schema: achievementSchema,
});

export default defineConfig({
  collections: [
    blogs,
    categories,
    snippets,
    projects,
    experiences,
    certifications,
    education,
    achievements,
  ],
});
