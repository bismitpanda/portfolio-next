import { Button } from "@/components/ui/button";
import { ArrowLeft, FolderClosed, Home, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="pt-20">
      <div className="container-custom min-h-[70vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-8 mx-auto w-40 h-40">
            <div className="absolute inset-0 bg-muted/30 rounded-full animate-pulse opacity-25"></div>
            <div className="relative bg-muted/50 rounded-full w-full h-full flex items-center justify-center">
              <FolderClosed className="h-20 w-20 text-muted-foreground" />
            </div>
          </div>

          <h1 className="heading-xl mb-4">404</h1>
          <h2 className="heading-md mb-6">Project Not Found</h2>

          <p className="body-lg text-muted-foreground mb-8">
            This project seems to be missing from our portfolio. It might be under development,
            archived, or perhaps it never existed in the first place.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/projects" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span>All Projects</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Go Home</span>
              </Link>
            </Button>
          </div>

          <div className="mt-16 gap-6">
            <div className="bg-card border border-border p-6 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-4">GitHub Projects</h3>
              <p className="text-muted-foreground mb-4">Check out my open source work</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="#" className="flex items-center justify-center gap-2">
                  <Github className="h-4 w-4" />
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
