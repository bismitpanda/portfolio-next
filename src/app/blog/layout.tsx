import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Bismit Panda's Blog",
  description: "All Blogs",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
