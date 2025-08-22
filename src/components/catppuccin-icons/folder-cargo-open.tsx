import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderCargoOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1.8 7.9.69-2.7c.11-.44.51-.76.97-.76h11a1.003 1.003 0 0 1 .97 1.24l-.32 1.3m-9.1 6.5h-4c-.83 0-1.5-.67-1.5-1.5v-8.5c0-.55.45-1 1-1h5c.55 0 1 .45 1 1v1"
    />
    <path
      fill="none"
      stroke="#fab387"
      strokeLinejoin="round"
      strokeWidth={0.57}
      d="M8.285 11.432v2.291L12 15.715l3.715-1.992V9.142l-2.008-.857-3.715 1.693v.568ZM12 9.142l2.008.856v4.582m-5.723-3.088L12 13.484l3.715-1.992m-5.723-1.394L12 11.193l3.715-1.992m-5.723 1.395v3.984M12 11.193v4.283"
    />
  </svg>
);
export default SvgFolderCargoOpen;
