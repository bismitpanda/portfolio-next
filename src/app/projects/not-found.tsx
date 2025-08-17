import { ArrowLeft, FolderClosed, Home } from "lucide-react";
import Link from "next/link";
import { GithubDark } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <div className="pt-20">
      <div className="container-custom flex min-h-[70vh] items-center justify-center">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative mx-auto mb-8 h-40 w-40">
            <div className="absolute inset-0 animate-pulse rounded-full bg-muted/30 opacity-25" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-muted/50">
              <FolderClosed className="h-20 w-20 text-muted-foreground" />
            </div>
          </div>

          <h1 className="heading-xl mb-4">404</h1>
          <h2 className="heading-md mb-6">Project Not Found</h2>

          <p className="body-lg mb-8 text-muted-foreground">
            This project seems to be missing from our portfolio. It might be
            under development, archived, or perhaps it never existed in the
            first place.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link className="flex items-center gap-2" href="/projects">
                <ArrowLeft className="h-4 w-4" />
                <span>All Projects</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link className="flex items-center gap-2" href="/">
                <Home className="h-4 w-4" />
                <span>Go Home</span>
              </Link>
            </Button>
          </div>

          <div className="mt-16 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 text-left">
              <h3 className="mb-4 font-bold text-xl">GitHub Projects</h3>
              <p className="mb-4 text-muted-foreground">
                Check out my open source work
              </p>
              <Button asChild className="w-full" size="sm" variant="outline">
                <Link
                  className="flex items-center justify-center gap-2"
                  href="#"
                >
                  <GithubDark className="h-4 w-4" />
                  <span>GitHub Profile</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
