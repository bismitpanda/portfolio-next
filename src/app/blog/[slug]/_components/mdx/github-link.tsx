import { GitHubIcon } from "@/components/icons";
import Link from "next/link";

export function GithubLink({ owner, repo }: { owner: string; repo?: string }) {
  return (
    <Link
      href={`https://github.com/${owner}${repo ? `/${repo}` : ""}`}
      rel="noreferrer noopener"
      target="_blank"
      className="inline-flex gap-1.5 px-1.5 py-1 rounded-lg text-sm text-foreground/80 transition-colors items-center hover:text-accent-foreground hover:bg-accent bg-muted"
    >
      <span className="flex items-center gap-2">
        <GitHubIcon className="size-3.5" />
        {owner}
        {repo && `/${repo}`}
      </span>
    </Link>
  );
}
