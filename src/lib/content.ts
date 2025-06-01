import {
  allBlogs,
  allCategories,
  allProjects,
  allSnippets,
  allExperiences,
  type Blog,
  type Category,
  type Snippet,
  type Project,
  type Experience,
} from "../../.content-collections/generated";
import { compareDesc } from "date-fns";

export const allPublishedBlogsByDate = allBlogs
  .filter((blog) => !blog.draft)
  .toSorted((a, b) => compareDesc(a.date, b.date));

export const allCategoriesByCount = allCategories.toSorted((a, b) => b.count - a.count);

export const allProjectsByDate = allProjects.toSorted((a, b) => a.year - b.year);
export const allFeaturedProjects = allProjectsByDate.filter((project) => project.featured);
export const allHostedProjects = allProjectsByDate.filter(
  (project) => project.projectType === "hosted",
);
export const allGithubProjects = allProjectsByDate.filter(
  (project) => project.projectType === "github",
);

export const allSnippetsByDate = allSnippets.toSorted((a, b) => compareDesc(a.date, b.date));

export const allExperiencesByDate = allExperiences.toSorted((a, b) =>
  compareDesc(a.startDate, b.startDate),
);

export type { Blog, Category, Snippet, Project, Experience };
