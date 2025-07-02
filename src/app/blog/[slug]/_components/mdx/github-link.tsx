import { GithubDark } from "@/components/icons";
import Link from "next/link";

export function GithubLink({ owner, repo }: { owner: string; repo?: string }) {
  return (
    <Link
      className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-1.5 py-1 text-foreground/80 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
      href={`https://github.com/${owner}${repo ? `/${repo}` : ""}`}
      rel="noreferrer noopener"
      target="_blank"
    >
      <span className="flex items-center gap-2">
        <GithubDark className="size-3.5" />
        {owner}
        {repo && `/${repo}`}
      </span>
    </Link>
  );
}
