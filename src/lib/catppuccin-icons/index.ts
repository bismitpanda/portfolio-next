import { fileExtensions, fileNames } from "./file-icons";
import { folderNames } from "./folder-icons";
import { iconMap } from "./icon-map";
import type { IconName } from "./icons";

export const getFileIcon = (name: string) =>
  iconMap[
    (fileNames[name] ??
      fileExtensions[name.split(".").pop() ?? ""] ??
      "_file") as IconName
  ];

export const getFolderIcon = (name: string, isOpen: boolean) =>
  isOpen
    ? iconMap[`${folderNames[name] ?? "_folder"}_open` as IconName]
    : iconMap[(folderNames[name] ?? "_folder") as IconName];
