import { formatDate } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Snippet } from "@/lib/content";

export function SnippetHeader({ snippet }: { snippet: Snippet }) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {snippet.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            {snippet.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {snippet.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-mono"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage
              src="/images/photo.png"
              className="size-full object-cover"
              alt="Bismit Panda"
            />
            <AvatarFallback>BP</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Bismit Panda</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Created {formatDate(snippet.date, "MMMM do, yyyy")}</span>
        </div>
      </div>
    </div>
  );
}
