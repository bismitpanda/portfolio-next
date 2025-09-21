import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function SnippetSidebar() {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-medium font-sans mb-4">About the Author</h3>
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="size-10">
            <AvatarImage
              src="/images/photo.png"
              className="size-full object-cover"
              alt="Bismit Panda"
            />
            <AvatarFallback>BP</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium font-serif text-xl">Bismit Panda</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Full Stack Developer with 5+ years of experience. Passionate about
          React, TypeScript, and clean code.
        </p>
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link href="/about">View Profile</Link>
        </Button>
      </div>
    </div>
  );
}
