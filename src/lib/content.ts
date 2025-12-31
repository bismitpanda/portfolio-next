import { compareDesc } from "date-fns";
import { slug } from "github-slugger";
import {
  type Achievement,
  allAchievements,
  allBlogs,
  allCertifications,
  allEducations,
  allExperiences,
  allProjects,
  allSnippets,
  type Blog,
  type Certification,
  type Education,
  type Experience,
  type Project,
  type Snippet,
} from "../../.content-collections/generated";

export const allPublishedBlogsByDate = allBlogs
  .filter((blog) => !blog.draft)
  .toSorted((a, b) => compareDesc(a.date, b.date));

export const allTagsByCount = (() => {
  const slugCache = new Map<string, string>();
  const tags = new Map<string, { name: string; slug: string; count: number }>();

  for (const blog of allBlogs) {
    for (const tagName of blog.tags) {
      let tagSlug = slugCache.get(tagName);

      if (!tagSlug) {
        tagSlug = slug(tagName);
        slugCache.set(tagName, tagSlug);
      }

      const existing = tags.get(tagSlug);
      if (existing) {
        existing.count++;
      } else {
        tags.set(tagSlug, {
          name: tagName,
          slug: tagSlug,
          count: 1,
        });
      }
    }
  }

  return [...tags.values()].toSorted((a, b) => b.count - a.count);
})();

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
  Snippet,
  Project,
  Experience,
  Certification,
  Education,
  Achievement,
};
