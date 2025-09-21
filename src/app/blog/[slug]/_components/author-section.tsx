import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AuthorSection() {
  return (
    <div className="rounded-lg border bg-card border-border p-4">
      <p className="text-xl font-bold mb-2">About the author</p>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-start gap-4">
          <div className="size-10 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/photo.png"
              alt="Bismit Panda"
              className="size-full object-cover"
              height={40}
              width={40}
            />
          </div>
          <h3 className="font-bold font-serif text-xl">Bismit Panda</h3>
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">
            Full Stack Developer with a passion for typography and user
            experience. Writing about web development, design, and the
            intersection of technology and creativity.
          </p>

          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link href="/about">View Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
