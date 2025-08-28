"use client";
import { useState } from "react";
import { getFileIcon, getFolderIcon } from "@/lib/catppuccin-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../file-tree-accordion";

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
              {sortedTree.map((item) => (
                <Tree
                  defaultOpen={defaultOpen}
                  item={item}
                  key={`${item.type}-${item.name}`}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tree({
  item,
  defaultOpen,
}: {
  item: File | Folder;
  defaultOpen?: boolean;
}) {
  const [value, onValueChange] = useState(
    defaultOpen ? `folder-${item.name}` : "",
  );

  if (item.type === "file") {
    const Icon = getFileIcon(item.name);
    return (
      <li>
        <button
          type="button"
          className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition focus-visible:ring-2"
        >
          <Icon />
          {item.name}
        </button>
      </li>
    );
  }

  const Icon = getFolderIcon(item.name, value !== "");

  return (
    <li className="group relative">
      <Accordion
        type="single"
        collapsible
        value={value}
        onValueChange={onValueChange}
        className="group/collapsible"
      >
        <AccordionItem value={`folder-${item.name}`}>
          <AccordionTrigger className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm font-sans justify-start">
            <Icon />
            {item.name}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="ml-3.5 flex min-w-0 flex-col gap-1 border-l px-2.5 py-0.5">
              {item.children.map((subItem) => (
                <Tree
                  defaultOpen={defaultOpen}
                  item={subItem}
                  key={`${subItem.name}-${subItem.type}`}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>
  );
}
