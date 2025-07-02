import { catppuccinIcons } from "@/components/catppuccin-icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { fileExtensions, fileNames, folderNames } from "@/lib/catppuccin-icons";
import { ChevronRight } from "lucide-react";

type File = {
  type: "file";
  name: string;
};

type Folder = {
  type: "folder";
  name: string;
  children: (File | Folder)[];
};

interface FileTreeProps {
  tree: (File | Folder)[];
  defaultOpen?: boolean;
}

function sortTree(items: (File | Folder)[]): (File | Folder)[] {
  return items
    .map((item) => ({
      ...item,
      ...(item.type === "folder" ? { children: sortTree(item.children) } : {}),
    }))
    .sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === "folder" ? -1 : 1;
      }
      return a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
}

export function FileTree({ tree, defaultOpen = false }: FileTreeProps) {
  const sortedTree = sortTree(tree);

  return (
    <div className="mt-6 flex w-full flex-col rounded-lg bg-muted/50 text-muted-foreground">
      <div className="flex flex-1 flex-col gap-2 overflow-auto p-2">
        <div className="relative flex w-full min-w-0 flex-col p-2">
          <div className="w-full text-sm">
            <ul className="flex w-full min-w-0 flex-col gap-1">
              {sortedTree.map((item, index) => (
                <Tree defaultOpen={defaultOpen} item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tree({ item, defaultOpen }: { item: File | Folder; defaultOpen?: boolean }) {
  if (item.type === "file") {
    const Icon =
      catppuccinIcons[
        fileNames[item.name] ?? fileExtensions[item.name.split(".").pop() ?? ""] ?? "_file"
      ];
    return (
      <button className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition focus-visible:ring-2">
        <Icon />
        {item.name}
      </button>
    );
  }

  const Icon = catppuccinIcons[folderNames[item.name] ?? "_folder"];

  return (
    <li className="group relative">
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={defaultOpen}
      >
        <CollapsibleTrigger asChild>
          <button className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition focus-visible:ring-2">
            <ChevronRight className="h-4 w-4 transition-transform" />
            <Icon />
            {item.name}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="ml-3.5 flex min-w-0 flex-col gap-1 border-l px-2.5 py-0.5">
            {item.children.map((subItem) => (
              <Tree
                defaultOpen={defaultOpen}
                item={subItem}
                key={`${subItem.name}-${subItem.type}`}
              />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
}
