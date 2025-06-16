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

export function FileTree({ tree }: { tree: Folder["children"] }) {
  return (
    <div className="flex w-full flex-col bg-muted/50 mt-6 text-muted-foreground rounded-lg">
      <div className="flex flex-1 flex-col gap-2 overflow-auto p-2">
        <div className="relative flex w-full min-w-0 flex-col p-2">
          <div className="w-full text-sm">
            <ul className="flex w-full min-w-0 flex-col gap-1">
              {tree.map((item, index) => (
                <Tree key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tree({ item }: { item: File | Folder }) {
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
      <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
        <CollapsibleTrigger asChild>
          <button className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition focus-visible:ring-2">
            <ChevronRight className="transition-transform w-4 h-4" />
            <Icon />
            {item.name}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="border-l ml-3.5 flex min-w-0 flex-col gap-1 px-2.5 py-0.5">
            {item.children.map((subItem, index) => (
              <Tree key={index} item={subItem} />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
}
