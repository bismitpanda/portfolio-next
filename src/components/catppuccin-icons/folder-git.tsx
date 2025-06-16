import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderGit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#fab387"
        d="M10.5 10.5v3m-.75-4.75L8 7m4.75 4.75-1.5-1.5m-.75 5.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </g>
  </svg>
);
export default SvgFolderGit;
