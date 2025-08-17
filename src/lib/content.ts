import { compareDesc } from "date-fns";
import {
  type Achievement,
  allAchievements,
  allBlogs,
  allCategories,
  allCertifications,
  allEducations,
  allExperiences,
  allProjects,
  allSnippets,
  type Blog,
  type Category,
  type Certification,
  type Education,
  type Experience,
  type Project,
  type Snippet,
} from "../../.content-collections/generated";

export const allPublishedBlogsByDate = allBlogs
  .filter((blog) => !blog.draft)
  .toSorted((a, b) => compareDesc(a.date, b.date));

export const allCategoriesByCount = allCategories.toSorted(
  (a, b) => b.count - a.count,
);

export const allProjectsByDate = allProjects.toSorted(
  (a, b) => a.year - b.year,
);
export const allFeaturedProjects = allProjectsByDate.filter(
  (project) => project.isFeatured,
);
export const allHostedProjects = allProjectsByDate.filter(
  (project) => project.projectType === "hosted",
);
export const allGithubProjects = allProjectsByDate.filter(
  (project) => project.projectType === "github",
);

export const allSnippetsByDate = allSnippets.toSorted((a, b) =>
  compareDesc(a.date, b.date),
);

export const allExperiencesByDate = allExperiences.toSorted((a, b) =>
  compareDesc(a.startDate, b.startDate),
);

export const allEducationsByDate = allEducations.toSorted((a, b) =>
  compareDesc(a.startDate, b.startDate),
);

export const allCertificationsByDate = allCertifications.toSorted((a, b) =>
  compareDesc(a.date, b.date),
);

export const allAchievementsByDate = allAchievements.toSorted((a, b) =>
  compareDesc(a.date, b.date),
);

export type {
  Blog,
  Category,
  Snippet,
  Project,
  Experience,
  Certification,
  Education,
  Achievement,
};
