import {
  allBlogs,
  allCategories,
  allProjects,
  allSnippets,
  allExperiences,
  allEducations,
  allCertifications,
  type Blog,
  type Category,
  type Snippet,
  type Project,
  type Experience,
  type Education,
  type Certification,
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

export const allEducationsByDate = allEducations.toSorted((a, b) =>
  compareDesc(a.startDate, b.startDate),
);

export const allCertificationsByDate = allCertifications.toSorted((a, b) =>
  compareDesc(a.date, b.date),
);

export type { Blog, Category, Snippet, Project, Experience, Certification, Education };
