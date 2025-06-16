import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderGitlab = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <path
        stroke="#fab387"
        strokeLinecap="square"
        d="m12 15.5 3.5-2.515-1-4.485-1.5 2h-2l-1.5-2-1 4.485z"
      />
    </g>
  </svg>
);
export default SvgFolderGitlab;
