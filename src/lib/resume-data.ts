import {
  allAchievementsByDate,
  allCertificationsByDate,
  allEducationsByDate,
  allExperiencesByDate,
  allFeaturedProjects,
  type Achievement,
  type Certification,
  type Education,
  type Experience,
  type Project,
} from "@/lib/content";

export interface ResumeData {
  personalInfo: {
    name: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    website: string;
  };
  technologies: {
    languages: string;
    softwareAndFrameworks: string;
  };
  aboutMe: string;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
  certifications: Certification[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Bismit Panda",
    location: "Gandhinagar, Gujarat",
    email: "contact@bismitpanda.com",
    phone: "+91 8280016000",
    linkedin: "https://www.linkedin.com/in/bismit-panda-5432a824a/",
    website: "https://bismitpanda.com",
  },
  aboutMe:
    "I am Bismit Panda, a pre-final year B.Tech Computer Science student with a specialization in Cyber Security at Rashtriya Raksha University. Skilled in Java, Python, C++, C, Rust, Golang, and web technologies, I have made projects in image manipulation, management systems, and interactive games.",
  technologies: {
    languages: "Rust, C++, C, Python, Java, HTML, CSS, JS, SQL, Golang, React",
    softwareAndFrameworks: "Microsoft SQL Server, MATLAB, NextJS, Django",
  },
  projects: allFeaturedProjects,
  experience: allExperiencesByDate,
  education: allEducationsByDate,
  achievements: allAchievementsByDate,
  certifications: allCertificationsByDate,
};
