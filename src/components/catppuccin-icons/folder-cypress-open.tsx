import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderCypressOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="m1.87 8 .7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#a6e3a1"
        d="M11 12.157a1.41 1.41 0 0 1-1.387.403c-.637-.168-1.091-.763-1.112-1.457s.396-1.32 1.022-1.53a1.41 1.41 0 0 1 1.476.374M14.5 12.5l-1.5-3m.5 6 2-6"
      />
    </g>
  </svg>
);
export default SvgFolderCypressOpen;
