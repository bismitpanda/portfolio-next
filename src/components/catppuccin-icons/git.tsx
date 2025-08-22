import type { SVGProps } from "react";
import * as React from "react";

const SvgGit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M8.5 10.5a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m0-6a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m3 3a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m-4-2v4m-1-6-1-1m4 4-1-1"
      />
      <path
        stroke="#fab387"
        d="m9.06 1.06 5.88 5.88a1.5 1.5 0 0 1 0 2.12l-5.88 5.88a1.5 1.5 0 0 1-2.12 0L1.06 9.06a1.5 1.5 0 0 1 0-2.12l5.88-5.88a1.5 1.5 0 0 1 2.12 0"
      />
    </g>
  </svg>
);
export default SvgGit;
